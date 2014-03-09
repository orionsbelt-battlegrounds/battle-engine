//----------------------
//      Private 
//----------------------

function sectorTest( coord, numberOfPlayers ) {
  if( coord === 9 && numberOfPlayers === 2 ) {
    return new Coordinate(9,9);
  }

  if( coord === 13 && numberOfPlayers === 4 ) {
    return new Coordinate(13, 13);
  }

  if( coord === 0 ) {
    return new Coordinate(0, 0);
  }
  return null;
}

function sectorTestX( x, y, numberOfPlayers ) {
  var coord = sectorTest(x,numberOfPlayers);
  if( coord !== null ) {
    return coord;
  }
  return new Coordinate(x, y);
}

function sectorTestY(x, y, numberOfPlayers ) {
  var coord = sectorTest(y,numberOfPlayers);
  if( coord !== null ) {
    return coord;
  }
  return new Coordinate(x, y);
}

var coordinateMover = {
  "N_next" : { x : 0, y : -1 },
  "S_next" : { x : 0, y : 1 },
  "W_next" : { x : -1, y : 0 },
  "E_next" : { x : 1, y : 0 },

  "N_previous" : { x : 0, y : 1 },
  "S_previous" : { x : 0, y : -1 },
  "W_previous" : { x : 1, y : 0 },
  "E_previous" : { x : -1, y : 0 },

  "N_left" : { x : -1, y : 0 },
  "S_left" : { x : 1, y : 0 },
  "W_left" : { x : 0, y : 1 },
  "E_left" : { x : 0, y : -1 },

  "N_right" : { x : 1, y : 0 },
  "S_right" : { x : -1, y : 0 },
  "W_right" : { x : 0, y : -1 },
  "E_right" : { x : 0, y : 1 }
};

function resolveValidator(mover) {
  if(mover.y !== 0 ) {
    return sectorTestY;
  }
  return sectorTestX;
}

function resolveCoordinate(position, direction, coordinate, numberOfPlayers) {
  var mover = coordinateMover[position + "_" + direction];
  if(mover) {
    var validator = resolveValidator(mover);
    return validator(coordinate.x + mover.x, coordinate.y + mover.y, numberOfPlayers);
  } else {
    throw new Error("Invalid position '" + position + "'.");
  }
}

//----------------------
//      Public 
//----------------------

Coordinate.prototype.equals = function(coordinate) {
  return this.x === coordinate.x && this.y === coordinate.y;
};

Coordinate.prototype.nextCoordinate = function(position, numberOfPlayers) {
  return resolveCoordinate(position, "next", this, numberOfPlayers);
};

Coordinate.prototype.previousCoordinate = function(position, numberOfPlayers) {
  return resolveCoordinate(position, "previous", this, numberOfPlayers);
};

Coordinate.prototype.leftCoordinate = function(position, numberOfPlayers) {
  return resolveCoordinate(position, "left", this, numberOfPlayers);
};

Coordinate.prototype.rightCoordinate = function(position, numberOfPlayers) {
  return resolveCoordinate(position, "right", this, numberOfPlayers);
};

//----------------------
//      Static
//----------------------

function parse(str) {
  if( str !== null ) {
    var splitted = str.split("_");
    if( splitted.length === 2) {
      return new Coordinate(parseInt(splitted[0],10),parseInt(splitted[1],10));
    }else{
      throw new Error("Coordinate with a incorrect number of values.");
    }
  }
  throw new Error("Invalid Coordinate.");
}

//----------------------
//      Constructor 
//----------------------

function Coordinate(x,y) {
  this.x = x;
  this.y = y;
}

module.exports = Coordinate;
module.exports.parse = parse;
