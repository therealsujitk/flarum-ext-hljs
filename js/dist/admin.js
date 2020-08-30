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
/* harmony import */ var _src_admin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/admin */ "./src/admin/index.js");
/* empty/unused harmony star reexport */

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _inheritsLoose; });
function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}

/***/ }),

/***/ "./src/admin/components/hljsSettingsModal.js":
/*!***************************************************!*\
  !*** ./src/admin/components/hljsSettingsModal.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return hljsSettingsModal; });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_components_SettingsModal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/components/SettingsModal */ "flarum/components/SettingsModal");
/* harmony import */ var flarum_components_SettingsModal__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_components_SettingsModal__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_components_Select__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/components/Select */ "flarum/components/Select");
/* harmony import */ var flarum_components_Select__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_components_Select__WEBPACK_IMPORTED_MODULE_2__);




var hljsSettingsModal = /*#__PURE__*/function (_SettingsModal) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(hljsSettingsModal, _SettingsModal);

  function hljsSettingsModal() {
    return _SettingsModal.apply(this, arguments) || this;
  }

  var _proto = hljsSettingsModal.prototype;

  _proto.className = function className() {
    return 'Modal--small';
  };

  _proto.title = function title() {
    return app.translator.trans('therealsujitk.admin.hljs.title');
  };

  _proto.form = function form() {
    return [m('div[class = Form-group]', [m('label', app.translator.trans('therealsujitk.admin.hljs.themename')), m('select[style = width: 100%; margin-bottom: 5px;]', {
      bidi: this.setting('therealsujitk-hljs.theme_name')
    }, [m('option', {
      value: 'default',
      selected: true
    }, 'Default'), m('option', {
      value: 'a11y-dark'
    }, 'A 11 Y Dark'), m('option', {
      value: 'a11y-light'
    }, 'A 11 Y Light'), m('option', {
      value: 'agate'
    }, 'Agate'), m('option', {
      value: 'an-old-hope'
    }, 'An Old Hope'), m('option', {
      value: 'androidstudio'
    }, 'Androidstudio'), m('option', {
      value: 'arduino-light'
    }, 'Arduino Light'), m('option', {
      value: 'arta'
    }, 'Arta'), m('option', {
      value: 'ascetic'
    }, 'Ascetic'), m('option', {
      value: 'atelier-cave-dark'
    }, 'Atelier Cave Dark'), m('option', {
      value: 'atelier-cave-light'
    }, 'Atelier Cave Light'), m('option', {
      value: 'atelier-dune-dark'
    }, 'Atelier Dune Dark'), m('option', {
      value: 'atelier-dune-light'
    }, 'AAtelier Dune Light'), m('option', {
      value: 'atelier-estuary-dark'
    }, 'Atelier Estuary Dark'), m('option', {
      value: 'atelier-estuary-light'
    }, 'Atelier Estuary Light'), m('option', {
      value: 'atelier-forest-dark'
    }, 'Atelier Forest Dark'), m('option', {
      value: 'atelier-forest-light'
    }, 'Atelier Forest Light'), m('option', {
      value: 'atelier-heath-dark'
    }, 'Atelier Heath Dark'), m('option', {
      value: 'atelier-heath-light'
    }, 'Atelier Heath Light'), m('option', {
      value: 'atelier-lakeside-dark'
    }, 'Atelier Lakeside Dark'), m('option', {
      value: 'atelier-lakeside-light'
    }, 'Atelier Lakeside Light'), m('option', {
      value: 'atelier-plateau-dark'
    }, 'Atelier Plateau Dark'), m('option', {
      value: 'atelier-plateau-light'
    }, 'Atelier Plateau Light'), m('option', {
      value: 'atelier-savanna-dark'
    }, 'Atelier Savanna Dark'), m('option', {
      value: 'atelier-savanna-light'
    }, 'Atelier Savanna Light'), m('option', {
      value: 'atelier-seaside-dark'
    }, 'Atelier Seaside Dark'), m('option', {
      value: 'atelier-seaside-light'
    }, 'Atelier Seaside Light'), m('option', {
      value: 'atelier-sulphurpool-dark'
    }, 'Atelier Sulphurpool Dark'), m('option', {
      value: 'atelier-sulphurpool-light'
    }, 'Atelier Sulphurpool Light'), m('option', {
      value: 'atom-one-dark-reasonable'
    }, 'Atom One Dark Reasonable'), m('option', {
      value: 'atom-one-dark'
    }, 'Atom One Dark'), m('option', {
      value: 'atom-one-light'
    }, 'Atom One Light'), m('option', {
      value: 'brown-paper'
    }, 'Brown Paper'), m('option', {
      value: 'codepen-embed'
    }, 'Codepen Embed'), m('option', {
      value: 'color-brewer'
    }, 'Color Brewer'), m('option', {
      value: 'darcula'
    }, 'Darcula'), m('option', {
      value: 'dark'
    }, 'Dark'), m('option', {
      value: 'docco'
    }, 'Docco'), m('option', {
      value: 'dracula'
    }, 'Dracula'), m('option', {
      value: 'far'
    }, 'Far'), m('option', {
      value: 'foundation'
    }, 'Foundation')]), m('hr'), m('div', [m('p[style = display: inline;]', app.translator.trans('therealsujitk.admin.about.stringA')), m('a', {
      href: 'https://therealsuji.tk',
      target: '_blank'
    }, '@therealsujitk'), m('br'), m('p[style = display: inline;]', app.translator.trans('therealsujitk.admin.about.stringB')), m('a', {
      href: 'https://therealsuji.tk/donate',
      target: '_blank'
    }, 'PayPal')])])];
  };

  return hljsSettingsModal;
}(flarum_components_SettingsModal__WEBPACK_IMPORTED_MODULE_1___default.a);



/***/ }),

/***/ "./src/admin/index.js":
/*!****************************!*\
  !*** ./src/admin/index.js ***!
  \****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var flarum_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flarum/app */ "flarum/app");
/* harmony import */ var flarum_app__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flarum_app__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_hljsSettingsModal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/hljsSettingsModal */ "./src/admin/components/hljsSettingsModal.js");


flarum_app__WEBPACK_IMPORTED_MODULE_0___default.a.initializers.add('therealsujitk/flarum-ext-hljs', function () {
  flarum_app__WEBPACK_IMPORTED_MODULE_0___default.a.extensionSettings['therealsujitk-hljs'] = function () {
    return flarum_app__WEBPACK_IMPORTED_MODULE_0___default.a.modal.show(new _components_hljsSettingsModal__WEBPACK_IMPORTED_MODULE_1__["default"]());
  };
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

/***/ "flarum/components/Select":
/*!**********************************************************!*\
  !*** external "flarum.core.compat['components/Select']" ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['components/Select'];

/***/ }),

/***/ "flarum/components/SettingsModal":
/*!*****************************************************************!*\
  !*** external "flarum.core.compat['components/SettingsModal']" ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['components/SettingsModal'];

/***/ })

/******/ });
//# sourceMappingURL=admin.js.map