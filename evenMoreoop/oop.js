class Monepok {
  constructor(name,type,battleStats){ //this initializes all incoming instances with these properties. They can either be passed in as parameters or they can be initialized on their own like the hp property.
    this.name = name;
    this.type = type;
    this.battleStats = battleStats;
    this.hp = battleStats['maxHp'];
  }
  takeDamage(points){
    this.points = battleStats['attackPoints'];
    this.hp -= this.points;
  }
  isFainted(){
    if(this.hp > 0)
      return false;
    else
      return true;
  }
}

class Shield {
  constructor(strength){
    this.strength = strength;
  }
  applyDefense(attackPoints){
    this.strength *= attackPoints;
    return this.strength;
  }
  withString(){
    return 'with Shield';
  }
}

class Weapon {
  constructor(name,strength){
    this.name = name;
    this.strength = strength;
  }
}

var billybob = new Monepok('billybob','fire',{maxHp: 90, attack: 40});
console.log(billybob['isFainted']());
var shield1 = new Shield(.75);
console.log(shield1.applyDefense(100));
