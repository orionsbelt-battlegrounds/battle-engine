var expect = require("expect.js");
var Coordinate = require("./../../src/engine/coordinate.js");

describe('coordinate', function(){

  describe('#coordinate', function() {

    it('should be valid', function() {
    	var coordinate = new Coordinate("1_2");
    	expect(coordinate.x).to.be.equal(1);
    	expect(coordinate.y).to.be.equal(2);
    });

  });

});
