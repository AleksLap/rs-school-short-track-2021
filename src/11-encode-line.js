/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  const strArr = str.split('');
  let result = '';
  let count = 1;

  for (let i = 0; i < strArr.length; i++) {
    if (strArr[i] === strArr[i + 1]) count++;
    if (strArr[i] !== strArr[i + 1]) {
      if (count > 1) {
        result += `${count}${strArr[i]}`;
        count = 1;
      } else {
        result += `${strArr[i]}`;
      }
    }
  }
  return result;
}

module.exports = encodeLine;
