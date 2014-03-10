var expect = require("expect.js");
var normalMovement = require("./../../../src/moves/movement/normalMovement.js");
var Coordinate = require("./../../../src/engine/coordinate.js");

describe('normalMovement', function(){

  describe('#isValid', function() {

    it('should be available', function() {
      expect(normalMovement.isValid).to.be.ok();
    });

    it('should respond to name', function() {
      expect(normalMovement.name).to.be("normalMovement");
    });

    it('should be valid', function() {
      var src = new Coordinate(3,7);
      var dst = new Coordinate(3,6);
      expect(normalMovement.isValid(src,dst,"N")).to.be.ok();
    });

    it('should be valid', function() {
      var src = new Coordinate(3,7);
      var dst = new Coordinate(3,8);
      expect(normalMovement.isValid(src,dst,"N")).to.be.ok();
    });

    it('should be valid', function() {
      var src = new Coordinate(3,7);
      var dst = new Coordinate(2,7);
      expect(normalMovement.isValid(src,dst,"N")).to.be.ok();
    });

    it('should be valid', function() {
      var src = new Coordinate(3,7);
      var dst = new Coordinate(4,7);
      expect(normalMovement.isValid(src,dst,"N")).to.be.ok();
    });

    it('should be invalid', function() {
      var src = new Coordinate(3,7);
      var dst = new Coordinate(2,6);
      expect(!normalMovement.isValid(src,dst,"N")).to.be.ok();
    });

    it('should be invalid', function() {
      var src = new Coordinate(3,7);
      var dst = new Coordinate(4,6);
      expect(!normalMovement.isValid(src,dst,"N")).to.be.ok();
    });

    it('should be invalid', function() {
      var src = new Coordinate(3,7);
      var dst = new Coordinate(2,8);
      expect(!normalMovement.isValid(src,dst,"N")).to.be.ok();
    });

    it('should be invalid', function() {
      var src = new Coordinate(3,7);
      var dst = new Coordinate(4,8);
      expect(!normalMovement.isValid(src,dst,"N")).to.be.ok();
    });

    it('should be invalid', function() {
      var src = new Coordinate(3,7);
      var dst = new Coordinate(8,8);
      expect(!normalMovement.isValid(src,dst,"N")).to.be.ok();
    });

  });

});
