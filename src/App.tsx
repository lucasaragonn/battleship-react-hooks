import React from 'react';
import Battleship from './components/Battleship';
import { GameProvider } from './components/GameContext';

function App() {
  return (
    <GameProvider>
      <Battleship />
    </GameProvider>
  );
}

export default App;
