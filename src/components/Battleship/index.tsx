import React from 'react';
import useGame from 'components/hooks/useGame';
import Game from '../Game';
import styles from './index.module.scss';

const Battleship = () => {
  const { state } = useGame();
  return (
    <div className={styles.gameContainer}>
      {/* Panel HERE: Count y barquitos*/}
      <h1>{state.turns}</h1>
      <Game disabled={state.finished} battleField={state.battleField} />
    </div>
  );
};

export default Battleship;
