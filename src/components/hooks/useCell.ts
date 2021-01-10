import { useContext, useState } from 'react';
import { GameContext } from 'components/GameContext';
import { ICell } from 'components/Cell';

interface IUpdateParams {
  status: number;
}

const useCell = (item: ICell) => {
  const [state, setState] = useContext(GameContext); // add typing here
  const [cell, setCell] = useState(item);

  const updateCell = ({ status }: IUpdateParams) => {
    setCell({ ...cell, status });
    // const x = position[0];
    // const y = position[1];
    // let tmpBattlefield = state.battleField;
    // tmpBattlefield[x][y] = {
    //   ...tmpBattlefield[x][y],
    //   status,
    // };
    // setState({ ...state, battleField: tmpBattlefield });
  };

  return { updateCell, cell, state };
};

export default useCell;
