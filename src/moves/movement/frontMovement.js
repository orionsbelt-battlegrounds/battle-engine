(function frontMovement(module) {

  var frontValues = {
    N : { x : 0, y: -1 },
    S : { x : 0, y: 1 },
    W : { x : -1, y: 0 },
    E : { x : 1, y: 0 }
  };

  module.isValid = function(src,dst,position) {
    var value =  frontValues[position];
    if( value != null ) {
      return dst.x == src.x + value.x && dst.y == src.y + value.y;
    }
    throw new Error("Invalid position.")
  };
})(exports);
