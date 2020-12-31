import React from 'react';
import useCell from 'components/hooks/useCell';
import { getNextStatus } from 'gameUtils';
import styles from './index.module.scss';

interface ICell {
  id: number;
  status: number | null;
  position?: [number, number];
}

interface CellProps {
  item: ICell;
}

const Cell = ({ item }: CellProps) => {
  const { updateCell } = useCell();

  const onClick = (cell: ICell) => {
    const newStatus = getNextStatus(cell.status);
    if (cell.status !== newStatus) {
      updateCell({ status: newStatus, position: cell.position });
    }
  };

  return (
    <div className={styles.cell} onClick={() => onClick(item)}>
      <div className="status">{item.id}</div>
    </div>
  );
};

export default Cell;
