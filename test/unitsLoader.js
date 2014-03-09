
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
    expect(Object.keys(obb.units).length).to.equal(4);
  })

  it('has all available codes registered', function() {
    expect(Object.keys(obb.codes).length).to.equal(4);
  })

  describe('verifies that all units have correct properties', function() {
    _.each(obb.units, function process(unit) {
      it(unit.name + " is ok ", function(){
        expect(unit.name).to.be.a('string');
        expect(unit.code).to.be.a('string');
        expect(['light', 'medium', 'heavy']).to.contain(unit.category);
        expect(unit.attack).to.be.a('number');
        expect(unit.defense).to.be.a('number');
        expect(unit.range).to.be.a('number');
        expect(unit.value).to.be.a('number');
      })
    })
  })

})
