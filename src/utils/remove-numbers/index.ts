import global from 'global';
import { GRID } from 'typings';
import { copyGrid, getRandomIndex, solveGrid } from 'utils';


/**
 * Removes numbers from a full grid to create a Sudoku Puzzle.
 * @param grid 9X9 Sudoku Grid
 * @param attempts number of attempts to solve (higher means more difficult) -- default 5
 * @returns 
 */

function removeNumbers(grid: GRID, attempts = 5): GRID {
  while (attempts > 0) {
    let row = getRandomIndex();
    let col = getRandomIndex();

    while(grid[row][col] === 0) {
      row = getRandomIndex();
      col = getRandomIndex();
    }

    const backup = grid[row][col];
    grid[row][col] = 0;

    const gridCopy = copyGrid(grid);
    // set a global counter
    global.counter = 0;
    // attempt to solve the grid
    solveGrid(grid);
    if (global.counter !== 1) {
      grid[row][col] = backup;
      attempts--;
    }

    // if global counter is not 1
    //    grid[row][col] = backup
    //    decrement attempts
  }
  return grid;
}

export default removeNumbers;