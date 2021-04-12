/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const numArr = String(n).split('');
  let digit = numArr[0];

  numArr.forEach((el) => {
    if (el < digit) digit = el;
  });

  numArr.splice(numArr.indexOf(digit), 1);
  return +numArr.join('');
}

module.exports = deleteDigit;
