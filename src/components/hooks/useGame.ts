import { useContext, useEffect, useState } from 'react';
import { GameContext } from 'components/GameContext';
import { useHistory } from 'react-router-dom';

import {
  createMap,
  gameSetup,
  getRemainingShips,
  updateBattleShip,
} from 'gameUtils';
import useLocalStorageState from './useLocalStorage';

const useGame = () => {
  const [remainingShips, setRemainingShips] = useState(0);
  const [state, setState] = useContext(GameContext);
  const [storage, setStorage] = useLocalStorageState('settings', ''); // CHANGE FOR SETTINGS
  const history = useHistory();

  const { battleField, settings, finished } = state;

  const getTurns = () => {
    let parsedStorage = JSON.parse(storage);
    let t;
    if (parsedStorage.turns) {
      t = parsedStorage.turns;
    } else {
      t = settings.turns;
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

    setRemainingShips(getRemainingShips(tmpBattleFieldShips));

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

      if (ships <= 0 || (state.settings.turns <= 0 && ships > 0)) {
        setTimeout(() => {
          setState({ ...state, finished: true });
        }, 100);
      }
    }
  }, [state.settings.turns]);

  useEffect(() => {
    if (state.finished === true) {
      console.log('ended');
    }
  }, [state.finished]);

  return {
    battleField,
    settings: JSON.parse(storage) || state.settings,
    finished,
    remainingShips,
  };
};

export default useGame;
