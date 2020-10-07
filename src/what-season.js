const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  
  let month = date.getMonth() + 1 ;
  if (arguments.length == 0)  return 'Unable to determine the time of year!'; 
  if (date instanceof Date == false || {}.toString.call(date) !== "[object Date]") throw new Error();
  if ((month>=1 && month <=2) || month == 12) return "winter";
  if (month>=3 && month <=5) return "spring";
  if (month>=6 && month <=8) return "summer";
  if (month>=9 && month <=11) return "autumn";
  
};
