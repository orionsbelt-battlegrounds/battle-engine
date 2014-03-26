var basePositionConverter = require("./src/engine/positionConverters/basePositionConverter.js");
var positionType = require("./src/engine/positionConverters/positionType.js");
var coordinate = require("./src/engine/coordinate.js");
var assert = require('assert');
var expect = require("expect.js");
//var convertToPlayer2 = require("./src/engine/positionConverters/convertToPlayer2.js");


var converter = new basePositionConverter(2);
converter.convertPositionToBase("N");
