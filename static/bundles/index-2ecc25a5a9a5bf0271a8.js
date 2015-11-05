webpackJsonp([0],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ },

/***/ 1:
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Created by ponty on 11/2/15.
	 */
	'use strict';

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { 'default': obj };
	}

	var _reactDom = __webpack_require__(2);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _react = __webpack_require__(148);

	var _react2 = _interopRequireDefault(_react);

	var _home = __webpack_require__(160);

	var _home2 = _interopRequireDefault(_home);

	_reactDom2['default'].render(_react2['default'].createElement(_home2['default'], null), document.getElementById('react-app'));

/***/ },

/***/ 160:
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Created by ponty on 11/3/15.
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

	var _reusableSearchSearch = __webpack_require__(161);

	var _reusableSearchSearch2 = _interopRequireDefault(_reusableSearchSearch);

	var _reusableAuthModalAuthModal = __webpack_require__(166);

	var _reusableAuthModalAuthModal2 = _interopRequireDefault(_reusableAuthModalAuthModal);

	__webpack_require__(169);

	var HomePage = (function (_Component) {
	    _inherits(HomePage, _Component);

	    function HomePage() {
	        var _this = this;

	        _classCallCheck(this, HomePage);

	        _get(Object.getPrototypeOf(HomePage.prototype), 'constructor', this).call(this);

	        this.search = function (text) {
	            console.log('search word' + text);
	        };

	        this.clickNav = function (pos) {

	            _this.setState({ showSearch: false, showAuth: pos });
	        };

	        this.state = { showSearch: true, showAuth: 0 };
	    }

	    /**
	     * states => showSearch [true or false,
	     * if it is false main-search class becomes main-search hide and auth-modals]
	     * else main-search == main-search and auth-modals becomes auth-modals hide
	     *
	     * showAuth => {which if its is 1 means setTitle as Login With
	     * else if is -1 show title has signUp as
	     * else auth-modals == auth-modals hide
	     * }
	     *
	     * clickNav => changes the state to show login dialog box or sign up
	     *
	     * */

	    _createClass(HomePage, [{
	        key: 'render',
	        value: function render() {
	            var _this2 = this;

	            var showSearch = this.state.showSearch;
	            var showAuth = this.state.showAuth;
	            var main_search_class = undefined;
	            var auth_modals_class = undefined;
	            var title = "";
	            switch (showAuth) {
	                case 1:
	                    title = "Login With";
	                    break;
	                case -1:
	                    title = "Sign Up With";
	                    break;
	                default:
	                    auth_modals_class = "auth-modals hide";
	                    break;
	            }

	            if (showSearch) {
	                main_search_class = "main-search";
	                auth_modals_class = "auth-modals hide";
	            } else {
	                main_search_class = "main-search hide";
	                auth_modals_class = "auth-modals";
	            }
	            return _react2['default'].createElement('div', { className: 'home-bg' }, _react2['default'].createElement('div', { className: 'container-fluid' }, _react2['default'].createElement('header', { className: 'row idx-header' }, _react2['default'].createElement('div', { className: 'col-md-2 col-sm-3 col-xs-5' }, _react2['default'].createElement('div', { className: 'brand' }, _react2['default'].createElement('img', { src: '/static/images/pitch/pitchaman_logo.png', className: 'img-responsive' }), _react2['default'].createElement('div', { className: 'tagline' }, '...pitch now...get pitched'))), _react2['default'].createElement('div', { className: 'authLinks' }, _react2['default'].createElement('div', { className: 'col-md-12 col-sm-12 col-xs-12' }, _react2['default'].createElement('span', { onClick: function onClick() {
	                    return _this2.clickNav(1);
	                } }, 'Login'), _react2['default'].createElement('span', { onClick: function onClick() {
	                    return _this2.clickNav(-1);
	                } }, 'Sign Up')))), _react2['default'].createElement('div', { className: 'row' }, _react2['default'].createElement('p', { className: 'text-right punchline' }, 'Business Potentials ', _react2['default'].createElement('span', { className: 'black' }, 'meet'), ' Investors')), _react2['default'].createElement('div', { className: auth_modals_class }, _react2['default'].createElement(_reusableAuthModalAuthModal2['default'], { title: title,
	                fbUrl: 'http://localhost:5000/accounts/facebook/login/',
	                gPlusUrl: ''
	            })), _react2['default'].createElement('div', { className: main_search_class }, _react2['default'].createElement(_reusableSearchSearch2['default'], { className: 'search-box-big', onClickEnter: this.search }))));
	        }
	    }]);

	    return HomePage;
	})(_react.Component);

	exports['default'] = HomePage;
	module.exports = exports['default'];

