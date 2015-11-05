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

	var _formsInvestorForm = __webpack_require__(409);

	var _formsInvestorForm2 = _interopRequireDefault(_formsInvestorForm);

	var _formsStartupForm = __webpack_require__(428);

	var _formsStartupForm2 = _interopRequireDefault(_formsStartupForm);

	var _reusableSearchSearch = __webpack_require__(161);

	var _reusableSearchSearch2 = _interopRequireDefault(_reusableSearchSearch);

	__webpack_require__(429);

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

/***/ 409:
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

	var _reactSelect = __webpack_require__(410);

	var _reactSelect2 = _interopRequireDefault(_reactSelect);

	var _reusableRangeCollectionRangeSlider = __webpack_require__(416);

	var _reusableRangeCollectionRangeSlider2 = _interopRequireDefault(_reusableRangeCollectionRangeSlider);

	var _reactToggle = __webpack_require__(419);

	var _reactToggle2 = _interopRequireDefault(_reactToggle);

	var options = [{ value: 'one', label: 'One' }, { value: 'two', label: 'Two' }];

	__webpack_require__(426);

	var InvestorForm = (function (_Component) {
	    _inherits(InvestorForm, _Component);

	    function InvestorForm() {
	        var _this = this;

	        _classCallCheck(this, InvestorForm);

	        _get(Object.getPrototypeOf(InvestorForm.prototype), 'constructor', this).call(this);

	        this.toggle = function () {
	            var toggled = _this.state.toggled;
	            _this.setState({ toggled: !toggled });
	        };

	        this.state = { toggled: false };
	    }

	    _createClass(InvestorForm, [{
	        key: 'render',
	        value: function render() {
	            var _this2 = this;

	            var toggled = this.state.toggled;
	            return _react2['default'].createElement('div', null, _react2['default'].createElement('ul', { className: 'form-segment' }, _react2['default'].createElement('li', null, _react2['default'].createElement('div', { className: 'input-body' }, _react2['default'].createElement('div', { className: 'labels' }, _react2['default'].createElement('span', null, 'Legal Name'), _react2['default'].createElement('span', null, 'Country'), _react2['default'].createElement('span', null, 'State'), _react2['default'].createElement('span', { className: 'add' }, 'Address'), _react2['default'].createElement('span', null, 'Phone'), _react2['default'].createElement('span', null, 'Birth Date'), _react2['default'].createElement('span', { className: 'toggle' }, _react2['default'].createElement('label', null, _react2['default'].createElement(_reactToggle2['default'], {
	                defaultChecked: toggled,
	                onChange: function onChange() {
	                    return _this2.toggle();
	                }
	            })))), _react2['default'].createElement('div', { className: 'inputs' }, _react2['default'].createElement('span', null, _react2['default'].createElement('input', { type: 'text', placeholder: 'Full Name' })), _react2['default'].createElement('span', null, _react2['default'].createElement(_reactSelect2['default'], {
	                name: 'form-field-name',
	                options: options,
	                placeholder: 'Country...'
	            })), _react2['default'].createElement('span', null, _react2['default'].createElement(_reactSelect2['default'], {
	                name: 'form-field-name',
	                options: options,
	                placeholder: 'State....'
	            })), _react2['default'].createElement('span', { className: 'add' }, _react2['default'].createElement('input', { type: 'text', placeholder: 'Street' }), _react2['default'].createElement('span', { className: 'inline' }, _react2['default'].createElement('input', { type: 'text', className: 'city', placeholder: 'City' }), _react2['default'].createElement('input', { type: 'text', className: 'zip', placeholder: 'Zip' }))), _react2['default'].createElement('span', null, _react2['default'].createElement('input', { type: 'number', placeholder: '000-000-000-00' })), _react2['default'].createElement('span', null, _react2['default'].createElement('input', { type: 'date' })), _react2['default'].createElement('span', { className: 'toggle' }, 'I agree to the ', _react2['default'].createElement('i', { className: 'blue' }, 'Terms'), ' of service and ', _react2['default'].createElement('i', { className: 'blue' }, 'Investor'), ' Agreement')))), _react2['default'].createElement('li', null, _react2['default'].createElement('div', { className: 'range-box blue' }, _react2['default'].createElement('header', { className: 'head' }, 'What\'s your network minus your home?'), _react2['default'].createElement('div', { className: 'body' }, _react2['default'].createElement(_reusableRangeCollectionRangeSlider2['default'], null))), _react2['default'].createElement('div', { className: 'range-box orange' }, _react2['default'].createElement('header', { className: 'head' }, 'What\'s your annual salary?'), _react2['default'].createElement('div', { className: 'body' }, _react2['default'].createElement(_reusableRangeCollectionRangeSlider2['default'], null))), _react2['default'].createElement('div', { className: 'submit-button' }, _react2['default'].createElement('button', { className: 'blue-button' }, 'Create Investor Account')))));
	        }
	    }]);

	    return InvestorForm;
	})(_react.Component);

	exports['default'] = InvestorForm;
	module.exports = exports['default'];

/***/ },

