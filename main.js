var basePositionConverter = require("./src/engine/positionConverters/basePositionConverter.js");
var positionType = require("./src/engine/positionConverters/positionType.js");
var coordinate = require("./src/engine/coordinate.js");
var assert = require('assert');
var expect = require("expect.js");
var convertToPlayer2 = require("./src/engine/positionConverters/convertToPlayer2.js");

new positionType(); 
var converter = new convertToPlayer2(2);
      var coor = new coordinate(6,0);
      var aaa = converter.convertCoordinateToBase(coor);
converter.resolveUltimateCoordinate(coordinate1);