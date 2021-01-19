import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import Map from 'components/Map';
import classnames from 'classnames';
import styles from './game.module.scss';
import { GameContext } from 'components/GameContext';

interface GameProps {
  battleField: [];
  disabled: boolean;
  status: 'won' | 'gameOver' | undefined;
}

const Won = () => {
  const history = useHistory();
  return (
    <div className={styles.won}>
      <h1>You Win!</h1>
      <button onClick={() => history.push('/')}>Main Menu</button>
    </div>
  );
};

const GameOver = () => {
  const history = useHistory();
  return (
    <div className={styles.gameOver}>
      <h1>Game Over</h1>
      <button onClick={() => history.go(0)}>Try Again</button>
      <button onClick={() => history.push('/')}>Main Menu</button>
    </div>
  );
};

const Game = ({ battleField, disabled, status }: GameProps) => {
  const [state, setState] = useContext(GameContext);

  const classes = classnames({
    [styles.game]: true,
    [styles.gameDisabled]: disabled,
  });

  console.log(status);

  return (
    <>
      {status === 'won' && <Won />}
      {status === 'gameOver' && <GameOver />}
      <div className={classes}>
        <Map data={battleField} />
      </div>
    </>
  );
};

export default Game;
