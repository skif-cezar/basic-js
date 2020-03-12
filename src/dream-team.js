module.exports = function createDreamTeam(members) {
  let arr = [];
  let nameTeam = [];
  if (!Array.isArray(members)) return false;
  for(let i = 0; i < members.length; i++){
    if(typeof (members[i]) == 'string'){
      arr.push(members[i].toLocaleUpperCase().replace(/\s/g, ''));
    };
  }

  arr.sort();
  for(let i = 0; i < arr.length; i++){
    nameTeam.push(arr[i][0]);
  }
  return (nameTeam.join(''));
};