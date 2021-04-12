/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  const s2Arr = s2.split('');
  let count = 0;

  s1.split('').forEach((el) => {
    for (let i = 0; i < s2Arr.length; i++) {
      if (el === s2Arr[i]) {
        count++;
        s2Arr.splice(i, 1);
        break;
      }
    }
  });
  return count;
}

module.exports = getCommonCharacterCount;
