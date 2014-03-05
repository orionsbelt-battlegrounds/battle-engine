var expect = require("expect.js");
var Coordinate = require("./../../src/engine/coordinate.js");

describe('coordinate', function(){

  describe('#coordinate', function() {

    it('1,2 should be valid', function() {
      var coordinate = new Coordinate(1,2);
      expect(coordinate.x).to.be.equal(1);
      expect(coordinate.y).to.be.equal(2);
    })

  }),
  
  describe('#parse', function() {
    it('3_4 should be valid', function() {
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
      expect(Coordinate.parse).withArgs('4').to.throwError();
    }),

    it('should throw an error', function() {
      expect(Coordinate.parse).withArgs(null).to.throwError();
    })
  }),

  describe('#leftCoordinate', function() {
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

    it('should throw an error', function() {
      var coord = new Coordinate(1,1);
      expect(coord.leftCoordinate).withArgs("A",2).to.throwError();
    })
  }),

  describe('#rightCoordinate', function() {
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

    it('should throw an error', function() {
      var coord = new Coordinate(1,1);
      expect(coord.rightCoordinate).withArgs("A",2).to.throwError();
    })

  }),

  describe('#nextCoordinate', function() {

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

    it('should throw an error', function() {
      var coord = new Coordinate(1,1);
      expect(coord.nextCoordinate).withArgs("A",2).to.throwError();
    }),

    it('next coordinate should be 0', function() {
      var coordinate = new Coordinate(1,1);

      var newCoordinate = coordinate.nextCoordinate("N",2);

      expect(newCoordinate.x).to.be.equal(0);
      expect(newCoordinate.y).to.be.equal(0);
    }),

    it('next coordinate should be 9', function() {
      var coordinate = new Coordinate(7,8);

      var newCoordinate = coordinate.nextCoordinate("E",2);

      expect(newCoordinate.x).to.be.equal(9);
      expect(newCoordinate.y).to.be.equal(9);
    }),

    it('next coordinate should be 13', function() {
      var coordinate = new Coordinate(1,12);

      var newCoordinate = coordinate.nextCoordinate("E",4);

      expect(newCoordinate.x).to.be.equal(13);
      expect(newCoordinate.y).to.be.equal(13);
    })

  }),

  describe('#previousCoordinate', function() {
  
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
    }),

    it('should throw an error', function() {
      var coord = new Coordinate(1,1);
      expect(coord.previousCoordinate).withArgs("A",2).to.throwError();
    }),

    it('previous coordinate should be 9', function() {
      var coordinate = new Coordinate(8,8);

      var newCoordinate = coordinate.previousCoordinate("N",2);

      expect(newCoordinate.x).to.be.equal(9);
      expect(newCoordinate.y).to.be.equal(9);
    }),

    it('previous coordinate should be 13', function() {
      var coordinate = new Coordinate(12,1);

      var newCoordinate = coordinate.previousCoordinate("N",4);

      expect(newCoordinate.x).to.be.equal(13);
      expect(newCoordinate.y).to.be.equal(13);
    })

  }),

  describe('#equals', function() {

    it('should be equal', function() {
      var coordinate1 = new Coordinate(1,12);
      var coordinate2 = new Coordinate(1,12);

      expect(coordinate1.equals(coordinate2)).to.be.ok();
    })
  });
});
