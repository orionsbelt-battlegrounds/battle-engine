var basePositionConverter = require("./src/engine/positionConverters/basePositionConverter.js");
var coordinate = require("./src/engine/coordinate.js");
var assert = require('assert');
var expect = require("expect.js");

var coordinate1 = new coordinate(100,0);

var converter = new basePositionConverter();

converter.resolveUltimateCoordinate(coordinate1);