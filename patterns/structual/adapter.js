class OldCalculator {
  operations(a, b, operation) {
    switch (operation) {
      case 'add':
        return a + b;
      case 'sub':
        return a - b;
      default:
        return 0;
    }
  };
}

class NewCalculator {
  add(a, b) {
    return a + b;
  }
  sub(a, b) {
    return a - b;
  }
}

class CalcAdapter {
  constructor() {
    this.newCalc = new NewCalculator();
  }
  operations(a, b, operation) {
    switch (operation) {
      case 'add':
        return this.newCalc.add(a, b);
      case 'sub':
        return this.newCalc.sub(a, b);
      default:
        return 0;
    }
  }
}

const oldCalc = new OldCalculator();
console.log(oldCalc.operations(10, 5, 'add')); // 15

const newCalc = new NewCalculator();
console.log(newCalc.add(10, 5));

const adaptedCalc = new CalcAdapter();
console.log(adaptedCalc.operations(10, 5, 'add'));