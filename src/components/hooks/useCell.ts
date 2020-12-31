import { useContext } from 'react';
import { GameContext } from 'components/GameContext';

type statusTypes = 1 | 2 | 3 | 4;

interface IUpdateParams {
  status: statusTypes;
  position: [number, number];
}

const useCell = () => {
  const [state, setState] = useContext(GameContext);

  const updateCell = ({ status, position }: IUpdateParams) => {
    let tmpBattlefield = state.battleField;

    tmpBattlefield[position[0]][position[1]] = {
      ...tmpBattlefield[position[0]][position[1]],
      status,
    };

    setState({ ...state, battleField: tmpBattlefield });
  };

  return { state, updateCell };
};

export default useCell;
