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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; },\n/* harmony export */   \"default\": function() { return /* binding */ PostPage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var marked__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! marked */ \"./node_modules/marked/lib/marked.esm.js\");\n/* harmony import */ var _context_globalContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../context/globalContext */ \"./context/globalContext.js\");\n/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/header */ \"./components/header.js\");\n/* harmony import */ var _functions_ScrollFunctions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../functions/ScrollFunctions */ \"./functions/ScrollFunctions.js\");\n/* harmony import */ var _components_tableofContents__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/tableofContents */ \"./components/tableofContents.js\");\n\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar hljs = __webpack_require__(/*! highlight.js */ \"./node_modules/highlight.js/lib/index.js\");\nvar __N_SSG = true;\nfunction PostPage(param) {\n    var _frontmatter = param.frontmatter, title = _frontmatter.title, date = _frontmatter.date, cover_image = _frontmatter.cover_image, excerpt = _frontmatter.excerpt, sections = _frontmatter.sections, slug = param.slug, content = param.content;\n    var updateScroll = function updateScroll() {\n        // Scroll function from handleScroll.js\n        setScrollCount((0,_functions_ScrollFunctions__WEBPACK_IMPORTED_MODULE_6__[\"default\"])());\n    };\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0), scrollCount = ref[0], setScrollCount = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), tableContents = ref1[0], setTableContents = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), scrolledArticle = ref2[0], setScrolledArticle = ref2[1];\n    var ref3 = (0,_context_globalContext__WEBPACK_IMPORTED_MODULE_4__.useGlobal)(), darkMode = ref3.darkMode, toggleDarkMode = ref3.toggleDarkMode;\n    marked__WEBPACK_IMPORTED_MODULE_3__.marked.setOptions({\n        langPrefix: \"hljs language-\",\n        highlight: function highlight(code) {\n            return hljs.highlightAuto(code, [\n                \"html\",\n                \"javascript\"\n            ]).value;\n        }\n    });\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        setTableContents(sections.split(\"/\"));\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        window.addEventListener(\"scroll\", updateScroll);\n        setScrolledArticle((0,_functions_ScrollFunctions__WEBPACK_IMPORTED_MODULE_6__.checkScrolled)(85));\n        return function() {\n            return window.removeEventListener(\"scroll\", updateScroll);\n        };\n    });\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: title\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\DCM\\\\Desktop\\\\Coding\\\\MyProjects\\\\Next\\\\Blog-Personal FULL\\\\Personal-Blog\\\\pages\\\\blog\\\\[slug].js\",\n                        lineNumber: 48,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: excerpt\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\DCM\\\\Desktop\\\\Coding\\\\MyProjects\\\\Next\\\\Blog-Personal FULL\\\\Personal-Blog\\\\pages\\\\blog\\\\[slug].js\",\n                        lineNumber: 49,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/favicon.ico\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\DCM\\\\Desktop\\\\Coding\\\\MyProjects\\\\Next\\\\Blog-Personal FULL\\\\Personal-Blog\\\\pages\\\\blog\\\\[slug].js\",\n                        lineNumber: 50,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\DCM\\\\Desktop\\\\Coding\\\\MyProjects\\\\Next\\\\Blog-Personal FULL\\\\Personal-Blog\\\\pages\\\\blog\\\\[slug].js\",\n                lineNumber: 47,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: darkMode ? \"sticky top-0 left-0 bg-slate-600 transition-all\" : \"sticky top-0 left-0 bg-white transition-all\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_header__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\DCM\\\\Desktop\\\\Coding\\\\MyProjects\\\\Next\\\\Blog-Personal FULL\\\\Personal-Blog\\\\pages\\\\blog\\\\[slug].js\",\n                        lineNumber: 59,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: darkMode ? \"bg-slate-400 h-1 z-0 \" : \"bg-slate-600 h-1 z-0\",\n                        style: {\n                            width: \"\".concat(scrollCount, \"%\")\n                        }\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\DCM\\\\Desktop\\\\Coding\\\\MyProjects\\\\Next\\\\Blog-Personal FULL\\\\Personal-Blog\\\\pages\\\\blog\\\\[slug].js\",\n                        lineNumber: 60,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\DCM\\\\Desktop\\\\Coding\\\\MyProjects\\\\Next\\\\Blog-Personal FULL\\\\Personal-Blog\\\\pages\\\\blog\\\\[slug].js\",\n                lineNumber: 52,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                className: darkMode ? \"flex flex-row justify-center min-h-screen bg-slate-600 pb-20 transition-all\" : \"flex flex-row justify-center min-h-screen bg-white pb-20 transition-all\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_tableofContents__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                        articleSections: tableContents,\n                        scrolledArticle: scrolledArticle\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\DCM\\\\Desktop\\\\Coding\\\\MyProjects\\\\Next\\\\Blog-Personal FULL\\\\Personal-Blog\\\\pages\\\\blog\\\\[slug].js\",\n                        lineNumber: 74,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                        name: \"top\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\DCM\\\\Desktop\\\\Coding\\\\MyProjects\\\\Next\\\\Blog-Personal FULL\\\\Personal-Blog\\\\pages\\\\blog\\\\[slug].js\",\n                        lineNumber: 78,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                        className: \"flex flex-row flex-wrap justify-center w-11/12 lg:w-748\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                        className: darkMode ? \"text-5xl mt-10 mb-5 text-slate-100\" : \"text-5xl mt-10 mb-5 text-black\",\n                                        children: title\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\DCM\\\\Desktop\\\\Coding\\\\MyProjects\\\\Next\\\\Blog-Personal FULL\\\\Personal-Blog\\\\pages\\\\blog\\\\[slug].js\",\n                                        lineNumber: 81,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: darkMode ? \"bg-slate-700 text-slate-300 mb-5 pl-5 transition-all\" : \"bg-slate-300 text-slate-800 mb-5 pl-5 transition-all\",\n                                        children: [\n                                            \"Posted on \",\n                                            date\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\DCM\\\\Desktop\\\\Coding\\\\MyProjects\\\\Next\\\\Blog-Personal FULL\\\\Personal-Blog\\\\pages\\\\blog\\\\[slug].js\",\n                                        lineNumber: 90,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                        className: \"rounded-md\",\n                                        src: cover_image\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\DCM\\\\Desktop\\\\Coding\\\\MyProjects\\\\Next\\\\Blog-Personal FULL\\\\Personal-Blog\\\\pages\\\\blog\\\\[slug].js\",\n                                        lineNumber: 99,\n                                        columnNumber: 13\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\DCM\\\\Desktop\\\\Coding\\\\MyProjects\\\\Next\\\\Blog-Personal FULL\\\\Personal-Blog\\\\pages\\\\blog\\\\[slug].js\",\n                                lineNumber: 80,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                id: darkMode ? \"markdown-dark\" : \"markdown-light\",\n                                className: \"flex flex-row transition-all w-full\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"w-full\",\n                                    dangerouslySetInnerHTML: {\n                                        __html: (0,marked__WEBPACK_IMPORTED_MODULE_3__.marked)(content)\n                                    }\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\DCM\\\\Desktop\\\\Coding\\\\MyProjects\\\\Next\\\\Blog-Personal FULL\\\\Personal-Blog\\\\pages\\\\blog\\\\[slug].js\",\n                                    lineNumber: 105,\n                                    columnNumber: 13\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\DCM\\\\Desktop\\\\Coding\\\\MyProjects\\\\Next\\\\Blog-Personal FULL\\\\Personal-Blog\\\\pages\\\\blog\\\\[slug].js\",\n                                lineNumber: 101,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                name: \"bottom\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\DCM\\\\Desktop\\\\Coding\\\\MyProjects\\\\Next\\\\Blog-Personal FULL\\\\Personal-Blog\\\\pages\\\\blog\\\\[slug].js\",\n                                lineNumber: 110,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\DCM\\\\Desktop\\\\Coding\\\\MyProjects\\\\Next\\\\Blog-Personal FULL\\\\Personal-Blog\\\\pages\\\\blog\\\\[slug].js\",\n                        lineNumber: 79,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\DCM\\\\Desktop\\\\Coding\\\\MyProjects\\\\Next\\\\Blog-Personal FULL\\\\Personal-Blog\\\\pages\\\\blog\\\\[slug].js\",\n                lineNumber: 67,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true));\n};\n_s(PostPage, \"af+pMXsHodmK1lDpx96ZyiUkTsI=\", false, function() {\n    return [\n        _context_globalContext__WEBPACK_IMPORTED_MODULE_4__.useGlobal\n    ];\n});\n_c = PostPage;\nvar _c;\n$RefreshReg$(_c, \"PostPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9ibG9nL1tzbHVnXS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUE4RDtBQUNsQztBQUlHO0FBQ3dCO0FBQ1g7QUFDaUM7QUFDZjs7QUFDOUQsR0FBSyxDQUFDVyxJQUFJLEdBQUdDLG1CQUFPLENBQUMsOERBQWM7O0FBRXBCLFFBQVEsQ0FBQ0MsUUFBUSxDQUFDLEtBSWhDLEVBQUUsQ0FBQzt1QkFKNkIsS0FJaEMsQ0FIQ0MsV0FBVyxFQUFJQyxLQUFLLGdCQUFMQSxLQUFLLEVBQUVDLElBQUksZ0JBQUpBLElBQUksRUFBRUMsV0FBVyxnQkFBWEEsV0FBVyxFQUFFQyxPQUFPLGdCQUFQQSxPQUFPLEVBQUVDLFFBQVEsZ0JBQVJBLFFBQVEsRUFDMURDLElBQUksR0FGMkIsS0FJaEMsQ0FGQ0EsSUFBSSxFQUNKQyxPQUFPLEdBSHdCLEtBSWhDLENBRENBLE9BQU87UUF3QkVDLFlBQVksR0FBckIsUUFBUSxDQUFDQSxZQUFZLEdBQUcsQ0FBQztRQUN2QixFQUF1QztRQUN2Q0MsY0FBYyxDQUFDZixzRUFBWTtJQUM3QixDQUFDOztJQXpCRCxHQUFLLENBQWlDUCxHQUFXLEdBQVhBLCtDQUFRLENBQUMsQ0FBQyxHQUF6Q3VCLFdBQVcsR0FBb0J2QixHQUFXLEtBQTdCc0IsY0FBYyxHQUFJdEIsR0FBVztJQUNqRCxHQUFLLENBQXFDQSxJQUFZLEdBQVpBLCtDQUFRLENBQUMsQ0FBQyxDQUFDLEdBQTlDd0IsYUFBYSxHQUFzQnhCLElBQVksS0FBaEN5QixnQkFBZ0IsR0FBSXpCLElBQVk7SUFDdEQsR0FBSyxDQUF5Q0EsSUFBZSxHQUFmQSwrQ0FBUSxDQUFDLEtBQUssR0FBckQwQixlQUFlLEdBQXdCMUIsSUFBZSxLQUFyQzJCLGtCQUFrQixHQUFJM0IsSUFBZTtJQUM3RCxHQUFLLENBQWdDSyxJQUFXLEdBQVhBLGlFQUFTLElBQXRDdUIsUUFBUSxHQUFxQnZCLElBQVcsQ0FBeEN1QixRQUFRLEVBQUVDLGNBQWMsR0FBS3hCLElBQVcsQ0FBOUJ3QixjQUFjO0lBRWhDekIscURBQWlCLENBQUMsQ0FBQztRQUNqQjJCLFVBQVUsRUFBRSxDQUFnQjtRQUM1QkMsU0FBUyxFQUFFLFFBQVEsQ0FBbkJBLFNBQVMsQ0FBWUMsSUFBSSxFQUFFLENBQUM7WUFDMUIsTUFBTSxDQUFDdkIsSUFBSSxDQUFDd0IsYUFBYSxDQUFDRCxJQUFJLEVBQUUsQ0FBQztnQkFBQSxDQUFNO2dCQUFFLENBQVk7WUFBQSxDQUFDLEVBQUVFLEtBQUs7UUFDL0QsQ0FBQztJQUNILENBQUM7SUFFRGpDLGdEQUFTLENBQUMsUUFBUSxHQUFGLENBQUM7UUFDZnVCLGdCQUFnQixDQUFDUCxRQUFRLENBQUNrQixLQUFLLENBQUMsQ0FBRztJQUNyQyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBRUxsQyxnREFBUyxDQUFDLFFBQVEsR0FBRixDQUFDO1FBQ2ZtQyxNQUFNLENBQUNDLGdCQUFnQixDQUFDLENBQVEsU0FBRWpCLFlBQVk7UUFDOUNNLGtCQUFrQixDQUFDbkIseUVBQWEsQ0FBQyxFQUFFO1FBQ25DLE1BQU0sQ0FBQyxRQUFRO1lBQUY2QixNQUFNLENBQU5BLE1BQU0sQ0FBQ0UsbUJBQW1CLENBQUMsQ0FBUSxTQUFFbEIsWUFBWTs7SUFDaEUsQ0FBQztJQU9ELE1BQU07O3dGQUVEbEIsa0RBQUk7O2dHQUNGVyxDQUFLO2tDQUFFQSxLQUFLOzs7Ozs7Z0dBQ1owQixDQUFJO3dCQUFDQyxJQUFJLEVBQUMsQ0FBYTt3QkFBQ3JCLE9BQU8sRUFBRUgsT0FBTzs7Ozs7O2dHQUN4Q3lCLENBQUk7d0JBQUNDLEdBQUcsRUFBQyxDQUFNO3dCQUFDQyxJQUFJLEVBQUMsQ0FBYzs7Ozs7Ozs7Ozs7O3dGQUVyQ0MsQ0FBRztnQkFDRkMsU0FBUyxFQUNQbEIsUUFBUSxHQUNKLENBQWlELG1EQUNqRCxDQUE2Qzs7Z0dBR2xEdEIsMERBQU07Ozs7O2dHQUNOdUMsQ0FBRzt3QkFDRkMsU0FBUyxFQUNQbEIsUUFBUSxHQUFHLENBQXVCLHlCQUFHLENBQXNCO3dCQUU3RG1CLEtBQUssRUFBRSxDQUFDOzRCQUFDQyxLQUFLLEVBQUcsR0FBYyxNQUFDLENBQWJ6QixXQUFXLEVBQUMsQ0FBQzt3QkFBRSxDQUFDOzs7Ozs7Ozs7Ozs7d0ZBR3RDMEIsQ0FBTztnQkFDTkgsU0FBUyxFQUNQbEIsUUFBUSxHQUNKLENBQTZFLCtFQUM3RSxDQUF5RTs7Z0dBRzlFbkIsbUVBQWU7d0JBQ2R5QyxlQUFlLEVBQUUxQixhQUFhO3dCQUM5QkUsZUFBZSxFQUFFQSxlQUFlOzs7Ozs7Z0dBRWpDeUIsQ0FBQzt3QkFBQ1YsSUFBSSxFQUFDLENBQUs7Ozs7OztnR0FDWlEsQ0FBTzt3QkFBQ0gsU0FBUyxFQUFDLENBQXlEOzt3R0FDekVELENBQUc7O2dIQUNETyxDQUFFO3dDQUNETixTQUFTLEVBQ1BsQixRQUFRLEdBQ0osQ0FBb0Msc0NBQ3BDLENBQWdDO2tEQUdyQ2QsS0FBSzs7Ozs7O2dIQUVQK0IsQ0FBRzt3Q0FDRkMsU0FBUyxFQUNQbEIsUUFBUSxHQUNKLENBQXNELHdEQUN0RCxDQUFzRDs7NENBRTdELENBQ1c7NENBQUNiLElBQUk7Ozs7Ozs7Z0hBRWhCc0MsQ0FBRzt3Q0FBQ1AsU0FBUyxFQUFDLENBQVk7d0NBQUNRLEdBQUcsRUFBRXRDLFdBQVc7Ozs7Ozs7Ozs7Ozt3R0FFN0M2QixDQUFHO2dDQUNGVSxFQUFFLEVBQUUzQixRQUFRLEdBQUcsQ0FBZSxpQkFBRyxDQUFnQjtnQ0FDakRrQixTQUFTLEVBQUMsQ0FBc0M7c0hBRS9DRCxDQUFHO29DQUNGQyxTQUFTLEVBQUMsQ0FBUTtvQ0FDbEJVLHVCQUF1QixFQUFFLENBQUM7d0NBQUNDLE1BQU0sRUFBRXJELDhDQUFNLENBQUNnQixPQUFPO29DQUFFLENBQUM7Ozs7Ozs7Ozs7O3dHQUd2RCtCLENBQUM7Z0NBQUNWLElBQUksRUFBQyxDQUFROzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUsxQixDQUFDO0dBdEd1QjdCLFFBQVE7O1FBUU9QLDZEQUFTOzs7S0FSeEJPLFFBQVEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYmxvZy9bc2x1Z10uanM/ZmE3MCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUNvbnRleHQsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XHJcbmltcG9ydCBmcyBmcm9tIFwiZnNcIjtcclxuaW1wb3J0IHBhdGggZnJvbSBcInBhdGhcIjtcclxuaW1wb3J0IG1hdHRlciBmcm9tIFwiZ3JheS1tYXR0ZXJcIjtcclxuaW1wb3J0IHsgbWFya2VkIH0gZnJvbSBcIm1hcmtlZFwiO1xyXG5pbXBvcnQgeyB1c2VHbG9iYWwgfSBmcm9tIFwiLi4vLi4vY29udGV4dC9nbG9iYWxDb250ZXh0XCI7XHJcbmltcG9ydCBIZWFkZXIgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvaGVhZGVyXCI7XHJcbmltcG9ydCBoYW5kbGVTY3JvbGwsIHsgY2hlY2tTY3JvbGxlZCB9IGZyb20gXCIuLi8uLi9mdW5jdGlvbnMvU2Nyb2xsRnVuY3Rpb25zXCI7XHJcbmltcG9ydCBUYWJsZU9mQ29udGVudHMgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvdGFibGVvZkNvbnRlbnRzXCI7XHJcbmNvbnN0IGhsanMgPSByZXF1aXJlKFwiaGlnaGxpZ2h0LmpzXCIpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUG9zdFBhZ2Uoe1xyXG4gIGZyb250bWF0dGVyOiB7IHRpdGxlLCBkYXRlLCBjb3Zlcl9pbWFnZSwgZXhjZXJwdCwgc2VjdGlvbnMgfSxcclxuICBzbHVnLFxyXG4gIGNvbnRlbnQsXHJcbn0pIHtcclxuICBjb25zdCBbc2Nyb2xsQ291bnQsIHNldFNjcm9sbENvdW50XSA9IHVzZVN0YXRlKDApO1xyXG4gIGNvbnN0IFt0YWJsZUNvbnRlbnRzLCBzZXRUYWJsZUNvbnRlbnRzXSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbc2Nyb2xsZWRBcnRpY2xlLCBzZXRTY3JvbGxlZEFydGljbGVdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IHsgZGFya01vZGUsIHRvZ2dsZURhcmtNb2RlIH0gPSB1c2VHbG9iYWwoKTtcclxuXHJcbiAgbWFya2VkLnNldE9wdGlvbnMoe1xyXG4gICAgbGFuZ1ByZWZpeDogXCJobGpzIGxhbmd1YWdlLVwiLFxyXG4gICAgaGlnaGxpZ2h0OiBmdW5jdGlvbiAoY29kZSkge1xyXG4gICAgICByZXR1cm4gaGxqcy5oaWdobGlnaHRBdXRvKGNvZGUsIFtcImh0bWxcIiwgXCJqYXZhc2NyaXB0XCJdKS52YWx1ZTtcclxuICAgIH0sXHJcbiAgfSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBzZXRUYWJsZUNvbnRlbnRzKHNlY3Rpb25zLnNwbGl0KFwiL1wiKSk7XHJcbiAgfSwgW10pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgdXBkYXRlU2Nyb2xsKTtcclxuICAgIHNldFNjcm9sbGVkQXJ0aWNsZShjaGVja1Njcm9sbGVkKDg1KSk7XHJcbiAgICByZXR1cm4gKCkgPT4gd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgdXBkYXRlU2Nyb2xsKTtcclxuICB9KTtcclxuXHJcbiAgZnVuY3Rpb24gdXBkYXRlU2Nyb2xsKCkge1xyXG4gICAgLy8gU2Nyb2xsIGZ1bmN0aW9uIGZyb20gaGFuZGxlU2Nyb2xsLmpzXHJcbiAgICBzZXRTY3JvbGxDb3VudChoYW5kbGVTY3JvbGwoKSk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPEhlYWQ+XHJcbiAgICAgICAgPHRpdGxlPnt0aXRsZX08L3RpdGxlPlxyXG4gICAgICAgIDxtZXRhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGNvbnRlbnQ9e2V4Y2VycHR9IC8+XHJcbiAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIvZmF2aWNvbi5pY29cIiAvPlxyXG4gICAgICA8L0hlYWQ+XHJcbiAgICAgIDxkaXZcclxuICAgICAgICBjbGFzc05hbWU9e1xyXG4gICAgICAgICAgZGFya01vZGVcclxuICAgICAgICAgICAgPyBcInN0aWNreSB0b3AtMCBsZWZ0LTAgYmctc2xhdGUtNjAwIHRyYW5zaXRpb24tYWxsXCJcclxuICAgICAgICAgICAgOiBcInN0aWNreSB0b3AtMCBsZWZ0LTAgYmctd2hpdGUgdHJhbnNpdGlvbi1hbGxcIlxyXG4gICAgICAgIH1cclxuICAgICAgPlxyXG4gICAgICAgIDxIZWFkZXIgLz5cclxuICAgICAgICA8ZGl2XHJcbiAgICAgICAgICBjbGFzc05hbWU9e1xyXG4gICAgICAgICAgICBkYXJrTW9kZSA/IFwiYmctc2xhdGUtNDAwIGgtMSB6LTAgXCIgOiBcImJnLXNsYXRlLTYwMCBoLTEgei0wXCJcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiBgJHtzY3JvbGxDb3VudH0lYCB9fVxyXG4gICAgICAgID48L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxzZWN0aW9uXHJcbiAgICAgICAgY2xhc3NOYW1lPXtcclxuICAgICAgICAgIGRhcmtNb2RlXHJcbiAgICAgICAgICAgID8gXCJmbGV4IGZsZXgtcm93IGp1c3RpZnktY2VudGVyIG1pbi1oLXNjcmVlbiBiZy1zbGF0ZS02MDAgcGItMjAgdHJhbnNpdGlvbi1hbGxcIlxyXG4gICAgICAgICAgICA6IFwiZmxleCBmbGV4LXJvdyBqdXN0aWZ5LWNlbnRlciBtaW4taC1zY3JlZW4gYmctd2hpdGUgcGItMjAgdHJhbnNpdGlvbi1hbGxcIlxyXG4gICAgICAgIH1cclxuICAgICAgPlxyXG4gICAgICAgIDxUYWJsZU9mQ29udGVudHNcclxuICAgICAgICAgIGFydGljbGVTZWN0aW9ucz17dGFibGVDb250ZW50c31cclxuICAgICAgICAgIHNjcm9sbGVkQXJ0aWNsZT17c2Nyb2xsZWRBcnRpY2xlfVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPGEgbmFtZT1cInRvcFwiPjwvYT5cclxuICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtcm93IGZsZXgtd3JhcCBqdXN0aWZ5LWNlbnRlciB3LTExLzEyIGxnOnctNzQ4XCI+XHJcbiAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8aDFcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9e1xyXG4gICAgICAgICAgICAgICAgZGFya01vZGVcclxuICAgICAgICAgICAgICAgICAgPyBcInRleHQtNXhsIG10LTEwIG1iLTUgdGV4dC1zbGF0ZS0xMDBcIlxyXG4gICAgICAgICAgICAgICAgICA6IFwidGV4dC01eGwgbXQtMTAgbWItNSB0ZXh0LWJsYWNrXCJcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICB7dGl0bGV9XHJcbiAgICAgICAgICAgIDwvaDE+XHJcbiAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9e1xyXG4gICAgICAgICAgICAgICAgZGFya01vZGVcclxuICAgICAgICAgICAgICAgICAgPyBcImJnLXNsYXRlLTcwMCB0ZXh0LXNsYXRlLTMwMCBtYi01IHBsLTUgdHJhbnNpdGlvbi1hbGxcIlxyXG4gICAgICAgICAgICAgICAgICA6IFwiYmctc2xhdGUtMzAwIHRleHQtc2xhdGUtODAwIG1iLTUgcGwtNSB0cmFuc2l0aW9uLWFsbFwiXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgUG9zdGVkIG9uIHtkYXRlfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJyb3VuZGVkLW1kXCIgc3JjPXtjb3Zlcl9pbWFnZX0+PC9pbWc+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgaWQ9e2RhcmtNb2RlID8gXCJtYXJrZG93bi1kYXJrXCIgOiBcIm1hcmtkb3duLWxpZ2h0XCJ9XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImZsZXggZmxleC1yb3cgIHRyYW5zaXRpb24tYWxsIHctZnVsbFwiXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGxcIlxyXG4gICAgICAgICAgICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7IF9faHRtbDogbWFya2VkKGNvbnRlbnQpIH19XHJcbiAgICAgICAgICAgID48L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGEgbmFtZT1cImJvdHRvbVwiPjwvYT5cclxuICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgIDwvc2VjdGlvbj5cclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQYXRocygpIHtcclxuICBjb25zdCBmaWxlcyA9IGZzLnJlYWRkaXJTeW5jKHBhdGguam9pbihcInBvc3RzXCIpKTtcclxuXHJcbiAgY29uc3QgcGF0aHMgPSBmaWxlcy5tYXAoKGZpbGVuYW1lKSA9PiAoe1xyXG4gICAgcGFyYW1zOiB7XHJcbiAgICAgIHNsdWc6IGZpbGVuYW1lLnJlcGxhY2UoXCIubWRcIiwgXCJcIiksXHJcbiAgICB9LFxyXG4gIH0pKTtcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIHBhdGhzLFxyXG4gICAgZmFsbGJhY2s6IGZhbHNlLFxyXG4gIH07XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcyh7IHBhcmFtczogeyBzbHVnIH0gfSkge1xyXG4gIGNvbnN0IG1hcmtkb3duV2l0aE1ldGEgPSBmcy5yZWFkRmlsZVN5bmMoXHJcbiAgICBwYXRoLmpvaW4oXCJwb3N0c1wiLCBzbHVnICsgXCIubWRcIiksXHJcbiAgICBcInV0Zi04XCJcclxuICApO1xyXG5cclxuICBjb25zdCB7IGRhdGE6IGZyb250bWF0dGVyLCBjb250ZW50LCBleGNlcnB0IH0gPSBtYXR0ZXIobWFya2Rvd25XaXRoTWV0YSk7XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBwcm9wczoge1xyXG4gICAgICBmcm9udG1hdHRlcixcclxuICAgICAgY29udGVudCxcclxuICAgICAgc2x1ZyxcclxuICAgICAgZXhjZXJwdCxcclxuICAgIH0sXHJcbiAgfTtcclxufVxyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUNvbnRleHQiLCJ1c2VFZmZlY3QiLCJIZWFkIiwibWFya2VkIiwidXNlR2xvYmFsIiwiSGVhZGVyIiwiaGFuZGxlU2Nyb2xsIiwiY2hlY2tTY3JvbGxlZCIsIlRhYmxlT2ZDb250ZW50cyIsImhsanMiLCJyZXF1aXJlIiwiUG9zdFBhZ2UiLCJmcm9udG1hdHRlciIsInRpdGxlIiwiZGF0ZSIsImNvdmVyX2ltYWdlIiwiZXhjZXJwdCIsInNlY3Rpb25zIiwic2x1ZyIsImNvbnRlbnQiLCJ1cGRhdGVTY3JvbGwiLCJzZXRTY3JvbGxDb3VudCIsInNjcm9sbENvdW50IiwidGFibGVDb250ZW50cyIsInNldFRhYmxlQ29udGVudHMiLCJzY3JvbGxlZEFydGljbGUiLCJzZXRTY3JvbGxlZEFydGljbGUiLCJkYXJrTW9kZSIsInRvZ2dsZURhcmtNb2RlIiwic2V0T3B0aW9ucyIsImxhbmdQcmVmaXgiLCJoaWdobGlnaHQiLCJjb2RlIiwiaGlnaGxpZ2h0QXV0byIsInZhbHVlIiwic3BsaXQiLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsIm1ldGEiLCJuYW1lIiwibGluayIsInJlbCIsImhyZWYiLCJkaXYiLCJjbGFzc05hbWUiLCJzdHlsZSIsIndpZHRoIiwic2VjdGlvbiIsImFydGljbGVTZWN0aW9ucyIsImEiLCJoMSIsImltZyIsInNyYyIsImlkIiwiZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwiLCJfX2h0bWwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/blog/[slug].js\n");

/***/ })

});