/***/ },

/***/ 166:
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Created by ponty on 11/4/15.
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

	__webpack_require__(167);

	var AuthModal = (function (_Component) {
	    _inherits(AuthModal, _Component);

	    function AuthModal() {
	        var _this = this;

	        _classCallCheck(this, AuthModal);

	        _get(Object.getPrototypeOf(AuthModal.prototype), 'constructor', this).call(this);

	        this.mouseOver = function (text) {
	            _this.setState({ clicked: text });
	        };

	        this.mouseOut = function () {
	            _this.setState({ clicked: '' });
	        };

	        this.state = { clicked: '' };
	    }

	    _createClass(AuthModal, [{
	        key: 'render',
	        value: function render() {
	            var _this2 = this;

	            var clicked = this.state.clicked;
	            var headerClass = undefined;
	            if (clicked == 'left') {
	                headerClass = 'header leftActive';
	            } else if (clicked == 'right') {
	                headerClass = 'header rightActive';
	            } else {
	                headerClass = 'header';
	            }

	            var facebook_Url = this.props.fbUrl;
	            var googleplus_url = this.props.gPlusUrl;
	            var title = this.props.title;
	            return _react2['default'].createElement('div', { className: 'auth-modal' }, _react2['default'].createElement('div', { className: headerClass }, title), _react2['default'].createElement('div', { className: 'body' }, _react2['default'].createElement('a', { className: 'social-btn left', href: facebook_Url,
	                onMouseOver: function onMouseOver() {
	                    return _this2.mouseOver('left');
	                },
	                onMouseOut: function onMouseOut() {
	                    return _this2.mouseOut();
	                } }, _react2['default'].createElement('i', { className: 'fa fa-facebook' })), _react2['default'].createElement('a', { className: 'social-btn right', href: googleplus_url,
	                onMouseOver: function onMouseOver() {
	                    return _this2.mouseOver('right');
	                },
	                onMouseOut: function onMouseOut() {
	                    return _this2.mouseOut();
	                } }, _react2['default'].createElement('i', { className: 'fa fa-google-plus' }))));
	        }
	    }]);

	    return AuthModal;
	})(_react.Component);

	exports['default'] = AuthModal;

	AuthModal.propTypes = {
	    fbUrl: _react.PropTypes.string.isRequired,
	    gPlusUrl: _react.PropTypes.string,
	    title: _react.PropTypes.string.isRequired
	};
	/**
	 * state => click
	 * the effect here is obvious after viewing the page but will still explain here
	 * when the user hovers around a social btn [facebook or google]
	 * the state of the component is automatically changed and the header bg color and also the bg color of the social btn
	 * to the color of main color of the social auth provider
	 *
	 *  props => facebook url && google url
	 *  Header title
	 *
	 * */
	module.exports = exports['default'];

/***/ },

