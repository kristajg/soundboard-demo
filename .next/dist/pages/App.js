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

var _Keypad = require('../components/Keypad');

var _Keypad2 = _interopRequireDefault(_Keypad);

var _Spacebar = require('../components/Spacebar');

var _Spacebar2 = _interopRequireDefault(_Spacebar);

var _Divider = require('../components/Divider');

var _Divider2 = _interopRequireDefault(_Divider);

var _Volume = require('../components/Volume');

var _Volume2 = _interopRequireDefault(_Volume);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/krista.goralczyk/Projects/experiments/soundboard-demo/pages/App.js';

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n  0% {\n    opacity: 0;\n    top: 30px;\n  }\n  50% {\n    top: -15px;\n  }\n  100% {\n    opacity: 1;\n    top: 0px;\n  }\n'], ['\n  0% {\n    opacity: 0;\n    top: 30px;\n  }\n  50% {\n    top: -15px;\n  }\n  100% {\n    opacity: 1;\n    top: 0px;\n  }\n']),
    _templateObject2 = (0, _taggedTemplateLiteral3.default)(['\n  animation: ', ' 1s ease-in-out;\n  position: relative;\n'], ['\n  animation: ', ' 1s ease-in-out;\n  position: relative;\n']),
    _templateObject3 = (0, _taggedTemplateLiteral3.default)(['\n  font-size: 42px;\n  margin-top: 0;\n  padding-top: 50px;\n  text-align: center;\n  color: #fff;\n'], ['\n  font-size: 42px;\n  margin-top: 0;\n  padding-top: 50px;\n  text-align: center;\n  color: #fff;\n']),
    _templateObject4 = (0, _taggedTemplateLiteral3.default)(['\n  text-align: center;\n  padding-top: 30px;\n'], ['\n  text-align: center;\n  padding-top: 30px;\n']),
    _templateObject5 = (0, _taggedTemplateLiteral3.default)(['\n  height: 90px;\n'], ['\n  height: 90px;\n']);

var fadeIn = (0, _styledComponents.keyframes)(_templateObject);

var Container = _styledComponents2.default.div(_templateObject2, fadeIn);

var Title = _styledComponents2.default.h1(_templateObject3);

var MusicContainer = _styledComponents2.default.div(_templateObject4);

var KeyboardRow = _styledComponents2.default.div(_templateObject5);

// Row one: loops
var rowOne = [{
  label: '1',
  subLabel: 'Chip',
  file: 'loops/chiptune.wav',
  loop: true
}, {
  label: '2',
  subLabel: 'Synth',
  file: 'loops/synth.wav',
  loop: true
}, {
  label: '3',
  subLabel: 'Trap',
  file: 'loops/trap.wav',
  loop: true
}, {
  label: '4',
  subLabel: 'Rap Bass',
  file: 'loops/hardcore.wav',
  loop: true
}];

// Row two: lofi drums
var rowTwo = [{
  label: 'q',
  subLabel: 'Hat 1',
  file: 'drums/lofi/hat01.wav'
}, {
  label: 'w',
  subLabel: 'Hat 2',
  file: 'drums/lofi/hat02.wav'
}, {
  label: 'e',
  subLabel: 'Hat 3',
  file: 'drums/lofi/hat03.wav'
}, {
  label: 'r',
  subLabel: 'Kick 1',
  file: 'drums/lofi/kick01.wav'
}, {
  label: 't',
  subLabel: 'Kick 2',
  file: 'drums/lofi/kick02.wav'
}, {
  label: 'y',
  subLabel: 'Kick 3',
  file: 'drums/lofi/kick03.wav'
}, {
  label: 'u',
  subLabel: 'Kick 4',
  file: 'drums/lofi/kick04.wav'
}, {
  label: 'i',
  subLabel: 'Snare 1',
  file: 'drums/lofi/snare01.wav'
}, {
  label: 'o',
  subLabel: 'Snare 2',
  file: 'drums/lofi/snare02.wav'
}, {
  label: 'p',
  subLabel: 'Snare 1',
  file: 'drums/lofi/snare03.wav'
}];

// Row three: psycore drums
var rowThree = [{
  label: 'a',
  subLabel: 'Distorted',
  file: 'drums/psycore/psycore-distorted-hit.wav'
}, {
  label: 's',
  subLabel: 'Filtered',
  file: 'drums/psycore/psycore-filtered-hit.wav'
}, {
  label: 'd',
  subLabel: 'Buzz Kick',
  file: 'drums/psycore/psycore-buzzinkick.wav'
}, {
  label: 'f',
  subLabel: 'Fuzzy Bass',
  file: 'drums/psycore/psycore-kick-buzzy.wav'
}, {
  label: 'j',
  subLabel: 'Bass',
  file: 'drums/psycore/psycore-kick-hardcore-dark.wav'
}, {
  label: 'k',
  subLabel: 'Fuzzy Kick',
  file: 'drums/psycore/psycore-kick-mutilated.wav'
}, {
  label: 'l',
  subLabel: 'Kick Snare',
  file: 'drums/psycore/psycore-kick-snare.wav'
}, {
  label: ';',
  subLabel: 'Snare',
  file: 'drums/psycore/psycore-snare.wav'
}];

