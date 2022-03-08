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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Header; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _context_globalContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../context/globalContext */ \"./context/globalContext.js\");\n\n\n\n\nvar _s = $RefreshSig$();\nfunction Header() {\n    _s();\n    var ref = (0,_context_globalContext__WEBPACK_IMPORTED_MODULE_3__.useGlobal)(), darkMode = ref.darkMode, toggleDarkMode = ref.toggleDarkMode;\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0), scrollCount = ref1[0], setScrollCount = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false), scrolled = ref2[0], setScrolled = ref2[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        window.addEventListener(\"scroll\", handleScroll);\n        if (scrollCount > 1) {\n            setScrolled(true);\n        } else {\n            setScrolled(false);\n        }\n        return function() {\n            return window.removeEventListener(\"scroll\", handleScroll);\n        };\n    });\n    var handleScroll = function() {\n        var MaxHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;\n        var ScrollPercent = window.scrollY / MaxHeight * 100;\n        console.log(document.documentElement.clientHeight);\n        setScrollCount(ScrollPercent);\n    };\n    if (darkMode) {\n        return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: scrolled ? \"sticky top-0 left-0 flex w-full items-center justify-center bg-gray-800 h-24 transition-all\" : \"sticky top-0 left-0 flex w-full items-center justify-center bg-gray-700 h-24 transition-all\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex flex-row items-center justify-between w-1280\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                        href: \"/\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                            className: \"text-slate-100\",\n                            children: \"Blog\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\DCM\\\\Desktop\\\\Coding\\\\MyProjects\\\\Next\\\\Blog-Personal FULL\\\\Personal-Blog\\\\components\\\\header.js\",\n                            lineNumber: 41,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\DCM\\\\Desktop\\\\Coding\\\\MyProjects\\\\Next\\\\Blog-Personal FULL\\\\Personal-Blog\\\\components\\\\header.js\",\n                        lineNumber: 40,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\DCM\\\\Desktop\\\\Coding\\\\MyProjects\\\\Next\\\\Blog-Personal FULL\\\\Personal-Blog\\\\components\\\\header.js\",\n                    lineNumber: 39,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex flex-row\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                            className: \"flex w-16 pt-1 pb-1 bg-slate-300 rounded-3xl\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    type: \"checkbox\",\n                                    className: \"hidden bg-slate-800 rounded-xl transition-all ml-1 checked:translate-x-10 checked:after:bg-black\",\n                                    onClick: toggleDarkMode\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\DCM\\\\Desktop\\\\Coding\\\\MyProjects\\\\Next\\\\Blog-Personal FULL\\\\Personal-Blog\\\\components\\\\header.js\",\n                                    lineNumber: 46,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"bg-slate-800 rounded-xl transition-all ml-1 h-5 w-5 translate-x-9\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\DCM\\\\Desktop\\\\Coding\\\\MyProjects\\\\Next\\\\Blog-Personal FULL\\\\Personal-Blog\\\\components\\\\header.js\",\n                                    lineNumber: 51,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\DCM\\\\Desktop\\\\Coding\\\\MyProjects\\\\Next\\\\Blog-Personal FULL\\\\Personal-Blog\\\\components\\\\header.js\",\n                            lineNumber: 45,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            className: \"ml-5 text-white\",\n                            children: \"Dark Mode\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\DCM\\\\Desktop\\\\Coding\\\\MyProjects\\\\Next\\\\Blog-Personal FULL\\\\Personal-Blog\\\\components\\\\header.js\",\n                            lineNumber: 53,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\DCM\\\\Desktop\\\\Coding\\\\MyProjects\\\\Next\\\\Blog-Personal FULL\\\\Personal-Blog\\\\components\\\\header.js\",\n                    lineNumber: 44,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\DCM\\\\Desktop\\\\Coding\\\\MyProjects\\\\Next\\\\Blog-Personal FULL\\\\Personal-Blog\\\\components\\\\header.js\",\n            lineNumber: 32,\n            columnNumber: 7\n        }, this));\n    }\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: scrolled ? \"sticky top-0 left-0 flex w-full items-center justify-center bg-slate-300 h-24 transition-all\" : \"sticky top-0 left-0 flex w-full items-center justify-center bg-slate-200 h-24 transition-all\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-row items-center justify-between w-1280\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                    href: \"/\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                        className: \"text-slate-900\",\n                        children: \"Blog\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\DCM\\\\Desktop\\\\Coding\\\\MyProjects\\\\Next\\\\Blog-Personal FULL\\\\Personal-Blog\\\\components\\\\header.js\",\n                        lineNumber: 69,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\DCM\\\\Desktop\\\\Coding\\\\MyProjects\\\\Next\\\\Blog-Personal FULL\\\\Personal-Blog\\\\components\\\\header.js\",\n                    lineNumber: 68,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\DCM\\\\Desktop\\\\Coding\\\\MyProjects\\\\Next\\\\Blog-Personal FULL\\\\Personal-Blog\\\\components\\\\header.js\",\n                lineNumber: 67,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-row\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        className: \"flex w-16 pt-1 pb-1 bg-slate-500 rounded-3xl\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"checkbox\",\n                                className: \"hidden checked:translate-x-10 bg-slate-200 rounded-xl transition-all ml-1 checked:after:bg-black\",\n                                onClick: toggleDarkMode\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\DCM\\\\Desktop\\\\Coding\\\\MyProjects\\\\Next\\\\Blog-Personal FULL\\\\Personal-Blog\\\\components\\\\header.js\",\n                                lineNumber: 74,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"bg-slate-200 rounded-xl transition-all ml-1 h-5 w-5\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\DCM\\\\Desktop\\\\Coding\\\\MyProjects\\\\Next\\\\Blog-Personal FULL\\\\Personal-Blog\\\\components\\\\header.js\",\n                                lineNumber: 79,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\DCM\\\\Desktop\\\\Coding\\\\MyProjects\\\\Next\\\\Blog-Personal FULL\\\\Personal-Blog\\\\components\\\\header.js\",\n                        lineNumber: 73,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: \"ml-5 text-black\",\n                        children: \"Dark Mode\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\DCM\\\\Desktop\\\\Coding\\\\MyProjects\\\\Next\\\\Blog-Personal FULL\\\\Personal-Blog\\\\components\\\\header.js\",\n                        lineNumber: 81,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\DCM\\\\Desktop\\\\Coding\\\\MyProjects\\\\Next\\\\Blog-Personal FULL\\\\Personal-Blog\\\\components\\\\header.js\",\n                lineNumber: 72,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\DCM\\\\Desktop\\\\Coding\\\\MyProjects\\\\Next\\\\Blog-Personal FULL\\\\Personal-Blog\\\\components\\\\header.js\",\n        lineNumber: 60,\n        columnNumber: 5\n    }, this));\n};\n_s(Header, \"wWYQuqMpOgb9+OQrJj9QydE1lHE=\", false, function() {\n    return [\n        _context_globalContext__WEBPACK_IMPORTED_MODULE_3__.useGlobal\n    ];\n});\n_c = Header;\nvar _c;\n$RefreshReg$(_c, \"Header\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFJLEVBQUMsQ0FBVTtnQ0FDZkwsU0FBUyxFQUFDLENBQWtHO2dDQUM1R00sT0FBTyxFQUFFekIsY0FBYzs7Ozs7O3dHQUV4QmtCLENBQUc7Z0NBQUNDLFNBQVMsRUFBQyxDQUFxRDs7Ozs7Ozs7Ozs7O2dHQUVyRU8sQ0FBRTt3QkFBQ1AsU0FBUyxFQUFDLENBQWlCO2tDQUFDLENBQVM7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUlqRCxDQUFDO0dBaEZ1QnJCLE1BQU07O1FBQ1NELDZEQUFTOzs7S0FEeEJDLE1BQU0iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9oZWFkZXIuanM/YzA5OCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHVzZUdsb2JhbCB9IGZyb20gXCIuLi9jb250ZXh0L2dsb2JhbENvbnRleHRcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhlYWRlcigpIHtcclxuICBjb25zdCB7IGRhcmtNb2RlLCB0b2dnbGVEYXJrTW9kZSB9ID0gdXNlR2xvYmFsKCk7XHJcbiAgY29uc3QgW3Njcm9sbENvdW50LCBzZXRTY3JvbGxDb3VudF0gPSB1c2VTdGF0ZSgwKTtcclxuICBjb25zdCBbc2Nyb2xsZWQsIHNldFNjcm9sbGVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIGhhbmRsZVNjcm9sbCk7XHJcbiAgICBpZiAoc2Nyb2xsQ291bnQgPiAxKSB7XHJcbiAgICAgIHNldFNjcm9sbGVkKHRydWUpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgc2V0U2Nyb2xsZWQoZmFsc2UpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuICgpID0+IHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIGhhbmRsZVNjcm9sbCk7XHJcbiAgfSk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZVNjcm9sbCA9ICgpID0+IHtcclxuICAgIGNvbnN0IE1heEhlaWdodCA9XHJcbiAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxIZWlnaHQgLVxyXG4gICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0O1xyXG4gICAgY29uc3QgU2Nyb2xsUGVyY2VudCA9ICh3aW5kb3cuc2Nyb2xsWSAvIE1heEhlaWdodCkgKiAxMDA7XHJcblxyXG4gICAgY29uc29sZS5sb2coZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodCk7XHJcbiAgICBzZXRTY3JvbGxDb3VudChTY3JvbGxQZXJjZW50KTtcclxuICB9O1xyXG5cclxuICBpZiAoZGFya01vZGUpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXZcclxuICAgICAgICBjbGFzc05hbWU9e1xyXG4gICAgICAgICAgc2Nyb2xsZWRcclxuICAgICAgICAgICAgPyBcInN0aWNreSB0b3AtMCBsZWZ0LTAgZmxleCB3LWZ1bGwgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIGJnLWdyYXktODAwIGgtMjQgdHJhbnNpdGlvbi1hbGxcIlxyXG4gICAgICAgICAgICA6IFwic3RpY2t5IHRvcC0wIGxlZnQtMCBmbGV4IHctZnVsbCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgYmctZ3JheS03MDAgaC0yNCB0cmFuc2l0aW9uLWFsbFwiXHJcbiAgICAgICAgfVxyXG4gICAgICA+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtcm93IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gdy0xMjgwXCI+XHJcbiAgICAgICAgICA8TGluayBocmVmPXtcIi9cIn0+XHJcbiAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cInRleHQtc2xhdGUtMTAwXCI+QmxvZzwvYT5cclxuICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1yb3dcIj5cclxuICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJmbGV4IHctMTYgcHQtMSBwYi0xIGJnLXNsYXRlLTMwMCByb3VuZGVkLTN4bFwiPlxyXG4gICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICB0eXBlPVwiY2hlY2tib3hcIlxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImhpZGRlbiBiZy1zbGF0ZS04MDAgcm91bmRlZC14bCB0cmFuc2l0aW9uLWFsbCBtbC0xIGNoZWNrZWQ6dHJhbnNsYXRlLXgtMTAgY2hlY2tlZDphZnRlcjpiZy1ibGFja1wiXHJcbiAgICAgICAgICAgICAgb25DbGljaz17dG9nZ2xlRGFya01vZGV9XHJcbiAgICAgICAgICAgID48L2lucHV0PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLXNsYXRlLTgwMCByb3VuZGVkLXhsIHRyYW5zaXRpb24tYWxsIG1sLTEgaC01IHctNSB0cmFuc2xhdGUteC05XCIgLz5cclxuICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwibWwtNSB0ZXh0LXdoaXRlXCI+RGFyayBNb2RlPC9oMT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXZcclxuICAgICAgY2xhc3NOYW1lPXtcclxuICAgICAgICBzY3JvbGxlZFxyXG4gICAgICAgICAgPyBcInN0aWNreSB0b3AtMCBsZWZ0LTAgZmxleCB3LWZ1bGwgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIGJnLXNsYXRlLTMwMCBoLTI0IHRyYW5zaXRpb24tYWxsXCJcclxuICAgICAgICAgIDogXCJzdGlja3kgdG9wLTAgbGVmdC0wIGZsZXggdy1mdWxsIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBiZy1zbGF0ZS0yMDAgaC0yNCB0cmFuc2l0aW9uLWFsbFwiXHJcbiAgICAgIH1cclxuICAgID5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtcm93IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gdy0xMjgwXCI+XHJcbiAgICAgICAgPExpbmsgaHJlZj17XCIvXCJ9PlxyXG4gICAgICAgICAgPGEgY2xhc3NOYW1lPVwidGV4dC1zbGF0ZS05MDBcIj5CbG9nPC9hPlxyXG4gICAgICAgIDwvTGluaz5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXJvd1wiPlxyXG4gICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJmbGV4IHctMTYgcHQtMSBwYi0xIGJnLXNsYXRlLTUwMCByb3VuZGVkLTN4bFwiPlxyXG4gICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgIHR5cGU9XCJjaGVja2JveFwiXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImhpZGRlbiBjaGVja2VkOnRyYW5zbGF0ZS14LTEwIGJnLXNsYXRlLTIwMCByb3VuZGVkLXhsIHRyYW5zaXRpb24tYWxsIG1sLTEgY2hlY2tlZDphZnRlcjpiZy1ibGFja1wiXHJcbiAgICAgICAgICAgIG9uQ2xpY2s9e3RvZ2dsZURhcmtNb2RlfVxyXG4gICAgICAgICAgPjwvaW5wdXQ+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLXNsYXRlLTIwMCByb3VuZGVkLXhsIHRyYW5zaXRpb24tYWxsIG1sLTEgaC01IHctNVwiIC8+XHJcbiAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICA8aDEgY2xhc3NOYW1lPVwibWwtNSB0ZXh0LWJsYWNrXCI+RGFyayBNb2RlPC9oMT5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJMaW5rIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInVzZUdsb2JhbCIsIkhlYWRlciIsImRhcmtNb2RlIiwidG9nZ2xlRGFya01vZGUiLCJzY3JvbGxDb3VudCIsInNldFNjcm9sbENvdW50Iiwic2Nyb2xsZWQiLCJzZXRTY3JvbGxlZCIsIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJoYW5kbGVTY3JvbGwiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiTWF4SGVpZ2h0IiwiZG9jdW1lbnQiLCJkb2N1bWVudEVsZW1lbnQiLCJzY3JvbGxIZWlnaHQiLCJjbGllbnRIZWlnaHQiLCJTY3JvbGxQZXJjZW50Iiwic2Nyb2xsWSIsImNvbnNvbGUiLCJsb2ciLCJkaXYiLCJjbGFzc05hbWUiLCJocmVmIiwiYSIsImxhYmVsIiwiaW5wdXQiLCJ0eXBlIiwib25DbGljayIsImgxIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/header.js\n");

/***/ })

});