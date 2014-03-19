var Attack = require("./../moves/special/attack.js");

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
  movementType: require("../moves/movement/allMovement.js"),
  movementCost: 1,
  catapult: false,
  attackMoves : [Attack],
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