/***/ 410:
/***/ function(module, exports, __webpack_require__) {

	/* disable some rules until we refactor more completely; fixing them now would
	   cause conflicts with some open PRs unnecessarily. */
	/* eslint react/jsx-sort-prop-types: 0, react/sort-comp: 0, react/prop-types: 0 */

	'use strict';

	var _extends = Object.assign || function (target) {
		for (var i = 1; i < arguments.length; i++) {
			var source = arguments[i];for (var key in source) {
				if (Object.prototype.hasOwnProperty.call(source, key)) {
					target[key] = source[key];
				}
			}
		}return target;
	};

	function _defineProperty(obj, key, value) {
		if (key in obj) {
			Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });
		} else {
			obj[key] = value;
		}return obj;
	}

	var React = __webpack_require__(148);
	var ReactDOM = __webpack_require__(2);
	var Input = __webpack_require__(411);
	var classes = __webpack_require__(412);
	var Value = __webpack_require__(413);
	var SingleValue = __webpack_require__(414);
	var Option = __webpack_require__(415);

	var requestId = 0;

	var Select = React.createClass({

		displayName: 'Select',

		propTypes: {
			addLabelText: React.PropTypes.string, // placeholder displayed when you want to add a label on a multi-value input
			allowCreate: React.PropTypes.bool, // whether to allow creation of new entries
			asyncOptions: React.PropTypes.func, // function to call to get options
			autoload: React.PropTypes.bool, // whether to auto-load the default async options set
			backspaceRemoves: React.PropTypes.bool, // whether backspace removes an item if there is no text input
			cacheAsyncResults: React.PropTypes.bool, // whether to allow cache
			className: React.PropTypes.string, // className for the outer element
			clearAllText: React.PropTypes.string, // title for the "clear" control when multi: true
			clearValueText: React.PropTypes.string, // title for the "clear" control
			clearable: React.PropTypes.bool, // should it be possible to reset value
			delimiter: React.PropTypes.string, // delimiter to use to join multiple values
			disabled: React.PropTypes.bool, // whether the Select is disabled or not
			filterOption: React.PropTypes.func, // method to filter a single option  (option, filterString)
			filterOptions: React.PropTypes.func, // method to filter the options array: function ([options], filterString, [values])
			ignoreCase: React.PropTypes.bool, // whether to perform case-insensitive filtering
			inputProps: React.PropTypes.object, // custom attributes for the Input (in the Select-control) e.g: {'data-foo': 'bar'}
			isLoading: React.PropTypes.bool, // whether the Select is loading externally or not (such as options being loaded)
			labelKey: React.PropTypes.string, // path of the label value in option objects
			matchPos: React.PropTypes.string, // (any|start) match the start or entire string when filtering
			matchProp: React.PropTypes.string, // (any|label|value) which option property to filter on
			multi: React.PropTypes.bool, // multi-value input
			name: React.PropTypes.string, // field name, for hidden <input /> tag
			newOptionCreator: React.PropTypes.func, // factory to create new options when allowCreate set
			noResultsText: React.PropTypes.string, // placeholder displayed when there are no matching search results
			onBlur: React.PropTypes.func, // onBlur handler: function (event) {}
			onChange: React.PropTypes.func, // onChange handler: function (newValue) {}
			onFocus: React.PropTypes.func, // onFocus handler: function (event) {}
			onInputChange: React.PropTypes.func, // onInputChange handler: function (inputValue) {}
			onOptionLabelClick: React.PropTypes.func, // onCLick handler for value labels: function (value, event) {}
			optionComponent: React.PropTypes.func, // option component to render in dropdown
			optionRenderer: React.PropTypes.func, // optionRenderer: function (option) {}
			options: React.PropTypes.array, // array of options
			placeholder: React.PropTypes.string, // field placeholder, displayed when there's no value
			searchable: React.PropTypes.bool, // whether to enable searching feature or not
			searchingText: React.PropTypes.string, // message to display whilst options are loading via asyncOptions
			searchPromptText: React.PropTypes.string, // label to prompt for search input
			singleValueComponent: React.PropTypes.func, // single value component when multiple is set to false
			value: React.PropTypes.any, // initial field value
			valueComponent: React.PropTypes.func, // value component to render in multiple mode
			valueKey: React.PropTypes.string, // path of the label value in option objects
			valueRenderer: React.PropTypes.func // valueRenderer: function (option) {}
		},

		getDefaultProps: function getDefaultProps() {
			return {
				addLabelText: 'Add "{label}"?',
				allowCreate: false,
				asyncOptions: undefined,
				autoload: true,
				backspaceRemoves: true,
				cacheAsyncResults: true,
				className: undefined,
				clearAllText: 'Clear all',
				clearValueText: 'Clear value',
				clearable: true,
				delimiter: ',',
				disabled: false,
				ignoreCase: true,
				inputProps: {},
				isLoading: false,
				labelKey: 'label',
				matchPos: 'any',
				matchProp: 'any',
				name: undefined,
				newOptionCreator: undefined,
				noResultsText: 'No results found',
				onChange: undefined,
				onInputChange: undefined,
				onOptionLabelClick: undefined,
				optionComponent: Option,
				options: undefined,
				placeholder: 'Select...',
				searchable: true,
				searchingText: 'Searching...',
				searchPromptText: 'Type to search',
				singleValueComponent: SingleValue,
				value: undefined,
				valueComponent: Value,
				valueKey: 'value'
			};
		},

		getInitialState: function getInitialState() {
			return {
				/*
	    * set by getStateFromValue on componentWillMount:
	    * - value
	    * - values
	    * - filteredOptions
	    * - inputValue
	    * - placeholder
	    * - focusedOption
	   */
				isFocused: false,
				isLoading: false,
				isOpen: false,
				options: this.props.options
			};
		},

		componentWillMount: function componentWillMount() {
			var _this = this;

			this._optionsCache = {};
			this._optionsFilterString = '';
			this._closeMenuIfClickedOutside = function (event) {
				if (!_this.state.isOpen) {
					return;
				}
				var menuElem = ReactDOM.findDOMNode(_this.refs.selectMenuContainer);
				var controlElem = ReactDOM.findDOMNode(_this.refs.control);

				var eventOccuredOutsideMenu = _this.clickedOutsideElement(menuElem, event);
				var eventOccuredOutsideControl = _this.clickedOutsideElement(controlElem, event);

				// Hide dropdown menu if click occurred outside of menu
				if (eventOccuredOutsideMenu && eventOccuredOutsideControl) {
					_this.setState({
						isOpen: false
					}, _this._unbindCloseMenuIfClickedOutside);
				}
			};
			this._bindCloseMenuIfClickedOutside = function () {
				if (!document.addEventListener && document.attachEvent) {
					document.attachEvent('onclick', _this._closeMenuIfClickedOutside);
				} else {
					document.addEventListener('click', _this._closeMenuIfClickedOutside);
				}
			};
			this._unbindCloseMenuIfClickedOutside = function () {
				if (!document.removeEventListener && document.detachEvent) {
					document.detachEvent('onclick', _this._closeMenuIfClickedOutside);
				} else {
					document.removeEventListener('click', _this._closeMenuIfClickedOutside);
				}
			};
			this.setState(this.getStateFromValue(this.props.value));
		},

		componentDidMount: function componentDidMount() {
			if (this.props.asyncOptions && this.props.autoload) {
				this.autoloadAsyncOptions();
			}
		},

		componentWillUnmount: function componentWillUnmount() {
			clearTimeout(this._blurTimeout);
			clearTimeout(this._focusTimeout);
			if (this.state.isOpen) {
				this._unbindCloseMenuIfClickedOutside();
			}
		},

		componentWillReceiveProps: function componentWillReceiveProps(newProps) {
			var _this2 = this;

			var optionsChanged = false;
			if (JSON.stringify(newProps.options) !== JSON.stringify(this.props.options)) {
				optionsChanged = true;
				this.setState({
					options: newProps.options,
					filteredOptions: this.filterOptions(newProps.options)
				});
			}
			if (newProps.value !== this.state.value || newProps.placeholder !== this.props.placeholder || optionsChanged) {
				var setState = function setState(newState) {
					_this2.setState(_this2.getStateFromValue(newProps.value, newState && newState.options || newProps.options, newProps.placeholder));
				};
				if (this.props.asyncOptions) {
					this.loadAsyncOptions(newProps.value, {}, setState);
				} else {
					setState();
				}
			}
		},

		componentDidUpdate: function componentDidUpdate() {
			var _this3 = this;

			if (!this.props.disabled && this._focusAfterUpdate) {
				clearTimeout(this._blurTimeout);
				clearTimeout(this._focusTimeout);
				this._focusTimeout = setTimeout(function () {
					if (!_this3.isMounted()) return;
					_this3.getInputNode().focus();
					_this3._focusAfterUpdate = false;
				}, 50);
			}
			if (this._focusedOptionReveal) {
				if (this.refs.focused && this.refs.menu) {
					var focusedDOM = ReactDOM.findDOMNode(this.refs.focused);
					var menuDOM = ReactDOM.findDOMNode(this.refs.menu);
					var focusedRect = focusedDOM.getBoundingClientRect();
					var menuRect = menuDOM.getBoundingClientRect();

					if (focusedRect.bottom > menuRect.bottom || focusedRect.top < menuRect.top) {
						menuDOM.scrollTop = focusedDOM.offsetTop + focusedDOM.clientHeight - menuDOM.offsetHeight;
					}
				}
				this._focusedOptionReveal = false;
			}
		},

		focus: function focus() {
			this.getInputNode().focus();
		},

		clickedOutsideElement: function clickedOutsideElement(element, event) {
			var eventTarget = event.target ? event.target : event.srcElement;
			while (eventTarget != null) {
				if (eventTarget === element) return false;
				eventTarget = eventTarget.offsetParent;
			}
			return true;
		},

		getStateFromValue: function getStateFromValue(value, options, placeholder) {
			var _this4 = this;

			if (!options) {
				options = this.state.options;
			}
			if (!placeholder) {
				placeholder = this.props.placeholder;
			}

			// reset internal filter string
			this._optionsFilterString = '';

			var values = this.initValuesArray(value, options);
			var filteredOptions = this.filterOptions(options, values);

			var focusedOption;
			var valueForState = null;
			if (!this.props.multi && values.length) {
				focusedOption = values[0];
				valueForState = values[0][this.props.valueKey];
			} else {
				focusedOption = this.getFirstFocusableOption(filteredOptions);
				valueForState = values.map(function (v) {
					return v[_this4.props.valueKey];
				}).join(this.props.delimiter);
			}

			return {
				value: valueForState,
				values: values,
				inputValue: '',
				filteredOptions: filteredOptions,
				placeholder: !this.props.multi && values.length ? values[0][this.props.labelKey] : placeholder,
				focusedOption: focusedOption
			};
		},

		getFirstFocusableOption: function getFirstFocusableOption(options) {
			for (var optionIndex = 0; optionIndex < options.length; ++optionIndex) {
				if (!options[optionIndex].disabled) {
					return options[optionIndex];
				}
			}
		},

		initValuesArray: function initValuesArray(values, options) {
			var _this5 = this;

			if (!Array.isArray(values)) {
				if (typeof values === 'string') {
					values = values === '' ? [] : this.props.multi ? values.split(this.props.delimiter) : [values];
				} else {
					values = values !== undefined && values !== null ? [values] : [];
				}
			}
			return values.map(function (val) {
				if (typeof val === 'string' || typeof val === 'number') {
					var _ref;

					for (var key in options) {
						if (options.hasOwnProperty(key) && options[key] && (options[key][_this5.props.valueKey] === val || typeof options[key][_this5.props.valueKey] === 'number' && options[key][_this5.props.valueKey].toString() === val)) {
							return options[key];
						}
					}
					return _ref = {}, _defineProperty(_ref, _this5.props.valueKey, val), _defineProperty(_ref, _this5.props.labelKey, val), _ref;
				} else {
					return val;
				}
			});
		},

		setValue: function setValue(value, focusAfterUpdate) {
			if (focusAfterUpdate || focusAfterUpdate === undefined) {
				this._focusAfterUpdate = true;
			}
			var newState = this.getStateFromValue(value);
			newState.isOpen = false;
			this.fireChangeEvent(newState);
			this.setState(newState);
		},

		selectValue: function selectValue(value) {
			if (!this.props.multi) {
				this.setValue(value);
			} else if (value) {
				this.addValue(value);
			}
			this._unbindCloseMenuIfClickedOutside();
		},

		addValue: function addValue(value) {
			this.setValue(this.state.values.concat(value));
		},

		popValue: function popValue() {
			this.setValue(this.state.values.slice(0, this.state.values.length - 1));
		},

		removeValue: function removeValue(valueToRemove) {
			this.setValue(this.state.values.filter(function (value) {
				return value !== valueToRemove;
			}));
		},

		clearValue: function clearValue(event) {
			// if the event was triggered by a mousedown and not the primary
			// button, ignore it.
			if (event && event.type === 'mousedown' && event.button !== 0) {
				return;
			}
			event.stopPropagation();
			event.preventDefault();
			this.setValue(null);
		},

		resetValue: function resetValue() {
			this.setValue(this.state.value === '' ? null : this.state.value);
		},

		getInputNode: function getInputNode() {
			var input = this.refs.input;
			return this.props.searchable ? input : ReactDOM.findDOMNode(input);
		},

		fireChangeEvent: function fireChangeEvent(newState) {
			if (newState.value !== this.state.value && this.props.onChange) {
				this.props.onChange(newState.value, newState.values);
			}
		},

		handleMouseDown: function handleMouseDown(event) {
			// if the event was triggered by a mousedown and not the primary
			// button, or if the component is disabled, ignore it.
			if (this.props.disabled || event.type === 'mousedown' && event.button !== 0) {
				return;
			}
			event.stopPropagation();
			event.preventDefault();

			// for the non-searchable select, close the dropdown when button is clicked
			if (this.state.isOpen && !this.props.searchable) {
				this.setState({
					isOpen: false
				}, this._unbindCloseMenuIfClickedOutside);
				return;
			}

			if (this.state.isFocused) {
				this.setState({
					isOpen: true
				}, this._bindCloseMenuIfClickedOutside);
			} else {
				this._openAfterFocus = true;
				this.getInputNode().focus();
			}
		},

		handleMouseDownOnMenu: function handleMouseDownOnMenu(event) {
			// if the event was triggered by a mousedown and not the primary
			// button, or if the component is disabled, ignore it.
			if (this.props.disabled || event.type === 'mousedown' && event.button !== 0) {
				return;
			}
			event.stopPropagation();
			event.preventDefault();
		},

		handleMouseDownOnArrow: function handleMouseDownOnArrow(event) {
			// if the event was triggered by a mousedown and not the primary
			// button, or if the component is disabled, ignore it.
			if (this.props.disabled || event.type === 'mousedown' && event.button !== 0) {
				return;
			}
			// If not focused, handleMouseDown will handle it
			if (!this.state.isOpen) {
				return;
			}
			event.stopPropagation();
			event.preventDefault();
			this.setState({
				isOpen: false
			}, this._unbindCloseMenuIfClickedOutside);
		},

		handleInputFocus: function handleInputFocus(event) {
			var _this6 = this;

			var newIsOpen = this.state.isOpen || this._openAfterFocus;
			this.setState({
				isFocused: true,
				isOpen: newIsOpen
			}, function () {
				if (newIsOpen) {
					_this6._bindCloseMenuIfClickedOutside();
				} else {
					_this6._unbindCloseMenuIfClickedOutside();
				}
			});
			this._openAfterFocus = false;
			if (this.props.onFocus) {
				this.props.onFocus(event);
			}
		},

		handleInputBlur: function handleInputBlur(event) {
			var _this7 = this;

			var menuDOM = ReactDOM.findDOMNode(this.refs.menu);
			if (document.activeElement.isEqualNode(menuDOM)) {
				return;
			}
			this._blurTimeout = setTimeout(function () {
				if (_this7._focusAfterUpdate || !_this7.isMounted()) return;
				_this7.setState({
					inputValue: '',
					isFocused: false,
					isOpen: false
				});
			}, 50);
			if (this.props.onBlur) {
				this.props.onBlur(event);
			}
		},

		handleKeyDown: function handleKeyDown(event) {
			if (this.props.disabled) return;
			switch (event.keyCode) {
				case 8:
					// backspace
					if (!this.state.inputValue && this.props.backspaceRemoves) {
						event.preventDefault();
						this.popValue();
					}
					return;
				case 9:
					// tab
					if (event.shiftKey || !this.state.isOpen || !this.state.focusedOption) {
						return;
					}
					this.selectFocusedOption();
					break;
				case 13:
					// enter
					if (!this.state.isOpen) return;
					this.selectFocusedOption();
					break;
				case 27:
					// escape
					if (this.state.isOpen) {
						this.resetValue();
					} else if (this.props.clearable) {
						this.clearValue(event);
					}
					break;
				case 38:
					// up
					this.focusPreviousOption();
					break;
				case 40:
					// down
					this.focusNextOption();
					break;
				case 188:
					// ,
					if (this.props.allowCreate && this.props.multi) {
						event.preventDefault();
						event.stopPropagation();
						this.selectFocusedOption();
					} else {
						return;
					}
					break;
				default:
					return;
			}
			event.preventDefault();
		},

		// Ensures that the currently focused option is available in filteredOptions.
		// If not, returns the first available option.
		_getNewFocusedOption: function _getNewFocusedOption(filteredOptions) {
			for (var key in filteredOptions) {
				if (filteredOptions.hasOwnProperty(key) && filteredOptions[key] === this.state.focusedOption) {
					return filteredOptions[key];
				}
			}
			return this.getFirstFocusableOption(filteredOptions);
		},

		handleInputChange: function handleInputChange(event) {
			// assign an internal variable because we need to use
			// the latest value before setState() has completed.
			this._optionsFilterString = event.target.value;
			if (this.props.onInputChange) {
				this.props.onInputChange(event.target.value);
			}
			if (this.props.asyncOptions) {
				this.setState({
					isLoading: true,
					inputValue: event.target.value
				});
				this.loadAsyncOptions(event.target.value, {
					isLoading: false,
					isOpen: true
				}, this._bindCloseMenuIfClickedOutside);
			} else {
				var filteredOptions = this.filterOptions(this.state.options);
				this.setState({
					isOpen: true,
					inputValue: event.target.value,
					filteredOptions: filteredOptions,
					focusedOption: this._getNewFocusedOption(filteredOptions)
				}, this._bindCloseMenuIfClickedOutside);
			}
		},

		autoloadAsyncOptions: function autoloadAsyncOptions() {
			var _this8 = this;

			this.setState({
				isLoading: true
			});
			this.loadAsyncOptions('', { isLoading: false }, function () {
				// update with new options but don't focus
				_this8.setValue(_this8.props.value, false);
			});
		},

		loadAsyncOptions: function loadAsyncOptions(input, state, callback) {
			if (input === undefined) input = '';

			var _this9 = this;

			var thisRequestId = this._currentRequestId = requestId++;
			if (this.props.cacheAsyncResults) {
				for (var i = 0; i <= input.length; i++) {
					var cacheKey = input.slice(0, i);
					if (this._optionsCache[cacheKey] && (input === cacheKey || this._optionsCache[cacheKey].complete)) {
						var options = this._optionsCache[cacheKey].options;
						var filteredOptions = this.filterOptions(options);
						var newState = {
							options: options,
							filteredOptions: filteredOptions,
							focusedOption: this._getNewFocusedOption(filteredOptions)
						};
						for (var key in state) {
							if (state.hasOwnProperty(key)) {
								newState[key] = state[key];
							}
						}
						this.setState(newState);
						if (callback) callback.call(this, newState);
						return;
					}
				}
			}

			var optionsResponseHandler = function optionsResponseHandler(err, data) {
				if (err) throw err;
				if (_this9.props.cacheAsyncResults) {
					_this9._optionsCache[input] = data;
				}
				if (thisRequestId !== _this9._currentRequestId) {
					return;
				}
				var filteredOptions = _this9.filterOptions(data.options);
				var newState = {
					options: data.options,
					filteredOptions: filteredOptions,
					focusedOption: _this9._getNewFocusedOption(filteredOptions)
				};
				for (var key in state) {
					if (state.hasOwnProperty(key)) {
						newState[key] = state[key];
					}
				}
				_this9.setState(newState);
				if (callback) callback.call(_this9, newState);
			};

			var asyncOpts = this.props.asyncOptions(input, optionsResponseHandler);

			if (asyncOpts && typeof asyncOpts.then === 'function') {
				asyncOpts.then(function (data) {
					optionsResponseHandler(null, data);
				}, function (err) {
					optionsResponseHandler(err);
				});
			}
		},

		filterOptions: function filterOptions(options, values) {
			var _this10 = this;

			var filterValue = this._optionsFilterString;
			var exclude = (values || this.state.values).map(function (i) {
				return i[_this10.props.valueKey];
			});
			if (this.props.filterOptions) {
				return this.props.filterOptions.call(this, options, filterValue, exclude);
			} else {
				var filterOption = function filterOption(op) {
					if (this.props.multi && exclude.indexOf(op[this.props.valueKey]) > -1) return false;
					if (this.props.filterOption) return this.props.filterOption.call(this, op, filterValue);
					var valueTest = String(op[this.props.valueKey]);
					var labelTest = String(op[this.props.labelKey]);
					if (this.props.ignoreCase) {
						valueTest = valueTest.toLowerCase();
						labelTest = labelTest.toLowerCase();
						filterValue = filterValue.toLowerCase();
					}
					return !filterValue || this.props.matchPos === 'start' ? this.props.matchProp !== 'label' && valueTest.substr(0, filterValue.length) === filterValue || this.props.matchProp !== 'value' && labelTest.substr(0, filterValue.length) === filterValue : this.props.matchProp !== 'label' && valueTest.indexOf(filterValue) >= 0 || this.props.matchProp !== 'value' && labelTest.indexOf(filterValue) >= 0;
				};
				return (options || []).filter(filterOption, this);
			}
		},

		selectFocusedOption: function selectFocusedOption() {
			if (this.props.allowCreate && !this.state.focusedOption) {
				return this.selectValue(this.state.inputValue);
			}

			if (this.state.focusedOption) {
				return this.selectValue(this.state.focusedOption);
			}
		},

		focusOption: function focusOption(op) {
			this.setState({
				focusedOption: op
			});
		},

		focusNextOption: function focusNextOption() {
			this.focusAdjacentOption('next');
		},

		focusPreviousOption: function focusPreviousOption() {
			this.focusAdjacentOption('previous');
		},

		focusAdjacentOption: function focusAdjacentOption(dir) {
			this._focusedOptionReveal = true;
			var ops = this.state.filteredOptions.filter(function (op) {
				return !op.disabled;
			});
			if (!this.state.isOpen) {
				this.setState({
					isOpen: true,
					inputValue: '',
					focusedOption: this.state.focusedOption || ops[dir === 'next' ? 0 : ops.length - 1]
				}, this._bindCloseMenuIfClickedOutside);
				return;
			}
			if (!ops.length) {
				return;
			}
			var focusedIndex = -1;
			for (var i = 0; i < ops.length; i++) {
				if (this.state.focusedOption === ops[i]) {
					focusedIndex = i;
					break;
				}
			}
			var focusedOption = ops[0];
			if (dir === 'next' && focusedIndex > -1 && focusedIndex < ops.length - 1) {
				focusedOption = ops[focusedIndex + 1];
			} else if (dir === 'previous') {
				if (focusedIndex > 0) {
					focusedOption = ops[focusedIndex - 1];
				} else {
					focusedOption = ops[ops.length - 1];
				}
			}
			this.setState({
				focusedOption: focusedOption
			});
		},

		unfocusOption: function unfocusOption(op) {
			if (this.state.focusedOption === op) {
				this.setState({
					focusedOption: null
				});
			}
		},

		renderOptionLabel: function renderOptionLabel(op) {
			return op[this.props.labelKey];
		},

		buildMenu: function buildMenu() {
			var focusedValue = this.state.focusedOption ? this.state.focusedOption[this.props.valueKey] : null;
			var renderLabel = this.props.optionRenderer || this.renderOptionLabel;
			if (this.state.filteredOptions.length > 0) {
				focusedValue = focusedValue == null ? this.state.filteredOptions[0] : focusedValue;
			}
			// Add the current value to the filtered options in last resort
			var options = this.state.filteredOptions;
			if (this.props.allowCreate && this.state.inputValue.trim()) {
				var inputValue = this.state.inputValue;
				options = options.slice();
				var newOption = this.props.newOptionCreator ? this.props.newOptionCreator(inputValue) : {
					value: inputValue,
					label: inputValue,
					create: true
				};
				options.unshift(newOption);
			}
			var ops = Object.keys(options).map(function (key) {
				var op = options[key];
				var isSelected = this.state.value === op[this.props.valueKey];
				var isFocused = focusedValue === op[this.props.valueKey];
				var optionClass = classes({
					'Select-option': true,
					'is-selected': isSelected,
					'is-focused': isFocused,
					'is-disabled': op.disabled
				});
				var ref = isFocused ? 'focused' : null;
				var optionResult = React.createElement(this.props.optionComponent, {
					key: 'option-' + op[this.props.valueKey],
					className: optionClass,
					renderFunc: renderLabel,
					mouseDown: this.selectValue,
					mouseEnter: this.focusOption,
					mouseLeave: this.unfocusOption,
					addLabelText: this.props.addLabelText,
					option: op,
					ref: ref
				});
				return optionResult;
			}, this);

			if (ops.length) {
				return ops;
			} else {
				var noResultsText, promptClass;
				if (this.isLoading()) {
					promptClass = 'Select-searching';
					noResultsText = this.props.searchingText;
				} else if (this.state.inputValue || !this.props.asyncOptions) {
					promptClass = 'Select-noresults';
					noResultsText = this.props.noResultsText;
				} else {
					promptClass = 'Select-search-prompt';
					noResultsText = this.props.searchPromptText;
				}

				return React.createElement('div', { className: promptClass }, noResultsText);
			}
		},

		handleOptionLabelClick: function handleOptionLabelClick(value, event) {
			if (this.props.onOptionLabelClick) {
				this.props.onOptionLabelClick(value, event);
			}
		},

		isLoading: function isLoading() {
			return this.props.isLoading || this.state.isLoading;
		},

		render: function render() {
			var selectClass = classes('Select', this.props.className, {
				'Select--multi': this.props.multi,
				'is-searchable': this.props.searchable,
				'is-open': this.state.isOpen,
				'is-focused': this.state.isFocused,
				'is-loading': this.isLoading(),
				'is-disabled': this.props.disabled,
				'has-value': this.state.value
			});
			var value = [];
			if (this.props.multi) {
				this.state.values.forEach(function (val) {
					var renderLabel = this.props.valueRenderer || this.renderOptionLabel;
					var onOptionLabelClick = this.handleOptionLabelClick.bind(this, val);
					var onRemove = this.removeValue.bind(this, val);
					var valueComponent = React.createElement(this.props.valueComponent, {
						key: val[this.props.valueKey],
						option: val,
						renderer: renderLabel,
						optionLabelClick: !!this.props.onOptionLabelClick,
						onOptionLabelClick: onOptionLabelClick,
						onRemove: onRemove,
						disabled: this.props.disabled
					});
					value.push(valueComponent);
				}, this);
			}

			if (!this.state.inputValue && (!this.props.multi || !value.length)) {
				var val = this.state.values[0] || null;
				if (this.props.valueRenderer && !!this.state.values.length) {
					value.push(React.createElement(Value, {
						key: 0,
						option: val,
						renderer: this.props.valueRenderer,
						disabled: this.props.disabled }));
				} else {
					var singleValueComponent = React.createElement(this.props.singleValueComponent, {
						key: 'placeholder',
						value: val,
						placeholder: this.state.placeholder
					});
					value.push(singleValueComponent);
				}
			}

			// loading spinner
			var loading = this.isLoading() ? React.createElement('span', { className: 'Select-loading-zone', 'aria-hidden': 'true' }, React.createElement('span', { className: 'Select-loading' })) : null;

			// clear "x" button
			var clear = this.props.clearable && this.state.value && !this.props.disabled && !this.isLoading() ? React.createElement('span', { className: 'Select-clear-zone', title: this.props.multi ? this.props.clearAllText : this.props.clearValueText, 'aria-label': this.props.multi ? this.props.clearAllText : this.props.clearValueText, onMouseDown: this.clearValue, onTouchEnd: this.clearValue, onClick: this.clearValue }, React.createElement('span', { className: 'Select-clear', dangerouslySetInnerHTML: { __html: '&times;' } })) : null;

			// indicator arrow
			var arrow = React.createElement('span', { className: 'Select-arrow-zone', onMouseDown: this.handleMouseDownOnArrow }, React.createElement('span', { className: 'Select-arrow', onMouseDown: this.handleMouseDownOnArrow }));

			var menu;
			var menuProps;
			if (this.state.isOpen) {
				menuProps = {
					ref: 'menu',
					className: 'Select-menu',
					onMouseDown: this.handleMouseDownOnMenu
				};
				menu = React.createElement('div', { ref: 'selectMenuContainer', className: 'Select-menu-outer' }, React.createElement('div', menuProps, this.buildMenu()));
			}

			var input;
			var inputProps = {
				ref: 'input',
				className: 'Select-input ' + (this.props.inputProps.className || ''),
				tabIndex: this.props.tabIndex || 0,
				onFocus: this.handleInputFocus,
				onBlur: this.handleInputBlur
			};
			for (var key in this.props.inputProps) {
				if (this.props.inputProps.hasOwnProperty(key) && key !== 'className') {
					inputProps[key] = this.props.inputProps[key];
				}
			}

			if (!this.props.disabled) {
				if (this.props.searchable) {
					input = React.createElement(Input, _extends({ value: this.state.inputValue, onChange: this.handleInputChange, minWidth: '5' }, inputProps));
				} else {
					input = React.createElement('div', inputProps, ' ');
				}
			} else if (!this.props.multi || !this.state.values.length) {
				input = React.createElement('div', { className: 'Select-input' }, ' ');
			}

			return React.createElement('div', { ref: 'wrapper', className: selectClass }, React.createElement('input', { type: 'hidden', ref: 'value', name: this.props.name, value: this.state.value, disabled: this.props.disabled }), React.createElement('div', { className: 'Select-control', ref: 'control', onKeyDown: this.handleKeyDown, onMouseDown: this.handleMouseDown, onTouchEnd: this.handleMouseDown }, value, input, loading, clear, arrow), menu);
		}
	});

	module.exports = Select;

