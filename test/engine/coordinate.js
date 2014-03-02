var expect = require("expect.js");
var Coordinate = require("./../../src/engine/coordinate.js");

describe('coordinate', function(){

  describe('#coordinate', function() {

    it('should be valid', function() {
    	var coordinate = new Coordinate("1_2");
    	expect(coordinate.x).to.be.equal(1);
    	expect(coordinate.y).to.be.equal(2);
    }),

    it('parameters should be numbers', function() {
    	var coordinate = new Coordinate("3_4");
    	expect(coordinate.x).to.be.a("number");
    	expect(coordinate.y).to.be.a("number");
    }),

    it('should throw an error', function() {
    	//expect(new Coordinate("4")).to.throwError();
    })

  });

});
