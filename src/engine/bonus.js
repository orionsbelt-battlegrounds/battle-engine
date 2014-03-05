function checkBonus(origin, bonusType) {
  if( bonustype in origin.bonus) {
      return origin.bonus[bonustype];
  }
  return 0;
}


function getBonus(type, terrain, origin, target) {
  var bonus = 0;

  bonus += checkBonus(origin,terrain);
  bonus += checkBonus(origin,target.type);
  bonus += checkBonus(origin,target.category);
  bonus += checkBonus(origin,target.displacement);
  bonus += checkBonus(origin,target.name);

  return bonus;
}


function getAttack(terrain, origin, target) {
  return origin.attack + getBonus("attack", terrain, origin, target);
}

function getDefense(terrain, origin, target) {
  return origin.defense + getBonus("defense", terrain, origin, target);
}

function getRange(terrain, origin, target) {
  return origin.range + getBonus("range", terrain, origin, target);
}


module.exports.getAttack = getAttack;
module.exports.getDefense = getDefense;
module.exports.getRange = getRange;