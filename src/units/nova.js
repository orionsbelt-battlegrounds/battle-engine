module.exports = {
  attack : 2700,
  defense: 1900,
  range : 5,
  name : "nova",
  code : "n",
  value : 70,
  type : "mechanic",
  category:"heavy",
  displacement:"air",
  movementType: require("./../moves/movement/normalMovement.js"),
  movementCost: 4,
  attackMoves : [],
  posAttackMoves : [],
  defenseMoves : [],
  posDefenseMoves : [],
  bonus : {
    organic : {
      attack : 4000
    }  
  }
};
