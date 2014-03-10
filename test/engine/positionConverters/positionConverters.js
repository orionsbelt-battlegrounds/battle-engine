var assert = require('assert');
var expect = require("expect.js");
var coordinate = require("./../../../src/engine/coordinate.js");
var basePositionConverter = require("./../../../src/engine/positionConverters/basePositionConverter.js");

describe("obb.battle-engine.engine.positionConverters", function() {

  describe('#basePositionConverter', function() {
    it("is available", function() {
      assert(basePositionConverter);
    })

    it("Resolve Ultimate Coordinate return null", function() {
      var coor = new coordinate(100,0);
      var converter = new basePositionConverter();

      expect(converter.resolveUltimateCoordinate(coor)).to.eql(null);
      //assert.equal(converter.resolveUltimateCoordinate(coor),null);
     
    })

    it("Resolve Ultimate Coordinate return coordinate9", function() {
      var converter = new basePositionConverter();

      expect(converter.resolveUltimateCoordinate(converter.coordinate0)).to.eql(converter.coordinate9);

    })

    it("Resolve Ultimate Coordinate return coordinate0", function() {
      var converter = new basePositionConverter();

      expect(converter.resolveUltimateCoordinate(converter.coordinate9)).to.eql(converter.coordinate0);

    })

    it("Resolve Ultimate Coordinate return coordinate19", function() {
      var converter = new basePositionConverter();

      expect(converter.resolveUltimateCoordinate(converter.coordinate10)).to.eql(converter.coordinate19);

    })

    it("Resolve Ultimate Coordinate return coordinate10", function() {
      var converter = new basePositionConverter();

      expect(converter.resolveUltimateCoordinate(converter.coordinate19)).to.eql(converter.coordinate10);

    })

  })
})
