function Coordinate(str) {
	var splitted = str.split("_");
	this.x = parseInt(splitted[0]);
	this.y = parseInt(splitted[1]);
}

Coordinate.prototype.equals = function(coordinate) {
	return this.x == coordinate.x && this.y == coordinate.y;
})

module.exports = Coordinate;