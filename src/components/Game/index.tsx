import React from 'react';
import { useHistory } from 'react-router-dom';
import { IModalContent, statusTypes } from 'components/interfaces';
import Map from 'components/Map';
import classnames from 'classnames';
import styles from './game.module.scss';

interface GameProps {
  battleField: [][];
  disabled: boolean;
  status: statusTypes;
}

const Modal = ({ content }: IModalContent) => {
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
  const classes = classnames({
    [styles.game]: true,
    [styles.gameDisabled]: disabled,
  });

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
