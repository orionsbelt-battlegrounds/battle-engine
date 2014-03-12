var assert = require('assert');
var expect = require("expect.js");
var coordinate = require("./../../../src/engine/coordinate.js");
var basePositionConverter = require("./../../../src/engine/positionConverters/basePositionConverter.js");
var convertToPlayer1 = require("./../../../src/engine/positionConverters/convertToPlayer1.js");
var convertToPlayer2 = require("./../../../src/engine/positionConverters/convertToPlayer2.js");
var convertToPlayer3 = require("./../../../src/engine/positionConverters/convertToPlayer3.js");
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
      new positionType();
      expect(converter.convertPositionToBase(positionType.position["N"])).to.eql(positionType.position["N"]);

    })

    it("convert Position To Specific fail", function() {
      var converter = new basePositionConverter(2);

      expect(converter.convertPositionToSpecific("T")).to.eql(null);

    })

    it("convert Position To Base Success", function() {
      var converter = new basePositionConverter(2);
      new positionType();
      expect(converter.convertPositionToBase(positionType.position["N"])).to.eql(positionType.position["N"]);

    })

    it("convert Position To Base fail", function() {
      var converter = new basePositionConverter(2);

      expect(converter.convertPositionToBase("T")).to.eql(null);

    })

    it("convert Coordinate To Base Success", function() {
      var converter = new basePositionConverter(2);
      var coor = new coordinate(1,1);
      expect(converter.convertCoordinateToBase(coor)).to.eql(coor);

    })

    it("convert Coordinate To Specific Success", function() {
      var converter = new basePositionConverter(2);
      var coor = new coordinate(1,1);
      expect(converter.convertCoordinateToSpecific(coor)).to.eql(coor);

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

  describe('#convertToPlayer1', function() {
    it("is available", function() {
      assert(convertToPlayer1);
    })

    it("Resolve Ultimate Coordinate return null", function() {
      var coor = new coordinate(100,0);
      var converter = new convertToPlayer1(2);

      expect(converter.resolveUltimateCoordinate(coor)).to.eql(null);
      //assert.equal(converter.resolveUltimateCoordinate(coor),null);
     
    })

    it("Resolve Ultimate Coordinate player number <> 2", function() {
      var coor = new coordinate(100,0);
      var converter = new convertToPlayer1(4);

      expect(converter.resolveUltimateCoordinate(coor)).to.eql(null);
      //assert.equal(converter.resolveUltimateCoordinate(coor),null);
     
    })

    it("Resolve Ultimate Coordinate return coordinate9", function() {
      var converter = new convertToPlayer1(2);

      expect(converter.resolveUltimateCoordinate(converter.base.coordinate0)).to.eql(converter.base.coordinate9);

    })

    it("Resolve Ultimate Coordinate return coordinate0", function() {
      var converter = new convertToPlayer1(2);

      expect(converter.resolveUltimateCoordinate(converter.base.coordinate9)).to.eql(converter.base.coordinate0);

    })

    it("Resolve Ultimate Coordinate return coordinate19", function() {
      var converter = new convertToPlayer1(2);

      expect(converter.resolveUltimateCoordinate(converter.base.coordinate10)).to.eql(converter.base.coordinate19);

    })

    it("Resolve Ultimate Coordinate return coordinate10", function() {
      var converter = new convertToPlayer1(2);

      expect(converter.resolveUltimateCoordinate(converter.base.coordinate19)).to.eql(converter.base.coordinate10);

    })

    it("convert Position To Specific Success", function() {
      var converter = new convertToPlayer1(2);
      new positionType();
      expect(converter.convertPositionToSpecific(positionType.position["N"])).to.eql(positionType.position["N"]);

    })

    it("convert Position To Specific fail", function() {
      var converter = new convertToPlayer1(2);

      expect(converter.convertPositionToSpecific("T")).to.eql(null);

    })

    it("convert Position To Base Success", function() {
      var converter = new convertToPlayer1(2);
      new positionType();
      expect(converter.convertPositionToBase(positionType.position["N"])).to.eql(positionType.position["N"]);

    })

    it("convert Position To Base fail", function() {
      var converter = new convertToPlayer1(2);

      expect(converter.convertPositionToBase("T")).to.eql(null);

    })

    it("convert Coordinate To Base Success", function() {
      var converter = new convertToPlayer1(2);
      var coor = new coordinate(1,1);
      expect(converter.convertCoordinateToBase(coor)).to.eql(coor);

    })

    it("convert Coordinate To Specific Success", function() {
      var converter = new convertToPlayer1(2);
      var coor = new coordinate(1,1);
      expect(converter.convertCoordinateToSpecific(coor)).to.eql(coor);

    })

    it("max coordinate value 2 players", function() {
      var converter = new convertToPlayer1(2);

      expect(converter.maxCoordinateValue()).to.be.equal(9);

    })

    it("max coordinate value for differebt of 2 players", function() {
      var converter = new convertToPlayer1(4);

      expect(converter.maxCoordinateValue()).to.be.equal(13);

    })

  })

  describe('#convertToPlayer2', function() {
    it("is available", function() {
      assert(convertToPlayer2);
    })

    it("convert Position To Base Success", function() {
      var converter = new convertToPlayer2(2);
      new positionType();
      expect(converter.convertPositionToBase(positionType.position["N"])).to.eql(positionType.position["S"]);

    })

    it("convert Position To Base fail", function() {
      var converter = new convertToPlayer2(2);
      expect(converter.convertPositionToBase("T")).to.eql(null);

    })

    it("convert Position To Specific Success", function() {
      var converter = new convertToPlayer2(2);
      new positionType();
      expect(converter.convertPositionToSpecific(positionType.position["S"])).to.eql(positionType.position["N"]);

    })

    it("convert Position To Specific fail", function() {
      var converter = new convertToPlayer2(2);
      expect(converter.convertPositionToSpecific("T")).to.eql(null);

    })

    it("Resolve Ultimate Coordinate return null", function() {
      var coor = new coordinate(100,0);
      var converter = new convertToPlayer2(2);

      expect(converter.resolveUltimateCoordinate(coor)).to.eql(null);
      //assert.equal(converter.resolveUltimateCoordinate(coor),null);
     
    })

    it("Resolve Ultimate Coordinate player number <> 2", function() {
      var coor = new coordinate(100,0);
      var converter = new convertToPlayer2(4);

      expect(converter.resolveUltimateCoordinate(coor)).to.eql(null);
      //assert.equal(converter.resolveUltimateCoordinate(coor),null);
     
    })

    it("Resolve Ultimate Coordinate return coordinate9", function() {
      var converter = new convertToPlayer2(2);

      expect(converter.resolveUltimateCoordinate(converter.base.coordinate0)).to.eql(converter.base.coordinate9);

    })

    it("Resolve Ultimate Coordinate return coordinate0", function() {
      var converter = new convertToPlayer2(2);

      expect(converter.resolveUltimateCoordinate(converter.base.coordinate9)).to.eql(converter.base.coordinate0);

    })

    it("Resolve Ultimate Coordinate return coordinate19", function() {
      var converter = new convertToPlayer2(2);

      expect(converter.resolveUltimateCoordinate(converter.base.coordinate10)).to.eql(converter.base.coordinate19);

    })

    it("Resolve Ultimate Coordinate return coordinate10", function() {
      var converter = new convertToPlayer2(2);

      expect(converter.resolveUltimateCoordinate(converter.base.coordinate19)).to.eql(converter.base.coordinate10);

    })

    it("max coordinate value 2 players", function() {
      var converter = new convertToPlayer2(2);

      expect(converter.maxCoordinateValue()).to.be.equal(9);

    })

    it("max coordinate value for differebt of 2 players", function() {
      var converter = new convertToPlayer2(4);

      expect(converter.maxCoordinateValue()).to.be.equal(13);

    })

    it("convert Coordinate To Base not null", function() {
      var converter = new convertToPlayer2(2);
      var coor = converter.base.coordinate9;
      expect(converter.convertCoordinateToBase(coor)).to.eql(converter.base.coordinate0);

    })

    it("convert Coordinate To Specific not null", function() {
      var converter = new convertToPlayer2(2);
      var coor = converter.base.coordinate0;
      expect(converter.convertCoordinateToSpecific(coor)).to.eql(converter.base.coordinate9);

    })

    it("convert Coordinate To Base new coordinate", function() {
      var converter = new convertToPlayer2(2);
      var coor = new coordinate(6,0);
      expect(converter.convertCoordinateToBase(coor)).to.eql(new coordinate(3,9));

    })

    it("convert Coordinate To Specific new coordinate", function() {
      var converter = new convertToPlayer2(2);
      var coor = new coordinate(5,9);
      expect(converter.convertCoordinateToSpecific(coor)).to.eql(new coordinate(4,0));

    })
  })

  describe('#convertToPlayer3', function() {
    it("is available", function() {
      assert(convertToPlayer3);
    })

    it("Resolve Ultimate Coordinate return null", function() {
      var coor = new coordinate(100,0);
      var converter = new convertToPlayer3(2);

      expect(converter.resolveUltimateCoordinate(coor)).to.eql(null);
      //assert.equal(converter.resolveUltimateCoordinate(coor),null);
     
    })

    it("Resolve Ultimate Coordinate player number <> 2", function() {
      var coor = new coordinate(100,0);
      var converter = new convertToPlayer3(4);

      expect(converter.resolveUltimateCoordinate(coor)).to.eql(null);
      //assert.equal(converter.resolveUltimateCoordinate(coor),null);
     
    })

    it("Resolve Ultimate Coordinate return coordinate9", function() {
      var converter = new convertToPlayer3(2);

      expect(converter.resolveUltimateCoordinate(converter.base.coordinate0)).to.eql(converter.base.coordinate9);

    })

    it("Resolve Ultimate Coordinate return coordinate0", function() {
      var converter = new convertToPlayer3(2);

      expect(converter.resolveUltimateCoordinate(converter.base.coordinate9)).to.eql(converter.base.coordinate0);

    })

    it("Resolve Ultimate Coordinate return coordinate19", function() {
      var converter = new convertToPlayer3(2);

      expect(converter.resolveUltimateCoordinate(converter.base.coordinate10)).to.eql(converter.base.coordinate19);

    })

    it("Resolve Ultimate Coordinate return coordinate10", function() {
      var converter = new convertToPlayer3(2);

      expect(converter.resolveUltimateCoordinate(converter.base.coordinate19)).to.eql(converter.base.coordinate10);

    })

    it("convert Position To Specific Success", function() {
      var converter = new convertToPlayer3(2);
      new positionType();
      expect(converter.convertPositionToSpecific(positionType.position["N"])).to.eql(positionType.position["W"]);

    })

    it("convert Position To Specific fail", function() {
      var converter = new convertToPlayer3(2);

      expect(converter.convertPositionToSpecific("T")).to.eql(null);

    })

    it("convert Position To Base Success", function() {
      var converter = new convertToPlayer3(2);
      new positionType();
      expect(converter.convertPositionToBase(positionType.position["N"])).to.eql(positionType.position["E"]);

    })

    it("convert Position To Base fail", function() {
      var converter = new convertToPlayer3(2);

      expect(converter.convertPositionToBase("T")).to.eql(null);

    })

    it("convert Coordinate To Base Success", function() {
      var converter = new convertToPlayer3(2);
      var coor = new coordinate(2,1);
      expect(converter.convertCoordinateToBase(coor)).to.eql(new coordinate(8,2));

    })

    it("convert Coordinate To Specific Success", function() {
      var converter = new convertToPlayer3(2);
      var coor = new coordinate(2,1);
      expect(converter.convertCoordinateToSpecific(coor)).to.eql(new coordinate(1,7));

    })

    it("max coordinate value 2 players", function() {
      var converter = new convertToPlayer3(2);

      expect(converter.maxCoordinateValue()).to.be.equal(9);

    })

    it("max coordinate value for differebt of 2 players", function() {
      var converter = new convertToPlayer3(4);

      expect(converter.maxCoordinateValue()).to.be.equal(13);

    })

  })
})
