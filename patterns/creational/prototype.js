const car = {
  count: 4,
  start() {
    return 'started';
  },
  stop() {
    return 'stopped';
  }
}

const mayCar = Object.create(car, {
  owner: {
    name: 'ME'
  }
})

console.log(mayCar.__proto__ === car); // true