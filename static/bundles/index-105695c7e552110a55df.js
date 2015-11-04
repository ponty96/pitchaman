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

	var _componentsHomePageHome = __webpack_require__(160);

	var _componentsHomePageHome2 = _interopRequireDefault(_componentsHomePageHome);

	_reactDom2['default'].render(_react2['default'].createElement(_componentsHomePageHome2['default'], null), document.getElementById('react-app'));

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

	        this.clickNav = function (text) {
	            _this.setState({ showSearch: false });
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
	            var showSearch = this.state.showSearch;
	            var showAuth = this.state.showAuth;
	            var main_search_class = undefined;
	            var auth_modals_class = undefined;
	            var title = undefined;
	            switch (showAuth) {
	                case 1:
	                    title = "Login With";
	                    break;
	                case -1:
	                    title = "Sign Up With";
	                    break;
	                default:
	                    auth_modals_class = "auth-modal hide";
	                    break;
	            }

	            if (showSearch) {
	                main_search_class = "main-search";
	                auth_modals_class = "auth-modal hide";
	            } else {
	                main_search_class = "main-search hide";
	                auth_modals_class = "auth-modal show";
	            }
	            return _react2['default'].createElement('div', { className: 'home-bg' }, _react2['default'].createElement('div', { className: 'container-fluid' }, _react2['default'].createElement('header', { className: 'row idx-header' }, _react2['default'].createElement('div', { className: 'col-md-2 col-sm-3 col-xs-5' }, _react2['default'].createElement('div', { className: 'brand' }, _react2['default'].createElement('img', { src: '/static/images/pitch/pitchaman_logo.png', className: 'img-responsive' }), _react2['default'].createElement('div', { className: 'tagline' }, '...pitch now...get pitched'))), _react2['default'].createElement('div', { className: 'col-md-10 col-sm-9 col-xs-12' }, _react2['default'].createElement('div', { className: 'authLinks' }, _react2['default'].createElement('span', null, 'Login'), _react2['default'].createElement('span', null, 'Sign Up')))), _react2['default'].createElement('div', { className: 'row' }, _react2['default'].createElement('p', { className: 'text-right punchline' }, 'Business Potentials ', _react2['default'].createElement('span', { className: 'black' }, 'meet'), ' Investors')), _react2['default'].createElement('div', { className: auth_modals_class }, _react2['default'].createElement(_reusableAuthModalAuthModal2['default'], { title: title,
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

/***/ 161:
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

	__webpack_require__(162);

	var Search = (function (_Component) {
	    _inherits(Search, _Component);

	    function Search() {
	        var _this = this;

	        _classCallCheck(this, Search);

	        _get(Object.getPrototypeOf(Search.prototype), 'constructor', this).apply(this, arguments);

	        this.keyPress = function (e) {
	            /**
	             * if the user clicks enter, we pass the value in
	             * the input field back to the parent component onClickEnter
	             * */
	            if (e.which == 13 || e.keyCode == 13) {
	                var text = e.target.value;
	                _this.props.onClickEnter(text);
	            }
	        };
	    }

	    _createClass(Search, [{
	        key: 'render',
	        value: function render() {
	            var _this2 = this;

	            var className = this.props.className;
	            var placeholder = this.props.placeholder;
	            return _react2['default'].createElement('div', { className: className }, _react2['default'].createElement('span', { className: 'icon' }, _react2['default'].createElement('i', { className: 'fa fa-search' })), _react2['default'].createElement('input', { type: 'text', placeholder: placeholder, onKeyPress: function onKeyPress(e) {
	                    return _this2.keyPress(e);
	                } }));
	        }
	    }]);

	    return Search;
	})(_react.Component);

	exports['default'] = Search;

	Search.defaultProps = {
	    className: "search-box",
	    placeholder: "search..."
	};

	Search.propTypes = {
	    placeholder: _react.PropTypes.string,
	    onClickEnter: _react.PropTypes.func.isRequired,
	    className: _react.PropTypes.string
	};

	/**
	 * Props => placeholder for the search element
	 * and the function that the parent component will use to get the text in the search component
	 *
	 * **/
	module.exports = exports['default'];

/***/ },

/***/ 162:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(163);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(165)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../../../node_modules/css-loader/index.js!./../../../../../node_modules/sass-loader/index.js?sourceMap!./search.scss", function() {
				var newContent = require("!!./../../../../../node_modules/css-loader/index.js!./../../../../../node_modules/sass-loader/index.js?sourceMap!./search.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 163:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(164)();
	// imports


	// module
	exports.push([module.id, ".black {\n  color: #000; }\n\n.left {\n  float: left; }\n\n.right {\n  float: right; }\n\n.search-box {\n  height: inherit;\n  width: 300px;\n  background: #fff;\n  border-radius: 10px;\n  padding: 2px 4px; }\n  .search-box input[type=\"text\"] {\n    border: none;\n    background: none;\n    border-left: 1px solid #000; }\n    .search-box input[type=\"text\"] input:-moz-placeholder {\n      color: #000;\n      font-family: inherit;\n      font-size: 14px;\n      padding: 0 0 2px 0; }\n    .search-box input[type=\"text\"] input:-ms-input-placeholder {\n      color: #000;\n      font-family: inherit;\n      font-size: 14px;\n      padding: 0 0 2px 0; }\n    .search-box input[type=\"text\"] input::-webkit-input-placeholder {\n      color: #000;\n      font-family: inherit;\n      font-size: 14px;\n      padding: 0 0 2px 0; }\n    .search-box input[type=\"text\"]:focus {\n      outline: none; }\n  .search-box .icon {\n    display: inline-block;\n    padding: 3px 4px;\n    margin-right: 4px; }\n    .search-box .icon .fa {\n      -webkit-transform: rotate(80deg);\n      -moz-transform: rotate(80deg);\n      -ms-transform: rotate(80deg);\n      -o-transform: rotate(80deg);\n      transform: rotate(80deg); }\n\n.search-box-big {\n  height: 65px;\n  width: 430px;\n  background: rgba(238, 238, 238, 0.44);\n  border-radius: 30px;\n  padding: 2px 4px;\n  font-family: 'Ubuntu', san-serif;\n  font-weight: bold;\n  /*\n  responsive css media query for small devices\n  **/ }\n  .search-box-big input:-moz-placeholder {\n    color: #000;\n    font-family: inherit;\n    font-size: 22px;\n    padding: 0 0 2px 0; }\n  .search-box-big input:-ms-input-placeholder {\n    color: #000;\n    font-family: inherit;\n    font-size: 22px;\n    padding: 0 0 2px 0; }\n  .search-box-big input::-webkit-input-placeholder {\n    color: #000;\n    font-family: inherit;\n    font-size: 22px;\n    padding: 0 0 2px 0; }\n  .search-box-big input[type=\"text\"] {\n    height: 100%;\n    border: none;\n    font-size: 22px;\n    background: none;\n    border-left: 1px solid #000;\n    padding-left: 6px;\n    letter-spacing: 2px; }\n    .search-box-big input[type=\"text\"]:focus {\n      outline: none; }\n  .search-box-big .icon {\n    display: inline-block;\n    padding: 6px 4px 0 4px;\n    margin-right: 5px;\n    margin-left: 5px;\n    color: #000; }\n    .search-box-big .icon .fa {\n      -webkit-transform: rotate(80deg);\n      -moz-transform: rotate(80deg);\n      -ms-transform: rotate(80deg);\n      -o-transform: rotate(80deg);\n      transform: rotate(80deg);\n      font-size: 33px;\n      text-align: center; }\n  @media screen and (max-width: 768px) {\n    .search-box-big {\n      width: 100%; }\n      .search-box-big input:-moz-placeholder {\n        color: #000;\n        font-family: inherit;\n        font-size: 18px;\n        padding: 0 0 2px 0; }\n      .search-box-big input:-ms-input-placeholder {\n        color: #000;\n        font-family: inherit;\n        font-size: 18px;\n        padding: 0 0 2px 0; }\n      .search-box-big input::-webkit-input-placeholder {\n        color: #000;\n        font-family: inherit;\n        font-size: 18px;\n        padding: 0 0 2px 0; }\n      .search-box-big input[type=\"text\"] {\n        height: 100%;\n        border: none;\n        font-size: 18px;\n        background: none;\n        border-left: 1px solid #000;\n        padding-left: 6px;\n        letter-spacing: 2px;\n        width: 70%; }\n        .search-box-big input[type=\"text\"]:focus {\n          outline: none; }\n      .search-box-big .icon {\n        display: inline-block;\n        padding: 6px 4px 0 4px;\n        margin-right: 5px;\n        margin-left: 5px;\n        color: #000; }\n        .search-box-big .icon .fa {\n          -webkit-transform: rotate(80deg);\n          -moz-transform: rotate(80deg);\n          -ms-transform: rotate(80deg);\n          -o-transform: rotate(80deg);\n          transform: rotate(80deg);\n          font-size: 28px;\n          text-align: center; } }\n", ""]);

	// exports


/***/ },

/***/ 164:
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	"use strict";

	module.exports = function () {
		var list = [];

		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for (var i = 0; i < this.length; i++) {
				var item = this[i];
				if (item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};

		// import a list of modules into the list
		list.i = function (modules, mediaQuery) {
			if (typeof modules === "string") modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for (var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if (typeof id === "number") alreadyImportedModules[id] = true;
			}
			for (i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if (typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if (mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if (mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};

/***/ },

/***/ 165:
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0;

	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();

		var styles = listToStyles(list);
		addStylesToDom(styles, options);

		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}

	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}

	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}

	function createStyleElement() {
		var styleElement = document.createElement("style");
		var head = getHeadElement();
		styleElement.type = "text/css";
		head.appendChild(styleElement);
		return styleElement;
	}

	function createLinkElement() {
		var linkElement = document.createElement("link");
		var head = getHeadElement();
		linkElement.rel = "stylesheet";
		head.appendChild(linkElement);
		return linkElement;
	}

	function addStyle(obj, options) {
		var styleElement, update, remove;

		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement());
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement();
			update = updateLink.bind(null, styleElement);
			remove = function() {
				styleElement.parentNode.removeChild(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement();
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				styleElement.parentNode.removeChild(styleElement);
			};
		}

		update(obj);

		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}

	var replaceText = (function () {
		var textStore = [];

		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();

	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}

	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;
		var sourceMap = obj.sourceMap;

		if(media) {
			styleElement.setAttribute("media", media)
		}

		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}

	function updateLink(linkElement, obj) {
		var css = obj.css;
		var media = obj.media;
		var sourceMap = obj.sourceMap;

		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}

		var blob = new Blob([css], { type: "text/css" });

		var oldSrc = linkElement.href;

		linkElement.href = URL.createObjectURL(blob);

		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


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
	exports.push([module.id, ".black {\n  color: #000; }\n\n.left {\n  float: left; }\n\n.right {\n  float: right; }\n\n.auth-modal {\n  font-family: 'Ubuntu', san-serif;\n  font-weight: bold;\n  width: 550px; }\n  @media screen and (max-width: 768px) {\n    .auth-modal {\n      width: auto; } }\n  .auth-modal .header {\n    padding: 8px 0;\n    background: rgba(102, 102, 102, 0.32);\n    color: #fff;\n    text-align: center;\n    font-size: 18px; }\n    .auth-modal .header.leftActive {\n      background: #1690a2; }\n    .auth-modal .header.rightActive {\n      background: #ff0e18; }\n  .auth-modal .body {\n    display: inline-block;\n    background: #666;\n    height: auto;\n    padding: 30px 0;\n    width: 100%; }\n    .auth-modal .body .left {\n      margin-left: 40px; }\n    .auth-modal .body .right {\n      margin-right: 40px; }\n    .auth-modal .body .social-btn {\n      display: inline-block;\n      border: 2px solid #fff;\n      height: 120px;\n      width: 120px;\n      border-radius: 50%;\n      cursor: pointer; }\n      .auth-modal .body .social-btn.left:hover {\n        background: #1690a2;\n        border: 2px solid #1690a2; }\n      .auth-modal .body .social-btn.right:hover {\n        background: #ff0e18;\n        border: 2px solid #ff0e18; }\n      .auth-modal .body .social-btn:active {\n        border: 2px solid #fff; }\n      .auth-modal .body .social-btn .fa {\n        font-size: 53px;\n        color: #fff;\n        display: inline-block;\n        padding: 28px 0 0 38px; }\n", ""]);

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
	exports.push([module.id, ".black {\n  color: #000; }\n\n.left {\n  float: left; }\n\n.right {\n  float: right; }\n\n.home-bg {\n  background: url(\"/static/images/pitch/pitchaman-info-graphics.jpg\") no-repeat center center fixed;\n  height: 100%;\n  width: 100%;\n  position: absolute;\n  -webkit-background-size: cover;\n  -moz-background-size: cover;\n  -o-background-size: cover;\n  background-size: cover;\n  color: #5d5d5d; }\n  .home-bg .idx-header {\n    background: rgba(238, 238, 238, 0.44);\n    padding: 10px 13px; }\n    .home-bg .idx-header .brand img {\n      width: 100%;\n      height: auto;\n      display: block;\n      margin-left: auto;\n      margin-right: auto; }\n    .home-bg .idx-header .brand .tagline {\n      width: 100%;\n      height: auto;\n      display: inline-block;\n      font-family: 'Ubuntu', san-serif;\n      font-weight: bold;\n      font-size: 12px;\n      margin-top: 4px;\n      float: right; }\n    .home-bg .idx-header .authLinks {\n      float: right;\n      margin-top: 40px; }\n      .home-bg .idx-header .authLinks span {\n        display: inline-block;\n        font-family: 'Ubuntu', san-serif;\n        font-weight: bold;\n        font-size: 18px;\n        margin: 0 10px; }\n        .home-bg .idx-header .authLinks span:hover {\n          cursor: pointer; }\n      @media screen and (max-width: 768px) {\n        .home-bg .idx-header .authLinks {\n          float: left;\n          margin-top: 20px; }\n          .home-bg .idx-header .authLinks span {\n            display: block;\n            margin: 8px 0; } }\n  .home-bg .punchline {\n    font-size: 35px;\n    color: #fff;\n    font-family: 'Ubuntu', san-serif;\n    font-weight: bold;\n    margin-right: 10px;\n    margin-top: 10px; }\n  .home-bg .auth-modals {\n    position: fixed;\n    top: 45%;\n    right: 35%;\n    left: 30%; }\n    .home-bg .auth-modals.hide {\n      display: none; }\n    @media screen and (max-width: 768px) {\n      .home-bg .auth-modals {\n        left: 20%;\n        right: 20%; } }\n  .home-bg .main-search {\n    position: fixed;\n    top: 65%;\n    right: 40%;\n    left: 35%; }\n    .home-bg .main-search.hide {\n      display: none; }\n    @media screen and (max-width: 768px) {\n      .home-bg .main-search {\n        left: 20%;\n        right: 20%; } }\n", ""]);

	// exports


/***/ }

});