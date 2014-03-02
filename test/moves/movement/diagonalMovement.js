var expect = require("expect.js");
var diagonalMovement = require("./../../../src/moves/movement/diagonalMovement.js");

describe('diagonalMovement', function(){

  describe('#isValid', function() {

    it('should be available', function() {
      expect(diagonalMovement.isValid).to.be.ok();
    });

  });

});
