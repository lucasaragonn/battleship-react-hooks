import { useContext, useEffect } from 'react';
import { GameContext } from 'components/GameContext';
import { CELL_STATUS, gameSetup, ships } from 'gameUtils';

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

  function updateBattleShip(battleField, id, shipId) {
    const { x, y } = getRandomCoordinates();
    let direction = getRandomDirection();
    const { size } = ships[shipId];
    console.log(size);

    if (outOfBounds([x, y], size, direction)) {
      return updateBattleShip(battleField, id, shipId);
    }

    // insert ships
    for (let i = 0; i < size; i++) {
      if (direction === 'right') {
        if (positionNotFree(battleField[x + i][y])) {
          return updateBattleShip(battleField, id, shipId);
        }
        battleField[x + i][y] = { status: CELL_STATUS.SHIP, id: id };
      } else {
        if (positionNotFree(battleField[x][y + i])) {
          return updateBattleShip(battleField, id, shipId);
        }
        battleField[x][y + i] = { status: CELL_STATUS.SHIP, id: id };
      }
    }
    return battleField;

    function getRandomCoordinates() {
      const x = Math.floor(Math.random() * 10);
      const y = Math.floor(Math.random() * 10);

      return { x, y };
    }

    function getRandomDirection() {
      const directions = ['right', 'down'];
      const random = Math.floor(Math.random() * directions.length);
      return directions[random];
    }

    function outOfBounds(start, shipSize, direction) {
      let max = 9;
      if (direction === 'right') {
        return start[0] + shipSize - 1 > max;
      }
      return start[1] + shipSize - 1 > max;
    }

    function positionNotFree({ status }) {
      return status !== null;
    }
  }

  return { state };
};

export default useGame;
