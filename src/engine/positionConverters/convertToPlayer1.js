var basePositionConverter = require("./basePositionConverter.js");

function convertToPlayer1(players) {
  this.base  = new basePositionConverter(players);
}

convertToPlayer1.prototype.resolveUltimateCoordinate = function(coord){
  return this.base.resolveUltimateCoordinate(coord);
};

convertToPlayer1.prototype.convertPositionToSpecific = function(position){
  return this.base.convertPositionToSpecific(position);
};

convertToPlayer1.prototype.maxCoordinateValue = function(){
  return this.base.maxCoordinateValue();
};

module.exports = convertToPlayer1;