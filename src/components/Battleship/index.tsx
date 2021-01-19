import React from 'react';
import Panel from 'components/Panel';
import Game from '../Game';
import styles from './index.module.scss';
import useGame from 'components/hooks/useGame';

const Battleship = () => {
  const { battleField, settings, finished, remainingShips } = useGame();

  return (
    <div className={styles.gameContainer}>
      <Panel turns={settings.turns} ships={remainingShips} />
      <Game disabled={finished} battleField={battleField} />
    </div>
  );
};

export default Battleship;
