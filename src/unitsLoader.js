var fs = require('fs');
var _ = require('underscore');
var files = fs.readdirSync('./src/units/');
var hash = {};

_.each(files, function selectedFile(file) {
  var unit = require('./../src/units/' + file);
  hash[unit.name] = unit;
});

module.exports = hash;

