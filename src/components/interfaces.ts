export interface IShip {
  name: 'submarine' | 'destroyer' | 'carrier' | 'aircraft';
  size: 1 | 2 | 3 | 4;
}
export interface ICell {
  id: number;
  status: number;
  position?: [number, number];
}
export interface ship {
  id: number;
  hits: number;
  isSunk: boolean;
  shipId: number;
}
export interface IBattleFieldShips {
  [key: string]: ship;
}
export interface IShips {
  [key: string]: { id: number; name: string; size: number };
}
export interface ISettings {
  easyMode: boolean;
  turns: number;
}
export interface IModalContent {
  content: string;
}
export interface IState {
  battleField: [][];
  ships: IShips;
  battleFieldShips: IBattleFieldShips | null;
  finished: boolean;
  settings: ISettings;
}
export type statusTypes = 'won' | 'gameOver' | undefined;
