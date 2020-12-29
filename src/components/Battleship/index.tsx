import React from 'react';
import useGame from 'components/hooks/useGame';
import Game from '../Game';
import styles from './index.module.scss';

const Battleship = () => {
  const { state } = useGame();
  return (
    <div className={styles.gameContainer}>
      <Game battleField={state.battleField} />
    </div>
  );
};

export default Battleship;
