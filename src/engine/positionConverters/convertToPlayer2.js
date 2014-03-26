var basePositionConverter = require("./basePositionConverter.js");
var positionType = require("./positionType.js");
var coordinate = require("./../coordinate.js");

var positionConversion = [];
positionConversion[positionType["N"]] = positionType["S"];
positionConversion[positionType["S"]] = positionType["N"];
positionConversion[positionType["W"]] = positionType["E"];
positionConversion[positionType["E"]] = positionType["W"];

function convertToPlayer2(players) {
  this.base = new basePositionConverter(players);
}


convertToPlayer2.prototype.convertPositionToBase = function(position){
  return GetPostion(position);
};


convertToPlayer2.prototype.convertPositionToSpecific = function(position){
  return GetPostion(position);
};

convertToPlayer2.prototype.convertCoordinateToBase = function (coord){
  var ultimate = this.resolveUltimateCoordinate(coord);
      if( ultimate != null ) {
        return ultimate;
      }
      var x = this.maxCoordinateValue() - coord.x;
      var y = this.maxCoordinateValue() - coord.y;

      return new coordinate(x,y);
}; 

convertToPlayer2.prototype.convertCoordinateToSpecific = function (coord){
  return this.convertCoordinateToBase(coord);
}; 


convertToPlayer2.prototype.resolveUltimateCoordinate = function(coord){
  return this.base.resolveUltimateCoordinate(coord);
};

convertToPlayer2.prototype.maxCoordinateValue = function(){
  return this.base.maxCoordinateValue();
};

function GetPostion(position){
  if(positionConversion[position] === undefined){
    return null;
  }
  return positionConversion[position];
}

module.exports = convertToPlayer2;