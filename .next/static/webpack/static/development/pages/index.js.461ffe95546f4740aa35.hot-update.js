webpackHotUpdate("static/development/pages/index.js",{

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

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }




function Playlist(props) {
  var playlist = props.data.categories[0].playlist;
  console.log(props.data);
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "Playlist",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, playlist.map(function (item) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Media_jsx__WEBPACK_IMPORTED_MODULE_1__["default"], _extends({}, item, {
      key: item.id,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11
      },
      __self: this
    }));
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (Playlist);

/***/ })

})
//# sourceMappingURL=index.js.461ffe95546f4740aa35.hot-update.js.map