var _class = function (_PureComponent) {
  (0, _inherits3.default)(_class, _PureComponent);

  function _class() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, _class);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = _class.__proto__ || (0, _getPrototypeOf2.default)(_class)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      volume: 0.7
    }, _this.changeVolume = function (e, value) {
      var sounds = document.getElementsByClassName('sounds');
      for (var i = 0; i < sounds.length; i++) {
        sounds[i].volume = value;
      }_this.setState({ volume: value });
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(_class, [{
    key: 'render',
    value: function render() {
      var volume = this.state.volume;

      return _react2.default.createElement(Container, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 184
        }
      }, _react2.default.createElement(Title, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 185
        }
      }, 'Demo Sound Board'), _react2.default.createElement(MusicContainer, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 186
        }
      }, _react2.default.createElement(KeyboardRow, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 188
        }
      }, rowOne.map(function (obj) {
        return _react2.default.createElement(_Keypad2.default, {
          key: obj.label,
          label: obj.label,
          subLabel: obj.subLabel,
          soundPath: obj.file,
          loop: obj.loop,
          colorOne: '#9affe7',
          colorTwo: '#e79aff', __source: {
            fileName: _jsxFileName,
            lineNumber: 189
          }
        });
      })), _react2.default.createElement(_Divider2.default, { label: 'Loops', __source: {
          fileName: _jsxFileName,
          lineNumber: 199
        }
      }), _react2.default.createElement(KeyboardRow, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 202
        }
      }, rowTwo.map(function (obj) {
        return _react2.default.createElement(_Keypad2.default, {
          key: obj.label,
          label: obj.label,
          subLabel: obj.subLabel,
          soundPath: obj.file,
          colorOne: '#e79aff',
          colorTwo: '#9affe7', __source: {
            fileName: _jsxFileName,
            lineNumber: 203
          }
        });
      })), _react2.default.createElement(_Divider2.default, { label: 'Lo-Fi Drums', __source: {
          fileName: _jsxFileName,
          lineNumber: 212
        }
      }), _react2.default.createElement(KeyboardRow, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 215
        }
      }, rowThree.map(function (obj) {
        return _react2.default.createElement(_Keypad2.default, {
          key: obj.label,
          label: obj.label,
          subLabel: obj.subLabel,
          soundPath: obj.file, __source: {
            fileName: _jsxFileName,
            lineNumber: 216
          }
        });
      })), _react2.default.createElement(_Divider2.default, { label: 'Psycore Drums', __source: {
          fileName: _jsxFileName,
          lineNumber: 223
        }
      }), _react2.default.createElement(_Spacebar2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 226
        }
      }), _react2.default.createElement(_Volume2.default, {
        volume: volume,
        changeVolume: this.changeVolume, __source: {
          fileName: _jsxFileName,
          lineNumber: 227
        }
      })));
    }
  }]);

  return _class;
}(_react.PureComponent);

exports.default = _class;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL0FwcC5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIlB1cmVDb21wb25lbnQiLCJzdHlsZWQiLCJrZXlmcmFtZXMiLCJLZXlwYWQiLCJTcGFjZWJhciIsIkRpdmlkZXIiLCJWb2x1bWUiLCJmYWRlSW4iLCJDb250YWluZXIiLCJkaXYiLCJUaXRsZSIsImgxIiwiTXVzaWNDb250YWluZXIiLCJLZXlib2FyZFJvdyIsInJvd09uZSIsImxhYmVsIiwic3ViTGFiZWwiLCJmaWxlIiwibG9vcCIsInJvd1R3byIsInJvd1RocmVlIiwic3RhdGUiLCJ2b2x1bWUiLCJjaGFuZ2VWb2x1bWUiLCJlIiwidmFsdWUiLCJzb3VuZHMiLCJkb2N1bWVudCIsImdldEVsZW1lbnRzQnlDbGFzc05hbWUiLCJpIiwibGVuZ3RoIiwic2V0U3RhdGUiLCJtYXAiLCJvYmoiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBUzs7OztBQUNoQixBQUFPLEFBQVU7Ozs7QUFDakIsQUFBTyxBQUFZOzs7O0FBQ25CLEFBQU8sQUFBYzs7OztBQUNyQixBQUFPLEFBQWE7Ozs7QUFDcEIsQUFBTyxBQUFZOzs7Ozs7Ozs7Ozs7OztBQUVuQixJQUFNLFNBQUEsQUFBUyxpQ0FBZjs7QUFjQSxJQUFNLFlBQVksMkJBQVosQUFBbUIsc0JBQXpCLEFBQU0sQUFDUzs7QUFJZixJQUFNLFFBQVEsMkJBQVIsQUFBZSxHQUFyQjs7QUFRQSxJQUFNLGlCQUFpQiwyQkFBakIsQUFBd0IsSUFBOUI7O0FBS0EsSUFBTSxjQUFjLDJCQUFkLEFBQXFCLElBQTNCOztBQUlBO0FBQ0EsSUFBTTtTQUNKLEFBQ1MsQUFDUDtZQUZGLEFBRVksQUFDVjtRQUhGLEFBR1EsQUFDTjtRQUxXLEFBQ2IsQUFJUTtBQUpSLEFBQ0UsQ0FGVztTQU9iLEFBQ1MsQUFDUDtZQUZGLEFBRVksQUFDVjtRQUhGLEFBR1EsQUFDTjtRQVhXLEFBT2IsQUFJUTtBQUpSLEFBQ0U7U0FLRixB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