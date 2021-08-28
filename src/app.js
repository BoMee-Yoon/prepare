
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

const counter = superclass => class extends superclass {
  constructor(...arg) {
    super(...arg)
    this._counter = 0;
  }

  count(ordered, product, name) {
    this._counter = ordered.filter(o => o === product).length;
    console.log(`${name} ordered ${this._counter}${product}`);
  }
}

const statics = superclass => class extends superclass {
  /*
  
  */
}

@counter
class Order {
  constructor(name) {
    this.name = name;
    this.products = [];
  }
  order(products) {
    this.products = products;
  }
}

const customer = new Order('bomee');
customer.order(['🍋']);
customer.count(customer.products, '🍋', customer.name);

/*
난 각각의 주문상품에 대한 통계를 만들고 싶어 
*/