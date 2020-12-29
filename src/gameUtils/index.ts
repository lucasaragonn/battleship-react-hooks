export const CELL_STATUS = {
  WATER: null,
  SHIP: 1,
  MISS: 2,
  HIT: 3,
  SUNK: 4,
};

export const createMap = () => {
  const cols = 9;
  const rows = 9;
  let map = [];
  for (let i = 0; i <= rows; i++) {
    map[i] = [];
    for (let j = 0; j <= cols; j++) {
      map[i][j] = { status: CELL_STATUS.WATER, id: null };
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
