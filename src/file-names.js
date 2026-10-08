const { NotImplementedError } = require("../lib");

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  const result = [];
  const usedNames = new Set();

  for (let i = 0; i < names.length; i += 1) {
    let name = names[i];

    if (usedNames.has(name)) {
      let k = 1;
      let newName = `${name}(${k})`;

      while (usedNames.has(newName)) {
        k++;
        newName = `${name}(${k})`;
      }

      name = newName;
    }

    usedNames.add(name);
    result.push(name);
  }

  return result;
}

module.exports = {
  renameFiles,
};
