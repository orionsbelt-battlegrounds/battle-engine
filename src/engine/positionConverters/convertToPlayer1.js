var basePositionConverter = require("./basePositionConverter.js");

function convertToPlayer1(players) {
  this.base = new basePositionConverter(players);
}

convertToPlayer1.prototype.resolveUltimateCoordinate = function(coord){
  return this.base.resolveUltimateCoordinate(coord);
};

convertToPlayer1.prototype.convertPositionToSpecific = function(position){
  return this.base.convertPositionToSpecific(position);
};

convertToPlayer1.prototype.convertPositionToBase = function(position){
  return this.base.convertPositionToBase(position);
};

convertToPlayer1.prototype.maxCoordinateValue = function(){
  return this.base.maxCoordinateValue();
};

convertToPlayer1.prototype.convertCoordinateToBase = function (coord){
  return this.base.convertCoordinateToBase(coord);
}; 

convertToPlayer1.prototype.convertCoordinateToSpecific = function (coord){
  return this.base.convertCoordinateToSpecific(coord);
}; 

module.exports = convertToPlayer1;