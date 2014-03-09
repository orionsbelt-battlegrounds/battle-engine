(function obb(exports) {

  var obb = exports;

  obb.package = require('./package.json');
  obb.units = require('./src/unitsLoader').units;
  obb.codes = require('./src/unitsLoader').codes;

})(exports);
