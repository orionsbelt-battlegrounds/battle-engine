
var expect = require("expect.js");
var obb = require("./../obb.js");

describe('unitLoader', function() {

  it('units are available on the main module', function() {
    expect(obb.units).not.to.be.empty();
  })

  it('has all available units registered', function() {
    expect(Object.keys(obb.units).length).to.equal(2);
  })

})
