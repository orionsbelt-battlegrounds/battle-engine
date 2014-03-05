(function allMovement(module) {

  module.isValid = function(numberOfPlayers,dst) {
  	if( numberOfPlayers == 2 ) {
		if( dst.x != 8 && dst.x != 7 ) {
			return false;
		}

		return true;
	}

	//4 Players
	if( ( dst.x == 12 || dst.x == 11 ) && ( dst.y > 2 && dst.y < 11 ) ) {
		return true;
	}

	return false;
  };

})(exports);
