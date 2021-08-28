/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

var _class, _class2;

const withDob = PersonRef => class extends PersonRef {
  constructor(...args) {
    super(...args);
    this.dob = new Date().toString();
  }

  setDob(dob) {
    this.dob = dob;
  }

};

let Person = withDob(_class = class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

}) || _class;

const p = new Person('Jaewon', 'Kim');
p.setDob(new Date('1990-02-05').toString());
console.log(p);

const counter = superclass => class extends superclass {
  constructor(...arg) {
    super(...arg);
    this._counter = 0;
  }

  count(ordered, product, name) {
    this._counter = ordered.filter(o => o === product).length;
    console.log(`${name} ordered ${this._counter}${product}`);
  }

};

const statics = superclass => class extends superclass {
  /*
  
  */
};

let Order = counter(_class2 = class Order {
  constructor(name) {
    this.name = name;
    this.products = [];
  }

  order(products) {
    this.products = products;
  }

}) || _class2;

const customer = new Order('bomee');
customer.order(['🍋']);
customer.count(customer.products, '🍋', customer.name);
/*
난 각각의 주문상품에 대한 통계를 만들고 싶어 
*/

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC5qcyJdLCJuYW1lcyI6WyJ3aXRoRG9iIiwiUGVyc29uUmVmIiwiY29uc3RydWN0b3IiLCJhcmdzIiwiZG9iIiwiRGF0ZSIsInRvU3RyaW5nIiwic2V0RG9iIiwiUGVyc29uIiwiZmlyc3ROYW1lIiwibGFzdE5hbWUiLCJwIiwiY29uc29sZSIsImxvZyIsImNvdW50ZXIiLCJzdXBlcmNsYXNzIiwiYXJnIiwiX2NvdW50ZXIiLCJjb3VudCIsIm9yZGVyZWQiLCJwcm9kdWN0IiwibmFtZSIsImZpbHRlciIsIm8iLCJsZW5ndGgiLCJzdGF0aWNzIiwiT3JkZXIiLCJwcm9kdWN0cyIsIm9yZGVyIiwiY3VzdG9tZXIiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDakZBLE1BQU1BLE9BQU8sR0FBR0MsU0FBUyxJQUN2QixjQUFjQSxTQUFkLENBQXdCO0FBQ3RCQyxhQUFXLENBQUMsR0FBR0MsSUFBSixFQUFVO0FBQ25CLFVBQU0sR0FBR0EsSUFBVDtBQUNBLFNBQUtDLEdBQUwsR0FBWSxJQUFJQyxJQUFKLEVBQUQsQ0FBYUMsUUFBYixFQUFYO0FBQ0Q7O0FBRURDLFFBQU0sQ0FBQ0gsR0FBRCxFQUFNO0FBQ1YsU0FBS0EsR0FBTCxHQUFXQSxHQUFYO0FBQ0Q7O0FBUnFCLENBRDFCOztJQWFNSSxNLEdBRExSLE8sVUFBRCxNQUNNUSxNQUROLENBQ2E7QUFDWE4sYUFBVyxDQUFDTyxTQUFELEVBQVlDLFFBQVosRUFBc0I7QUFDL0IsU0FBS0QsU0FBTCxHQUFpQkEsU0FBakI7QUFDQSxTQUFLQyxRQUFMLEdBQWdCQSxRQUFoQjtBQUNEOztBQUpVLEM7O0FBT2IsTUFBTUMsQ0FBQyxHQUFHLElBQUlILE1BQUosQ0FBVyxRQUFYLEVBQXFCLEtBQXJCLENBQVY7QUFDQUcsQ0FBQyxDQUFDSixNQUFGLENBQVUsSUFBSUYsSUFBSixDQUFTLFlBQVQsQ0FBRCxDQUF5QkMsUUFBekIsRUFBVDtBQUVBTSxPQUFPLENBQUNDLEdBQVIsQ0FBWUYsQ0FBWjs7QUFFQSxNQUFNRyxPQUFPLEdBQUdDLFVBQVUsSUFBSSxjQUFjQSxVQUFkLENBQXlCO0FBQ3JEYixhQUFXLENBQUMsR0FBR2MsR0FBSixFQUFTO0FBQ2xCLFVBQU0sR0FBR0EsR0FBVDtBQUNBLFNBQUtDLFFBQUwsR0FBZ0IsQ0FBaEI7QUFDRDs7QUFFREMsT0FBSyxDQUFDQyxPQUFELEVBQVVDLE9BQVYsRUFBbUJDLElBQW5CLEVBQXlCO0FBQzVCLFNBQUtKLFFBQUwsR0FBZ0JFLE9BQU8sQ0FBQ0csTUFBUixDQUFlQyxDQUFDLElBQUlBLENBQUMsS0FBS0gsT0FBMUIsRUFBbUNJLE1BQW5EO0FBQ0FaLFdBQU8sQ0FBQ0MsR0FBUixDQUFhLEdBQUVRLElBQUssWUFBVyxLQUFLSixRQUFTLEdBQUVHLE9BQVEsRUFBdkQ7QUFDRDs7QUFUb0QsQ0FBdkQ7O0FBWUEsTUFBTUssT0FBTyxHQUFHVixVQUFVLElBQUksY0FBY0EsVUFBZCxDQUF5QjtBQUNyRDtBQUNGO0FBQ0E7QUFIdUQsQ0FBdkQ7O0lBT01XLEssR0FETFosTyxXQUFELE1BQ01ZLEtBRE4sQ0FDWTtBQUNWeEIsYUFBVyxDQUFDbUIsSUFBRCxFQUFPO0FBQ2hCLFNBQUtBLElBQUwsR0FBWUEsSUFBWjtBQUNBLFNBQUtNLFFBQUwsR0FBZ0IsRUFBaEI7QUFDRDs7QUFDREMsT0FBSyxDQUFDRCxRQUFELEVBQVc7QUFDZCxTQUFLQSxRQUFMLEdBQWdCQSxRQUFoQjtBQUNEOztBQVBTLEM7O0FBVVosTUFBTUUsUUFBUSxHQUFHLElBQUlILEtBQUosQ0FBVSxPQUFWLENBQWpCO0FBQ0FHLFFBQVEsQ0FBQ0QsS0FBVCxDQUFlLENBQUMsSUFBRCxDQUFmO0FBQ0FDLFFBQVEsQ0FBQ1gsS0FBVCxDQUFlVyxRQUFRLENBQUNGLFFBQXhCLEVBQWtDLElBQWxDLEVBQXdDRSxRQUFRLENBQUNSLElBQWpEO0FBRUE7QUFDQTtBQUNBLEUiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvYXBwLmpzXCIpO1xuIiwiXG5jb25zdCB3aXRoRG9iID0gUGVyc29uUmVmID0+XG4gIGNsYXNzIGV4dGVuZHMgUGVyc29uUmVmIHtcbiAgICBjb25zdHJ1Y3RvciguLi5hcmdzKSB7XG4gICAgICBzdXBlciguLi5hcmdzKTtcbiAgICAgIHRoaXMuZG9iID0gKG5ldyBEYXRlKCkpLnRvU3RyaW5nKCk7XG4gICAgfVxuXG4gICAgc2V0RG9iKGRvYikge1xuICAgICAgdGhpcy5kb2IgPSBkb2I7XG4gICAgfVxuICB9XG5cbkB3aXRoRG9iXG5jbGFzcyBQZXJzb24ge1xuICBjb25zdHJ1Y3RvcihmaXJzdE5hbWUsIGxhc3ROYW1lKSB7XG4gICAgdGhpcy5maXJzdE5hbWUgPSBmaXJzdE5hbWU7XG4gICAgdGhpcy5sYXN0TmFtZSA9IGxhc3ROYW1lO1xuICB9XG59XG5cbmNvbnN0IHAgPSBuZXcgUGVyc29uKCdKYWV3b24nLCAnS2ltJyk7XG5wLnNldERvYigobmV3IERhdGUoJzE5OTAtMDItMDUnKSkudG9TdHJpbmcoKSk7XG5cbmNvbnNvbGUubG9nKHApO1xuXG5jb25zdCBjb3VudGVyID0gc3VwZXJjbGFzcyA9PiBjbGFzcyBleHRlbmRzIHN1cGVyY2xhc3Mge1xuICBjb25zdHJ1Y3RvciguLi5hcmcpIHtcbiAgICBzdXBlciguLi5hcmcpXG4gICAgdGhpcy5fY291bnRlciA9IDA7XG4gIH1cblxuICBjb3VudChvcmRlcmVkLCBwcm9kdWN0LCBuYW1lKSB7XG4gICAgdGhpcy5fY291bnRlciA9IG9yZGVyZWQuZmlsdGVyKG8gPT4gbyA9PT0gcHJvZHVjdCkubGVuZ3RoO1xuICAgIGNvbnNvbGUubG9nKGAke25hbWV9IG9yZGVyZWQgJHt0aGlzLl9jb3VudGVyfSR7cHJvZHVjdH1gKTtcbiAgfVxufVxuXG5jb25zdCBzdGF0aWNzID0gc3VwZXJjbGFzcyA9PiBjbGFzcyBleHRlbmRzIHN1cGVyY2xhc3Mge1xuICAvKlxuICBcbiAgKi9cbn1cblxuQGNvdW50ZXJcbmNsYXNzIE9yZGVyIHtcbiAgY29uc3RydWN0b3IobmFtZSkge1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy5wcm9kdWN0cyA9IFtdO1xuICB9XG4gIG9yZGVyKHByb2R1Y3RzKSB7XG4gICAgdGhpcy5wcm9kdWN0cyA9IHByb2R1Y3RzO1xuICB9XG59XG5cbmNvbnN0IGN1c3RvbWVyID0gbmV3IE9yZGVyKCdib21lZScpO1xuY3VzdG9tZXIub3JkZXIoWyfwn42LJ10pO1xuY3VzdG9tZXIuY291bnQoY3VzdG9tZXIucHJvZHVjdHMsICfwn42LJywgY3VzdG9tZXIubmFtZSk7XG5cbi8qXG7rgpwg6rCB6rCB7J2YIOyjvOusuOyDge2SiOyXkCDrjIDtlZwg7Ya16rOE66W8IOunjOuTpOqzoCDsi7bslrQgXG4qLyJdLCJzb3VyY2VSb290IjoiIn0=