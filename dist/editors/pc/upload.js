'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _upload = require('jw-components/lib/upload');

var _upload2 = _interopRequireDefault(_upload);

var _button = require('jw-components/lib/button');

var _button2 = _interopRequireDefault(_button);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var UploadMod = function (_Component) {
	_inherits(UploadMod, _Component);

	function UploadMod() {
		_classCallCheck(this, UploadMod);

		return _possibleConstructorReturn(this, (UploadMod.__proto__ || Object.getPrototypeOf(UploadMod)).apply(this, arguments));
	}

	_createClass(UploadMod, [{
		key: 'onChange',
		value: function onChange(value, schema) {
			this.props.onChange(value, schema);
			var propsSchema = this.props.schema;
			if (propsSchema['events'] && propsSchema['events']['onChange']) {
				propsSchema['events']['onChange'].call(this, arguments);
			}
		}
	}, {
		key: 'getLabel',
		value: function getLabel(txt) {
			if (txt) {
				return _react2.default.createElement('div', { className: 'label ant-form-item-label', dangerouslySetInnerHTML: { __html: txt } });
			} else {
				return '';
			}
		}
	}, {
		key: '_init_layout',
		value: function _init_layout() {
			var schema = this.props.schema;
			if (schema['layout'] == 'horizontal') {
				return 'layout-horizontal';
			} else if (schema['layout'] == 'vertical') {
				return 'layout-vertical';
			} else {
				return 'layout-column layout-column-' + schema['column'];
			}
		}
	}, {
		key: 'render',
		value: function render() {
			var _this2 = this;

			var schema = this.props.schema;
			var self = this;
			var data = Object.assign({}, {
				defaultFileList: schema['defaultValue'],
				disabled: false,
				headers: {
					authorization: 'authorization-text'
				}
			}, schema["attr"], schema["events"]);

			var target = _react2.default.createElement(
				_upload2.default,
				_extends({}, data, { onChange: function onChange(e) {
						return _this2.onChange(e, schema);
					} }),
				_react2.default.createElement(
					_button2.default,
					null,
					'\u4E0A\u4F20'
				)
			);
			if (schema["other"] && schema["other"]['template']) {
				var Template = schema["other"]['template'];
				target = _react2.default.createElement(
					'div',
					{ className: 'Form-item-c' },
					_react2.default.createElement(Template, { children: target, target: self, changeData: self.props.changeData, changeSchemas: self.props.changeSchemas })
				);
			} else {
				target = _react2.default.createElement(
					'div',
					{ className: 'Form-item-c' },
					target
				);
			}
			return _react2.default.createElement(
				'div',
				{ className: "Form-item-w " + this._init_layout(), ref: 'container' },
				this.getLabel(schema.label),
				target
			);
		}
	}]);

	return UploadMod;
}(_react.Component);

exports.default = UploadMod;