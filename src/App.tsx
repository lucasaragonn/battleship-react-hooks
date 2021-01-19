import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { GameProvider } from './components/GameContext';
import Menu from 'components/Menu';
import Settings from 'components/Settings';
import Battleship from './components/Battleship';

function App() {
  return (
    <GameProvider>
      <Switch>
        <Route exact path="/">
          <Menu
            items={[
              { text: 'Play', link: '/game' },
              { text: 'Settings', link: '/settings' },
            ]}
          />
        </Route>
        <Route path="/settings">
          <Settings />
        </Route>
        <Route path="/game">
          <Battleship />
        </Route>
      </Switch>
    </GameProvider>
  );
}

export default App;
