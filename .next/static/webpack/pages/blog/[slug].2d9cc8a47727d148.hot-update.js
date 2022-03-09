"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/blog/[slug]",{

/***/ "./components/header.js":
/*!******************************!*\
  !*** ./components/header.js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Header; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _context_globalContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../context/globalContext */ \"./context/globalContext.js\");\n/* harmony import */ var _functions_ScrollFunctions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../functions/ScrollFunctions */ \"./functions/ScrollFunctions.js\");\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction Header() {\n    var updateScroll = function updateScroll() {\n        // Scroll function from handleScroll.js\n        setScrollCount((0,_functions_ScrollFunctions__WEBPACK_IMPORTED_MODULE_4__[\"default\"])());\n    };\n    _s();\n    var ref = (0,_context_globalContext__WEBPACK_IMPORTED_MODULE_3__.useGlobal)(), darkMode = ref.darkMode, toggleDarkMode = ref.toggleDarkMode;\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0), scrollCount = ref1[0], setScrollCount = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false), scrolledHeader = ref2[0], setScrolledHeader = ref2[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        window.addEventListener(\"scroll\", updateScroll);\n        setScrolledHeader((0,_functions_ScrollFunctions__WEBPACK_IMPORTED_MODULE_4__.checkScrolled)(scrollCount, 1));\n        return function() {\n            return window.removeEventListener(\"scroll\", updateScroll);\n        };\n    });\n    if (darkMode) {\n        return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: scrolledHeader ? \"sticky top-0 left-0 flex w-full items-center justify-center bg-gray-800 h-24 transition-all\" : \"sticky top-0 left-0 flex w-full items-center justify-center bg-gray-700 h-24 transition-all\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex flex-row items-center justify-between w-1280\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                        href: \"/\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                            className: \"text-slate-100\",\n                            children: \"Blog\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\DCM\\\\Desktop\\\\Coding\\\\MyProjects\\\\Next\\\\Blog-Personal FULL\\\\Personal-Blog\\\\components\\\\header.js\",\n                            lineNumber: 33,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\DCM\\\\Desktop\\\\Coding\\\\MyProjects\\\\Next\\\\Blog-Personal FULL\\\\Personal-Blog\\\\components\\\\header.js\",\n                        lineNumber: 32,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\DCM\\\\Desktop\\\\Coding\\\\MyProjects\\\\Next\\\\Blog-Personal FULL\\\\Personal-Blog\\\\components\\\\header.js\",\n                    lineNumber: 31,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex flex-row w-72\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                            className: \"flex w-16 pt-1 pb-1 bg-slate-300 rounded-3xl hover:cursor-pointer\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    type: \"checkbox\",\n                                    className: \"hidden hover:cursor-pointer\",\n                                    onClick: toggleDarkMode\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\DCM\\\\Desktop\\\\Coding\\\\MyProjects\\\\Next\\\\Blog-Personal FULL\\\\Personal-Blog\\\\components\\\\header.js\",\n                                    lineNumber: 38,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"bg-slate-800 rounded-xl transition-all ml-1 h-4 w-4 translate-x-10\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\DCM\\\\Desktop\\\\Coding\\\\MyProjects\\\\Next\\\\Blog-Personal FULL\\\\Personal-Blog\\\\components\\\\header.js\",\n                                    lineNumber: 43,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\DCM\\\\Desktop\\\\Coding\\\\MyProjects\\\\Next\\\\Blog-Personal FULL\\\\Personal-Blog\\\\components\\\\header.js\",\n                            lineNumber: 37,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            className: \"ml-5 text-white\",\n                            children: \"Dark Mode\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\DCM\\\\Desktop\\\\Coding\\\\MyProjects\\\\Next\\\\Blog-Personal FULL\\\\Personal-Blog\\\\components\\\\header.js\",\n                            lineNumber: 45,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\DCM\\\\Desktop\\\\Coding\\\\MyProjects\\\\Next\\\\Blog-Personal FULL\\\\Personal-Blog\\\\components\\\\header.js\",\n                    lineNumber: 36,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\DCM\\\\Desktop\\\\Coding\\\\MyProjects\\\\Next\\\\Blog-Personal FULL\\\\Personal-Blog\\\\components\\\\header.js\",\n            lineNumber: 24,\n            columnNumber: 7\n        }, this));\n    }\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: scrolledHeader ? \"sticky top-0 left-0 flex w-full items-center justify-center bg-slate-300 h-24 transition-all\" : \"sticky top-0 left-0 flex w-full items-center justify-center bg-slate-200 h-24 transition-all\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-row items-center justify-between w-1280\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                    href: \"/\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                        className: \"text-slate-900\",\n                        children: \"Blog\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\DCM\\\\Desktop\\\\Coding\\\\MyProjects\\\\Next\\\\Blog-Personal FULL\\\\Personal-Blog\\\\components\\\\header.js\",\n                        lineNumber: 61,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\DCM\\\\Desktop\\\\Coding\\\\MyProjects\\\\Next\\\\Blog-Personal FULL\\\\Personal-Blog\\\\components\\\\header.js\",\n                    lineNumber: 60,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\DCM\\\\Desktop\\\\Coding\\\\MyProjects\\\\Next\\\\Blog-Personal FULL\\\\Personal-Blog\\\\components\\\\header.js\",\n                lineNumber: 59,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-row\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        className: \"flex w-16 pt-1 pb-1 bg-slate-500 rounded-3xl hover:cursor-pointer\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"checkbox\",\n                                className: \"hidden hover:cursor-pointer\",\n                                onClick: toggleDarkMode\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\DCM\\\\Desktop\\\\Coding\\\\MyProjects\\\\Next\\\\Blog-Personal FULL\\\\Personal-Blog\\\\components\\\\header.js\",\n                                lineNumber: 66,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"bg-slate-200 rounded-xl transition-all ml-1 h-4 w-4\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\DCM\\\\Desktop\\\\Coding\\\\MyProjects\\\\Next\\\\Blog-Personal FULL\\\\Personal-Blog\\\\components\\\\header.js\",\n                                lineNumber: 71,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\DCM\\\\Desktop\\\\Coding\\\\MyProjects\\\\Next\\\\Blog-Personal FULL\\\\Personal-Blog\\\\components\\\\header.js\",\n                        lineNumber: 65,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: \"ml-5 text-black\",\n                        children: \"Dark Mode\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\DCM\\\\Desktop\\\\Coding\\\\MyProjects\\\\Next\\\\Blog-Personal FULL\\\\Personal-Blog\\\\components\\\\header.js\",\n                        lineNumber: 73,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\DCM\\\\Desktop\\\\Coding\\\\MyProjects\\\\Next\\\\Blog-Personal FULL\\\\Personal-Blog\\\\components\\\\header.js\",\n                lineNumber: 64,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\DCM\\\\Desktop\\\\Coding\\\\MyProjects\\\\Next\\\\Blog-Personal FULL\\\\Personal-Blog\\\\components\\\\header.js\",\n        lineNumber: 52,\n        columnNumber: 5\n    }, this));\n};\n_s(Header, \"wWYQuqMpOgb9+OQrJj9QydE1lHE=\", false, function() {\n    return [\n        _context_globalContext__WEBPACK_IMPORTED_MODULE_3__.useGlobal\n    ];\n});\n_c = Header;\nvar _c;\n$RefreshReg$(_c, \"Header\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2hlYWRlci5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQTRCO0FBQ3NCO0FBQ0U7QUFDc0I7O0FBRTNELFFBQVEsQ0FBQ08sTUFBTSxHQUFHLENBQUM7UUFXdkJDLFlBQVksR0FBckIsUUFBUSxDQUFDQSxZQUFZLEdBQUcsQ0FBQztRQUN2QixFQUF1QztRQUN2Q0MsY0FBYyxDQUFDSixzRUFBWTtJQUM3QixDQUFDOztJQWJELEdBQUssQ0FBZ0NELEdBQVcsR0FBWEEsaUVBQVMsSUFBdENNLFFBQVEsR0FBcUJOLEdBQVcsQ0FBeENNLFFBQVEsRUFBRUMsY0FBYyxHQUFLUCxHQUFXLENBQTlCTyxjQUFjO0lBQ2hDLEdBQUssQ0FBaUNULElBQVcsR0FBWEEsK0NBQVEsQ0FBQyxDQUFDLEdBQXpDVSxXQUFXLEdBQW9CVixJQUFXLEtBQTdCTyxjQUFjLEdBQUlQLElBQVc7SUFDakQsR0FBSyxDQUF1Q0EsSUFBZSxHQUFmQSwrQ0FBUSxDQUFDLEtBQUssR0FBbkRXLGNBQWMsR0FBdUJYLElBQWUsS0FBcENZLGlCQUFpQixHQUFJWixJQUFlO0lBRTNEQyxnREFBUyxDQUFDLFFBQVEsR0FBRixDQUFDO1FBQ2ZZLE1BQU0sQ0FBQ0MsZ0JBQWdCLENBQUMsQ0FBUSxTQUFFUixZQUFZO1FBQzlDTSxpQkFBaUIsQ0FBQ1IseUVBQWEsQ0FBQ00sV0FBVyxFQUFFLENBQUM7UUFDOUMsTUFBTSxDQUFDLFFBQVE7WUFBRkcsTUFBTSxDQUFOQSxNQUFNLENBQUNFLG1CQUFtQixDQUFDLENBQVEsU0FBRVQsWUFBWTs7SUFDaEUsQ0FBQztJQU9ELEVBQUUsRUFBRUUsUUFBUSxFQUFFLENBQUM7UUFDYixNQUFNLDZFQUNIUSxDQUFHO1lBQ0ZDLFNBQVMsRUFDUE4sY0FBYyxHQUNWLENBQTZGLCtGQUM3RixDQUE2Rjs7NEZBR2xHSyxDQUFHO29CQUFDQyxTQUFTLEVBQUMsQ0FBbUQ7MEdBQy9EbkIsa0RBQUk7d0JBQUNvQixJQUFJLEVBQUUsQ0FBRzs4R0FDWkMsQ0FBQzs0QkFBQ0YsU0FBUyxFQUFDLENBQWdCO3NDQUFDLENBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7NEZBR3JDRCxDQUFHO29CQUFDQyxTQUFTLEVBQUMsQ0FBb0I7O29HQUNoQ0csQ0FBSzs0QkFBQ0gsU0FBUyxFQUFDLENBQW1FOzs0R0FDakZJLENBQUs7b0NBQ0pDLElBQUksRUFBQyxDQUFVO29DQUNmTCxTQUFTLEVBQUMsQ0FBNkI7b0NBQ3ZDTSxPQUFPLEVBQUVkLGNBQWM7Ozs7Ozs0R0FFeEJPLENBQUc7b0NBQUNDLFNBQVMsRUFBQyxDQUFvRTs7Ozs7Ozs7Ozs7O29HQUVwRk8sQ0FBRTs0QkFBQ1AsU0FBUyxFQUFDLENBQWlCO3NDQUFDLENBQVM7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUlqRCxDQUFDO0lBRUQsTUFBTSw2RUFDSEQsQ0FBRztRQUNGQyxTQUFTLEVBQ1BOLGNBQWMsR0FDVixDQUE4RixnR0FDOUYsQ0FBOEY7O3dGQUduR0ssQ0FBRztnQkFBQ0MsU0FBUyxFQUFDLENBQW1EO3NHQUMvRG5CLGtEQUFJO29CQUFDb0IsSUFBSSxFQUFFLENBQUc7MEdBQ1pDLENBQUM7d0JBQUNGLFNBQVMsRUFBQyxDQUFnQjtrQ0FBQyxDQUFJOzs7Ozs7Ozs7Ozs7Ozs7O3dGQUdyQ0QsQ0FBRztnQkFBQ0MsU0FBUyxFQUFDLENBQWU7O2dHQUMzQkcsQ0FBSzt3QkFBQ0gsU0FBUyxFQUFDLENBQW1FOzt3R0FDakZJLENBQUs7Z0NBQ0pDLElBQUksRUFBQyxDQUFVO2dDQUNmTCxTQUFTLEVBQUMsQ0FBNkI7Z0NBQ3ZDTSxPQUFPLEVBQUVkLGNBQWM7Ozs7Ozt3R0FFeEJPLENBQUc7Z0NBQUNDLFNBQVMsRUFBQyxDQUFxRDs7Ozs7Ozs7Ozs7O2dHQUVyRU8sQ0FBRTt3QkFBQ1AsU0FBUyxFQUFDLENBQWlCO2tDQUFDLENBQVM7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUlqRCxDQUFDO0dBdkV1QlosTUFBTTs7UUFDU0gsNkRBQVM7OztLQUR4QkcsTUFBTSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2hlYWRlci5qcz9jMDk4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlR2xvYmFsIH0gZnJvbSBcIi4uL2NvbnRleHQvZ2xvYmFsQ29udGV4dFwiO1xyXG5pbXBvcnQgaGFuZGxlU2Nyb2xsLCB7IGNoZWNrU2Nyb2xsZWQgfSBmcm9tIFwiLi4vZnVuY3Rpb25zL1Njcm9sbEZ1bmN0aW9uc1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSGVhZGVyKCkge1xyXG4gIGNvbnN0IHsgZGFya01vZGUsIHRvZ2dsZURhcmtNb2RlIH0gPSB1c2VHbG9iYWwoKTtcclxuICBjb25zdCBbc2Nyb2xsQ291bnQsIHNldFNjcm9sbENvdW50XSA9IHVzZVN0YXRlKDApO1xyXG4gIGNvbnN0IFtzY3JvbGxlZEhlYWRlciwgc2V0U2Nyb2xsZWRIZWFkZXJdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgdXBkYXRlU2Nyb2xsKTtcclxuICAgIHNldFNjcm9sbGVkSGVhZGVyKGNoZWNrU2Nyb2xsZWQoc2Nyb2xsQ291bnQsIDEpKTtcclxuICAgIHJldHVybiAoKSA9PiB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCB1cGRhdGVTY3JvbGwpO1xyXG4gIH0pO1xyXG5cclxuICBmdW5jdGlvbiB1cGRhdGVTY3JvbGwoKSB7XHJcbiAgICAvLyBTY3JvbGwgZnVuY3Rpb24gZnJvbSBoYW5kbGVTY3JvbGwuanNcclxuICAgIHNldFNjcm9sbENvdW50KGhhbmRsZVNjcm9sbCgpKTtcclxuICB9XHJcblxyXG4gIGlmIChkYXJrTW9kZSkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdlxyXG4gICAgICAgIGNsYXNzTmFtZT17XHJcbiAgICAgICAgICBzY3JvbGxlZEhlYWRlclxyXG4gICAgICAgICAgICA/IFwic3RpY2t5IHRvcC0wIGxlZnQtMCBmbGV4IHctZnVsbCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgYmctZ3JheS04MDAgaC0yNCB0cmFuc2l0aW9uLWFsbFwiXHJcbiAgICAgICAgICAgIDogXCJzdGlja3kgdG9wLTAgbGVmdC0wIGZsZXggdy1mdWxsIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBiZy1ncmF5LTcwMCBoLTI0IHRyYW5zaXRpb24tYWxsXCJcclxuICAgICAgICB9XHJcbiAgICAgID5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1yb3cgaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiB3LTEyODBcIj5cclxuICAgICAgICAgIDxMaW5rIGhyZWY9e1wiL1wifT5cclxuICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwidGV4dC1zbGF0ZS0xMDBcIj5CbG9nPC9hPlxyXG4gICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXJvdyB3LTcyXCI+XHJcbiAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiZmxleCB3LTE2IHB0LTEgcGItMSBiZy1zbGF0ZS0zMDAgcm91bmRlZC0zeGwgaG92ZXI6Y3Vyc29yLXBvaW50ZXJcIj5cclxuICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgdHlwZT1cImNoZWNrYm94XCJcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJoaWRkZW4gaG92ZXI6Y3Vyc29yLXBvaW50ZXJcIlxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9e3RvZ2dsZURhcmtNb2RlfVxyXG4gICAgICAgICAgICA+PC9pbnB1dD5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy1zbGF0ZS04MDAgcm91bmRlZC14bCB0cmFuc2l0aW9uLWFsbCBtbC0xIGgtNCB3LTQgdHJhbnNsYXRlLXgtMTBcIiAvPlxyXG4gICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJtbC01IHRleHQtd2hpdGVcIj5EYXJrIE1vZGU8L2gxPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdlxyXG4gICAgICBjbGFzc05hbWU9e1xyXG4gICAgICAgIHNjcm9sbGVkSGVhZGVyXHJcbiAgICAgICAgICA/IFwic3RpY2t5IHRvcC0wIGxlZnQtMCBmbGV4IHctZnVsbCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgYmctc2xhdGUtMzAwIGgtMjQgdHJhbnNpdGlvbi1hbGxcIlxyXG4gICAgICAgICAgOiBcInN0aWNreSB0b3AtMCBsZWZ0LTAgZmxleCB3LWZ1bGwgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIGJnLXNsYXRlLTIwMCBoLTI0IHRyYW5zaXRpb24tYWxsXCJcclxuICAgICAgfVxyXG4gICAgPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1yb3cgaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiB3LTEyODBcIj5cclxuICAgICAgICA8TGluayBocmVmPXtcIi9cIn0+XHJcbiAgICAgICAgICA8YSBjbGFzc05hbWU9XCJ0ZXh0LXNsYXRlLTkwMFwiPkJsb2c8L2E+XHJcbiAgICAgICAgPC9MaW5rPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtcm93XCI+XHJcbiAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImZsZXggdy0xNiBwdC0xIHBiLTEgYmctc2xhdGUtNTAwIHJvdW5kZWQtM3hsIGhvdmVyOmN1cnNvci1wb2ludGVyXCI+XHJcbiAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgdHlwZT1cImNoZWNrYm94XCJcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiaGlkZGVuIGhvdmVyOmN1cnNvci1wb2ludGVyXCJcclxuICAgICAgICAgICAgb25DbGljaz17dG9nZ2xlRGFya01vZGV9XHJcbiAgICAgICAgICA+PC9pbnB1dD5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctc2xhdGUtMjAwIHJvdW5kZWQteGwgdHJhbnNpdGlvbi1hbGwgbWwtMSBoLTQgdy00XCIgLz5cclxuICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgIDxoMSBjbGFzc05hbWU9XCJtbC01IHRleHQtYmxhY2tcIj5EYXJrIE1vZGU8L2gxPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuIl0sIm5hbWVzIjpbIkxpbmsiLCJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwidXNlR2xvYmFsIiwiaGFuZGxlU2Nyb2xsIiwiY2hlY2tTY3JvbGxlZCIsIkhlYWRlciIsInVwZGF0ZVNjcm9sbCIsInNldFNjcm9sbENvdW50IiwiZGFya01vZGUiLCJ0b2dnbGVEYXJrTW9kZSIsInNjcm9sbENvdW50Iiwic2Nyb2xsZWRIZWFkZXIiLCJzZXRTY3JvbGxlZEhlYWRlciIsIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiZGl2IiwiY2xhc3NOYW1lIiwiaHJlZiIsImEiLCJsYWJlbCIsImlucHV0IiwidHlwZSIsIm9uQ2xpY2siLCJoMSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/header.js\n");

/***/ })

});