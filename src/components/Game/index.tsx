import React from 'react';
import Cell from 'components/Cell';
import classnames from 'classnames';
import styles from './index.module.scss';

interface GameProps {
  battleField: []; // create inteface
  disabled: boolean;
  status: 'won' | 'gameOver' | undefined;
}

const Game = ({ battleField, disabled, status }: GameProps) => {
  const classes = classnames({
    [styles.battleField]: true,
    [styles.gameDisabled]: disabled,
  });

  console.log(status);

  return (
    <div className={classes}>
      {/* El modal va aca */}
      {/* se puede mover a un componente  */}
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
