module.exports = function countCats(matrix) {
  var count = 0;
  for(let i of matrix){
    for(let j of i){
      if(j === '^^') count++;
    }
  }
  return count;

};
