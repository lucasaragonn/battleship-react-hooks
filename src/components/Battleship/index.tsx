import React from 'react';
import Panel from 'components/Panel';
import Game from '../Game';
import useGame from 'components/hooks/useGame';
import styles from './battleship.module.scss';

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
