
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

class Counter {
  constructor(count) {
    this._count = count;
  }
  inc(by = 0) {
    console.log('inc');
    return this._count += by;
  }
  dec(by = 0) {
    console.log('dec');
    return this._count -= by;
  }
  reset() {
    console.log('reset')
    return this._count = 0;
  }
}

const decorator = {
  actions: {
    before: () => console.log('decorator before'),
    after: () => console.log('decorator after'),
  },
  methods: []
}

const checkEmpty = (value) => {
  if (!value) {
    throw new Error('empty')
  }
  console.log(`${value} 👍`);
  return value
}

const identity = self => self;

const validation = {
  actions: {
    before: checkEmpty,
    after: identity
  },
  methods: ['inc', 'dec']
}

const decorate = (decorator, obj) => new Proxy(obj, {
  get(target, key) {
    if (!decorator.methods.include(key)) {
      return Reflect.get(...arguments)
    }
    const methodRef = target[key];
    return (...capturedArgs) => {
      const newArgs = decorator.actions?.before.call(target, ...capturedArgs);
      const result = methodRef.call(target, ...[newArgs]);
      return decorator.actions?.after.call(target, result);
    }
  }
})