var Coordinate = require("coordinate.js");
var bonus = require("bonus.js");
var unitsLoader = require("../unitsLoader.js");


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

Element.prototype.getAttack : function(terrain,target) {
	bonus.getAttack(this,terrain,target);

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