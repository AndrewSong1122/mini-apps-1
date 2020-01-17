/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./client/src/index.jsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./client/src/components/ConnectFour.jsx":
/*!***********************************************!*\
  !*** ./client/src/components/ConnectFour.jsx ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _GridCell_jsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GridCell.jsx */ \"./client/src/components/GridCell.jsx\");\n/* harmony import */ var _GridRow_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./GridRow.jsx */ \"./client/src/components/GridRow.jsx\");\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n\n\n\nvar ConnectFour =\n/*#__PURE__*/\nfunction (_React$Component) {\n  _inherits(ConnectFour, _React$Component);\n\n  function ConnectFour(props) {\n    var _this;\n\n    _classCallCheck(this, ConnectFour);\n\n    _this = _possibleConstructorReturn(this, _getPrototypeOf(ConnectFour).call(this, props));\n    _this.state = {\n      currentPlayer: 1,\n      // 0 = unoccupied space; 1 = yellow; 2 = red\n      occupiedSpaces: 0,\n      grid: [[0, 0, 0, 0, 0, 0], // start at grid[0][col.length-1] (each row in matrix is column of game grid)\n      [0, 0, 0, 0, 0, 0], //          grid[1][col.length-1] ... until grid[6][col.length-1]\n      [0, 0, 0, 0, 0, 0], //  then go grid[0][col.length-2] ... grid[6][col.length-2]\n      [0, 0, 0, 0, 0, 0], // build rows from left->right top-> (rotate matrix counter-clockwise)\n      [0, 0, 0, 0, 0, 0], // initialize with zeroes for empty spaces, when a piece is added then row[indexOf(0)] is changed\n      [0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0]]\n    };\n    return _this;\n  }\n\n  _createClass(ConnectFour, [{\n    key: \"rowArray\",\n    value: function rowArray(c) {\n      var out = [];\n\n      for (var r = 0; r < 7; r++) {\n        out.push({\n          value: this.state.grid[r][c],\n          column: r + ''\n        });\n      }\n\n      return out;\n    }\n  }, {\n    key: \"buildGrid\",\n    value: function buildGrid() {\n      var out = [];\n\n      for (var c = 5; c >= 0; c--) {\n        out.push(this.rowArray(c));\n      }\n\n      return out;\n    }\n  }, {\n    key: \"addPiece\",\n    value: function addPiece(col) {\n      var val = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.state.currentPlayer;\n      console.log('a column was clicked');\n      var grid = this.state.grid;\n      var occupiedSpaces = this.state.occupiedSpaces;\n\n      if (grid[col].indexOf(0) === -1) {\n        return;\n      }\n\n      grid[col][grid[col].indexOf(0)] = val;\n      var player = val === 1 ? 2 : 1;\n      occupiedSpaces++;\n      this.setState({\n        currentPlayer: player,\n        occupiedSpaces: occupiedSpaces,\n        grid: grid\n      }); // check for a winner\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var _this2 = this;\n\n      var grid = this.buildGrid();\n      return React.createElement(\"div\", {\n        className: \"grid\"\n      }, React.createElement(\"h1\", {\n        onClick: function onClick() {\n          console.log('header click');\n        }\n      }, \"Connect 4\"), grid.map(function (row) {\n        return React.createElement(_GridRow_jsx__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n          handleClick: _this2.addPiece.bind(_this2),\n          row: row\n        });\n      }));\n    }\n  }]);\n\n  return ConnectFour;\n}(React.Component);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (ConnectFour);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jbGllbnQvc3JjL2NvbXBvbmVudHMvQ29ubmVjdEZvdXIuanN4LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vY2xpZW50L3NyYy9jb21wb25lbnRzL0Nvbm5lY3RGb3VyLmpzeD9lOTFjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBHcmlkQ2VsbCBmcm9tICcuL0dyaWRDZWxsLmpzeCdcbmltcG9ydCBHcmlkUm93IGZyb20gJy4vR3JpZFJvdy5qc3gnXG5cbmNsYXNzIENvbm5lY3RGb3VyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG5cbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgY3VycmVudFBsYXllcjogMSwgLy8gMCA9IHVub2NjdXBpZWQgc3BhY2U7IDEgPSB5ZWxsb3c7IDIgPSByZWRcbiAgICAgIG9jY3VwaWVkU3BhY2VzOiAwLFxuICAgICAgZ3JpZDogW1swLCAwLCAwLCAwLCAwLCAwXSwgLy8gc3RhcnQgYXQgZ3JpZFswXVtjb2wubGVuZ3RoLTFdIChlYWNoIHJvdyBpbiBtYXRyaXggaXMgY29sdW1uIG9mIGdhbWUgZ3JpZClcbiAgICAgICAgICAgICBbMCwgMCwgMCwgMCwgMCwgMF0sIC8vICAgICAgICAgIGdyaWRbMV1bY29sLmxlbmd0aC0xXSAuLi4gdW50aWwgZ3JpZFs2XVtjb2wubGVuZ3RoLTFdXG4gICAgICAgICAgICAgWzAsIDAsIDAsIDAsIDAsIDBdLCAvLyAgdGhlbiBnbyBncmlkWzBdW2NvbC5sZW5ndGgtMl0gLi4uIGdyaWRbNl1bY29sLmxlbmd0aC0yXVxuICAgICAgICAgICAgIFswLCAwLCAwLCAwLCAwLCAwXSwgLy8gYnVpbGQgcm93cyBmcm9tIGxlZnQtPnJpZ2h0IHRvcC0+IChyb3RhdGUgbWF0cml4IGNvdW50ZXItY2xvY2t3aXNlKVxuICAgICAgICAgICAgIFswLCAwLCAwLCAwLCAwLCAwXSwgLy8gaW5pdGlhbGl6ZSB3aXRoIHplcm9lcyBmb3IgZW1wdHkgc3BhY2VzLCB3aGVuIGEgcGllY2UgaXMgYWRkZWQgdGhlbiByb3dbaW5kZXhPZigwKV0gaXMgY2hhbmdlZFxuICAgICAgICAgICAgIFswLCAwLCAwLCAwLCAwLCAwXSxcbiAgICAgICAgICAgICBbMCwgMCwgMCwgMCwgMCwgMF1dXG4gICAgfTtcbiAgfVxuXG4gIHJvd0FycmF5KGMpIHtcbiAgICB2YXIgb3V0ID0gW107XG4gICAgZm9yICh2YXIgciA9IDA7IHIgPCA3OyByKyspIHtcbiAgICAgIG91dC5wdXNoKHt2YWx1ZTogdGhpcy5zdGF0ZS5ncmlkW3JdW2NdLCBjb2x1bW46IHIrJyd9KTtcbiAgICB9XG4gICAgcmV0dXJuIG91dDtcbiAgfVxuXG4gIGJ1aWxkR3JpZCgpIHtcbiAgICB2YXIgb3V0ID0gW107XG4gICAgZm9yICh2YXIgYyA9IDU7IGMgPj0gMDsgYy0tKSB7XG4gICAgICBvdXQucHVzaCh0aGlzLnJvd0FycmF5KGMpKTtcbiAgICB9XG5cbiAgICByZXR1cm4gb3V0O1xuICB9XG5cbiAgYWRkUGllY2UoY29sLCB2YWwgPSB0aGlzLnN0YXRlLmN1cnJlbnRQbGF5ZXIpIHtcbiAgICBjb25zb2xlLmxvZygnYSBjb2x1bW4gd2FzIGNsaWNrZWQnKTtcbiAgICB2YXIgZ3JpZCA9IHRoaXMuc3RhdGUuZ3JpZDtcbiAgICB2YXIgb2NjdXBpZWRTcGFjZXMgPSB0aGlzLnN0YXRlLm9jY3VwaWVkU3BhY2VzO1xuICAgIGlmIChncmlkW2NvbF0uaW5kZXhPZigwKSA9PT0gLTEpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZ3JpZFtjb2xdW2dyaWRbY29sXS5pbmRleE9mKDApXSA9IHZhbDtcbiAgICB2YXIgcGxheWVyID0gKHZhbCA9PT0gMSkgPyAyIDogMTtcbiAgICBvY2N1cGllZFNwYWNlcysrO1xuXG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBjdXJyZW50UGxheWVyOiBwbGF5ZXIsXG4gICAgICBvY2N1cGllZFNwYWNlczogb2NjdXBpZWRTcGFjZXMsXG4gICAgICBncmlkOiBncmlkXG4gICAgfSk7XG5cbiAgICAvLyBjaGVjayBmb3IgYSB3aW5uZXJcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICB2YXIgZ3JpZCA9IHRoaXMuYnVpbGRHcmlkKCk7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZFwiPlxuICAgICAgICA8aDEgb25DbGljaz0geygpID0+IHtjb25zb2xlLmxvZygnaGVhZGVyIGNsaWNrJyl9fT5Db25uZWN0IDQ8L2gxPlxuICAgICAgICB7XG4gICAgICAgICAgZ3JpZC5tYXAocm93ID0+IDxHcmlkUm93IGhhbmRsZUNsaWNrPXt0aGlzLmFkZFBpZWNlLmJpbmQodGhpcyl9IHJvdz17cm93fSAvPilcbiAgICAgICAgfVxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBDb25uZWN0Rm91cjsiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUkE7QUFIQTtBQWNBO0FBQ0E7OztBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFPQTs7O0FBRUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFJQTs7OztBQWhFQTtBQUNBO0FBa0VBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./client/src/components/ConnectFour.jsx\n");

