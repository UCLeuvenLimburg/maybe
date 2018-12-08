(function(e, a) { for(var i in a) e[i] = a[i]; }(exports, /******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nfunction __export(m) {\r\n    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];\r\n}\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__export(__webpack_require__(/*! ./maybe */ \"./src/maybe.ts\"));\r\n\n\n//# sourceURL=webpack:///./src/index.ts?");

/***/ }),

/***/ "./src/maybe.ts":
/*!**********************!*\
  !*** ./src/maybe.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __extends = (this && this.__extends) || (function () {\r\n    var extendStatics = function (d, b) {\r\n        extendStatics = Object.setPrototypeOf ||\r\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\r\n            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\r\n        return extendStatics(d, b);\r\n    }\r\n    return function (d, b) {\r\n        extendStatics(d, b);\r\n        function __() { this.constructor = d; }\r\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\r\n    };\r\n})();\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar Maybe = /** @class */ (function () {\r\n    function Maybe() {\r\n    }\r\n    Maybe.just = function (x) {\r\n        return new Just(x);\r\n    };\r\n    Maybe.nothing = function () {\r\n        return new Nothing();\r\n    };\r\n    return Maybe;\r\n}());\r\nexports.Maybe = Maybe;\r\nfunction absorbUndefined(x) {\r\n    return x.bind(function (y) { return typeof y === 'undefined' ? Maybe.nothing() : Maybe.just(y); });\r\n}\r\nexports.absorbUndefined = absorbUndefined;\r\nfunction getProperty(obj, key) {\r\n    if (key in obj) {\r\n        var value = obj[key];\r\n        return Maybe.just(value);\r\n    }\r\n    else {\r\n        return Maybe.nothing();\r\n    }\r\n}\r\nexports.getProperty = getProperty;\r\nfunction maybePartial(obj) {\r\n    return new Proxy(obj, {\r\n        get: function (obj, property) {\r\n            if (property in obj) {\r\n                return Maybe.just(obj[property]);\r\n            }\r\n            else {\r\n                return Maybe.nothing();\r\n            }\r\n        }\r\n    });\r\n}\r\nexports.maybePartial = maybePartial;\r\nvar Just = /** @class */ (function (_super) {\r\n    __extends(Just, _super);\r\n    function Just(value) {\r\n        var _this = _super.call(this) || this;\r\n        _this.value = value;\r\n        return _this;\r\n    }\r\n    Just.prototype.bind = function (f) {\r\n        return f(this.value);\r\n    };\r\n    Just.prototype.lift = function (f) {\r\n        return Maybe.just(f(this.value));\r\n    };\r\n    Just.prototype.caseOf = function (cases) {\r\n        return cases.just(this.value);\r\n    };\r\n    Just.prototype.isJust = function () {\r\n        return true;\r\n    };\r\n    Just.prototype.useDefault = function (_) {\r\n        return this;\r\n    };\r\n    return Just;\r\n}(Maybe));\r\nexports.Just = Just;\r\nvar Nothing = /** @class */ (function (_super) {\r\n    __extends(Nothing, _super);\r\n    function Nothing() {\r\n        return _super !== null && _super.apply(this, arguments) || this;\r\n    }\r\n    Nothing.prototype.bind = function (_) {\r\n        return Maybe.nothing();\r\n    };\r\n    Nothing.prototype.lift = function (_) {\r\n        return Maybe.nothing();\r\n    };\r\n    Nothing.prototype.caseOf = function (cases) {\r\n        return cases.nothing();\r\n    };\r\n    Nothing.prototype.isJust = function () {\r\n        return false;\r\n    };\r\n    Nothing.prototype.useDefault = function (t) {\r\n        return Maybe.just(t);\r\n    };\r\n    return Nothing;\r\n}(Maybe));\r\nexports.Nothing = Nothing;\r\n/**\r\n * Takes an object with Maybe properties. If every property is Just,\r\n * an object with Maybes replaced by their values is returned.\r\n * If one property is Nothing, undefined is returned.\r\n * Non-maybe properties are simply copied.\r\n *\r\n * @param obj Object to unpartialize.\r\n */\r\nfunction raiseMaybe(obj) {\r\n    var result = {};\r\n    for (var _i = 0, _a = Object.keys(obj); _i < _a.length; _i++) {\r\n        var key = _a[_i];\r\n        var typedKey = key;\r\n        var propertyValue = obj[typedKey];\r\n        if (propertyValue.isJust()) {\r\n            // It's a Just: retrieve value and put it in result\r\n            result[typedKey] = propertyValue.value;\r\n        }\r\n        else {\r\n            // We found a Nothing, abort operation\r\n            return Maybe.nothing();\r\n        }\r\n    }\r\n    return Maybe.just(result);\r\n}\r\nexports.raiseMaybe = raiseMaybe;\r\n\n\n//# sourceURL=webpack:///./src/maybe.ts?");

/***/ })

/******/ })));