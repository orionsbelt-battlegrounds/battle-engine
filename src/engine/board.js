function Board() {
  
}

Board.prototype.add = function(coordinate,element) {
  this[coordinate.x] = {};

  this[coordinate.x][coordinate.y] = element;
};

Board.prototype.get = function(coordinate) {
  if( this.contains(coordinate) ) {
    return this[coordinate.x][coordinate.y];
  }
  return null;
};

Board.prototype.contains = function(coordinate) {
  if( this.hasOwnProperty(coordinate.x) ) {
    if( this[coordinate.x].hasOwnProperty(coordinate.y) ) {
      return true;
    }
  }
  return false;
};

module.exports = Board;