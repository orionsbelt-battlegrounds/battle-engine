module.exports = {
  attack : 150,
  defense: 450,
  range : 1,
  name : "samurai",
  code : "s",
  value : 15,
  type : "mechanic",
  category:"light",
  displacement:"air",
  movementType: require("./../moves/movement/allMovement.js"),
  movementCost: 2,
  attackMoves : [],
  posAttackMoves : [],
  defenseMoves : [],
  posDefenseMoves : []
};