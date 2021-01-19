import React, { createContext, useState } from 'react';
import { createMap, ships } from 'gameUtils';

interface IProviderProps {
  children: React.ReactNode;
}

export const defaultState = {
  battleField: createMap(),
  ships,
  battleFieldShips: null,
  finished: false,
  settings: { easyMode: false, turns: 20 },
};

const GameContext = createContext(null);

const GameProvider = ({ children }: IProviderProps) => {
  const [state, setState] = useState({ ...defaultState });

  return (
    <GameContext.Provider value={[state, setState]}>
      {children}
    </GameContext.Provider>
  );
};

export { GameProvider, GameContext };
