import { useContext, useEffect } from 'react';
import { GameContext } from 'components/GameContext';
import { gameSetup, updateBattleShip } from 'gameUtils';

const useGame = () => {
  const [state, setState] = useContext(GameContext);

  useEffect(() => {
    let { battleField } = state;
    let tmpBattleFieldShips = {};
    let tmpBattlefield = [...battleField];

    for (let [, ship] of Object.entries(gameSetup)) {
      const { id, shipId } = ship;
      tmpBattlefield = updateBattleShip(tmpBattlefield, id, shipId);

      tmpBattleFieldShips = {
        ...tmpBattleFieldShips,
        [id]: {
          id,
          hits: 0,
          isSunk: false,
          shipId,
        },
      };
    }

    setState({
      ...state,
      battleField: tmpBattlefield,
      battleFieldShips: tmpBattleFieldShips,
      turns: 20,
    });
  }, []);

  useEffect(() => {
    const { battleFieldShips } = state;

    const filteredNotSunk =
      battleFieldShips !== null &&
      Object.entries(battleFieldShips)
        .map((item) => item[1])
        .filter((bs: any) => bs.isSunk === false);

    if (filteredNotSunk.length <= 0) {
      setTimeout(() => {
        setState({ ...state, finished: true });
      }, 100);
      console.log('you won');
      return;
    }

    if (state.turns <= 0 && filteredNotSunk.length > 0) {
      setTimeout(() => {
        return setState({ ...state, finished: true });
      }, 100);
      console.log('game over');
      return;
    }
  }, [state.battleFieldShips]);

  return { state };
};

export default useGame;
