
var _ = require('underscore');
var expect = require("expect.js");
var obb = require("./../obb.js");

describe('unitLoader', function() {

  it('units are available on the main module', function() {
    expect(obb.units).not.to.be.empty();
  })

  it('codes are available on the main module', function() {
    expect(obb.codes).not.to.be.empty();
  })

  it('has all available units registered', function() {
    expect(Object.keys(obb.units).length).to.equal(12);
  })

  it('each unit has an unique name', function() {
    var names = _.map(obb.units, function(unit) { return unit.name });
    var noDuplicates = _.unique(names);
    expect(noDuplicates.length).to.eql(Object.keys(obb.units).length);
  })

  it('each unit has an unique code', function() {
    var codes = _.map(obb.units, function(unit) { return unit.code });
    var noDuplicates = _.unique(codes);
    expect(noDuplicates.length).to.eql(Object.keys(obb.units).length);
  })

  it('has all available codes registered', function() {
    expect(Object.keys(obb.codes).length).to.equal(12);
  })

  describe('verifies that all units have correct properties', function() {
    _.each(obb.units, function process(unit) {
      it(unit.name + " is ok ", function(){
        expect(unit.name).to.be.a('string');
        expect(unit.code).to.be.a('string');

        expect(unit.movementType).not.to.be.empty();

        expect(['light', 'medium', 'heavy']).to.contain(unit.category);
        expect(['mechanic', 'animal']).to.contain(unit.type);
        expect(['air', 'ground', 'water']).to.contain(unit.displacement);

        expect(unit.attack).to.be.a('number');
        expect(unit.defense).to.be.a('number');
        expect(unit.range).to.be.a('number');
        expect(unit.value).to.be.a('number');
        expect(unit.movementCost).to.be.a('number');

        expect(unit.attackMoves).to.be.an('array');
        expect(unit.posAttackMoves).to.be.an('array');
        expect(unit.posDefenseMoves).to.be.an('array');
        expect(unit.defenseMoves).to.be.an('array');
      })
    })
  })

})