/***/ }),

/***/ "./client/src/components/GridCell.jsx":
/*!********************************************!*\
  !*** ./client/src/components/GridCell.jsx ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar GridCell = function GridCell(props) {\n  // <div class=\"box\" data-col={props.values.column}>|{props.values.value}|{props.values.column}|</div>\n  var handleClick = function handleClick() {\n    props.handleClick(props.values.column);\n  };\n\n  if (props.values.value === 1) {\n    return React.createElement(\"div\", {\n      className: \"space yellow\",\n      onClick: handleClick,\n      \"data-col\": props.values.column,\n      \"data-val\": props.values.value\n    }, \"o\");\n  } else if (props.values.value === 2) {\n    return React.createElement(\"div\", {\n      className: \"space red\",\n      onClick: handleClick,\n      \"data-col\": props.values.column,\n      \"data-val\": props.values.value\n    }, \"o\");\n  } else {\n    return React.createElement(\"div\", {\n      className: \"space\",\n      onClick: handleClick,\n      \"data-col\": props.values.column,\n      \"data-val\": props.values.value\n    }, \"o\");\n  }\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (GridCell);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jbGllbnQvc3JjL2NvbXBvbmVudHMvR3JpZENlbGwuanN4LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vY2xpZW50L3NyYy9jb21wb25lbnRzL0dyaWRDZWxsLmpzeD9mZTY3Il0sInNvdXJjZXNDb250ZW50IjpbInZhciBHcmlkQ2VsbCA9IChwcm9wcykgPT4ge1xuICAvLyA8ZGl2IGNsYXNzPVwiYm94XCIgZGF0YS1jb2w9e3Byb3BzLnZhbHVlcy5jb2x1bW59Pnx7cHJvcHMudmFsdWVzLnZhbHVlfXx7cHJvcHMudmFsdWVzLmNvbHVtbn18PC9kaXY+XG4gIHZhciBoYW5kbGVDbGljayA9IGZ1bmN0aW9uICgpIHtcbiAgICBwcm9wcy5oYW5kbGVDbGljayhwcm9wcy52YWx1ZXMuY29sdW1uKTtcbiAgfVxuXG4gIGlmIChwcm9wcy52YWx1ZXMudmFsdWUgPT09IDEpIHtcbiAgICByZXR1cm4gKDxkaXYgY2xhc3NOYW1lPVwic3BhY2UgeWVsbG93XCIgb25DbGljaz17aGFuZGxlQ2xpY2t9IGRhdGEtY29sPXtwcm9wcy52YWx1ZXMuY29sdW1ufSBkYXRhLXZhbD17cHJvcHMudmFsdWVzLnZhbHVlfT5vPC9kaXY+KTtcbiAgfSBlbHNlIGlmIChwcm9wcy52YWx1ZXMudmFsdWUgPT09IDIpIHtcbiAgICByZXR1cm4gKDxkaXYgY2xhc3NOYW1lPVwic3BhY2UgcmVkXCIgb25DbGljaz17aGFuZGxlQ2xpY2t9IGRhdGEtY29sPXtwcm9wcy52YWx1ZXMuY29sdW1ufSBkYXRhLXZhbD17cHJvcHMudmFsdWVzLnZhbHVlfT5vPC9kaXY+KTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gKDxkaXYgY2xhc3NOYW1lPVwic3BhY2VcIiBvbkNsaWNrPXtoYW5kbGVDbGlja30gZGF0YS1jb2w9e3Byb3BzLnZhbHVlcy5jb2x1bW59IGRhdGEtdmFsPXtwcm9wcy52YWx1ZXMudmFsdWV9Pm88L2Rpdj4pO1xuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBHcmlkQ2VsbDsiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./client/src/components/GridCell.jsx\n");

/***/ }),

