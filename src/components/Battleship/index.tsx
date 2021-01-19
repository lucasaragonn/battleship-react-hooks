import React from 'react';
import Panel from 'components/Panel';
import Game from '../Game';
import styles from './index.module.scss';
import useGame from 'components/hooks/useGame';

const Battleship = () => {
  const {
    battleField,
    finished,
    settings,
    remainingShips,
    checkGameStatus,
  } = useGame();

  let gameStatus = checkGameStatus();

  return (
    <div className={styles.gameContainer}>
      <Panel settings={settings} ships={remainingShips} />
      <Game status={gameStatus} disabled={finished} battleField={battleField} />
    </div>
  );
};

export default Battleship;
