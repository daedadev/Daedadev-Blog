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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; },\n/* harmony export */   \"default\": function() { return /* binding */ PostPage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var marked__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! marked */ \"./node_modules/marked/lib/marked.esm.js\");\n/* harmony import */ var _context_globalContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../context/globalContext */ \"./context/globalContext.js\");\n/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/header */ \"./components/header.js\");\n/* harmony import */ var _functions_ScrollFunctions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../functions/ScrollFunctions */ \"./functions/ScrollFunctions.js\");\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar hljs = __webpack_require__(/*! highlight.js */ \"./node_modules/highlight.js/lib/index.js\");\nvar __N_SSG = true;\nfunction PostPage(param) {\n    var _frontmatter = param.frontmatter, title = _frontmatter.title, date = _frontmatter.date, cover_image = _frontmatter.cover_image, excerpt = _frontmatter.excerpt, sections = _frontmatter.sections, slug = param.slug, content = param.content;\n    var _this = this;\n    var updateScroll = function updateScroll() {\n        // Scroll function from handleScroll.js\n        setScrollCount((0,_functions_ScrollFunctions__WEBPACK_IMPORTED_MODULE_6__[\"default\"])());\n    };\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0), scrollCount = ref[0], setScrollCount = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), tableContents = ref1[0], setTableContents = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), scrolledArticle = ref2[0], setScrolledArticle = ref2[1];\n    var ref3 = (0,_context_globalContext__WEBPACK_IMPORTED_MODULE_4__.useGlobal)(), darkMode = ref3.darkMode, toggleDarkMode = ref3.toggleDarkMode;\n    marked__WEBPACK_IMPORTED_MODULE_3__.marked.setOptions({\n        langPrefix: \"hljs language-\",\n        highlight: function highlight(code) {\n            return hljs.highlightAuto(code, [\n                \"html\",\n                \"javascript\"\n            ]).value;\n        }\n    });\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        setTableContents(sections.split(\"/\"));\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        window.addEventListener(\"scroll\", updateScroll);\n        setScrolledArticle((0,_functions_ScrollFunctions__WEBPACK_IMPORTED_MODULE_6__.checkScrolled)(85));\n        return function() {\n            return window.removeEventListener(\"scroll\", updateScroll);\n        };\n    });\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: title\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\DCM\\\\Desktop\\\\Coding\\\\MyProjects\\\\Next\\\\Blog-Personal FULL\\\\Personal-Blog\\\\pages\\\\blog\\\\[slug].js\",\n                        lineNumber: 47,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: excerpt\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\DCM\\\\Desktop\\\\Coding\\\\MyProjects\\\\Next\\\\Blog-Personal FULL\\\\Personal-Blog\\\\pages\\\\blog\\\\[slug].js\",\n                        lineNumber: 48,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/favicon.ico\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\DCM\\\\Desktop\\\\Coding\\\\MyProjects\\\\Next\\\\Blog-Personal FULL\\\\Personal-Blog\\\\pages\\\\blog\\\\[slug].js\",\n                        lineNumber: 49,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\DCM\\\\Desktop\\\\Coding\\\\MyProjects\\\\Next\\\\Blog-Personal FULL\\\\Personal-Blog\\\\pages\\\\blog\\\\[slug].js\",\n                lineNumber: 46,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: darkMode ? \"sticky top-0 left-0 bg-slate-600 transition-all\" : \"sticky top-0 left-0 bg-white transition-all\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_header__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\DCM\\\\Desktop\\\\Coding\\\\MyProjects\\\\Next\\\\Blog-Personal FULL\\\\Personal-Blog\\\\pages\\\\blog\\\\[slug].js\",\n                        lineNumber: 58,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: darkMode ? \"bg-slate-400 h-1 z-0 \" : \"bg-slate-600 h-1 z-0\",\n                        style: {\n                            width: \"\".concat(scrollCount, \"%\")\n                        }\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\DCM\\\\Desktop\\\\Coding\\\\MyProjects\\\\Next\\\\Blog-Personal FULL\\\\Personal-Blog\\\\pages\\\\blog\\\\[slug].js\",\n                        lineNumber: 59,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\DCM\\\\Desktop\\\\Coding\\\\MyProjects\\\\Next\\\\Blog-Personal FULL\\\\Personal-Blog\\\\pages\\\\blog\\\\[slug].js\",\n                lineNumber: 51,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                className: darkMode ? \"flex flex-row justify-center min-h-screen bg-slate-600 pb-20 transition-all\" : \"flex flex-row justify-center min-h-screen bg-white pb-20 transition-all\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: scrolledArticle ? \"xl:flex fixed hidden w-60 top-0 items-start justify-center left-0 h-full  ease-in-out duration-500\" : \"xl:flex absolute hidden w-60 top-25 items-start justify-center left-0 h-full ease-in-out duration-500\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: darkMode ? \"xl:flex flex-col hidden bg-slate-700 text-slate-400 font-semibold h-fit w-full mt-72 p-5 ml-5 rounded-md ease-in-out duration-500 \" : \"xl:flex flex-col hidden bg-slate-100 text-slate-500 font-semibold h-fit w-full mt-72 p-5 ml-5 rounded-md ease-in-out duration-500\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                    className: \"mb-2\",\n                                    children: \"Table of Contents\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\DCM\\\\Desktop\\\\Coding\\\\MyProjects\\\\Next\\\\Blog-Personal FULL\\\\Personal-Blog\\\\pages\\\\blog\\\\[slug].js\",\n                                    lineNumber: 87,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                    className: darkMode ? \"hover:cursor-pointer mb-2 hover:text-slate-200\" : \"hover:cursor-pointer mb-2 hover:text-black\",\n                                    href: \"#top\",\n                                    children: \"- To Top\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\DCM\\\\Desktop\\\\Coding\\\\MyProjects\\\\Next\\\\Blog-Personal FULL\\\\Personal-Blog\\\\pages\\\\blog\\\\[slug].js\",\n                                    lineNumber: 88,\n                                    columnNumber: 13\n                                }, this),\n                                tableContents.map(function(heading, index) {\n                                    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                        className: darkMode ? \"hover:cursor-pointer mb-2 hover:text-slate-200\" : \"hover:cursor-pointer mb-2 hover:text-black\",\n                                        href: \"#\".concat(heading),\n                                        children: [\n                                            \"- \",\n                                            heading\n                                        ]\n                                    }, index, true, {\n                                        fileName: \"C:\\\\Users\\\\DCM\\\\Desktop\\\\Coding\\\\MyProjects\\\\Next\\\\Blog-Personal FULL\\\\Personal-Blog\\\\pages\\\\blog\\\\[slug].js\",\n                                        lineNumber: 100,\n                                        columnNumber: 17\n                                    }, _this));\n                                }),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                    className: darkMode ? \"hover:cursor-pointer mb-2 hover:text-slate-200\" : \"hover:cursor-pointer mb-2 hover:text-black\",\n                                    href: \"#bottom\",\n                                    children: \"- To Bottom\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\DCM\\\\Desktop\\\\Coding\\\\MyProjects\\\\Next\\\\Blog-Personal FULL\\\\Personal-Blog\\\\pages\\\\blog\\\\[slug].js\",\n                                    lineNumber: 113,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\DCM\\\\Desktop\\\\Coding\\\\MyProjects\\\\Next\\\\Blog-Personal FULL\\\\Personal-Blog\\\\pages\\\\blog\\\\[slug].js\",\n                            lineNumber: 80,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\DCM\\\\Desktop\\\\Coding\\\\MyProjects\\\\Next\\\\Blog-Personal FULL\\\\Personal-Blog\\\\pages\\\\blog\\\\[slug].js\",\n                        lineNumber: 73,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                        name: \"top\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\DCM\\\\Desktop\\\\Coding\\\\MyProjects\\\\Next\\\\Blog-Personal FULL\\\\Personal-Blog\\\\pages\\\\blog\\\\[slug].js\",\n                        lineNumber: 125,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                        className: \"flex flex-row flex-wrap justify-center w-11/12 lg:w-748\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                        className: darkMode ? \"text-5xl mt-10 mb-5 text-slate-100\" : \"text-5xl mt-10 mb-5 text-black\",\n                                        children: title\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\DCM\\\\Desktop\\\\Coding\\\\MyProjects\\\\Next\\\\Blog-Personal FULL\\\\Personal-Blog\\\\pages\\\\blog\\\\[slug].js\",\n                                        lineNumber: 128,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: darkMode ? \"bg-slate-700 text-slate-300 mb-5 pl-5 transition-all\" : \"bg-slate-300 text-slate-800 mb-5 pl-5 transition-all\",\n                                        children: [\n                                            \"Posted on \",\n                                            date\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\DCM\\\\Desktop\\\\Coding\\\\MyProjects\\\\Next\\\\Blog-Personal FULL\\\\Personal-Blog\\\\pages\\\\blog\\\\[slug].js\",\n                                        lineNumber: 137,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                        className: \"rounded-md\",\n                                        src: cover_image\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\DCM\\\\Desktop\\\\Coding\\\\MyProjects\\\\Next\\\\Blog-Personal FULL\\\\Personal-Blog\\\\pages\\\\blog\\\\[slug].js\",\n                                        lineNumber: 146,\n                                        columnNumber: 13\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\DCM\\\\Desktop\\\\Coding\\\\MyProjects\\\\Next\\\\Blog-Personal FULL\\\\Personal-Blog\\\\pages\\\\blog\\\\[slug].js\",\n                                lineNumber: 127,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                id: darkMode ? \"markdown-dark\" : \"markdown-light\",\n                                className: \"flex flex-row transition-all w-full\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"w-full\",\n                                    dangerouslySetInnerHTML: {\n                                        __html: (0,marked__WEBPACK_IMPORTED_MODULE_3__.marked)(content)\n                                    }\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\DCM\\\\Desktop\\\\Coding\\\\MyProjects\\\\Next\\\\Blog-Personal FULL\\\\Personal-Blog\\\\pages\\\\blog\\\\[slug].js\",\n                                    lineNumber: 152,\n                                    columnNumber: 13\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\DCM\\\\Desktop\\\\Coding\\\\MyProjects\\\\Next\\\\Blog-Personal FULL\\\\Personal-Blog\\\\pages\\\\blog\\\\[slug].js\",\n                                lineNumber: 148,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                name: \"bottom\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\DCM\\\\Desktop\\\\Coding\\\\MyProjects\\\\Next\\\\Blog-Personal FULL\\\\Personal-Blog\\\\pages\\\\blog\\\\[slug].js\",\n                                lineNumber: 157,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\DCM\\\\Desktop\\\\Coding\\\\MyProjects\\\\Next\\\\Blog-Personal FULL\\\\Personal-Blog\\\\pages\\\\blog\\\\[slug].js\",\n                        lineNumber: 126,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\DCM\\\\Desktop\\\\Coding\\\\MyProjects\\\\Next\\\\Blog-Personal FULL\\\\Personal-Blog\\\\pages\\\\blog\\\\[slug].js\",\n                lineNumber: 66,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true));\n};\n_s(PostPage, \"af+pMXsHodmK1lDpx96ZyiUkTsI=\", false, function() {\n    return [\n        _context_globalContext__WEBPACK_IMPORTED_MODULE_4__.useGlobal\n    ];\n});\n_c = PostPage;\nvar _c;\n$RefreshReg$(_c, \"PostPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFnQztrREFHckNkLEtBQUs7Ozs7OztnSEFFUCtCLENBQUc7d0NBQ0ZDLFNBQVMsRUFDUGxCLFFBQVEsR0FDSixDQUFzRCx3REFDdEQsQ0FBc0Q7OzRDQUU3RCxDQUNXOzRDQUFDYixJQUFJOzs7Ozs7O2dIQUVoQndDLENBQUc7d0NBQUNULFNBQVMsRUFBQyxDQUFZO3dDQUFDVSxHQUFHLEVBQUV4QyxXQUFXOzs7Ozs7Ozs7Ozs7d0dBRTdDNkIsQ0FBRztnQ0FDRlksRUFBRSxFQUFFN0IsUUFBUSxHQUFHLENBQWUsaUJBQUcsQ0FBZ0I7Z0NBQ2pEa0IsU0FBUyxFQUFDLENBQXNDO3NIQUUvQ0QsQ0FBRztvQ0FDRkMsU0FBUyxFQUFDLENBQVE7b0NBQ2xCWSx1QkFBdUIsRUFBRSxDQUFDO3dDQUFDQyxNQUFNLEVBQUV0RCw4Q0FBTSxDQUFDZSxPQUFPO29DQUFFLENBQUM7Ozs7Ozs7Ozs7O3dHQUd2RCtCLENBQUM7Z0NBQUNWLElBQUksRUFBQyxDQUFROzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUsxQixDQUFDO0dBdEp1QjdCLFFBQVE7O1FBUU9OLDZEQUFTOzs7S0FSeEJNLFFBQVEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYmxvZy9bc2x1Z10uanM/ZmE3MCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUNvbnRleHQsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XHJcbmltcG9ydCBmcyBmcm9tIFwiZnNcIjtcclxuaW1wb3J0IHBhdGggZnJvbSBcInBhdGhcIjtcclxuaW1wb3J0IG1hdHRlciBmcm9tIFwiZ3JheS1tYXR0ZXJcIjtcclxuaW1wb3J0IHsgbWFya2VkIH0gZnJvbSBcIm1hcmtlZFwiO1xyXG5pbXBvcnQgeyB1c2VHbG9iYWwgfSBmcm9tIFwiLi4vLi4vY29udGV4dC9nbG9iYWxDb250ZXh0XCI7XHJcbmltcG9ydCBIZWFkZXIgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvaGVhZGVyXCI7XHJcbmltcG9ydCBoYW5kbGVTY3JvbGwsIHsgY2hlY2tTY3JvbGxlZCB9IGZyb20gXCIuLi8uLi9mdW5jdGlvbnMvU2Nyb2xsRnVuY3Rpb25zXCI7XHJcbmNvbnN0IGhsanMgPSByZXF1aXJlKFwiaGlnaGxpZ2h0LmpzXCIpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUG9zdFBhZ2Uoe1xyXG4gIGZyb250bWF0dGVyOiB7IHRpdGxlLCBkYXRlLCBjb3Zlcl9pbWFnZSwgZXhjZXJwdCwgc2VjdGlvbnMgfSxcclxuICBzbHVnLFxyXG4gIGNvbnRlbnQsXHJcbn0pIHtcclxuICBjb25zdCBbc2Nyb2xsQ291bnQsIHNldFNjcm9sbENvdW50XSA9IHVzZVN0YXRlKDApO1xyXG4gIGNvbnN0IFt0YWJsZUNvbnRlbnRzLCBzZXRUYWJsZUNvbnRlbnRzXSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbc2Nyb2xsZWRBcnRpY2xlLCBzZXRTY3JvbGxlZEFydGljbGVdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IHsgZGFya01vZGUsIHRvZ2dsZURhcmtNb2RlIH0gPSB1c2VHbG9iYWwoKTtcclxuXHJcbiAgbWFya2VkLnNldE9wdGlvbnMoe1xyXG4gICAgbGFuZ1ByZWZpeDogXCJobGpzIGxhbmd1YWdlLVwiLFxyXG4gICAgaGlnaGxpZ2h0OiBmdW5jdGlvbiAoY29kZSkge1xyXG4gICAgICByZXR1cm4gaGxqcy5oaWdobGlnaHRBdXRvKGNvZGUsIFtcImh0bWxcIiwgXCJqYXZhc2NyaXB0XCJdKS52YWx1ZTtcclxuICAgIH0sXHJcbiAgfSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBzZXRUYWJsZUNvbnRlbnRzKHNlY3Rpb25zLnNwbGl0KFwiL1wiKSk7XHJcbiAgfSwgW10pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgdXBkYXRlU2Nyb2xsKTtcclxuICAgIHNldFNjcm9sbGVkQXJ0aWNsZShjaGVja1Njcm9sbGVkKDg1KSk7XHJcbiAgICByZXR1cm4gKCkgPT4gd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgdXBkYXRlU2Nyb2xsKTtcclxuICB9KTtcclxuXHJcbiAgZnVuY3Rpb24gdXBkYXRlU2Nyb2xsKCkge1xyXG4gICAgLy8gU2Nyb2xsIGZ1bmN0aW9uIGZyb20gaGFuZGxlU2Nyb2xsLmpzXHJcbiAgICBzZXRTY3JvbGxDb3VudChoYW5kbGVTY3JvbGwoKSk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPEhlYWQ+XHJcbiAgICAgICAgPHRpdGxlPnt0aXRsZX08L3RpdGxlPlxyXG4gICAgICAgIDxtZXRhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGNvbnRlbnQ9e2V4Y2VycHR9IC8+XHJcbiAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIvZmF2aWNvbi5pY29cIiAvPlxyXG4gICAgICA8L0hlYWQ+XHJcbiAgICAgIDxkaXZcclxuICAgICAgICBjbGFzc05hbWU9e1xyXG4gICAgICAgICAgZGFya01vZGVcclxuICAgICAgICAgICAgPyBcInN0aWNreSB0b3AtMCBsZWZ0LTAgYmctc2xhdGUtNjAwIHRyYW5zaXRpb24tYWxsXCJcclxuICAgICAgICAgICAgOiBcInN0aWNreSB0b3AtMCBsZWZ0LTAgYmctd2hpdGUgdHJhbnNpdGlvbi1hbGxcIlxyXG4gICAgICAgIH1cclxuICAgICAgPlxyXG4gICAgICAgIDxIZWFkZXIgLz5cclxuICAgICAgICA8ZGl2XHJcbiAgICAgICAgICBjbGFzc05hbWU9e1xyXG4gICAgICAgICAgICBkYXJrTW9kZSA/IFwiYmctc2xhdGUtNDAwIGgtMSB6LTAgXCIgOiBcImJnLXNsYXRlLTYwMCBoLTEgei0wXCJcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiBgJHtzY3JvbGxDb3VudH0lYCB9fVxyXG4gICAgICAgID48L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxzZWN0aW9uXHJcbiAgICAgICAgY2xhc3NOYW1lPXtcclxuICAgICAgICAgIGRhcmtNb2RlXHJcbiAgICAgICAgICAgID8gXCJmbGV4IGZsZXgtcm93IGp1c3RpZnktY2VudGVyIG1pbi1oLXNjcmVlbiBiZy1zbGF0ZS02MDAgcGItMjAgdHJhbnNpdGlvbi1hbGxcIlxyXG4gICAgICAgICAgICA6IFwiZmxleCBmbGV4LXJvdyBqdXN0aWZ5LWNlbnRlciBtaW4taC1zY3JlZW4gYmctd2hpdGUgcGItMjAgdHJhbnNpdGlvbi1hbGxcIlxyXG4gICAgICAgIH1cclxuICAgICAgPlxyXG4gICAgICAgIDxkaXZcclxuICAgICAgICAgIGNsYXNzTmFtZT17XHJcbiAgICAgICAgICAgIHNjcm9sbGVkQXJ0aWNsZVxyXG4gICAgICAgICAgICAgID8gXCJ4bDpmbGV4IGZpeGVkIGhpZGRlbiB3LTYwIHRvcC0wIGl0ZW1zLXN0YXJ0IGp1c3RpZnktY2VudGVyIGxlZnQtMCBoLWZ1bGwgIGVhc2UtaW4tb3V0IGR1cmF0aW9uLTUwMFwiXHJcbiAgICAgICAgICAgICAgOiBcInhsOmZsZXggYWJzb2x1dGUgaGlkZGVuIHctNjAgdG9wLTI1IGl0ZW1zLXN0YXJ0IGp1c3RpZnktY2VudGVyIGxlZnQtMCBoLWZ1bGwgZWFzZS1pbi1vdXQgZHVyYXRpb24tNTAwXCJcclxuICAgICAgICAgIH1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17XHJcbiAgICAgICAgICAgICAgZGFya01vZGVcclxuICAgICAgICAgICAgICAgID8gXCJ4bDpmbGV4IGZsZXgtY29sIGhpZGRlbiBiZy1zbGF0ZS03MDAgdGV4dC1zbGF0ZS00MDAgZm9udC1zZW1pYm9sZCBoLWZpdCB3LWZ1bGwgbXQtNzIgcC01IG1sLTUgcm91bmRlZC1tZCBlYXNlLWluLW91dCBkdXJhdGlvbi01MDAgXCJcclxuICAgICAgICAgICAgICAgIDogXCJ4bDpmbGV4IGZsZXgtY29sIGhpZGRlbiBiZy1zbGF0ZS0xMDAgdGV4dC1zbGF0ZS01MDAgZm9udC1zZW1pYm9sZCBoLWZpdCB3LWZ1bGwgbXQtNzIgcC01IG1sLTUgcm91bmRlZC1tZCBlYXNlLWluLW91dCBkdXJhdGlvbi01MDBcIlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJtYi0yXCI+VGFibGUgb2YgQ29udGVudHM8L2gxPlxyXG4gICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17XHJcbiAgICAgICAgICAgICAgICBkYXJrTW9kZVxyXG4gICAgICAgICAgICAgICAgICA/IFwiaG92ZXI6Y3Vyc29yLXBvaW50ZXIgbWItMiBob3Zlcjp0ZXh0LXNsYXRlLTIwMFwiXHJcbiAgICAgICAgICAgICAgICAgIDogXCJob3ZlcjpjdXJzb3ItcG9pbnRlciBtYi0yIGhvdmVyOnRleHQtYmxhY2tcIlxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICBocmVmPXtgI3RvcGB9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAtIFRvIFRvcFxyXG4gICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgIHt0YWJsZUNvbnRlbnRzLm1hcCgoaGVhZGluZywgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtcclxuICAgICAgICAgICAgICAgICAgICBkYXJrTW9kZVxyXG4gICAgICAgICAgICAgICAgICAgICAgPyBcImhvdmVyOmN1cnNvci1wb2ludGVyIG1iLTIgaG92ZXI6dGV4dC1zbGF0ZS0yMDBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgOiBcImhvdmVyOmN1cnNvci1wb2ludGVyIG1iLTIgaG92ZXI6dGV4dC1ibGFja1wiXHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgaHJlZj17YCMke2hlYWRpbmd9YH1cclxuICAgICAgICAgICAgICAgICAga2V5PXtpbmRleH1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgLSB7aGVhZGluZ31cclxuICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9e1xyXG4gICAgICAgICAgICAgICAgZGFya01vZGVcclxuICAgICAgICAgICAgICAgICAgPyBcImhvdmVyOmN1cnNvci1wb2ludGVyIG1iLTIgaG92ZXI6dGV4dC1zbGF0ZS0yMDBcIlxyXG4gICAgICAgICAgICAgICAgICA6IFwiaG92ZXI6Y3Vyc29yLXBvaW50ZXIgbWItMiBob3Zlcjp0ZXh0LWJsYWNrXCJcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgaHJlZj17YCNib3R0b21gfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgLSBUbyBCb3R0b21cclxuICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGEgbmFtZT1cInRvcFwiPjwvYT5cclxuICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtcm93IGZsZXgtd3JhcCBqdXN0aWZ5LWNlbnRlciB3LTExLzEyIGxnOnctNzQ4XCI+XHJcbiAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8aDFcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9e1xyXG4gICAgICAgICAgICAgICAgZGFya01vZGVcclxuICAgICAgICAgICAgICAgICAgPyBcInRleHQtNXhsIG10LTEwIG1iLTUgdGV4dC1zbGF0ZS0xMDBcIlxyXG4gICAgICAgICAgICAgICAgICA6IFwidGV4dC01eGwgbXQtMTAgbWItNSB0ZXh0LWJsYWNrXCJcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICB7dGl0bGV9XHJcbiAgICAgICAgICAgIDwvaDE+XHJcbiAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9e1xyXG4gICAgICAgICAgICAgICAgZGFya01vZGVcclxuICAgICAgICAgICAgICAgICAgPyBcImJnLXNsYXRlLTcwMCB0ZXh0LXNsYXRlLTMwMCBtYi01IHBsLTUgdHJhbnNpdGlvbi1hbGxcIlxyXG4gICAgICAgICAgICAgICAgICA6IFwiYmctc2xhdGUtMzAwIHRleHQtc2xhdGUtODAwIG1iLTUgcGwtNSB0cmFuc2l0aW9uLWFsbFwiXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgUG9zdGVkIG9uIHtkYXRlfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJyb3VuZGVkLW1kXCIgc3JjPXtjb3Zlcl9pbWFnZX0+PC9pbWc+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgaWQ9e2RhcmtNb2RlID8gXCJtYXJrZG93bi1kYXJrXCIgOiBcIm1hcmtkb3duLWxpZ2h0XCJ9XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImZsZXggZmxleC1yb3cgIHRyYW5zaXRpb24tYWxsIHctZnVsbFwiXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGxcIlxyXG4gICAgICAgICAgICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7IF9faHRtbDogbWFya2VkKGNvbnRlbnQpIH19XHJcbiAgICAgICAgICAgID48L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGEgbmFtZT1cImJvdHRvbVwiPjwvYT5cclxuICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgIDwvc2VjdGlvbj5cclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQYXRocygpIHtcclxuICBjb25zdCBmaWxlcyA9IGZzLnJlYWRkaXJTeW5jKHBhdGguam9pbihcInBvc3RzXCIpKTtcclxuXHJcbiAgY29uc3QgcGF0aHMgPSBmaWxlcy5tYXAoKGZpbGVuYW1lKSA9PiAoe1xyXG4gICAgcGFyYW1zOiB7XHJcbiAgICAgIHNsdWc6IGZpbGVuYW1lLnJlcGxhY2UoXCIubWRcIiwgXCJcIiksXHJcbiAgICB9LFxyXG4gIH0pKTtcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIHBhdGhzLFxyXG4gICAgZmFsbGJhY2s6IGZhbHNlLFxyXG4gIH07XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcyh7IHBhcmFtczogeyBzbHVnIH0gfSkge1xyXG4gIGNvbnN0IG1hcmtkb3duV2l0aE1ldGEgPSBmcy5yZWFkRmlsZVN5bmMoXHJcbiAgICBwYXRoLmpvaW4oXCJwb3N0c1wiLCBzbHVnICsgXCIubWRcIiksXHJcbiAgICBcInV0Zi04XCJcclxuICApO1xyXG5cclxuICBjb25zdCB7IGRhdGE6IGZyb250bWF0dGVyLCBjb250ZW50LCBleGNlcnB0IH0gPSBtYXR0ZXIobWFya2Rvd25XaXRoTWV0YSk7XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBwcm9wczoge1xyXG4gICAgICBmcm9udG1hdHRlcixcclxuICAgICAgY29udGVudCxcclxuICAgICAgc2x1ZyxcclxuICAgICAgZXhjZXJwdCxcclxuICAgIH0sXHJcbiAgfTtcclxufVxyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUNvbnRleHQiLCJ1c2VFZmZlY3QiLCJIZWFkIiwibWFya2VkIiwidXNlR2xvYmFsIiwiSGVhZGVyIiwiaGFuZGxlU2Nyb2xsIiwiY2hlY2tTY3JvbGxlZCIsImhsanMiLCJyZXF1aXJlIiwiUG9zdFBhZ2UiLCJmcm9udG1hdHRlciIsInRpdGxlIiwiZGF0ZSIsImNvdmVyX2ltYWdlIiwiZXhjZXJwdCIsInNlY3Rpb25zIiwic2x1ZyIsImNvbnRlbnQiLCJ1cGRhdGVTY3JvbGwiLCJzZXRTY3JvbGxDb3VudCIsInNjcm9sbENvdW50IiwidGFibGVDb250ZW50cyIsInNldFRhYmxlQ29udGVudHMiLCJzY3JvbGxlZEFydGljbGUiLCJzZXRTY3JvbGxlZEFydGljbGUiLCJkYXJrTW9kZSIsInRvZ2dsZURhcmtNb2RlIiwic2V0T3B0aW9ucyIsImxhbmdQcmVmaXgiLCJoaWdobGlnaHQiLCJjb2RlIiwiaGlnaGxpZ2h0QXV0byIsInZhbHVlIiwic3BsaXQiLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsIm1ldGEiLCJuYW1lIiwibGluayIsInJlbCIsImhyZWYiLCJkaXYiLCJjbGFzc05hbWUiLCJzdHlsZSIsIndpZHRoIiwic2VjdGlvbiIsImgxIiwiYSIsIm1hcCIsImhlYWRpbmciLCJpbmRleCIsImltZyIsInNyYyIsImlkIiwiZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwiLCJfX2h0bWwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/blog/[slug].js\n");

/***/ })

});