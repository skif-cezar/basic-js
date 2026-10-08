const { NotImplementedError } = require("../lib");

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(matrix) {
  let countCats = 0;

  if (matrix.length === 0) return countCats;

  for (let i = 0; i < matrix.length; i += 1) {
    const row = matrix[i];

    for (let j = 0; j < row.length; j += 1) {
      if (row[j] === "^^") {
        countCats += 1;
      }
    }
  }

  return countCats;
}

module.exports = {
  countCats,
};
