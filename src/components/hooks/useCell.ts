import { useContext, useEffect, useState } from 'react';
import { GameContext } from 'components/GameContext';
import { ICell } from 'components/Cell';
import { CELL_STATUS } from 'gameUtils';

type statusTypes = 1 | 2 | 3 | 4;

interface IUpdateParams {
  status: statusTypes;
  position: [number, number];
}

const useCell = (item: ICell) => {
  const [state, setState] = useContext(GameContext); // add typing here
  const [cell, setCell] = useState<ICell>(item);

  useEffect(() => {
    console.log(`this element was hitted`);
    // if this position was hit, then check for ship hits
    // if sunk,then update isSunk in battleShips
  }, [item.status === CELL_STATUS.HIT]);

  const updateCell = ({ status, position }: IUpdateParams) => {
    let tmpBattlefield = state.battleField;

    tmpBattlefield[position[0]][position[1]] = {
      ...tmpBattlefield[position[0]][position[1]],
      status,
    };

    setState({ ...state, battleField: tmpBattlefield });
  };

  return { state, updateCell, cell };
};

export default useCell;
