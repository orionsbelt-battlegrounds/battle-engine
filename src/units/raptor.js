var Attack = require("./../moves/special/attack.js");
var Rebound = require("./../moves/special/rebound.js");

module.exports = {
  name : "raptor",
  attack : 280,
  defense: 400,
  range : 2,
  code : "rp",
  value : 20,
  type : "mechanic",
  category: "light",
  displacement : "air",
  movementType : require("./../moves/movement/allMovement.js"),
  movementCost : 1,
  catapult: false,
  bonus : {
    light : {
      attack : 200
    }
  },
  attackMoves : [Attack],
  posAttackMoves : [Rebound],
  defenseMoves : [],
  posDefenseMoves : []
};
