"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/blog/[slug]";
exports.ids = ["pages/blog/[slug]"];
exports.modules = {

/***/ "./pages/blog/[slug].js":
/*!******************************!*\
  !*** ./pages/blog/[slug].js ***!
  \******************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ PostPage),\n/* harmony export */   \"getStaticPaths\": () => (/* binding */ getStaticPaths),\n/* harmony export */   \"getStaticProps\": () => (/* binding */ getStaticProps)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var gray_matter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! gray-matter */ \"gray-matter\");\n/* harmony import */ var gray_matter__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(gray_matter__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var marked__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! marked */ \"marked\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([marked__WEBPACK_IMPORTED_MODULE_6__]);\nmarked__WEBPACK_IMPORTED_MODULE_6__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\n\n\n\nconst hljs = __webpack_require__(/*! highlight.js */ \"highlight.js\");\nfunction PostPage({ frontmatter: { title , date , cover_image , excerpt  } , slug , content ,  }) {\n    marked__WEBPACK_IMPORTED_MODULE_6__.marked.setOptions({\n        langPrefix: \"hljs language-\",\n        highlight: function(code) {\n            return hljs.highlightAuto(code, [\n                \"html\",\n                \"javascript\"\n            ]).value;\n        }\n    });\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: title\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\DCM\\\\Desktop\\\\Coding\\\\MyProjects\\\\Next\\\\Blog-Personal FULL\\\\Personal-Blog\\\\pages\\\\blog\\\\[slug].js\",\n                        lineNumber: 24,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: excerpt\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\DCM\\\\Desktop\\\\Coding\\\\MyProjects\\\\Next\\\\Blog-Personal FULL\\\\Personal-Blog\\\\pages\\\\blog\\\\[slug].js\",\n                        lineNumber: 25,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/favicon.ico\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\DCM\\\\Desktop\\\\Coding\\\\MyProjects\\\\Next\\\\Blog-Personal FULL\\\\Personal-Blog\\\\pages\\\\blog\\\\[slug].js\",\n                        lineNumber: 26,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\DCM\\\\Desktop\\\\Coding\\\\MyProjects\\\\Next\\\\Blog-Personal FULL\\\\Personal-Blog\\\\pages\\\\blog\\\\[slug].js\",\n                lineNumber: 23,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                className: \"flex flex-col items-center min-h-screen bg-slate-600 pb-20\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                    className: \"flex flex-row flex-wrap justify-center w-748\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                    className: \"text-5xl mt-10 mb-5 \",\n                                    children: title\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\DCM\\\\Desktop\\\\Coding\\\\MyProjects\\\\Next\\\\Blog-Personal FULL\\\\Personal-Blog\\\\pages\\\\blog\\\\[slug].js\",\n                                    lineNumber: 31,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"bg-slate-700 text-slate-300 mb-5 pl-5\",\n                                    children: [\n                                        \"Posted on \",\n                                        date\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\DCM\\\\Desktop\\\\Coding\\\\MyProjects\\\\Next\\\\Blog-Personal FULL\\\\Personal-Blog\\\\pages\\\\blog\\\\[slug].js\",\n                                    lineNumber: 32,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                    src: cover_image\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\DCM\\\\Desktop\\\\Coding\\\\MyProjects\\\\Next\\\\Blog-Personal FULL\\\\Personal-Blog\\\\pages\\\\blog\\\\[slug].js\",\n                                    lineNumber: 35,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\DCM\\\\Desktop\\\\Coding\\\\MyProjects\\\\Next\\\\Blog-Personal FULL\\\\Personal-Blog\\\\pages\\\\blog\\\\[slug].js\",\n                            lineNumber: 30,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            id: \"markdown\",\n                            className: \"flex flex-col pl-20 pr-20\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                dangerouslySetInnerHTML: {\n                                    __html: (0,marked__WEBPACK_IMPORTED_MODULE_6__.marked)(content)\n                                }\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\DCM\\\\Desktop\\\\Coding\\\\MyProjects\\\\Next\\\\Blog-Personal FULL\\\\Personal-Blog\\\\pages\\\\blog\\\\[slug].js\",\n                                lineNumber: 38,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\DCM\\\\Desktop\\\\Coding\\\\MyProjects\\\\Next\\\\Blog-Personal FULL\\\\Personal-Blog\\\\pages\\\\blog\\\\[slug].js\",\n                            lineNumber: 37,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\DCM\\\\Desktop\\\\Coding\\\\MyProjects\\\\Next\\\\Blog-Personal FULL\\\\Personal-Blog\\\\pages\\\\blog\\\\[slug].js\",\n                    lineNumber: 29,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\DCM\\\\Desktop\\\\Coding\\\\MyProjects\\\\Next\\\\Blog-Personal FULL\\\\Personal-Blog\\\\pages\\\\blog\\\\[slug].js\",\n                lineNumber: 28,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true));\n};\nasync function getStaticPaths() {\n    const files = fs__WEBPACK_IMPORTED_MODULE_3___default().readdirSync(path__WEBPACK_IMPORTED_MODULE_4___default().join(\"posts\"));\n    const paths = files.map((filename)=>({\n            params: {\n                slug: filename.replace(\".md\", \"\")\n            }\n        })\n    );\n    return {\n        paths,\n        fallback: false\n    };\n}\nasync function getStaticProps({ params: { slug  }  }) {\n    const markdownWithMeta = fs__WEBPACK_IMPORTED_MODULE_3___default().readFileSync(path__WEBPACK_IMPORTED_MODULE_4___default().join(\"posts\", slug + \".md\"), \"utf-8\");\n    const { data: frontmatter , content , excerpt  } = gray_matter__WEBPACK_IMPORTED_MODULE_5___default()(markdownWithMeta);\n    return {\n        props: {\n            frontmatter,\n            slug,\n            excerpt,\n            content\n        }\n    };\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q1hLLElBQUk7WUFDSkQsT0FBTztZQUNQRSxPQUFPO1FBQ1QsQ0FBQztJQUNILENBQUM7QUFDSCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcGVyc29uYWwtYmxvZy8uL3BhZ2VzL2Jsb2cvW3NsdWddLmpzP2ZhNzAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XHJcbmltcG9ydCBmcyBmcm9tIFwiZnNcIjtcclxuaW1wb3J0IHBhdGggZnJvbSBcInBhdGhcIjtcclxuaW1wb3J0IG1hdHRlciBmcm9tIFwiZ3JheS1tYXR0ZXJcIjtcclxuaW1wb3J0IHsgbWFya2VkIH0gZnJvbSBcIm1hcmtlZFwiO1xyXG5jb25zdCBobGpzID0gcmVxdWlyZShcImhpZ2hsaWdodC5qc1wiKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBvc3RQYWdlKHtcclxuICBmcm9udG1hdHRlcjogeyB0aXRsZSwgZGF0ZSwgY292ZXJfaW1hZ2UsIGV4Y2VycHQgfSxcclxuICBzbHVnLFxyXG4gIGNvbnRlbnQsXHJcbn0pIHtcclxuICBtYXJrZWQuc2V0T3B0aW9ucyh7XHJcbiAgICBsYW5nUHJlZml4OiBcImhsanMgbGFuZ3VhZ2UtXCIsXHJcbiAgICBoaWdobGlnaHQ6IGZ1bmN0aW9uIChjb2RlKSB7XHJcbiAgICAgIHJldHVybiBobGpzLmhpZ2hsaWdodEF1dG8oY29kZSwgW1wiaHRtbFwiLCBcImphdmFzY3JpcHRcIl0pLnZhbHVlO1xyXG4gICAgfSxcclxuICB9KTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxIZWFkPlxyXG4gICAgICAgIDx0aXRsZT57dGl0bGV9PC90aXRsZT5cclxuICAgICAgICA8bWV0YSBuYW1lPVwiZGVzY3JpcHRpb25cIiBjb250ZW50PXtleGNlcnB0fSAvPlxyXG4gICAgICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiL2Zhdmljb24uaWNvXCIgLz5cclxuICAgICAgPC9IZWFkPlxyXG4gICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlciBtaW4taC1zY3JlZW4gYmctc2xhdGUtNjAwIHBiLTIwXCI+XHJcbiAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiZmxleCBmbGV4LXJvdyBmbGV4LXdyYXAganVzdGlmeS1jZW50ZXIgdy03NDhcIj5cclxuICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LTV4bCBtdC0xMCBtYi01IFwiPnt0aXRsZX08L2gxPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLXNsYXRlLTcwMCB0ZXh0LXNsYXRlLTMwMCBtYi01IHBsLTVcIj5cclxuICAgICAgICAgICAgICBQb3N0ZWQgb24ge2RhdGV9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8aW1nIHNyYz17Y292ZXJfaW1hZ2V9PjwvaW1nPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGlkPVwibWFya2Rvd25cIiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIHBsLTIwIHByLTIwXCI+XHJcbiAgICAgICAgICAgIDxkaXYgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3sgX19odG1sOiBtYXJrZWQoY29udGVudCkgfX0+PC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgIDwvc2VjdGlvbj5cclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQYXRocygpIHtcclxuICBjb25zdCBmaWxlcyA9IGZzLnJlYWRkaXJTeW5jKHBhdGguam9pbihcInBvc3RzXCIpKTtcclxuXHJcbiAgY29uc3QgcGF0aHMgPSBmaWxlcy5tYXAoKGZpbGVuYW1lKSA9PiAoe1xyXG4gICAgcGFyYW1zOiB7XHJcbiAgICAgIHNsdWc6IGZpbGVuYW1lLnJlcGxhY2UoXCIubWRcIiwgXCJcIiksXHJcbiAgICB9LFxyXG4gIH0pKTtcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIHBhdGhzLFxyXG4gICAgZmFsbGJhY2s6IGZhbHNlLFxyXG4gIH07XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcyh7IHBhcmFtczogeyBzbHVnIH0gfSkge1xyXG4gIGNvbnN0IG1hcmtkb3duV2l0aE1ldGEgPSBmcy5yZWFkRmlsZVN5bmMoXHJcbiAgICBwYXRoLmpvaW4oXCJwb3N0c1wiLCBzbHVnICsgXCIubWRcIiksXHJcbiAgICBcInV0Zi04XCJcclxuICApO1xyXG5cclxuICBjb25zdCB7IGRhdGE6IGZyb250bWF0dGVyLCBjb250ZW50LCBleGNlcnB0IH0gPSBtYXR0ZXIobWFya2Rvd25XaXRoTWV0YSk7XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBwcm9wczoge1xyXG4gICAgICBmcm9udG1hdHRlcixcclxuICAgICAgc2x1ZyxcclxuICAgICAgZXhjZXJwdCxcclxuICAgICAgY29udGVudCxcclxuICAgIH0sXHJcbiAgfTtcclxufVxyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJIZWFkIiwiZnMiLCJwYXRoIiwibWF0dGVyIiwibWFya2VkIiwiaGxqcyIsInJlcXVpcmUiLCJQb3N0UGFnZSIsImZyb250bWF0dGVyIiwidGl0bGUiLCJkYXRlIiwiY292ZXJfaW1hZ2UiLCJleGNlcnB0Iiwic2x1ZyIsImNvbnRlbnQiLCJzZXRPcHRpb25zIiwibGFuZ1ByZWZpeCIsImhpZ2hsaWdodCIsImNvZGUiLCJoaWdobGlnaHRBdXRvIiwidmFsdWUiLCJtZXRhIiwibmFtZSIsImxpbmsiLCJyZWwiLCJocmVmIiwic2VjdGlvbiIsImNsYXNzTmFtZSIsImRpdiIsImgxIiwiaW1nIiwic3JjIiwiaWQiLCJkYW5nZXJvdXNseVNldElubmVySFRNTCIsIl9faHRtbCIsImdldFN0YXRpY1BhdGhzIiwiZmlsZXMiLCJyZWFkZGlyU3luYyIsImpvaW4iLCJwYXRocyIsIm1hcCIsImZpbGVuYW1lIiwicGFyYW1zIiwicmVwbGFjZSIsImZhbGxiYWNrIiwiZ2V0U3RhdGljUHJvcHMiLCJtYXJrZG93bldpdGhNZXRhIiwicmVhZEZpbGVTeW5jIiwiZGF0YSIsInByb3BzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/blog/[slug].js\n");

/***/ }),

/***/ "gray-matter":
/*!******************************!*\
  !*** external "gray-matter" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("gray-matter");

/***/ }),

/***/ "highlight.js":
/*!*******************************!*\
  !*** external "highlight.js" ***!
  \*******************************/
/***/ ((module) => {

module.exports = require("highlight.js");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "marked":
/*!*************************!*\
  !*** external "marked" ***!
  \*************************/
/***/ ((module) => {

module.exports = import("marked");;

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("path");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/blog/[slug].js"));
module.exports = __webpack_exports__;

})();