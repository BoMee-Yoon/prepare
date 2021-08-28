/*
Constructor Pattern
*/

function Hero(name, specialAbility) {
  this.name = name;
  this.specialAbility = specialAbility;

  this.getDetails = function () {
    return `${this.name} can ${this.specialAbility}`;
  }
}

class HeroClass {
  constructor(name, specialAbility) {
    this._name = name;
    this._specialAbility = specialAbility;
  }
  getDetails() {
    return `${this._name} can ${this._specialAbility}`;
  }
}

const ironMan = new HeroClass('Iron Man', 'fly ✈️');

console.log(ironMan.getDetails());