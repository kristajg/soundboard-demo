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

var _jsxFileName = '/Users/krista.goralczyk/Projects/experiments/soundboard-demo/components/Keypad.js';

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n  0% {\n    background-color: ', ';\n    height: 75px;\n    width: 75px;\n  }\n  50% {\n    background-color: ', ';\n    height: 85px;\n    width: 85px;\n  }\n  100% {\n    background-color:', ';\n    height: 75px;\n    width: 75px;\n  }\n'], ['\n  0% {\n    background-color: ', ';\n    height: 75px;\n    width: 75px;\n  }\n  50% {\n    background-color: ', ';\n    height: 85px;\n    width: 85px;\n  }\n  100% {\n    background-color:', ';\n    height: 75px;\n    width: 75px;\n  }\n']),
    _templateObject2 = (0, _taggedTemplateLiteral3.default)(['\n  height: 75px;\n  width: 75px;\n  background-color: ', ';\n  text-transform: uppercase;\n  display: inline-block;\n  border: 3px solid #fff;\n  border-radius: 6px;\n  margin-right: 25px;\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n  animation: ', '\n'], ['\n  height: 75px;\n  width: 75px;\n  background-color: ', ';\n  text-transform: uppercase;\n  display: inline-block;\n  border: 3px solid #fff;\n  border-radius: 6px;\n  margin-right: 25px;\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n  animation: ', '\n']),
    _templateObject3 = (0, _taggedTemplateLiteral3.default)(['\n  position: relative;\n  top: 35%;\n  font-weight: 600;\n  font-size: 22px;\n'], ['\n  position: relative;\n  top: 35%;\n  font-weight: 600;\n  font-size: 22px;\n']),
    _templateObject4 = (0, _taggedTemplateLiteral3.default)(['\n  position: relative;\n  top: 40%;\n  font-size: 10px;\n  font-weight: 400;\n'], ['\n  position: relative;\n  top: 40%;\n  font-size: 10px;\n  font-weight: 400;\n']);

var basePath = '/static/sounds/';

var playAnimation = function playAnimation(_ref) {
  var colorOne = _ref.colorOne,
      colorTwo = _ref.colorTwo;
  return (0, _styledComponents.keyframes)(_templateObject, colorOne ? colorOne : '#ff00bf', colorTwo ? colorTwo : '#9affe7', colorOne ? colorOne : '#ff00bf');
};

var Key = _styledComponents2.default.div(_templateObject2, function (props) {
  return props.colorOne ? props.colorOne : '#ff00bf';
}, function (props) {
  return props.animate ? playAnimation(props) + ' .3s linear' : 0;
});

var Label = _styledComponents2.default.div(_templateObject3);

var SubLabel = _styledComponents2.default.div(_templateObject4);

var mapKeyCodes = {
  1: 49,
  2: 50,
  3: 51,
  4: 52,
  q: 81,
  w: 87,
  e: 69,
  r: 82,
  t: 84,
  y: 89,
  u: 85,
  i: 73,
  o: 79,
  p: 80,
  a: 65,
  s: 83,
  d: 68,
  f: 70,
  g: 71,
  h: 72,
  j: 74,
  k: 75,
  l: 76,
  ';': 186
};

var Keypad = function (_PureComponent) {
  (0, _inherits3.default)(Keypad, _PureComponent);

  function Keypad() {
    var _ref2;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Keypad);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref2 = Keypad.__proto__ || (0, _getPrototypeOf2.default)(Keypad)).call.apply(_ref2, [this].concat(args))), _this), _this.state = {
      animate: false
    }, _this.playSound = function (e) {
      var _this$props = _this.props,
          label = _this$props.label,
          soundPath = _this$props.soundPath;

      if (e.keyCode === mapKeyCodes[label]) {
        // Start animation
        _this.setState({ animate: true });

        // Wait for animation to complete before closing
        setTimeout(function () {
          _this.setState({ animate: false });
        }, 500);

        var audio = document.getElementById(soundPath);
        audio.play();
      }
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(Keypad, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      window.addEventListener('keydown', this.playSound);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      window.removeEventListener('keydown', this.playSound);
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          label = _props.label,
          subLabel = _props.subLabel,
          soundPath = _props.soundPath,
          colorOne = _props.colorOne,
          colorTwo = _props.colorTwo,
          loop = _props.loop;

      return _react2.default.createElement(Key, {
        animate: this.state.animate,
        colorOne: colorOne,
        colorTwo: colorTwo, __source: {
          fileName: _jsxFileName,
          lineNumber: 110
        }
      }, _react2.default.createElement('audio', {
        className: 'sounds',
        id: soundPath,
        src: basePath + soundPath,
        onKeyDown: this.playSound,
        loop: loop || false, __source: {
          fileName: _jsxFileName,
          lineNumber: 114
        }
      }), _react2.default.createElement(Label, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 120
        }
      }, label), _react2.default.createElement(SubLabel, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 121
        }
      }, subLabel));
    }
  }]);

  return Keypad;
}(_react.PureComponent);

