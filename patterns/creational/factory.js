/*

*/

class BallFactory {
  constructor() {
    this.createBall = function (type) {
      let ball;
      switch (type) {
        case 'football':
        case 'soccer':
          ball = new Football(type);
          break;
        case 'basketball':
          ball = new Basketball(type);
          break;
        default:
          break;
      }

      ball.roll = function () {
        return `The ${this._type} is rolling.`
      };
      return ball;
    }
  }
}

class Football {
  constructor(type) {
    this._type = type;
  }
  kick() {
    return `⚽️⚽️⚽️⚽️⚽️`
  }
}
class Basketball {
  constructor(type) {
    this._type = type;
  }
  bounce() {
    return `🏀🏀🏀🏀🏀`
  }
}

const factory = new BallFactory();

const footBall = factory.createBall('football');
const soccerBall = factory.createBall('soccer');
const basketBall = factory.createBall('basketball');

console.log(footBall.roll());
console.log(soccerBall.roll());
console.log(basketBall.roll());
console.log(footBall.kick());
console.log(basketBall.bounce());