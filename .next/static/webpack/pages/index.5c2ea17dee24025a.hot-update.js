"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/post.js":
/*!****************************!*\
  !*** ./components/post.js ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Post; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _context_globalContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../context/globalContext */ \"./context/globalContext.js\");\n\n\n\n\nvar _s = $RefreshSig$();\nfunction Post(param) {\n    var post = param.post;\n    _s();\n    var ref = (0,_context_globalContext__WEBPACK_IMPORTED_MODULE_3__.useGlobal)(), darkMode = ref.darkMode, toggleDarkMode = ref.toggleDarkMode;\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        className: darkMode ? \"flex flex-col xl:w-1/3 w-11/12 lg:w-2/3 bg-slate-400 justify-center items-center h-fit mt-10 rounded-md border border-slate-200 lg:p-3 lg:m-10\" : \"flex flex-col xl:w-1/3 w-11/12 lg:w-2/3 bg-slate-100 justify-center items-center h-fit mt-10 rounded-md border border-slate-300 lg:p-3 lg:m-10\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-col w-full items-center justify center\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        alt: \"Image for \" + post.frontmatter.slug,\n                        className: \"rounded-md w-11/12 mt-5\",\n                        src: post.frontmatter.cover_image\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\DCM\\\\Desktop\\\\Coding\\\\MyProjects\\\\Next\\\\Blog-Personal FULL\\\\Personal-Blog\\\\components\\\\post.js\",\n                        lineNumber: 17,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: \"font-semibold\",\n                        children: post.frontmatter.title\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\DCM\\\\Desktop\\\\Coding\\\\MyProjects\\\\Next\\\\Blog-Personal FULL\\\\Personal-Blog\\\\components\\\\post.js\",\n                        lineNumber: 22,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\DCM\\\\Desktop\\\\Coding\\\\MyProjects\\\\Next\\\\Blog-Personal FULL\\\\Personal-Blog\\\\components\\\\post.js\",\n                lineNumber: 16,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-col justify-between h-full m-2\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                        children: post.frontmatter.excerpt\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\DCM\\\\Desktop\\\\Coding\\\\MyProjects\\\\Next\\\\Blog-Personal FULL\\\\Personal-Blog\\\\components\\\\post.js\",\n                        lineNumber: 25,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                        href: \"/blog/\".concat(post.slug),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                            className: darkMode ? \"flex w-fit p-1 text-slate-200 rounded-md bg-slate-800 m-2\" : \"flex w-fit p-1 text-slate-100 rounded-md bg-gray-500 m-2\",\n                            children: \"Read Article\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\DCM\\\\Desktop\\\\Coding\\\\MyProjects\\\\Next\\\\Blog-Personal FULL\\\\Personal-Blog\\\\components\\\\post.js\",\n                            lineNumber: 27,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\DCM\\\\Desktop\\\\Coding\\\\MyProjects\\\\Next\\\\Blog-Personal FULL\\\\Personal-Blog\\\\components\\\\post.js\",\n                        lineNumber: 26,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\DCM\\\\Desktop\\\\Coding\\\\MyProjects\\\\Next\\\\Blog-Personal FULL\\\\Personal-Blog\\\\components\\\\post.js\",\n                lineNumber: 24,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\DCM\\\\Desktop\\\\Coding\\\\MyProjects\\\\Next\\\\Blog-Personal FULL\\\\Personal-Blog\\\\components\\\\post.js\",\n        lineNumber: 9,\n        columnNumber: 5\n    }, this));\n};\n_s(Post, \"KuWxTr1f3QXfZ6htmot/1wlkohs=\", false, function() {\n    return [\n        _context_globalContext__WEBPACK_IMPORTED_MODULE_3__.useGlobal\n    ];\n});\n_c = Post;\nvar _c;\n$RefreshReg$(_c, \"Post\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3Bvc3QuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQTRCO0FBQzhCO0FBQ047O0FBRXJDLFFBQVEsQ0FBQ00sSUFBSSxDQUFDLEtBQVEsRUFBRSxDQUFDO1FBQVRDLElBQUksR0FBTixLQUFRLENBQU5BLElBQUk7O0lBQ2pDLEdBQUssQ0FBZ0NGLEdBQVcsR0FBWEEsaUVBQVMsSUFBdENHLFFBQVEsR0FBcUJILEdBQVcsQ0FBeENHLFFBQVEsRUFBRUMsY0FBYyxHQUFLSixHQUFXLENBQTlCSSxjQUFjO0lBRWhDLE1BQU0sNkVBQ0hDLENBQU87UUFDTkMsU0FBUyxFQUNQSCxRQUFRLEdBQ0osQ0FBZ0osa0pBQ2hKLENBQWdKOzt3RkFHckpJLENBQUc7Z0JBQUNELFNBQVMsRUFBQyxDQUFrRDs7Z0dBQzlERSxDQUFHO3dCQUNGQyxHQUFHLEVBQUcsQ0FBVSxjQUFJUCxJQUFJLENBQUNRLFdBQVcsQ0FBQ0MsSUFBSTt3QkFDekNMLFNBQVMsRUFBQyxDQUF5Qjt3QkFDbkNNLEdBQUcsRUFBRVYsSUFBSSxDQUFDUSxXQUFXLENBQUNHLFdBQVc7Ozs7OztnR0FFbENDLENBQUU7d0JBQUNSLFNBQVMsRUFBQyxDQUFlO2tDQUFFSixJQUFJLENBQUNRLFdBQVcsQ0FBQ0ssS0FBSzs7Ozs7Ozs7Ozs7O3dGQUV0RFIsQ0FBRztnQkFBQ0QsU0FBUyxFQUFDLENBQTBDOztnR0FDdERVLENBQUU7a0NBQUVkLElBQUksQ0FBQ1EsV0FBVyxDQUFDTyxPQUFPOzs7Ozs7Z0dBQzVCdEIsa0RBQUk7d0JBQUN1QixJQUFJLEVBQUcsQ0FBTSxRQUFZLE9BQVZoQixJQUFJLENBQUNTLElBQUk7OEdBQzNCUSxDQUFDOzRCQUNBYixTQUFTLEVBQ1BILFFBQVEsR0FDSixDQUEyRCw2REFDM0QsQ0FBMEQ7c0NBRWpFLENBRUQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS1YsQ0FBQztHQW5DdUJGLElBQUk7O1FBQ1dELDZEQUFTOzs7S0FEeEJDLElBQUkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9wb3N0LmpzPzI3ZDgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSwgdXNlUmVmIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHVzZUdsb2JhbCB9IGZyb20gXCIuLi9jb250ZXh0L2dsb2JhbENvbnRleHRcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBvc3QoeyBwb3N0IH0pIHtcclxuICBjb25zdCB7IGRhcmtNb2RlLCB0b2dnbGVEYXJrTW9kZSB9ID0gdXNlR2xvYmFsKCk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8c2VjdGlvblxyXG4gICAgICBjbGFzc05hbWU9e1xyXG4gICAgICAgIGRhcmtNb2RlXHJcbiAgICAgICAgICA/IFwiZmxleCBmbGV4LWNvbCB4bDp3LTEvMyB3LTExLzEyIGxnOnctMi8zIGJnLXNsYXRlLTQwMCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgaC1maXQgbXQtMTAgcm91bmRlZC1tZCBib3JkZXIgYm9yZGVyLXNsYXRlLTIwMCBsZzpwLTMgbGc6bS0xMFwiXHJcbiAgICAgICAgICA6IFwiZmxleCBmbGV4LWNvbCB4bDp3LTEvMyB3LTExLzEyIGxnOnctMi8zIGJnLXNsYXRlLTEwMCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgaC1maXQgbXQtMTAgcm91bmRlZC1tZCBib3JkZXIgYm9yZGVyLXNsYXRlLTMwMCBsZzpwLTMgbGc6bS0xMFwiXHJcbiAgICAgIH1cclxuICAgID5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIHctZnVsbCBpdGVtcy1jZW50ZXIganVzdGlmeSBjZW50ZXJcIj5cclxuICAgICAgICA8aW1nXHJcbiAgICAgICAgICBhbHQ9e2BJbWFnZSBmb3IgYCArIHBvc3QuZnJvbnRtYXR0ZXIuc2x1Z31cclxuICAgICAgICAgIGNsYXNzTmFtZT1cInJvdW5kZWQtbWQgdy0xMS8xMiBtdC01XCJcclxuICAgICAgICAgIHNyYz17cG9zdC5mcm9udG1hdHRlci5jb3Zlcl9pbWFnZX1cclxuICAgICAgICA+PC9pbWc+XHJcbiAgICAgICAgPGgxIGNsYXNzTmFtZT1cImZvbnQtc2VtaWJvbGRcIj57cG9zdC5mcm9udG1hdHRlci50aXRsZX08L2gxPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGp1c3RpZnktYmV0d2VlbiBoLWZ1bGwgbS0yXCI+XHJcbiAgICAgICAgPGgzPntwb3N0LmZyb250bWF0dGVyLmV4Y2VycHR9PC9oMz5cclxuICAgICAgICA8TGluayBocmVmPXtgL2Jsb2cvJHtwb3N0LnNsdWd9YH0+XHJcbiAgICAgICAgICA8YVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e1xyXG4gICAgICAgICAgICAgIGRhcmtNb2RlXHJcbiAgICAgICAgICAgICAgICA/IFwiZmxleCB3LWZpdCBwLTEgdGV4dC1zbGF0ZS0yMDAgcm91bmRlZC1tZCBiZy1zbGF0ZS04MDAgbS0yXCJcclxuICAgICAgICAgICAgICAgIDogXCJmbGV4IHctZml0IHAtMSB0ZXh0LXNsYXRlLTEwMCByb3VuZGVkLW1kIGJnLWdyYXktNTAwIG0tMlwiXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgUmVhZCBBcnRpY2xlXHJcbiAgICAgICAgICA8L2E+XHJcbiAgICAgICAgPC9MaW5rPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvc2VjdGlvbj5cclxuICApO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJMaW5rIiwiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsInVzZVJlZiIsInVzZUdsb2JhbCIsIlBvc3QiLCJwb3N0IiwiZGFya01vZGUiLCJ0b2dnbGVEYXJrTW9kZSIsInNlY3Rpb24iLCJjbGFzc05hbWUiLCJkaXYiLCJpbWciLCJhbHQiLCJmcm9udG1hdHRlciIsInNsdWciLCJzcmMiLCJjb3Zlcl9pbWFnZSIsImgxIiwidGl0bGUiLCJoMyIsImV4Y2VycHQiLCJocmVmIiwiYSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/post.js\n");

/***/ })

});