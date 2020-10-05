const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  let newStr = "";
  if (options.repeatTimes) {
   for (let i = 1; i <= options.repeatTimes; i++) {
    if (options.separator && options.addition) {
      newStr += `${options.separator}${str}${options.addition}`;
    } 
    else if (options.separator) {
      newStr += `${options.separator}${str}`;
    }
    else newStr += `+${str}`;
  }
}

  else if (options.addition) {
    newStr += `${str}${options.addition}`;
    return newStr;
  }
  


  if (options.separator) {
    return newStr.slice((options.separator).length)
  }
  else return newStr.slice(1);
};
  