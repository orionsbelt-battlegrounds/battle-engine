var StrikeBack = require("./../moves/special/strikeBack.js");

module.exports = {
  attack : 1500,
  defense: 1000,
  range : 3,
  name : "krill",
  code : "kr",
  value : 30,
  type : "mechanic",
  category:"medium",
  displacement:"air",
  movementType: require("./../moves/movement/allMovement.js"),
  movementCost: 2,
  attackMoves : [],
  posAttackMoves : [],
  defenseMoves : [new StrikeBack()],
  posDefenseMoves : []
};
