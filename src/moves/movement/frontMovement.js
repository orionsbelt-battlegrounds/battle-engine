(function frontMovement(module) {

	module.isValid = function(src,dst,position) {
 		switch(position) {
 			case "N":
 				if( dst.x == src.x - 1 && src.y == dst.y ) {
					return true;
				}
			case "S":
				if( dst.x == src.x + 1 && src.y == dst.y ) {
					return true;
				}
			case "W":
				if( dst.y == src.y - 1 && src.x == dst.x ) {
					return true;
				}
			case "E":
				if( dst.y == src.y + 1 && src.x == dst.x ) {
					return true;
				}
			default:
				throw new Error("Invalid position.")
		}
		return false;

  	};

})(exports);
