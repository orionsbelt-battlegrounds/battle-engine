var expect = require("expect.js");
var Board = require("./../../src/engine/board.js");
var Coordinate = require("./../../src/engine/coordinate.js");

describe('board', function(){

  describe('#board', function() {

    it('1_2 should been added', function() {
      var board = new Board();
      var coordinate = new Coordinate(1,2);
      
      board.add(coordinate, 1);
      expect(board.contains(coordinate)).to.be.ok();
    })
  })
});