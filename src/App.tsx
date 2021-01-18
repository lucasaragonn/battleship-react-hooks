import React, { useContext } from 'react';
import { Switch, Route } from 'react-router-dom';
import { GameContext, GameProvider } from './components/GameContext';
import useGame from 'components/hooks/useGame';
import GameOver from 'components/GameOver';
import Menu from 'components/Menu';
import Settings from 'components/Settings';
import Won from 'components/Won';
import Battleship from './components/Battleship';

function App() {
  const { battleField, turns } = useGame();
  return (
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
        <Settings turns={turns} />
      </Route>
      <Route path="/game">
        <Battleship battleField={battleField} turns={turns} />
      </Route>
      <Route path="/game-over">
        <GameOver />
      </Route>
      <Route path="/won">
        <Won />
      </Route>
    </Switch>
  );
}

export default App;
