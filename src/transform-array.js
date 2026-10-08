const { NotImplementedError } = require("../lib");

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }

  const result = [];
  const len = arr.length;
  const temp = arr.slice();

  const DISCARDED = Symbol("discarded");

  for (let i = 0; i < len; i++) {
    const item = temp[i];

    switch (item) {
      case "--discard-next":
        if (i + 1 < len) {
          temp[i + 1] = DISCARDED;
          i++;
        }
        break;

      case "--discard-prev":
        if (result.length > 0 && temp[i - 1] !== DISCARDED) {
          result.pop();
        }
        break;

      case "--double-next":
        if (i + 1 < len) {
          result.push(temp[i + 1]);
        }
        break;

      case "--double-prev":
        if (i > 0 && temp[i - 1] !== DISCARDED) {
          result.push(temp[i - 1]);
        }
        break;

      default:
        if (item !== DISCARDED) {
          result.push(item);
        }
        break;
    }
  }

  return result;
}

module.exports = {
  transform,
};
