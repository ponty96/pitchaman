webpackJsonp([1],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(171);


/***/ },

/***/ 171:
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Created by ponty on 11/5/15.
	 */
	'use strict';

	var _createClass = (function () {
	    function defineProperties(target, props) {
	        for (var i = 0; i < props.length; i++) {
	            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ('value' in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	        }
	    }return function (Constructor, protoProps, staticProps) {
	        if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	    };
	})();

	var _get = function get(_x, _x2, _x3) {
	    var _again = true;_function: while (_again) {
	        var object = _x,
	            property = _x2,
	            receiver = _x3;_again = false;if (object === null) object = Function.prototype;var desc = Object.getOwnPropertyDescriptor(object, property);if (desc === undefined) {
	            var parent = Object.getPrototypeOf(object);if (parent === null) {
	                return undefined;
	            } else {
	                _x = parent;_x2 = property;_x3 = receiver;_again = true;desc = parent = undefined;continue _function;
	            }
	        } else if ('value' in desc) {
	            return desc.value;
	        } else {
	            var getter = desc.get;if (getter === undefined) {
	                return undefined;
	            }return getter.call(receiver);
	        }
	    }
	};

	function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : { 'default': obj };
	}

	function _classCallCheck(instance, Constructor) {
	    if (!(instance instanceof Constructor)) {
	        throw new TypeError('Cannot call a class as a function');
	    }
	}

	function _inherits(subClass, superClass) {
	    if (typeof superClass !== 'function' && superClass !== null) {
	        throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass);
	    }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	}

	var _react = __webpack_require__(148);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(2);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _reactBootstrap = __webpack_require__(172);

	var _formsInvestorForm = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./forms/investor-form\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

	var _formsInvestorForm2 = _interopRequireDefault(_formsInvestorForm);

	var _formsStartupForm = __webpack_require__(410);

	var _formsStartupForm2 = _interopRequireDefault(_formsStartupForm);

	var _reusableSearchSearch = __webpack_require__(161);

	var _reusableSearchSearch2 = _interopRequireDefault(_reusableSearchSearch);

	__webpack_require__(411);

	var ProfileNewPage = (function (_Component) {
	    _inherits(ProfileNewPage, _Component);

	    function ProfileNewPage() {
	        _classCallCheck(this, ProfileNewPage);

	        _get(Object.getPrototypeOf(ProfileNewPage.prototype), 'constructor', this).apply(this, arguments);

	        this.search = function (text) {
	            console.log('search word' + text);
	        };
	    }

	    _createClass(ProfileNewPage, [{
	        key: 'render',
	        value: function render() {
	            return _react2['default'].createElement('div', null, _react2['default'].createElement('header', { className: 'header' }, _react2['default'].createElement('div', { className: 'logo bulb' }), _react2['default'].createElement(_reusableSearchSearch2['default'], { onClickEnter: this.search })), _react2['default'].createElement('div', { className: 'container-fluid' }, _react2['default'].createElement('div', { className: 'row' }, _react2['default'].createElement('div', { className: 'tabs-right' }, _react2['default'].createElement('div', { className: 'col-md-12' }, _react2['default'].createElement(_reactBootstrap.Tabs, { defaultActiveKey: 1 }, _react2['default'].createElement(_reactBootstrap.Tab, { eventKey: 1, title: 'Investor' }, _react2['default'].createElement(_formsInvestorForm2['default'], null)), _react2['default'].createElement(_reactBootstrap.Tab, { eventKey: 2, title: 'StartUp' }, _react2['default'].createElement(_formsStartupForm2['default'], null))))))));
	        }
	    }]);

	    return ProfileNewPage;
	})(_react.Component);

	_reactDom2['default'].render(_react2['default'].createElement(ProfileNewPage, null), document.getElementById('react-app'));

/***/ },

