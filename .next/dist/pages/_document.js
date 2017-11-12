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

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _document = require('next/dist/server/document.js');

var _document2 = _interopRequireDefault(_document);

var _server = require('styled-jsx/server');

var _server2 = _interopRequireDefault(_server);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/krista.goralczyk/Projects/experiments/soundboard-demo/pages/_document.js?entry';


var MyDocument = function (_Document) {
  (0, _inherits3.default)(MyDocument, _Document);

  function MyDocument() {
    (0, _classCallCheck3.default)(this, MyDocument);

    return (0, _possibleConstructorReturn3.default)(this, (MyDocument.__proto__ || (0, _getPrototypeOf2.default)(MyDocument)).apply(this, arguments));
  }

  (0, _createClass3.default)(MyDocument, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement('html', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        }
      }, _react2.default.createElement(_document.Head, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        }
      }, _react2.default.createElement('style', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        }
      }, 'body { margin: 0; background-color: #00bfff; font-family: Roboto, sans-serif; } /* custom! */')), _react2.default.createElement('body', { className: 'custom_class', __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        }
      }, this.props.customValue, _react2.default.createElement(_document.Main, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        }
      }), _react2.default.createElement(_document.NextScript, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        }
      })));
    }
  }], [{
    key: 'getInitialProps',
    value: function getInitialProps(_ref) {
      var renderPage = _ref.renderPage;

      var _renderPage = renderPage(),
          html = _renderPage.html,
          head = _renderPage.head,
          errorHtml = _renderPage.errorHtml,
          chunks = _renderPage.chunks;

      var styles = (0, _server2.default)();
      return { html: html, head: head, errorHtml: errorHtml, chunks: chunks, styles: styles };
    }
  }]);

  return MyDocument;
}(_document2.default);

exports.default = MyDocument;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL19kb2N1bWVudC5qcyJdLCJuYW1lcyI6WyJEb2N1bWVudCIsIkhlYWQiLCJNYWluIiwiTmV4dFNjcmlwdCIsImZsdXNoIiwiTXlEb2N1bWVudCIsInByb3BzIiwiY3VzdG9tVmFsdWUiLCJyZW5kZXJQYWdlIiwiaHRtbCIsImhlYWQiLCJlcnJvckh0bWwiLCJjaHVua3MiLCJzdHlsZXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBWSxBQUFNLEFBQU07Ozs7QUFDL0IsQUFBTzs7Ozs7Ozs7O0lBRWMsQTs7Ozs7Ozs7Ozs7NkJBT1YsQUFDUDs2QkFDRSxjQUFBOztvQkFBQTtzQkFBQSxBQUNFO0FBREY7QUFBQSxPQUFBLGtCQUNFLEFBQUM7O29CQUFEO3NCQUFBLEFBQ0U7QUFERjtBQUFBLHlCQUNFLGNBQUE7O29CQUFBO3NCQUFBO0FBQUE7QUFBQSxTQUZKLEFBQ0UsQUFDRSxBQUVGLG1IQUFBLGNBQUEsVUFBTSxXQUFOLEFBQWdCO29CQUFoQjtzQkFBQSxBQUNHO0FBREg7Y0FDRyxBQUFLLE1BRFIsQUFDYyxBQUNaLDZCQUFBLEFBQUM7O29CQUFEO3NCQUZGLEFBRUUsQUFDQTtBQURBO0FBQUEsMEJBQ0EsQUFBQzs7b0JBQUQ7c0JBUk4sQUFDRSxBQUlFLEFBR0UsQUFJUDtBQUpPO0FBQUE7Ozs7MENBZitCO1VBQWQsQUFBYyxrQkFBZCxBQUFjOzt3QkFBQSxBQUNLO1VBREwsQUFDN0IsbUJBRDZCLEFBQzdCO1VBRDZCLEFBQ3ZCLG1CQUR1QixBQUN2QjtVQUR1QixBQUNqQix3QkFEaUIsQUFDakI7VUFEaUIsQUFDTixxQkFETSxBQUNOLEFBQy9COztVQUFNLFNBQU4sQUFBZSxBQUNmO2FBQU8sRUFBRSxNQUFGLE1BQVEsTUFBUixNQUFjLFdBQWQsV0FBeUIsUUFBekIsUUFBaUMsUUFBeEMsQUFBTyxBQUNSOzs7OztBQUxxQyxBOztrQkFBbkIsQSIsImZpbGUiOiJfZG9jdW1lbnQuanM/ZW50cnkiLCJzb3VyY2VSb290IjoiL1VzZXJzL2tyaXN0YS5nb3JhbGN6eWsvUHJvamVjdHMvZXhwZXJpbWVudHMvc291bmRib2FyZC1kZW1vIn0=