/***/ },

/***/ 411:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _extends = Object.assign || function (target) {
		for (var i = 1; i < arguments.length; i++) {
			var source = arguments[i];for (var key in source) {
				if (Object.prototype.hasOwnProperty.call(source, key)) {
					target[key] = source[key];
				}
			}
		}return target;
	};

	var React = __webpack_require__(148);

	var sizerStyle = { position: 'absolute', visibility: 'hidden', height: 0, width: 0, overflow: 'scroll', whiteSpace: 'nowrap' };

	var AutosizeInput = React.createClass({
		displayName: 'AutosizeInput',

		propTypes: {
			value: React.PropTypes.any, // field value
			defaultValue: React.PropTypes.any, // default field value
			onChange: React.PropTypes.func, // onChange handler: function(newValue) {}
			style: React.PropTypes.object, // css styles for the outer element
			className: React.PropTypes.string, // className for the outer element
			minWidth: React.PropTypes.oneOfType([// minimum width for input element
			React.PropTypes.number, React.PropTypes.string]),
			inputStyle: React.PropTypes.object, // css styles for the input element
			inputClassName: React.PropTypes.string // className for the input element
		},
		getDefaultProps: function getDefaultProps() {
			return {
				minWidth: 1
			};
		},
		getInitialState: function getInitialState() {
			return {
				inputWidth: this.props.minWidth
			};
		},
		componentDidMount: function componentDidMount() {
			this.copyInputStyles();
			this.updateInputWidth();
		},
		componentDidUpdate: function componentDidUpdate() {
			this.updateInputWidth();
		},
		copyInputStyles: function copyInputStyles() {
			if (!this.isMounted() || !window.getComputedStyle) {
				return;
			}
			var inputStyle = window.getComputedStyle(this.refs.input);
			var widthNode = this.refs.sizer;
			widthNode.style.fontSize = inputStyle.fontSize;
			widthNode.style.fontFamily = inputStyle.fontFamily;
			widthNode.style.letterSpacing = inputStyle.letterSpacing;
			if (this.props.placeholder) {
				var placeholderNode = this.refs.placeholderSizer;
				placeholderNode.style.fontSize = inputStyle.fontSize;
				placeholderNode.style.fontFamily = inputStyle.fontFamily;
				placeholderNode.style.letterSpacing = inputStyle.letterSpacing;
			}
		},
		updateInputWidth: function updateInputWidth() {
			if (!this.isMounted() || typeof this.refs.sizer.scrollWidth === 'undefined') {
				return;
			}
			var newInputWidth;
			if (this.props.placeholder) {
				newInputWidth = Math.max(this.refs.sizer.scrollWidth, this.refs.placeholderSizer.scrollWidth) + 2;
			} else {
				newInputWidth = this.refs.sizer.scrollWidth + 2;
			}
			if (newInputWidth < this.props.minWidth) {
				newInputWidth = this.props.minWidth;
			}
			if (newInputWidth !== this.state.inputWidth) {
				this.setState({
					inputWidth: newInputWidth
				});
			}
		},
		getInput: function getInput() {
			return this.refs.input;
		},
		focus: function focus() {
			this.refs.input.focus();
		},
		select: function select() {
			this.refs.input.select();
		},
		render: function render() {
			var escapedValue = (this.props.value || '').replace(/\&/g, '&amp;').replace(/ /g, '&nbsp;').replace(/\</g, '&lt;').replace(/\>/g, '&gt;');
			var wrapperStyle = this.props.style || {};
			if (!wrapperStyle.display) wrapperStyle.display = 'inline-block';
			var inputStyle = _extends({}, this.props.inputStyle);
			inputStyle.width = this.state.inputWidth;
			inputStyle.boxSizing = 'content-box';
			var placeholder = this.props.placeholder ? React.createElement('div', { ref: 'placeholderSizer', style: sizerStyle }, this.props.placeholder) : null;
			return React.createElement('div', { className: this.props.className, style: wrapperStyle }, React.createElement('input', _extends({}, this.props, { ref: 'input', className: this.props.inputClassName, style: inputStyle })), React.createElement('div', { ref: 'sizer', style: sizerStyle, dangerouslySetInnerHTML: { __html: escapedValue } }), placeholder);
		}
	});

	module.exports = AutosizeInput;

