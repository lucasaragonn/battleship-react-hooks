import React, { useState } from 'react';
import styles from './index.module.scss';

interface ICell {
  id: number;
  status: number | null;
}

const Cell = ({ item }: { item: ICell }) => {
  // const [status, setStatus] = useState(null);

  const onClick = (cell: ICell) => console.log(cell.status);

  return (
    <div className={styles.cell} onClick={() => onClick(item)}>
      <div className="status">{item.id}</div>
    </div>
  );
};

export default Cell;
