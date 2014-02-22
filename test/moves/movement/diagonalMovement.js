var expect = require("expect.js");
var obb = require("./../../../obb.js");

describe('diagonalMovement', function(){

  describe('#isValid', function() {

    it('should be available', function() {
      expect(obb.moves.diagonalMovement.isValid).to.be.ok();
    });

  });

  describe('#process', function() {
    it('should be available', function() {
      expect(obb.moves.diagonalMovement.process).to.be.ok();
    });
  });

});
