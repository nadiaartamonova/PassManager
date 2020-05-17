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
/******/ 	return __webpack_require__(__webpack_require__.s = "./web/js/App.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./web/js/App.js":
/*!***********************!*\
  !*** ./web/js/App.js ***!
  \***********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _AuthModule_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AuthModule.js */ \"./web/js/AuthModule.js\");\n/* harmony import */ var _HttpModule_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./HttpModule.js */ \"./web/js/HttpModule.js\");\n\n\n\n\ndocument.getElementById(\"showLogin\").onclick = function(){\n  toogleMenuActive(\"showLogin\");\n  _AuthModule_js__WEBPACK_IMPORTED_MODULE_0__[\"authModule\"].printLoginForm();\n};\n\nfunction toogleMenuActive(elementId){\n  let activeElement = document.getElementById(elementId);\n  let passiveElements = document.getElementsByClassName(\"nav-item\");\n  for(let i = 0; i < passiveElements.length; i++){\n    if(activeElement === passiveElements[i]){\n      passiveElements[i].classList.add(\"active\");\n    }else{\n      if(passiveElements[i].classList.contains(\"active\")){\n        passiveElements[i].classList.remove(\"active\");\n      }\n    }\n  }\n}\n\n//# sourceURL=webpack:///./web/js/App.js?");

/***/ }),

/***/ "./web/js/AuthModule.js":
/*!******************************!*\
  !*** ./web/js/AuthModule.js ***!
  \******************************/
/*! exports provided: authModule */
/***/ (function(module, exports) {

eval("throw new Error(\"Module parse failed: Unexpected token (28:18)\\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\\n|             }\\n|             \\n>             auth(){\\n|                 let login = document.getElementById('login').value;\\n|                 let password = document.getElementById('password').value;\");\n\n//# sourceURL=webpack:///./web/js/AuthModule.js?");

/***/ }),

/***/ "./web/js/HttpModule.js":
/*!******************************!*\
  !*** ./web/js/HttpModule.js ***!
  \******************************/
/*! exports provided: httpModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"httpModule\", function() { return httpModule; });\nclass HttpModule{\n    \n    status(response) {  \n        if (response.status >= 200 && response.status < 300) {  \n            return Promise.resolve(response)  \n        } else {  \n            return Promise.reject(new Error(response.statusText))  \n        }  \n  }\n    json(response) {  \n        return response.json()  \n    }\n    \n    parseOptions(opt){\n      if(opt.method === 'POST'){\n      return {\n              method: opt.method,\n              headers: {\n                'Content-Type': 'application/json;charset=utf-8'\n              },\n              credentials: 'include',\n              body: JSON.stringify(opt.data)\n            };\n    }else{\n      return {\n              method: opt.method,\n              headers: {\n                'Content-Type': 'application/json;charset=utf-8'\n              },\n              credentials: 'include'\n            };\n    } \n}\n    \n    //POST запрос формат: httpModule.http({url:'createUser',options:{method:'POST',data:user}})\n    //GET запрос формае: httpModule.http({url:'listUsers',options:{method:'GET'}})\n    \n    http(httpOptions){\n        let options = httpModule.parseOptions(httpOptions.options);\n         return fetch(httpOptions.url, options)\n              .then(httpModule.status)\n              .then(httpModule.json)\n              .catch((ex) => console.log(\"Fetch Exception\", ex));\n    }\n}\nlet httpModule = new HttpModule();\n\n\n//# sourceURL=webpack:///./web/js/HttpModule.js?");

/***/ })

/******/ });