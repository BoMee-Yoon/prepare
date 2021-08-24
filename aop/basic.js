// class BookCollection {
//   getByISBN(isbn) {
//     return this.get({
//       isbn
//     }).then(book => book.name).catch(error => null);
//   }
// }

// class BookCollection {
//   getNameByISBN(isbn) {
//     return this.get({
//       isbn
//     }).then(book => {
//       Logger.info(`Retrieving book ${isbn} - ${book.name} has been succeed`);
//       return book.name;
//     })
//       .catch(error => {
//         Logger.error(`Retrieving book ${isbn} has been failed. ${JSON.stringify(error)}`);
//         return null;
//     })
//   }
// }

// class BookCollection extends Collection {
//   getNameByISBN(isbn) {
//     return this.get({
//       isbn,
//     }, {
//       cache: true,
//       onSuccess: 'name',
//       onFail: null,
//       log: {
//         message: 'Retrieving Book {} - {} has been succeed',
//         params: ['isbn', 'name'],
//         level: 'info'
//       }
//     })
//   }
// }

// class LoggerAspect {
//   @afterMethod({
//     methodNamePattern: /^getNameByISBN$/,
//     classNamePattern: /^BookCollection$/
//   })
//   afterGetNameByISBN(meta) {
//     let result = meta.method.result;
//     Logger.info(`Retrieving ${result.isbn} - ${result.name} has been succeed`);
//   }
// }

// class CacheAspect {
//   @beforeMethod({
//     methodNamePattern: /^get.*/,
//     classNamePattern: /^[Book|User]Collection$/
//   })
//   beforeGet(meta, args) {
//     const key = `${meta.name} : ${args.join()}`;
//     const method = meta.method;
//     if (this.cache.hasOwnProperty(key)) {
//       method.result = this.cache[key];
//       method.proceed = false;
//     }
//   }
// }

// @Wove
// class BookCollection {
//   getNameByISBN(id, article) {
//     return this.get({
//       isbn,
//     }, {
//       onSuccess: 'name',
//       onFail: null
//     })
//   }
// }

function Logger(target, pattern) {
  return new Proxy(target, {
    get(obj, prop) {
      let value, name;
      if (!Reflect.has(obj, prop)) {
        return;
      }

      name = target.name || target.constructor.name;
      value = Reflect.get(obj, prop);
      if (typeof value === 'function') {
        value = function () {
          const result = Reflect.apply(obj[prop], obj, arguments);
          if (pattern.exec(prop)) {
            console.log(`Function ${prop} retrieved result ${JSON.stringify(result)}`);
          }
          return result;
        }.bind(obj);
      }
      return value;
    }
  })
}

function wove(pattern) {
  return function (target) {
    target.prototype = Logger(target.prototype, pattern);
  }
}

// @wove(/^get.*/) === wove(/^get.*/)(BookCollection)

@wove(/^get.*/)
class BookCollection {
  getNameByISBN(isbn) {
    return {
      isbn,
      name: 'Proxy + Decorators = AOP'
    };
  }
}

// BookCollection.prototype = Logger(BookCollection.prototype, /^get.*/);
console.log(new BookCollection().getNameByISBN('sss'));