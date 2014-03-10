var allMovement = require("../moves/movement/allMovement.js");

module.exports = {
  attack : 120,
  defense: 70,
  range : 1,
  name : "rain",
  code : "r",
  value : 4,
  type : "mechanic",
  category:"light",
  displacement:"air",
  movementType: allMovement,
  movementCost: 1,
  attackMoves : [],
  posAttackMoves : [],
  defenseMoves : [],
  posDefenseMoves : [],
  bonus : {
    heavy : {
        attack : 200
    },
    terrest : {
        attack : 200
    }
  },
};
