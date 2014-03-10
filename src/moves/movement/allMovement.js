(function allMovement(module) {

  module.name = "allMovement";

  module.isValid = function(src,dst,position) {
    if( dst.x <= src.x + 1 && dst.x >= src.x - 1 ) {
      if( dst.y <= src.y + 1 && dst.y >= src.y - 1 ) {
        return true;
      }
    }
    return false;
  };

})(exports);
