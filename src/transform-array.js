const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if (Array.isArray(arr) == false) throw new Error('THROWN');
  let tranformedArr = arr.slice();
  for (let i = 0; i < arr.length; i++) {
    if (tranformedArr[i] == "--discard-next") {
      if (i != tranformedArr.length - 1) tranformedArr.splice(i, 2);
      else tranformedArr.splice(i, 1);
      if (tranformedArr[i] == "--discard-prev" || tranformedArr[i] == "--double-prev") tranformedArr.splice(i, 1);
    }

    if (tranformedArr[i] == "--discard-prev") {
      if (i != 0) tranformedArr.splice(i - 1, 2);
      else tranformedArr.splice(i, 1);
    }

    if (tranformedArr[i] == "--double-next") {
      if (i != tranformedArr.length - 1) tranformedArr.splice(i, 1, tranformedArr[i + 1]);
      else tranformedArr.splice(i, 1)
    }
    if (tranformedArr[i] == "--double-prev") {
      if (i != 0)  tranformedArr.splice(i, 1, tranformedArr[i - 1]);
      else tranformedArr.splice(i, 1);
    }
  }
  return tranformedArr;
  
};