/***/ },

/***/ 412:
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/*!
	  Copyright (c) 2015 Jed Watson.
	  Licensed under the MIT License (MIT), see
	  http://jedwatson.github.io/classnames
	*/
	/* global define */

	'use strict';

	(function () {
		'use strict';

		var hasOwn = ({}).hasOwnProperty;

		function classNames() {
			var classes = '';

			for (var i = 0; i < arguments.length; i++) {
				var arg = arguments[i];
				if (!arg) continue;

				var argType = typeof arg;

				if (argType === 'string' || argType === 'number') {
					classes += ' ' + arg;
				} else if (Array.isArray(arg)) {
					classes += ' ' + classNames.apply(null, arg);
				} else if (argType === 'object') {
					for (var key in arg) {
						if (hasOwn.call(arg, key) && arg[key]) {
							classes += ' ' + key;
						}
					}
				}
			}

			return classes.substr(1);
		}

		if (typeof module !== 'undefined' && module.exports) {
			module.exports = classNames;
		} else if (true) {
			// register as 'classnames', consistent with npm package name
			!(__WEBPACK_AMD_DEFINE_RESULT__ = function () {
				return classNames;
			}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		} else {
			window.classNames = classNames;
		}
	})();

/***/ },

/***/ 413:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var React = __webpack_require__(148);
	var classes = __webpack_require__(412);

	var Value = React.createClass({

		displayName: 'Value',

		propTypes: {
			disabled: React.PropTypes.bool, // disabled prop passed to ReactSelect
			onOptionLabelClick: React.PropTypes.func, // method to handle click on value label
			onRemove: React.PropTypes.func, // method to handle remove of that value
			option: React.PropTypes.object.isRequired, // option passed to component
			optionLabelClick: React.PropTypes.bool, // indicates if onOptionLabelClick should be handled
			renderer: React.PropTypes.func // method to render option label passed to ReactSelect
		},

		blockEvent: function blockEvent(event) {
			event.stopPropagation();
		},

		handleOnRemove: function handleOnRemove(event) {
			if (!this.props.disabled) {
				this.props.onRemove(event);
			}
		},

		render: function render() {
			var label = this.props.option.label;
			if (this.props.renderer) {
				label = this.props.renderer(this.props.option);
			}

			if (!this.props.onRemove && !this.props.optionLabelClick) {
				return React.createElement('div', {
					className: classes('Select-value', this.props.option.className),
					style: this.props.option.style,
					title: this.props.option.title
				}, label);
			}

			if (this.props.optionLabelClick) {
				label = React.createElement('a', { className: classes('Select-item-label__a', this.props.option.className),
					onMouseDown: this.blockEvent,
					onTouchEnd: this.props.onOptionLabelClick,
					onClick: this.props.onOptionLabelClick,
					style: this.props.option.style,
					title: this.props.option.title }, label);
			}

			return React.createElement('div', { className: classes('Select-item', this.props.option.className),
				style: this.props.option.style,
				title: this.props.option.title }, React.createElement('span', { className: 'Select-item-icon',
				onMouseDown: this.blockEvent,
				onClick: this.handleOnRemove,
				onTouchEnd: this.handleOnRemove }, '×'), React.createElement('span', { className: 'Select-item-label' }, label));
		}

	});

	module.exports = Value;

