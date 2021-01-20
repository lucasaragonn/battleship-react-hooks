import React from 'react';
import Cell from 'components/Cell';
import styles from './map.module.scss';

interface MapProps {
  data: [];
}

const Map = ({ data }: MapProps) => {
  return (
    <div className={styles.battleField}>
      <div className={styles.row}>
        {data.map((row: any, i: number) => {
          return (
            <div style={{ display: 'flex' }} key={i}>
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
    </div>
  );
};

export default Map;
