import { useContext, useEffect } from 'react';
import { GameContext } from 'components/GameContext';
import { gameSetup, updateBattleShip } from 'gameUtils';

const useGame = () => {
  const [state, setState] = useContext(GameContext);

  useEffect(() => {
    let { battleField } = state;
    let tmpBattlefield = [...battleField];

    for (let [key, ship] of Object.entries(gameSetup)) {
      const { id, shipId } = ship;
      tmpBattlefield = updateBattleShip(tmpBattlefield, id, shipId);
    }
    setState({ ...state, battleField: tmpBattlefield });
  }, []);

  // TODO: create useEffect to check/set SUNK ship when a cell status changed

  const onCellUpdate = () => null;

  return { state, onCellUpdate };
};

export default useGame;
