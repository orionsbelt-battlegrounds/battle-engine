(function allMovement(module) {

  module.isValid = function(numberOfPlayers,dst) {
    if( numberOfPlayers == 2 ) {
      if( dst.y != 8 && dst.y != 7 ) {
        return false;
      }

      return true;
    }

    //4 Players
    if( ( dst.y == 12 || dst.y == 11 ) && ( dst.x > 2 && dst.x < 11 ) ) {
      return true;
    }

    return false;
  };

})(exports);
