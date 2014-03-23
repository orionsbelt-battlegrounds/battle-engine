function Board() {
  
}

Board.prototype.add = function(coordinate,element) {
  this[coordinate.toString()] = element;
};

Board.prototype.get = function(coordinate) {
  if( this.contains(coordinate.toString()) ) {
    return this[coordinate.toString()];
  }
  return null;
};

Board.prototype.contains = function(coordinate) {
  if( this.hasOwnProperty(coordinate.toString()) ) {
    return true;
  }
  return false;
};

module.exports = Board;