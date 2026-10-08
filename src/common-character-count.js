const { NotImplementedError } = require("../lib");

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
  let countCommonChar = 0;
  const charCounts = {};

  if (s1.length === 0 || s2.length === 0) return countCommonChar;

  for (let i = 0; i < s1.length; i += 1) {
    const char = s1[i];
    charCounts[char] = (charCounts[char] || 0) + 1;
  }

  for (let j = 0; j < s2.length; j += 1) {
    const char = s2[j];

    if (charCounts[char] > 0) {
      countCommonChar += 1;
      charCounts[char] -= 1;
    }
  }

  return countCommonChar;
}

module.exports = {
  getCommonCharacterCount,
};
