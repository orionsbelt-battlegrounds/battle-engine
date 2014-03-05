var movementType = require("./../moves/movement/frontMovement.js");

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
  movementType : movementType,
  movementCost : 4,
  attackMoves : [],
  posAttackMoves : [],
  defenseMoves : [],
  posDefenseMoves : []
};
