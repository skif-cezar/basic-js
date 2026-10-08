const { NotImplementedError } = require('../lib');

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
  const str = String(n);
  const len = str.length;

  for (let i = 0; i < len - 1; i += 1) {
    if (str[i] < str[i + 1]) {
      return Number(str.slice(0, i) + str.slice(i + 1))
    }
  }

  return Math.floor(n / 10);
}

module.exports = {
  deleteDigit
};