/***/ },

/***/ 414:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var React = __webpack_require__(148);
	var classes = __webpack_require__(412);

	var SingleValue = React.createClass({
		displayName: 'SingleValue',

		propTypes: {
			placeholder: React.PropTypes.string, // this is default value provided by React-Select based component
			value: React.PropTypes.object // selected option
		},
		render: function render() {
			var classNames = classes('Select-placeholder', this.props.value && this.props.value.className);
			return React.createElement('div', {
				className: classNames,
				style: this.props.value && this.props.value.style,
				title: this.props.value && this.props.value.title
			}, this.props.placeholder);
		}
	});

	module.exports = SingleValue;

/***/ },

/***/ 415:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var React = __webpack_require__(148);
	var classes = __webpack_require__(412);

	var Option = React.createClass({
		displayName: 'Option',

		propTypes: {
			addLabelText: React.PropTypes.string, // string rendered in case of allowCreate option passed to ReactSelect
			className: React.PropTypes.string, // className (based on mouse position)
			mouseDown: React.PropTypes.func, // method to handle click on option element
			mouseEnter: React.PropTypes.func, // method to handle mouseEnter on option element
			mouseLeave: React.PropTypes.func, // method to handle mouseLeave on option element
			option: React.PropTypes.object.isRequired, // object that is base for that option
			renderFunc: React.PropTypes.func // method passed to ReactSelect component to render label text
		},
		blockEvent: function blockEvent(event) {
			event.preventDefault();
			if (event.target.tagName !== 'A' || !('href' in event.target)) {
				return;
			}

			if (event.target.target) {
				window.open(event.target.href);
			} else {
				window.location.href = event.target.href;
			}
		},
		handleMouseDown: function handleMouseDown(e) {
			this.props.mouseDown(this.props.option, e);
		},
		handleMouseEnter: function handleMouseEnter(e) {
			this.props.mouseEnter(this.props.option, e);
		},
		handleMouseLeave: function handleMouseLeave(e) {
			this.props.mouseLeave(this.props.option, e);
		},
		render: function render() {
			var option = this.props.option;
			var label = option.create ? this.props.addLabelText.replace('{label}', option.label) : this.props.renderFunc(option);
			var optionClasses = classes(this.props.className, option.className);

			return option.disabled ? React.createElement('div', { className: optionClasses,
				onMouseDown: this.blockEvent,
				onClick: this.blockEvent }, label) : React.createElement('div', { className: optionClasses,
				style: option.style,
				onMouseDown: this.handleMouseDown,
				onMouseEnter: this.handleMouseEnter,
				onMouseLeave: this.handleMouseLeave,
				onClick: this.handleMouseDown,
				title: option.title }, label);
		}
	});

	module.exports = Option;

/***/ },

/***/ 416:
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Created by ponty on 9/8/2015.
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

	__webpack_require__(417);

	var RangeSlider = (function (_Component) {
	    _inherits(RangeSlider, _Component);

	    function RangeSlider() {
	        _classCallCheck(this, RangeSlider);

	        _get(Object.getPrototypeOf(RangeSlider.prototype), 'constructor', this).call(this);
	        this.state = { priceMin: "" };
	    }

	    _createClass(RangeSlider, [{
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            var range_all_sliders = {
	                'min': [0],
	                '10%': [50, 50],
	                '50%': [400, 100],
	                'max': [1000]
	            };

	            var slider = this.refs.ran;
	            noUiSlider.create(slider, {
	                start: 0,
	                connect: 'lower',
	                tooltips: true,
	                range: range_all_sliders,
	                pips: {
	                    mode: 'count',
	                    values: 4,
	                    density: 0,
	                    stepped: true
	                }
	            });

	            var self = this;
	            slider.noUiSlider.on('update', function () {
	                var updateVal = slider.noUiSlider.get();
	                var minPrice = updateVal;
	                if (minPrice == 1000.00) {
	                    minPrice = "1 m";
	                } else {
	                    minPrice = Math.round(minPrice) + " k";
	                }

	                self.setState({ priceMin: minPrice });
	            });
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var priceMin = this.state.priceMin;
	            return _react2['default'].createElement('div', { className: 'RangeCollection' }, _react2['default'].createElement('div', { className: 'text' }, _react2['default'].createElement('span', { className: 'price' }, '$', priceMin)), _react2['default'].createElement('div', { ref: 'ran', id: 'range' }));
	        }
	    }]);

	    return RangeSlider;
	})(_react.Component);

	exports['default'] = RangeSlider;

	RangeSlider.propTypes = {};
	module.exports = exports['default'];

/***/ },

/***/ 417:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(418);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(165)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../../../node_modules/css-loader/index.js!./../../../../../node_modules/sass-loader/index.js?sourceMap!./rangecollection.scss", function() {
				var newContent = require("!!./../../../../../node_modules/css-loader/index.js!./../../../../../node_modules/sass-loader/index.js?sourceMap!./rangecollection.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 418:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(164)();
	// imports


	// module
	exports.push([module.id, ".black {\n  color: #000; }\n\n.blue {\n  color: #20afcb;\n  font-family: Ubuntu;\n  font-style: normal; }\n\n.left {\n  float: left; }\n\n.right {\n  float: right; }\n\n.blue-button {\n  border-radius: 8px;\n  background-image: -moz-linear-gradient(90deg, #20afcb 0%, #28dcff 100%);\n  background-image: -webkit-linear-gradient(90deg, #20afcb 0%, #28dcff 100%);\n  background-image: -ms-linear-gradient(90deg, #20afcb 0%, #28dcff 100%);\n  box-shadow: 0.743px 0.669px 0px 0px #757575;\n  border: 1px solid #20afcb; }\n\n.header {\n  background: -moz-linear-gradient(180deg, #fff 10%, #e9e9e9);\n  background: -webkit-linear-gradient(180deg, #fff 10%, #e9e9e9);\n  background: -o-linear-gradient(180deg, #fff 10%, #e9e9e9);\n  background: linear-gradient(180deg, #fff 10%, #e9e9e9);\n  box-shadow: inset 0 -1px 1px 0 #000;\n  height: 60px; }\n  .header .logo img {\n    width: auto;\n    height: auto; }\n  .header .logo.bulb {\n    display: inline-block;\n    width: 30px;\n    margin: 3px 3px; }\n\n/** Custom Bootstrap Tab Style here*/\n.tabs-right {\n  width: 100%; }\n  .tabs-right .nav-tabs {\n    position: absolute;\n    right: 0;\n    top: -35px; }\n\n.nav-tabs {\n  border-bottom: none;\n  font-size: 20px;\n  font-family: Ubuntu; }\n\n.nav-tabs > li.active > a,\n.nav-tabs > li.active > a:focus,\n.nav-tabs > li.active > a:hover {\n  color: #20afcb;\n  cursor: default;\n  background-color: #fff;\n  border: 1px solid #ddd;\n  border-bottom-color: transparent; }\n\n.nav-tabs > li > a {\n  margin-right: 2px;\n  line-height: 1.42857143;\n  border-radius: 4px 4px 0 0;\n  border-bottom: none; }\n  .nav-tabs > li > a:focus {\n    outline: none; }\n\n.nav > li > a {\n  position: relative;\n  display: block;\n  padding: 5px 20px 0 20px;\n  color: #5d5d5d; }\n\n.noUi-horizontal .noUi-handle {\n  width: 20px;\n  height: 18px;\n  left: 0;\n  top: 2px;\n  border: none;\n  box-shadow: none; }\n\n.noUi-handle {\n  background-color: #262626;\n  margin-top: -4px;\n  cursor: pointer; }\n\n.noUi-connect {\n  display: block;\n  height: 6px;\n  -webkit-transition: background 450ms;\n  transition: background 450ms; }\n\n.noUi-target {\n  border-radius: 6px;\n  box-shadow: 0 3px 5px 0 rgba(0, 0, 0, 0.54); }\n\n.noUi-tooltip {\n  background: #262626;\n  color: #fff;\n  top: 20px; }\n\n.noUi-handle-lower .noUi-tooltip {\n  top: 20px; }\n\n.noUi-marker.noUi-marker-horizontal.noUi-marker-normal {\n  display: none; }\n\n.noUi-marker.noUi-marker-horizontal {\n  display: none; }\n\n.noUi-value.noUi-value-horizontal.noUi-value-large {\n  bottom: 100%;\n  margin-bottom: 20px; }\n\n.noUi-handle::before, .noUi-handle::after {\n  content: \"\";\n  display: block;\n  position: absolute;\n  height: 14px;\n  width: 1px;\n  left: 14px;\n  top: 6px;\n  background: none; }\n\n#showcase {\n  text-align: center; }\n\n#range {\n  margin-top: 30px;\n  height: 16px;\n  width: 95%; }\n\n#value-span,\n#value-input {\n  width: 50%;\n  float: left;\n  display: block;\n  text-align: center;\n  margin: 0; }\n", ""]);

	// exports


/***/ },

