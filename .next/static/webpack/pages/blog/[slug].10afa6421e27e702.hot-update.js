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

/***/ "./components/tableofContents.js":
/*!***************************************!*\
  !*** ./components/tableofContents.js ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ TableOfContents; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _context_globalContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../context/globalContext */ \"./context/globalContext.js\");\n/* harmony import */ var _functions_ScrollFunctions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../functions/ScrollFunctions */ \"./functions/ScrollFunctions.js\");\n\n\n\n\nvar _s = $RefreshSig$();\nfunction TableOfContents(articleSections) {\n    var _this = this;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), scrolledArticle = ref[0], setScrolledArticle = ref[1];\n    var darkMode = (0,_context_globalContext__WEBPACK_IMPORTED_MODULE_2__.useGlobal)().darkMode;\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        window.addEventListener(\"scroll\");\n        setScrolledArticle((0,_functions_ScrollFunctions__WEBPACK_IMPORTED_MODULE_3__.checkScrolled)(85));\n        return function() {\n            return window.removeEventListener(\"scroll\");\n        };\n    });\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: scrolledArticle ? \"xl:flex fixed hidden w-60 top-0 items-start justify-center left-0 h-full  ease-in-out duration-500\" : \"xl:flex absolute hidden w-60 top-25 items-start justify-center left-0 h-full ease-in-out duration-500\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: darkMode ? \"xl:flex flex-col hidden bg-slate-700 text-slate-400 font-semibold h-fit w-full mt-72 p-5 ml-5 rounded-md ease-in-out duration-500 \" : \"xl:flex flex-col hidden bg-slate-100 text-slate-500 font-semibold h-fit w-full mt-72 p-5 ml-5 rounded-md ease-in-out duration-500\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    className: darkMode ? \"mb-2 text-slate-200\" : \"mb-2 text-black\",\n                    children: \"Table of Contents\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\DCM\\\\Desktop\\\\Coding\\\\MyProjects\\\\Next\\\\Blog-Personal FULL\\\\Personal-Blog\\\\components\\\\tableofContents.js\",\n                    lineNumber: 31,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                    className: darkMode ? \"hover:cursor-pointer mb-2 hover:text-slate-200\" : \"hover:cursor-pointer mb-2 hover:text-black\",\n                    href: \"#top\",\n                    children: \"- To Top\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\DCM\\\\Desktop\\\\Coding\\\\MyProjects\\\\Next\\\\Blog-Personal FULL\\\\Personal-Blog\\\\components\\\\tableofContents.js\",\n                    lineNumber: 34,\n                    columnNumber: 9\n                }, this),\n                articleSections && articleSections.map(function(heading, index) {\n                    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                        className: darkMode ? \"hover:cursor-pointer mb-2 hover:text-slate-200\" : \"hover:cursor-pointer mb-2 hover:text-black\",\n                        href: \"#\".concat(heading),\n                        children: [\n                            \"- \",\n                            heading\n                        ]\n                    }, index, true, {\n                        fileName: \"C:\\\\Users\\\\DCM\\\\Desktop\\\\Coding\\\\MyProjects\\\\Next\\\\Blog-Personal FULL\\\\Personal-Blog\\\\components\\\\tableofContents.js\",\n                        lineNumber: 47,\n                        columnNumber: 15\n                    }, _this));\n                }),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                    className: darkMode ? \"hover:cursor-pointer mb-2 hover:text-slate-200\" : \"hover:cursor-pointer mb-2 hover:text-black\",\n                    href: \"#bottom\",\n                    children: \"- To Bottom\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\DCM\\\\Desktop\\\\Coding\\\\MyProjects\\\\Next\\\\Blog-Personal FULL\\\\Personal-Blog\\\\components\\\\tableofContents.js\",\n                    lineNumber: 60,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\DCM\\\\Desktop\\\\Coding\\\\MyProjects\\\\Next\\\\Blog-Personal FULL\\\\Personal-Blog\\\\components\\\\tableofContents.js\",\n            lineNumber: 24,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\DCM\\\\Desktop\\\\Coding\\\\MyProjects\\\\Next\\\\Blog-Personal FULL\\\\Personal-Blog\\\\components\\\\tableofContents.js\",\n        lineNumber: 17,\n        columnNumber: 5\n    }, this));\n};\n_s(TableOfContents, \"2fPYh8n4KuZxQ0Wh7ue5nIJ9DL4=\", false, function() {\n    return [\n        _context_globalContext__WEBPACK_IMPORTED_MODULE_2__.useGlobal\n    ];\n});\n_c = TableOfContents;\nvar _c;\n$RefreshReg$(_c, \"TableOfContents\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3RhYmxlb2ZDb250ZW50cy5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFrRDtBQUNFO0FBQ1E7O0FBRTdDLFFBQVEsQ0FBQ0ssZUFBZSxDQUFDQyxlQUFlLEVBQUUsQ0FBQzs7O0lBQ3hELEdBQUssQ0FBeUNMLEdBQWUsR0FBZkEsK0NBQVEsQ0FBQyxLQUFLLEdBQXJETSxlQUFlLEdBQXdCTixHQUFlLEtBQXJDTyxrQkFBa0IsR0FBSVAsR0FBZTtJQUU3RCxHQUFLLENBQUdRLFFBQVEsR0FBS04saUVBQVMsR0FBdEJNLFFBQVE7SUFFaEJQLGdEQUFTLENBQUMsUUFBUSxHQUFGLENBQUM7UUFDZlEsTUFBTSxDQUFDQyxnQkFBZ0IsQ0FBQyxDQUFRO1FBQ2hDSCxrQkFBa0IsQ0FBQ0oseUVBQWEsQ0FBQyxFQUFFO1FBQ25DLE1BQU0sQ0FBQyxRQUFRO1lBQUZNLE1BQU0sQ0FBTkEsTUFBTSxDQUFDRSxtQkFBbUIsQ0FBQyxDQUFROztJQUNsRCxDQUFDO0lBRUQsTUFBTSw2RUFDSEMsQ0FBRztRQUNGQyxTQUFTLEVBQ1BQLGVBQWUsR0FDWCxDQUFvRyxzR0FDcEcsQ0FBdUc7OEZBRzVHTSxDQUFHO1lBQ0ZDLFNBQVMsRUFDUEwsUUFBUSxHQUNKLENBQW9JLHNJQUNwSSxDQUFtSTs7NEZBR3hJTSxDQUFFO29CQUFDRCxTQUFTLEVBQUVMLFFBQVEsR0FBRyxDQUFxQix1QkFBRyxDQUFpQjs4QkFBRSxDQUVyRTs7Ozs7OzRGQUNDTyxDQUFDO29CQUNBRixTQUFTLEVBQ1BMLFFBQVEsR0FDSixDQUFnRCxrREFDaEQsQ0FBNEM7b0JBRWxEUSxJQUFJLEVBQUcsQ0FBSTs4QkFDWixDQUVEOzs7Ozs7Z0JBQ0NYLGVBQWUsSUFDZEEsZUFBZSxDQUFDWSxHQUFHLENBQUMsUUFBUSxDQUFQQyxPQUFPLEVBQUVDLEtBQUssRUFBSyxDQUFDO29CQUN2QyxNQUFNLDZFQUNISixDQUFDO3dCQUNBRixTQUFTLEVBQ1BMLFFBQVEsR0FDSixDQUFnRCxrREFDaEQsQ0FBNEM7d0JBRWxEUSxJQUFJLEVBQUcsQ0FBQyxHQUFVLE9BQVJFLE9BQU87OzRCQUVsQixDQUNHOzRCQUFDQSxPQUFPOzt1QkFGTEMsS0FBSzs7Ozs7Z0JBS2hCLENBQUM7NEZBQ0ZKLENBQUM7b0JBQ0FGLFNBQVMsRUFDUEwsUUFBUSxHQUNKLENBQWdELGtEQUNoRCxDQUE0QztvQkFFbERRLElBQUksRUFBRyxDQUFPOzhCQUNmLENBRUQ7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSVIsQ0FBQztHQXBFdUJaLGVBQWU7O1FBR2hCRiw2REFBUzs7O0tBSFJFLGVBQWUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy90YWJsZW9mQ29udGVudHMuanM/YWFjMyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VHbG9iYWwgfSBmcm9tIFwiLi4vY29udGV4dC9nbG9iYWxDb250ZXh0XCI7XHJcbmltcG9ydCB7IGNoZWNrU2Nyb2xsZWQgfSBmcm9tIFwiLi4vZnVuY3Rpb25zL1Njcm9sbEZ1bmN0aW9uc1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVGFibGVPZkNvbnRlbnRzKGFydGljbGVTZWN0aW9ucykge1xyXG4gIGNvbnN0IFtzY3JvbGxlZEFydGljbGUsIHNldFNjcm9sbGVkQXJ0aWNsZV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIGNvbnN0IHsgZGFya01vZGUgfSA9IHVzZUdsb2JhbCgpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIik7XHJcbiAgICBzZXRTY3JvbGxlZEFydGljbGUoY2hlY2tTY3JvbGxlZCg4NSkpO1xyXG4gICAgcmV0dXJuICgpID0+IHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIpO1xyXG4gIH0pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdlxyXG4gICAgICBjbGFzc05hbWU9e1xyXG4gICAgICAgIHNjcm9sbGVkQXJ0aWNsZVxyXG4gICAgICAgICAgPyBcInhsOmZsZXggZml4ZWQgaGlkZGVuIHctNjAgdG9wLTAgaXRlbXMtc3RhcnQganVzdGlmeS1jZW50ZXIgbGVmdC0wIGgtZnVsbCAgZWFzZS1pbi1vdXQgZHVyYXRpb24tNTAwXCJcclxuICAgICAgICAgIDogXCJ4bDpmbGV4IGFic29sdXRlIGhpZGRlbiB3LTYwIHRvcC0yNSBpdGVtcy1zdGFydCBqdXN0aWZ5LWNlbnRlciBsZWZ0LTAgaC1mdWxsIGVhc2UtaW4tb3V0IGR1cmF0aW9uLTUwMFwiXHJcbiAgICAgIH1cclxuICAgID5cclxuICAgICAgPGRpdlxyXG4gICAgICAgIGNsYXNzTmFtZT17XHJcbiAgICAgICAgICBkYXJrTW9kZVxyXG4gICAgICAgICAgICA/IFwieGw6ZmxleCBmbGV4LWNvbCBoaWRkZW4gYmctc2xhdGUtNzAwIHRleHQtc2xhdGUtNDAwIGZvbnQtc2VtaWJvbGQgaC1maXQgdy1mdWxsIG10LTcyIHAtNSBtbC01IHJvdW5kZWQtbWQgZWFzZS1pbi1vdXQgZHVyYXRpb24tNTAwIFwiXHJcbiAgICAgICAgICAgIDogXCJ4bDpmbGV4IGZsZXgtY29sIGhpZGRlbiBiZy1zbGF0ZS0xMDAgdGV4dC1zbGF0ZS01MDAgZm9udC1zZW1pYm9sZCBoLWZpdCB3LWZ1bGwgbXQtNzIgcC01IG1sLTUgcm91bmRlZC1tZCBlYXNlLWluLW91dCBkdXJhdGlvbi01MDBcIlxyXG4gICAgICAgIH1cclxuICAgICAgPlxyXG4gICAgICAgIDxoMSBjbGFzc05hbWU9e2RhcmtNb2RlID8gXCJtYi0yIHRleHQtc2xhdGUtMjAwXCIgOiBcIm1iLTIgdGV4dC1ibGFja1wifT5cclxuICAgICAgICAgIFRhYmxlIG9mIENvbnRlbnRzXHJcbiAgICAgICAgPC9oMT5cclxuICAgICAgICA8YVxyXG4gICAgICAgICAgY2xhc3NOYW1lPXtcclxuICAgICAgICAgICAgZGFya01vZGVcclxuICAgICAgICAgICAgICA/IFwiaG92ZXI6Y3Vyc29yLXBvaW50ZXIgbWItMiBob3Zlcjp0ZXh0LXNsYXRlLTIwMFwiXHJcbiAgICAgICAgICAgICAgOiBcImhvdmVyOmN1cnNvci1wb2ludGVyIG1iLTIgaG92ZXI6dGV4dC1ibGFja1wiXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBocmVmPXtgI3RvcGB9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgLSBUbyBUb3BcclxuICAgICAgICA8L2E+XHJcbiAgICAgICAge2FydGljbGVTZWN0aW9ucyAmJlxyXG4gICAgICAgICAgYXJ0aWNsZVNlY3Rpb25zLm1hcCgoaGVhZGluZywgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtcclxuICAgICAgICAgICAgICAgICAgZGFya01vZGVcclxuICAgICAgICAgICAgICAgICAgICA/IFwiaG92ZXI6Y3Vyc29yLXBvaW50ZXIgbWItMiBob3Zlcjp0ZXh0LXNsYXRlLTIwMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgOiBcImhvdmVyOmN1cnNvci1wb2ludGVyIG1iLTIgaG92ZXI6dGV4dC1ibGFja1wiXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBocmVmPXtgIyR7aGVhZGluZ31gfVxyXG4gICAgICAgICAgICAgICAga2V5PXtpbmRleH1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAtIHtoZWFkaW5nfVxyXG4gICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgIH0pfVxyXG4gICAgICAgIDxhXHJcbiAgICAgICAgICBjbGFzc05hbWU9e1xyXG4gICAgICAgICAgICBkYXJrTW9kZVxyXG4gICAgICAgICAgICAgID8gXCJob3ZlcjpjdXJzb3ItcG9pbnRlciBtYi0yIGhvdmVyOnRleHQtc2xhdGUtMjAwXCJcclxuICAgICAgICAgICAgICA6IFwiaG92ZXI6Y3Vyc29yLXBvaW50ZXIgbWItMiBob3Zlcjp0ZXh0LWJsYWNrXCJcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGhyZWY9e2AjYm90dG9tYH1cclxuICAgICAgICA+XHJcbiAgICAgICAgICAtIFRvIEJvdHRvbVxyXG4gICAgICAgIDwvYT5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwidXNlR2xvYmFsIiwiY2hlY2tTY3JvbGxlZCIsIlRhYmxlT2ZDb250ZW50cyIsImFydGljbGVTZWN0aW9ucyIsInNjcm9sbGVkQXJ0aWNsZSIsInNldFNjcm9sbGVkQXJ0aWNsZSIsImRhcmtNb2RlIiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJkaXYiLCJjbGFzc05hbWUiLCJoMSIsImEiLCJocmVmIiwibWFwIiwiaGVhZGluZyIsImluZGV4Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/tableofContents.js\n");

/***/ })

});