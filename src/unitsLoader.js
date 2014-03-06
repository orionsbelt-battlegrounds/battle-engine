var fs = require('fs');
var path = require('path');
var _ = require('underscore');
var files = fs.readdirSync(path.join(__dirname, 'units/'));
var hash = {};

_.each(files, function selectedFile(file) {
  var unit = require('./../src/units/' + file);
  hash[unit.name] = unit;
});

module.exports = hash;

