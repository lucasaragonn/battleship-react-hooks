export interface IShip {
  name: 'submarine' | 'destroyer' | 'carrier' | 'aircraft';
  size: 1 | 2 | 3 | 4;
}

export interface IMap {}

/*
  interface IMap: array of arrays with these allowed values: null | 'ship'
  [
    [null, 'ship', 'ship', 'ship', null, null, null, null, null, null],
    [null, 'null, null, null, null, null, null, null, null, null],
    [null, 'null, null, null, null, null, null, null, null, null],
    [null, 'null, null, null, null, null, null, null, null, null],
    [null, 'null, null, null, null, null, null, null, null, null],
    [null, 'null, null, null, null, null, null, null, null, null],
    [null, 'null, null, null, null, null, null, null, null, null],
    [null, 'null, null, null, null, null, null, null, null, null],
    [null, 'null, null, null, null, null, null, null, null, null],
    [null, 'null, null, null, null, null, null, null, null, null],
  ]

*/
