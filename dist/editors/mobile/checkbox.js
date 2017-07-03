'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _style2 = require('jw-components-mobile/lib/checkbox/style');

var _checkbox = require('jw-components-mobile/lib/checkbox');

var _checkbox2 = _interopRequireDefault(_checkbox);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CheckboxItem = _checkbox2.default.CheckboxItem;

var Checkboxs = function (_Component) {
	_inherits(Checkboxs, _Component);

	function Checkboxs() {
		_classCallCheck(this, Checkboxs);

		return _possibleConstructorReturn(this, (Checkboxs.__proto__ || Object.getPrototypeOf(Checkboxs)).apply(this, arguments));
	}

	_createClass(Checkboxs, [{
		key: 'onChange',
		value: function onChange(e, v, schema) {
			var defaultValue = this.props.schema.defaultValue;
			var hasValue = _.filter(defaultValue, function (item) {
				return item == v.value;
			}); //判断当前默认里面有没有
			if (hasValue.length > 0) {
				defaultValue = _.filter(defaultValue, function (item) {
					return item != v.value;
				});
			} else {
				defaultValue.push(v['value']);
			}
			this.props.onChange(defaultValue, schema);
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
			var schema = this.props.schema;
			var self = this;
			var target = _react2.default.createElement(
				'div',
				null,
				_.map(schema.options, function (item, index) {
					var is_has = false;
					_.map(schema.defaultValue, function (i) {
						if (i == item.value) {
							is_has = true;
						}
					});
					return _react2.default.createElement(
						CheckboxItem,
						{ key: item.value, checked: is_has, onChange: function onChange(e) {
								return self.onChange(e, item, schema);
							} },
						' ',
						_react2.default.createElement(
							'span',
							null,
							item.label
						)
					);
				})
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

	return Checkboxs;
}(_react.Component);

exports.default = Checkboxs;