exports.default = Keypad;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvS2V5cGFkLmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiUHVyZUNvbXBvbmVudCIsInN0eWxlZCIsImtleWZyYW1lcyIsImJhc2VQYXRoIiwicGxheUFuaW1hdGlvbiIsImNvbG9yT25lIiwiY29sb3JUd28iLCJLZXkiLCJkaXYiLCJwcm9wcyIsImFuaW1hdGUiLCJMYWJlbCIsIlN1YkxhYmVsIiwibWFwS2V5Q29kZXMiLCJxIiwidyIsImUiLCJyIiwidCIsInkiLCJ1IiwiaSIsIm8iLCJwIiwiYSIsInMiLCJkIiwiZiIsImciLCJoIiwiaiIsImsiLCJsIiwiS2V5cGFkIiwic3RhdGUiLCJwbGF5U291bmQiLCJsYWJlbCIsInNvdW5kUGF0aCIsImtleUNvZGUiLCJzZXRTdGF0ZSIsInNldFRpbWVvdXQiLCJhdWRpbyIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJwbGF5Iiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJzdWJMYWJlbCIsImxvb3AiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBUzs7OztBQUNoQixBQUFPLEFBQVU7Ozs7Ozs7Ozs7Ozs7QUFFakIsSUFBSSxXQUFKLEFBQWU7O0FBRWYsSUFBTSxnQkFBZ0IsU0FBaEIsQUFBZ0Isb0JBQUE7TUFBQSxBQUFHLGdCQUFILEFBQUc7TUFBSCxBQUFhLGdCQUFiLEFBQWE7U0FBYixBQUE0QixrREFFMUIsV0FBQSxBQUFXLFdBRmIsQUFFd0IsV0FLdEIsV0FBQSxBQUFXLFdBUGIsQUFPd0IsV0FLdkIsV0FBQSxBQUFXLFdBWlosQUFZdUI7QUFaN0M7O0FBa0JBLElBQU0saUNBQUEsQUFBYSxzQkFHRyxpQkFBQTtTQUFTLE1BQUEsQUFBTSxXQUFXLE1BQWpCLEFBQXVCLFdBQWhDLEFBQTJDO0FBSDNELENBQU0sRUFVRyxpQkFBQTtTQUFTLE1BQUEsQUFBTSxVQUFhLGNBQW5CLEFBQW1CLEFBQWMseUJBQTFDLEFBQWdFO0FBVi9FLEFBQU07O0FBYU4sSUFBTSxRQUFRLDJCQUFSLEFBQWUsSUFBckI7O0FBT0EsSUFBTSxXQUFXLDJCQUFYLEFBQWtCLElBQXhCOztBQU9BLElBQU07S0FBYyxBQUNmLEFBQ0g7S0FGa0IsQUFFZixBQUNIO0tBSGtCLEFBR2YsQUFDSDtLQUprQixBQUlmLEFBQ0g7S0FMa0IsQUFLZixBQUNIO0tBTmtCLEFBTWYsQUFDSDtLQVBrQixBQU9mLEFBQ0g7S0FSa0IsQUFRZixBQUNIO0tBVGtCLEFBU2YsQUFDSDtLQVZrQixBQVVmLEFBQ0g7S0FYa0IsQUFXZixBQUNIO0tBWmtCLEFBWWYsQUFDSDtLQWJrQixBQWFmLEFBQ0g7S0Fka0IsQUFjZixBQUNIO0tBZmtCLEFBZWYsQUFDSDtLQWhCa0IsQUFnQmYsQUFDSDtLQWpCa0IsQUFpQmYsQUFDSDtLQWxCa0IsQUFrQmYsQUFDSDtLQW5Ca0IsQUFtQmYsQUFDSDtLQXBCa0IsQUFvQmYsQUFDSDtLQXJCa0IsQUFxQmYsQUFDSDtLQXRCa0IsQUFzQmYsQUFDSDtLQXZCa0IsQUF1QmYsQUFDSDtPQXhCRixBQUFvQixBQXdCYjtBQXhCYSxBQUNsQjs7SSxBQTBCbUI7Ozs7Ozs7Ozs7Ozs7OzhNLEFBQ25CO2VBQVEsQUFDRyxBO0FBREgsQUFDTixhQVdGLEEsWUFBWSxVQUFBLEFBQUMsR0FBTTt3QkFDWSxNQURaLEFBQ2lCO1VBRGpCLEFBQ1Qsb0JBRFMsQUFDVDtVQURTLEFBQ0Ysd0JBREUsQUFDRixBQUNmOztVQUFJLEVBQUEsQUFBRSxZQUFZLFlBQWxCLEFBQWtCLEFBQVksUUFBUSxBQUNwQztBQUNBO2NBQUEsQUFBSyxTQUFTLEVBQUUsU0FBaEIsQUFBYyxBQUFXLEFBRXpCOztBQUNBO21CQUFXLFlBQU0sQUFDZjtnQkFBQSxBQUFLLFNBQVMsRUFBRSxTQUFoQixBQUFjLEFBQVcsQUFDMUI7QUFGRCxXQUFBLEFBRUcsQUFFSDs7WUFBTSxRQUFRLFNBQUEsQUFBUyxlQUF2QixBQUFjLEFBQXdCLEFBQ3RDO2NBQUEsQUFBTSxBQUNQO0FBQ0Y7QTs7Ozs7d0NBdEJvQixBQUNuQjthQUFBLEFBQU8saUJBQVAsQUFBd0IsV0FBVyxLQUFuQyxBQUF3QyxBQUN6Qzs7OzsyQ0FFdUIsQUFDdEI7YUFBQSxBQUFPLG9CQUFQLEFBQTJCLFdBQVcsS0FBdEMsQUFBMkMsQUFDNUM7Ozs7NkJBa0JRO21CQUMwRCxLQUQxRCxBQUMrRDtVQUQvRCxBQUNDLGVBREQsQUFDQztVQURELEFBQ1Esa0JBRFIsQUFDUTtVQURSLEFBQ2tCLG1CQURsQixBQUNrQjtVQURsQixBQUM2QixrQkFEN0IsQUFDNkI7VUFEN0IsQUFDdUMsa0JBRHZDLEFBQ3VDO1VBRHZDLEFBQ2lELGNBRGpELEFBQ2lELEFBQ3hEOzs2QkFDRyxjQUFEO2lCQUNXLEtBQUEsQUFBSyxNQURoQixBQUNzQixBQUNwQjtrQkFGRixBQUVZLEFBQ1Y7a0JBSEYsQUFHWTtvQkFIWjtzQkFBQSxBQUlFO0FBSkY7QUFDRSxPQURGO21CQUlFLEFBQ1ksQUFDVjtZQUZGLEFBRU0sQUFDSjthQUFLLFdBSFAsQUFHZ0IsQUFDZDttQkFBVyxLQUpiLEFBSWtCLEFBQ2hCO2NBQU0sUUFMUixBQUtnQjtvQkFMaEI7c0JBSkYsQUFJRSxBQU1BO0FBTkE7QUFDRSwwQkFLRCxjQUFEOztvQkFBQTtzQkFBQSxBQUFRO0FBQVI7QUFBQSxTQVZGLEFBVUUsQUFDQSx3QkFBQyxjQUFEOztvQkFBQTtzQkFBQSxBQUFXO0FBQVg7QUFBQSxTQVpKLEFBQ0UsQUFXRSxBQUdMOzs7OztBQTlDaUMsQTs7a0JBQWYsQSIsImZpbGUiOiJLZXlwYWQuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2tyaXN0YS5nb3JhbGN6eWsvUHJvamVjdHMvZXhwZXJpbWVudHMvc291bmRib2FyZC1kZW1vIn0=