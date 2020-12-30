import React, { useState } from 'react';
import { CELL_STATUS } from 'gameUtils';
import styles from './index.module.scss';

interface ICell {
  id: number;
  status: number | null;
}

const Cell = ({ item }: { item: ICell }) => {
  const onClick = (cell: ICell) => {
    // get new status using const newStatus = updateToNewStatus(currentStatus)
    // compare currentStatus to newStatus then call
    // onCellUpdate or not
  };

  return (
    <div className={styles.cell} onClick={() => onClick(item)}>
      <div className="status">{item.id}</div>
    </div>
  );
};

export default Cell;
