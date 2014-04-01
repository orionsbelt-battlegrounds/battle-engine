var Rebound = require("./../moves/special/rebound.js");

module.exports = {
  attack : 300,
  defense: 300,
  range : 1,
  name : "panther",
  code : "p",
  value : 11,
  type : "mechanic",
  category:"light",
  displacement:"ground",
  movementType: require("./../moves/movement/allMovement.js"),
  movementCost: 1,
  attackMoves : [],
  posAttackMoves : [new Rebound()],
  defenseMoves : [],
  posDefenseMoves : []
};