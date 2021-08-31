import { count } from "console";

export const identity = self => self;

const { isFinite, isInteger } = Number;

const checkLimit = (value = 1) => {
  if (isFinite(value) && isInteger(value) && value >= 0) {
    return value;
  }
  throw RangeError('Range error 💩')
}

class Counter {
  constructor(count = 0) {
    this._count = count;
  }
  inc(by = 0) {
    return this._count += by;
  }
  dec(by = 0) {
    return this._count -= by;
  }
}

function testCounter () {
  this._counter = 0;
  
  count(orderedProducts, product) {
    this._counter = orderedProducts.filter(o => o === product).length;
    console.log(`ordered ${product} ${this._counter}`);
  }
}

const aspect = {
  advise: {
    before: () => console.log('before'),
    after: () => console.log('after')
  },
  joinpoints: [],
}

const myAspect = {
  ...aspect,
  
}