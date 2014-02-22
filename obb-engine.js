(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
(function obb(exports) {

  var obb = exports;

  obb.package = require('./package.json');

  obb.moves = {};
  obb.moves.diagonalMovement = require('./src/moves/movement/diagonalMovement.js')

})(exports);

},{"./package.json":2,"./src/moves/movement/diagonalMovement.js":3}],2:[function(require,module,exports){
module.exports={
  "name" : "obb.battleEngine",
  "version" : "0.0.1",
  "main" : "./main.js",
  "private" : false,
  "scripts" : {
    "start" : "node main.js",
    "test" : "make test",
    "test-w" : "make test-w",
    "trace" : "make trace"
  },
  "devDependencies" : {
    "mocha" : "*",
    "expect.js" : "*",
    "browserify" : "*"
  }
}

},{}],3:[function(require,module,exports){
(function diagonalMovement(module) {

  module.isValid = function isValid() {
    return true;
  };

  module.process = function isValid() {
  };

})(exports);

},{}]},{},[1])