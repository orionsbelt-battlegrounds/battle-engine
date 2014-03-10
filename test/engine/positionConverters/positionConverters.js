var assert = require('assert');
var coordinate = require("./../../../src/engine/coordinate.js");
var basePositionConverter = require("./../../../src/engine/positionConverters/basePositionConverter.js");

describe("obb.battle-engine.engine.positionConverters", function() {

  describe('#basePositionConverter', function() {
    it("is available", function() {
      assert(basePositionConverter);
    })
  })
})