/***/ 419:
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _interopRequire = function _interopRequire(obj) {
	  return obj && obj.__esModule ? obj["default"] : obj;
	};

	var _extends = Object.assign || function (target) {
	  for (var i = 1; i < arguments.length; i++) {
	    var source = arguments[i];for (var key in source) {
	      if (Object.prototype.hasOwnProperty.call(source, key)) {
	        target[key] = source[key];
	      }
	    }
	  }return target;
	};

	var React = _interopRequire(__webpack_require__(148));

	var classNames = _interopRequire(__webpack_require__(420));

	var Check = _interopRequire(__webpack_require__(421));

	var X = _interopRequire(__webpack_require__(422));

	var PureRenderMixin = _interopRequire(__webpack_require__(423));

	module.exports = React.createClass({
	  mixins: [PureRenderMixin],

	  displayName: "Toggle",

	  propTypes: {
	    checked: React.PropTypes.bool,
	    defaultChecked: React.PropTypes.bool,
	    onChange: React.PropTypes.func,
	    name: React.PropTypes.string,
	    value: React.PropTypes.string,
	    id: React.PropTypes.string,
	    "aria-labelledby": React.PropTypes.string,
	    "aria-label": React.PropTypes.string
	  },

	  getInitialState: function getInitialState() {
	    var checked = false;
	    if ("checked" in this.props) {
	      checked = this.props.checked;
	    } else if ("defaultChecked" in this.props) {
	      checked = this.props.defaultChecked;
	    }
	    return {
	      checked: !!checked,
	      hasFocus: false
	    };
	  },

	  componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
	    if ("checked" in nextProps) {
	      this.setState({ checked: !!nextProps.checked });
	    }
	  },

	  handleClick: function handleClick(event) {
	    var checkbox = this.refs.input;
	    if (event.target !== checkbox) {
	      event.preventDefault();
	      checkbox.focus();
	      checkbox.click();
	      return;
	    }

	    if (!("checked" in this.props)) {
	      this.setState({ checked: checkbox.checked });
	    }
	  },

	  handleFocus: function handleFocus() {
	    this.setState({ hasFocus: true });
	  },

	  handleBlur: function handleBlur() {
	    this.setState({ hasFocus: false });
	  },

	  render: function render() {
	    var classes = classNames("react-toggle", {
	      "react-toggle--checked": this.state.checked,
	      "react-toggle--focus": this.state.hasFocus,
	      "react-toggle--disabled": this.props.disabled
	    });

	    return React.createElement("div", { className: classes, onClick: this.handleClick }, React.createElement("div", { className: "react-toggle-track" }, React.createElement("div", { className: "react-toggle-track-check" }, React.createElement(Check, null)), React.createElement("div", { className: "react-toggle-track-x" }, React.createElement(X, null))), React.createElement("div", { className: "react-toggle-thumb" }), React.createElement("input", _extends({
	      ref: "input",
	      onFocus: this.handleFocus,
	      onBlur: this.handleBlur,
	      className: "react-toggle-screenreader-only",
	      type: "checkbox"
	    }, this.props)));
	  }
	});

/***/ },

/***/ 420:
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	  Copyright (c) 2015 Jed Watson.
	  Licensed under the MIT License (MIT), see
	  http://jedwatson.github.io/classnames
	*/

	'use strict';

	function classNames() {
		var classes = '';
		var arg;

		for (var i = 0; i < arguments.length; i++) {
			arg = arguments[i];
			if (!arg) {
				continue;
			}

			if ('string' === typeof arg || 'number' === typeof arg) {
				classes += ' ' + arg;
			} else if (Object.prototype.toString.call(arg) === '[object Array]') {
				classes += ' ' + classNames.apply(null, arg);
			} else if ('object' === typeof arg) {
				for (var key in arg) {
					if (!arg.hasOwnProperty(key) || !arg[key]) {
						continue;
					}
					classes += ' ' + key;
				}
			}
		}
		return classes.substr(1);
	}

	// safely export classNames for node / browserify
	if (typeof module !== 'undefined' && module.exports) {
		module.exports = classNames;
	}

	// safely export classNames for RequireJS
	if (true) {
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function () {
			return classNames;
		}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	}

/***/ },

/***/ 421:
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _interopRequire = function _interopRequire(obj) {
	  return obj && obj.__esModule ? obj["default"] : obj;
	};

	var React = _interopRequire(__webpack_require__(148));

	module.exports = React.createClass({
	  displayName: "check.es6",

	  render: function render() {
	    return React.createElement("svg", { width: "14", height: "11", viewBox: "0 0 14 11", xmlns: "http://www.w3.org/2000/svg" }, React.createElement("title", null, "switch-check"), React.createElement("path", { d: "M11.264 0L5.26 6.004 2.103 2.847 0 4.95l5.26 5.26 8.108-8.107L11.264 0", fill: "#fff", "fill-rule": "evenodd" }));
	  }
	});

/***/ },

/***/ 422:
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _interopRequire = function _interopRequire(obj) {
	  return obj && obj.__esModule ? obj["default"] : obj;
	};

	var React = _interopRequire(__webpack_require__(148));

	module.exports = React.createClass({
	  displayName: "x.es6",

	  render: function render() {
	    return React.createElement("svg", { width: "10", height: "10", viewBox: "0 0 10 10", xmlns: "http://www.w3.org/2000/svg" }, React.createElement("title", null, "switch-x"), React.createElement("path", { d: "M9.9 2.12L7.78 0 4.95 2.828 2.12 0 0 2.12l2.83 2.83L0 7.776 2.123 9.9 4.95 7.07 7.78 9.9 9.9 7.776 7.072 4.95 9.9 2.12", fill: "#fff", "fill-rule": "evenodd" }));
	  }
	});

/***/ },

/***/ 423:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	module.exports = __webpack_require__(424);

/***/ },

/***/ 424:
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactComponentWithPureRenderMixin
	 */

	'use strict';

	var shallowCompare = __webpack_require__(425);

	/**
	 * If your React component's render function is "pure", e.g. it will render the
	 * same result given the same props and state, provide this Mixin for a
	 * considerable performance boost.
	 *
	 * Most React components have pure render functions.
	 *
	 * Example:
	 *
	 *   var ReactComponentWithPureRenderMixin =
	 *     require('ReactComponentWithPureRenderMixin');
	 *   React.createClass({
	 *     mixins: [ReactComponentWithPureRenderMixin],
	 *
	 *     render: function() {
	 *       return <div className={this.props.className}>foo</div>;
	 *     }
	 *   });
	 *
	 * Note: This only checks shallow equality for props and state. If these contain
	 * complex data structures this mixin may have false-negatives for deeper
	 * differences. Only mixin to components which have simple props and state, or
	 * use `forceUpdate()` when you know deep data structures have changed.
	 */
	var ReactComponentWithPureRenderMixin = {
	  shouldComponentUpdate: function shouldComponentUpdate(nextProps, nextState) {
	    return shallowCompare(this, nextProps, nextState);
	  }
	};

	module.exports = ReactComponentWithPureRenderMixin;

/***/ },

/***/ 425:
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	* @providesModule shallowCompare
	*/

	'use strict';

	var shallowEqual = __webpack_require__(117);

	/**
	 * Does a shallow comparison for props and state.
	 * See ReactComponentWithPureRenderMixin
	 */
	function shallowCompare(instance, nextProps, nextState) {
	  return !shallowEqual(instance.props, nextProps) || !shallowEqual(instance.state, nextState);
	}

	module.exports = shallowCompare;

/***/ },

/***/ 426:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(427);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(165)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../css-loader/index.js!./style.css", function() {
				var newContent = require("!!./../css-loader/index.js!./style.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 427:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(164)();
	// imports


	// module
	exports.push([module.id, ".react-toggle {\n  display: inline-block;\n  position: relative;\n  cursor: pointer;\n  background-color: transparent;\n  border: 0;\n  padding: 0;\n\n  -webkit-touch-callout: none;\n  -webkit-user-select: none;\n  -khtml-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n\n  -webkit-tap-highlight-color: rgba(0,0,0,0);\n  -webkit-tap-highlight-color: transparent;\n}\n\n.react-toggle-screenreader-only {\n  border: 0;\n  clip: rect(0 0 0 0);\n  height: 1px;\n  margin: -1px;\n  overflow: hidden;\n  padding: 0;\n  position: absolute;\n  width: 1px;\n}\n\n.react-toggle--disabled {\n  opacity: 0.5;\n  -webkit-transition: opacity 0.25s;\n  transition: opacity 0.25s;\n}\n\n.react-toggle-track {\n  width: 50px;\n  height: 24px;\n  padding: 0;\n  border-radius: 30px;\n  background-color: #4D4D4D;\n  -webkit-transition: all 0.2s ease;\n  -moz-transition: all 0.2s ease;\n  transition: all 0.2s ease;\n}\n\n.react-toggle:hover .react-toggle-track {\n  background-color: #000000;\n}\n\n.react-toggle--checked .react-toggle-track {\n  background-color: #19AB27;\n}\n\n.react-toggle.react-toggle--checked:hover .react-toggle-track {\n  background-color: #128D15;\n}\n\n.react-toggle-track-check {\n  position: absolute;\n  width: 14px;\n  height: 10px;\n  top: 0px;\n  bottom: 0px;\n  margin-top: auto;\n  margin-bottom: auto;\n  line-height: 0;\n  left: 8px;\n  opacity: 0;\n  -webkit-transition: opacity 0.25s ease;\n  -moz-transition: opacity 0.25s ease;\n  transition: opacity 0.25s ease;\n}\n\n.react-toggle--checked .react-toggle-track-check {\n  opacity: 1;\n  -webkit-transition: opacity 0.25s ease;\n  -moz-transition: opacity 0.25s ease;\n  transition: opacity 0.25s ease;\n}\n\n.react-toggle-track-x {\n  position: absolute;\n  width: 10px;\n  height: 10px;\n  top: 0px;\n  bottom: 0px;\n  margin-top: auto;\n  margin-bottom: auto;\n  line-height: 0;\n  right: 10px;\n  opacity: 1;\n  -webkit-transition: opacity 0.25s ease;\n  -moz-transition: opacity 0.25s ease;\n  transition: opacity 0.25s ease;\n}\n\n.react-toggle--checked .react-toggle-track-x {\n  opacity: 0;\n}\n\n.react-toggle-thumb {\n  transition: all 0.5s cubic-bezier(0.23, 1, 0.32, 1) 0ms;\n  position: absolute;\n  top: 1px;\n  left: 1px;\n  width: 22px;\n  height: 22px;\n  border: 1px solid #4D4D4D;\n  border-radius: 50%;\n  background-color: #FAFAFA;\n\n  -webkit-box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  box-sizing: border-box;\n\n  -webkit-transition: all 0.25s ease;\n  -moz-transition: all 0.25s ease;\n  transition: all 0.25s ease;\n}\n\n.react-toggle--checked .react-toggle-thumb {\n  left: 27px;\n  border-color: #19AB27;\n}\n\n.react-toggle--focus .react-toggle-thumb {\n  -webkit-box-shadow: 0px 0px 3px 2px #0099E0;\n  -moz-box-shadow: 0px 0px 3px 2px #0099E0;\n  box-shadow: 0px 0px 2px 3px #0099E0;\n}\n\n.react-toggle:active .react-toggle-thumb {\n  -webkit-box-shadow: 0px 0px 5px 5px #0099E0;\n  -moz-box-shadow: 0px 0px 5px 5px #0099E0;\n  box-shadow: 0px 0px 5px 5px #0099E0;\n}\n", ""]);

	// exports


/***/ },

/***/ 428:
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

