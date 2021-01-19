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
  const [remainingShips, setRemainingShips] = useState(0);
  const [state, setState] = useContext(GameContext);
  const [settingsFromStorage, setSettingsFromStorage] = useLocalStorageState(
    'settings',
    null
  );

  const { battleField, finished, settings } = state;

  const checkGameStatus = () => {
    let gameStatus;
    if (remainingShips <= 0 && finished) {
      gameStatus = 'won';
    } else if (settings.turns <= 0 && remainingShips > 0 && finished) {
      gameStatus = 'gameOver';
    } else {
      gameStatus = undefined;
    }
    return gameStatus;
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
      settings: settingsFromStorage ? settingsFromStorage : settings,
    });
  }, []);

  useEffect(() => {
    if (state.battleFieldShips !== null) {
      const ships = getRemainingShips(state.battleFieldShips);

      setRemainingShips(ships);

      if (
        ships <= 0 ||
        (settings.turns <= 0 && ships > 0 && !settings.easyMode)
      ) {
        setTimeout(() => {
          setState({ ...state, finished: true });
        }, 100);
      }
    }
  }, [settings.turns]);

  return {
    battleField,
    settings,
    finished,
    remainingShips,
    checkGameStatus,
  };
};

export default useGame;
