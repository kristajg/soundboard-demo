'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _taggedTemplateLiteral2 = require('babel-runtime/helpers/taggedTemplateLiteral');

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/krista.goralczyk/Projects/experiments/soundboard-demo/components/Spacebar.js';

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n  0% {\n    background-color: #fff;\n    height: 60px;\n    width: 612px;\n    left: calc(50% - 306px);\n  }\n  50% {\n    background-color: #9affe7;\n    height: 70px;\n    width: 622px;\n    left: calc(50% - 311px);\n  }\n  100% {\n    background-color: #fff;\n    height: 60px;\n    width: 612px;\n    left: calc(50% - 306px);\n  }\n'], ['\n  0% {\n    background-color: #fff;\n    height: 60px;\n    width: 612px;\n    left: calc(50% - 306px);\n  }\n  50% {\n    background-color: #9affe7;\n    height: 70px;\n    width: 622px;\n    left: calc(50% - 311px);\n  }\n  100% {\n    background-color: #fff;\n    height: 60px;\n    width: 612px;\n    left: calc(50% - 306px);\n  }\n']),
    _templateObject2 = (0, _taggedTemplateLiteral3.default)(['\n  height: 60px;\n  width: 612px;\n  background-color: #fff;\n  text-transform: uppercase;\n  border-radius: 6px;\n  margin-top: 35px;\n  position: relative;\n  left: calc(50% - 306px);\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n  animation: ', '\n'], ['\n  height: 60px;\n  width: 612px;\n  background-color: #fff;\n  text-transform: uppercase;\n  border-radius: 6px;\n  margin-top: 35px;\n  position: relative;\n  left: calc(50% - 306px);\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n  animation: ', '\n']),
    _templateObject3 = (0, _taggedTemplateLiteral3.default)(['\n  position: relative;\n  top: 26%;\n  font-weight: 600;\n  font-size: 20px;\n'], ['\n  position: relative;\n  top: 26%;\n  font-weight: 600;\n  font-size: 20px;\n']),
    _templateObject4 = (0, _taggedTemplateLiteral3.default)(['\n  position: relative;\n  top: 30%;\n  font-size: 10px;\n  font-weight: 400;\n'], ['\n  position: relative;\n  top: 30%;\n  font-size: 10px;\n  font-weight: 400;\n']);

var playAnimation = (0, _styledComponents.keyframes)(_templateObject);

var Bar = _styledComponents2.default.div(_templateObject2, function (props) {
  return props.animate ? playAnimation + ' .3s linear' : 0;
});

var Label = _styledComponents2.default.div(_templateObject3);

var SubLabel = _styledComponents2.default.div(_templateObject4);

var Spacebar = function (_PureComponent) {
  (0, _inherits3.default)(Spacebar, _PureComponent);

  function Spacebar() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Spacebar);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Spacebar.__proto__ || (0, _getPrototypeOf2.default)(Spacebar)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      animate: false
    }, _this.stopAllSounds = function (e) {
      if (e.keyCode === 32) {
        // Start animation
        _this.setState({ animate: true });

        // Wait for animation to complete before closing
        setTimeout(function () {
          _this.setState({ animate: false });
        }, 500);

        var sounds = document.getElementsByClassName('sounds');
        for (var i = 0; i < sounds.length; i++) {
          sounds[i].pause();
        }
      }
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(Spacebar, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      window.addEventListener('keydown', this.stopAllSounds);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      window.removeEventListener('keydown', this.stopAllSounds);
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(Bar, { animate: this.state.animate, onKeyDown: this.stopAllSounds, __source: {
          fileName: _jsxFileName,
          lineNumber: 82
        }
      }, _react2.default.createElement(Label, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        }
      }, 'space'), _react2.default.createElement(SubLabel, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        }
      }, 'pause sounds'));
    }
  }]);

  return Spacebar;
}(_react.PureComponent);

