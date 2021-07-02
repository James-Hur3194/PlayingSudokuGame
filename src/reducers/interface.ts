import { BLOCK_COORDS, GRID } from 'typings';

export interface IReducer {
  challengeGrid?: GRID;
  //grid?: GRID;
  selectedBlock?: BLOCK_COORDS;
  solvedGrid?: GRID;
  workingGrid?: GRID;
}