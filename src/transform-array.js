const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == "--discard-next" && i != arr.length-1) arr.splice(i, 2);
    if (arr[i] == "--discard-next" && i == arr.length-1) arr.splice(i, 1);
    if (arr[i] == "--discard-prev" && i != 0) arr.splice(i, 2);
    if (arr[i] == "--discard-prev" && i == 0) arr.splice(i, 1);
    if (arr[i] == "--double-next" && i == arr.length-1) arr.splice(i, 1);
    if (arr[i] == "--double-next" && i != arr.length-1) arr.splice(i, 1, arr[i+1]);
    if (arr[i] == "--double-prev" && i == 0) arr.splice(i, 1);
    if (arr[i] == "--double-prev" && i != 0) arr.splice(i, 1, arr[i-1]);
  }
  return arr;
  
};