/***/ 410:
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Created by ponty on 11/5/15.
	 */
	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	var _createClass = (function () {
	    function defineProperties(target, props) {
	        for (var i = 0; i < props.length; i++) {
	            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ('value' in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	        }
	    }return function (Constructor, protoProps, staticProps) {
	        if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	    };
	})();

	var _get = function get(_x, _x2, _x3) {
	    var _again = true;_function: while (_again) {
	        var object = _x,
	            property = _x2,
	            receiver = _x3;_again = false;if (object === null) object = Function.prototype;var desc = Object.getOwnPropertyDescriptor(object, property);if (desc === undefined) {
	            var parent = Object.getPrototypeOf(object);if (parent === null) {
	                return undefined;
	            } else {
	                _x = parent;_x2 = property;_x3 = receiver;_again = true;desc = parent = undefined;continue _function;
	            }
	        } else if ('value' in desc) {
	            return desc.value;
	        } else {
	            var getter = desc.get;if (getter === undefined) {
	                return undefined;
	            }return getter.call(receiver);
	        }
	    }
	};

	function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : { 'default': obj };
	}

	function _classCallCheck(instance, Constructor) {
	    if (!(instance instanceof Constructor)) {
	        throw new TypeError('Cannot call a class as a function');
	    }
	}

	function _inherits(subClass, superClass) {
	    if (typeof superClass !== 'function' && superClass !== null) {
	        throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass);
	    }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	}

	var _react = __webpack_require__(148);

	var _react2 = _interopRequireDefault(_react);

	var StartUpForm = (function (_Component) {
	    _inherits(StartUpForm, _Component);

	    function StartUpForm() {
	        _classCallCheck(this, StartUpForm);

	        _get(Object.getPrototypeOf(StartUpForm.prototype), 'constructor', this).apply(this, arguments);
	    }

	    _createClass(StartUpForm, [{
	        key: 'render',
	        value: function render() {
	            return _react2['default'].createElement('div', null, 'START UP FORM');
	        }
	    }]);

	    return StartUpForm;
	})(_react.Component);

	exports['default'] = StartUpForm;
	module.exports = exports['default'];

/***/ },

