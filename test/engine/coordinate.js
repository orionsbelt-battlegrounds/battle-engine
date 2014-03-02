var expect = require("expect.js");
var Coordinate = require("./../../src/engine/coordinate.js");

describe('coordinate', function(){

  describe('#coordinate', function() {

    it('should be valid', function() {
    	var coordinate = new Coordinate(1,2);
    	expect(coordinate.x).to.be.equal(1);
    	expect(coordinate.y).to.be.equal(2);
    }),

    it('should be valid', function() {
        var coordinate = Coordinate.parse("3_4");
        expect(coordinate.x).to.be.equal(3);
        expect(coordinate.y).to.be.equal(4);
    }),

    it('parameters should be numbers', function() {
    	var coordinate = Coordinate.parse("3_4");
    	expect(coordinate.x).to.be.a("number");
    	expect(coordinate.y).to.be.a("number");
    }),

    it('should throw an error', function() {
    	//expect(new Coordinate("4")).to.throwError();
    }),

    it('left coordinate N should be valid', function() {
        var coordinate = new Coordinate(2,2);

        var newCoordinate = coordinate.leftCoordinate("N",2);

        expect(newCoordinate.x).to.be.equal(2);
        expect(newCoordinate.y).to.be.equal(1);
    
    }),
    
    it('left coordinate S should be valid', function() {
        var coordinate = new Coordinate(2,2);

        var newCoordinate = coordinate.leftCoordinate("S",2);

        expect(newCoordinate.x).to.be.equal(2);
        expect(newCoordinate.y).to.be.equal(3);

    }),
    
    it('left coordinate W should be valid', function() {
        var coordinate = new Coordinate(2,2);

        var newCoordinate = coordinate.leftCoordinate("W",2);

        expect(newCoordinate.x).to.be.equal(3);
        expect(newCoordinate.y).to.be.equal(2);

    }),
    
    it('left coordinate E should be valid', function() {
        var coordinate = new Coordinate(2,2);

        var newCoordinate = coordinate.leftCoordinate("E",2);

        expect(newCoordinate.x).to.be.equal(1);
        expect(newCoordinate.y).to.be.equal(2);
    }),

    it('right coordinate N should be valid', function() {
        var coordinate = new Coordinate(2,2);

        var newCoordinate = coordinate.rightCoordinate("N",2);

        expect(newCoordinate.x).to.be.equal(2);
        expect(newCoordinate.y).to.be.equal(3);
    }),

    it('right coordinate S should be valid', function() {
        var coordinate = new Coordinate(2,2);

        var newCoordinate = coordinate.rightCoordinate("S",2);

        expect(newCoordinate.x).to.be.equal(2);
        expect(newCoordinate.y).to.be.equal(1);
    }),

    it('right coordinate W should be valid', function() {
        var coordinate = new Coordinate(2,2);

        var newCoordinate = coordinate.rightCoordinate("W",2);

        expect(newCoordinate.x).to.be.equal(1);
        expect(newCoordinate.y).to.be.equal(2);
    }),

    it('right coordinate E should be valid', function() {
        var coordinate = new Coordinate(2,2);

        var newCoordinate = coordinate.rightCoordinate("E",2);

        expect(newCoordinate.x).to.be.equal(3);
        expect(newCoordinate.y).to.be.equal(2);
    }),

    it('next coordinate N should be valid', function() {
        var coordinate = new Coordinate(2,2);

        var newCoordinate = coordinate.nextCoordinate("N",2);

        expect(newCoordinate.x).to.be.equal(1);
        expect(newCoordinate.y).to.be.equal(2);
    }),

    it('next coordinate S should be valid', function() {
        var coordinate = new Coordinate(2,2);

        var newCoordinate = coordinate.nextCoordinate("S",2);

        expect(newCoordinate.x).to.be.equal(3);
        expect(newCoordinate.y).to.be.equal(2);
    }),

    it('next coordinate W should be valid', function() {
        var coordinate = new Coordinate(2,2);

        var newCoordinate = coordinate.nextCoordinate("W",2);

        expect(newCoordinate.x).to.be.equal(2);
        expect(newCoordinate.y).to.be.equal(1);
    }),

    it('next coordinate E should be valid', function() {
        var coordinate = new Coordinate(2,2);

        var newCoordinate = coordinate.nextCoordinate("E",2);

        expect(newCoordinate.x).to.be.equal(2);
        expect(newCoordinate.y).to.be.equal(3);
    }),

    it('previous coordinate N should be valid', function() {
        var coordinate = new Coordinate(2,2);

        var newCoordinate = coordinate.previousCoordinate("N",2);

        expect(newCoordinate.x).to.be.equal(3);
        expect(newCoordinate.y).to.be.equal(2);
    }),

    it('previous coordinate S should be valid', function() {
        var coordinate = new Coordinate(2,2);

        var newCoordinate = coordinate.previousCoordinate("S",2);

        expect(newCoordinate.x).to.be.equal(1);
        expect(newCoordinate.y).to.be.equal(2);
    }),

    it('previous coordinate W should be valid', function() {
        var coordinate = new Coordinate(2,2);

        var newCoordinate = coordinate.previousCoordinate("W",2);

        expect(newCoordinate.x).to.be.equal(2);
        expect(newCoordinate.y).to.be.equal(3);
    }),

    it('previous coordinate E should be valid', function() {
        var coordinate = new Coordinate(2,2);

        var newCoordinate = coordinate.previousCoordinate("E",2);

        expect(newCoordinate.x).to.be.equal(2);
        expect(newCoordinate.y).to.be.equal(1);
    })

  });

});
