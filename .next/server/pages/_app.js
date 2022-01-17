/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./context/ThemeContext.js":
/*!*********************************!*\
  !*** ./context/ThemeContext.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"themes\": () => (/* binding */ themes),\n/* harmony export */   \"ThemeContext\": () => (/* binding */ ThemeContext)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\nconst themes = {\n    light: {\n        type: 'light',\n        fontColor: '#2b2c38',\n        background: '#f4f7f9'\n    },\n    dark: {\n        type: 'dark',\n        fontColor: '#dcdcdc',\n        background: '#2b2c38'\n    }\n};\nconst ThemeContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)({\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb250ZXh0L1RoZW1lQ29udGV4dC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQXFDO0FBRTlCLEtBQUssQ0FBQ0MsTUFBTSxHQUFHLENBQUM7SUFDbkJDLEtBQUssRUFBRSxDQUFDO1FBQ1JDLElBQUksRUFBRSxDQUFPO1FBQ2JDLFNBQVMsRUFBRSxDQUFTO1FBQ3BCQyxVQUFVLEVBQUUsQ0FBUztJQUNyQixDQUFDO0lBQ0RDLElBQUksRUFBRSxDQUFDO1FBQ1BILElBQUksRUFBRSxDQUFNO1FBQ1pDLFNBQVMsRUFBRSxDQUFTO1FBQ3BCQyxVQUFVLEVBQUUsQ0FBUztJQUNyQixDQUFDO0FBQ0wsQ0FBQztBQUdNLEtBQUssQ0FBQ0UsWUFBWSxpQkFBR1Asb0RBQWEsQ0FBQyxDQUFDO0FBQUEsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3VkZW15c2VydmVybGVzc2Jsb2cvLi9jb250ZXh0L1RoZW1lQ29udGV4dC5qcz82NjM2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZUNvbnRleHQgfSBmcm9tICdyZWFjdCc7XHJcblxyXG5leHBvcnQgY29uc3QgdGhlbWVzID0ge1xyXG4gICAgbGlnaHQ6IHtcclxuICAgIHR5cGU6ICdsaWdodCcsXHJcbiAgICBmb250Q29sb3I6ICcjMmIyYzM4JyxcclxuICAgIGJhY2tncm91bmQ6ICcjZjRmN2Y5J1xyXG4gICAgfSxcclxuICAgIGRhcms6IHtcclxuICAgIHR5cGU6ICdkYXJrJyxcclxuICAgIGZvbnRDb2xvcjogJyNkY2RjZGMnLFxyXG4gICAgYmFja2dyb3VuZDogJyMyYjJjMzgnXHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5leHBvcnQgY29uc3QgVGhlbWVDb250ZXh0ID0gY3JlYXRlQ29udGV4dCh7fSk7Il0sIm5hbWVzIjpbImNyZWF0ZUNvbnRleHQiLCJ0aGVtZXMiLCJsaWdodCIsInR5cGUiLCJmb250Q29sb3IiLCJiYWNrZ3JvdW5kIiwiZGFyayIsIlRoZW1lQ29udGV4dCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./context/ThemeContext.js\n");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"react/jsx-runtime\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _providers_ThemeProvider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../providers/ThemeProvider */ \"./providers/ThemeProvider.js\");\n/* harmony import */ var _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/fontawesome-svg-core */ \"@fortawesome/fontawesome-svg-core\");\n/* harmony import */ var _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ \"@fortawesome/free-solid-svg-icons\");\n/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _fortawesome_fontawesome_svg_core_styles_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/fontawesome-svg-core/styles.css */ \"./node_modules/@fortawesome/fontawesome-svg-core/styles.css\");\n/* harmony import */ var _fortawesome_fontawesome_svg_core_styles_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_fontawesome_svg_core_styles_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.min.css */ \"./node_modules/bootstrap/dist/css/bootstrap.min.css\");\n/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var highlight_js_styles_darcula_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! highlight.js/styles/darcula.css */ \"./node_modules/highlight.js/styles/darcula.css\");\n/* harmony import */ var highlight_js_styles_darcula_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(highlight_js_styles_darcula_css__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var react_toggle_style_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-toggle/style.css */ \"./node_modules/react-toggle/style.css\");\n/* harmony import */ var react_toggle_style_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_toggle_style_css__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _styles_index_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../styles/index.scss */ \"./styles/index.scss\");\n/* harmony import */ var _styles_index_scss__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_styles_index_scss__WEBPACK_IMPORTED_MODULE_8__);\n\n\n // setup config\n // icons you want to import\n\n\n\n\n\n// add the imported icons\n_fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_2__.config.autoAddCss = false;\n_fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_2__.library.add(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__.faSun, _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__.faMoon, _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__.faList, _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__.faBorderAll, _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__.faSortNumericDown, _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__.faSortNumericUp);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (({ Component , pageProps  })=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_providers_ThemeProvider__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n        __source: {\n            fileName: \"C:\\\\Users\\\\janni\\\\source\\\\repos\\\\NextJS\\\\udemyserverlessblog\\\\pages\\\\_app.js\",\n            lineNumber: 29,\n            columnNumber: 5\n        },\n        __self: undefined,\n        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Component, {\n            ...pageProps,\n            __source: {\n                fileName: \"C:\\\\Users\\\\janni\\\\source\\\\repos\\\\NextJS\\\\udemyserverlessblog\\\\pages\\\\_app.js\",\n                lineNumber: 30,\n                columnNumber: 9\n            },\n            __self: undefined\n        })\n    }));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDc0Q7QUFDZSxDQUFlO0FBT3BCLENBQTJCO0FBWXRDO0FBQ1I7QUFDTDtBQUNUO0FBQ0Y7QUFkN0IsRUFBeUI7QUFDekJFLGdGQUFpQixHQUFHLEtBQUs7QUFDekJELDBFQUFXLENBQ1BFLG9FQUFLLEVBQ0xDLHFFQUFNLEVBQ05FLHFFQUFNLEVBQ05ELDBFQUFXLEVBQ1hFLGdGQUFpQixFQUNqQkMsOEVBQWU7QUFRbkIsaUVBQWdCLEVBQUNHLENBQUFBLFNBQVMsR0FBRUMsU0FBUyxHQUFDLHdFQUNqQ1osZ0VBQWE7Ozs7Ozs7dUZBQ1RXLFNBQVM7ZUFBS0MsU0FBUyIsInNvdXJjZXMiOlsid2VicGFjazovL3VkZW15c2VydmVybGVzc2Jsb2cvLi9wYWdlcy9fYXBwLmpzP2UwYWQiXSwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgVGhlbWVQcm92aWRlciBmcm9tICcuLi9wcm92aWRlcnMvVGhlbWVQcm92aWRlcic7XG5pbXBvcnQgeyBsaWJyYXJ5LCBjb25maWcgfSBmcm9tICdAZm9ydGF3ZXNvbWUvZm9udGF3ZXNvbWUtc3ZnLWNvcmUnOyAvLyBzZXR1cCBjb25maWdcbmltcG9ydCB7XG4gICAgZmFTdW4sXG4gICAgZmFNb29uLFxuICAgIGZhQm9yZGVyQWxsLFxuICAgIGZhTGlzdCxcbiAgICBmYVNvcnROdW1lcmljRG93bixcbiAgICBmYVNvcnROdW1lcmljVXAgfSBmcm9tICdAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMnOyAvLyBpY29ucyB5b3Ugd2FudCB0byBpbXBvcnRcblxuLy8gYWRkIHRoZSBpbXBvcnRlZCBpY29uc1xuY29uZmlnLmF1dG9BZGRDc3MgPSBmYWxzZTtcbmxpYnJhcnkuYWRkKFxuICAgIGZhU3VuLFxuICAgIGZhTW9vbixcbiAgICBmYUxpc3QsXG4gICAgZmFCb3JkZXJBbGwsXG4gICAgZmFTb3J0TnVtZXJpY0Rvd24sXG4gICAgZmFTb3J0TnVtZXJpY1VwKTtcblxuaW1wb3J0ICdAZm9ydGF3ZXNvbWUvZm9udGF3ZXNvbWUtc3ZnLWNvcmUvc3R5bGVzLmNzcyc7XG5pbXBvcnQgJ2Jvb3RzdHJhcC9kaXN0L2Nzcy9ib290c3RyYXAubWluLmNzcyc7XG5pbXBvcnQgJ2hpZ2hsaWdodC5qcy9zdHlsZXMvZGFyY3VsYS5jc3MnO1xuaW1wb3J0IFwicmVhY3QtdG9nZ2xlL3N0eWxlLmNzc1wiO1xuaW1wb3J0ICcuLi9zdHlsZXMvaW5kZXguc2Nzcyc7XG5cbmV4cG9ydCBkZWZhdWx0ICh7Q29tcG9uZW50LCBwYWdlUHJvcHN9KSA9PlxuICAgIDxUaGVtZVByb3ZpZGVyPlxuICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG4gICAgPC9UaGVtZVByb3ZpZGVyPiJdLCJuYW1lcyI6WyJUaGVtZVByb3ZpZGVyIiwibGlicmFyeSIsImNvbmZpZyIsImZhU3VuIiwiZmFNb29uIiwiZmFCb3JkZXJBbGwiLCJmYUxpc3QiLCJmYVNvcnROdW1lcmljRG93biIsImZhU29ydE51bWVyaWNVcCIsImF1dG9BZGRDc3MiLCJhZGQiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./providers/ThemeProvider.js":
