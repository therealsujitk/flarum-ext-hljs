module.exports =
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./forum.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./forum.js":
/*!******************!*\
  !*** ./forum.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_forum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/forum */ "./src/forum/index.js");
/* empty/unused harmony star reexport */

/***/ }),

/***/ "./src/forum/helpers/hljsDefaults.js":
/*!*******************************************!*\
  !*** ./src/forum/helpers/hljsDefaults.js ***!
  \*******************************************/
/*! exports provided: hljsDefaults */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hljsDefaults", function() { return hljsDefaults; });
function hljsDefaults(theme) {
  var background, color;

  switch (theme) {
    case 'a11y-dark':
      background = '#2b2b2b';
      color = '#f8f8f2';
      break;

    case 'a11y-light':
      background = '#fefefe';
      color = '#545454';
      break;

    case 'agate':
      background = '#333';
      color = 'white';
      break;

    case 'an-old-hope':
      background = '#1C1D21';
      color = '#c0c5ce';
      break;

    case 'androidstudio':
      background = '#282b2e';
      color = '#a9b7c6';
      break;

    case 'arduino-light':
      background = '#FFFFFF';
      color = 'black';
      break;

    case 'arta':
      background = '#222';
      color = 'black';
      break;

    case 'ascetic':
      background = 'white';
      color = 'black';
      break;

    case 'atelier-cave-dark':
      background = '#19171c';
      color = '#8b8792';
      break;

    case 'atelier-cave-light':
      background = '#efecf4';
      color = '#585260';
      break;

    case 'atelier-dune-dark':
      background = '#20201d';
      color = '#a6a28c';
      break;

    case 'atelier-dune-light':
      background = '#fefbec';
      color = '#6e6b5e';
      break;

    case 'atelier-estuary-dark':
      background = '#22221b';
      color = '#929181';
      break;

    case 'atelier-estuary-light':
      background = '#f4f3ec';
      color = '#5f5e4e';
      break;

    case 'atelier-forest-dark':
      background = '#1b1918';
      color = '#a8a19f';
      break;

    case 'atelier-forest-light':
      background = '#f1efee';
      color = '#68615e';
      break;

    case 'atelier-heath-dark':
      background = '#1b181b';
      color = '#ab9bab';
      break;

    case 'atelier-heath-light':
      background = '#f7f3f7';
      color = '#695d69';
      break;

    case 'atelier-lakeside-dark':
      background = '#161b1d';
      color = '#7ea2b4';
      break;

    case 'atelier-lakeside-light':
      background = '#ebf8ff';
      color = '#516d7b';
      break;

    case 'atelier-plateau-dark':
      background = '#1b1818';
      color = '#8a8585';
      break;

    case 'atelier-plateau-light':
      background = '#f4ecec';
      color = '#585050';
      break;

    case 'atelier-savanna-dark':
      background = '#171c19';
      color = '#87928a';
      break;

    case 'atelier-savanna-light':
      background = '#ecf4ee';
      color = '#526057';
      break;

    case 'atelier-seaside-dark':
      background = '#131513';
      color = '#8ca68c';
      break;

    case 'atelier-seaside-light':
      background = '#f4fbf4';
      color = '#5e6e5e';
      break;

    case 'atelier-sulphurpool-dark':
      background = '#202746';
      color = '#979db4';
      break;

    case 'atelier-sulphurpool-light':
      background = '#f5f7ff';
      color = '#5e6687';
      break;

    case 'atom-one-dark-reasonable':
      background = '#282c34';
      color = '#abb2bf';
      break;

    case 'atom-one-dark':
      background = '#282c34';
      color = '#abb2bf';
      break;

    case 'atom-one-light':
      background = '#fafafa';
      color = '#383a42';
      break;

    default:
      background = '#F0F0F0';
      color = 'black';
  }

  var x = document.getElementsByTagName('pre');

  for (var i = 0; i < x.length; ++i) {
    x[i].style = 'background: ' + background + '; color: ' + color + ';';
  }
}

/***/ }),

/***/ "./src/forum/index.js":
/*!****************************!*\
  !*** ./src/forum/index.js ***!
  \****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var flarum_extend__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flarum/extend */ "flarum/extend");
/* harmony import */ var flarum_extend__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flarum_extend__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var flarum_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/app */ "flarum/app");
/* harmony import */ var flarum_app__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_app__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_components_CommentPost__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/components/CommentPost */ "flarum/components/CommentPost");
/* harmony import */ var flarum_components_CommentPost__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_components_CommentPost__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _helpers_hljsDefaults__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./helpers/hljsDefaults */ "./src/forum/helpers/hljsDefaults.js");




flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.initializers.add('therealsujitk/flarum-ext-hljs', function () {
  Object(flarum_extend__WEBPACK_IMPORTED_MODULE_0__["extend"])(flarum_components_CommentPost__WEBPACK_IMPORTED_MODULE_2___default.a.prototype, 'headerItems', function (items) {
    items.add('therealsujitk-hljs', m('null', {
      id: 'therealsujitk-hljs',
      config: function config() {
        var theme = flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.forum.attribute('therealsujitk-hljs.theme_name');
        if (theme === null) theme = 'default';
        if (typeof document.querySelectorAll("link[href='//cdnjs.cloudflare.com/ajax/libs/highlight.js/9.7.0/styles/default.min.css']")[0] != 'undefined') document.querySelectorAll("link[href='//cdnjs.cloudflare.com/ajax/libs/highlight.js/9.7.0/styles/default.min.css']")[0].href = '//cdnjs.cloudflare.com/ajax/libs/highlight.js/9.18.1/styles/' + theme + '.min.css';
        Object(_helpers_hljsDefaults__WEBPACK_IMPORTED_MODULE_3__["hljsDefaults"])(theme);
      }
    }));
  });
});

/***/ }),

/***/ "flarum/app":
/*!********************************************!*\
  !*** external "flarum.core.compat['app']" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['app'];

/***/ }),

/***/ "flarum/components/CommentPost":
/*!***************************************************************!*\
  !*** external "flarum.core.compat['components/CommentPost']" ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['components/CommentPost'];

/***/ }),

/***/ "flarum/extend":
/*!***********************************************!*\
  !*** external "flarum.core.compat['extend']" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['extend'];

/***/ })

/******/ });
//# sourceMappingURL=forum.js.map