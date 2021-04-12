/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  const result = [];

  matrix.forEach((line, lineInd) => {
    const lineArr = [];

    line.forEach((el, elInd) => {
      let count = 0;

      if (matrix[lineInd][elInd + 1] === true) count++;
      if (matrix[lineInd][elInd - 1] === true) count++;
      if (lineInd === 0) {
        if (matrix[lineInd + 1][elInd] === true) count++;
        if (matrix[lineInd + 1][elInd + 1] === true) count++;
        if (matrix[lineInd + 1][elInd - 1] === true) count++;
      } else if (lineInd === matrix.length - 1) {
        if (matrix[lineInd - 1][elInd] === true) count++;
        if (matrix[lineInd - 1][elInd + 1] === true) count++;
        if (matrix[lineInd - 1][elInd - 1] === true) count++;
      } else if (lineInd !== 0 && lineInd !== matrix.length - 1) {
        if (matrix[lineInd + 1][elInd] === true) count++;
        if (matrix[lineInd + 1][elInd + 1] === true) count++;
        if (matrix[lineInd + 1][elInd - 1] === true) count++;
        if (matrix[lineInd - 1][elInd] === true) count++;
        if (matrix[lineInd - 1][elInd + 1] === true) count++;
        if (matrix[lineInd - 1][elInd - 1] === true) count++;
      }
      lineArr.push(count);
    });
    result.push(lineArr);
  });
  return result;
}

module.exports = minesweeper;
