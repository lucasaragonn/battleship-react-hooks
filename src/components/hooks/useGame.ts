import { useContext, useEffect } from 'react';
import { GameContext } from 'components/GameContext';
import { gameSetup, ships, updateBattleShip } from 'gameUtils';

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
          hits: ships[shipId].size,
          isSunk: false,
        },
      };
    }

    setState({
      ...state,
      battleField: tmpBattlefield,
      battleFieldShips: tmpBattleFieldShips,
    });
  }, []);

  //   Plan B for update battleShips
  // const battleFieldShips = state;

  // useEffect(() => {
  //   console.log(battleFieldShips);
  // }, [battleFieldShips]);
  return { state };
};

export default useGame;
