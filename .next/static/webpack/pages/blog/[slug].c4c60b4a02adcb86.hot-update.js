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

/***/ "./components/header.tsx":
/*!*******************************!*\
  !*** ./components/header.tsx ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Header; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _context_globalContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../context/globalContext */ \"./context/globalContext.tsx\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils */ \"./utils/index.ts\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction Header() {\n    var updateScroll = function updateScroll() {\n        // Scroll function from handleScroll.js\n        setScrollCount((0,_utils__WEBPACK_IMPORTED_MODULE_4__[\"default\"])());\n    };\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0), scrollCount = ref[0], setScrollCount = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false), scrolledHeader = ref1[0], setScrolledHeader = ref1[1];\n    var ref2 = (0,_context_globalContext__WEBPACK_IMPORTED_MODULE_3__.useGlobal)(), setDarkMode = ref2.setDarkMode, darkMode = ref2.darkMode;\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        window.addEventListener(\"scroll\", updateScroll);\n        setScrolledHeader((0,_utils__WEBPACK_IMPORTED_MODULE_4__.checkScrolled)(scrollCount));\n        return function() {\n            return window.removeEventListener(\"scroll\", updateScroll);\n        };\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: scrolledHeader ? \"sticky top-0 left-0 flex w-full items-center justify-center h-24 transition-all bg-slate-300 dark:bg-gray-800\" : \"sticky top-0 left-0 flex w-full items-center justify-center h-24 transition-all bg-slate-200 dark:bg-gray-700\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"flex flex-row items-center justify-between w-11/12 xl:w-1280 sm:w-11/12\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                    href: \"/\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                        className: \"font-semibold text-xl text-slate-900 dark:text-slate-100 \",\n                        children: \"DaedaDev\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\DCM\\\\Desktop\\\\Coding\\\\MyProjects\\\\Next\\\\Blog-Personal FULL\\\\Personal-Blog\\\\components\\\\header.tsx\",\n                        lineNumber: 32,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\DCM\\\\Desktop\\\\Coding\\\\MyProjects\\\\Next\\\\Blog-Personal FULL\\\\Personal-Blog\\\\components\\\\header.tsx\",\n                    lineNumber: 31,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex flex-row\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                            className: \"flex w-16 pt-1 pb-1 rounded-3xl hover:cursor-pointer bg-slate-500 dark:bg-slate-300\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    type: \"checkbox\",\n                                    className: \"hidden hover:cursor-pointer\",\n                                    onClick: function() {\n                                        setDarkMode(!darkMode);\n                                    }\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\DCM\\\\Desktop\\\\Coding\\\\MyProjects\\\\Next\\\\Blog-Personal FULL\\\\Personal-Blog\\\\components\\\\header.tsx\",\n                                    lineNumber: 38,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"rounded-xl transition-all ml-1 h-4 w-4 translate-x-10 bg-slate-200 dark:bg-slate-800\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\DCM\\\\Desktop\\\\Coding\\\\MyProjects\\\\Next\\\\Blog-Personal FULL\\\\Personal-Blog\\\\components\\\\header.tsx\",\n                                    lineNumber: 43,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\DCM\\\\Desktop\\\\Coding\\\\MyProjects\\\\Next\\\\Blog-Personal FULL\\\\Personal-Blog\\\\components\\\\header.tsx\",\n                            lineNumber: 37,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            className: \"ml-5 text-black dark:text-white\",\n                            children: \"Dark Mode\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\DCM\\\\Desktop\\\\Coding\\\\MyProjects\\\\Next\\\\Blog-Personal FULL\\\\Personal-Blog\\\\components\\\\header.tsx\",\n                            lineNumber: 45,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\DCM\\\\Desktop\\\\Coding\\\\MyProjects\\\\Next\\\\Blog-Personal FULL\\\\Personal-Blog\\\\components\\\\header.tsx\",\n                    lineNumber: 36,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\DCM\\\\Desktop\\\\Coding\\\\MyProjects\\\\Next\\\\Blog-Personal FULL\\\\Personal-Blog\\\\components\\\\header.tsx\",\n            lineNumber: 30,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\DCM\\\\Desktop\\\\Coding\\\\MyProjects\\\\Next\\\\Blog-Personal FULL\\\\Personal-Blog\\\\components\\\\header.tsx\",\n        lineNumber: 23,\n        columnNumber: 5\n    }, this);\n}\n_s(Header, \"Go2cnnySATG/+d8vXslp2dOdGJQ=\", false, function() {\n    return [\n        _context_globalContext__WEBPACK_IMPORTED_MODULE_3__.useGlobal\n    ];\n});\n_c = Header;\nvar _c;\n$RefreshReg$(_c, \"Header\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2hlYWRlci50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQTZCO0FBQ3NCO0FBQ0U7QUFDRTtBQUV4QyxTQUFTTyxNQUFNLEdBQUc7UUFXdEJDLFlBQVksR0FBckIsU0FBU0EsWUFBWSxHQUFHO1FBQ3RCLHVDQUF1QztRQUN2Q0MsY0FBYyxDQUFDSixrREFBWSxFQUFFLENBQUMsQ0FBQztJQUNqQyxDQUFDOztJQWJELElBQXNDSCxHQUFXLEdBQVhBLCtDQUFRLENBQUMsQ0FBQyxDQUFDLEVBQTFDUSxXQUFXLEdBQW9CUixHQUFXLEdBQS9CLEVBQUVPLGNBQWMsR0FBSVAsR0FBVyxHQUFmO0lBQ2xDLElBQTRDQSxJQUFlLEdBQWZBLCtDQUFRLENBQUMsS0FBSyxDQUFDLEVBQXBEUyxjQUFjLEdBQXVCVCxJQUFlLEdBQXRDLEVBQUVVLGlCQUFpQixHQUFJVixJQUFlLEdBQW5CO0lBQ3hDLElBQWdDRSxJQUFXLEdBQVhBLGlFQUFTLEVBQUUsRUFBcENTLFdBQVcsR0FBY1QsSUFBVyxDQUFwQ1MsV0FBVyxFQUFFQyxRQUFRLEdBQUlWLElBQVcsQ0FBdkJVLFFBQVE7SUFFNUJYLGdEQUFTLENBQUMsV0FBTTtRQUNkWSxNQUFNLENBQUNDLGdCQUFnQixDQUFDLFFBQVEsRUFBRVIsWUFBWSxDQUFDLENBQUM7UUFDaERJLGlCQUFpQixDQUFDTixxREFBYSxDQUFDSSxXQUFXLENBQUMsQ0FBQyxDQUFDO1FBQzlDLE9BQU87bUJBQU1LLE1BQU0sQ0FBQ0UsbUJBQW1CLENBQUMsUUFBUSxFQUFFVCxZQUFZLENBQUM7U0FBQSxDQUFDO0lBQ2xFLENBQUMsQ0FBQyxDQUFDO0lBT0gscUJBQ0UsOERBQUNVLEtBQUc7UUFDRkMsU0FBUyxFQUNQUixjQUFjLEdBQ1YsK0dBQStHLEdBQy9HLCtHQUErRztrQkFHckgsNEVBQUNPLEtBQUc7WUFBQ0MsU0FBUyxFQUFDLHlFQUF5RTs7OEJBQ3RGLDhEQUFDbkIsa0RBQUk7b0JBQUNvQixJQUFJLEVBQUUsR0FBRzs4QkFDYiw0RUFBQ0MsR0FBQzt3QkFBQ0YsU0FBUyxFQUFDLDJEQUEyRDtrQ0FBQyxVQUV6RTs7Ozs7NEJBQUk7Ozs7O3dCQUNDOzhCQUNQLDhEQUFDRCxLQUFHO29CQUFDQyxTQUFTLEVBQUMsZUFBZTs7c0NBQzVCLDhEQUFDRyxPQUFLOzRCQUFDSCxTQUFTLEVBQUMscUZBQXFGOzs4Q0FDcEcsOERBQUNJLE9BQUs7b0NBQ0pDLElBQUksRUFBQyxVQUFVO29DQUNmTCxTQUFTLEVBQUMsNkJBQTZCO29DQUN2Q00sT0FBTyxFQUFFLFdBQU07d0NBQUNaLFdBQVcsQ0FBQyxDQUFDQyxRQUFRLENBQUM7b0NBQUEsQ0FBQzs7Ozs7d0NBQ2hDOzhDQUNULDhEQUFDSSxLQUFHO29DQUFDQyxTQUFTLEVBQUMsc0ZBQXNGOzs7Ozt3Q0FBRzs7Ozs7O2dDQUNsRztzQ0FDUiw4REFBQ08sSUFBRTs0QkFBQ1AsU0FBUyxFQUFDLGlDQUFpQztzQ0FBQyxXQUFTOzs7OztnQ0FBSzs7Ozs7O3dCQUMxRDs7Ozs7O2dCQUNGOzs7OztZQUNGLENBQ047QUFDSixDQUFDO0dBNUN1QlosTUFBTTs7UUFHSUgsNkRBQVM7OztBQUhuQkcsS0FBQUEsTUFBTSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2hlYWRlci50c3g/ODcwYyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHVzZUdsb2JhbCB9IGZyb20gXCIuLi9jb250ZXh0L2dsb2JhbENvbnRleHRcIjtcclxuaW1wb3J0IGhhbmRsZVNjcm9sbCwgeyBjaGVja1Njcm9sbGVkIH0gZnJvbSBcIi4uL3V0aWxzXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIZWFkZXIoKSB7XHJcbiAgY29uc3QgW3Njcm9sbENvdW50LCBzZXRTY3JvbGxDb3VudF0gPSB1c2VTdGF0ZSgwKTtcclxuICBjb25zdCBbc2Nyb2xsZWRIZWFkZXIsIHNldFNjcm9sbGVkSGVhZGVyXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCB7c2V0RGFya01vZGUsIGRhcmtNb2RlfSA9IHVzZUdsb2JhbCgpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgdXBkYXRlU2Nyb2xsKTtcclxuICAgIHNldFNjcm9sbGVkSGVhZGVyKGNoZWNrU2Nyb2xsZWQoc2Nyb2xsQ291bnQpKTtcclxuICAgIHJldHVybiAoKSA9PiB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCB1cGRhdGVTY3JvbGwpO1xyXG4gIH0pO1xyXG5cclxuICBmdW5jdGlvbiB1cGRhdGVTY3JvbGwoKSB7XHJcbiAgICAvLyBTY3JvbGwgZnVuY3Rpb24gZnJvbSBoYW5kbGVTY3JvbGwuanNcclxuICAgIHNldFNjcm9sbENvdW50KGhhbmRsZVNjcm9sbCgpKTtcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2XHJcbiAgICAgIGNsYXNzTmFtZT17XHJcbiAgICAgICAgc2Nyb2xsZWRIZWFkZXJcclxuICAgICAgICAgID8gXCJzdGlja3kgdG9wLTAgbGVmdC0wIGZsZXggdy1mdWxsIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBoLTI0IHRyYW5zaXRpb24tYWxsIGJnLXNsYXRlLTMwMCBkYXJrOmJnLWdyYXktODAwXCJcclxuICAgICAgICAgIDogXCJzdGlja3kgdG9wLTAgbGVmdC0wIGZsZXggdy1mdWxsIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBoLTI0IHRyYW5zaXRpb24tYWxsIGJnLXNsYXRlLTIwMCBkYXJrOmJnLWdyYXktNzAwXCJcclxuICAgICAgfVxyXG4gICAgPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1yb3cgaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiB3LTExLzEyIHhsOnctMTI4MCBzbTp3LTExLzEyXCI+XHJcbiAgICAgICAgPExpbmsgaHJlZj17XCIvXCJ9PlxyXG4gICAgICAgICAgPGEgY2xhc3NOYW1lPVwiZm9udC1zZW1pYm9sZCB0ZXh0LXhsIHRleHQtc2xhdGUtOTAwIGRhcms6dGV4dC1zbGF0ZS0xMDAgXCI+XHJcbiAgICAgICAgICAgIERhZWRhRGV2XHJcbiAgICAgICAgICA8L2E+XHJcbiAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXJvd1wiPlxyXG4gICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImZsZXggdy0xNiBwdC0xIHBiLTEgcm91bmRlZC0zeGwgaG92ZXI6Y3Vyc29yLXBvaW50ZXIgYmctc2xhdGUtNTAwIGRhcms6Ymctc2xhdGUtMzAwXCI+XHJcbiAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgIHR5cGU9XCJjaGVja2JveFwiXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaGlkZGVuIGhvdmVyOmN1cnNvci1wb2ludGVyXCJcclxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7c2V0RGFya01vZGUoIWRhcmtNb2RlKX19XHJcbiAgICAgICAgICAgID48L2lucHV0PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdW5kZWQteGwgdHJhbnNpdGlvbi1hbGwgbWwtMSBoLTQgdy00IHRyYW5zbGF0ZS14LTEwIGJnLXNsYXRlLTIwMCBkYXJrOmJnLXNsYXRlLTgwMFwiIC8+XHJcbiAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgPGgxIGNsYXNzTmFtZT1cIm1sLTUgdGV4dC1ibGFjayBkYXJrOnRleHQtd2hpdGVcIj5EYXJrIE1vZGU8L2gxPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuIl0sIm5hbWVzIjpbIkxpbmsiLCJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwidXNlR2xvYmFsIiwiaGFuZGxlU2Nyb2xsIiwiY2hlY2tTY3JvbGxlZCIsIkhlYWRlciIsInVwZGF0ZVNjcm9sbCIsInNldFNjcm9sbENvdW50Iiwic2Nyb2xsQ291bnQiLCJzY3JvbGxlZEhlYWRlciIsInNldFNjcm9sbGVkSGVhZGVyIiwic2V0RGFya01vZGUiLCJkYXJrTW9kZSIsIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiZGl2IiwiY2xhc3NOYW1lIiwiaHJlZiIsImEiLCJsYWJlbCIsImlucHV0IiwidHlwZSIsIm9uQ2xpY2siLCJoMSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/header.tsx\n"));

/***/ })

});