/***/ 167:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(168);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(165)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../../../node_modules/css-loader/index.js!./../../../../../node_modules/sass-loader/index.js?sourceMap!./auth-modal.scss", function() {
				var newContent = require("!!./../../../../../node_modules/css-loader/index.js!./../../../../../node_modules/sass-loader/index.js?sourceMap!./auth-modal.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 168:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(164)();
	// imports


	// module
	exports.push([module.id, ".black {\n  color: #000; }\n\n.left {\n  float: left; }\n\n.right {\n  float: right; }\n\n.header {\n  background: -moz-linear-gradient(180deg, #fff 10%, #e9e9e9);\n  background: -webkit-linear-gradient(180deg, #fff 10%, #e9e9e9);\n  background: -o-linear-gradient(180deg, #fff 10%, #e9e9e9);\n  background: linear-gradient(180deg, #fff 10%, #e9e9e9);\n  box-shadow: inset 0 -1px 1px 0 #000;\n  height: 60px; }\n  .header .logo img {\n    width: auto;\n    height: auto; }\n  .header .logo.bulb {\n    display: inline-block;\n    width: 30px;\n    margin: 3px 3px; }\n\n/** Custom Bootstrap Tab Style here*/\n.tabs-right {\n  width: 100%; }\n  .tabs-right .nav-tabs {\n    position: absolute;\n    right: 0;\n    top: -35px; }\n\n.nav-tabs {\n  border-bottom: none;\n  font-size: 20px;\n  font-family: Ubuntu; }\n\n.nav-tabs > li.active > a,\n.nav-tabs > li.active > a:focus,\n.nav-tabs > li.active > a:hover {\n  color: #20afcb;\n  cursor: default;\n  background-color: #fff;\n  border: 1px solid #ddd;\n  border-bottom-color: transparent; }\n\n.nav-tabs > li > a {\n  margin-right: 2px;\n  line-height: 1.42857143;\n  border-radius: 4px 4px 0 0;\n  border-bottom: none; }\n  .nav-tabs > li > a:focus {\n    outline: none; }\n\n.nav > li > a {\n  position: relative;\n  display: block;\n  padding: 5px 20px 0 20px;\n  color: #5d5d5d; }\n\n.auth-modal {\n  font-family: 'Ubuntu', san-serif;\n  font-weight: bold;\n  width: 550px; }\n  @media screen and (max-width: 768px) {\n    .auth-modal {\n      width: auto; } }\n  .auth-modal .header {\n    padding: 8px 0;\n    background: rgba(102, 102, 102, 0.32);\n    color: #fff;\n    text-align: center;\n    font-size: 18px; }\n    .auth-modal .header.leftActive {\n      background: #1690a2; }\n    .auth-modal .header.rightActive {\n      background: #ff0e18; }\n  .auth-modal .body {\n    display: inline-block;\n    background: #666;\n    height: auto;\n    padding: 30px 0;\n    width: 100%; }\n    .auth-modal .body .left {\n      margin-left: 40px; }\n    .auth-modal .body .right {\n      margin-right: 40px; }\n    .auth-modal .body .social-btn {\n      display: inline-block;\n      border: 2px solid #fff;\n      height: 120px;\n      width: 120px;\n      border-radius: 50%;\n      cursor: pointer; }\n      .auth-modal .body .social-btn.left:hover {\n        background: #1690a2;\n        border: 2px solid #1690a2; }\n      .auth-modal .body .social-btn.right:hover {\n        background: #ff0e18;\n        border: 2px solid #ff0e18; }\n      .auth-modal .body .social-btn:active {\n        border: 2px solid #fff; }\n      .auth-modal .body .social-btn .fa {\n        font-size: 53px;\n        color: #fff;\n        display: inline-block;\n        padding: 28px 0 0 38px; }\n", ""]);

	// exports


/***/ },

