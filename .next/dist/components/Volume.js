'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _taggedTemplateLiteral2 = require('babel-runtime/helpers/taggedTemplateLiteral');

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Slider = require('material-ui/Slider');

var _Slider2 = _interopRequireDefault(_Slider);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/krista.goralczyk/Projects/experiments/soundboard-demo/components/Volume.js';

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n  text-align: center;\n'], ['\n  text-align: center;\n']),
    _templateObject2 = (0, _taggedTemplateLiteral3.default)(['\n  font-size: 12px;\n  font-weight: 600;\n  color: #676767;\n'], ['\n  font-size: 12px;\n  font-weight: 600;\n  color: #676767;\n']);

var Container = _styledComponents2.default.div(_templateObject);

var Label = _styledComponents2.default.div(_templateObject2);

var Volume = function Volume(_ref) {
  var volume = _ref.volume,
      changeVolume = _ref.changeVolume;
  return _react2.default.createElement(Container, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    }
  }, _react2.default.createElement(_Slider2.default, {
    style: { width: '10%', marginLeft: '45%' },
    defaultValue: volume,
    value: volume,
    onChange: changeVolume,
    step: 0.1, __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    }
  }), _react2.default.createElement(Label, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    }
  }, 'Volume ', volume * 100 + '%'));
};

exports.default = Volume;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvVm9sdW1lLmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiUHVyZUNvbXBvbmVudCIsIlNsaWRlciIsInN0eWxlZCIsIkNvbnRhaW5lciIsImRpdiIsIkxhYmVsIiwiVm9sdW1lIiwidm9sdW1lIiwiY2hhbmdlVm9sdW1lIiwid2lkdGgiLCJtYXJnaW5MZWZ0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFTOzs7O0FBQ2hCLEFBQU87Ozs7QUFDUCxBQUFPOzs7Ozs7Ozs7OztBQUVQLElBQU0sWUFBWSwyQkFBWixBQUFtQixJQUF6Qjs7QUFJQSxJQUFNLFFBQVEsMkJBQVIsQUFBZSxJQUFyQjs7QUFNQSxJQUFNLFNBQVMsU0FBVCxBQUFTLGFBQUE7TUFBQSxBQUFHLGNBQUgsQUFBRztNQUFILEFBQVcsb0JBQVgsQUFBVzt5QkFDdkIsY0FBRDs7Z0JBQUE7a0JBQUEsQUFDRTtBQURGO0FBQUEsR0FBQSxrQkFDRSxBQUFDO1dBQ1EsRUFBRSxPQUFGLEFBQVMsT0FBTyxZQUR6QixBQUNTLEFBQTRCLEFBQ25DO2tCQUZGLEFBRWdCLEFBQ2Q7V0FIRixBQUdTLEFBQ1A7Y0FKRixBQUlZLEFBQ1Y7VUFMRixBQUtRO2dCQUxSO2tCQURGLEFBQ0UsQUFNQTtBQU5BO0FBQ0Usc0JBS0QsY0FBRDs7Z0JBQUE7a0JBQUE7QUFBQTtBQUFBLEtBQWtCLG9CQUFsQixBQUEyQixNQVJoQixBQUNiLEFBT0U7QUFSSixBQVlBOztrQkFBQSxBQUFlIiwiZmlsZSI6IlZvbHVtZS5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMva3Jpc3RhLmdvcmFsY3p5ay9Qcm9qZWN0cy9leHBlcmltZW50cy9zb3VuZGJvYXJkLWRlbW8ifQ==