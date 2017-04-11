'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

require('./animate.css');

var _classNames = require('./classNames');

var _classNames2 = _interopRequireDefault(_classNames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ReactAnim = function (_React$Component) {
    _inherits(ReactAnim, _React$Component);

    /**
     * @doc overview
     * @name constructor
     *
     * @returns {Object} -state object
     *
     * @description
     * 返回state数据对象
     *
     */
    function ReactAnim(props) {
        _classCallCheck(this, ReactAnim);

        var _this = _possibleConstructorReturn(this, (ReactAnim.__proto__ || Object.getPrototypeOf(ReactAnim)).call(this, props));

        _this.state = {};
        return _this;
    }

    /**
     * @doc overview
     * @name defaultProps
     *
     * @returns {Object} -props object
     *  - `className` – `{string}` - calssName设置
     *  - `id` – `{string}` - id属性
     *  - `style` – `{string}` - 自定义样式
     *  - `type` – `{string}` - 动画类型，默认fadeIn
     * @description
     * 设置default props
     *
     */


    _createClass(ReactAnim, [{
        key: 'render',
        value: function render() {
            var p = this.props;
            return _react2.default.createElement(
                'div',
                {
                    style: p.style,
                    id: p.id,
                    className: (0, _classNames2.default)('animated', p.type, this.props.className) },
                this.props.children
            );
        }
    }]);

    return ReactAnim;
}(_react2.default.Component);

ReactAnim.defaultProps = {
    className: "",
    id: "",
    style: {},
    type: 'fadeIn'
};
exports.default = ReactAnim;