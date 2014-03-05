var movementType = require("./../moves/movement/allMovement.js");

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
  movementType : movementType,
  movementCost : 1,
  attackMoves : [],
  posAttackMoves : [],
  defenseMoves : [],
  posDefenseMoves : []
};
