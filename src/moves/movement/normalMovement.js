(function normalMovement(module) {

  module.name = 'normalMovement';

  module.isValid = function(src,dst,position) {
    if( dst.x <= src.x + 1 && dst.x >= src.x - 1 && src.y == dst.y ) {
      return true;
    }

    if( dst.y <= src.y + 1 && dst.y >= src.y - 1 && src.x == dst.x ) {
      return true;
    }

    return false;
  };

})(exports);
