var coordinate = require("./../coordinate.js");
var positionType = require("./positionType.js");

function basePositionConverter(players) {
  this.numberOfPlayers = players;
  this.coordinate0 = new  coordinate(0,0);
  this.coordinate10 = new coordinate(1, 0);
  this.coordinate9 = new  coordinate(9,9);
  this.coordinate19 = new coordinate(1, 9);
  new positionType();
} 

basePositionConverter.prototype.resolveUltimateCoordinate = function(coord){
  if( this.numberOfPlayers == 2 ) {
      if( coord.equals(this.coordinate0) )  {
        return this.coordinate9;
      }
       if( coord.equals(this.coordinate9) ) {
        return this.coordinate0;
      }
      if( coord.equals(this.coordinate10) ) {
        return this.coordinate19;
      }
      if( coord.equals(this.coordinate19) ) {
        return this.coordinate10;
      }
    }
    return null;
};

basePositionConverter.prototype.convertPositionToBase = function (position){
  if(positionType.position[position] === undefined){
    return null;
  }
  return position;
}; 

basePositionConverter.prototype.convertPositionToSpecific = function (position){
  if(positionType.position[position] === undefined){
    return null;
  }
  return position;
}; 

basePositionConverter.prototype.convertCoordinateToBase = function (coord){
  return coord;
}; 

basePositionConverter.prototype.convertCoordinateToSpecific = function (coord){
  return coord;
}; 

basePositionConverter.prototype.maxCoordinateValue  = function (){
  if( this.numberOfPlayers == 2) {
    return 9;
  }
  return 13;

};

module.exports = basePositionConverter;