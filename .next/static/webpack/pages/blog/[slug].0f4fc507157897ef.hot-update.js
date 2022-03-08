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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Header; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _context_globalContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../context/globalContext */ \"./context/globalContext.js\");\n\n\n\n\nvar _s = $RefreshSig$();\nfunction Header() {\n    _s();\n    var ref = (0,_context_globalContext__WEBPACK_IMPORTED_MODULE_3__.useGlobal)(), darkMode = ref.darkMode, toggleDarkMode = ref.toggleDarkMode;\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0), scrollCount = ref1[0], setScrollCount = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false), scrolled = ref2[0], setScrolled = ref2[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        window.addEventListener(\"scroll\", handleScroll);\n        if (scrollCount > 1) {\n            setScrolled(true);\n        } else {\n            setScrolled(false);\n        }\n        return function() {\n            return window.removeEventListener(\"scroll\", handleScroll);\n        };\n    });\n    var handleScroll = function() {\n        var MaxHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;\n        var ScrollPercent = window.scrollY / MaxHeight * 100;\n        console.log(document.documentElement.clientHeight);\n        setScrollCount(ScrollPercent);\n    };\n    if (darkMode) {\n        return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: scrolled ? \"sticky top-0 left-0 flex w-full items-center justify-center bg-gray-800 h-24 transition-all\" : \"sticky top-0 left-0 flex w-full items-center justify-center bg-gray-700 h-24 transition-all\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex flex-row items-center justify-between w-1280\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                        href: \"/\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                            className: \"text-slate-100\",\n                            children: \"Blog\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\DCM\\\\Desktop\\\\Coding\\\\MyProjects\\\\Next\\\\Blog-Personal FULL\\\\Personal-Blog\\\\components\\\\header.js\",\n                            lineNumber: 41,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\DCM\\\\Desktop\\\\Coding\\\\MyProjects\\\\Next\\\\Blog-Personal FULL\\\\Personal-Blog\\\\components\\\\header.js\",\n                        lineNumber: 40,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\DCM\\\\Desktop\\\\Coding\\\\MyProjects\\\\Next\\\\Blog-Personal FULL\\\\Personal-Blog\\\\components\\\\header.js\",\n                    lineNumber: 39,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex flex-row\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                            className: \"flex w-16 pt-1 pb-1 bg-slate-300 rounded-3xl\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"checkbox\",\n                                className: \" bg-slate-800 rounded-xl transition-all ml-1 checked:translate-x-10 after:border-orange-200\",\n                                onClick: toggleDarkMode\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\DCM\\\\Desktop\\\\Coding\\\\MyProjects\\\\Next\\\\Blog-Personal FULL\\\\Personal-Blog\\\\components\\\\header.js\",\n                                lineNumber: 46,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\DCM\\\\Desktop\\\\Coding\\\\MyProjects\\\\Next\\\\Blog-Personal FULL\\\\Personal-Blog\\\\components\\\\header.js\",\n                            lineNumber: 45,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            className: \"ml-5 text-white\",\n                            children: \"Dark Mode\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\DCM\\\\Desktop\\\\Coding\\\\MyProjects\\\\Next\\\\Blog-Personal FULL\\\\Personal-Blog\\\\components\\\\header.js\",\n                            lineNumber: 52,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\DCM\\\\Desktop\\\\Coding\\\\MyProjects\\\\Next\\\\Blog-Personal FULL\\\\Personal-Blog\\\\components\\\\header.js\",\n                    lineNumber: 44,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\DCM\\\\Desktop\\\\Coding\\\\MyProjects\\\\Next\\\\Blog-Personal FULL\\\\Personal-Blog\\\\components\\\\header.js\",\n            lineNumber: 32,\n            columnNumber: 7\n        }, this));\n    }\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: scrolled ? \"sticky top-0 left-0 flex w-full items-center justify-center bg-slate-300 h-24 transition-all\" : \"sticky top-0 left-0 flex w-full items-center justify-center bg-slate-200 h-24 transition-all\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-row items-center justify-between w-1280\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                    href: \"/\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                        className: \"text-slate-900\",\n                        children: \"Blog\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\DCM\\\\Desktop\\\\Coding\\\\MyProjects\\\\Next\\\\Blog-Personal FULL\\\\Personal-Blog\\\\components\\\\header.js\",\n                        lineNumber: 68,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\DCM\\\\Desktop\\\\Coding\\\\MyProjects\\\\Next\\\\Blog-Personal FULL\\\\Personal-Blog\\\\components\\\\header.js\",\n                    lineNumber: 67,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\DCM\\\\Desktop\\\\Coding\\\\MyProjects\\\\Next\\\\Blog-Personal FULL\\\\Personal-Blog\\\\components\\\\header.js\",\n                lineNumber: 66,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-row\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        className: \"flex w-16 pt-1 pb-1 bg-slate-500 rounded-3xl\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"checkbox\",\n                            className: \" checked:translate-x-10 bg-slate-200 rounded-xl transition-all ml-1\",\n                            onClick: toggleDarkMode\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\DCM\\\\Desktop\\\\Coding\\\\MyProjects\\\\Next\\\\Blog-Personal FULL\\\\Personal-Blog\\\\components\\\\header.js\",\n                            lineNumber: 73,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\DCM\\\\Desktop\\\\Coding\\\\MyProjects\\\\Next\\\\Blog-Personal FULL\\\\Personal-Blog\\\\components\\\\header.js\",\n                        lineNumber: 72,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: \"ml-5 text-black\",\n                        children: \"Dark Mode\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\DCM\\\\Desktop\\\\Coding\\\\MyProjects\\\\Next\\\\Blog-Personal FULL\\\\Personal-Blog\\\\components\\\\header.js\",\n                        lineNumber: 79,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\DCM\\\\Desktop\\\\Coding\\\\MyProjects\\\\Next\\\\Blog-Personal FULL\\\\Personal-Blog\\\\components\\\\header.js\",\n                lineNumber: 71,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\DCM\\\\Desktop\\\\Coding\\\\MyProjects\\\\Next\\\\Blog-Personal FULL\\\\Personal-Blog\\\\components\\\\header.js\",\n        lineNumber: 59,\n        columnNumber: 5\n    }, this));\n};\n_s(Header, \"wWYQuqMpOgb9+OQrJj9QydE1lHE=\", false, function() {\n    return [\n        _context_globalContext__WEBPACK_IMPORTED_MODULE_3__.useGlobal\n    ];\n});\n_c = Header;\nvar _c;\n$RefreshReg$(_c, \"Header\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LE9BQU8sRUFBRXpCLGNBQWM7Ozs7Ozs7Ozs7O2dHQUcxQjBCLENBQUU7d0JBQUNQLFNBQVMsRUFBQyxDQUFpQjtrQ0FBQyxDQUFTOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJakQsQ0FBQztHQTlFdUJyQixNQUFNOztRQUNTRCw2REFBUzs7O0tBRHhCQyxNQUFNIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvaGVhZGVyLmpzP2MwOTgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VHbG9iYWwgfSBmcm9tIFwiLi4vY29udGV4dC9nbG9iYWxDb250ZXh0XCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIZWFkZXIoKSB7XHJcbiAgY29uc3QgeyBkYXJrTW9kZSwgdG9nZ2xlRGFya01vZGUgfSA9IHVzZUdsb2JhbCgpO1xyXG4gIGNvbnN0IFtzY3JvbGxDb3VudCwgc2V0U2Nyb2xsQ291bnRdID0gdXNlU3RhdGUoMCk7XHJcbiAgY29uc3QgW3Njcm9sbGVkLCBzZXRTY3JvbGxlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCBoYW5kbGVTY3JvbGwpO1xyXG4gICAgaWYgKHNjcm9sbENvdW50ID4gMSkge1xyXG4gICAgICBzZXRTY3JvbGxlZCh0cnVlKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHNldFNjcm9sbGVkKGZhbHNlKTtcclxuICAgIH1cclxuICAgIHJldHVybiAoKSA9PiB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCBoYW5kbGVTY3JvbGwpO1xyXG4gIH0pO1xyXG5cclxuICBjb25zdCBoYW5kbGVTY3JvbGwgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBNYXhIZWlnaHQgPVxyXG4gICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsSGVpZ2h0IC1cclxuICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodDtcclxuICAgIGNvbnN0IFNjcm9sbFBlcmNlbnQgPSAod2luZG93LnNjcm9sbFkgLyBNYXhIZWlnaHQpICogMTAwO1xyXG5cclxuICAgIGNvbnNvbGUubG9nKGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHQpO1xyXG4gICAgc2V0U2Nyb2xsQ291bnQoU2Nyb2xsUGVyY2VudCk7XHJcbiAgfTtcclxuXHJcbiAgaWYgKGRhcmtNb2RlKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2XHJcbiAgICAgICAgY2xhc3NOYW1lPXtcclxuICAgICAgICAgIHNjcm9sbGVkXHJcbiAgICAgICAgICAgID8gXCJzdGlja3kgdG9wLTAgbGVmdC0wIGZsZXggdy1mdWxsIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBiZy1ncmF5LTgwMCBoLTI0IHRyYW5zaXRpb24tYWxsXCJcclxuICAgICAgICAgICAgOiBcInN0aWNreSB0b3AtMCBsZWZ0LTAgZmxleCB3LWZ1bGwgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIGJnLWdyYXktNzAwIGgtMjQgdHJhbnNpdGlvbi1hbGxcIlxyXG4gICAgICAgIH1cclxuICAgICAgPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXJvdyBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIHctMTI4MFwiPlxyXG4gICAgICAgICAgPExpbmsgaHJlZj17XCIvXCJ9PlxyXG4gICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJ0ZXh0LXNsYXRlLTEwMFwiPkJsb2c8L2E+XHJcbiAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtcm93XCI+XHJcbiAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiZmxleCB3LTE2IHB0LTEgcGItMSBiZy1zbGF0ZS0zMDAgcm91bmRlZC0zeGxcIj5cclxuICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgdHlwZT1cImNoZWNrYm94XCJcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCIgYmctc2xhdGUtODAwIHJvdW5kZWQteGwgdHJhbnNpdGlvbi1hbGwgbWwtMSBjaGVja2VkOnRyYW5zbGF0ZS14LTEwIGFmdGVyOmJvcmRlci1vcmFuZ2UtMjAwXCJcclxuICAgICAgICAgICAgICBvbkNsaWNrPXt0b2dnbGVEYXJrTW9kZX1cclxuICAgICAgICAgICAgPjwvaW5wdXQ+XHJcbiAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgPGgxIGNsYXNzTmFtZT1cIm1sLTUgdGV4dC13aGl0ZVwiPkRhcmsgTW9kZTwvaDE+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2XHJcbiAgICAgIGNsYXNzTmFtZT17XHJcbiAgICAgICAgc2Nyb2xsZWRcclxuICAgICAgICAgID8gXCJzdGlja3kgdG9wLTAgbGVmdC0wIGZsZXggdy1mdWxsIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBiZy1zbGF0ZS0zMDAgaC0yNCB0cmFuc2l0aW9uLWFsbFwiXHJcbiAgICAgICAgICA6IFwic3RpY2t5IHRvcC0wIGxlZnQtMCBmbGV4IHctZnVsbCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgYmctc2xhdGUtMjAwIGgtMjQgdHJhbnNpdGlvbi1hbGxcIlxyXG4gICAgICB9XHJcbiAgICA+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXJvdyBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIHctMTI4MFwiPlxyXG4gICAgICAgIDxMaW5rIGhyZWY9e1wiL1wifT5cclxuICAgICAgICAgIDxhIGNsYXNzTmFtZT1cInRleHQtc2xhdGUtOTAwXCI+QmxvZzwvYT5cclxuICAgICAgICA8L0xpbms+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1yb3dcIj5cclxuICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiZmxleCB3LTE2IHB0LTEgcGItMSBiZy1zbGF0ZS01MDAgcm91bmRlZC0zeGxcIj5cclxuICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICB0eXBlPVwiY2hlY2tib3hcIlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCIgY2hlY2tlZDp0cmFuc2xhdGUteC0xMCBiZy1zbGF0ZS0yMDAgcm91bmRlZC14bCB0cmFuc2l0aW9uLWFsbCBtbC0xXCJcclxuICAgICAgICAgICAgb25DbGljaz17dG9nZ2xlRGFya01vZGV9XHJcbiAgICAgICAgICA+PC9pbnB1dD5cclxuICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgIDxoMSBjbGFzc05hbWU9XCJtbC01IHRleHQtYmxhY2tcIj5EYXJrIE1vZGU8L2gxPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuIl0sIm5hbWVzIjpbIkxpbmsiLCJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwidXNlR2xvYmFsIiwiSGVhZGVyIiwiZGFya01vZGUiLCJ0b2dnbGVEYXJrTW9kZSIsInNjcm9sbENvdW50Iiwic2V0U2Nyb2xsQ291bnQiLCJzY3JvbGxlZCIsInNldFNjcm9sbGVkIiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsImhhbmRsZVNjcm9sbCIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJNYXhIZWlnaHQiLCJkb2N1bWVudCIsImRvY3VtZW50RWxlbWVudCIsInNjcm9sbEhlaWdodCIsImNsaWVudEhlaWdodCIsIlNjcm9sbFBlcmNlbnQiLCJzY3JvbGxZIiwiY29uc29sZSIsImxvZyIsImRpdiIsImNsYXNzTmFtZSIsImhyZWYiLCJhIiwibGFiZWwiLCJpbnB1dCIsInR5cGUiLCJvbkNsaWNrIiwiaDEiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/header.js\n");

/***/ })

});