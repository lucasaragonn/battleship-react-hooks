import { useContext, useEffect } from 'react';
import { GameContext } from 'components/GameContext';
import { gameSetup, ships, updateBattleShip } from 'gameUtils';

const useGame = () => {
  const [state, setState] = useContext(GameContext);

  useEffect(() => {
    let { battleField, battleFieldShips } = state;
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

  // Check for sunk ships
  useEffect(() => {
    console.log(
      'check for sunk ships in some game setup with shiId as key and hits as value',
      'setSunk() isSunk Bool'
    );
  }, [state]); // TODO: allow state.battleField as dep

  return { state };
};

export default useGame;
