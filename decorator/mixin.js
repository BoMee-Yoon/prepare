/*
- 믹스인: 특정 기능(행위)만을 담당하는 클래스
- 다른 클래스에 탑재되어 사용될 목적으로 작성된 (조각) 클래스
*/

const FlyToMixin = superclass => class extends superclass {
  flyTo(destination) {
    console.log(`${this.name} is flying to the ${destination}`)
  }
}

const RunOnMixin = superclass => class extends superclass {
  runOn(legs) {
    console.log(`${this.name} is running on ${legs}legs`)
  }
}

class Animal {
  constructor(name) {
    this.name = name;
  }
  eat(food) {
    console.log(`${this.name} is eating ${food}`);
  }
}

class JustRunning extends RunOnMixin(Animal) {}
class JustFlying extends FlyToMixin(Animal) {}
class SuperAnimal extends RunOnMixin(FlyToMixin(Animal)) {}

class Dog extends JustRunning {}
const dog = new Dog('🐶');
dog.eat('🍭');
dog.runOn(4);

class Bird extends JustFlying {}
const bird = new Bird('🦉');
bird.eat('🍉');
bird.flyTo('🚀');

const superAnimal = new SuperAnimal('🐳');
superAnimal.eat('🍋');
superAnimal.runOn(10);
superAnimal.flyTo('🎉');