var StrikeBack = require("./../moves/special/strikeBack.js");

module.exports = {
  attack : 1000,
  defense: 1300,
  range : 2,
  name : "kahuna",
  code : "kh",
  value : 42,
  type : "mechanic",
  category:"medium",
  displacement:"ground",
  movementType: require("./../moves/movement/allMovement.js"),
  bonus : {
    terrain : {
      terrests : {
        attack : 400
      },
      heavy : {
        defense : 400
      }
    },
    air : {
      defense : 400
    }
  },
  movementCost: 2,
  attackMoves : [],
  posAttackMoves : [],
  defenseMoves : [],
  posDefenseMoves : []
};
