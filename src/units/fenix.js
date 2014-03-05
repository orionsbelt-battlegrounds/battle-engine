var normalMovement = require("./../moves/movement/normalMovement.js");
var Rebound = require("./../moves/special/rebound.js");

module.exports = {

    attack : 2500,
    defense: 2950,
    range : 4,
    name : "fenix",
    code : "f",
    value : 100,
    type : "mechanic",
    category:"heavy",
    displacement:"air",
    movementType: normalMovement,
    attackMoves : [],
    posAttackMoves : [new Rebound()],
    defenseMoves : [],
    posDefenseMoves : []

};
