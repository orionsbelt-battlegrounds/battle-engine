function Coordinate(str) {
	var splitted = str.split("_");
	console.log(splitted.length);
	if( splitted.length == 2) {
		this.x = parseInt(splitted[0]);
		this.y = parseInt(splitted[1]);
	}else{
		throw new Error("Coordinate with a incorrect number of values.");
	}
}

Coordinate.prototype.equals = function(coordinate) {
	return this.x == coordinate.x && this.y == coordinate.y;
}

module.exports = Coordinate;