import { NUMBERS, SQUARE } from 'typings';

interface IInput {
  square: SQUARE;
  value: NUMBERS;  
}
/**
 * A funciton that returns true if the value is alrady being used in the current grid square. 
 * @param input Object with 3X3 Square and value.
 * @returns 
 */
function isInSquare({ square, value}: IInput): boolean {
  return [...square[0], ...square[1], ...square[2]].includes(value);
}

export default isInSquare;