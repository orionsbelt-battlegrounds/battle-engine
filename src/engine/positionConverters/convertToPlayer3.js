var basePositionConverter = require("./basePositionConverter.js");
var positionType = require("./positionType.js");
var coordinate = require("./../coordinate.js");

new positionType();
var positionConversion = [];
positionConversion[positionType.position["N"]] = positionType.position["E"];
positionConversion[positionType.position["S"]] = positionType.position["W"];
positionConversion[positionType.position["W"]] = positionType.position["N"];
positionConversion[positionType.position["E"]] = positionType.position["S"];

var positionConversionToSpecific = [];
positionConversionToSpecific[positionType.position["N"]] = positionType.position["W"];
positionConversionToSpecific[positionType.position["S"]] = positionType.position["E"];
positionConversionToSpecific[positionType.position["W"]] = positionType.position["S"];
positionConversionToSpecific[positionType.position["E"]] = positionType.position["N"];

function convertToPlayer3(players) {
  this.base = new basePositionConverter(players);
}


convertToPlayer3.prototype.convertPositionToBase = function(position){
  if(positionConversion[position] === undefined){
    return null;
  }
  return positionConversion[position];
};


convertToPlayer3.prototype.convertPositionToSpecific = function(position){
  if(positionConversionToSpecific[position] === undefined){
    return null;
  }
  return positionConversionToSpecific[position];

};

convertToPlayer3.prototype.convertCoordinateToBase = function (coord){
  //var x = coord.y;
  //var y = this.maxCoordinateValue() - coord.x;

  var y = coord.x;
  var x = this.maxCoordinateValue() - coord.y;

  return new coordinate(x,y);
}; 

convertToPlayer3.prototype.convertCoordinateToSpecific = function (coord){
  //var x = this.maxCoordinateValue() - coord.y;
  //var y = coord.x;

  var y = this.maxCoordinateValue() - coord.x;
  var x = coord.y;

  return new coordinate(x,y);
}; 


convertToPlayer3.prototype.resolveUltimateCoordinate = function(coord){
  return this.base.resolveUltimateCoordinate(coord);
};

convertToPlayer3.prototype.maxCoordinateValue = function(){
  return this.base.maxCoordinateValue();
};

module.exports = convertToPlayer3;