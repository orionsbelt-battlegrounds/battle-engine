
var StrikeBack = require("./../moves/special/strikeBack.js");

module.exports = {
  attack : 450,
  defense: 5550,
  range : 3,
  name : "pretorian",
  code : "h",
  value : 48,
  type : "mechanic",
  category:"medium",
  displacement:"air",
  movementType: require("./../moves/movement/diagonalMovement.js"),
  movementCost: 2,
  attackMoves : [],
  posAttackMoves : [],
  defenseMoves : [new StrikeBack()],
  posDefenseMoves : []
};
