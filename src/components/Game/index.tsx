import React from 'react';
import styles from './index.module.scss';
import Cell from 'components/Cell';

interface GameProps {
  battleField: []; // create inteface
}

const Game = ({ battleField }: GameProps) => {
  return (
    <div className={styles.battleField}>
      {battleField.map((row: any, i: number) => {
        return (
          <div className={styles.row} key={i}>
            {row.map((cell: any, j: number) => {
              return (
                <div key={j}>
                  <Cell item={cell} />
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

export default Game;
