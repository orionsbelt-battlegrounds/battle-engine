var basePositionConverter = require("./src/engine/positionConverters/basePositionConverter.js");
var coordinate = require("./src/engine/coordinate.js");

var coordinate1 = new coordinate(0,0);

var converter = new basePositionConverter();

converter.resolveUltimateCoordinate(coordinate1);