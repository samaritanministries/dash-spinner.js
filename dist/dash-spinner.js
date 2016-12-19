/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	var _spinner = __webpack_require__(5);

	var _spinner2 = _interopRequireDefault(_spinner);

	var _configuration = __webpack_require__(6);

	var _configuration2 = _interopRequireDefault(_configuration);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	window.DashSpinner = {
	  Configuration: _configuration2.default,
	  Spinner: _spinner2.default
	};

/***/ },
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */
/***/ function(module, exports) {

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var _class = function () {
	  function _class(options) {
	    _classCallCheck(this, _class);

	    this.configuration = options.spinnerConfiguration;
	    this.target = options.target;
	  }

	  _createClass(_class, [{
	    key: "isSpinning",
	    value: function isSpinning() {
	      return this.target.hasClass("dash-spinner") || this.target.hasClass("has-spinner");
	    }
	  }, {
	    key: "spin",
	    value: function spin() {
	      this.target.addClass(this.className());
	      if (this.isButton()) this.target.addClass("has-spinner");else this.target.addClass("dash-spinner");
	      return this;
	    }
	  }, {
	    key: "stop",
	    value: function stop() {
	      this.target.removeClass(this.className()).removeClass("dash-spinner").removeClass("has-spinner");
	      return this;
	    }
	  }, {
	    key: "isButton",
	    value: function isButton() {
	      return this.target.is("button, input[type=button]");
	    }
	  }, {
	    key: "className",
	    value: function className() {
	      if (this.configuration) {
	        return this.configuration.className;
	      }
	    }
	  }]);

	  return _class;
	}();

	exports.default = _class;

/***/ },
/* 6 */
/***/ function(module, exports) {

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  small: {
	    className: "small"
	  },
	  large: {}
	};

/***/ }
/******/ ]);