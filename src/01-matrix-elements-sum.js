/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  const depth = matrix.length;
  let result = 0;

  matrix[0].forEach((el, index) => {
    if (el !== 0) {
      result += el;
      for (let depthCount = 1; depthCount < depth; depthCount++) {
        if (matrix[depthCount][index] === 0) {
          break;
        } else {
          result += matrix[depthCount][index];
        }
      }
    }
  });
  return result;
}

module.exports = getMatrixElementsSum;
