"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 3936:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./providers/ThemeProvider.js + 1 modules
var ThemeProvider = __webpack_require__(1348);
;// CONCATENATED MODULE: external "@fortawesome/fontawesome-svg-core"
const fontawesome_svg_core_namespaceObject = require("@fortawesome/fontawesome-svg-core");
;// CONCATENATED MODULE: external "@fortawesome/free-solid-svg-icons"
const free_solid_svg_icons_namespaceObject = require("@fortawesome/free-solid-svg-icons");
;// CONCATENATED MODULE: ./pages/_app.js


 // setup config
 // icons you want to import





// add the imported icons
fontawesome_svg_core_namespaceObject.config.autoAddCss = false;
fontawesome_svg_core_namespaceObject.library.add(free_solid_svg_icons_namespaceObject.faSun, free_solid_svg_icons_namespaceObject.faMoon, free_solid_svg_icons_namespaceObject.faList, free_solid_svg_icons_namespaceObject.faBorderAll, free_solid_svg_icons_namespaceObject.faSortNumericDown, free_solid_svg_icons_namespaceObject.faSortNumericUp);
/* harmony default export */ const _app = (({ Component , pageProps  })=>/*#__PURE__*/ jsx_runtime_.jsx(ThemeProvider/* default */.Z, {
        children: /*#__PURE__*/ jsx_runtime_.jsx(Component, {
            ...pageProps
        })
    }));


/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [348], () => (__webpack_exec__(3936)));
module.exports = __webpack_exports__;

})();