/***/ 429:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(430);
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

/***/ 430:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(164)();
	// imports


	// module
	exports.push([module.id, ".black {\n  color: #000; }\n\n.blue {\n  color: #20afcb;\n  font-family: Ubuntu;\n  font-style: normal; }\n\n.left {\n  float: left; }\n\n.right {\n  float: right; }\n\n.blue-button {\n  border-radius: 8px;\n  background-image: -moz-linear-gradient(90deg, #20afcb 0%, #28dcff 100%);\n  background-image: -webkit-linear-gradient(90deg, #20afcb 0%, #28dcff 100%);\n  background-image: -ms-linear-gradient(90deg, #20afcb 0%, #28dcff 100%);\n  box-shadow: 0.743px 0.669px 0px 0px #757575;\n  border: 1px solid #20afcb; }\n\n.header {\n  background: -moz-linear-gradient(180deg, #fff 10%, #e9e9e9);\n  background: -webkit-linear-gradient(180deg, #fff 10%, #e9e9e9);\n  background: -o-linear-gradient(180deg, #fff 10%, #e9e9e9);\n  background: linear-gradient(180deg, #fff 10%, #e9e9e9);\n  box-shadow: inset 0 -1px 1px 0 #000;\n  height: 60px; }\n  .header .logo img {\n    width: auto;\n    height: auto; }\n  .header .logo.bulb {\n    display: inline-block;\n    width: 30px;\n    margin: 3px 3px; }\n\n/** Custom Bootstrap Tab Style here*/\n.tabs-right {\n  width: 100%; }\n  .tabs-right .nav-tabs {\n    position: absolute;\n    right: 0;\n    top: -35px; }\n\n.nav-tabs {\n  border-bottom: none;\n  font-size: 20px;\n  font-family: Ubuntu; }\n\n.nav-tabs > li.active > a,\n.nav-tabs > li.active > a:focus,\n.nav-tabs > li.active > a:hover {\n  color: #20afcb;\n  cursor: default;\n  background-color: #fff;\n  border: 1px solid #ddd;\n  border-bottom-color: transparent; }\n\n.nav-tabs > li > a {\n  margin-right: 2px;\n  line-height: 1.42857143;\n  border-radius: 4px 4px 0 0;\n  border-bottom: none; }\n  .nav-tabs > li > a:focus {\n    outline: none; }\n\n.nav > li > a {\n  position: relative;\n  display: block;\n  padding: 5px 20px 0 20px;\n  color: #5d5d5d; }\n\n.form-segment {\n  display: inline-block;\n  list-style: none;\n  width: 100%;\n  padding-top: 30px; }\n  .form-segment li {\n    display: inline-block;\n    float: left;\n    width: 50%; }\n    @media screen and (max-width: 768px) {\n      .form-segment li {\n        width: 100%; } }\n\n.input-body {\n  display: inline-block;\n  font-family: Ubuntu;\n  width: 100%; }\n  .input-body .labels {\n    display: inline-block;\n    float: left;\n    margin-right: 30px; }\n    .input-body .labels span {\n      display: block;\n      color: #20afcb;\n      font-size: 16px;\n      text-align: end;\n      margin: 20px 0 0 0;\n      padding: 8px 0 10px 0; }\n      .input-body .labels span.toggle {\n        margin-top: 45px; }\n      .input-body .labels span.add {\n        margin: 20px 0 70px 0; }\n  .input-body .inputs {\n    display: inline-block;\n    float: left;\n    width: 70%; }\n    .input-body .inputs span {\n      display: block;\n      color: #5d5d5d;\n      font-size: 16px;\n      margin: 20px 0 0 0; }\n      .input-body .inputs span.toggle {\n        margin-top: 60px; }\n        .input-body .inputs span.toggle span, .input-body .inputs span.toggle i {\n          margin: 0 2px;\n          float: left;\n          display: inline;\n          font-size: 13px; }\n      .input-body .inputs span .Select {\n        width: 80%; }\n        .input-body .inputs span .Select span {\n          margin: 0; }\n        .input-body .inputs span .Select .Select-input input {\n          border: none; }\n        .input-body .inputs span .Select .Select-arrow-zone {\n          margin-top: -20px; }\n      .input-body .inputs span input:-moz-placeholder {\n        color: #5d5d5d;\n        font-family: inherit;\n        font-size: 15px;\n        padding: 0 0 2px 4px; }\n      .input-body .inputs span input:-ms-input-placeholder {\n        color: #5d5d5d;\n        font-family: inherit;\n        font-size: 15px;\n        padding: 0 0 2px 4px; }\n      .input-body .inputs span input::-webkit-input-placeholder {\n        color: #5d5d5d;\n        font-family: inherit;\n        font-size: 15px;\n        padding: 0 0 2px 4px; }\n      .input-body .inputs span input {\n        width: 80%;\n        height: 40px;\n        border: 1px solid #ccc;\n        border-radius: 4px; }\n        .input-body .inputs span input:focus {\n          outline: none; }\n        @media screen and (max-width: 768px) {\n          .input-body .inputs span input {\n            width: 100%; } }\n      .input-body .inputs span.add {\n        margin: 20px 0 30px 0; }\n      .input-body .inputs span.inline {\n        margin: 0 0 20px 0; }\n        .input-body .inputs span.inline .city {\n          width: 48%;\n          border-top: none;\n          border-right: none;\n          border-top-left-radius: 0;\n          border-top-right-radius: 0;\n          border-bottom-right-radius: 0; }\n        .input-body .inputs span.inline .zip {\n          width: 32%;\n          border-top: none;\n          border-top-left-radius: 0;\n          border-top-right-radius: 0;\n          border-bottom-left-radius: 0; }\n        @media screen and (max-width: 768px) {\n          .input-body .inputs span.inline .city {\n            width: 60%; }\n          .input-body .inputs span.inline .zip {\n            width: 40%; } }\n\n.range-box {\n  margin-top: 20px;\n  width: 450px;\n  font-family: Ubuntu; }\n  .range-box.blue .head {\n    background: #c1ebff; }\n  .range-box.blue .body {\n    background: #f4f3f5; }\n  .range-box.blue .noUi-connect {\n    display: block;\n    background: #25c9e9;\n    height: 15px;\n    -webkit-transition: background 450ms;\n    transition: background 450ms;\n    box-shadow: none; }\n  .range-box.blue .noUi-target {\n    border-radius: 4px;\n    box-shadow: none; }\n  .range-box.blue .noUi-background {\n    box-shadow: none;\n    background: #c1ebff; }\n  .range-box.orange {\n    margin-top: 55px; }\n    .range-box.orange .head {\n      background: #ffde97; }\n    .range-box.orange .body {\n      background: #f4f3f5; }\n    .range-box.orange .noUi-connect {\n      display: block;\n      background: #f7941d;\n      height: 15px;\n      -webkit-transition: background 450ms;\n      transition: background 450ms;\n      box-shadow: none; }\n    .range-box.orange .noUi-target {\n      border-radius: 4px;\n      box-shadow: none; }\n    .range-box.orange .noUi-background {\n      box-shadow: none;\n      background: #ffde97; }\n  .range-box .head {\n    display: block;\n    padding: 8px 8px;\n    border-top-left-radius: 15px;\n    border-top-right-radius: 15px; }\n  .range-box .body {\n    display: inline-block;\n    width: 100%;\n    height: 130px;\n    padding: 10px 10px 30px 20px; }\n\n.submit-button {\n  margin-top: 60px;\n  margin-left: 80px; }\n  .submit-button button {\n    padding: 12px 47px;\n    font-size: 16px;\n    color: #fff;\n    font-family: 'Ubuntu',san-serif;\n    font-weight: bold;\n    border-radius: 6px; }\n\n/**\n * React Select\n * ============\n * Created by Jed Watson and Joss Mackison for KeystoneJS, http://www.keystonejs.com/\n * https://twitter.com/jedwatson https://twitter.com/jossmackison https://twitter.com/keystonejs\n * MIT License: https://github.com/keystonejs/react-select\n*/\n.Select {\n  position: relative; }\n\n.Select,\n.Select div,\n.Select input,\n.Select span {\n  -webkit-box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  box-sizing: border-box; }\n\n.Select.is-disabled > .Select-control {\n  background-color: #f6f6f6; }\n\n.Select.is-disabled .Select-arrow-zone {\n  cursor: default;\n  pointer-events: none; }\n\n.Select-control {\n  background-color: #fff;\n  border-color: #d9d9d9 #ccc #b3b3b3;\n  border-radius: 4px;\n  border: 1px solid #ccc;\n  color: #333;\n  cursor: default;\n  display: table;\n  height: 36px;\n  outline: none;\n  overflow: hidden;\n  position: relative;\n  width: 100%; }\n\n.Select-control:hover {\n  box-shadow: 0 1px 0 rgba(0, 0, 0, 0.06); }\n\n.is-searchable.is-open > .Select-control {\n  cursor: text; }\n\n.is-open > .Select-control {\n  border-bottom-right-radius: 0;\n  border-bottom-left-radius: 0;\n  background: #fff;\n  border-color: #b3b3b3 #ccc #d9d9d9; }\n\n.is-open > .Select-control > .Select-arrow {\n  border-color: transparent transparent #999;\n  border-width: 0 5px 5px; }\n\n.is-searchable.is-focused:not(.is-open) > .Select-control {\n  cursor: text; }\n\n.is-focused:not(.is-open) > .Select-control {\n  box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.1), 0 0 5px -1px rgba(0, 126, 255, 0.5); }\n\n.Select-placeholder {\n  bottom: 0;\n  color: #aaa;\n  left: 0;\n  line-height: 34px;\n  padding-left: 10px;\n  padding-right: 10px;\n  position: absolute;\n  right: 0;\n  top: 0;\n  max-width: 100%;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap; }\n\n.has-value > .Select-control > .Select-placeholder {\n  color: #333; }\n\n.Select-value {\n  color: #aaa;\n  left: 0;\n  padding: 8px 52px 8px 10px;\n  position: absolute;\n  right: -15px;\n  top: 0;\n  max-width: 100%;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap; }\n\n.has-value > .Select-control > .Select-value {\n  color: #333; }\n\n.Select-input {\n  height: inherit;\n  padding-left: 10px;\n  padding-right: 10px;\n  vertical-align: middle;\n  width: 100%; }\n\n.Select-input > input {\n  background: none transparent;\n  border: 0 none;\n  box-shadow: none;\n  cursor: default;\n  display: inline-block;\n  font-family: inherit;\n  font-size: inherit;\n  height: inherit;\n  width: 100%;\n  margin: 0;\n  outline: none;\n  padding: 0;\n  -webkit-appearance: none; }\n\n.is-focused .Select-input > input {\n  cursor: text; }\n\n.Select-control:not(.is-searchable) > .Select-input {\n  outline: none; }\n\n.Select-loading-zone {\n  cursor: pointer;\n  display: table-cell;\n  position: relative;\n  text-align: center;\n  vertical-align: middle;\n  width: 16px; }\n\n.Select-loading {\n  -webkit-animation: Select-animation-spin 400ms infinite linear;\n  -o-animation: Select-animation-spin 400ms infinite linear;\n  animation: Select-animation-spin 400ms infinite linear;\n  width: 16px;\n  height: 16px;\n  box-sizing: border-box;\n  border-radius: 50%;\n  border: 2px solid #ccc;\n  border-right-color: #333;\n  display: inline-block;\n  position: relative;\n  vertical-align: middle; }\n\n.Select-clear-zone {\n  -webkit-animation: Select-animation-fadeIn 200ms;\n  -o-animation: Select-animation-fadeIn 200ms;\n  animation: Select-animation-fadeIn 200ms;\n  color: #999;\n  cursor: pointer;\n  display: table-cell;\n  position: relative;\n  text-align: center;\n  vertical-align: middle;\n  width: 17px;\n  float: right; }\n\n.Select-clear-zone:hover {\n  color: #D0021B; }\n\n.Select-clear {\n  display: inline-block;\n  font-size: 18px;\n  line-height: 1; }\n\n.Select--multi .Select-clear-zone {\n  width: 17px; }\n\n.Select-arrow-zone {\n  cursor: pointer;\n  display: table-cell;\n  position: relative;\n  text-align: center;\n  vertical-align: middle;\n  padding-right: 5px;\n  margin-top: -10px;\n  float: right; }\n\n.Select-arrow {\n  border-color: #999 transparent transparent;\n  border-style: solid;\n  border-width: 5px 5px 2.5px;\n  display: inline-block;\n  height: 0;\n  width: 0; }\n\n.is-open .Select-arrow,\n.Select-arrow-zone:hover > .Select-arrow {\n  border-top-color: #666; }\n\n@-webkit-keyframes Select-animation-fadeIn {\n  from {\n    opacity: 0; }\n  to {\n    opacity: 1; } }\n\n@keyframes Select-animation-fadeIn {\n  from {\n    opacity: 0; }\n  to {\n    opacity: 1; } }\n\n.Select-menu-outer {\n  border-bottom-right-radius: 4px;\n  border-bottom-left-radius: 4px;\n  background-color: #fff;\n  border: 1px solid #ccc;\n  border-top-color: #e6e6e6;\n  box-shadow: 0 1px 0 rgba(0, 0, 0, 0.06);\n  box-sizing: border-box;\n  margin-top: -1px;\n  max-height: 200px;\n  position: absolute;\n  top: 100%;\n  width: 100%;\n  z-index: 1000;\n  -webkit-overflow-scrolling: touch; }\n\n.Select-menu {\n  max-height: 198px;\n  overflow-y: auto; }\n\n.Select-option {\n  box-sizing: border-box;\n  color: #666666;\n  cursor: pointer;\n  display: block;\n  padding: 8px 10px; }\n\n.Select-option:last-child {\n  border-bottom-right-radius: 4px;\n  border-bottom-left-radius: 4px; }\n\n.Select-option.is-focused {\n  background-color: rgba(0, 126, 255, 0.08);\n  color: #333; }\n\n.Select-option.is-disabled {\n  color: #cccccc;\n  cursor: not-allowed; }\n\n.Select-noresults,\n.Select-search-prompt,\n.Select-searching {\n  box-sizing: border-box;\n  color: #999999;\n  cursor: default;\n  display: block;\n  padding: 8px 10px; }\n\n.Select--multi .Select-input {\n  vertical-align: middle;\n  margin-left: 10px;\n  padding: 0; }\n\n.Select--multi.has-value .Select-input {\n  margin-left: 5px; }\n\n.Select-item {\n  background-color: rgba(0, 126, 255, 0.08);\n  border-radius: 2px;\n  border: 1px solid rgba(0, 126, 255, 0.24);\n  color: #007eff;\n  display: inline-block;\n  font-size: 0.9em;\n  margin-left: 5px;\n  margin-top: 5px;\n  vertical-align: top; }\n\n.Select-item-icon,\n.Select-item-label {\n  display: inline-block;\n  vertical-align: middle; }\n\n.Select-item-label {\n  border-bottom-right-radius: 2px;\n  border-top-right-radius: 2px;\n  cursor: default;\n  padding: 2px 5px; }\n\n.Select-item-label .Select-item-label__a {\n  color: #007eff;\n  cursor: pointer; }\n\n.Select-item-icon {\n  cursor: pointer;\n  border-bottom-left-radius: 2px;\n  border-top-left-radius: 2px;\n  border-right: 1px solid rgba(0, 126, 255, 0.24);\n  padding: 1px 5px 3px; }\n\n.Select-item-icon:hover,\n.Select-item-icon:focus {\n  background-color: rgba(0, 113, 230, 0.08);\n  color: #0071e6; }\n\n.Select-item-icon:active {\n  background-color: rgba(0, 126, 255, 0.24); }\n\n.Select--multi.is-disabled .Select-item {\n  background-color: #f2f2f2;\n  border: 1px solid #d9d9d9;\n  color: #888; }\n\n.Select--multi.is-disabled .Select-item-icon {\n  cursor: not-allowed;\n  border-right: 1px solid #d9d9d9; }\n\n.Select--multi.is-disabled .Select-item-icon:hover,\n.Select--multi.is-disabled .Select-item-icon:focus,\n.Select--multi.is-disabled .Select-item-icon:active {\n  background-color: #f2f2f2; }\n\n@keyframes Select-animation-spin {\n  to {\n    transform: rotate(1turn); } }\n\n@-webkit-keyframes Select-animation-spin {\n  to {\n    -webkit-transform: rotate(1turn); } }\n\nbody {\n  color: #333;\n  font-family: Helvetica Neue, Helvetica, Arial, sans-serif;\n  font-size: 14px;\n  line-height: 1.4;\n  margin: 0;\n  padding: 0; }\n\na {\n  color: #007eff;\n  text-decoration: none; }\n\na:hover {\n  text-decoration: underline; }\n\n.container {\n  margin-left: auto;\n  margin-right: auto;\n  max-width: 400px;\n  padding: 0 30px; }\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\n.h1,\n.h2,\n.h3,\n.h4,\n.h5,\n.h6 {\n  color: black;\n  font-weight: 500;\n  line-height: 1;\n  margin-bottom: .66em;\n  margin-top: 0; }\n\nh1,\n.h1 {\n  font-size: 3em; }\n\nh2,\n.h2 {\n  font-size: 2em;\n  font-weight: 300; }\n\nh3,\n.h3 {\n  font-size: 1.25em; }\n\nh4,\n.h4 {\n  font-size: 1em; }\n\nh5,\n.h5 {\n  font-size: .85em; }\n\nh6,\n.h6 {\n  font-size: .75em; }\n\n.page-body,\n.page-footer,\n.page-header {\n  padding: 30px 0; }\n\n.page-header {\n  background-color: #007eff;\n  color: #bfdfff; }\n\n.page-header h1,\n.page-header h2,\n.page-header h3 {\n  color: white; }\n\n.page-header p {\n  font-size: 1.2em;\n  margin: 0; }\n\n.page-header a {\n  border-bottom: 1px solid rgba(255, 255, 255, 0.3);\n  color: white;\n  text-decoration: none; }\n\n.page-header a:hover,\n.page-header a:focus {\n  border-bottom-color: white;\n  outline: none;\n  text-decoration: none; }\n\n.page-subheader {\n  background-color: #e6f2ff;\n  line-height: 20px;\n  padding: 30px 0; }\n\n.page-subheader__button {\n  float: right; }\n\n.page-subheader__link {\n  border-bottom: 1px solid rgba(0, 126, 255, 0.3);\n  outline: none;\n  text-decoration: none; }\n\n.page-subheader__link:hover,\n.page-subheader__link:focus {\n  border-bottom-color: #007eff;\n  outline: none;\n  text-decoration: none; }\n\n.page-footer {\n  background-color: #fafafa;\n  color: #999;\n  padding: 30px 0;\n  text-align: center; }\n\n.page-footer a {\n  color: black; }\n\n@media (min-width: 480px) {\n  .page-body,\n  .page-header {\n    padding: 60px 0; }\n  .page-header {\n    font-size: 1.4em; }\n  .page-subheader {\n    font-size: 1.125em;\n    line-height: 28px; } }\n\n.checkbox-list {\n  margin-top: .5em;\n  overflow: hidden; }\n\n.checkbox-list > .checkbox {\n  clear: left;\n  float: left;\n  margin-top: .5em; }\n\n.checkbox-control {\n  margin-right: .5em;\n  position: relative;\n  top: -1px; }\n\n.switcher {\n  color: #999;\n  cursor: default;\n  font-size: 12px;\n  margin: 10px 0;\n  text-transform: uppercase; }\n\n.switcher .link {\n  color: #007eff;\n  cursor: pointer;\n  font-weight: bold;\n  margin-left: 10px; }\n\n.switcher .link:hover {\n  text-decoration: underline; }\n\n.switcher .active {\n  color: #666;\n  font-weight: bold;\n  margin-left: 10px; }\n\n.section {\n  margin-bottom: 40px; }\n\n.hint {\n  font-size: .85em;\n  margin: 15px 0;\n  color: #666; }\n\n/*\n\n// include these styles to test normal form fields\n\n.form-input {\n\tmargin-bottom: 15px;\n}\n\n.form-input input {\n\tbackground-color: white;\n\tborder-color: lighten(@select-input-border-color, 5%) @select-input-border-color darken(@select-input-border-color, 10%);\n\tborder-radius: @select-input-border-radius;\n\tborder: 1px solid @select-input-border-color;\n\tbox-sizing: border-box;\n\tcolor: @select-text-color;\n\tfont-size: 14px;\n\toutline: none;\n\tpadding: @select-padding-vertical @select-padding-horizontal;\n\ttransition: all 200ms ease;\n\twidth: 100%;\n\n\t&:hover {\n\t\tbox-shadow: 0 1px 0 rgba(0, 0, 0, 0.06);\n\t}\n\n\t&:focus {\n\t\tborder-color: @select-input-border-focus lighten(@select-input-border-focus, 5%) lighten(@select-input-border-focus, 5%);\n\t\tbox-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.1), 0 0 5px -1px fade(@select-input-border-focus,50%);\n\t}\n}\n\n*/\n", ""]);

	// exports


/***/ }

});