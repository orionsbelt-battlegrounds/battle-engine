var Attack = require("./../moves/special/attack.js");

module.exports = {
  name : "crusader",
  attack : 2400,
  defense: 2200,
  range : 6,
  code : "c",
  value : 62,
  type : "mechanic",
  category: "heavy",
  displacement : "air",
  movementType : require("./../moves/movement/frontMovement.js"),
  movementCost : 4,
  catapult: false,
  attackMoves : [Attack],
  posAttackMoves : [],
  defenseMoves : [],
  posDefenseMoves : []
};
