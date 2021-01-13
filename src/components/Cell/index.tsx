import React, { useContext, useEffect, useState } from 'react';
import { CELL_STATUS, getNextStatus } from 'gameUtils';
import { GameContext } from 'components/GameContext';
import classNames from 'classnames';
import styles from './index.module.scss';

export interface ICell {
  id: number;
  status: number;
  position?: [number, number];
}

export interface CellProps {
  item: ICell;
}

const Cell = ({ item }: CellProps) => {
  const [cell, setCell] = useState<ICell>(item);
  const [sunk, setSunk] = useState<boolean>(false);
  const [state, setState] = useContext(GameContext); // think to separate battleShips to different global state

  useEffect(() => {
    setCell(item);
  }, [item]);

  useEffect(() => {
    if (state.battleFieldShips !== null) {
      const { id } = cell;
      const { shipId } = state.battleFieldShips[id];

      const currentHits = state.battleFieldShips[id].hits + 1;
      const size = state.ships[shipId].size;

      let tmpBattleFieldShips;

      if (currentHits === size) {
        tmpBattleFieldShips = {
          ...state.battleFieldShips,
          [id]: { ...state.battleFieldShips[id], isSunk: true },
        };
      } else {
        tmpBattleFieldShips = {
          ...state.battleFieldShips,
          [id]: { ...state.battleFieldShips[id], hits: currentHits },
        };
      }
      setState({ ...state, battleFieldShips: tmpBattleFieldShips });
    }
  }, [cell.status === CELL_STATUS.HIT]);

  useEffect(() => {
    if (
      state.battleFieldShips !== null &&
      state.battleFieldShips[cell.id] !== undefined
    ) {
      if (state.battleFieldShips[cell.id].isSunk) {
        setSunk(true);
      }
    }
  }, [state.battleFieldShips]);

  useEffect(() => {
    console.log('sunk!');
  }, [sunk]); // seria aqui esto ? o mas del game ?

  const onClick = (c: ICell) => {
    const newStatus = getNextStatus(c.status);
    if (c.status !== newStatus) {
      setCell({ ...cell, status: newStatus }); // add callback here to decrease state.turns
      setState({ ...state, turns: state.turns - 1 }); // this is wrong
    }
  };

  const classes = classNames({
    [styles.cell]: true,
    [styles.miss]: cell.status === CELL_STATUS.MISS,
    [styles.hit]: cell.status === CELL_STATUS.HIT && !sunk,
    [styles.sunk]: sunk,
  });

  return (
    <div className={classes} onClick={() => onClick(cell)}>
      <div className="status">{cell.id}</div>
    </div>
  );
};

export default Cell;
