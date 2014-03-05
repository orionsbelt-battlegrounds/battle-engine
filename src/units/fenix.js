var allMovement = require("../moves/movement/diagonalMovement.js");
var Rebound = require("../moves/special/rebound.js");

var rain = {

    attack : 2500,
    defense: 2950,
    range : 4;
    name : "fenix",
    code : "f",
    value : 100,
    type : "mechanic",
    category:"heavy",
    displacement:"air",
    movementType: diagonalMovement,
    attackMoves : [],
    posAttackMoves : [new Rebound()],
    defenseMoves : [],
    posDefenseMoves : []

};

module.exports = rain;