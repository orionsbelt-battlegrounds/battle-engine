var fs = require('fs');
var path = require('path');
var _ = require('underscore');
var files = fs.readdirSync(path.join(__dirname, 'units/'));
var hash = {};
var codes = {};

_.each(files, function selectedFile(file) {
  var unit = require('./../src/units/' + file);
  hash[unit.name] = unit;
  codes[unit.code] = unit;
});

module.exports.units = hash;
module.exports.codes = codes;

