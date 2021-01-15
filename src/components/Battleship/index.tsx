import React from 'react';
import useGame from 'components/hooks/useGame';
import Game from '../Game';
import styles from './index.module.scss';

interface PanelProps {
  turns: number;
  ships: number;
}

const Panel = ({ turns, ships }: PanelProps) => {
  return (
    <div>
      <h1>{turns}</h1>
      <h3>Ships remaining: {ships}</h3>
    </div>
  );
};

const Battleship = () => {
  const { state, remainingShips } = useGame();

  return (
    <div className={styles.gameContainer}>
      <Panel turns={state.turns} ships={remainingShips} />
      <Game disabled={state.finished} battleField={state.battleField} />
    </div>
  );
};

export default Battleship;
