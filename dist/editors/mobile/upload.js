'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _upload = require('jw-components-mobile/lib/upload');

var _upload2 = _interopRequireDefault(_upload);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

require('jw-components-mobile/lib/upload/style');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var UploadItem = function (_Component) {
	_inherits(UploadItem, _Component);

	function UploadItem() {
		_classCallCheck(this, UploadItem);

		return _possibleConstructorReturn(this, (UploadItem.__proto__ || Object.getPrototypeOf(UploadItem)).apply(this, arguments));
	}

	_createClass(UploadItem, [{
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
		value: function getLabel(schema) {
			return _react2.default.createElement(
				'div',
				{ className: 'label ant-form-item-label upload-label' },
				_react2.default.createElement(
					'div',
					{ className: 'upload-label-txt' },
					schema.label
				),
				_react2.default.createElement(
					'div',
					{ className: 'upload-label-desc' },
					schema.placeholder
				)
			);
		}
	}, {
		key: 'render',
		value: function render() {
			var _this2 = this;

			var schema = this.props.schema;
			var target = _react2.default.createElement(_upload2.default, _extends({}, schema['attr'], schema['placeholder'], schema['events'], { value: schema['defaultValue'], onChange: function onChange(value) {
					return _this2.onChange(value, schema);
				} }));
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
				{ className: 'Form-item-w', ref: 'container' },
				this.getLabel(schema),
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

	return UploadItem;
}(_react.Component);

exports.default = UploadItem;