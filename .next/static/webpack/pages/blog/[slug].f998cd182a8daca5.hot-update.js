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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; },\n/* harmony export */   \"default\": function() { return /* binding */ PostPage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var marked__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! marked */ \"./node_modules/marked/lib/marked.esm.js\");\n/* harmony import */ var _context_globalContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../context/globalContext */ \"./context/globalContext.js\");\n/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/header */ \"./components/header.js\");\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar hljs = __webpack_require__(/*! highlight.js */ \"./node_modules/highlight.js/lib/index.js\");\nvar __N_SSG = true;\nfunction PostPage(param) {\n    var _frontmatter = param.frontmatter, title = _frontmatter.title, date = _frontmatter.date, cover_image = _frontmatter.cover_image, excerpt = _frontmatter.excerpt, slug = param.slug, content = param.content;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0), scrollCount = ref[0], setScrollCount = ref[1];\n    var ref1 = (0,_context_globalContext__WEBPACK_IMPORTED_MODULE_4__.useGlobal)(), darkMode = ref1.darkMode, toggleDarkMode = ref1.toggleDarkMode;\n    marked__WEBPACK_IMPORTED_MODULE_3__.marked.setOptions({\n        langPrefix: \"hljs language-\",\n        highlight: function highlight(code) {\n            return hljs.highlightAuto(code, [\n                \"html\",\n                \"javascript\"\n            ]).value;\n        }\n    });\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        window.addEventListener(\"scroll\", handleScroll);\n        return function() {\n            return window.removeEventListener(\"scroll\", handleScroll);\n        };\n    });\n    var handleScroll = function() {\n        var MaxHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;\n        var ScrollPercent = window.scrollY / MaxHeight * 100;\n        console.log(document.documentElement.clientHeight);\n        setScrollCount(ScrollPercent);\n    };\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: title\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\DCM\\\\Desktop\\\\Coding\\\\MyProjects\\\\Next\\\\Blog-Personal FULL\\\\Personal-Blog\\\\pages\\\\blog\\\\[slug].js\",\n                        lineNumber: 44,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: excerpt\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\DCM\\\\Desktop\\\\Coding\\\\MyProjects\\\\Next\\\\Blog-Personal FULL\\\\Personal-Blog\\\\pages\\\\blog\\\\[slug].js\",\n                        lineNumber: 45,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/favicon.ico\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\DCM\\\\Desktop\\\\Coding\\\\MyProjects\\\\Next\\\\Blog-Personal FULL\\\\Personal-Blog\\\\pages\\\\blog\\\\[slug].js\",\n                        lineNumber: 46,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\DCM\\\\Desktop\\\\Coding\\\\MyProjects\\\\Next\\\\Blog-Personal FULL\\\\Personal-Blog\\\\pages\\\\blog\\\\[slug].js\",\n                lineNumber: 43,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: darkMode ? \"sticky top-0 left-0 bg-slate-500 transition-all\" : \"sticky top-0 left-0 bg-white transition-all\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_header__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\DCM\\\\Desktop\\\\Coding\\\\MyProjects\\\\Next\\\\Blog-Personal FULL\\\\Personal-Blog\\\\pages\\\\blog\\\\[slug].js\",\n                        lineNumber: 55,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: darkMode ? \"bg-slate-400 h-1 z-0 \" : \"bg-slate-600 h-1 z-0\",\n                        style: {\n                            width: \"\".concat(scrollCount, \"%\")\n                        }\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\DCM\\\\Desktop\\\\Coding\\\\MyProjects\\\\Next\\\\Blog-Personal FULL\\\\Personal-Blog\\\\pages\\\\blog\\\\[slug].js\",\n                        lineNumber: 56,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\DCM\\\\Desktop\\\\Coding\\\\MyProjects\\\\Next\\\\Blog-Personal FULL\\\\Personal-Blog\\\\pages\\\\blog\\\\[slug].js\",\n                lineNumber: 48,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                className: darkMode ? \"flex flex-col items-center min-h-screen bg-slate-600 pb-20 transition-all\" : \"flex flex-col items-center min-h-screen bg-white pb-20 transition-all\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                    className: \"flex flex-row flex-wrap justify-center w-748\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                    className: darkMode ? \"text-5xl mt-10 mb-5 text-slate-100\" : \"text-5xl mt-10 mb-5 text-black\",\n                                    children: title\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\DCM\\\\Desktop\\\\Coding\\\\MyProjects\\\\Next\\\\Blog-Personal FULL\\\\Personal-Blog\\\\pages\\\\blog\\\\[slug].js\",\n                                    lineNumber: 73,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: darkMode ? \"bg-slate-700 text-slate-300 mb-5 pl-5 transition-all\" : \"bg-slate-300 text-slate-800 mb-5 pl-5 transition-all\",\n                                    children: [\n                                        \"Posted on \",\n                                        date\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\DCM\\\\Desktop\\\\Coding\\\\MyProjects\\\\Next\\\\Blog-Personal FULL\\\\Personal-Blog\\\\pages\\\\blog\\\\[slug].js\",\n                                    lineNumber: 82,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                    className: \"rounded-md\",\n                                    src: cover_image\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\DCM\\\\Desktop\\\\Coding\\\\MyProjects\\\\Next\\\\Blog-Personal FULL\\\\Personal-Blog\\\\pages\\\\blog\\\\[slug].js\",\n                                    lineNumber: 91,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\DCM\\\\Desktop\\\\Coding\\\\MyProjects\\\\Next\\\\Blog-Personal FULL\\\\Personal-Blog\\\\pages\\\\blog\\\\[slug].js\",\n                            lineNumber: 72,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            id: darkMode ? \"markdown-dark\" : \"markdown-light\",\n                            className: \"flex flex-col transition-all\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                dangerouslySetInnerHTML: {\n                                    __html: (0,marked__WEBPACK_IMPORTED_MODULE_3__.marked)(content)\n                                }\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\DCM\\\\Desktop\\\\Coding\\\\MyProjects\\\\Next\\\\Blog-Personal FULL\\\\Personal-Blog\\\\pages\\\\blog\\\\[slug].js\",\n                                lineNumber: 97,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\DCM\\\\Desktop\\\\Coding\\\\MyProjects\\\\Next\\\\Blog-Personal FULL\\\\Personal-Blog\\\\pages\\\\blog\\\\[slug].js\",\n                            lineNumber: 93,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\DCM\\\\Desktop\\\\Coding\\\\MyProjects\\\\Next\\\\Blog-Personal FULL\\\\Personal-Blog\\\\pages\\\\blog\\\\[slug].js\",\n                    lineNumber: 71,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\DCM\\\\Desktop\\\\Coding\\\\MyProjects\\\\Next\\\\Blog-Personal FULL\\\\Personal-Blog\\\\pages\\\\blog\\\\[slug].js\",\n                lineNumber: 64,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true));\n};\n_s(PostPage, \"ZRQXz4/Yfn/7QTy0ziuM8OHqiLM=\", false, function() {\n    return [\n        _context_globalContext__WEBPACK_IMPORTED_MODULE_4__.useGlobal\n    ];\n});\n_c = PostPage;\nvar _c;\n$RefreshReg$(_c, \"PostPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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REssQ0FBRTtvQ0FDREosU0FBUyxFQUNQM0IsUUFBUSxHQUNKLENBQW9DLHNDQUNwQyxDQUFnQzs4Q0FHckNSLEtBQUs7Ozs7Ozs0R0FFUGtDLENBQUc7b0NBQ0ZDLFNBQVMsRUFDUDNCLFFBQVEsR0FDSixDQUFzRCx3REFDdEQsQ0FBc0Q7O3dDQUU3RCxDQUNXO3dDQUFDUCxJQUFJOzs7Ozs7OzRHQUVoQnVDLENBQUc7b0NBQUNMLFNBQVMsRUFBQyxDQUFZO29DQUFDTSxHQUFHLEVBQUV2QyxXQUFXOzs7Ozs7Ozs7Ozs7b0dBRTdDZ0MsQ0FBRzs0QkFDRlEsRUFBRSxFQUFFbEMsUUFBUSxHQUFHLENBQWUsaUJBQUcsQ0FBZ0I7NEJBQ2pEMkIsU0FBUyxFQUFDLENBQStCO2tIQUV4Q0QsQ0FBRztnQ0FBQ1MsdUJBQXVCLEVBQUUsQ0FBQztvQ0FBQ0MsTUFBTSxFQUFFbkQsOENBQU0sQ0FBQ1ksT0FBTztnQ0FBRSxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNckUsQ0FBQztHQTVGdUJQLFFBQVE7O1FBTU9KLDZEQUFTOzs7S0FOeEJJLFFBQVEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYmxvZy9bc2x1Z10uanM/ZmE3MCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUNvbnRleHQsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XHJcbmltcG9ydCBmcyBmcm9tIFwiZnNcIjtcclxuaW1wb3J0IHBhdGggZnJvbSBcInBhdGhcIjtcclxuaW1wb3J0IG1hdHRlciBmcm9tIFwiZ3JheS1tYXR0ZXJcIjtcclxuaW1wb3J0IHsgbWFya2VkIH0gZnJvbSBcIm1hcmtlZFwiO1xyXG5pbXBvcnQgeyB1c2VHbG9iYWwgfSBmcm9tIFwiLi4vLi4vY29udGV4dC9nbG9iYWxDb250ZXh0XCI7XHJcbmltcG9ydCBIZWFkZXIgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvaGVhZGVyXCI7XHJcbmNvbnN0IGhsanMgPSByZXF1aXJlKFwiaGlnaGxpZ2h0LmpzXCIpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUG9zdFBhZ2Uoe1xyXG4gIGZyb250bWF0dGVyOiB7IHRpdGxlLCBkYXRlLCBjb3Zlcl9pbWFnZSwgZXhjZXJwdCB9LFxyXG4gIHNsdWcsXHJcbiAgY29udGVudCxcclxufSkge1xyXG4gIGNvbnN0IFtzY3JvbGxDb3VudCwgc2V0U2Nyb2xsQ291bnRdID0gdXNlU3RhdGUoMCk7XHJcbiAgY29uc3QgeyBkYXJrTW9kZSwgdG9nZ2xlRGFya01vZGUgfSA9IHVzZUdsb2JhbCgpO1xyXG5cclxuICBtYXJrZWQuc2V0T3B0aW9ucyh7XHJcbiAgICBsYW5nUHJlZml4OiBcImhsanMgbGFuZ3VhZ2UtXCIsXHJcbiAgICBoaWdobGlnaHQ6IGZ1bmN0aW9uIChjb2RlKSB7XHJcbiAgICAgIHJldHVybiBobGpzLmhpZ2hsaWdodEF1dG8oY29kZSwgW1wiaHRtbFwiLCBcImphdmFzY3JpcHRcIl0pLnZhbHVlO1xyXG4gICAgfSxcclxuICB9KTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIGhhbmRsZVNjcm9sbCk7XHJcbiAgICByZXR1cm4gKCkgPT4gd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgaGFuZGxlU2Nyb2xsKTtcclxuICB9KTtcclxuXHJcbiAgY29uc3QgaGFuZGxlU2Nyb2xsID0gKCkgPT4ge1xyXG4gICAgY29uc3QgTWF4SGVpZ2h0ID1cclxuICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbEhlaWdodCAtXHJcbiAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHQ7XHJcbiAgICBjb25zdCBTY3JvbGxQZXJjZW50ID0gKHdpbmRvdy5zY3JvbGxZIC8gTWF4SGVpZ2h0KSAqIDEwMDtcclxuXHJcbiAgICBjb25zb2xlLmxvZyhkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0KTtcclxuICAgIHNldFNjcm9sbENvdW50KFNjcm9sbFBlcmNlbnQpO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8SGVhZD5cclxuICAgICAgICA8dGl0bGU+e3RpdGxlfTwvdGl0bGU+XHJcbiAgICAgICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD17ZXhjZXJwdH0gLz5cclxuICAgICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi9mYXZpY29uLmljb1wiIC8+XHJcbiAgICAgIDwvSGVhZD5cclxuICAgICAgPGRpdlxyXG4gICAgICAgIGNsYXNzTmFtZT17XHJcbiAgICAgICAgICBkYXJrTW9kZVxyXG4gICAgICAgICAgICA/IFwic3RpY2t5IHRvcC0wIGxlZnQtMCBiZy1zbGF0ZS01MDAgdHJhbnNpdGlvbi1hbGxcIlxyXG4gICAgICAgICAgICA6IFwic3RpY2t5IHRvcC0wIGxlZnQtMCBiZy13aGl0ZSB0cmFuc2l0aW9uLWFsbFwiXHJcbiAgICAgICAgfVxyXG4gICAgICA+XHJcbiAgICAgICAgPEhlYWRlciAvPlxyXG4gICAgICAgIDxkaXZcclxuICAgICAgICAgIGNsYXNzTmFtZT17XHJcbiAgICAgICAgICAgIGRhcmtNb2RlID8gXCJiZy1zbGF0ZS00MDAgaC0xIHotMCBcIiA6IFwiYmctc2xhdGUtNjAwIGgtMSB6LTBcIlxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IGAke3Njcm9sbENvdW50fSVgIH19XHJcbiAgICAgICAgPjwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIDxzZWN0aW9uXHJcbiAgICAgICAgY2xhc3NOYW1lPXtcclxuICAgICAgICAgIGRhcmtNb2RlXHJcbiAgICAgICAgICAgID8gXCJmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlciBtaW4taC1zY3JlZW4gYmctc2xhdGUtNjAwIHBiLTIwIHRyYW5zaXRpb24tYWxsXCJcclxuICAgICAgICAgICAgOiBcImZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyIG1pbi1oLXNjcmVlbiBiZy13aGl0ZSBwYi0yMCB0cmFuc2l0aW9uLWFsbFwiXHJcbiAgICAgICAgfVxyXG4gICAgICA+XHJcbiAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiZmxleCBmbGV4LXJvdyBmbGV4LXdyYXAganVzdGlmeS1jZW50ZXIgdy03NDhcIj5cclxuICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxoMVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17XHJcbiAgICAgICAgICAgICAgICBkYXJrTW9kZVxyXG4gICAgICAgICAgICAgICAgICA/IFwidGV4dC01eGwgbXQtMTAgbWItNSB0ZXh0LXNsYXRlLTEwMFwiXHJcbiAgICAgICAgICAgICAgICAgIDogXCJ0ZXh0LTV4bCBtdC0xMCBtYi01IHRleHQtYmxhY2tcIlxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIHt0aXRsZX1cclxuICAgICAgICAgICAgPC9oMT5cclxuICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17XHJcbiAgICAgICAgICAgICAgICBkYXJrTW9kZVxyXG4gICAgICAgICAgICAgICAgICA/IFwiYmctc2xhdGUtNzAwIHRleHQtc2xhdGUtMzAwIG1iLTUgcGwtNSB0cmFuc2l0aW9uLWFsbFwiXHJcbiAgICAgICAgICAgICAgICAgIDogXCJiZy1zbGF0ZS0zMDAgdGV4dC1zbGF0ZS04MDAgbWItNSBwbC01IHRyYW5zaXRpb24tYWxsXCJcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICBQb3N0ZWQgb24ge2RhdGV9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cInJvdW5kZWQtbWRcIiBzcmM9e2NvdmVyX2ltYWdlfT48L2ltZz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICBpZD17ZGFya01vZGUgPyBcIm1hcmtkb3duLWRhcmtcIiA6IFwibWFya2Rvd24tbGlnaHRcIn1cclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCAgdHJhbnNpdGlvbi1hbGxcIlxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8ZGl2IGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7IF9faHRtbDogbWFya2VkKGNvbnRlbnQpIH19PjwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICA8L3NlY3Rpb24+XHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUGF0aHMoKSB7XHJcbiAgY29uc3QgZmlsZXMgPSBmcy5yZWFkZGlyU3luYyhwYXRoLmpvaW4oXCJwb3N0c1wiKSk7XHJcblxyXG4gIGNvbnN0IHBhdGhzID0gZmlsZXMubWFwKChmaWxlbmFtZSkgPT4gKHtcclxuICAgIHBhcmFtczoge1xyXG4gICAgICBzbHVnOiBmaWxlbmFtZS5yZXBsYWNlKFwiLm1kXCIsIFwiXCIpLFxyXG4gICAgfSxcclxuICB9KSk7XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBwYXRocyxcclxuICAgIGZhbGxiYWNrOiBmYWxzZSxcclxuICB9O1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoeyBwYXJhbXM6IHsgc2x1ZyB9IH0pIHtcclxuICBjb25zdCBtYXJrZG93bldpdGhNZXRhID0gZnMucmVhZEZpbGVTeW5jKFxyXG4gICAgcGF0aC5qb2luKFwicG9zdHNcIiwgc2x1ZyArIFwiLm1kXCIpLFxyXG4gICAgXCJ1dGYtOFwiXHJcbiAgKTtcclxuXHJcbiAgY29uc3QgeyBkYXRhOiBmcm9udG1hdHRlciwgY29udGVudCwgZXhjZXJwdCB9ID0gbWF0dGVyKG1hcmtkb3duV2l0aE1ldGEpO1xyXG5cclxuICByZXR1cm4ge1xyXG4gICAgcHJvcHM6IHtcclxuICAgICAgZnJvbnRtYXR0ZXIsXHJcbiAgICAgIHNsdWcsXHJcbiAgICAgIGV4Y2VycHQsXHJcbiAgICAgIGNvbnRlbnQsXHJcbiAgICB9LFxyXG4gIH07XHJcbn1cclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VDb250ZXh0IiwidXNlRWZmZWN0IiwiSGVhZCIsIm1hcmtlZCIsInVzZUdsb2JhbCIsIkhlYWRlciIsImhsanMiLCJyZXF1aXJlIiwiUG9zdFBhZ2UiLCJmcm9udG1hdHRlciIsInRpdGxlIiwiZGF0ZSIsImNvdmVyX2ltYWdlIiwiZXhjZXJwdCIsInNsdWciLCJjb250ZW50Iiwic2Nyb2xsQ291bnQiLCJzZXRTY3JvbGxDb3VudCIsImRhcmtNb2RlIiwidG9nZ2xlRGFya01vZGUiLCJzZXRPcHRpb25zIiwibGFuZ1ByZWZpeCIsImhpZ2hsaWdodCIsImNvZGUiLCJoaWdobGlnaHRBdXRvIiwidmFsdWUiLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwiaGFuZGxlU2Nyb2xsIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsIk1heEhlaWdodCIsImRvY3VtZW50IiwiZG9jdW1lbnRFbGVtZW50Iiwic2Nyb2xsSGVpZ2h0IiwiY2xpZW50SGVpZ2h0IiwiU2Nyb2xsUGVyY2VudCIsInNjcm9sbFkiLCJjb25zb2xlIiwibG9nIiwibWV0YSIsIm5hbWUiLCJsaW5rIiwicmVsIiwiaHJlZiIsImRpdiIsImNsYXNzTmFtZSIsInN0eWxlIiwid2lkdGgiLCJzZWN0aW9uIiwiaDEiLCJpbWciLCJzcmMiLCJpZCIsImRhbmdlcm91c2x5U2V0SW5uZXJIVE1MIiwiX19odG1sIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/blog/[slug].js\n");

/***/ })

});