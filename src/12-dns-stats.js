/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const domainsObj = {};

  domains.forEach((domain) => {
    const arr = domain.split('.').reverse();
    let count;

    for (let i = 0; i < arr.length; i++) {
      let name = '';
      count = i + 1;

      for (let j = 0; j < count; j++) {
        name += `.${arr[j]}`;
      }

      if (name in domainsObj) {
        domainsObj[name] += 1;
      } else {
        domainsObj[name] = 1;
      }
    }
  });
  return domainsObj;
}

module.exports = getDNSStats;
