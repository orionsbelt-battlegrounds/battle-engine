var Rebound = require("./../moves/special/rebound.js");
//var Triple = require("./../moves/special/triple.js");

module.exports = {
  attack : 5000,
  defense: 6800,
  range : 3,
  name : "taurus",
  code : "t",
  value : 85,
  type : "mechanic",
  category:"heavy",
  displacement:"ground",
  movementType: require("./../moves/movement/frontMovement.js"),
  movementCost: 4,
  attackMoves : [],
  posAttackMoves : [new Rebound()/*, new Triple()*/],
  defenseMoves : [],
  posDefenseMoves : []
};