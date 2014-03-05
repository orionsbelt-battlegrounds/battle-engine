var allMovement = require("../moves/movement/allMovement.js");

var rain = {

    attack : 120,
    defense: 70,
    range : 1;
    name : "rain",
    code : "r",
    value : 4,
    type : "mechanic",
    category:"light",
    displacement:"air",
    movementType: allMovement,
    bonus : {
        heavy : {
            attack : 200
        },
        terrain : {
            earth : {
                attack : 200
            }
        }
    },
    attackMoves : {},
    posAttackMoves : {},
    defenseMoves : {},
    posDefenseMoves : {}
};

module.exports = rain;