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
  if( coord != null ) {
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

//----------------------
//      Public 
//----------------------

Coordinate.prototype.equals = function(coordinate) {
  return this.x === coordinate.x && this.y === coordinate.y;
};

Coordinate.prototype.nextCoordinate = function(position, numberOfPlayers) {
  switch( position ) {
    case "N":
      return sectorTestX( this.x-1, this.y, numberOfPlayers );
    case "S":
      return sectorTestX( this.x+1, this.y, numberOfPlayers );
    case "W":
      return sectorTestY( this.x, this.y-1, numberOfPlayers );
    case "E":
      return sectorTestY( this.x, this.y+1, numberOfPlayers );
    default:
      throw new Error("Invalid position '" + position + "'.");
  }
};

Coordinate.prototype.previousCoordinate = function(position, numberOfPlayers) {
  switch( position ) {
    case "N":
      return sectorTestX( this.x+1, this.y, numberOfPlayers );
    case "S":
      return sectorTestX( this.x-1, this.y, numberOfPlayers );
    case "W":
      return sectorTestY( this.x, this.y+1, numberOfPlayers );
    case "E":
      return sectorTestY( this.x, this.y-1, numberOfPlayers );
    default:
      throw new Error("Invalid position '" + position + "'.");
  }
};

Coordinate.prototype.leftCoordinate = function(position, numberOfPlayers) {
  switch( position ) {
    case "N":
      return sectorTestX( this.x, this.y-1, numberOfPlayers );
    case "S":
      return sectorTestX( this.x, this.y+1, numberOfPlayers );
    case "W":
      return sectorTestY( this.x+1, this.y, numberOfPlayers );
    case "E":
      return sectorTestY( this.x-1, this.y, numberOfPlayers );
    default:
      throw new Error("Invalid position '" + position + "'.");
  }
};

Coordinate.prototype.rightCoordinate = function(position, numberOfPlayers) {
  switch( position ) {
    case "N":
      return sectorTestX( this.x, this.y+1, numberOfPlayers );
    case "S":
      return sectorTestX( this.x, this.y-1, numberOfPlayers );
    case "W":
      return sectorTestY( this.x-1, this.y, numberOfPlayers );
    case "E":
      return sectorTestY( this.x+1, this.y, numberOfPlayers );
    default:
      throw new Error("Invalid position '" + position + "'.");
  }
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
