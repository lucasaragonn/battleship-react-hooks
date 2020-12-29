import { useContext, useEffect } from 'react';
import { GameContext } from 'components/GameContext';

const useCell = () => {
  const [state, setState] = useContext(GameContext);

  const onClick = () => {
    console.log('cell clicked !');
  };

  return { state, setState, onClick };
};

export default useCell;
