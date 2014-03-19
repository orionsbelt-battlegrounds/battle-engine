var Attack = require("./../moves/special/attack.js");
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
  catapult: false,
  attackMoves : [Attack],
  posAttackMoves : [],
  defenseMoves : [StrikeBack],
  posDefenseMoves : []
};
