import { useContext, useEffect } from 'react';
import { GameContext } from 'components/GameContext';
import { gameSetup, ships, updateBattleShip } from 'gameUtils';

const useGame = () => {
  const [state, setState] = useContext(GameContext); // game, setGame

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
    /// DEJAR LINDO ESTO POR DIO
    const { battleFieldShips } = state;

    const filtered =
      battleFieldShips !== null &&
      Object.entries(battleFieldShips)
        .map((item) => item[1])
        .filter((bs: any) => bs.isSunk === false);

    if (state.turns <= 0 && battleFieldShips && filtered.length > 0) {
      setTimeout(() => {
        alert('Game Over!');
        return setState({ ...state, finished: true });
      }, 500);
    } else {
      if (filtered.length <= 0) {
        setTimeout(() => {
          alert('You Won!');
          return setState({ ...state, finished: true });
        }, 500);
      }
    }
  }, [state.battleFieldShips]);

  return { state };
};

export default useGame;
