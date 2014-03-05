var expect = require("expect.js");
var allMovement = require("./../../../src/moves/movement/allMovement.js");
var Coordinate = require("./../../../src/engine/coordinate.js");

describe('allMovement', function(){

  describe('#isValid', function() {

    it('should be available', function() {
      expect(allMovement.isValid).to.be.ok();
    });

    it('should be valid', function() {
      var src = new Coordinate(3,7);
      var dst = new Coordinate(3,6);
        expect(allMovement.isValid(src,dst,"N")).to.be.ok();
    });

    it('should be valid', function() {
      var src = new Coordinate(3,7);
      var dst = new Coordinate(3,8);
        expect(allMovement.isValid(src,dst,"N")).to.be.ok();
    });

    it('should be valid', function() {
      var src = new Coordinate(3,7);
      var dst = new Coordinate(2,7);
        expect(allMovement.isValid(src,dst,"N")).to.be.ok();
    });

    it('should be valid', function() {
      var src = new Coordinate(3,7);
      var dst = new Coordinate(4,7);
        expect(allMovement.isValid(src,dst,"N")).to.be.ok();
    });

    it('should be valid', function() {
    	var src = new Coordinate(3,7);
    	var dst = new Coordinate(2,6);
      	expect(allMovement.isValid(src,dst,"N")).to.be.ok();
    });

    it('should be valid', function() {
    	var src = new Coordinate(3,7);
    	var dst = new Coordinate(4,6);
      	expect(allMovement.isValid(src,dst,"N")).to.be.ok();
    });

    it('should be valid', function() {
    	var src = new Coordinate(3,7);
    	var dst = new Coordinate(2,8);
      	expect(allMovement.isValid(src,dst,"N")).to.be.ok();
    });

    it('should be valid', function() {
    	var src = new Coordinate(3,7);
    	var dst = new Coordinate(4,8);
      	expect(allMovement.isValid(src,dst,"N")).to.be.ok();
    });

    it('should be invalid', function() {
      var src = new Coordinate(3,7);
      var dst = new Coordinate(8,8);
        expect(!allMovement.isValid(src,dst,"N")).to.be.ok();
    });

  });

});
