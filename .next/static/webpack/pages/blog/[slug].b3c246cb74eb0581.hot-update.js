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

/***/ "./pages/blog/[slug].js":
/*!******************************!*\
  !*** ./pages/blog/[slug].js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; },\n/* harmony export */   \"default\": function() { return /* binding */ PostPage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var marked__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! marked */ \"./node_modules/marked/lib/marked.esm.js\");\n\n\n\n\nvar _s = $RefreshSig$();\nvar hljs = __webpack_require__(/*! highlight.js */ \"./node_modules/highlight.js/lib/index.js\");\nvar __N_SSG = true;\nfunction PostPage(param) {\n    var _frontmatter = param.frontmatter, title = _frontmatter.title, date = _frontmatter.date, cover_image = _frontmatter.cover_image, excerpt = _frontmatter.excerpt, slug = param.slug, content = param.content;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"markdown-dark\"), theme = ref[0], setTheme = ref[1];\n    marked__WEBPACK_IMPORTED_MODULE_3__.marked.setOptions({\n        langPrefix: \"hljs language-\",\n        highlight: function highlight(code) {\n            return hljs.highlightAuto(code, [\n                \"html\",\n                \"javascript\"\n            ]).value;\n        }\n    });\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: title\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\DCM\\\\Desktop\\\\Coding\\\\MyProjects\\\\Next\\\\Blog-Personal FULL\\\\Personal-Blog\\\\pages\\\\blog\\\\[slug].js\",\n                        lineNumber: 25,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: excerpt\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\DCM\\\\Desktop\\\\Coding\\\\MyProjects\\\\Next\\\\Blog-Personal FULL\\\\Personal-Blog\\\\pages\\\\blog\\\\[slug].js\",\n                        lineNumber: 26,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/favicon.ico\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\DCM\\\\Desktop\\\\Coding\\\\MyProjects\\\\Next\\\\Blog-Personal FULL\\\\Personal-Blog\\\\pages\\\\blog\\\\[slug].js\",\n                        lineNumber: 27,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\DCM\\\\Desktop\\\\Coding\\\\MyProjects\\\\Next\\\\Blog-Personal FULL\\\\Personal-Blog\\\\pages\\\\blog\\\\[slug].js\",\n                lineNumber: 24,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                className: \"flex flex-col items-center min-h-screen bg-slate-600 pb-20\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                    className: \"flex flex-row flex-wrap justify-center w-748\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                    className: \"text-5xl mt-10 mb-5 \",\n                                    children: title\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\DCM\\\\Desktop\\\\Coding\\\\MyProjects\\\\Next\\\\Blog-Personal FULL\\\\Personal-Blog\\\\pages\\\\blog\\\\[slug].js\",\n                                    lineNumber: 32,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"bg-slate-700 text-slate-300 mb-5 pl-5\",\n                                    children: [\n                                        \"Posted on \",\n                                        date\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\DCM\\\\Desktop\\\\Coding\\\\MyProjects\\\\Next\\\\Blog-Personal FULL\\\\Personal-Blog\\\\pages\\\\blog\\\\[slug].js\",\n                                    lineNumber: 33,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                    src: cover_image\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\DCM\\\\Desktop\\\\Coding\\\\MyProjects\\\\Next\\\\Blog-Personal FULL\\\\Personal-Blog\\\\pages\\\\blog\\\\[slug].js\",\n                                    lineNumber: 36,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\DCM\\\\Desktop\\\\Coding\\\\MyProjects\\\\Next\\\\Blog-Personal FULL\\\\Personal-Blog\\\\pages\\\\blog\\\\[slug].js\",\n                            lineNumber: 31,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            id: theme,\n                            className: \"flex flex-col pl-20 pr-20\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                dangerouslySetInnerHTML: {\n                                    __html: (0,marked__WEBPACK_IMPORTED_MODULE_3__.marked)(content)\n                                }\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\DCM\\\\Desktop\\\\Coding\\\\MyProjects\\\\Next\\\\Blog-Personal FULL\\\\Personal-Blog\\\\pages\\\\blog\\\\[slug].js\",\n                                lineNumber: 39,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\DCM\\\\Desktop\\\\Coding\\\\MyProjects\\\\Next\\\\Blog-Personal FULL\\\\Personal-Blog\\\\pages\\\\blog\\\\[slug].js\",\n                            lineNumber: 38,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\DCM\\\\Desktop\\\\Coding\\\\MyProjects\\\\Next\\\\Blog-Personal FULL\\\\Personal-Blog\\\\pages\\\\blog\\\\[slug].js\",\n                    lineNumber: 30,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\DCM\\\\Desktop\\\\Coding\\\\MyProjects\\\\Next\\\\Blog-Personal FULL\\\\Personal-Blog\\\\pages\\\\blog\\\\[slug].js\",\n                lineNumber: 29,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true));\n};\n_s(PostPage, \"YZJzROyiq38SUX2oGfhzjFgIYRY=\");\n_c = PostPage;\nvar _c;\n$RefreshReg$(_c, \"PostPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9ibG9nL1tzbHVnXS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQXVDO0FBQ1g7QUFJRzs7QUFDL0IsR0FBSyxDQUFDSSxJQUFJLEdBQUdDLG1CQUFPLENBQUMsOERBQWM7O0FBRXBCLFFBQVEsQ0FBQ0MsUUFBUSxDQUFDLEtBSWhDLEVBQUUsQ0FBQzt1QkFKNkIsS0FJaEMsQ0FIQ0MsV0FBVyxFQUFJQyxLQUFLLGdCQUFMQSxLQUFLLEVBQUVDLElBQUksZ0JBQUpBLElBQUksRUFBRUMsV0FBVyxnQkFBWEEsV0FBVyxFQUFFQyxPQUFPLGdCQUFQQSxPQUFPLEVBQ2hEQyxJQUFJLEdBRjJCLEtBSWhDLENBRkNBLElBQUksRUFDSkMsT0FBTyxHQUh3QixLQUloQyxDQURDQSxPQUFPOztJQUVQLEdBQUssQ0FBcUJaLEdBQXlCLEdBQXpCQSwrQ0FBUSxDQUFDLENBQWUsaUJBQTNDYSxLQUFLLEdBQWNiLEdBQXlCLEtBQXJDYyxRQUFRLEdBQUlkLEdBQXlCO0lBQ25ERSxxREFBaUIsQ0FBQyxDQUFDO1FBQ2pCYyxVQUFVLEVBQUUsQ0FBZ0I7UUFDNUJDLFNBQVMsRUFBRSxRQUFRLENBQW5CQSxTQUFTLENBQVlDLElBQUksRUFBRSxDQUFDO1lBQzFCLE1BQU0sQ0FBQ2YsSUFBSSxDQUFDZ0IsYUFBYSxDQUFDRCxJQUFJLEVBQUUsQ0FBQztnQkFBQSxDQUFNO2dCQUFFLENBQVk7WUFBQSxDQUFDLEVBQUVFLEtBQUs7UUFDL0QsQ0FBQztJQUNILENBQUM7SUFFRCxNQUFNOzt3RkFFRG5CLGtEQUFJOztnR0FDRk0sQ0FBSztrQ0FBRUEsS0FBSzs7Ozs7O2dHQUNaYyxDQUFJO3dCQUFDQyxJQUFJLEVBQUMsQ0FBYTt3QkFBQ1YsT0FBTyxFQUFFRixPQUFPOzs7Ozs7Z0dBQ3hDYSxDQUFJO3dCQUFDQyxHQUFHLEVBQUMsQ0FBTTt3QkFBQ0MsSUFBSSxFQUFDLENBQWM7Ozs7Ozs7Ozs7Ozt3RkFFckNDLENBQU87Z0JBQUNDLFNBQVMsRUFBQyxDQUE0RDtzR0FDNUVELENBQU87b0JBQUNDLFNBQVMsRUFBQyxDQUE4Qzs7b0dBQzlEQyxDQUFHOzs0R0FDREMsQ0FBRTtvQ0FBQ0YsU0FBUyxFQUFDLENBQXNCOzhDQUFFcEIsS0FBSzs7Ozs7OzRHQUMxQ3FCLENBQUc7b0NBQUNELFNBQVMsRUFBQyxDQUF1Qzs7d0NBQUMsQ0FDM0M7d0NBQUNuQixJQUFJOzs7Ozs7OzRHQUVoQnNCLENBQUc7b0NBQUNDLEdBQUcsRUFBRXRCLFdBQVc7Ozs7Ozs7Ozs7OztvR0FFdEJtQixDQUFHOzRCQUFDSSxFQUFFLEVBQUVuQixLQUFLOzRCQUFFYyxTQUFTLEVBQUMsQ0FBMkI7a0hBQ2xEQyxDQUFHO2dDQUFDSyx1QkFBdUIsRUFBRSxDQUFDO29DQUFDQyxNQUFNLEVBQUVoQyw4Q0FBTSxDQUFDVSxPQUFPO2dDQUFFLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU1yRSxDQUFDO0dBcEN1QlAsUUFBUTtLQUFSQSxRQUFRIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2Jsb2cvW3NsdWddLmpzP2ZhNzAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcclxuaW1wb3J0IGZzIGZyb20gXCJmc1wiO1xyXG5pbXBvcnQgcGF0aCBmcm9tIFwicGF0aFwiO1xyXG5pbXBvcnQgbWF0dGVyIGZyb20gXCJncmF5LW1hdHRlclwiO1xyXG5pbXBvcnQgeyBtYXJrZWQgfSBmcm9tIFwibWFya2VkXCI7XHJcbmNvbnN0IGhsanMgPSByZXF1aXJlKFwiaGlnaGxpZ2h0LmpzXCIpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUG9zdFBhZ2Uoe1xyXG4gIGZyb250bWF0dGVyOiB7IHRpdGxlLCBkYXRlLCBjb3Zlcl9pbWFnZSwgZXhjZXJwdCB9LFxyXG4gIHNsdWcsXHJcbiAgY29udGVudCxcclxufSkge1xyXG4gIGNvbnN0IFt0aGVtZSwgc2V0VGhlbWVdID0gdXNlU3RhdGUoXCJtYXJrZG93bi1kYXJrXCIpO1xyXG4gIG1hcmtlZC5zZXRPcHRpb25zKHtcclxuICAgIGxhbmdQcmVmaXg6IFwiaGxqcyBsYW5ndWFnZS1cIixcclxuICAgIGhpZ2hsaWdodDogZnVuY3Rpb24gKGNvZGUpIHtcclxuICAgICAgcmV0dXJuIGhsanMuaGlnaGxpZ2h0QXV0byhjb2RlLCBbXCJodG1sXCIsIFwiamF2YXNjcmlwdFwiXSkudmFsdWU7XHJcbiAgICB9LFxyXG4gIH0pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPEhlYWQ+XHJcbiAgICAgICAgPHRpdGxlPnt0aXRsZX08L3RpdGxlPlxyXG4gICAgICAgIDxtZXRhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGNvbnRlbnQ9e2V4Y2VycHR9IC8+XHJcbiAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIvZmF2aWNvbi5pY29cIiAvPlxyXG4gICAgICA8L0hlYWQ+XHJcbiAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyIG1pbi1oLXNjcmVlbiBiZy1zbGF0ZS02MDAgcGItMjBcIj5cclxuICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtcm93IGZsZXgtd3JhcCBqdXN0aWZ5LWNlbnRlciB3LTc0OFwiPlxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtNXhsIG10LTEwIG1iLTUgXCI+e3RpdGxlfTwvaDE+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctc2xhdGUtNzAwIHRleHQtc2xhdGUtMzAwIG1iLTUgcGwtNVwiPlxyXG4gICAgICAgICAgICAgIFBvc3RlZCBvbiB7ZGF0ZX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxpbWcgc3JjPXtjb3Zlcl9pbWFnZX0+PC9pbWc+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgaWQ9e3RoZW1lfSBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIHBsLTIwIHByLTIwXCI+XHJcbiAgICAgICAgICAgIDxkaXYgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3sgX19odG1sOiBtYXJrZWQoY29udGVudCkgfX0+PC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgIDwvc2VjdGlvbj5cclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQYXRocygpIHtcclxuICBjb25zdCBmaWxlcyA9IGZzLnJlYWRkaXJTeW5jKHBhdGguam9pbihcInBvc3RzXCIpKTtcclxuXHJcbiAgY29uc3QgcGF0aHMgPSBmaWxlcy5tYXAoKGZpbGVuYW1lKSA9PiAoe1xyXG4gICAgcGFyYW1zOiB7XHJcbiAgICAgIHNsdWc6IGZpbGVuYW1lLnJlcGxhY2UoXCIubWRcIiwgXCJcIiksXHJcbiAgICB9LFxyXG4gIH0pKTtcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIHBhdGhzLFxyXG4gICAgZmFsbGJhY2s6IGZhbHNlLFxyXG4gIH07XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcyh7IHBhcmFtczogeyBzbHVnIH0gfSkge1xyXG4gIGNvbnN0IG1hcmtkb3duV2l0aE1ldGEgPSBmcy5yZWFkRmlsZVN5bmMoXHJcbiAgICBwYXRoLmpvaW4oXCJwb3N0c1wiLCBzbHVnICsgXCIubWRcIiksXHJcbiAgICBcInV0Zi04XCJcclxuICApO1xyXG5cclxuICBjb25zdCB7IGRhdGE6IGZyb250bWF0dGVyLCBjb250ZW50LCBleGNlcnB0IH0gPSBtYXR0ZXIobWFya2Rvd25XaXRoTWV0YSk7XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBwcm9wczoge1xyXG4gICAgICBmcm9udG1hdHRlcixcclxuICAgICAgc2x1ZyxcclxuICAgICAgZXhjZXJwdCxcclxuICAgICAgY29udGVudCxcclxuICAgIH0sXHJcbiAgfTtcclxufVxyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIkhlYWQiLCJtYXJrZWQiLCJobGpzIiwicmVxdWlyZSIsIlBvc3RQYWdlIiwiZnJvbnRtYXR0ZXIiLCJ0aXRsZSIsImRhdGUiLCJjb3Zlcl9pbWFnZSIsImV4Y2VycHQiLCJzbHVnIiwiY29udGVudCIsInRoZW1lIiwic2V0VGhlbWUiLCJzZXRPcHRpb25zIiwibGFuZ1ByZWZpeCIsImhpZ2hsaWdodCIsImNvZGUiLCJoaWdobGlnaHRBdXRvIiwidmFsdWUiLCJtZXRhIiwibmFtZSIsImxpbmsiLCJyZWwiLCJocmVmIiwic2VjdGlvbiIsImNsYXNzTmFtZSIsImRpdiIsImgxIiwiaW1nIiwic3JjIiwiaWQiLCJkYW5nZXJvdXNseVNldElubmVySFRNTCIsIl9faHRtbCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/blog/[slug].js\n");

/***/ })

});