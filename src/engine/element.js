var Coordinate = require("coordinate");


Element.prototype.clone : function () {

}

Element.prototype.toString : function () {

}

//----------------------
//      Effects
//----------------------

Element.prototype.addEffects : function(target) {

}

Element.prototype.resolveEffects : function() {

}

//----------------------
//   Unit Properties
//----------------------

Element.prototype.getAttack : function() {


}

Element.prototype.getDefense : function() {


}

Element.prototype.getRange : function() {
}


//----------------------
//      Constructor
//----------------------

// content format:
// unit-coordinate-quantity-(quantity ou quantity-effect)


function Element(content){
	var splittedData = content.split("-");

	this.quantity = 0;
	this.originalQuantity = this.quantity;

	this.position = null;
	remainingDefense = 0;
	
	canBeMoved = true,
	canUseSpecialAbilities = true,
	coolDown = 0;

	effects = {};
}


module.exports = Element;