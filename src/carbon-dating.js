const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  let result = 0;
  if (typeof sampleActivity != "string" || 
  arguments.length == 0 || 
  isNaN (parseFloat(sampleActivity))|| 
  Number(sampleActivity) <= 0 || 
  Number(sampleActivity) > 15) return false;
  let k = 0.693 / HALF_LIFE_PERIOD;
  let relation = MODERN_ACTIVITY / parseFloat(sampleActivity);
  result = Math.ceil(Math.log(relation) / k);
  return result; 
};
