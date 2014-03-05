module.exports = {
  attack : 1100,
  defense: 1200,
  range : 3,
  name : "eagle",
  code : "e",
  value : 70,
  type : "mechanic",
  category:"medium",
  displacement:"air",
  movementType: require("./../moves/movement/diagonalMovement.js"),
  bonus : {
    medium : {
      attack : 400
    },
    heavy : {
      defense : 400
    }
  },
  movementCost: 2,
  attackMoves : [],
  posAttackMoves : [],
  defenseMoves : [],
  posDefenseMoves : []
};
