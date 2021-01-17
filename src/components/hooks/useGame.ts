import { useContext, useEffect, useState } from 'react';
import { GameContext } from 'components/GameContext';
import {
  createMap,
  gameSetup,
  getRemainingShips,
  updateBattleShip,
} from 'gameUtils';

const useGame = () => {
  const [state, setState] = useContext(GameContext);
  const [remainingShips, setRemainingShips] = useState(0);

  const { battleField, turns, finished } = state;

  useEffect(() => {
    let tmpBattleFieldShips = {};
    let tmpBattlefield = [...createMap()];

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
    const ships = getRemainingShips(state.battleFieldShips);
    setRemainingShips(ships);

    if (ships <= 0 || (state.turns <= 0 && ships > 0)) {
      setTimeout(() => {
        setState({ ...state, finished: true });
      }, 100);
    }
  }, [state.turns]);

  return { battleField, turns, finished, remainingShips };
};

export default useGame;
