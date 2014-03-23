var expect = require("expect.js");
var obb = require("./../../obb.js");

var Element = require("./../../src/engine/element.js");

describe('element', function(){

  describe('#element', function() {

    it('element with wrong attributes', function() {
      var str = "r-1_2-100-N";
      var element = new Element(str);

      expect(element.unit.name).to.be.equal("rain");
      expect(element.coordinate.x).to.be.equal(1);
      expect(element.coordinate.y).to.be.equal(2);
      expect(element.quantity).to.be.equal(100);
      expect(element.position).to.be.equal("N");
      expect(element.originalQuantity).to.be.equal(100);

    })

  })
});