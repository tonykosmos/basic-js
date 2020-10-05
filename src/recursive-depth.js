const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  arrayCounter = 1;
  maxDeep = 1;
  calculateDepth(arr) {
    for (let i = 0; i < arr.length; i++) {
      if (Array.isArray(arr[i])) {
        this.arrayCounter++;
        this.calculateDepth(arr[i]);
        this.maxDeep = Math.max(this.maxDeep, this.arrayCounter);
        if (i == arr.length - 1 || Array.isArray(arr[i])) this.arrayCounter = 1;  
      }  
      }
    return this.maxDeep;
  }
};