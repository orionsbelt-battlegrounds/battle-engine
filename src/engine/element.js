var Coordinate = require("coordinate.js");
var bonus = require("bonus.js");
var unitsLoader = require("../unitsLoader.js");


//----------------------
//      Logic
//----------------------

function renewEffect(element,effect) {
  if( effect.cumulative ) {
    element.effects[effect.name].push(effect);
  }else{
    element.effects[effect.name] = [effect];
  }
}

function addNewEffect(element,effect) {
  element.effects[effect.name] = [effect];
}

//----------------------
//      Utilities
//----------------------

Element.prototype.clone : function () {

}

Element.prototype.toString : function () {

}

//----------------------
//      Effects
//----------------------

Element.prototype.addEffects : function(effect) {
  var currentEffect = effects[effect.name];
  if( currentEffect !== null ) {
    renewEffect(this, effect);
  }else{
    addNewEffect(this, effect);
  }
}

Element.prototype.resolveEffects : function() {
  _.each(this.effects, function(element) {
    if( !element.resolved ) {
      if( element.resolve() ) {
        delete this.effects[element.name];
      }
    }
  });
}

//----------------------
//   Unit Properties
//----------------------

Element.prototype.getAttack : function(terrain,target) {
  bonus.getAttack(this,terrain,target);
}

Element.prototype.getDefense : function() {
  bonus.getDefense(this,terrain,target);
}

Element.prototype.getRange : function() {
  bonus.getRange(this,terrain,target);
}


//----------------------
//      Constructor
//----------------------

// content format:
// unit-coordinate-quantity-(quantity ou quantity-effect)


function Element(content){
  this.canBeMoved = true,
  this.canUseSpecialAbilities = true,
  this.coolDown = 0;

  var splittedData = content.split("-");

  this.unit = unitsLoader[splittedData[0]];
  this.coordinate = Coordinate.parse(splittedData[1]);
  this.quantity = splittedData[2];
  this.originalQuantity = this.quantity;

  this.position = splittedData[3];

  if( splittedData.length > 4) {
    var data = splittedData[4];
    var rd = parseInt(data);
    if( rd != NaN ) {
      this.remainingDefense = rd;
      if( splittedData.length > 5) {
        this.effects = parseEffects(splittedData[5]);
      }
    }else{
      this.effects = parseEffects(splittedData[4]);
    }
  }
}

module.exports = Element;