const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
 
  encrypt(message, key) {
    let alphabet = "abcdefghijklmnopqrstuvwxyz";
    let spacePositions = [];
    let encrypted = "";
    
    for (let i = 0; i < message.length; i++) {
      if (/[0-9,.-:;'"`_!?]/.test(message[i])) continue;
      if (message[i] == " ") encrypted += " ";
      
      let newLetter = alphabet.indexOf(message[i]) + alphabet.indexOf(key[i]);
      if (newLetter > 26) newLetter = newLetter - 26;
      encrypted += alphabet[newLetter];
    }
    return encrypted.toUpperCase();
  }    
  decrypt(message, key) {
    let alphabet = "abcdefghijklmnopqrstuvwxyz";
    let spacePositions = [];
    for (let i = 0; i < message.length; i++) {
      if (message[i] == " ") spacePositions.push(i);
    }
    return spacePositions;
  }
}

module.exports = VigenereCipheringMachine;