/*!************************************!*\
  !*** ./providers/ThemeProvider.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"useTheme\": () => (/* binding */ useTheme),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"react/jsx-runtime\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var context_ThemeContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! context/ThemeContext */ \"./context/ThemeContext.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nconst ThemeProvider = ({ children  })=>{\n    const { 0: theme , 1: setTheme  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(context_ThemeContext__WEBPACK_IMPORTED_MODULE_1__.themes.light);\n    const toggleTheme = ()=>{\n        setTheme(theme === context_ThemeContext__WEBPACK_IMPORTED_MODULE_1__.themes.dark ? context_ThemeContext__WEBPACK_IMPORTED_MODULE_1__.themes.light : context_ThemeContext__WEBPACK_IMPORTED_MODULE_1__.themes.dark);\n    };\n    const themeAPI = (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(()=>{\n        return {\n            theme,\n            toggleTheme\n        };\n    }, [\n        theme,\n        toggleTheme\n    ]);\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(context_ThemeContext__WEBPACK_IMPORTED_MODULE_1__.ThemeContext.Provider, {\n        value: themeAPI,\n        __source: {\n            fileName: \"C:\\\\Users\\\\janni\\\\source\\\\repos\\\\NextJS\\\\udemyserverlessblog\\\\providers\\\\ThemeProvider.js\",\n            lineNumber: 22,\n            columnNumber: 5\n        },\n        __self: undefined,\n        children: children\n    }));\n};\nconst useTheme = ()=>(0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(context_ThemeContext__WEBPACK_IMPORTED_MODULE_1__.ThemeContext)\n;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ThemeProvider);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wcm92aWRlcnMvVGhlbWVQcm92aWRlci5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUEyRDtBQUNOO0FBRXJELEtBQUssQ0FBQ0ssYUFBYSxJQUFJLENBQUNDLENBQUFBLFFBQVEsR0FBQyxHQUFLLENBQUM7SUFDbkMsS0FBSyxNQUFFQyxLQUFLLE1BQUVDLFFBQVEsTUFBSU4sK0NBQVEsQ0FBQ0QsOERBQVk7SUFFL0MsS0FBSyxDQUFDUyxXQUFXLE9BQVMsQ0FBQztRQUMzQkYsUUFBUSxDQUFDRCxLQUFLLEtBQUtOLDZEQUFXLEdBQ3hCQSw4REFBWSxHQUNaQSw2REFBVztJQUVqQixDQUFDO0lBRUQsS0FBSyxDQUFDVyxRQUFRLEdBQUdSLDhDQUFPLEtBQU8sQ0FBQztRQUNoQyxNQUFNLENBQUMsQ0FBQztZQUNKRyxLQUFLO1lBQ0xHLFdBQVc7UUFDZixDQUFDO0lBQ0QsQ0FBQyxFQUFFLENBQUNIO1FBQUFBLEtBQUs7UUFBRUcsV0FBVztJQUFBLENBQUM7SUFFdkIsTUFBTSxzRUFDTFYsdUVBQXFCO1FBQUNjLEtBQUssRUFBRUYsUUFBUTs7Ozs7OztrQkFDakNOLFFBQVE7O0FBR2pCLENBQUM7QUFFTSxLQUFLLENBQUNTLFFBQVEsT0FBU1osaURBQVUsQ0FBQ0gsOERBQVk7O0FBRXJELGlFQUFlSyxhQUFhLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly91ZGVteXNlcnZlcmxlc3NibG9nLy4vcHJvdmlkZXJzL1RoZW1lUHJvdmlkZXIuanM/NjUwYyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBUaGVtZUNvbnRleHQsIHRoZW1lcyB9IGZyb20gJ2NvbnRleHQvVGhlbWVDb250ZXh0JztcclxuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUNvbnRleHQsIHVzZU1lbW8gfSBmcm9tICdyZWFjdCc7XHJcblxyXG5jb25zdCBUaGVtZVByb3ZpZGVyID0gKHtjaGlsZHJlbn0pID0+IHtcclxuICAgIGNvbnN0IFt0aGVtZSwgc2V0VGhlbWVdID0gdXNlU3RhdGUodGhlbWVzLmxpZ2h0KTtcclxuXHJcbiAgICBjb25zdCB0b2dnbGVUaGVtZSA9ICgpID0+IHtcclxuICAgIHNldFRoZW1lKHRoZW1lID09PSB0aGVtZXMuZGFya1xyXG4gICAgICAgID8gdGhlbWVzLmxpZ2h0XHJcbiAgICAgICAgOiB0aGVtZXMuZGFya1xyXG4gICAgKSAgIFxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHRoZW1lQVBJID0gdXNlTWVtbygoKSA9PiB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHRoZW1lLFxyXG4gICAgICAgIHRvZ2dsZVRoZW1lXHJcbiAgICB9XHJcbiAgICB9LCBbdGhlbWUsIHRvZ2dsZVRoZW1lXSlcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgPFRoZW1lQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17dGhlbWVBUEl9PlxyXG4gICAgICAgIHtjaGlsZHJlbn1cclxuICAgIDwvVGhlbWVDb250ZXh0LlByb3ZpZGVyPlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgdXNlVGhlbWUgPSAoKSA9PiB1c2VDb250ZXh0KFRoZW1lQ29udGV4dCk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUaGVtZVByb3ZpZGVyOyJdLCJuYW1lcyI6WyJUaGVtZUNvbnRleHQiLCJ0aGVtZXMiLCJ1c2VTdGF0ZSIsInVzZUNvbnRleHQiLCJ1c2VNZW1vIiwiVGhlbWVQcm92aWRlciIsImNoaWxkcmVuIiwidGhlbWUiLCJzZXRUaGVtZSIsImxpZ2h0IiwidG9nZ2xlVGhlbWUiLCJkYXJrIiwidGhlbWVBUEkiLCJQcm92aWRlciIsInZhbHVlIiwidXNlVGhlbWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./providers/ThemeProvider.js\n");

