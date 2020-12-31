import React from 'react';
import useCell from 'components/hooks/useCell';
import { getNextStatus } from 'gameUtils';
import classNames from 'classnames';
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

  const classes = classNames({
    [styles.cell]: true,
    [styles.miss]: item.status === 2,
    [styles.hit]: item.status === 3,
    [styles.sunk]: item.status === 4,
  });

  return (
    <div className={classes} onClick={() => onClick(item)}>
      <div className="status"></div>
    </div>
  );
};

export default Cell;
