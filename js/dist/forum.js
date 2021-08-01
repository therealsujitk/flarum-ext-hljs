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
function hljsDefaults(theme, baseUrl) {
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
      color = '#fff';
      break;

    case 'an-old-hope':
      background = '#1c1d21';
      color = '#c0c5ce';
      break;

    case 'androidstudio':
      background = '#282b2e';
      color = '#a9b7c6';
      break;

    case 'arduino-light':
      background = '#fff';
      color = '#434f54';
      break;

    case 'arta':
      background = '#222';
      color = '#aaa';
      break;

    case 'ascetic':
      background = '#fff';
      color = '#000';
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

    case 'brown-paper':
      background = 'url(' + baseUrl + '/assets/extensions/therealsujitk-hljs/brown-papersq.png)';
      color = '#363c69';
      break;

    case 'codepen-embed':
      background = '#222';
      color = '#fff';
      break;

    case 'color-brewer':
      background = '#fff';
      color = '#000';
      break;

    case 'darcula':
      background = '#2b2b2b';
      color = '#bababa';
      break;

    case 'dark':
      background = '#444';
      color = '#ddd';
      break;

    case 'docco':
      background = '#f8f8ff';
      color = '#000';
      break;

    case 'dracula':
      background = '#282a36';
      color = '#f8f8f2';
      break;

    case 'far':
      background = '#000080';
      color = '#0ff';
      break;

    case 'foundation':
      background = '#eee';
      color = '#000';
      break;

    case 'github-gist':
      background = '#fff';
      color = '#333333';
      break;

    case 'github':
      background = '#f8f8f8';
      color = '#333';
      break;

    case 'gml':
      background = '#222222';
      color = '#c0c0c0';
      break;

    case 'googlecode':
      background = '#fff';
      color = '#000';
      break;

    case 'gradient-dark':
      background = 'rgb(80,31,122); background: linear-gradient(166deg, rgba(80,31,122,1) 0%, rgba(40,32,179,1) 80%)';
      color = '#e7e4eb';
      break;

    case 'gradient-light':
      background = 'rgb(255,253,141); background: linear-gradient(142deg, rgba(255,253,141,1) 0%, rgba(252,183,255,1) 35%, rgba(144,236,255,1) 100%)';
      color = '#250482';
      break;

    case 'grayscale':
      background = '#fff';
      color = '#333';
      break;

    case 'gruvbox-dark':
      background = '#282828';
      color = '#ebdbb2';
      break;

    case 'gruvbox-light':
      background = '#fbf1c7';
      color = '#3c3836';
      break;

    case 'hopscotch':
      background = '#322931';
      color = '#b9b5b8';
      break;

    case 'hybrid':
      background = '#1d1f21';
      color = '#c5c8c6';
      break;

    case 'idea':
      background = '#fff';
      color = '#000';
      break;

    case 'ir-black':
      background = '#000';
      color = '#f8f8f8';
      break;

    case 'isbl-editor-dark':
      background = '#404040';
      color = '#f0f0f0';
      break;

    case 'isbl-editor-light':
      background = '#fff';
      color = '#000';
      break;

    case 'kimbie.dark':
      background = '#221a0f';
      color = '#d3af86';
      break;

    case 'kimbie.light':
      background = '#fbebd4';
      color = '#84613d';
      break;

    case 'lightfair':
      background = '#fff';
      color = '#444';
      break;

    case 'lioshi':
      background = '#303030';
      color = '#c5c8c6';
      break;

    case 'magula':
      background = '#f4f4f4';
      color = '#000';
      break;

    case 'mono-blue':
      background = '#eaeef3';
      color = '#00193a';
      break;

    case 'monokai-sublime':
      background = '#23241f';
      color = '#f8f8f2';
      break;

    case 'monokai':
      background = '#272822';
      color = '#ddd';
      break;

    case 'night-owl':
      background = '#011627';
      color = '#d6deeb';
      break;

    case 'nnfx-dark':
      background = '#333';
      color = '#fff';
      break;

    case 'nnfx':
      background = '#fff';
      color = '#000';
      break;

    case 'nord':
      background = '#2e3440';
      color = '#d8dee9';
      break;

    case 'obsidian':
      background = '#282b2e';
      color = '#ffcd22';
      break;

    case 'ocean':
      background = '#2b303b';
      color = '#c0c5ce';
      break;

    case 'paraiso-dark':
      background = '#2f1e2e';
      color = '#a39e9b';
      break;

    case 'paraiso-light':
      background = '#e7e9db';
      color = '#4f424c';
      break;

    case 'pojoaque':
      background = 'url(' + baseUrl + '/assets/extensions/therealsujitk-hljs/pojoaque.jpg) repeat scroll left top #181914';
      color = '#dccf8f';
      break;

    case 'purebasic':
      background = '#ffffdf';
      color = '#000';
      break;

    case 'qtcreator_dark':
      background = '#000';
      color = '#aaa';
      break;

    case 'qtcreator_light':
      background = '#fff';
      color = '#000';
      break;

    case 'railscasts':
      background = '#232323';
      color = '#e6e1dc';
      break;

    case 'rainbow':
      background = '#474949';
      color = '#d1d9e1';
      break;

    case 'routeros':
      background = '#f0f0f0';
      color = '#444';
      break;

    case 'school-book':
      background = '#f6f6ae url(' + baseUrl + '/assets/extensions/therealsujitk-hljs/school-book.png)';
      color = '#3e5915';
      break;

    case 'shades-of-purple':
      background = '#2d2b57';
      color = '#fad000';
      break;

    case 'solarized-dark':
      background = '#002b36';
      color = '#839496';
      break;

    case 'solarized-light':
      background = '#fdf6e3';
      color = '#657b83';
      break;

    case 'srcery':
      background = '#1c1b19';
      color = '#fce8c3';
      break;

    case 'stackoverflow-dark':
      background = '#1c1b1b';
      color = '#ffffff';
      break;

    case 'stackoverflow-light':
      background = '#f6f6f6';
      color = '#2f3337';
      break;

    case 'sunburst':
      background = '#000';
      color = '#f8f8f8';
      break;

    case 'tomorrow-night-blue':
      background = '#002451';
      color = '#fff';
      break;

    case 'tomorrow-night-bright':
      background = '#000';
      color = '#eaeaea';
      break;

    case 'tomorrow-night-eighties':
      background = '#2d2d2d';
      color = '#cccccc';
      break;

    case 'tomorrow-night':
      background = '#1d1f21';
      color = '#c5c8c6';
      break;

    case 'tomorrow':
      background = '#fff';
      color = '#4d4d4c';
      break;

    case 'vs':
      background = '#fff';
      color = '#000';
      break;

    case 'vs2015':
      background = '#1e1e1e';
      color = '#dcdcdc';
      break;

    case 'xcode':
      background = '#fff';
      color = '#000';
      break;

    case 'xt256':
      background = '#000';
      color = '#eaeaea';
      break;

    case 'zenburn':
      background = '#3f3f3f';
      color = '#dcdcdc';
      break;

    default:
      background = '#f0f0f0';
      color = '#444';
  }

  var x = document.getElementsByTagName('pre');

  for (var i = 0; i < x.length; ++i) {
    x[i].style = 'background: ' + background + ';';
  }

  x = document.getElementsByTagName('code');

  for (var i = 0; i < x.length; ++i) {
    x[i].style = 'color: ' + color + ';';
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




var flag = 1;
flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.initializers.add('therealsujitk/flarum-ext-hljs', function () {
  Object(flarum_extend__WEBPACK_IMPORTED_MODULE_0__["extend"])(flarum_components_CommentPost__WEBPACK_IMPORTED_MODULE_2___default.a.prototype, 'headerItems', function (items) {
    items.add('therealsujitk-hljs', m('null', {
      id: 'therealsujitk-hljs',
      oncreate: function oncreate() {
        var hljsTheme = flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.forum.attribute('therealsujitk-hljs.theme_name') || 'default';
        var counter = 0;
        var hljs = setInterval(function () {
          if (flag) {
            if (typeof document.querySelectorAll("link[href*='cdnjs.cloudflare.com/ajax/libs/highlight.js/']")[0] != 'undefined') {
              document.querySelectorAll("link[href*='cdnjs.cloudflare.com/ajax/libs/highlight.js/']")[0].href = '//cdnjs.cloudflare.com/ajax/libs/highlight.js/10.5.0/styles/' + hljsTheme + '.min.css';
              flag = 0;
              clearInterval(hljs);
            } else if (typeof document.querySelectorAll("link[href*='cdn.jsdelivr.net/gh/highlightjs/']")[0] != 'undefined') {
              document.querySelectorAll("link[href*='cdn.jsdelivr.net/gh/highlightjs/']")[0].href = '//cdn.jsdelivr.net/gh/highlightjs/cdn-release@10.5.0/build/styles/' + hljsTheme + '.min.css';
              flag = 0;
              clearInterval(hljs);
            } else if (counter >= 50) {
              clearInterval(hljs);
            }

            ++counter;
          }
        }, 100);
        var baseUrl = flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.forum.attribute('baseUrl');
        Object(_helpers_hljsDefaults__WEBPACK_IMPORTED_MODULE_3__["hljsDefaults"])(hljsTheme, baseUrl);
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