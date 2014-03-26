var basePositionConverter = require("./basePositionConverter.js");
var positionType = require("./positionType.js");
var coordinate = require("./../coordinate.js");

var positionConversion = [];
positionConversion[positionType["N"]] = positionType["E"];
positionConversion[positionType["S"]] = positionType["W"];
positionConversion[positionType["W"]] = positionType["N"];
positionConversion[positionType["E"]] = positionType["S"];

var positionConversionToSpecific = [];
positionConversionToSpecific[positionType["N"]] = positionType["W"];
positionConversionToSpecific[positionType["S"]] = positionType["E"];
positionConversionToSpecific[positionType["W"]] = positionType["S"];
positionConversionToSpecific[positionType["E"]] = positionType["N"];

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