/**
 * 
 * handler: traps against the host object
 */

export const curry = fn => (...args1) =>
args1.length === fn.length ? fn(...args1)
: (...args2) => {
const args = [...args1, ...args2]
      return args.length >= fn.length ? fn(...args) : curry(fn)(...args)
    };

export const compose = (f, g) => (...args) => f(g(...args));

export function dateFormat(date) {
  const converted = date.substring(0, date.length - 1).replaceAll('. ', '/');
  return `${converted} | `;
}

export function randomInt(min, max) {
return Math.floor(Math.random() * (max - min)) + min
}

const passwordObfuscatorHandler = {
  get(target, key) {
    
    if (key === 'password' || key === 'pwd') {
      // \u2022 -> U+2022 is Unicode for a bullet character(*)
      return '\u2022'.repeat(randomInt(5, 10));
    }
    return target[key];
  },
  has(target, key) {
    if (key === 'password' || key === 'pwd') {
      return false;
    }
    return true;
  }
}

export const traceLogHandler = {
  get(target, key) {
    const value = typeof target[key] === 'function' ? 'typeof function' : target[key]
    console.log(`${dateFormat(new Date().toLocaleDateString())}[TRACE] Calling: ${key} : π ${value} π`);
    return target[key];
  }
}

/**
 * You can turn those nested proxy objects into an elegant right-to-left compose pipeline.
 * const credentialsProxy =
    new Proxy(
      new Proxy(credentials, passwordObfuscatorHandler),
    traceLogHandler);
    μ΄λ κ² νλ‘μκ° λ΄λΆμ κ°μΈμ Έ μλ λΆλΆμ μ€λ₯Έμͺ½μμ μΌμͺ½μΌλ‘ μ»΄ν¬μ¦ νμ΄νλΌμΈμ μ¬μ©ν΄μ λ¦¬ν©ν λ§ ν  μ μλ€
 */

export const credentials = {
  username: 'bomee',
  password: '1234567890',
  login() {
    console.log('Logging in...');
  }
}


const weave = curry((handler, target) => new Proxy(target, handler));
const tracer = weave(traceLogHandler);
const obfuscator = weave(passwordObfuscatorHandler);

const credentialsProxy = compose(tracer, obfuscator)(credentials);



// credentials.login(); // Logging in...
credentialsProxy.login();
/*
2021/8/29 | [TRACE] Calling: login : π typeof function π
Logging in...
*/

credentialsProxy.username; //2021/8/29 | [TRACE] Calling: username : π bomee π
credentialsProxy.password; // 2021/8/29 | [TRACE] Calling: password : π β’β’β’β’β’β’ π