/***/ }),

/***/ "./node_modules/@fortawesome/fontawesome-svg-core/styles.css":
/*!*******************************************************************!*\
  !*** ./node_modules/@fortawesome/fontawesome-svg-core/styles.css ***!
  \*******************************************************************/
/***/ (() => {



/***/ }),

/***/ "./node_modules/bootstrap/dist/css/bootstrap.min.css":
/*!***********************************************************!*\
  !*** ./node_modules/bootstrap/dist/css/bootstrap.min.css ***!
  \***********************************************************/
/***/ (() => {



/***/ }),

/***/ "./node_modules/highlight.js/styles/darcula.css":
/*!******************************************************!*\
  !*** ./node_modules/highlight.js/styles/darcula.css ***!
  \******************************************************/
/***/ (() => {



/***/ }),

/***/ "./node_modules/react-toggle/style.css":
/*!*********************************************!*\
  !*** ./node_modules/react-toggle/style.css ***!
  \*********************************************/
/***/ (() => {



/***/ }),

/***/ "./styles/index.scss":
/*!***************************!*\
  !*** ./styles/index.scss ***!
  \***************************/
/***/ (() => {



/***/ }),

/***/ "@fortawesome/fontawesome-svg-core":
/*!****************************************************!*\
  !*** external "@fortawesome/fontawesome-svg-core" ***!
  \****************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@fortawesome/fontawesome-svg-core");

/***/ }),

/***/ "@fortawesome/free-solid-svg-icons":
/*!****************************************************!*\
  !*** external "@fortawesome/free-solid-svg-icons" ***!
  \****************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@fortawesome/free-solid-svg-icons");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-runtime":
/*!************************************!*\
  !*** external "react/jsx-runtime" ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.js"));
module.exports = __webpack_exports__;

})();