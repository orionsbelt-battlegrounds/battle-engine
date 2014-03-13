var basePositionConverter = require("./basePositionConverter.js");
var positionType = require("./positionType.js");
var coordinate = require("./../coordinate.js");

new positionType();
var positionConversion = [];
positionConversion[positionType.position["N"]] = positionType.position["W"];
positionConversion[positionType.position["S"]] = positionType.position["E"];
positionConversion[positionType.position["W"]] = positionType.position["S"];
positionConversion[positionType.position["E"]] = positionType.position["N"];

var positionConversionToSpecific = [];
positionConversionToSpecific[positionType.position["N"]] = positionType.position["E"];
positionConversionToSpecific[positionType.position["S"]] = positionType.position["W"];
positionConversionToSpecific[positionType.position["W"]] = positionType.position["N"];
positionConversionToSpecific[positionType.position["E"]] = positionType.position["S"];

function convertToPlayer4(players) {
  this.base = new basePositionConverter(players);
}


convertToPlayer4.prototype.convertPositionToBase = function(position){
  if(positionConversion[position] === undefined){
    return null;
  }
  return positionConversion[position];
};


convertToPlayer4.prototype.convertPositionToSpecific = function(position){
  if(positionConversionToSpecific[position] === undefined){
    return null;
  }
  return positionConversionToSpecific[position];

};

convertToPlayer4.prototype.convertCoordinateToBase = function (coord){
  //var y = coord.x;
  //var x = this.maxCoordinateValue() - coord.y;

  var x = coord.y;
  var y = this.maxCoordinateValue() - coord.x;

  return new coordinate(x,y);
}; 

convertToPlayer4.prototype.convertCoordinateToSpecific = function (coord){
  //var y = this.maxCoordinateValue() - coord.x;
  //var x = coord.y;

  var x = this.maxCoordinateValue() - coord.y;
  var y = coord.x;

  return new coordinate(x,y);
}; 


convertToPlayer4.prototype.resolveUltimateCoordinate = function(coord){
  return this.base.resolveUltimateCoordinate(coord);
};

convertToPlayer4.prototype.maxCoordinateValue = function(){
  return this.base.maxCoordinateValue();
};

module.exports = convertToPlayer4;