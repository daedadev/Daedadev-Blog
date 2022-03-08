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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Header; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _context_globalContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../context/globalContext */ \"./context/globalContext.js\");\n\n\n\n\nvar _s = $RefreshSig$();\nfunction Header() {\n    _s();\n    var ref = (0,_context_globalContext__WEBPACK_IMPORTED_MODULE_3__.useGlobal)(), darkMode = ref.darkMode, toggleDarkMode = ref.toggleDarkMode;\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0), scrollCount = ref1[0], setScrollCount = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false), scrolled = ref2[0], setScrolled = ref2[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        window.addEventListener(\"scroll\", handleScroll);\n        if (scrollCount > 1) {\n            setScrolled(true);\n        } else {\n            setScrolled(false);\n        }\n        return function() {\n            return window.removeEventListener(\"scroll\", handleScroll);\n        };\n    });\n    var handleScroll = function() {\n        var MaxHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;\n        var ScrollPercent = window.scrollY / MaxHeight * 100;\n        console.log(document.documentElement.clientHeight);\n        setScrollCount(ScrollPercent);\n    };\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: scrolled ? \"sticky top-0 left-0 flex w-full items-center justify-center bg-gray-800 h-24 transition-all\" : \"sticky top-0 left-0 flex w-full items-center justify-center bg-gray-700 h-24 transition-all\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-row items-center justify-between w-1280\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                    href: \"/\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                        className: \"text-slate-100\",\n                        children: \"Blog\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\DCM\\\\Desktop\\\\Coding\\\\MyProjects\\\\Next\\\\Blog-Personal FULL\\\\Personal-Blog\\\\components\\\\header.js\",\n                        lineNumber: 40,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\DCM\\\\Desktop\\\\Coding\\\\MyProjects\\\\Next\\\\Blog-Personal FULL\\\\Personal-Blog\\\\components\\\\header.js\",\n                    lineNumber: 39,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\DCM\\\\Desktop\\\\Coding\\\\MyProjects\\\\Next\\\\Blog-Personal FULL\\\\Personal-Blog\\\\components\\\\header.js\",\n                lineNumber: 38,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-row\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        className: \"flex w-16 pt-1 pb-1 bg-slate-300 rounded-3xl\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"checkbox\",\n                                className: \" bg-slate-800 rounded-xl transition-all ml-1 checked:translate-x-10 checked:after:bg-black\",\n                                onClick: toggleDarkMode\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\DCM\\\\Desktop\\\\Coding\\\\MyProjects\\\\Next\\\\Blog-Personal FULL\\\\Personal-Blog\\\\components\\\\header.js\",\n                                lineNumber: 45,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: darkMode ? \"bg-slate-800 rounded-xl transition-all ml-1\" : \"bg-slate-800 rounded-xl transition-all ml-1\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\DCM\\\\Desktop\\\\Coding\\\\MyProjects\\\\Next\\\\Blog-Personal FULL\\\\Personal-Blog\\\\components\\\\header.js\",\n                                lineNumber: 50,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\DCM\\\\Desktop\\\\Coding\\\\MyProjects\\\\Next\\\\Blog-Personal FULL\\\\Personal-Blog\\\\components\\\\header.js\",\n                        lineNumber: 44,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: \"ml-5 text-white\",\n                        children: \"Dark Mode\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\DCM\\\\Desktop\\\\Coding\\\\MyProjects\\\\Next\\\\Blog-Personal FULL\\\\Personal-Blog\\\\components\\\\header.js\",\n                        lineNumber: 58,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\DCM\\\\Desktop\\\\Coding\\\\MyProjects\\\\Next\\\\Blog-Personal FULL\\\\Personal-Blog\\\\components\\\\header.js\",\n                lineNumber: 43,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\DCM\\\\Desktop\\\\Coding\\\\MyProjects\\\\Next\\\\Blog-Personal FULL\\\\Personal-Blog\\\\components\\\\header.js\",\n        lineNumber: 31,\n        columnNumber: 5\n    }, this));\n// return (\n//   <div\n//     className={\n//       scrolled\n//         ? \"sticky top-0 left-0 flex w-full items-center justify-center bg-slate-300 h-24 transition-all\"\n//         : \"sticky top-0 left-0 flex w-full items-center justify-center bg-slate-200 h-24 transition-all\"\n//     }\n//   >\n//     <div className=\"flex flex-row items-center justify-between w-1280\">\n//       <Link href={\"/\"}>\n//         <a className=\"text-slate-900\">Blog</a>\n//       </Link>\n//     </div>\n//     <div className=\"flex flex-row\">\n//       <label className=\"flex w-16 pt-1 pb-1 bg-slate-500 rounded-3xl\">\n//         <input\n//           type=\"checkbox\"\n//           className=\" checked:translate-x-10 bg-slate-200 rounded-xl transition-all ml-1 checked:after:bg-black\"\n//           onClick={toggleDarkMode}\n//         ></input>\n//       </label>\n//       <h1 className=\"ml-5 text-black\">Dark Mode</h1>\n//     </div>\n//   </div>\n// );\n};\n_s(Header, \"wWYQuqMpOgb9+OQrJj9QydE1lHE=\", false, function() {\n    return [\n        _context_globalContext__WEBPACK_IMPORTED_MODULE_3__.useGlobal\n    ];\n});\n_c = Header;\nvar _c;\n$RefreshReg$(_c, \"Header\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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NkRBQVM7OztLQUR4QkMsTUFBTSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2hlYWRlci5qcz9jMDk4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlR2xvYmFsIH0gZnJvbSBcIi4uL2NvbnRleHQvZ2xvYmFsQ29udGV4dFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSGVhZGVyKCkge1xyXG4gIGNvbnN0IHsgZGFya01vZGUsIHRvZ2dsZURhcmtNb2RlIH0gPSB1c2VHbG9iYWwoKTtcclxuICBjb25zdCBbc2Nyb2xsQ291bnQsIHNldFNjcm9sbENvdW50XSA9IHVzZVN0YXRlKDApO1xyXG4gIGNvbnN0IFtzY3JvbGxlZCwgc2V0U2Nyb2xsZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgaGFuZGxlU2Nyb2xsKTtcclxuICAgIGlmIChzY3JvbGxDb3VudCA+IDEpIHtcclxuICAgICAgc2V0U2Nyb2xsZWQodHJ1ZSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBzZXRTY3JvbGxlZChmYWxzZSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gKCkgPT4gd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgaGFuZGxlU2Nyb2xsKTtcclxuICB9KTtcclxuXHJcbiAgY29uc3QgaGFuZGxlU2Nyb2xsID0gKCkgPT4ge1xyXG4gICAgY29uc3QgTWF4SGVpZ2h0ID1cclxuICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbEhlaWdodCAtXHJcbiAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHQ7XHJcbiAgICBjb25zdCBTY3JvbGxQZXJjZW50ID0gKHdpbmRvdy5zY3JvbGxZIC8gTWF4SGVpZ2h0KSAqIDEwMDtcclxuXHJcbiAgICBjb25zb2xlLmxvZyhkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0KTtcclxuICAgIHNldFNjcm9sbENvdW50KFNjcm9sbFBlcmNlbnQpO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2XHJcbiAgICAgIGNsYXNzTmFtZT17XHJcbiAgICAgICAgc2Nyb2xsZWRcclxuICAgICAgICAgID8gXCJzdGlja3kgdG9wLTAgbGVmdC0wIGZsZXggdy1mdWxsIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBiZy1ncmF5LTgwMCBoLTI0IHRyYW5zaXRpb24tYWxsXCJcclxuICAgICAgICAgIDogXCJzdGlja3kgdG9wLTAgbGVmdC0wIGZsZXggdy1mdWxsIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBiZy1ncmF5LTcwMCBoLTI0IHRyYW5zaXRpb24tYWxsXCJcclxuICAgICAgfVxyXG4gICAgPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1yb3cgaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiB3LTEyODBcIj5cclxuICAgICAgICA8TGluayBocmVmPXtcIi9cIn0+XHJcbiAgICAgICAgICA8YSBjbGFzc05hbWU9XCJ0ZXh0LXNsYXRlLTEwMFwiPkJsb2c8L2E+XHJcbiAgICAgICAgPC9MaW5rPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtcm93XCI+XHJcbiAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImZsZXggdy0xNiBwdC0xIHBiLTEgYmctc2xhdGUtMzAwIHJvdW5kZWQtM3hsXCI+XHJcbiAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgdHlwZT1cImNoZWNrYm94XCJcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiIGJnLXNsYXRlLTgwMCByb3VuZGVkLXhsIHRyYW5zaXRpb24tYWxsIG1sLTEgY2hlY2tlZDp0cmFuc2xhdGUteC0xMCBjaGVja2VkOmFmdGVyOmJnLWJsYWNrXCJcclxuICAgICAgICAgICAgb25DbGljaz17dG9nZ2xlRGFya01vZGV9XHJcbiAgICAgICAgICA+PC9pbnB1dD5cclxuICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtcclxuICAgICAgICAgICAgICBkYXJrTW9kZVxyXG4gICAgICAgICAgICAgICAgPyBcImJnLXNsYXRlLTgwMCByb3VuZGVkLXhsIHRyYW5zaXRpb24tYWxsIG1sLTFcIlxyXG4gICAgICAgICAgICAgICAgOiBcImJnLXNsYXRlLTgwMCByb3VuZGVkLXhsIHRyYW5zaXRpb24tYWxsIG1sLTFcIlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgPGgxIGNsYXNzTmFtZT1cIm1sLTUgdGV4dC13aGl0ZVwiPkRhcmsgTW9kZTwvaDE+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxuXHJcbiAgLy8gcmV0dXJuIChcclxuICAvLyAgIDxkaXZcclxuICAvLyAgICAgY2xhc3NOYW1lPXtcclxuICAvLyAgICAgICBzY3JvbGxlZFxyXG4gIC8vICAgICAgICAgPyBcInN0aWNreSB0b3AtMCBsZWZ0LTAgZmxleCB3LWZ1bGwgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIGJnLXNsYXRlLTMwMCBoLTI0IHRyYW5zaXRpb24tYWxsXCJcclxuICAvLyAgICAgICAgIDogXCJzdGlja3kgdG9wLTAgbGVmdC0wIGZsZXggdy1mdWxsIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBiZy1zbGF0ZS0yMDAgaC0yNCB0cmFuc2l0aW9uLWFsbFwiXHJcbiAgLy8gICAgIH1cclxuICAvLyAgID5cclxuICAvLyAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtcm93IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gdy0xMjgwXCI+XHJcbiAgLy8gICAgICAgPExpbmsgaHJlZj17XCIvXCJ9PlxyXG4gIC8vICAgICAgICAgPGEgY2xhc3NOYW1lPVwidGV4dC1zbGF0ZS05MDBcIj5CbG9nPC9hPlxyXG4gIC8vICAgICAgIDwvTGluaz5cclxuICAvLyAgICAgPC9kaXY+XHJcbiAgLy8gICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXJvd1wiPlxyXG4gIC8vICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJmbGV4IHctMTYgcHQtMSBwYi0xIGJnLXNsYXRlLTUwMCByb3VuZGVkLTN4bFwiPlxyXG4gIC8vICAgICAgICAgPGlucHV0XHJcbiAgLy8gICAgICAgICAgIHR5cGU9XCJjaGVja2JveFwiXHJcbiAgLy8gICAgICAgICAgIGNsYXNzTmFtZT1cIiBjaGVja2VkOnRyYW5zbGF0ZS14LTEwIGJnLXNsYXRlLTIwMCByb3VuZGVkLXhsIHRyYW5zaXRpb24tYWxsIG1sLTEgY2hlY2tlZDphZnRlcjpiZy1ibGFja1wiXHJcbiAgLy8gICAgICAgICAgIG9uQ2xpY2s9e3RvZ2dsZURhcmtNb2RlfVxyXG4gIC8vICAgICAgICAgPjwvaW5wdXQ+XHJcbiAgLy8gICAgICAgPC9sYWJlbD5cclxuICAvLyAgICAgICA8aDEgY2xhc3NOYW1lPVwibWwtNSB0ZXh0LWJsYWNrXCI+RGFyayBNb2RlPC9oMT5cclxuICAvLyAgICAgPC9kaXY+XHJcbiAgLy8gICA8L2Rpdj5cclxuICAvLyApO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJMaW5rIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInVzZUdsb2JhbCIsIkhlYWRlciIsImRhcmtNb2RlIiwidG9nZ2xlRGFya01vZGUiLCJzY3JvbGxDb3VudCIsInNldFNjcm9sbENvdW50Iiwic2Nyb2xsZWQiLCJzZXRTY3JvbGxlZCIsIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJoYW5kbGVTY3JvbGwiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiTWF4SGVpZ2h0IiwiZG9jdW1lbnQiLCJkb2N1bWVudEVsZW1lbnQiLCJzY3JvbGxIZWlnaHQiLCJjbGllbnRIZWlnaHQiLCJTY3JvbGxQZXJjZW50Iiwic2Nyb2xsWSIsImNvbnNvbGUiLCJsb2ciLCJkaXYiLCJjbGFzc05hbWUiLCJocmVmIiwiYSIsImxhYmVsIiwiaW5wdXQiLCJ0eXBlIiwib25DbGljayIsImgxIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/header.js\n");

/***/ })

});