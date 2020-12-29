import React from 'react';
import useCell from 'components/hooks/useCell';
import styles from './index.module.scss';

interface GameProps {
  battleField: []; // create inteface
}

const Game = ({ battleField }: GameProps) => {
  const { state, setState, onClick } = useCell();
  const onCellClick = () => {
    onClick();
  };
  return (
    <div className={styles.battleField}>
      {battleField.map((row: any, i: number) => {
        return (
          <div className={styles.row} key={i}>
            {row.map((cell: any, j: number) => {
              return (
                <div key={j}>
                  <div className={styles.cell}>
                    <p>{cell.id}</p>
                  </div>
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
