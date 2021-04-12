/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  const sortArr = [];
  const result = [];
  let minusCount = 0;

  arr.forEach((el) => {
    if (el !== -1) sortArr.push(el);
  });

  sortArr.sort((a, b) => a - b);

  arr.forEach((el, index) => {
    if (el === -1) {
      minusCount++;
      result.push(el);
    }
    if (el !== -1) {
      result.push(sortArr[index - minusCount]);
    }
  });
  return result;
}

module.exports = sortByHeight;
