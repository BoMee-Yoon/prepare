function latte(coffee) {
  return `${coffee} + 🥛`;
}


class Coffee {
  constructor(type) {
    this._type = type
  }
  @latte
  coffee(shot) {
    return `${shot} ☕️`
  }
}

const coffee = new Coffee('');


