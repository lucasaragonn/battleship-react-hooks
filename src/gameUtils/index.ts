export const CELL_STATUS = {
  WATER: null,
  SHIP: 1,
  MISS: 2,
  HIT: 3,
  SUNK: 4,
  asdf: 444,
};

export const createMap = () => {
  const cols = 9;
  const rows = 9;
  let map = [];
  for (let i = 0; i <= rows; i++) {
    map[i] = [];
    for (let j = 0; j <= cols; j++) {
      map[i][j] = { status: CELL_STATUS.WATER, id: null, position: [i, j] };
    }
  }
  return map;
};

export const ships = {
  '1': { id: 1, name: 'Submarine', size: 1 },
  '2': { id: 2, name: 'Destroyer', size: 2 },
  '3': { id: 3, name: 'Carrier', size: 3 },
  '4': { id: 4, name: 'Aircraft', size: 4 },
};

export const gameSetup = {
  '10': { id: 10, shipId: 1 },
  '9': { id: 9, shipId: 1 },
  '8': { id: 8, shipId: 1 },
  '7': { id: 7, shipId: 1 },
  '6': { id: 6, shipId: 2 },
  '5': { id: 5, shipId: 2 },
  '4': { id: 4, shipId: 2 },
  '3': { id: 3, shipId: 3 },
  '2': { id: 2, shipId: 3 },
  '1': { id: 1, shipId: 4 },
};

// GAME UTILS
const getRandomCoordinates = () => {
  const x = Math.floor(Math.random() * 10);
  const y = Math.floor(Math.random() * 10);

  return { x, y };
};

const getRandomDirection = () => {
  const directions = ['right', 'down'];
  const random = Math.floor(Math.random() * directions.length);
  return directions[random];
};

const outOfBounds = (start, shipSize, direction) => {
  let max = 9;
  if (direction === 'right') {
    return start[0] + shipSize - 1 > max;
  }
  return start[1] + shipSize - 1 > max;
};

const positionNotFree = ({ status }) => {
  return status !== null;
};

export const getRemainingShips = (battleFieldShips) => {
  const remainingShips =
    battleFieldShips !== null &&
    Object.entries(battleFieldShips)
      .map((item) => item[1])
      .filter((bs: any) => bs.isSunk === false); // create interface for { isSunk: boolean }

  return remainingShips.length;
};

export const updateBattleShip = (battleField, id, shipId) => {
  const { x, y } = getRandomCoordinates();
  let direction = getRandomDirection();
  const { size } = ships[shipId];

  if (outOfBounds([x, y], size, direction)) {
    return updateBattleShip(battleField, id, shipId);
  }

  // insert ships // TODO FIX DUPLICATE CONDITION
  for (let i = 0; i < size; i++) {
    if (direction === 'right') {
      if (positionNotFree(battleField[x + i][y])) {
        return updateBattleShip(battleField, id, shipId);
      }
      battleField[x + i][y] = {
        status: CELL_STATUS.SHIP,
        id: id,
        position: [x + i, y],
      };
    } else {
      if (positionNotFree(battleField[x][y + i])) {
        return updateBattleShip(battleField, id, shipId);
      }
      battleField[x][y + i] = {
        status: CELL_STATUS.SHIP,
        id: id,
        position: [x, y + i],
      };
    }
  }
  return battleField;
};

export const getNextStatus = (currentStatus: number | null) => {
  switch (currentStatus) {
    case CELL_STATUS.WATER:
      return CELL_STATUS.MISS;
    case CELL_STATUS.SHIP:
      return CELL_STATUS.HIT;
    case CELL_STATUS.MISS:
      return CELL_STATUS.MISS;
    case CELL_STATUS.HIT:
      return CELL_STATUS.HIT;
    case CELL_STATUS.SUNK:
      return CELL_STATUS.SUNK;
    default:
      break;
  }
  return CELL_STATUS.WATER;
};
