var basePositionConverter = require("./basePositionConverter.js");
var positionType = require("./positionType.js");
var coordinate = require("./../coordinate.js");

var positionConversion = [];
positionConversion[positionType["N"]] = positionType["W"];
positionConversion[positionType["S"]] = positionType["E"];
positionConversion[positionType["W"]] = positionType["S"];
positionConversion[positionType["E"]] = positionType["N"];

var positionConversionToSpecific = [];
positionConversionToSpecific[positionType["N"]] = positionType["E"];
positionConversionToSpecific[positionType["S"]] = positionType["W"];
positionConversionToSpecific[positionType["W"]] = positionType["N"];
positionConversionToSpecific[positionType["E"]] = positionType["S"];

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