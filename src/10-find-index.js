/**
 * Given a sorted array, find the index of the element with the given value.
 * Time complexity should be O(logN)
 *
 * @param {Array} array
 * @param {Number} value
 * @return {Number}
 *
 * @example
 * For ([1, 2, 3], 1) should return 0
 * For ([1, 2, 3], 2) should return 1
 *
 */
function findIndex(array, value) {
  let firstInd = 0;
  let lastInd = array.length - 1;

  while (firstInd <= lastInd) {
    const middleInd = Math.floor((firstInd + lastInd) / 2);
    if (value === array[middleInd]) return middleInd;
    if (value < array[middleInd]) lastInd = middleInd - 1;
    if (value > array[middleInd]) firstInd = middleInd + 1;
  }
  return -1;
}

module.exports = findIndex;
