!function(e){if("object"==typeof exports)module.exports=e();else if("function"==typeof define&&define.amd)define(e);else{var f;"undefined"!=typeof window?f=window:"undefined"!=typeof global?f=global:"undefined"!=typeof self&&(f=self),f.obb=e()}}(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"ZIjswD":[function(_dereq_,module,exports){
(function obb(exports) {

  var obb = exports;

  obb.package = _dereq_('./package.json');

  obb.moves = {};
  obb.moves.diagonalMovement = _dereq_('./src/moves/movement/diagonalMovement.js')

})(exports);

},{"./package.json":3,"./src/moves/movement/diagonalMovement.js":4}],"./obb.js":[function(_dereq_,module,exports){
module.exports=_dereq_('ZIjswD');
},{}],3:[function(_dereq_,module,exports){
module.exports={
  "name" : "obb.battleEngine",
  "version" : "0.0.2",
  "main" : "./main.js",
  "private" : false,
  "scripts" : {
    "test" : "make test"
  },
  "repository": {
    "type" : "git",
    "url" : "https://github.com/orionsbelt-battlegrounds/battle-engine.git"
  },
  "devDependencies" : {
    "mocha" : "*",
    "expect.js" : "*",
    "browserify" : "*"
  }
}

},{}],4:[function(_dereq_,module,exports){
(function diagonalMovement(module) {

  module.isValid = function isValid() {
    return true;
  };

  module.process = function isValid() {
  };

})(exports);

},{}]},{},["ZIjswD"])
("ZIjswD")
});