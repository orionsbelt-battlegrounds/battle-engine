(function obb(exports) {

  var obb = exports;

  obb.package = require('./package.json');

  obb.moves = {};
  obb.moves.diagonalMovement = require('./src/moves/movement/diagonalMovement.js')

})(exports);
