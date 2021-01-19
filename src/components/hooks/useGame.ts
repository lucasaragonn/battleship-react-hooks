import { useContext, useEffect, useState } from 'react';
import { GameContext } from 'components/GameContext';
import {
  createMap,
  gameSetup,
  getRemainingShips,
  updateBattleShip,
} from 'gameUtils';
import useLocalStorageState from './useLocalStorage';

const useGame = () => {
  // TODO: BORRAR EL HOOK Y USAR LOCALSTORAGE DIRECTO
  const [remainingShips, setRemainingShips] = useState(0);
  const [state, setState] = useContext(GameContext);
  const [value, setValue] = useLocalStorageState('turns', '');

  const { battleField, turns, finished } = state;

  const getTurns = () => {
    let t;
    if (value) {
      t = value;
    } else {
      t = turns;
    }
    return t;
  };

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
      turns: getTurns(),
    });
  }, []);

  useEffect(() => {
    if (state.battleFieldShips !== null) {
      const ships = getRemainingShips(state.battleFieldShips);

      setRemainingShips(ships);

      if (ships <= 0 || (state.turns <= 0 && ships > 0)) {
        setTimeout(() => {
          setState({ ...state, finished: true });
        }, 100);
      }
    }
  }, [state.turns]);

  useEffect(() => {
    console.log(remainingShips <= 0 ? 'you won' : 'gameover');
  }, [state.finished === true]);

  return { battleField, turns, finished, remainingShips };
};

export default useGame;