/***/ 411:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(412);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(165)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../../node_modules/css-loader/index.js!./../../../../node_modules/sass-loader/index.js?sourceMap!./profile-new-page.scss", function() {
				var newContent = require("!!./../../../../node_modules/css-loader/index.js!./../../../../node_modules/sass-loader/index.js?sourceMap!./profile-new-page.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 412:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(164)();
	// imports


	// module
	exports.push([module.id, ".black {\n  color: #000; }\n\n.left {\n  float: left; }\n\n.right {\n  float: right; }\n\n.header {\n  background: -moz-linear-gradient(180deg, #fff 10%, #e9e9e9);\n  background: -webkit-linear-gradient(180deg, #fff 10%, #e9e9e9);\n  background: -o-linear-gradient(180deg, #fff 10%, #e9e9e9);\n  background: linear-gradient(180deg, #fff 10%, #e9e9e9);\n  box-shadow: inset 0 -1px 1px 0 #000;\n  height: 60px; }\n  .header .logo img {\n    width: auto;\n    height: auto; }\n  .header .logo.bulb {\n    display: inline-block;\n    width: 30px;\n    margin: 3px 3px; }\n\n/** Custom Bootstrap Tab Style here*/\n.tabs-right {\n  width: 100%; }\n  .tabs-right .nav-tabs {\n    position: absolute;\n    right: 0;\n    top: -35px; }\n\n.nav-tabs {\n  border-bottom: none;\n  font-size: 20px;\n  font-family: Ubuntu; }\n\n.nav-tabs > li.active > a,\n.nav-tabs > li.active > a:focus,\n.nav-tabs > li.active > a:hover {\n  color: #20afcb;\n  cursor: default;\n  background-color: #fff;\n  border: 1px solid #ddd;\n  border-bottom-color: transparent; }\n\n.nav-tabs > li > a {\n  margin-right: 2px;\n  line-height: 1.42857143;\n  border-radius: 4px 4px 0 0;\n  border-bottom: none; }\n  .nav-tabs > li > a:focus {\n    outline: none; }\n\n.nav > li > a {\n  position: relative;\n  display: block;\n  padding: 5px 20px 0 20px;\n  color: #5d5d5d; }\n\n.form-segment {\n  display: inline-block;\n  list-style: none;\n  width: 100%;\n  padding-top: 30px; }\n  .form-segment li {\n    display: inline-block;\n    float: left;\n    width: 50%; }\n    @media screen and (max-width: 768px) {\n      .form-segment li {\n        width: 100%; } }\n\n.input-body {\n  display: inline-block;\n  font-family: Ubuntu;\n  width: 100%; }\n  .input-body .labels {\n    display: inline-block;\n    float: left;\n    margin-right: 30px; }\n    .input-body .labels span {\n      display: block;\n      color: #20afcb;\n      font-size: 16px;\n      text-align: end;\n      margin: 20px 0 0 0;\n      padding: 8px 0 10px 0; }\n      .input-body .labels span.toggle {\n        margin: 5px 0 0 0;\n        padding: 0 0; }\n      .input-body .labels span.add {\n        margin: 20px 0 70px 0; }\n  .input-body .inputs {\n    display: inline-block;\n    float: left;\n    width: 70%; }\n    .input-body .inputs span {\n      display: block;\n      color: #5d5d5d;\n      font-size: 16px;\n      margin: 20px 0 0 0; }\n      .input-body .inputs span .Select {\n        width: 80%; }\n        .input-body .inputs span .Select span {\n          margin: 0; }\n        .input-body .inputs span .Select .Select-input input {\n          border: none; }\n        .input-body .inputs span .Select .Select-arrow-zone {\n          margin-top: -20px; }\n      .input-body .inputs span input:-moz-placeholder {\n        color: #5d5d5d;\n        font-family: inherit;\n        font-size: 15px;\n        padding: 0 0 2px 4px; }\n      .input-body .inputs span input:-ms-input-placeholder {\n        color: #5d5d5d;\n        font-family: inherit;\n        font-size: 15px;\n        padding: 0 0 2px 4px; }\n      .input-body .inputs span input::-webkit-input-placeholder {\n        color: #5d5d5d;\n        font-family: inherit;\n        font-size: 15px;\n        padding: 0 0 2px 4px; }\n      .input-body .inputs span input {\n        width: 80%;\n        height: 40px;\n        border: 1px solid #ccc;\n        border-radius: 4px; }\n        .input-body .inputs span input:focus {\n          outline: none; }\n        @media screen and (max-width: 768px) {\n          .input-body .inputs span input {\n            width: 100%; } }\n      .input-body .inputs span.add {\n        margin: 20px 0 30px 0; }\n      .input-body .inputs span.inline {\n        margin: 0 0 20px 0; }\n        .input-body .inputs span.inline .city {\n          width: 48%;\n          border-top: none;\n          border-right: none;\n          border-top-left-radius: 0;\n          border-top-right-radius: 0;\n          border-bottom-right-radius: 0; }\n        .input-body .inputs span.inline .zip {\n          width: 32%;\n          border-top: none;\n          border-top-left-radius: 0;\n          border-top-right-radius: 0;\n          border-bottom-left-radius: 0; }\n        @media screen and (max-width: 768px) {\n          .input-body .inputs span.inline .city {\n            width: 60%; }\n          .input-body .inputs span.inline .zip {\n            width: 40%; } }\n\n.range-box {\n  margin-top: 20px;\n  width: 450px;\n  font-family: Ubuntu; }\n  .range-box.blue .head {\n    background: #c1ebff; }\n  .range-box.blue .body {\n    background: #f4f3f5; }\n  .range-box.blue .noUi-connect {\n    display: block;\n    background: #25c9e9;\n    height: 15px;\n    -webkit-transition: background 450ms;\n    transition: background 450ms;\n    box-shadow: none; }\n  .range-box.blue .noUi-target {\n    border-radius: 4px;\n    box-shadow: none; }\n  .range-box.blue .noUi-background {\n    box-shadow: none;\n    background: #c1ebff; }\n  .range-box.orange {\n    margin-top: 55px; }\n    .range-box.orange .head {\n      background: #ffde97; }\n    .range-box.orange .body {\n      background: #f4f3f5; }\n    .range-box.orange .noUi-connect {\n      display: block;\n      background: #f7941d;\n      height: 15px;\n      -webkit-transition: background 450ms;\n      transition: background 450ms;\n      box-shadow: none; }\n    .range-box.orange .noUi-target {\n      border-radius: 4px;\n      box-shadow: none; }\n    .range-box.orange .noUi-background {\n      box-shadow: none;\n      background: #ffde97; }\n  .range-box .head {\n    display: block;\n    padding: 8px 8px;\n    border-top-left-radius: 15px;\n    border-top-right-radius: 15px; }\n  .range-box .body {\n    display: inline-block;\n    width: 100%;\n    height: 130px;\n    padding: 10px 10px 30px 20px; }\n\n.submit-button {\n  margin-top: 60px;\n  margin-left: 80px; }\n  .submit-button button {\n    padding: 12px 47px;\n    font-size: 16px;\n    color: #fff;\n    background: #20afcb;\n    font-family: 'Ubuntu',san-serif;\n    font-weight: bold;\n    border: 1px solid #20afcb;\n    border-radius: 6px; }\n\n/**\n * React Select\n * ============\n * Created by Jed Watson and Joss Mackison for KeystoneJS, http://www.keystonejs.com/\n * https://twitter.com/jedwatson https://twitter.com/jossmackison https://twitter.com/keystonejs\n * MIT License: https://github.com/keystonejs/react-select\n*/\n.Select {\n  position: relative; }\n\n.Select,\n.Select div,\n.Select input,\n.Select span {\n  -webkit-box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  box-sizing: border-box; }\n\n.Select.is-disabled > .Select-control {\n  background-color: #f6f6f6; }\n\n.Select.is-disabled .Select-arrow-zone {\n  cursor: default;\n  pointer-events: none; }\n\n.Select-control {\n  background-color: #fff;\n  border-color: #d9d9d9 #ccc #b3b3b3;\n  border-radius: 4px;\n  border: 1px solid #ccc;\n  color: #333;\n  cursor: default;\n  display: table;\n  height: 36px;\n  outline: none;\n  overflow: hidden;\n  position: relative;\n  width: 100%; }\n\n.Select-control:hover {\n  box-shadow: 0 1px 0 rgba(0, 0, 0, 0.06); }\n\n.is-searchable.is-open > .Select-control {\n  cursor: text; }\n\n.is-open > .Select-control {\n  border-bottom-right-radius: 0;\n  border-bottom-left-radius: 0;\n  background: #fff;\n  border-color: #b3b3b3 #ccc #d9d9d9; }\n\n.is-open > .Select-control > .Select-arrow {\n  border-color: transparent transparent #999;\n  border-width: 0 5px 5px; }\n\n.is-searchable.is-focused:not(.is-open) > .Select-control {\n  cursor: text; }\n\n.is-focused:not(.is-open) > .Select-control {\n  box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.1), 0 0 5px -1px rgba(0, 126, 255, 0.5); }\n\n.Select-placeholder {\n  bottom: 0;\n  color: #aaa;\n  left: 0;\n  line-height: 34px;\n  padding-left: 10px;\n  padding-right: 10px;\n  position: absolute;\n  right: 0;\n  top: 0;\n  max-width: 100%;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap; }\n\n.has-value > .Select-control > .Select-placeholder {\n  color: #333; }\n\n.Select-value {\n  color: #aaa;\n  left: 0;\n  padding: 8px 52px 8px 10px;\n  position: absolute;\n  right: -15px;\n  top: 0;\n  max-width: 100%;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap; }\n\n.has-value > .Select-control > .Select-value {\n  color: #333; }\n\n.Select-input {\n  height: inherit;\n  padding-left: 10px;\n  padding-right: 10px;\n  vertical-align: middle;\n  width: 100%; }\n\n.Select-input > input {\n  background: none transparent;\n  border: 0 none;\n  box-shadow: none;\n  cursor: default;\n  display: inline-block;\n  font-family: inherit;\n  font-size: inherit;\n  height: inherit;\n  width: 100%;\n  margin: 0;\n  outline: none;\n  padding: 0;\n  -webkit-appearance: none; }\n\n.is-focused .Select-input > input {\n  cursor: text; }\n\n.Select-control:not(.is-searchable) > .Select-input {\n  outline: none; }\n\n.Select-loading-zone {\n  cursor: pointer;\n  display: table-cell;\n  position: relative;\n  text-align: center;\n  vertical-align: middle;\n  width: 16px; }\n\n.Select-loading {\n  -webkit-animation: Select-animation-spin 400ms infinite linear;\n  -o-animation: Select-animation-spin 400ms infinite linear;\n  animation: Select-animation-spin 400ms infinite linear;\n  width: 16px;\n  height: 16px;\n  box-sizing: border-box;\n  border-radius: 50%;\n  border: 2px solid #ccc;\n  border-right-color: #333;\n  display: inline-block;\n  position: relative;\n  vertical-align: middle; }\n\n.Select-clear-zone {\n  -webkit-animation: Select-animation-fadeIn 200ms;\n  -o-animation: Select-animation-fadeIn 200ms;\n  animation: Select-animation-fadeIn 200ms;\n  color: #999;\n  cursor: pointer;\n  display: table-cell;\n  position: relative;\n  text-align: center;\n  vertical-align: middle;\n  width: 17px;\n  float: right; }\n\n.Select-clear-zone:hover {\n  color: #D0021B; }\n\n.Select-clear {\n  display: inline-block;\n  font-size: 18px;\n  line-height: 1; }\n\n.Select--multi .Select-clear-zone {\n  width: 17px; }\n\n.Select-arrow-zone {\n  cursor: pointer;\n  display: table-cell;\n  position: relative;\n  text-align: center;\n  vertical-align: middle;\n  padding-right: 5px;\n  margin-top: -10px;\n  float: right; }\n\n.Select-arrow {\n  border-color: #999 transparent transparent;\n  border-style: solid;\n  border-width: 5px 5px 2.5px;\n  display: inline-block;\n  height: 0;\n  width: 0; }\n\n.is-open .Select-arrow,\n.Select-arrow-zone:hover > .Select-arrow {\n  border-top-color: #666; }\n\n@-webkit-keyframes Select-animation-fadeIn {\n  from {\n    opacity: 0; }\n  to {\n    opacity: 1; } }\n\n@keyframes Select-animation-fadeIn {\n  from {\n    opacity: 0; }\n  to {\n    opacity: 1; } }\n\n.Select-menu-outer {\n  border-bottom-right-radius: 4px;\n  border-bottom-left-radius: 4px;\n  background-color: #fff;\n  border: 1px solid #ccc;\n  border-top-color: #e6e6e6;\n  box-shadow: 0 1px 0 rgba(0, 0, 0, 0.06);\n  box-sizing: border-box;\n  margin-top: -1px;\n  max-height: 200px;\n  position: absolute;\n  top: 100%;\n  width: 100%;\n  z-index: 1000;\n  -webkit-overflow-scrolling: touch; }\n\n.Select-menu {\n  max-height: 198px;\n  overflow-y: auto; }\n\n.Select-option {\n  box-sizing: border-box;\n  color: #666666;\n  cursor: pointer;\n  display: block;\n  padding: 8px 10px; }\n\n.Select-option:last-child {\n  border-bottom-right-radius: 4px;\n  border-bottom-left-radius: 4px; }\n\n.Select-option.is-focused {\n  background-color: rgba(0, 126, 255, 0.08);\n  color: #333; }\n\n.Select-option.is-disabled {\n  color: #cccccc;\n  cursor: not-allowed; }\n\n.Select-noresults,\n.Select-search-prompt,\n.Select-searching {\n  box-sizing: border-box;\n  color: #999999;\n  cursor: default;\n  display: block;\n  padding: 8px 10px; }\n\n.Select--multi .Select-input {\n  vertical-align: middle;\n  margin-left: 10px;\n  padding: 0; }\n\n.Select--multi.has-value .Select-input {\n  margin-left: 5px; }\n\n.Select-item {\n  background-color: rgba(0, 126, 255, 0.08);\n  border-radius: 2px;\n  border: 1px solid rgba(0, 126, 255, 0.24);\n  color: #007eff;\n  display: inline-block;\n  font-size: 0.9em;\n  margin-left: 5px;\n  margin-top: 5px;\n  vertical-align: top; }\n\n.Select-item-icon,\n.Select-item-label {\n  display: inline-block;\n  vertical-align: middle; }\n\n.Select-item-label {\n  border-bottom-right-radius: 2px;\n  border-top-right-radius: 2px;\n  cursor: default;\n  padding: 2px 5px; }\n\n.Select-item-label .Select-item-label__a {\n  color: #007eff;\n  cursor: pointer; }\n\n.Select-item-icon {\n  cursor: pointer;\n  border-bottom-left-radius: 2px;\n  border-top-left-radius: 2px;\n  border-right: 1px solid rgba(0, 126, 255, 0.24);\n  padding: 1px 5px 3px; }\n\n.Select-item-icon:hover,\n.Select-item-icon:focus {\n  background-color: rgba(0, 113, 230, 0.08);\n  color: #0071e6; }\n\n.Select-item-icon:active {\n  background-color: rgba(0, 126, 255, 0.24); }\n\n.Select--multi.is-disabled .Select-item {\n  background-color: #f2f2f2;\n  border: 1px solid #d9d9d9;\n  color: #888; }\n\n.Select--multi.is-disabled .Select-item-icon {\n  cursor: not-allowed;\n  border-right: 1px solid #d9d9d9; }\n\n.Select--multi.is-disabled .Select-item-icon:hover,\n.Select--multi.is-disabled .Select-item-icon:focus,\n.Select--multi.is-disabled .Select-item-icon:active {\n  background-color: #f2f2f2; }\n\n@keyframes Select-animation-spin {\n  to {\n    transform: rotate(1turn); } }\n\n@-webkit-keyframes Select-animation-spin {\n  to {\n    -webkit-transform: rotate(1turn); } }\n\nbody {\n  color: #333;\n  font-family: Helvetica Neue, Helvetica, Arial, sans-serif;\n  font-size: 14px;\n  line-height: 1.4;\n  margin: 0;\n  padding: 0; }\n\na {\n  color: #007eff;\n  text-decoration: none; }\n\na:hover {\n  text-decoration: underline; }\n\n.container {\n  margin-left: auto;\n  margin-right: auto;\n  max-width: 400px;\n  padding: 0 30px; }\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\n.h1,\n.h2,\n.h3,\n.h4,\n.h5,\n.h6 {\n  color: black;\n  font-weight: 500;\n  line-height: 1;\n  margin-bottom: .66em;\n  margin-top: 0; }\n\nh1,\n.h1 {\n  font-size: 3em; }\n\nh2,\n.h2 {\n  font-size: 2em;\n  font-weight: 300; }\n\nh3,\n.h3 {\n  font-size: 1.25em; }\n\nh4,\n.h4 {\n  font-size: 1em; }\n\nh5,\n.h5 {\n  font-size: .85em; }\n\nh6,\n.h6 {\n  font-size: .75em; }\n\n.page-body,\n.page-footer,\n.page-header {\n  padding: 30px 0; }\n\n.page-header {\n  background-color: #007eff;\n  color: #bfdfff; }\n\n.page-header h1,\n.page-header h2,\n.page-header h3 {\n  color: white; }\n\n.page-header p {\n  font-size: 1.2em;\n  margin: 0; }\n\n.page-header a {\n  border-bottom: 1px solid rgba(255, 255, 255, 0.3);\n  color: white;\n  text-decoration: none; }\n\n.page-header a:hover,\n.page-header a:focus {\n  border-bottom-color: white;\n  outline: none;\n  text-decoration: none; }\n\n.page-subheader {\n  background-color: #e6f2ff;\n  line-height: 20px;\n  padding: 30px 0; }\n\n.page-subheader__button {\n  float: right; }\n\n.page-subheader__link {\n  border-bottom: 1px solid rgba(0, 126, 255, 0.3);\n  outline: none;\n  text-decoration: none; }\n\n.page-subheader__link:hover,\n.page-subheader__link:focus {\n  border-bottom-color: #007eff;\n  outline: none;\n  text-decoration: none; }\n\n.page-footer {\n  background-color: #fafafa;\n  color: #999;\n  padding: 30px 0;\n  text-align: center; }\n\n.page-footer a {\n  color: black; }\n\n@media (min-width: 480px) {\n  .page-body,\n  .page-header {\n    padding: 60px 0; }\n  .page-header {\n    font-size: 1.4em; }\n  .page-subheader {\n    font-size: 1.125em;\n    line-height: 28px; } }\n\n.checkbox-list {\n  margin-top: .5em;\n  overflow: hidden; }\n\n.checkbox-list > .checkbox {\n  clear: left;\n  float: left;\n  margin-top: .5em; }\n\n.checkbox-control {\n  margin-right: .5em;\n  position: relative;\n  top: -1px; }\n\n.switcher {\n  color: #999;\n  cursor: default;\n  font-size: 12px;\n  margin: 10px 0;\n  text-transform: uppercase; }\n\n.switcher .link {\n  color: #007eff;\n  cursor: pointer;\n  font-weight: bold;\n  margin-left: 10px; }\n\n.switcher .link:hover {\n  text-decoration: underline; }\n\n.switcher .active {\n  color: #666;\n  font-weight: bold;\n  margin-left: 10px; }\n\n.section {\n  margin-bottom: 40px; }\n\n.hint {\n  font-size: .85em;\n  margin: 15px 0;\n  color: #666; }\n\n/*\n\n// include these styles to test normal form fields\n\n.form-input {\n\tmargin-bottom: 15px;\n}\n\n.form-input input {\n\tbackground-color: white;\n\tborder-color: lighten(@select-input-border-color, 5%) @select-input-border-color darken(@select-input-border-color, 10%);\n\tborder-radius: @select-input-border-radius;\n\tborder: 1px solid @select-input-border-color;\n\tbox-sizing: border-box;\n\tcolor: @select-text-color;\n\tfont-size: 14px;\n\toutline: none;\n\tpadding: @select-padding-vertical @select-padding-horizontal;\n\ttransition: all 200ms ease;\n\twidth: 100%;\n\n\t&:hover {\n\t\tbox-shadow: 0 1px 0 rgba(0, 0, 0, 0.06);\n\t}\n\n\t&:focus {\n\t\tborder-color: @select-input-border-focus lighten(@select-input-border-focus, 5%) lighten(@select-input-border-focus, 5%);\n\t\tbox-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.1), 0 0 5px -1px fade(@select-input-border-focus,50%);\n\t}\n}\n\n*/\n", ""]);

	// exports


/***/ }

});