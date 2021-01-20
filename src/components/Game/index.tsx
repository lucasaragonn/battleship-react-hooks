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

const Modal = ({ content }: { content: string }) => {
  const history = useHistory();
  return (
    <div className={styles.modal}>
      <h1>{content}</h1>
      <div className={styles.buttons}>
        <button onClick={() => history.go(0)}>Play Again</button>
        <button onClick={() => history.push('/')}>Main Menu</button>
      </div>
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
      {status === 'won' && <Modal content="You Win !" />}
      {status === 'gameOver' && <Modal content="Game Over" />}
      <div className={classes}>
        <Map data={battleField} />
      </div>
    </>
  );
};

export default Game;