/***/ 169:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(170);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(165)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../../node_modules/css-loader/index.js!./../../../../node_modules/sass-loader/index.js?sourceMap!./home-page.scss", function() {
				var newContent = require("!!./../../../../node_modules/css-loader/index.js!./../../../../node_modules/sass-loader/index.js?sourceMap!./home-page.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 170:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(164)();
	// imports


	// module
	exports.push([module.id, ".black {\n  color: #000; }\n\n.left {\n  float: left; }\n\n.right {\n  float: right; }\n\n.header {\n  background: -moz-linear-gradient(180deg, #fff 10%, #e9e9e9);\n  background: -webkit-linear-gradient(180deg, #fff 10%, #e9e9e9);\n  background: -o-linear-gradient(180deg, #fff 10%, #e9e9e9);\n  background: linear-gradient(180deg, #fff 10%, #e9e9e9);\n  box-shadow: inset 0 -1px 1px 0 #000;\n  height: 60px; }\n  .header .logo img {\n    width: auto;\n    height: auto; }\n  .header .logo.bulb {\n    display: inline-block;\n    width: 30px;\n    margin: 3px 3px; }\n\n/** Custom Bootstrap Tab Style here*/\n.tabs-right {\n  width: 100%; }\n  .tabs-right .nav-tabs {\n    position: absolute;\n    right: 0;\n    top: -35px; }\n\n.nav-tabs {\n  border-bottom: none;\n  font-size: 20px;\n  font-family: Ubuntu; }\n\n.nav-tabs > li.active > a,\n.nav-tabs > li.active > a:focus,\n.nav-tabs > li.active > a:hover {\n  color: #20afcb;\n  cursor: default;\n  background-color: #fff;\n  border: 1px solid #ddd;\n  border-bottom-color: transparent; }\n\n.nav-tabs > li > a {\n  margin-right: 2px;\n  line-height: 1.42857143;\n  border-radius: 4px 4px 0 0;\n  border-bottom: none; }\n  .nav-tabs > li > a:focus {\n    outline: none; }\n\n.nav > li > a {\n  position: relative;\n  display: block;\n  padding: 5px 20px 0 20px;\n  color: #5d5d5d; }\n\n.home-bg {\n  background: url(\"/static/images/pitch/pitchaman-info-graphics.jpg\") no-repeat center center fixed;\n  height: 100%;\n  width: 100%;\n  position: absolute;\n  -webkit-background-size: cover;\n  -moz-background-size: cover;\n  -o-background-size: cover;\n  background-size: cover;\n  color: #5d5d5d; }\n  .home-bg .idx-header {\n    background: rgba(238, 238, 238, 0.44); }\n    .home-bg .idx-header .brand img {\n      width: 100%;\n      height: auto;\n      display: block;\n      margin-left: auto;\n      margin-right: auto; }\n    .home-bg .idx-header .brand .tagline {\n      width: 100%;\n      height: auto;\n      display: inline-block;\n      font-family: 'Ubuntu', san-serif;\n      font-weight: bold;\n      font-size: 12px;\n      margin-top: 4px;\n      float: right; }\n    .home-bg .idx-header .authLinks {\n      float: right; }\n      .home-bg .idx-header .authLinks span {\n        display: inline-block;\n        font-family: 'Ubuntu', san-serif;\n        font-weight: bold;\n        font-weight: bold;\n        font-size: 18px;\n        padding: 40px 10px 7px 10px; }\n        .home-bg .idx-header .authLinks span:hover {\n          cursor: pointer;\n          background: rgba(238, 238, 238, 0.64); }\n      @media screen and (max-width: 768px) {\n        .home-bg .idx-header .authLinks {\n          float: left;\n          margin-top: 20px;\n          width: 100%;\n          background: #000; }\n          .home-bg .idx-header .authLinks span {\n            display: block;\n            margin: 8px 0;\n            padding: 10px 10px 7px 10px; } }\n  .home-bg .punchline {\n    font-size: 35px;\n    color: #fff;\n    font-family: 'Ubuntu', san-serif;\n    font-weight: bold;\n    margin-right: 10px;\n    margin-top: 10px; }\n  .home-bg .auth-modals {\n    position: fixed;\n    top: 45%;\n    right: 35%;\n    left: 30%; }\n    .home-bg .auth-modals.hide {\n      display: none; }\n    @media screen and (max-width: 768px) {\n      .home-bg .auth-modals {\n        left: 20%;\n        right: 20%; } }\n  .home-bg .main-search {\n    position: fixed;\n    top: 65%;\n    right: 40%;\n    left: 35%; }\n    .home-bg .main-search.hide {\n      display: none; }\n    @media screen and (max-width: 768px) {\n      .home-bg .main-search {\n        left: 20%;\n        right: 20%; } }\n", ""]);

	// exports


/***/ }

});