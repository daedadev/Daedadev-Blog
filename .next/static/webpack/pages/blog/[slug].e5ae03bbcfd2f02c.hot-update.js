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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; },\n/* harmony export */   \"default\": function() { return /* binding */ PostPage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var marked__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! marked */ \"./node_modules/marked/lib/marked.esm.js\");\n/* harmony import */ var _context_globalContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../context/globalContext */ \"./context/globalContext.js\");\n/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/header */ \"./components/header.js\");\n/* harmony import */ var _functions_ScrollFunctions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../functions/ScrollFunctions */ \"./functions/ScrollFunctions.js\");\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar hljs = __webpack_require__(/*! highlight.js */ \"./node_modules/highlight.js/lib/index.js\");\nvar __N_SSG = true;\nfunction PostPage(param) {\n    var _frontmatter = param.frontmatter, title = _frontmatter.title, date = _frontmatter.date, cover_image = _frontmatter.cover_image, excerpt = _frontmatter.excerpt, sections = _frontmatter.sections, slug = param.slug, content = param.content;\n    var _this = this;\n    var updateScroll = function updateScroll() {\n        // Scroll function from handleScroll.js\n        setScrollCount((0,_functions_ScrollFunctions__WEBPACK_IMPORTED_MODULE_6__[\"default\"])());\n    };\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0), scrollCount = ref[0], setScrollCount = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), tableContents = ref1[0], setTableContents = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), scrolledArticle = ref2[0], setScrolledArticle = ref2[1];\n    var ref3 = (0,_context_globalContext__WEBPACK_IMPORTED_MODULE_4__.useGlobal)(), darkMode = ref3.darkMode, toggleDarkMode = ref3.toggleDarkMode;\n    marked__WEBPACK_IMPORTED_MODULE_3__.marked.setOptions({\n        langPrefix: \"hljs language-\",\n        highlight: function highlight(code) {\n            return hljs.highlightAuto(code, [\n                \"html\",\n                \"javascript\"\n            ]).value;\n        }\n    });\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        setTableContents(sections.split(\"/\"));\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        window.addEventListener(\"scroll\", updateScroll);\n        setScrolledArticle((0,_functions_ScrollFunctions__WEBPACK_IMPORTED_MODULE_6__.checkScrolled)(85));\n        return function() {\n            return window.removeEventListener(\"scroll\", updateScroll);\n        };\n    });\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: title\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\DCM\\\\Desktop\\\\Coding\\\\MyProjects\\\\Next\\\\Blog-Personal FULL\\\\Personal-Blog\\\\pages\\\\blog\\\\[slug].js\",\n                        lineNumber: 47,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: excerpt\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\DCM\\\\Desktop\\\\Coding\\\\MyProjects\\\\Next\\\\Blog-Personal FULL\\\\Personal-Blog\\\\pages\\\\blog\\\\[slug].js\",\n                        lineNumber: 48,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/favicon.ico\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\DCM\\\\Desktop\\\\Coding\\\\MyProjects\\\\Next\\\\Blog-Personal FULL\\\\Personal-Blog\\\\pages\\\\blog\\\\[slug].js\",\n                        lineNumber: 49,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\DCM\\\\Desktop\\\\Coding\\\\MyProjects\\\\Next\\\\Blog-Personal FULL\\\\Personal-Blog\\\\pages\\\\blog\\\\[slug].js\",\n                lineNumber: 46,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: darkMode ? \"sticky top-0 left-0 bg-slate-600 transition-all\" : \"sticky top-0 left-0 bg-white transition-all\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_header__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\DCM\\\\Desktop\\\\Coding\\\\MyProjects\\\\Next\\\\Blog-Personal FULL\\\\Personal-Blog\\\\pages\\\\blog\\\\[slug].js\",\n                        lineNumber: 58,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: darkMode ? \"bg-slate-400 h-1 z-0 \" : \"bg-slate-600 h-1 z-0\",\n                        style: {\n                            width: \"\".concat(scrollCount, \"%\")\n                        }\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\DCM\\\\Desktop\\\\Coding\\\\MyProjects\\\\Next\\\\Blog-Personal FULL\\\\Personal-Blog\\\\pages\\\\blog\\\\[slug].js\",\n                        lineNumber: 59,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\DCM\\\\Desktop\\\\Coding\\\\MyProjects\\\\Next\\\\Blog-Personal FULL\\\\Personal-Blog\\\\pages\\\\blog\\\\[slug].js\",\n                lineNumber: 51,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                className: darkMode ? \"flex flex-row w-11/12 justify-center items-center min-h-screen bg-slate-600 pb-20 transition-all\" : \"flex flex-row w-11/12 justify-center items-center min-h-screen bg-white pb-20 transition-all\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: scrolledArticle ? \"flex fixed w-96 top-0 items-start justify-center left-0 h-full  ease-in-out duration-500\" : \"flex absolute w-96 top-25 items-start justify-center left-0 h-full ease-in-out duration-500\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: darkMode ? \"xl:flex flex-col hidden bg-slate-700 text-slate-400 font-semibold h-fit w-fit mt-72 p-5 rounded-md ease-in-out duration-500\" : \"xl:flex flex-col hidden bg-slate-200 text-slate-700 font-semibold h-fit w-fit mt-72 p-5 rounded-md ease-in-out duration-500\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                    className: \"mb-2\",\n                                    children: \"Table of Contents\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\DCM\\\\Desktop\\\\Coding\\\\MyProjects\\\\Next\\\\Blog-Personal FULL\\\\Personal-Blog\\\\pages\\\\blog\\\\[slug].js\",\n                                    lineNumber: 87,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                    className: \"hover:cursor-pointer mb-2\",\n                                    href: \"#top\",\n                                    children: \"- To Top\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\DCM\\\\Desktop\\\\Coding\\\\MyProjects\\\\Next\\\\Blog-Personal FULL\\\\Personal-Blog\\\\pages\\\\blog\\\\[slug].js\",\n                                    lineNumber: 88,\n                                    columnNumber: 13\n                                }, this),\n                                tableContents.map(function(heading, index) {\n                                    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                        className: \" hover:cursor-pointer mb-2\",\n                                        href: \"#\".concat(heading),\n                                        children: [\n                                            \"- \",\n                                            heading\n                                        ]\n                                    }, index, true, {\n                                        fileName: \"C:\\\\Users\\\\DCM\\\\Desktop\\\\Coding\\\\MyProjects\\\\Next\\\\Blog-Personal FULL\\\\Personal-Blog\\\\pages\\\\blog\\\\[slug].js\",\n                                        lineNumber: 93,\n                                        columnNumber: 17\n                                    }, _this));\n                                }),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                    className: \" hover:cursor-pointer mb-2\",\n                                    href: \"#bottom\",\n                                    children: \"- To Bottom\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\DCM\\\\Desktop\\\\Coding\\\\MyProjects\\\\Next\\\\Blog-Personal FULL\\\\Personal-Blog\\\\pages\\\\blog\\\\[slug].js\",\n                                    lineNumber: 102,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\DCM\\\\Desktop\\\\Coding\\\\MyProjects\\\\Next\\\\Blog-Personal FULL\\\\Personal-Blog\\\\pages\\\\blog\\\\[slug].js\",\n                            lineNumber: 80,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\DCM\\\\Desktop\\\\Coding\\\\MyProjects\\\\Next\\\\Blog-Personal FULL\\\\Personal-Blog\\\\pages\\\\blog\\\\[slug].js\",\n                        lineNumber: 73,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                        name: \"top\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\DCM\\\\Desktop\\\\Coding\\\\MyProjects\\\\Next\\\\Blog-Personal FULL\\\\Personal-Blog\\\\pages\\\\blog\\\\[slug].js\",\n                        lineNumber: 107,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                        className: \"flex flex-row flex-wrap justify-center w-748\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                        className: darkMode ? \"text-5xl mt-10 mb-5 text-slate-100\" : \"text-5xl mt-10 mb-5 text-black\",\n                                        children: title\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\DCM\\\\Desktop\\\\Coding\\\\MyProjects\\\\Next\\\\Blog-Personal FULL\\\\Personal-Blog\\\\pages\\\\blog\\\\[slug].js\",\n                                        lineNumber: 110,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: darkMode ? \"bg-slate-700 text-slate-300 mb-5 pl-5 transition-all\" : \"bg-slate-300 text-slate-800 mb-5 pl-5 transition-all\",\n                                        children: [\n                                            \"Posted on \",\n                                            date\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\DCM\\\\Desktop\\\\Coding\\\\MyProjects\\\\Next\\\\Blog-Personal FULL\\\\Personal-Blog\\\\pages\\\\blog\\\\[slug].js\",\n                                        lineNumber: 119,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                        className: \"rounded-md\",\n                                        src: cover_image\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\DCM\\\\Desktop\\\\Coding\\\\MyProjects\\\\Next\\\\Blog-Personal FULL\\\\Personal-Blog\\\\pages\\\\blog\\\\[slug].js\",\n                                        lineNumber: 128,\n                                        columnNumber: 13\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\DCM\\\\Desktop\\\\Coding\\\\MyProjects\\\\Next\\\\Blog-Personal FULL\\\\Personal-Blog\\\\pages\\\\blog\\\\[slug].js\",\n                                lineNumber: 109,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                id: darkMode ? \"markdown-dark\" : \"markdown-light\",\n                                className: \"flex flex-row transition-all\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    dangerouslySetInnerHTML: {\n                                        __html: (0,marked__WEBPACK_IMPORTED_MODULE_3__.marked)(content)\n                                    }\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\DCM\\\\Desktop\\\\Coding\\\\MyProjects\\\\Next\\\\Blog-Personal FULL\\\\Personal-Blog\\\\pages\\\\blog\\\\[slug].js\",\n                                    lineNumber: 134,\n                                    columnNumber: 13\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\DCM\\\\Desktop\\\\Coding\\\\MyProjects\\\\Next\\\\Blog-Personal FULL\\\\Personal-Blog\\\\pages\\\\blog\\\\[slug].js\",\n                                lineNumber: 130,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                name: \"bottom\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\DCM\\\\Desktop\\\\Coding\\\\MyProjects\\\\Next\\\\Blog-Personal FULL\\\\Personal-Blog\\\\pages\\\\blog\\\\[slug].js\",\n                                lineNumber: 136,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\DCM\\\\Desktop\\\\Coding\\\\MyProjects\\\\Next\\\\Blog-Personal FULL\\\\Personal-Blog\\\\pages\\\\blog\\\\[slug].js\",\n                        lineNumber: 108,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\DCM\\\\Desktop\\\\Coding\\\\MyProjects\\\\Next\\\\Blog-Personal FULL\\\\Personal-Blog\\\\pages\\\\blog\\\\[slug].js\",\n                lineNumber: 66,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true));\n};\n_s(PostPage, \"af+pMXsHodmK1lDpx96ZyiUkTsI=\", false, function() {\n    return [\n        _context_globalContext__WEBPACK_IMPORTED_MODULE_4__.useGlobal\n    ];\n});\n_c = PostPage;\nvar _c;\n$RefreshReg$(_c, \"PostPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0FBc0Q7OzRDQUU3RCxDQUNXOzRDQUFDYixJQUFJOzs7Ozs7O2dIQUVoQndDLENBQUc7d0NBQUNULFNBQVMsRUFBQyxDQUFZO3dDQUFDVSxHQUFHLEVBQUV4QyxXQUFXOzs7Ozs7Ozs7Ozs7d0dBRTdDNkIsQ0FBRztnQ0FDRlksRUFBRSxFQUFFN0IsUUFBUSxHQUFHLENBQWUsaUJBQUcsQ0FBZ0I7Z0NBQ2pEa0IsU0FBUyxFQUFDLENBQStCO3NIQUV4Q0QsQ0FBRztvQ0FBQ2EsdUJBQXVCLEVBQUUsQ0FBQzt3Q0FBQ0MsTUFBTSxFQUFFdEQsOENBQU0sQ0FBQ2UsT0FBTztvQ0FBRSxDQUFDOzs7Ozs7Ozs7Ozt3R0FFMUQrQixDQUFDO2dDQUFDVixJQUFJLEVBQUMsQ0FBUTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLMUIsQ0FBQztHQWpJdUI3QixRQUFROztRQVFPTiw2REFBUzs7O0tBUnhCTSxRQUFRIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2Jsb2cvW3NsdWddLmpzP2ZhNzAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VDb250ZXh0LCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xyXG5pbXBvcnQgZnMgZnJvbSBcImZzXCI7XHJcbmltcG9ydCBwYXRoIGZyb20gXCJwYXRoXCI7XHJcbmltcG9ydCBtYXR0ZXIgZnJvbSBcImdyYXktbWF0dGVyXCI7XHJcbmltcG9ydCB7IG1hcmtlZCB9IGZyb20gXCJtYXJrZWRcIjtcclxuaW1wb3J0IHsgdXNlR2xvYmFsIH0gZnJvbSBcIi4uLy4uL2NvbnRleHQvZ2xvYmFsQ29udGV4dFwiO1xyXG5pbXBvcnQgSGVhZGVyIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL2hlYWRlclwiO1xyXG5pbXBvcnQgaGFuZGxlU2Nyb2xsLCB7IGNoZWNrU2Nyb2xsZWQgfSBmcm9tIFwiLi4vLi4vZnVuY3Rpb25zL1Njcm9sbEZ1bmN0aW9uc1wiO1xyXG5jb25zdCBobGpzID0gcmVxdWlyZShcImhpZ2hsaWdodC5qc1wiKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBvc3RQYWdlKHtcclxuICBmcm9udG1hdHRlcjogeyB0aXRsZSwgZGF0ZSwgY292ZXJfaW1hZ2UsIGV4Y2VycHQsIHNlY3Rpb25zIH0sXHJcbiAgc2x1ZyxcclxuICBjb250ZW50LFxyXG59KSB7XHJcbiAgY29uc3QgW3Njcm9sbENvdW50LCBzZXRTY3JvbGxDb3VudF0gPSB1c2VTdGF0ZSgwKTtcclxuICBjb25zdCBbdGFibGVDb250ZW50cywgc2V0VGFibGVDb250ZW50c10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW3Njcm9sbGVkQXJ0aWNsZSwgc2V0U2Nyb2xsZWRBcnRpY2xlXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCB7IGRhcmtNb2RlLCB0b2dnbGVEYXJrTW9kZSB9ID0gdXNlR2xvYmFsKCk7XHJcblxyXG4gIG1hcmtlZC5zZXRPcHRpb25zKHtcclxuICAgIGxhbmdQcmVmaXg6IFwiaGxqcyBsYW5ndWFnZS1cIixcclxuICAgIGhpZ2hsaWdodDogZnVuY3Rpb24gKGNvZGUpIHtcclxuICAgICAgcmV0dXJuIGhsanMuaGlnaGxpZ2h0QXV0byhjb2RlLCBbXCJodG1sXCIsIFwiamF2YXNjcmlwdFwiXSkudmFsdWU7XHJcbiAgICB9LFxyXG4gIH0pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgc2V0VGFibGVDb250ZW50cyhzZWN0aW9ucy5zcGxpdChcIi9cIikpO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIHVwZGF0ZVNjcm9sbCk7XHJcbiAgICBzZXRTY3JvbGxlZEFydGljbGUoY2hlY2tTY3JvbGxlZCg4NSkpO1xyXG4gICAgcmV0dXJuICgpID0+IHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIHVwZGF0ZVNjcm9sbCk7XHJcbiAgfSk7XHJcblxyXG4gIGZ1bmN0aW9uIHVwZGF0ZVNjcm9sbCgpIHtcclxuICAgIC8vIFNjcm9sbCBmdW5jdGlvbiBmcm9tIGhhbmRsZVNjcm9sbC5qc1xyXG4gICAgc2V0U2Nyb2xsQ291bnQoaGFuZGxlU2Nyb2xsKCkpO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxIZWFkPlxyXG4gICAgICAgIDx0aXRsZT57dGl0bGV9PC90aXRsZT5cclxuICAgICAgICA8bWV0YSBuYW1lPVwiZGVzY3JpcHRpb25cIiBjb250ZW50PXtleGNlcnB0fSAvPlxyXG4gICAgICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiL2Zhdmljb24uaWNvXCIgLz5cclxuICAgICAgPC9IZWFkPlxyXG4gICAgICA8ZGl2XHJcbiAgICAgICAgY2xhc3NOYW1lPXtcclxuICAgICAgICAgIGRhcmtNb2RlXHJcbiAgICAgICAgICAgID8gXCJzdGlja3kgdG9wLTAgbGVmdC0wIGJnLXNsYXRlLTYwMCB0cmFuc2l0aW9uLWFsbFwiXHJcbiAgICAgICAgICAgIDogXCJzdGlja3kgdG9wLTAgbGVmdC0wIGJnLXdoaXRlIHRyYW5zaXRpb24tYWxsXCJcclxuICAgICAgICB9XHJcbiAgICAgID5cclxuICAgICAgICA8SGVhZGVyIC8+XHJcbiAgICAgICAgPGRpdlxyXG4gICAgICAgICAgY2xhc3NOYW1lPXtcclxuICAgICAgICAgICAgZGFya01vZGUgPyBcImJnLXNsYXRlLTQwMCBoLTEgei0wIFwiIDogXCJiZy1zbGF0ZS02MDAgaC0xIHotMFwiXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBzdHlsZT17eyB3aWR0aDogYCR7c2Nyb2xsQ291bnR9JWAgfX1cclxuICAgICAgICA+PC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8c2VjdGlvblxyXG4gICAgICAgIGNsYXNzTmFtZT17XHJcbiAgICAgICAgICBkYXJrTW9kZVxyXG4gICAgICAgICAgICA/IFwiZmxleCBmbGV4LXJvdyB3LTExLzEyIGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciBtaW4taC1zY3JlZW4gYmctc2xhdGUtNjAwIHBiLTIwIHRyYW5zaXRpb24tYWxsXCJcclxuICAgICAgICAgICAgOiBcImZsZXggZmxleC1yb3cgdy0xMS8xMiBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgbWluLWgtc2NyZWVuIGJnLXdoaXRlIHBiLTIwIHRyYW5zaXRpb24tYWxsXCJcclxuICAgICAgICB9XHJcbiAgICAgID5cclxuICAgICAgICA8ZGl2XHJcbiAgICAgICAgICBjbGFzc05hbWU9e1xyXG4gICAgICAgICAgICBzY3JvbGxlZEFydGljbGVcclxuICAgICAgICAgICAgICA/IFwiZmxleCBmaXhlZCB3LTk2IHRvcC0wIGl0ZW1zLXN0YXJ0IGp1c3RpZnktY2VudGVyIGxlZnQtMCBoLWZ1bGwgIGVhc2UtaW4tb3V0IGR1cmF0aW9uLTUwMFwiXHJcbiAgICAgICAgICAgICAgOiBcImZsZXggYWJzb2x1dGUgdy05NiB0b3AtMjUgaXRlbXMtc3RhcnQganVzdGlmeS1jZW50ZXIgbGVmdC0wIGgtZnVsbCBlYXNlLWluLW91dCBkdXJhdGlvbi01MDBcIlxyXG4gICAgICAgICAgfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtcclxuICAgICAgICAgICAgICBkYXJrTW9kZVxyXG4gICAgICAgICAgICAgICAgPyBcInhsOmZsZXggZmxleC1jb2wgaGlkZGVuIGJnLXNsYXRlLTcwMCB0ZXh0LXNsYXRlLTQwMCBmb250LXNlbWlib2xkIGgtZml0IHctZml0IG10LTcyIHAtNSByb3VuZGVkLW1kIGVhc2UtaW4tb3V0IGR1cmF0aW9uLTUwMFwiXHJcbiAgICAgICAgICAgICAgICA6IFwieGw6ZmxleCBmbGV4LWNvbCBoaWRkZW4gYmctc2xhdGUtMjAwIHRleHQtc2xhdGUtNzAwIGZvbnQtc2VtaWJvbGQgaC1maXQgdy1maXQgbXQtNzIgcC01IHJvdW5kZWQtbWQgZWFzZS1pbi1vdXQgZHVyYXRpb24tNTAwXCJcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwibWItMlwiPlRhYmxlIG9mIENvbnRlbnRzPC9oMT5cclxuICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiaG92ZXI6Y3Vyc29yLXBvaW50ZXIgbWItMlwiIGhyZWY9e2AjdG9wYH0+XHJcbiAgICAgICAgICAgICAgLSBUbyBUb3BcclxuICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICB7dGFibGVDb250ZW50cy5tYXAoKGhlYWRpbmcsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIiBob3ZlcjpjdXJzb3ItcG9pbnRlciBtYi0yXCJcclxuICAgICAgICAgICAgICAgICAgaHJlZj17YCMke2hlYWRpbmd9YH1cclxuICAgICAgICAgICAgICAgICAga2V5PXtpbmRleH1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgLSB7aGVhZGluZ31cclxuICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiIGhvdmVyOmN1cnNvci1wb2ludGVyIG1iLTJcIiBocmVmPXtgI2JvdHRvbWB9PlxyXG4gICAgICAgICAgICAgIC0gVG8gQm90dG9tXHJcbiAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxhIG5hbWU9XCJ0b3BcIj48L2E+XHJcbiAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiZmxleCBmbGV4LXJvdyBmbGV4LXdyYXAganVzdGlmeS1jZW50ZXIgdy03NDhcIj5cclxuICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxoMVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17XHJcbiAgICAgICAgICAgICAgICBkYXJrTW9kZVxyXG4gICAgICAgICAgICAgICAgICA/IFwidGV4dC01eGwgbXQtMTAgbWItNSB0ZXh0LXNsYXRlLTEwMFwiXHJcbiAgICAgICAgICAgICAgICAgIDogXCJ0ZXh0LTV4bCBtdC0xMCBtYi01IHRleHQtYmxhY2tcIlxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIHt0aXRsZX1cclxuICAgICAgICAgICAgPC9oMT5cclxuICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17XHJcbiAgICAgICAgICAgICAgICBkYXJrTW9kZVxyXG4gICAgICAgICAgICAgICAgICA/IFwiYmctc2xhdGUtNzAwIHRleHQtc2xhdGUtMzAwIG1iLTUgcGwtNSB0cmFuc2l0aW9uLWFsbFwiXHJcbiAgICAgICAgICAgICAgICAgIDogXCJiZy1zbGF0ZS0zMDAgdGV4dC1zbGF0ZS04MDAgbWItNSBwbC01IHRyYW5zaXRpb24tYWxsXCJcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICBQb3N0ZWQgb24ge2RhdGV9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cInJvdW5kZWQtbWRcIiBzcmM9e2NvdmVyX2ltYWdlfT48L2ltZz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICBpZD17ZGFya01vZGUgPyBcIm1hcmtkb3duLWRhcmtcIiA6IFwibWFya2Rvd24tbGlnaHRcIn1cclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXJvdyAgdHJhbnNpdGlvbi1hbGxcIlxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8ZGl2IGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7IF9faHRtbDogbWFya2VkKGNvbnRlbnQpIH19PjwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8YSBuYW1lPVwiYm90dG9tXCI+PC9hPlxyXG4gICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgPC9zZWN0aW9uPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1BhdGhzKCkge1xyXG4gIGNvbnN0IGZpbGVzID0gZnMucmVhZGRpclN5bmMocGF0aC5qb2luKFwicG9zdHNcIikpO1xyXG5cclxuICBjb25zdCBwYXRocyA9IGZpbGVzLm1hcCgoZmlsZW5hbWUpID0+ICh7XHJcbiAgICBwYXJhbXM6IHtcclxuICAgICAgc2x1ZzogZmlsZW5hbWUucmVwbGFjZShcIi5tZFwiLCBcIlwiKSxcclxuICAgIH0sXHJcbiAgfSkpO1xyXG5cclxuICByZXR1cm4ge1xyXG4gICAgcGF0aHMsXHJcbiAgICBmYWxsYmFjazogZmFsc2UsXHJcbiAgfTtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKHsgcGFyYW1zOiB7IHNsdWcgfSB9KSB7XHJcbiAgY29uc3QgbWFya2Rvd25XaXRoTWV0YSA9IGZzLnJlYWRGaWxlU3luYyhcclxuICAgIHBhdGguam9pbihcInBvc3RzXCIsIHNsdWcgKyBcIi5tZFwiKSxcclxuICAgIFwidXRmLThcIlxyXG4gICk7XHJcblxyXG4gIGNvbnN0IHsgZGF0YTogZnJvbnRtYXR0ZXIsIGNvbnRlbnQsIGV4Y2VycHQgfSA9IG1hdHRlcihtYXJrZG93bldpdGhNZXRhKTtcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIHByb3BzOiB7XHJcbiAgICAgIGZyb250bWF0dGVyLFxyXG4gICAgICBjb250ZW50LFxyXG4gICAgICBzbHVnLFxyXG4gICAgICBleGNlcnB0LFxyXG4gICAgfSxcclxuICB9O1xyXG59XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlQ29udGV4dCIsInVzZUVmZmVjdCIsIkhlYWQiLCJtYXJrZWQiLCJ1c2VHbG9iYWwiLCJIZWFkZXIiLCJoYW5kbGVTY3JvbGwiLCJjaGVja1Njcm9sbGVkIiwiaGxqcyIsInJlcXVpcmUiLCJQb3N0UGFnZSIsImZyb250bWF0dGVyIiwidGl0bGUiLCJkYXRlIiwiY292ZXJfaW1hZ2UiLCJleGNlcnB0Iiwic2VjdGlvbnMiLCJzbHVnIiwiY29udGVudCIsInVwZGF0ZVNjcm9sbCIsInNldFNjcm9sbENvdW50Iiwic2Nyb2xsQ291bnQiLCJ0YWJsZUNvbnRlbnRzIiwic2V0VGFibGVDb250ZW50cyIsInNjcm9sbGVkQXJ0aWNsZSIsInNldFNjcm9sbGVkQXJ0aWNsZSIsImRhcmtNb2RlIiwidG9nZ2xlRGFya01vZGUiLCJzZXRPcHRpb25zIiwibGFuZ1ByZWZpeCIsImhpZ2hsaWdodCIsImNvZGUiLCJoaWdobGlnaHRBdXRvIiwidmFsdWUiLCJzcGxpdCIsIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwibWV0YSIsIm5hbWUiLCJsaW5rIiwicmVsIiwiaHJlZiIsImRpdiIsImNsYXNzTmFtZSIsInN0eWxlIiwid2lkdGgiLCJzZWN0aW9uIiwiaDEiLCJhIiwibWFwIiwiaGVhZGluZyIsImluZGV4IiwiaW1nIiwic3JjIiwiaWQiLCJkYW5nZXJvdXNseVNldElubmVySFRNTCIsIl9faHRtbCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/blog/[slug].js\n");

/***/ })

});