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
/******/ 	return __webpack_require__(__webpack_require__.s = "./admin.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./admin.js":
/*!******************!*\
  !*** ./admin.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var flarum_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flarum/app */ "flarum/app");
/* harmony import */ var flarum_app__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flarum_app__WEBPACK_IMPORTED_MODULE_0__);

flarum_app__WEBPACK_IMPORTED_MODULE_0___default.a.initializers.add('therealsujitk-hljs', function (app) {
  var _themes;

  var themes = (_themes = {
    'default': 'Default',
    'a11y-dark': "A 11 Y Dark",
    'a11y-light': 'A 11 Y Light',
    'agate': 'Agate',
    'an-old-hope': 'An Old Hope',
    'androidstudio': 'Androidstudio',
    'arduino-light': 'Arduino Light',
    'arta': 'Arta',
    'ascetic': 'Ascetic',
    'atelier-cave-dark': 'Atelier Cave Dark',
    'atelier-cave-light': 'Atelier Cave Light',
    'atelier-dune-dark': 'Atelier Dune Dark',
    'atelier-dune-light': 'AAtelier Dune Light',
    'atelier-estuary-dark': 'Atelier Estuary Dark',
    'atelier-estuary-light': 'Atelier Estuary Light',
    'atelier-forest-dark': 'Atelier Forest Dark',
    'atelier-forest-light': 'Atelier Forest Light',
    'atelier-heath-dark': 'Atelier Heath Dark',
    'atelier-heath-light': 'Atelier Heath Light',
    'atelier-lakeside-dark': 'Atelier Lakeside Dark',
    'atelier-lakeside-light': 'Atelier Lakeside Light',
    'atelier-plateau-dark': 'Atelier Plateau Dark',
    'atelier-plateau-light': 'Atelier Plateau Light',
    'atelier-savanna-dark': 'Atelier Savanna Dark',
    'atelier-savanna-light': 'Atelier Savanna Light',
    'atelier-seaside-dark': 'Atelier Seaside Dark',
    'atelier-seaside-light': 'Atelier Seaside Light',
    'atelier-sulphurpool-dark': 'Atelier Sulphurpool Dark',
    'atelier-sulphurpool-light': 'Atelier Sulphurpool Light',
    'atom-one-dark-reasonable': 'Atom One Dark Reasonable',
    'atom-one-dark': 'Atom One Dark',
    'atom-one-light': 'Atom One Light',
    'brown-paper': 'Brown Paper',
    'codepen-embed': 'Codepen Embed',
    'color-brewer': 'Color Brewer',
    'darcula': 'Darcula',
    'dark': 'Dark',
    'docco': 'Docco',
    'dracula': 'Dracula',
    'far': 'Far',
    'foundation': 'Foundation',
    'github-gist': 'GitHub  Gist',
    'github': 'GitHub',
    'gml': 'Gml',
    'googlecode': 'Googlecode',
    'gradient-dark': 'Gradient Dark',
    'gradient-light': 'Gradient Light',
    'grayscale': 'Grayscale',
    'gruvbox-dark': 'Gruvbox Dark',
    'gruvbox-light': 'Gruvbox Light',
    'hopscotch': 'Hopscotch',
    'hybrid': 'Hybrid',
    'idea': 'Idea',
    'ir-black': 'Ir Black',
    'isbl-editor-dark': 'Isbl Editor Dark',
    'isbl-editor-light': 'Isbl Editor Light',
    'kimbie.dark': 'Kimbie Dark',
    'kimbie.light': 'Kimbie Light',
    'lightfair': 'Lightfair',
    'lioshi': 'Lioshi',
    'magula': 'Magula',
    'mono-blue': 'Mono Blue',
    'monokai-sublime': 'Monokai Sublime',
    'monokai': 'Monokai',
    'night-owl': 'Night Owl'
  }, _themes["hopscotch"] = 'hopscotch', _themes['nnfx-dark'] = 'Nnfx Dark', _themes['nnfx'] = 'Nnfx', _themes['nord'] = 'Nord', _themes['obsidian'] = 'Obsidian', _themes['ocean'] = 'Ocean', _themes['paraiso-dark'] = 'Paraiso Dark', _themes['paraiso-light'] = 'Paraiso Light', _themes['pojoaque'] = 'Pojoaque', _themes['purebasic'] = 'Purebasic', _themes['qtcreator-dark'] = 'Qtcreator Dark', _themes['qtcreator-light'] = 'Qtcreator Light', _themes['railscasts'] = 'Railscasts', _themes['rainbow'] = 'Rainbow', _themes['routeros'] = 'Routeros', _themes['school-book'] = 'School Book', _themes['shades-of-purple'] = 'Shades Of Purple', _themes['solarized-dark'] = 'Solarized Dark', _themes['solarized-light'] = 'Solarized Light', _themes['srcery'] = 'Srcery', _themes['stackoverflow-dark'] = 'Stackoverflow Dark', _themes['stackoverflow-light'] = 'Stackoverflow Light', _themes['sunburst'] = 'Sunburst', _themes['tomorrow-night-blue'] = 'Tomorrow Night Blue', _themes['tomorrow-night-bright'] = 'Tomorrow Night Bright', _themes['tomorrow-night-eighties'] = 'Tomorrow Night Eighties', _themes['tomorrow-night'] = 'Tomorrow Night', _themes['tomorrow'] = 'Tomorrow', _themes['vs'] = 'Vs', _themes['vs2015'] = 'Vs 2015', _themes['xcode'] = 'Xcode', _themes['xt256'] = 'Xt 256', _themes['zenburn'] = 'Zenburn', _themes);
  app.extensionData["for"]('therealsujitk-hljs').registerSetting({
    setting: 'therealsujitk-hljs.theme_name',
    type: 'select',
    options: themes,
    "default": 'default',
    label: app.translator.trans('therealsujitk.admin.hljs.themename')
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

/***/ })

/******/ });
//# sourceMappingURL=admin.js.map