var assert = require('assert');
var expect = require("expect.js");
var coordinate = require("./../../../src/engine/coordinate.js");
var basePositionConverter = require("./../../../src/engine/positionConverters/basePositionConverter.js");
var positionType = require("./../../../src/engine/positionConverters/positionType.js");

describe("obb.battle-engine.engine.positionConverters", function() {

  describe('#positionType', function() {
    it("is available", function() {
      assert(positionType);
    })

    it("retrieve element", function() {
      new positionType();

      expect(positionType.position["N"]).to.eql("N");
    })

    it("fail retrieve element", function() {
      new positionType();

      expect(positionType.position["T"]).to.eql(undefined);
    })
  });

  describe('#basePositionConverter', function() {
    it("is available", function() {
      assert(basePositionConverter);
    })

    it("Resolve Ultimate Coordinate return null", function() {
      var coor = new coordinate(100,0);
      var converter = new basePositionConverter(2);

      expect(converter.resolveUltimateCoordinate(coor)).to.eql(null);
      //assert.equal(converter.resolveUltimateCoordinate(coor),null);
     
    })

    it("Resolve Ultimate Coordinate player number <> 2", function() {
      var coor = new coordinate(100,0);
      var converter = new basePositionConverter(4);

      expect(converter.resolveUltimateCoordinate(coor)).to.eql(null);
      //assert.equal(converter.resolveUltimateCoordinate(coor),null);
     
    })

    it("Resolve Ultimate Coordinate return coordinate9", function() {
      var converter = new basePositionConverter(2);

      expect(converter.resolveUltimateCoordinate(converter.coordinate0)).to.eql(converter.coordinate9);

    })

    it("Resolve Ultimate Coordinate return coordinate0", function() {
      var converter = new basePositionConverter(2);

      expect(converter.resolveUltimateCoordinate(converter.coordinate9)).to.eql(converter.coordinate0);

    })

    it("Resolve Ultimate Coordinate return coordinate19", function() {
      var converter = new basePositionConverter(2);

      expect(converter.resolveUltimateCoordinate(converter.coordinate10)).to.eql(converter.coordinate19);

    })

    it("Resolve Ultimate Coordinate return coordinate10", function() {
      var converter = new basePositionConverter(2);

      expect(converter.resolveUltimateCoordinate(converter.coordinate19)).to.eql(converter.coordinate10);

    })

    it("convert Position To Specific Success", function() {
      var converter = new basePositionConverter(2);

      expect(converter.convertPositionToSpecific("N")).to.eql("N");

    })

    it("convert Position To Specific fail", function() {
      var converter = new basePositionConverter(2);

      expect(converter.convertPositionToSpecific("T")).to.eql(null);

    })

    it("max coordinate value 2 players", function() {
      var converter = new basePositionConverter(2);

      expect(converter.maxCoordinateValue()).to.be.equal(9);

    })

    it("max coordinate value for differebt of 2 players", function() {
      var converter = new basePositionConverter(4);

      expect(converter.maxCoordinateValue()).to.be.equal(13);

    })

  })
})
