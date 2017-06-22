'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _style2 = require('jw-components-mobile/lib/input-item/style');

var _inputItem = require('jw-components-mobile/lib/input-item');

var _inputItem2 = _interopRequireDefault(_inputItem);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var InputCustom = function (_Component) {
	_inherits(InputCustom, _Component);

	function InputCustom() {
		_classCallCheck(this, InputCustom);

		return _possibleConstructorReturn(this, (InputCustom.__proto__ || Object.getPrototypeOf(InputCustom)).apply(this, arguments));
	}

	_createClass(InputCustom, [{
		key: 'onChange',
		value: function onChange(value, schema) {
			this.props.onChange(value, schema);
		}
	}, {
		key: 'render',
		value: function render() {
			var _this2 = this;

			var schema = this.props.schema;
			var target = _react2.default.createElement(_inputItem2.default, { autocomplete: 'off', className: 'jw-web-input', placeholder: schema.placeholder, type: schema.type, onChange: function onChange(value) {
					return _this2.onChange(value, schema);
				}, defaultValue: schema['defaultValue'] });

			if (schema["other"] && schema["other"]['template']) {
				var Template = schema["other"]['template'];
				target = _react2.default.createElement(Template, { children: target, target: this });
			} else {
				target = _react2.default.createElement(
					'div',
					{ className: 'Form-item-c' },
					target
				);
			}
			return _react2.default.createElement(
				'div',
				{ className: 'Form-item-w' },
				target
			);
		}
	}, {
		key: 'componentDidMount',
		value: function componentDidMount() {
			//初始化
		}
	}, {
		key: 'componentDidUpdate',
		value: function componentDidUpdate() {
			//变化
			// console.log(this.refs.template,'123');
		}
	}]);

	return InputCustom;
}(_react.Component);

exports.default = InputCustom;