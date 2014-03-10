var coordinate = require("./../coordinate.js");

function basePositionConverter() {
  this.numberOfPlayers = 2;
  this.coordinate0 = new  coordinate(0,0);
  this.coordinate10 = new coordinate(1, 0);
  this.coordinate9 = new  coordinate(9,9);
  this.coordinate19 = new coordinate(1, 9);

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



module.exports = basePositionConverter;