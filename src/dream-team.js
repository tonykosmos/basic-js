const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  let capitalLetters = [];
  if (!Array.isArray(members)) return false;
  for (let i = 0; i < members.length; i++) {
      if (typeof members[i] != "string") continue;
      for (let j = 0; j < members[i].length; j++) {
          if (members[i][j] == " ") continue;
          else {
          capitalLetters.push(members[i][j].toUpperCase());
          break;
          }
      }
  }
  return capitalLetters.sort().join("");
}