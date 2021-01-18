import React, { useContext, useState } from 'react';
import Panel from 'components/Panel';
import { GameContext } from 'components/GameContext';
import Game from '../Game';
import styles from './index.module.scss';

const Battleship = ({ battleField, turns }: any) => {
  const [state, setState] = useContext(GameContext);
  return (
    <div className={styles.gameContainer}>
      <Panel turns={turns} ships={state.remainingShips} />
      <Game disabled={state.finished} battleField={battleField} />
    </div>
  );
};

export default Battleship;
