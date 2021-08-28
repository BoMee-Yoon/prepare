const oatmeal = {
  viscosity: 20,
  flavor: 'Brown Sugar Cinnamon',
}

console.log(Object.getOwnPropertyDescriptor(oatmeal, 'viscosity'));
// { value: 20, writable: true, enumerable: true, configurable: true }

// 객체의 특정 속성의 설명자를 직접 수정하는 범용 decorate
function decorate(obj, property, cb) {
  const descriptor = Object.getOwnPropertyDescriptor(obj, property);
  Object.defineProperty(obj, property, cb(descriptor));
}

decorate(oatmeal, 'viscosity', desc => {
  desc.configurable = false;
  desc.writable = false;
  desc.value = 50;
  return desc;
});

console.log(oatmeal) // { viscosity: 50, flavor: 'Brown Sugar Cinnamon' }

//

class Porridge {
  constructor(viscosity = 10) {
    this.viscosity = viscosity;
  }

  stir() {
    if (this.viscosity > 15) {
      console.log('This is pretty thick stuff.')
    } else {
      console.log('Spoon goes round and round.')
    }
  }
}

function readOnly(target, key, descriptor) {
  return {
    ...descriptor,
    writable: false,
  }
}

class Oatmeal extends Porridge {
  // 클래스 필드로 재정의
  @readOnly
  viscosity = 50;
  
  constructor(flavor) {
    super();
    this.flavor = flavor;
  }
}

const oatmeal2 = new Oatmeal('Brown Sugar Cinnamon');

// oatmeal2.viscosity = 100;


function decorator(f) {
function wrapper(...args) {
    console.log("Do something before the function call");
    const result = f.call(this, ...args);
    console.log("Do something after the function call");
    return result;
  }
Object.defineProperty(wrapper, 'name', {
     configurable: true,
     value: f.name
   });
return wrapper;
}
// Here's the proposed syntax
@decorator
function add(num1, num2) {
  const res = num1 + num2;
  console.log(`The sum of ${num1} and ${num2} is ${res}`)
  return res;
}
// you can use it directly also
const decoratedAdd = decorator(add);
decoratedAdd(3, 4);