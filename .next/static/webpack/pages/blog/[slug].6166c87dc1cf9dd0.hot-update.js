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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; },\n/* harmony export */   \"default\": function() { return /* binding */ PostPage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var marked__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! marked */ \"./node_modules/marked/lib/marked.esm.js\");\n/* harmony import */ var _context_globalContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../context/globalContext */ \"./context/globalContext.js\");\n/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/header */ \"./components/header.js\");\n/* harmony import */ var _functions_ScrollFunctions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../functions/ScrollFunctions */ \"./functions/ScrollFunctions.js\");\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar hljs = __webpack_require__(/*! highlight.js */ \"./node_modules/highlight.js/lib/index.js\");\nvar __N_SSG = true;\nfunction PostPage(param) {\n    var _frontmatter = param.frontmatter, title = _frontmatter.title, date = _frontmatter.date, cover_image = _frontmatter.cover_image, excerpt = _frontmatter.excerpt, sections = _frontmatter.sections, slug = param.slug, content = param.content;\n    var _this = this;\n    var updateScroll = function updateScroll() {\n        // Scroll function from handleScroll.js\n        setScrollCount((0,_functions_ScrollFunctions__WEBPACK_IMPORTED_MODULE_6__[\"default\"])());\n    };\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0), scrollCount = ref[0], setScrollCount = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), tableContents = ref1[0], setTableContents = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), scrolledArticle = ref2[0], setScrolledArticle = ref2[1];\n    var ref3 = (0,_context_globalContext__WEBPACK_IMPORTED_MODULE_4__.useGlobal)(), darkMode = ref3.darkMode, toggleDarkMode = ref3.toggleDarkMode;\n    marked__WEBPACK_IMPORTED_MODULE_3__.marked.setOptions({\n        langPrefix: \"hljs language-\",\n        highlight: function highlight(code) {\n            return hljs.highlightAuto(code, [\n                \"html\",\n                \"javascript\"\n            ]).value;\n        }\n    });\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        setTableContents(sections.split(\"/\"));\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        window.addEventListener(\"scroll\", updateScroll);\n        setScrolledArticle((0,_functions_ScrollFunctions__WEBPACK_IMPORTED_MODULE_6__.checkScrolled)(scrollCount, 4));\n        return function() {\n            return window.removeEventListener(\"scroll\", updateScroll);\n        };\n    });\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: title\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\DCM\\\\Desktop\\\\Coding\\\\MyProjects\\\\Next\\\\Blog-Personal FULL\\\\Personal-Blog\\\\pages\\\\blog\\\\[slug].js\",\n                        lineNumber: 47,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: excerpt\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\DCM\\\\Desktop\\\\Coding\\\\MyProjects\\\\Next\\\\Blog-Personal FULL\\\\Personal-Blog\\\\pages\\\\blog\\\\[slug].js\",\n                        lineNumber: 48,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/favicon.ico\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\DCM\\\\Desktop\\\\Coding\\\\MyProjects\\\\Next\\\\Blog-Personal FULL\\\\Personal-Blog\\\\pages\\\\blog\\\\[slug].js\",\n                        lineNumber: 49,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\DCM\\\\Desktop\\\\Coding\\\\MyProjects\\\\Next\\\\Blog-Personal FULL\\\\Personal-Blog\\\\pages\\\\blog\\\\[slug].js\",\n                lineNumber: 46,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: darkMode ? \"sticky top-0 left-0 bg-slate-600 transition-all\" : \"sticky top-0 left-0 bg-white transition-all\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_header__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\DCM\\\\Desktop\\\\Coding\\\\MyProjects\\\\Next\\\\Blog-Personal FULL\\\\Personal-Blog\\\\pages\\\\blog\\\\[slug].js\",\n                        lineNumber: 58,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: darkMode ? \"bg-slate-400 h-1 z-0 \" : \"bg-slate-600 h-1 z-0\",\n                        style: {\n                            width: \"\".concat(scrollCount, \"%\")\n                        }\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\DCM\\\\Desktop\\\\Coding\\\\MyProjects\\\\Next\\\\Blog-Personal FULL\\\\Personal-Blog\\\\pages\\\\blog\\\\[slug].js\",\n                        lineNumber: 59,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\DCM\\\\Desktop\\\\Coding\\\\MyProjects\\\\Next\\\\Blog-Personal FULL\\\\Personal-Blog\\\\pages\\\\blog\\\\[slug].js\",\n                lineNumber: 51,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                className: darkMode ? \"flex flex-row justify-center min-h-screen bg-slate-600 pb-20 transition-all\" : \"flex flex-row justify-center min-h-screen bg-white pb-20 transition-all\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: scrolledArticle ? \"flex fixed bg-slate-100 w-96 top-10 items-start justify-center left-0 h-full  ease-in-out duration-500\" : \"flex absolute bg-slate-100 w-96 top-25 items-start justify-center left-0 h-full ease-in-out duration-500\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: darkMode ? \"flex flex-col bg-slate-700 text-slate-400 font-semibold h-fit w-full transition-all ml-40 mt-72 p-5 rounded-md\" : \"flex flex-col bg-slate-400 text-black font-semibold h-fit w-full transition-all ml-40 mt-72 p-5 rounded-md\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                    className: \"mb-2\",\n                                    children: \"Table of Contents\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\DCM\\\\Desktop\\\\Coding\\\\MyProjects\\\\Next\\\\Blog-Personal FULL\\\\Personal-Blog\\\\pages\\\\blog\\\\[slug].js\",\n                                    lineNumber: 87,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                    className: \"text-slate-100 hover:cursor-pointer mb-2\",\n                                    href: \"#top\",\n                                    children: \"- To Top\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\DCM\\\\Desktop\\\\Coding\\\\MyProjects\\\\Next\\\\Blog-Personal FULL\\\\Personal-Blog\\\\pages\\\\blog\\\\[slug].js\",\n                                    lineNumber: 88,\n                                    columnNumber: 13\n                                }, this),\n                                tableContents.map(function(heading, index) {\n                                    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                        className: \"text-slate-100 hover:cursor-pointer mb-2\",\n                                        href: \"#\".concat(heading),\n                                        children: [\n                                            \"- \",\n                                            heading\n                                        ]\n                                    }, index, true, {\n                                        fileName: \"C:\\\\Users\\\\DCM\\\\Desktop\\\\Coding\\\\MyProjects\\\\Next\\\\Blog-Personal FULL\\\\Personal-Blog\\\\pages\\\\blog\\\\[slug].js\",\n                                        lineNumber: 96,\n                                        columnNumber: 17\n                                    }, _this));\n                                }),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                    className: \"text-slate-100 hover:cursor-pointer mb-2\",\n                                    href: \"#bottom\",\n                                    children: \"- To Bottom\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\DCM\\\\Desktop\\\\Coding\\\\MyProjects\\\\Next\\\\Blog-Personal FULL\\\\Personal-Blog\\\\pages\\\\blog\\\\[slug].js\",\n                                    lineNumber: 105,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\DCM\\\\Desktop\\\\Coding\\\\MyProjects\\\\Next\\\\Blog-Personal FULL\\\\Personal-Blog\\\\pages\\\\blog\\\\[slug].js\",\n                            lineNumber: 80,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\DCM\\\\Desktop\\\\Coding\\\\MyProjects\\\\Next\\\\Blog-Personal FULL\\\\Personal-Blog\\\\pages\\\\blog\\\\[slug].js\",\n                        lineNumber: 73,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                        name: \"top\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\DCM\\\\Desktop\\\\Coding\\\\MyProjects\\\\Next\\\\Blog-Personal FULL\\\\Personal-Blog\\\\pages\\\\blog\\\\[slug].js\",\n                        lineNumber: 113,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                        className: \"flex flex-row flex-wrap justify-center w-748\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                        className: darkMode ? \"text-5xl mt-10 mb-5 text-slate-100\" : \"text-5xl mt-10 mb-5 text-black\",\n                                        children: title\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\DCM\\\\Desktop\\\\Coding\\\\MyProjects\\\\Next\\\\Blog-Personal FULL\\\\Personal-Blog\\\\pages\\\\blog\\\\[slug].js\",\n                                        lineNumber: 116,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: darkMode ? \"bg-slate-700 text-slate-300 mb-5 pl-5 transition-all\" : \"bg-slate-300 text-slate-800 mb-5 pl-5 transition-all\",\n                                        children: [\n                                            \"Posted on \",\n                                            date\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\DCM\\\\Desktop\\\\Coding\\\\MyProjects\\\\Next\\\\Blog-Personal FULL\\\\Personal-Blog\\\\pages\\\\blog\\\\[slug].js\",\n                                        lineNumber: 125,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                        className: \"rounded-md\",\n                                        src: cover_image\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\DCM\\\\Desktop\\\\Coding\\\\MyProjects\\\\Next\\\\Blog-Personal FULL\\\\Personal-Blog\\\\pages\\\\blog\\\\[slug].js\",\n                                        lineNumber: 134,\n                                        columnNumber: 13\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\DCM\\\\Desktop\\\\Coding\\\\MyProjects\\\\Next\\\\Blog-Personal FULL\\\\Personal-Blog\\\\pages\\\\blog\\\\[slug].js\",\n                                lineNumber: 115,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                id: darkMode ? \"markdown-dark\" : \"markdown-light\",\n                                className: \"flex flex-row transition-all\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    dangerouslySetInnerHTML: {\n                                        __html: (0,marked__WEBPACK_IMPORTED_MODULE_3__.marked)(content)\n                                    }\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\DCM\\\\Desktop\\\\Coding\\\\MyProjects\\\\Next\\\\Blog-Personal FULL\\\\Personal-Blog\\\\pages\\\\blog\\\\[slug].js\",\n                                    lineNumber: 140,\n                                    columnNumber: 13\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\DCM\\\\Desktop\\\\Coding\\\\MyProjects\\\\Next\\\\Blog-Personal FULL\\\\Personal-Blog\\\\pages\\\\blog\\\\[slug].js\",\n                                lineNumber: 136,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                name: \"bottom\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\DCM\\\\Desktop\\\\Coding\\\\MyProjects\\\\Next\\\\Blog-Personal FULL\\\\Personal-Blog\\\\pages\\\\blog\\\\[slug].js\",\n                                lineNumber: 142,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\DCM\\\\Desktop\\\\Coding\\\\MyProjects\\\\Next\\\\Blog-Personal FULL\\\\Personal-Blog\\\\pages\\\\blog\\\\[slug].js\",\n                        lineNumber: 114,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\DCM\\\\Desktop\\\\Coding\\\\MyProjects\\\\Next\\\\Blog-Personal FULL\\\\Personal-Blog\\\\pages\\\\blog\\\\[slug].js\",\n                lineNumber: 66,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true));\n};\n_s(PostPage, \"af+pMXsHodmK1lDpx96ZyiUkTsI=\", false, function() {\n    return [\n        _context_globalContext__WEBPACK_IMPORTED_MODULE_4__.useGlobal\n    ];\n});\n_c = PostPage;\nvar _c;\n$RefreshReg$(_c, \"PostPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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c0Qsd0RBQ3RELENBQXNEOzs0Q0FFN0QsQ0FDVzs0Q0FBQ2IsSUFBSTs7Ozs7OztnSEFFaEJ3QyxDQUFHO3dDQUFDVCxTQUFTLEVBQUMsQ0FBWTt3Q0FBQ1UsR0FBRyxFQUFFeEMsV0FBVzs7Ozs7Ozs7Ozs7O3dHQUU3QzZCLENBQUc7Z0NBQ0ZZLEVBQUUsRUFBRTdCLFFBQVEsR0FBRyxDQUFlLGlCQUFHLENBQWdCO2dDQUNqRGtCLFNBQVMsRUFBQyxDQUErQjtzSEFFeENELENBQUc7b0NBQUNhLHVCQUF1QixFQUFFLENBQUM7d0NBQUNDLE1BQU0sRUFBRXRELDhDQUFNLENBQUNlLE9BQU87b0NBQUUsQ0FBQzs7Ozs7Ozs7Ozs7d0dBRTFEK0IsQ0FBQztnQ0FBQ1YsSUFBSSxFQUFDLENBQVE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSzFCLENBQUM7R0F2SXVCN0IsUUFBUTs7UUFRT04sNkRBQVM7OztLQVJ4Qk0sUUFBUSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9ibG9nL1tzbHVnXS5qcz9mYTcwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlQ29udGV4dCwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcclxuaW1wb3J0IGZzIGZyb20gXCJmc1wiO1xyXG5pbXBvcnQgcGF0aCBmcm9tIFwicGF0aFwiO1xyXG5pbXBvcnQgbWF0dGVyIGZyb20gXCJncmF5LW1hdHRlclwiO1xyXG5pbXBvcnQgeyBtYXJrZWQgfSBmcm9tIFwibWFya2VkXCI7XHJcbmltcG9ydCB7IHVzZUdsb2JhbCB9IGZyb20gXCIuLi8uLi9jb250ZXh0L2dsb2JhbENvbnRleHRcIjtcclxuaW1wb3J0IEhlYWRlciBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9oZWFkZXJcIjtcclxuaW1wb3J0IGhhbmRsZVNjcm9sbCwgeyBjaGVja1Njcm9sbGVkIH0gZnJvbSBcIi4uLy4uL2Z1bmN0aW9ucy9TY3JvbGxGdW5jdGlvbnNcIjtcclxuY29uc3QgaGxqcyA9IHJlcXVpcmUoXCJoaWdobGlnaHQuanNcIik7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQb3N0UGFnZSh7XHJcbiAgZnJvbnRtYXR0ZXI6IHsgdGl0bGUsIGRhdGUsIGNvdmVyX2ltYWdlLCBleGNlcnB0LCBzZWN0aW9ucyB9LFxyXG4gIHNsdWcsXHJcbiAgY29udGVudCxcclxufSkge1xyXG4gIGNvbnN0IFtzY3JvbGxDb3VudCwgc2V0U2Nyb2xsQ291bnRdID0gdXNlU3RhdGUoMCk7XHJcbiAgY29uc3QgW3RhYmxlQ29udGVudHMsIHNldFRhYmxlQ29udGVudHNdID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFtzY3JvbGxlZEFydGljbGUsIHNldFNjcm9sbGVkQXJ0aWNsZV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgeyBkYXJrTW9kZSwgdG9nZ2xlRGFya01vZGUgfSA9IHVzZUdsb2JhbCgpO1xyXG5cclxuICBtYXJrZWQuc2V0T3B0aW9ucyh7XHJcbiAgICBsYW5nUHJlZml4OiBcImhsanMgbGFuZ3VhZ2UtXCIsXHJcbiAgICBoaWdobGlnaHQ6IGZ1bmN0aW9uIChjb2RlKSB7XHJcbiAgICAgIHJldHVybiBobGpzLmhpZ2hsaWdodEF1dG8oY29kZSwgW1wiaHRtbFwiLCBcImphdmFzY3JpcHRcIl0pLnZhbHVlO1xyXG4gICAgfSxcclxuICB9KTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIHNldFRhYmxlQ29udGVudHMoc2VjdGlvbnMuc3BsaXQoXCIvXCIpKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCB1cGRhdGVTY3JvbGwpO1xyXG4gICAgc2V0U2Nyb2xsZWRBcnRpY2xlKGNoZWNrU2Nyb2xsZWQoc2Nyb2xsQ291bnQsIDQpKTtcclxuICAgIHJldHVybiAoKSA9PiB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCB1cGRhdGVTY3JvbGwpO1xyXG4gIH0pO1xyXG5cclxuICBmdW5jdGlvbiB1cGRhdGVTY3JvbGwoKSB7XHJcbiAgICAvLyBTY3JvbGwgZnVuY3Rpb24gZnJvbSBoYW5kbGVTY3JvbGwuanNcclxuICAgIHNldFNjcm9sbENvdW50KGhhbmRsZVNjcm9sbCgpKTtcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8SGVhZD5cclxuICAgICAgICA8dGl0bGU+e3RpdGxlfTwvdGl0bGU+XHJcbiAgICAgICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD17ZXhjZXJwdH0gLz5cclxuICAgICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi9mYXZpY29uLmljb1wiIC8+XHJcbiAgICAgIDwvSGVhZD5cclxuICAgICAgPGRpdlxyXG4gICAgICAgIGNsYXNzTmFtZT17XHJcbiAgICAgICAgICBkYXJrTW9kZVxyXG4gICAgICAgICAgICA/IFwic3RpY2t5IHRvcC0wIGxlZnQtMCBiZy1zbGF0ZS02MDAgdHJhbnNpdGlvbi1hbGxcIlxyXG4gICAgICAgICAgICA6IFwic3RpY2t5IHRvcC0wIGxlZnQtMCBiZy13aGl0ZSB0cmFuc2l0aW9uLWFsbFwiXHJcbiAgICAgICAgfVxyXG4gICAgICA+XHJcbiAgICAgICAgPEhlYWRlciAvPlxyXG4gICAgICAgIDxkaXZcclxuICAgICAgICAgIGNsYXNzTmFtZT17XHJcbiAgICAgICAgICAgIGRhcmtNb2RlID8gXCJiZy1zbGF0ZS00MDAgaC0xIHotMCBcIiA6IFwiYmctc2xhdGUtNjAwIGgtMSB6LTBcIlxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IGAke3Njcm9sbENvdW50fSVgIH19XHJcbiAgICAgICAgPjwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPHNlY3Rpb25cclxuICAgICAgICBjbGFzc05hbWU9e1xyXG4gICAgICAgICAgZGFya01vZGVcclxuICAgICAgICAgICAgPyBcImZsZXggZmxleC1yb3cganVzdGlmeS1jZW50ZXIgbWluLWgtc2NyZWVuIGJnLXNsYXRlLTYwMCBwYi0yMCB0cmFuc2l0aW9uLWFsbFwiXHJcbiAgICAgICAgICAgIDogXCJmbGV4IGZsZXgtcm93IGp1c3RpZnktY2VudGVyIG1pbi1oLXNjcmVlbiBiZy13aGl0ZSBwYi0yMCB0cmFuc2l0aW9uLWFsbFwiXHJcbiAgICAgICAgfVxyXG4gICAgICA+XHJcbiAgICAgICAgPGRpdlxyXG4gICAgICAgICAgY2xhc3NOYW1lPXtcclxuICAgICAgICAgICAgc2Nyb2xsZWRBcnRpY2xlXHJcbiAgICAgICAgICAgICAgPyBcImZsZXggZml4ZWQgYmctc2xhdGUtMTAwIHctOTYgdG9wLTEwIGl0ZW1zLXN0YXJ0IGp1c3RpZnktY2VudGVyIGxlZnQtMCBoLWZ1bGwgIGVhc2UtaW4tb3V0IGR1cmF0aW9uLTUwMFwiXHJcbiAgICAgICAgICAgICAgOiBcImZsZXggYWJzb2x1dGUgYmctc2xhdGUtMTAwIHctOTYgdG9wLTI1IGl0ZW1zLXN0YXJ0IGp1c3RpZnktY2VudGVyIGxlZnQtMCBoLWZ1bGwgZWFzZS1pbi1vdXQgZHVyYXRpb24tNTAwXCJcclxuICAgICAgICAgIH1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17XHJcbiAgICAgICAgICAgICAgZGFya01vZGVcclxuICAgICAgICAgICAgICAgID8gXCJmbGV4IGZsZXgtY29sIGJnLXNsYXRlLTcwMCB0ZXh0LXNsYXRlLTQwMCBmb250LXNlbWlib2xkIGgtZml0IHctZnVsbCB0cmFuc2l0aW9uLWFsbCBtbC00MCBtdC03MiBwLTUgcm91bmRlZC1tZFwiXHJcbiAgICAgICAgICAgICAgICA6IFwiZmxleCBmbGV4LWNvbCBiZy1zbGF0ZS00MDAgdGV4dC1ibGFjayBmb250LXNlbWlib2xkIGgtZml0IHctZnVsbCB0cmFuc2l0aW9uLWFsbCBtbC00MCBtdC03MiBwLTUgcm91bmRlZC1tZFwiXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cIm1iLTJcIj5UYWJsZSBvZiBDb250ZW50czwvaDE+XHJcbiAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC1zbGF0ZS0xMDAgaG92ZXI6Y3Vyc29yLXBvaW50ZXIgbWItMlwiXHJcbiAgICAgICAgICAgICAgaHJlZj17YCN0b3BgfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgLSBUbyBUb3BcclxuICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICB7dGFibGVDb250ZW50cy5tYXAoKGhlYWRpbmcsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtc2xhdGUtMTAwIGhvdmVyOmN1cnNvci1wb2ludGVyIG1iLTJcIlxyXG4gICAgICAgICAgICAgICAgICBocmVmPXtgIyR7aGVhZGluZ31gfVxyXG4gICAgICAgICAgICAgICAgICBrZXk9e2luZGV4fVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAtIHtoZWFkaW5nfVxyXG4gICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtc2xhdGUtMTAwIGhvdmVyOmN1cnNvci1wb2ludGVyIG1iLTJcIlxyXG4gICAgICAgICAgICAgIGhyZWY9e2AjYm90dG9tYH1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIC0gVG8gQm90dG9tXHJcbiAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxhIG5hbWU9XCJ0b3BcIj48L2E+XHJcbiAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiZmxleCBmbGV4LXJvdyBmbGV4LXdyYXAganVzdGlmeS1jZW50ZXIgdy03NDhcIj5cclxuICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxoMVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17XHJcbiAgICAgICAgICAgICAgICBkYXJrTW9kZVxyXG4gICAgICAgICAgICAgICAgICA/IFwidGV4dC01eGwgbXQtMTAgbWItNSB0ZXh0LXNsYXRlLTEwMFwiXHJcbiAgICAgICAgICAgICAgICAgIDogXCJ0ZXh0LTV4bCBtdC0xMCBtYi01IHRleHQtYmxhY2tcIlxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIHt0aXRsZX1cclxuICAgICAgICAgICAgPC9oMT5cclxuICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17XHJcbiAgICAgICAgICAgICAgICBkYXJrTW9kZVxyXG4gICAgICAgICAgICAgICAgICA/IFwiYmctc2xhdGUtNzAwIHRleHQtc2xhdGUtMzAwIG1iLTUgcGwtNSB0cmFuc2l0aW9uLWFsbFwiXHJcbiAgICAgICAgICAgICAgICAgIDogXCJiZy1zbGF0ZS0zMDAgdGV4dC1zbGF0ZS04MDAgbWItNSBwbC01IHRyYW5zaXRpb24tYWxsXCJcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICBQb3N0ZWQgb24ge2RhdGV9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cInJvdW5kZWQtbWRcIiBzcmM9e2NvdmVyX2ltYWdlfT48L2ltZz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICBpZD17ZGFya01vZGUgPyBcIm1hcmtkb3duLWRhcmtcIiA6IFwibWFya2Rvd24tbGlnaHRcIn1cclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXJvdyAgdHJhbnNpdGlvbi1hbGxcIlxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8ZGl2IGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7IF9faHRtbDogbWFya2VkKGNvbnRlbnQpIH19PjwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8YSBuYW1lPVwiYm90dG9tXCI+PC9hPlxyXG4gICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgPC9zZWN0aW9uPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1BhdGhzKCkge1xyXG4gIGNvbnN0IGZpbGVzID0gZnMucmVhZGRpclN5bmMocGF0aC5qb2luKFwicG9zdHNcIikpO1xyXG5cclxuICBjb25zdCBwYXRocyA9IGZpbGVzLm1hcCgoZmlsZW5hbWUpID0+ICh7XHJcbiAgICBwYXJhbXM6IHtcclxuICAgICAgc2x1ZzogZmlsZW5hbWUucmVwbGFjZShcIi5tZFwiLCBcIlwiKSxcclxuICAgIH0sXHJcbiAgfSkpO1xyXG5cclxuICByZXR1cm4ge1xyXG4gICAgcGF0aHMsXHJcbiAgICBmYWxsYmFjazogZmFsc2UsXHJcbiAgfTtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKHsgcGFyYW1zOiB7IHNsdWcgfSB9KSB7XHJcbiAgY29uc3QgbWFya2Rvd25XaXRoTWV0YSA9IGZzLnJlYWRGaWxlU3luYyhcclxuICAgIHBhdGguam9pbihcInBvc3RzXCIsIHNsdWcgKyBcIi5tZFwiKSxcclxuICAgIFwidXRmLThcIlxyXG4gICk7XHJcblxyXG4gIGNvbnN0IHsgZGF0YTogZnJvbnRtYXR0ZXIsIGNvbnRlbnQsIGV4Y2VycHQgfSA9IG1hdHRlcihtYXJrZG93bldpdGhNZXRhKTtcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIHByb3BzOiB7XHJcbiAgICAgIGZyb250bWF0dGVyLFxyXG4gICAgICBjb250ZW50LFxyXG4gICAgICBzbHVnLFxyXG4gICAgICBleGNlcnB0LFxyXG4gICAgfSxcclxuICB9O1xyXG59XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlQ29udGV4dCIsInVzZUVmZmVjdCIsIkhlYWQiLCJtYXJrZWQiLCJ1c2VHbG9iYWwiLCJIZWFkZXIiLCJoYW5kbGVTY3JvbGwiLCJjaGVja1Njcm9sbGVkIiwiaGxqcyIsInJlcXVpcmUiLCJQb3N0UGFnZSIsImZyb250bWF0dGVyIiwidGl0bGUiLCJkYXRlIiwiY292ZXJfaW1hZ2UiLCJleGNlcnB0Iiwic2VjdGlvbnMiLCJzbHVnIiwiY29udGVudCIsInVwZGF0ZVNjcm9sbCIsInNldFNjcm9sbENvdW50Iiwic2Nyb2xsQ291bnQiLCJ0YWJsZUNvbnRlbnRzIiwic2V0VGFibGVDb250ZW50cyIsInNjcm9sbGVkQXJ0aWNsZSIsInNldFNjcm9sbGVkQXJ0aWNsZSIsImRhcmtNb2RlIiwidG9nZ2xlRGFya01vZGUiLCJzZXRPcHRpb25zIiwibGFuZ1ByZWZpeCIsImhpZ2hsaWdodCIsImNvZGUiLCJoaWdobGlnaHRBdXRvIiwidmFsdWUiLCJzcGxpdCIsIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwibWV0YSIsIm5hbWUiLCJsaW5rIiwicmVsIiwiaHJlZiIsImRpdiIsImNsYXNzTmFtZSIsInN0eWxlIiwid2lkdGgiLCJzZWN0aW9uIiwiaDEiLCJhIiwibWFwIiwiaGVhZGluZyIsImluZGV4IiwiaW1nIiwic3JjIiwiaWQiLCJkYW5nZXJvdXNseVNldElubmVySFRNTCIsIl9faHRtbCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/blog/[slug].js\n");

/***/ })

});