exports.default = Spacebar;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvU3BhY2ViYXIuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJQdXJlQ29tcG9uZW50Iiwic3R5bGVkIiwia2V5ZnJhbWVzIiwicGxheUFuaW1hdGlvbiIsIkJhciIsImRpdiIsInByb3BzIiwiYW5pbWF0ZSIsIkxhYmVsIiwiU3ViTGFiZWwiLCJTcGFjZWJhciIsInN0YXRlIiwic3RvcEFsbFNvdW5kcyIsImUiLCJrZXlDb2RlIiwic2V0U3RhdGUiLCJzZXRUaW1lb3V0Iiwic291bmRzIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50c0J5Q2xhc3NOYW1lIiwiaSIsImxlbmd0aCIsInBhdXNlIiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBUzs7OztBQUNoQixBQUFPLEFBQVU7Ozs7Ozs7Ozs7Ozs7QUFFakIsSUFBTSxnQkFBQSxBQUFnQixpQ0FBdEI7O0FBcUJBLElBQU0saUNBQUEsQUFBYSxzQkFVSixpQkFBQTtTQUFTLE1BQUEsQUFBTSxVQUFOLEFBQW1CLGdDQUE1QixBQUF5RDtBQVZ4RSxBQUFNLENBQU07O0FBYVosSUFBTSxRQUFRLDJCQUFSLEFBQWUsSUFBckI7O0FBT0EsSUFBTSxXQUFXLDJCQUFYLEFBQWtCLElBQXhCOztJQU9xQixBOzs7Ozs7Ozs7Ozs7OztnTkFDbkIsQTtlQUFRLEFBQ0csQTtBQURILEFBQ04sYUFXRixBLGdCQUFnQixVQUFBLEFBQUMsR0FBTSxBQUNyQjtVQUFJLEVBQUEsQUFBRSxZQUFOLEFBQWtCLElBQUksQUFDcEI7QUFDQTtjQUFBLEFBQUssU0FBUyxFQUFFLFNBQWhCLEFBQWMsQUFBVyxBQUV6Qjs7QUFDQTttQkFBVyxZQUFNLEFBQ2Y7Z0JBQUEsQUFBSyxTQUFTLEVBQUUsU0FBaEIsQUFBYyxBQUFXLEFBQzFCO0FBRkQsV0FBQSxBQUVHLEFBRUg7O1lBQU0sU0FBUyxTQUFBLEFBQVMsdUJBQXhCLEFBQWUsQUFBZ0MsQUFDL0M7YUFBSyxJQUFJLElBQVQsQUFBVyxHQUFHLElBQUUsT0FBaEIsQUFBdUIsUUFBdkIsQUFBK0IsS0FBSztpQkFBQSxBQUFPLEdBQTNDLEFBQW9DLEFBQVU7QUFDL0M7QUFDRjtBOzs7Ozt3Q0FyQm9CLEFBQ25CO2FBQUEsQUFBTyxpQkFBUCxBQUF3QixXQUFXLEtBQW5DLEFBQXdDLEFBQ3pDOzs7OzJDQUV1QixBQUN0QjthQUFBLEFBQU8sb0JBQVAsQUFBMkIsV0FBVyxLQUF0QyxBQUEyQyxBQUM1Qzs7Ozs2QkFpQlEsQUFDUDs2QkFDRyxjQUFELE9BQUssU0FBUyxLQUFBLEFBQUssTUFBbkIsQUFBeUIsU0FBUyxXQUFXLEtBQTdDLEFBQWtEO29CQUFsRDtzQkFBQSxBQUNFO0FBREY7T0FBQSxrQkFDRyxjQUFEOztvQkFBQTtzQkFBQTtBQUFBO0FBQUEsU0FERixBQUNFLEFBQ0EsMEJBQUMsY0FBRDs7b0JBQUE7c0JBQUE7QUFBQTtBQUFBLFNBSEosQUFDRSxBQUVFLEFBR0w7Ozs7O0FBbkNtQyxBOztrQkFBakIsQSIsImZpbGUiOiJTcGFjZWJhci5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMva3Jpc3RhLmdvcmFsY3p5ay9Qcm9qZWN0cy9leHBlcmltZW50cy9zb3VuZGJvYXJkLWRlbW8ifQ==