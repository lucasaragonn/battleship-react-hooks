import React from 'react';
import Cell from 'components/Cell';
import classnames from 'classnames';
import styles from './index.module.scss';

interface GameProps {
  battleField: []; // create inteface
  disabled: boolean;
}

const Game = ({ battleField, disabled }: GameProps) => {
  const classes = classnames({
    [styles.battleField]: true,
    [styles.gameDisabled]: disabled,
  });

  return (
    <div className={classes}>
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
