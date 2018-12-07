webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _default; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _src_playlist_components_Playlist__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../src/playlist/components/Playlist */ "./src/playlist/components/Playlist.jsx");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../style.scss */ "./style.scss");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _src_api_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../src/api.json */ "./src/api.json");
var _src_api_json__WEBPACK_IMPORTED_MODULE_4___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../src/api.json */ "./src/api.json", 1);
var _jsxFileName = "/Users/Luis/Desktop/next-test/pages/index.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }







var _default =
/*#__PURE__*/
function (_React$Component) {
  _inherits(_default, _React$Component);

  function _default() {
    _classCallCheck(this, _default);

    return _possibleConstructorReturn(this, _getPrototypeOf(_default).apply(this, arguments));
  }

  _createClass(_default, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_playlist_components_Playlist__WEBPACK_IMPORTED_MODULE_2__["default"], {
        data: _src_api_json__WEBPACK_IMPORTED_MODULE_4__,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        },
        __self: this
      });
    }
  }]);

  return _default;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);


    (function (Component, route) {
      if(!Component) return
      if (false) {}
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/")
  
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/api.json":
/*!**********************!*\
  !*** ./src/api.json ***!
  \**********************/
/*! exports provided: categories, default */
/***/ (function(module) {

module.exports = {"categories":[{"id":1,"description":"Lo mejor de la semana","title":"Destacados","playlist":[{"title":"¿Qué es responsive Design?","author":"LeonidasEsteban","type":"video","cover":"./images/covers/responsive.jpg","src":"http://download.blender.org/peach/bigbuckbunny_movies/BigBuckBunny_320x180.mp4","id":1},{"title":"Cómo optimzar la carga de un website","author":"LeonidasEsteban","type":"video","cover":"./images/covers/optimizar.jpg","src":"http://peach.themazzone.com/durian/movies/sintel-1024-surround.mp4","id":2},{"title":"Qué es Bitcoin","author":"Yograterol","type":"video","cover":"./images/covers/bitcoin.jpg","src":"http://download.blender.org/peach/bigbuckbunny_movies/BigBuckBunny_320x180.mp4","id":3},{"title":"Que pasó con HTML5","author":"Freddier","type":"video","cover":"./images/covers/html5.jpg","src":"http://download.blender.org/peach/bigbuckbunny_movies/BigBuckBunny_320x180.mp4","id":4},{"title":"Lo mejor de Mejorando.la","author":"Cvander","type":"video","cover":"./images/covers/mejorandola.jpg","src":"http://download.blender.org/peach/bigbuckbunny_movies/BigBuckBunny_320x180.mp4","id":5}]},{"id":2,"description":"Lo mejor para concentrarte","title":"Para programar","playlist":[{"title":"One more time","author":"Daft Punk","type":"video","cover":"./images/covers/one-more-time.jpg","src":"http://download.blender.org/peach/bigbuckbunny_movies/BigBuckBunny_320x180.mp4","id":1},{"title":"Midnight City","author":"M83","type":"video","cover":"./images/covers/midnight.jpg","src":"http://download.blender.org/peach/bigbuckbunny_movies/BigBuckBunny_320x180.mp4","id":5},{"title":"Solar Sailer","author":"Daft Punk","type":"video","cover":"./images/covers/solar-sailer.jpg","src":"http://download.blender.org/peach/bigbuckbunny_movies/BigBuckBunny_320x180.mp4","id":2},{"title":"The social network","author":"The social network","type":"video","cover":"./images/covers/social.jpg","src":"http://download.blender.org/peach/bigbuckbunny_movies/BigBuckBunny_320x180.mp4","id":4},{"title":"No vaya a ser","author":"Pablo Alboran","type":"video","cover":"./images/covers/no-vaya-a-ser.jpg","src":"http://download.blender.org/peach/bigbuckbunny_movies/BigBuckBunny_320x180.mp4","id":3}]},{"id":3,"description":"Si no te queda de otra","title":"Regueton","playlist":[{"title":"Despacito","author":"Luis Fonsi","type":"video","cover":"./images/covers/despacito.jpg","src":"http://download.blender.org/peach/bigbuckbunny_movies/BigBuckBunny_320x180.mp4","id":1},{"title":"Echame la culpa","author":"Luis fonsi","type":"video","cover":"./images/covers/echame-la-culpa.jpg","src":"http://download.blender.org/peach/bigbuckbunny_movies/BigBuckBunny_320x180.mp4","id":3},{"title":"Mi Gente","author":"J Bavil","type":"video","cover":"./images/covers/mi-gente.jpg","src":"http://download.blender.org/peach/bigbuckbunny_movies/BigBuckBunny_320x180.mp4","id":2},{"title":"Felices los 4","author":"Maluma","type":"video","cover":"./images/covers/felices.jpg","src":"http://download.blender.org/peach/bigbuckbunny_movies/BigBuckBunny_320x180.mp4","id":4},{"title":"Me Rehúso","author":"Danny Ocean","type":"video","cover":"./images/covers/rehuso.jpg","src":"http://download.blender.org/peach/bigbuckbunny_movies/BigBuckBunny_320x180.mp4","id":5}]}]};

/***/ }),

/***/ "./src/playlist/components/Playlist.jsx":
/*!**********************************************!*\
  !*** ./src/playlist/components/Playlist.jsx ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Media_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Media.jsx */ "./src/playlist/components/Media.jsx");
var _jsxFileName = "/Users/Luis/Desktop/next-test/src/playlist/components/Playlist.jsx";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




var Playlist =
/*#__PURE__*/
function (_Component) {
  _inherits(Playlist, _Component);

  function Playlist() {
    _classCallCheck(this, Playlist);

    return _possibleConstructorReturn(this, _getPrototypeOf(Playlist).apply(this, arguments));
  }

  _createClass(Playlist, [{
    key: "render",
    value: function render() {
      var playlist = this.props.data.categories[0].playlist;
      console.log(this.props.data);
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "Playlist",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 9
        },
        __self: this
      }, playlist.map(function (item) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Media_jsx__WEBPACK_IMPORTED_MODULE_1__["default"], _extends({}, item, {
          key: item.id,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 12
          },
          __self: this
        }));
      }));
    }
  }]);

  return Playlist;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Playlist);

/***/ })

})
//# sourceMappingURL=index.js.bd371c0c240abee9c7e5.hot-update.js.map