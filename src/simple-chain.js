const CustomError = require("../extensions/custom-error");

const chainMaker = {
  chain: [],
  getLength() {
    return this.chain.length;
  },
  
  addLink(value) {
    this.chain.push( `( ${value} )`);
    return this;
  },

  removeLink(position) {
    if (typeof position == "number" && position <= this.chain.length) {
      this.chain.splice(position - 1, 1);
      return this;
    }
    else {
      this.chain = [];
      throw new Error('THROWN');
    }
    
  },

  reverseChain() {
    this.chain.reverse();
    return this;
  },

  finishChain() {
    let finalChain = this.chain.join("~~");
    this.chain = [];
    return finalChain;
  }
};

module.exports = chainMaker;
