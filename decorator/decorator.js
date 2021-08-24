
/*
Decoratable 믹스인 클래스는 기존 메서드의 연산 결과물을 동적으로 장식할 수 있는 역할을 담당하는 `decorate` 메서드 제공
*/

// Decoratable 믹스인 클래스

const Decoratable = superclass => class extends superclass {
  decorate(referenceName, decorator) {
    const reference = this[referenceName];

    this[referenceName] = (...args) => {
      return decorator.apply(this, [
        reference.call(this, ...args),
        ...args,
      ]);
    }
  }
}

class PureElement {
  constructor(name) {
    this.name = name;
  }

  element() {
    return document.createElement('div');
  }
}

class BorderedElement extends Decoratable(PureElement) {
  constructor(name) {
    super(name);
    
    const appendBorder = element => {
      element.style.border = '5px solid black'
      return element;
    }

    this.decorate('element', (decoObj) => {
      return appendBorder(decoObj)
    });
  }
}

class Order {
  constructor(name) {
    this.name = name;
  }
  order(something) {
    console.log(`${this.name} ordered ${something}`);
    return something;
  }
}

class Counter extends Decoratable(Order) {
  constructor(name) {
    super(name);
    this._counter = 0;

    this.decorate('order', this.count.bind(this));
  }
  count(ordered) {
    ordered === '🎈' && this._counter++;
  }
  get counter() {
    return this._counter;
  }
}

new BorderedElement('borderDiv').element();

const counter = new Counter('bomee');
counter.order('🎈');
counter.order('🎈');
counter.order('🎁');
counter.order('🎈');
counter.order('🎈');
counter.order('🎈');
counter.order('🎈');
counter.order('💌');
console.log(counter.counter);

/*
그런데 뭔가 이상하다... 거꾸로 된 느낌..
여하튼!
데코레이터는 이전 연산의 수행결과 후 다른 일을 처리한다

*/

const withDob = PersonRef =>
  class extends PersonRef {
    constructor(...args) {
      super(...args);
      this.dob = (new Date()).toString();
    }

    setDob(dob) {
      this.dob = dob;
    }
  }

@withDob
class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
}

const p = new Person('Jaewon', 'Kim');
p.setDob((new Date('1990-02-05')).toString());

console.log(p);