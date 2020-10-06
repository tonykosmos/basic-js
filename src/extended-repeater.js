const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  let newStr = "";
  let repeatedAddition = "";
  let finalAddition = "";
  for (let i = 1; i <= options.additionRepeatTimes; i++) {
    if (options.additionSeparator) {
      repeatedAddition += `${options.addition}${options.additionSeparator}`;
      finalAddition = repeatedAddition.slice(0, repeatedAddition.length - (options.additionSeparator).length);
    }
    else finalAddition += `${options.addition}`;
  }

  if (options.repeatTimes) {
   for (let i = 1; i <= options.repeatTimes; i++) {
    if (options.separator && options.addition) {
      newStr += `${options.separator}${str}${finalAddition}`;
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
  