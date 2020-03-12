const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  let valueActivity = parseFloat(sampleActivity);

  if(typeof sampleActivity != 'string'){
    return false;
  }

  if(valueActivity > MODERN_ACTIVITY || valueActivity <= 0){
    return false
  }

  if(isNaN(valueActivity)) return false;

  let c = 0.693 / HALF_LIFE_PERIOD;
  return Math.ceil(Math.log(MODERN_ACTIVITY / valueActivity) / c);
};
