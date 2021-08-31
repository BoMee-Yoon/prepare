const passwordObfuscatorHandler = {
  get(...arg) {
    const [_, key] = arg;
    if (key === 'password' || key === 'pwd') {
      return '\u2022'.repeat(randomInt(5, 10));
    }
    return Reflect.get(...arg); // instead of target[key];
  }
}

const traceLogHandler = {
  get(...arg) {
    const [ obj, key ] = arg;
    console.log(`${dateFormat(new Date().toLocaleDateString())}[TRACE] Calling: 🍒 ${key} : ${obj[key]} 🍒`);
    return Reflect.get(...arg);
  }
}


const weave = curry((handler, target) => new Proxy(target, handler));
const tracer = weave(traceLogHandler);
const obfuscator = weave(passwordObfuscatorHandler);

const credentialsProxy = compose(tracer, obfuscator)(credentials);



// credentials.login(); // Logging in...
credentialsProxy.login();
/*
2021/8/29 | [TRACE] Calling: login : 🍒 typeof function 🍒
Logging in...
*/

credentialsProxy.username; //2021/8/29 | [TRACE] Calling: username : 🍒 bomee 🍒
credentialsProxy.password; // 2021/8/29 | [TRACE] Calling: password : 🍒 •••••• 🍒