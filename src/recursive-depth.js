const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  
  calculateDepth(arr) {
    let maxDepth = 1;
    let currentDepth = 1;
    for (let i = 0; i < arr.length; i++) {
      if (Array.isArray(arr[i])) {
        currentDepth += this.calculateDepth(arr[i]);
        }
        if (currentDepth > maxDepth) {
          maxDepth = currentDepth;
        }
        currentDepth = 1;
      }
    return maxDepth;
  }
};