/***/ "./client/src/components/GridRow.jsx":
/*!*******************************************!*\
  !*** ./client/src/components/GridRow.jsx ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _GridCell_jsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GridCell.jsx */ \"./client/src/components/GridCell.jsx\");\n\n\nvar GridRow = function GridRow(props) {\n  return React.createElement(\"div\", null, props.row.map(function (space) {\n    return React.createElement(_GridCell_jsx__WEBPACK_IMPORTED_MODULE_0__[\"default\"], {\n      handleClick: props.handleClick,\n      values: space\n    });\n  }));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (GridRow);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jbGllbnQvc3JjL2NvbXBvbmVudHMvR3JpZFJvdy5qc3guanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvc3JjL2NvbXBvbmVudHMvR3JpZFJvdy5qc3g/MGFlNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgR3JpZENlbGwgZnJvbSBcIi4vR3JpZENlbGwuanN4XCJcblxudmFyIEdyaWRSb3cgPSAocHJvcHMpID0+IChcbiAgPGRpdj5cbiAge3Byb3BzLnJvdy5tYXAoc3BhY2UgPT4gPEdyaWRDZWxsIGhhbmRsZUNsaWNrPXtwcm9wcy5oYW5kbGVDbGlja30gdmFsdWVzPXtzcGFjZX0vPil9XG4gICB7Lyoge3Byb3BzLnJvdy5tYXAoc3BhY2UgPT4gPGRpdiBjbGFzcz1cImJveFwiPnx7c3BhY2V9fDwvZGl2Pil9ICovfVxuICA8L2Rpdj5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IEdyaWRSb3c7Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRkE7QUFDQTtBQU1BIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./client/src/components/GridRow.jsx\n");

/***/ }),

/***/ "./client/src/index.jsx":
/*!******************************!*\
  !*** ./client/src/index.jsx ***!
  \******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_ConnectFour_jsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/ConnectFour.jsx */ \"./client/src/components/ConnectFour.jsx\");\n\nReactDOM.render(React.createElement(_components_ConnectFour_jsx__WEBPACK_IMPORTED_MODULE_0__[\"default\"], null), document.getElementById('app'));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jbGllbnQvc3JjL2luZGV4LmpzeC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2NsaWVudC9zcmMvaW5kZXguanN4P2QwMzAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IENvbm5lY3RGb3VyIGZyb20gJy4vY29tcG9uZW50cy9Db25uZWN0Rm91ci5qc3gnO1xuXG5SZWFjdERPTS5yZW5kZXIoPENvbm5lY3RGb3VyIC8+LCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXBwJykpO1xuXG4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUVBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./client/src/index.jsx\n");

/***/ })

/******/ });