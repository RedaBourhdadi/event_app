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
exports.id = "app/api/auth/[...nextauth]/route";
exports.ids = ["app/api/auth/[...nextauth]/route"];
exports.modules = {

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ "../../client/components/action-async-storage.external":
/*!*******************************************************************************!*\
  !*** external "next/dist/client/components/action-async-storage.external.js" ***!
  \*******************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/action-async-storage.external.js");

/***/ }),

/***/ "../../client/components/request-async-storage.external":
/*!********************************************************************************!*\
  !*** external "next/dist/client/components/request-async-storage.external.js" ***!
  \********************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/request-async-storage.external.js");

/***/ }),

/***/ "../../client/components/static-generation-async-storage.external":
/*!******************************************************************************************!*\
  !*** external "next/dist/client/components/static-generation-async-storage.external.js" ***!
  \******************************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/static-generation-async-storage.external.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-page.runtime.dev.js":
/*!*************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-page.runtime.dev.js" ***!
  \*************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-page.runtime.dev.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "assert":
/*!*************************!*\
  !*** external "assert" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("assert");

/***/ }),

/***/ "buffer":
/*!*************************!*\
  !*** external "buffer" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("buffer");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("crypto");

/***/ }),

/***/ "domain":
/*!*************************!*\
  !*** external "domain" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("domain");

/***/ }),

/***/ "events":
/*!*************************!*\
  !*** external "events" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("events");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("http");

/***/ }),

/***/ "https":
/*!************************!*\
  !*** external "https" ***!
  \************************/
/***/ ((module) => {

module.exports = require("https");

/***/ }),

/***/ "net":
/*!**********************!*\
  !*** external "net" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("net");

/***/ }),

/***/ "os":
/*!*********************!*\
  !*** external "os" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("os");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("path");

/***/ }),

/***/ "punycode":
/*!***************************!*\
  !*** external "punycode" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("punycode");

/***/ }),

/***/ "querystring":
/*!******************************!*\
  !*** external "querystring" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("querystring");

/***/ }),

/***/ "stream":
/*!*************************!*\
  !*** external "stream" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("stream");

/***/ }),

/***/ "string_decoder":
/*!*********************************!*\
  !*** external "string_decoder" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("string_decoder");

/***/ }),

/***/ "timers":
/*!*************************!*\
  !*** external "timers" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("timers");

/***/ }),

/***/ "tls":
/*!**********************!*\
  !*** external "tls" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("tls");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("url");

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("util");

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("zlib");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&page=%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute.js&appDir=C%3A%5CUsers%5Credar%5COneDrive%5CBureau%5Creact%20project%5Cproject_next_14_ai_prompt_sharing-main%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Credar%5COneDrive%5CBureau%5Creact%20project%5Cproject_next_14_ai_prompt_sharing-main&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&page=%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute.js&appDir=C%3A%5CUsers%5Credar%5COneDrive%5CBureau%5Creact%20project%5Cproject_next_14_ai_prompt_sharing-main%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Credar%5COneDrive%5CBureau%5Creact%20project%5Cproject_next_14_ai_prompt_sharing-main&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var C_Users_redar_OneDrive_Bureau_react_project_project_next_14_ai_prompt_sharing_main_app_api_auth_nextauth_route_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/auth/[...nextauth]/route.js */ \"(rsc)/./app/api/auth/[...nextauth]/route.js\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/auth/[...nextauth]/route\",\n        pathname: \"/api/auth/[...nextauth]\",\n        filename: \"route\",\n        bundlePath: \"app/api/auth/[...nextauth]/route\"\n    },\n    resolvedPagePath: \"C:\\\\Users\\\\redar\\\\OneDrive\\\\Bureau\\\\react project\\\\project_next_14_ai_prompt_sharing-main\\\\app\\\\api\\\\auth\\\\[...nextauth]\\\\route.js\",\n    nextConfigOutput,\n    userland: C_Users_redar_OneDrive_Bureau_react_project_project_next_14_ai_prompt_sharing_main_app_api_auth_nextauth_route_js__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks } = routeModule;\nconst originalPathname = \"/api/auth/[...nextauth]/route\";\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        serverHooks,\n        staticGenerationAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhcGklMkZhdXRoJTJGJTVCLi4ubmV4dGF1dGglNUQlMkZyb3V0ZSZwYWdlPSUyRmFwaSUyRmF1dGglMkYlNUIuLi5uZXh0YXV0aCU1RCUyRnJvdXRlJmFwcFBhdGhzPSZwYWdlUGF0aD1wcml2YXRlLW5leHQtYXBwLWRpciUyRmFwaSUyRmF1dGglMkYlNUIuLi5uZXh0YXV0aCU1RCUyRnJvdXRlLmpzJmFwcERpcj1DJTNBJTVDVXNlcnMlNUNyZWRhciU1Q09uZURyaXZlJTVDQnVyZWF1JTVDcmVhY3QlMjBwcm9qZWN0JTVDcHJvamVjdF9uZXh0XzE0X2FpX3Byb21wdF9zaGFyaW5nLW1haW4lNUNhcHAmcGFnZUV4dGVuc2lvbnM9dHN4JnBhZ2VFeHRlbnNpb25zPXRzJnBhZ2VFeHRlbnNpb25zPWpzeCZwYWdlRXh0ZW5zaW9ucz1qcyZyb290RGlyPUMlM0ElNUNVc2VycyU1Q3JlZGFyJTVDT25lRHJpdmUlNUNCdXJlYXUlNUNyZWFjdCUyMHByb2plY3QlNUNwcm9qZWN0X25leHRfMTRfYWlfcHJvbXB0X3NoYXJpbmctbWFpbiZpc0Rldj10cnVlJnRzY29uZmlnUGF0aD10c2NvbmZpZy5qc29uJmJhc2VQYXRoPSZhc3NldFByZWZpeD0mbmV4dENvbmZpZ091dHB1dD0mcHJlZmVycmVkUmVnaW9uPSZtaWRkbGV3YXJlQ29uZmlnPWUzMCUzRCEiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQXNHO0FBQ3ZDO0FBQ2M7QUFDa0Y7QUFDL0o7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLGdIQUFtQjtBQUMzQztBQUNBLGNBQWMseUVBQVM7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLFlBQVk7QUFDWixDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsUUFBUSxpRUFBaUU7QUFDekU7QUFDQTtBQUNBLFdBQVcsNEVBQVc7QUFDdEI7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUN1SDs7QUFFdkgiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wcm9tcHRvcGlhLz82NmRlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFwcFJvdXRlUm91dGVNb2R1bGUgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9mdXR1cmUvcm91dGUtbW9kdWxlcy9hcHAtcm91dGUvbW9kdWxlLmNvbXBpbGVkXCI7XG5pbXBvcnQgeyBSb3V0ZUtpbmQgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9mdXR1cmUvcm91dGUta2luZFwiO1xuaW1wb3J0IHsgcGF0Y2hGZXRjaCBhcyBfcGF0Y2hGZXRjaCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2xpYi9wYXRjaC1mZXRjaFwiO1xuaW1wb3J0ICogYXMgdXNlcmxhbmQgZnJvbSBcIkM6XFxcXFVzZXJzXFxcXHJlZGFyXFxcXE9uZURyaXZlXFxcXEJ1cmVhdVxcXFxyZWFjdCBwcm9qZWN0XFxcXHByb2plY3RfbmV4dF8xNF9haV9wcm9tcHRfc2hhcmluZy1tYWluXFxcXGFwcFxcXFxhcGlcXFxcYXV0aFxcXFxbLi4ubmV4dGF1dGhdXFxcXHJvdXRlLmpzXCI7XG4vLyBXZSBpbmplY3QgdGhlIG5leHRDb25maWdPdXRwdXQgaGVyZSBzbyB0aGF0IHdlIGNhbiB1c2UgdGhlbSBpbiB0aGUgcm91dGVcbi8vIG1vZHVsZS5cbmNvbnN0IG5leHRDb25maWdPdXRwdXQgPSBcIlwiXG5jb25zdCByb3V0ZU1vZHVsZSA9IG5ldyBBcHBSb3V0ZVJvdXRlTW9kdWxlKHtcbiAgICBkZWZpbml0aW9uOiB7XG4gICAgICAgIGtpbmQ6IFJvdXRlS2luZC5BUFBfUk9VVEUsXG4gICAgICAgIHBhZ2U6IFwiL2FwaS9hdXRoL1suLi5uZXh0YXV0aF0vcm91dGVcIixcbiAgICAgICAgcGF0aG5hbWU6IFwiL2FwaS9hdXRoL1suLi5uZXh0YXV0aF1cIixcbiAgICAgICAgZmlsZW5hbWU6IFwicm91dGVcIixcbiAgICAgICAgYnVuZGxlUGF0aDogXCJhcHAvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS9yb3V0ZVwiXG4gICAgfSxcbiAgICByZXNvbHZlZFBhZ2VQYXRoOiBcIkM6XFxcXFVzZXJzXFxcXHJlZGFyXFxcXE9uZURyaXZlXFxcXEJ1cmVhdVxcXFxyZWFjdCBwcm9qZWN0XFxcXHByb2plY3RfbmV4dF8xNF9haV9wcm9tcHRfc2hhcmluZy1tYWluXFxcXGFwcFxcXFxhcGlcXFxcYXV0aFxcXFxbLi4ubmV4dGF1dGhdXFxcXHJvdXRlLmpzXCIsXG4gICAgbmV4dENvbmZpZ091dHB1dCxcbiAgICB1c2VybGFuZFxufSk7XG4vLyBQdWxsIG91dCB0aGUgZXhwb3J0cyB0aGF0IHdlIG5lZWQgdG8gZXhwb3NlIGZyb20gdGhlIG1vZHVsZS4gVGhpcyBzaG91bGRcbi8vIGJlIGVsaW1pbmF0ZWQgd2hlbiB3ZSd2ZSBtb3ZlZCB0aGUgb3RoZXIgcm91dGVzIHRvIHRoZSBuZXcgZm9ybWF0LiBUaGVzZVxuLy8gYXJlIHVzZWQgdG8gaG9vayBpbnRvIHRoZSByb3V0ZS5cbmNvbnN0IHsgcmVxdWVzdEFzeW5jU3RvcmFnZSwgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MgfSA9IHJvdXRlTW9kdWxlO1xuY29uc3Qgb3JpZ2luYWxQYXRobmFtZSA9IFwiL2FwaS9hdXRoL1suLi5uZXh0YXV0aF0vcm91dGVcIjtcbmZ1bmN0aW9uIHBhdGNoRmV0Y2goKSB7XG4gICAgcmV0dXJuIF9wYXRjaEZldGNoKHtcbiAgICAgICAgc2VydmVySG9va3MsXG4gICAgICAgIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2VcbiAgICB9KTtcbn1cbmV4cG9ydCB7IHJvdXRlTW9kdWxlLCByZXF1ZXN0QXN5bmNTdG9yYWdlLCBzdGF0aWNHZW5lcmF0aW9uQXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcywgb3JpZ2luYWxQYXRobmFtZSwgcGF0Y2hGZXRjaCwgIH07XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWFwcC1yb3V0ZS5qcy5tYXAiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&page=%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute.js&appDir=C%3A%5CUsers%5Credar%5COneDrive%5CBureau%5Creact%20project%5Cproject_next_14_ai_prompt_sharing-main%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Credar%5COneDrive%5CBureau%5Creact%20project%5Cproject_next_14_ai_prompt_sharing-main&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./app/api/auth/[...nextauth]/route.js":
/*!*********************************************!*\
  !*** ./app/api/auth/[...nextauth]/route.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ handler),\n/* harmony export */   POST: () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth */ \"(rsc)/./node_modules/next-auth/index.js\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth_providers_google__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/providers/google */ \"(rsc)/./node_modules/next-auth/providers/google.js\");\n/* harmony import */ var _models_user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/models/user */ \"(rsc)/./models/user.js\");\n/* harmony import */ var _utils_database__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/utils/database */ \"(rsc)/./utils/database.js\");\n/* harmony import */ var jsforce__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jsforce */ \"(rsc)/./node_modules/jsforce/index.js\");\n/* harmony import */ var jsforce__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(jsforce__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var dotenv__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! dotenv */ \"(rsc)/./node_modules/dotenv/lib/main.js\");\n/* harmony import */ var dotenv__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(dotenv__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\n\n\n\nconst handler = next_auth__WEBPACK_IMPORTED_MODULE_0___default()({\n    providers: [\n        (0,next_auth_providers_google__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({\n            clientId: process.env.GOOGLE_ID,\n            clientSecret: process.env.GOOGLE_CLIENT_SECRET\n        })\n    ],\n    callbacks: {\n        async session ({ session }) {\n            // store the user id from MongoDB to session\n            const sessionUser = await _models_user__WEBPACK_IMPORTED_MODULE_2__[\"default\"].findOne({\n                email: session.user.email\n            });\n            session.user.id = sessionUser._id.toString();\n            return session;\n        },\n        async signIn ({ account, profile, user, credentials }) {\n            try {\n                await (0,_utils_database__WEBPACK_IMPORTED_MODULE_3__.connectToDB)();\n                // check if user already exists\n                const userExists = await _models_user__WEBPACK_IMPORTED_MODULE_2__[\"default\"].findOne({\n                    email: profile.email\n                });\n                // if not, create a new document and save user in MongoDB\n                if (!userExists) {\n                    // const result = await conn.query(\n                    //   \"SELECT Name , Description__c , Event_Date__c FROM Custom__c\"\n                    // );\n                    // console.log(result);\n                    const resultt = await _models_user__WEBPACK_IMPORTED_MODULE_2__[\"default\"].create({\n                        email: profile.email,\n                        username: profile.name.replace(\" \", \"\").toLowerCase(),\n                        image: profile.picture\n                    });\n                    const conn = new jsforce__WEBPACK_IMPORTED_MODULE_4__.Connection({\n                        loginUrl: process.env.SALESFORCE_LOGIN_URL\n                    });\n                    await conn.login(process.env.SALESFORCE_USERNAME, process.env.SALESFORCE_PASSWORD + process.env.SALESFORCE_TOKEN);\n                    const result = await conn.sobject(\"Users__c\").create({\n                        email__c: profile.email,\n                        // Name: profile.name.replace(\" \", \"\").toLowerCase(),\n                        Name: profile.name.toLowerCase(),\n                        image__c: profile.picture,\n                        mongodb_id__c: resultt._id\n                    });\n                }\n                return true;\n            } catch (error) {\n                console.log(\"Error checking if user exists: \", error.message);\n                return false;\n            }\n        }\n    }\n});\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS9yb3V0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFpQztBQUN1QjtBQUV2QjtBQUNjO0FBQ1Y7QUFDTDtBQUVoQyxNQUFNTSxVQUFVTixnREFBUUEsQ0FBQztJQUN2Qk8sV0FBVztRQUNUTixzRUFBY0EsQ0FBQztZQUNiTyxVQUFVQyxRQUFRQyxHQUFHLENBQUNDLFNBQVM7WUFDL0JDLGNBQWNILFFBQVFDLEdBQUcsQ0FBQ0csb0JBQW9CO1FBQ2hEO0tBQ0Q7SUFDREMsV0FBVztRQUNULE1BQU1DLFNBQVEsRUFBRUEsT0FBTyxFQUFFO1lBQ3ZCLDRDQUE0QztZQUM1QyxNQUFNQyxjQUFjLE1BQU1kLG9EQUFJQSxDQUFDZSxPQUFPLENBQUM7Z0JBQUVDLE9BQU9ILFFBQVFJLElBQUksQ0FBQ0QsS0FBSztZQUFDO1lBQ25FSCxRQUFRSSxJQUFJLENBQUNDLEVBQUUsR0FBR0osWUFBWUssR0FBRyxDQUFDQyxRQUFRO1lBRTFDLE9BQU9QO1FBQ1Q7UUFDQSxNQUFNUSxRQUFPLEVBQUVDLE9BQU8sRUFBRUMsT0FBTyxFQUFFTixJQUFJLEVBQUVPLFdBQVcsRUFBRTtZQUNsRCxJQUFJO2dCQUNGLE1BQU12Qiw0REFBV0E7Z0JBRWpCLCtCQUErQjtnQkFDL0IsTUFBTXdCLGFBQWEsTUFBTXpCLG9EQUFJQSxDQUFDZSxPQUFPLENBQUM7b0JBQUVDLE9BQU9PLFFBQVFQLEtBQUs7Z0JBQUM7Z0JBRTdELHlEQUF5RDtnQkFDekQsSUFBSSxDQUFDUyxZQUFZO29CQUNmLG1DQUFtQztvQkFDbkMsa0VBQWtFO29CQUNsRSxLQUFLO29CQUVMLHVCQUF1QjtvQkFFdkIsTUFBTUMsVUFBVSxNQUFNMUIsb0RBQUlBLENBQUMyQixNQUFNLENBQUM7d0JBQ2hDWCxPQUFPTyxRQUFRUCxLQUFLO3dCQUNwQlksVUFBVUwsUUFBUU0sSUFBSSxDQUFDQyxPQUFPLENBQUMsS0FBSyxJQUFJQyxXQUFXO3dCQUNuREMsT0FBT1QsUUFBUVUsT0FBTztvQkFDeEI7b0JBQ0EsTUFBTUMsT0FBTyxJQUFJaEMsK0NBQVVBLENBQUM7d0JBQzFCaUMsVUFBVTVCLFFBQVFDLEdBQUcsQ0FBQzRCLG9CQUFvQjtvQkFDNUM7b0JBRUEsTUFBTUYsS0FBS0csS0FBSyxDQUNkOUIsUUFBUUMsR0FBRyxDQUFDOEIsbUJBQW1CLEVBQy9CL0IsUUFBUUMsR0FBRyxDQUFDK0IsbUJBQW1CLEdBQUdoQyxRQUFRQyxHQUFHLENBQUNnQyxnQkFBZ0I7b0JBRWhFLE1BQU1DLFNBQVMsTUFBTVAsS0FBS1EsT0FBTyxDQUFDLFlBQVlmLE1BQU0sQ0FBQzt3QkFDbkRnQixVQUFVcEIsUUFBUVAsS0FBSzt3QkFDdkIscURBQXFEO3dCQUNyRDRCLE1BQU1yQixRQUFRTSxJQUFJLENBQUNFLFdBQVc7d0JBQzlCYyxVQUFVdEIsUUFBUVUsT0FBTzt3QkFDekJhLGVBQWVwQixRQUFRUCxHQUFHO29CQUM1QjtnQkFDRjtnQkFFQSxPQUFPO1lBQ1QsRUFBRSxPQUFPNEIsT0FBTztnQkFDZEMsUUFBUUMsR0FBRyxDQUFDLG1DQUFtQ0YsTUFBTUcsT0FBTztnQkFDNUQsT0FBTztZQUNUO1FBQ0Y7SUFDRjtBQUNGO0FBRTJDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcHJvbXB0b3BpYS8uL2FwcC9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdL3JvdXRlLmpzP2RhMWEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE5leHRBdXRoIGZyb20gXCJuZXh0LWF1dGhcIjtcbmltcG9ydCBHb29nbGVQcm92aWRlciBmcm9tIFwibmV4dC1hdXRoL3Byb3ZpZGVycy9nb29nbGVcIjtcblxuaW1wb3J0IFVzZXIgZnJvbSBcIkAvbW9kZWxzL3VzZXJcIjtcbmltcG9ydCB7IGNvbm5lY3RUb0RCIH0gZnJvbSBcIkAvdXRpbHMvZGF0YWJhc2VcIjtcbmltcG9ydCB7IENvbm5lY3Rpb24gfSBmcm9tIFwianNmb3JjZVwiO1xuaW1wb3J0IHsgY29uZmlnIH0gZnJvbSBcImRvdGVudlwiO1xuXG5jb25zdCBoYW5kbGVyID0gTmV4dEF1dGgoe1xuICBwcm92aWRlcnM6IFtcbiAgICBHb29nbGVQcm92aWRlcih7XG4gICAgICBjbGllbnRJZDogcHJvY2Vzcy5lbnYuR09PR0xFX0lELFxuICAgICAgY2xpZW50U2VjcmV0OiBwcm9jZXNzLmVudi5HT09HTEVfQ0xJRU5UX1NFQ1JFVCxcbiAgICB9KSxcbiAgXSxcbiAgY2FsbGJhY2tzOiB7XG4gICAgYXN5bmMgc2Vzc2lvbih7IHNlc3Npb24gfSkge1xuICAgICAgLy8gc3RvcmUgdGhlIHVzZXIgaWQgZnJvbSBNb25nb0RCIHRvIHNlc3Npb25cbiAgICAgIGNvbnN0IHNlc3Npb25Vc2VyID0gYXdhaXQgVXNlci5maW5kT25lKHsgZW1haWw6IHNlc3Npb24udXNlci5lbWFpbCB9KTtcbiAgICAgIHNlc3Npb24udXNlci5pZCA9IHNlc3Npb25Vc2VyLl9pZC50b1N0cmluZygpO1xuXG4gICAgICByZXR1cm4gc2Vzc2lvbjtcbiAgICB9LFxuICAgIGFzeW5jIHNpZ25Jbih7IGFjY291bnQsIHByb2ZpbGUsIHVzZXIsIGNyZWRlbnRpYWxzIH0pIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGF3YWl0IGNvbm5lY3RUb0RCKCk7XG5cbiAgICAgICAgLy8gY2hlY2sgaWYgdXNlciBhbHJlYWR5IGV4aXN0c1xuICAgICAgICBjb25zdCB1c2VyRXhpc3RzID0gYXdhaXQgVXNlci5maW5kT25lKHsgZW1haWw6IHByb2ZpbGUuZW1haWwgfSk7XG5cbiAgICAgICAgLy8gaWYgbm90LCBjcmVhdGUgYSBuZXcgZG9jdW1lbnQgYW5kIHNhdmUgdXNlciBpbiBNb25nb0RCXG4gICAgICAgIGlmICghdXNlckV4aXN0cykge1xuICAgICAgICAgIC8vIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGNvbm4ucXVlcnkoXG4gICAgICAgICAgLy8gICBcIlNFTEVDVCBOYW1lICwgRGVzY3JpcHRpb25fX2MgLCBFdmVudF9EYXRlX19jIEZST00gQ3VzdG9tX19jXCJcbiAgICAgICAgICAvLyApO1xuXG4gICAgICAgICAgLy8gY29uc29sZS5sb2cocmVzdWx0KTtcblxuICAgICAgICAgIGNvbnN0IHJlc3VsdHQgPSBhd2FpdCBVc2VyLmNyZWF0ZSh7XG4gICAgICAgICAgICBlbWFpbDogcHJvZmlsZS5lbWFpbCxcbiAgICAgICAgICAgIHVzZXJuYW1lOiBwcm9maWxlLm5hbWUucmVwbGFjZShcIiBcIiwgXCJcIikudG9Mb3dlckNhc2UoKSxcbiAgICAgICAgICAgIGltYWdlOiBwcm9maWxlLnBpY3R1cmUsXG4gICAgICAgICAgfSk7XG4gICAgICAgICAgY29uc3QgY29ubiA9IG5ldyBDb25uZWN0aW9uKHtcbiAgICAgICAgICAgIGxvZ2luVXJsOiBwcm9jZXNzLmVudi5TQUxFU0ZPUkNFX0xPR0lOX1VSTCxcbiAgICAgICAgICB9KTtcblxuICAgICAgICAgIGF3YWl0IGNvbm4ubG9naW4oXG4gICAgICAgICAgICBwcm9jZXNzLmVudi5TQUxFU0ZPUkNFX1VTRVJOQU1FLFxuICAgICAgICAgICAgcHJvY2Vzcy5lbnYuU0FMRVNGT1JDRV9QQVNTV09SRCArIHByb2Nlc3MuZW52LlNBTEVTRk9SQ0VfVE9LRU5cbiAgICAgICAgICApO1xuICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGNvbm4uc29iamVjdChcIlVzZXJzX19jXCIpLmNyZWF0ZSh7XG4gICAgICAgICAgICBlbWFpbF9fYzogcHJvZmlsZS5lbWFpbCxcbiAgICAgICAgICAgIC8vIE5hbWU6IHByb2ZpbGUubmFtZS5yZXBsYWNlKFwiIFwiLCBcIlwiKS50b0xvd2VyQ2FzZSgpLFxuICAgICAgICAgICAgTmFtZTogcHJvZmlsZS5uYW1lLnRvTG93ZXJDYXNlKCksXG4gICAgICAgICAgICBpbWFnZV9fYzogcHJvZmlsZS5waWN0dXJlLFxuICAgICAgICAgICAgbW9uZ29kYl9pZF9fYzogcmVzdWx0dC5faWQsXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiRXJyb3IgY2hlY2tpbmcgaWYgdXNlciBleGlzdHM6IFwiLCBlcnJvci5tZXNzYWdlKTtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH0sXG4gIH0sXG59KTtcblxuZXhwb3J0IHsgaGFuZGxlciBhcyBHRVQsIGhhbmRsZXIgYXMgUE9TVCB9O1xuIl0sIm5hbWVzIjpbIk5leHRBdXRoIiwiR29vZ2xlUHJvdmlkZXIiLCJVc2VyIiwiY29ubmVjdFRvREIiLCJDb25uZWN0aW9uIiwiY29uZmlnIiwiaGFuZGxlciIsInByb3ZpZGVycyIsImNsaWVudElkIiwicHJvY2VzcyIsImVudiIsIkdPT0dMRV9JRCIsImNsaWVudFNlY3JldCIsIkdPT0dMRV9DTElFTlRfU0VDUkVUIiwiY2FsbGJhY2tzIiwic2Vzc2lvbiIsInNlc3Npb25Vc2VyIiwiZmluZE9uZSIsImVtYWlsIiwidXNlciIsImlkIiwiX2lkIiwidG9TdHJpbmciLCJzaWduSW4iLCJhY2NvdW50IiwicHJvZmlsZSIsImNyZWRlbnRpYWxzIiwidXNlckV4aXN0cyIsInJlc3VsdHQiLCJjcmVhdGUiLCJ1c2VybmFtZSIsIm5hbWUiLCJyZXBsYWNlIiwidG9Mb3dlckNhc2UiLCJpbWFnZSIsInBpY3R1cmUiLCJjb25uIiwibG9naW5VcmwiLCJTQUxFU0ZPUkNFX0xPR0lOX1VSTCIsImxvZ2luIiwiU0FMRVNGT1JDRV9VU0VSTkFNRSIsIlNBTEVTRk9SQ0VfUEFTU1dPUkQiLCJTQUxFU0ZPUkNFX1RPS0VOIiwicmVzdWx0Iiwic29iamVjdCIsImVtYWlsX19jIiwiTmFtZSIsImltYWdlX19jIiwibW9uZ29kYl9pZF9fYyIsImVycm9yIiwiY29uc29sZSIsImxvZyIsIm1lc3NhZ2UiLCJHRVQiLCJQT1NUIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./app/api/auth/[...nextauth]/route.js\n");

/***/ }),

/***/ "(rsc)/./models/user.js":
/*!************************!*\
  !*** ./models/user.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst UserSchema = new mongoose__WEBPACK_IMPORTED_MODULE_0__.Schema({\n    email: {\n        type: String,\n        unique: [\n            true,\n            \"Email already exists!\"\n        ],\n        required: [\n            true,\n            \"Email is required!\"\n        ]\n    },\n    username: {\n        type: String,\n        required: [\n            true,\n            \"Username is required!\"\n        ],\n        match: [\n            /^(?=.{8,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/,\n            \"Username invalid, it should contain 8-20 alphanumeric letters and be unique!\"\n        ]\n    },\n    image: {\n        type: String\n    }\n});\nconst User = mongoose__WEBPACK_IMPORTED_MODULE_0__.models.User || (0,mongoose__WEBPACK_IMPORTED_MODULE_0__.model)(\"User\", UserSchema);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (User);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9tb2RlbHMvdXNlci5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBaUQ7QUFFakQsTUFBTUcsYUFBYSxJQUFJSCw0Q0FBTUEsQ0FBQztJQUM1QkksT0FBTztRQUNMQyxNQUFNQztRQUNOQyxRQUFRO1lBQUM7WUFBTTtTQUF3QjtRQUN2Q0MsVUFBVTtZQUFDO1lBQU07U0FBcUI7SUFDeEM7SUFDQUMsVUFBVTtRQUNSSixNQUFNQztRQUNORSxVQUFVO1lBQUM7WUFBTTtTQUF3QjtRQUN6Q0UsT0FBTztZQUFDO1lBQThEO1NBQStFO0lBQ3ZKO0lBQ0FDLE9BQU87UUFDTE4sTUFBTUM7SUFDUjtBQUNGO0FBRUEsTUFBTU0sT0FBT1YsNENBQU1BLENBQUNVLElBQUksSUFBSVgsK0NBQUtBLENBQUMsUUFBUUU7QUFFMUMsaUVBQWVTLElBQUlBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wcm9tcHRvcGlhLy4vbW9kZWxzL3VzZXIuanM/NjU5NCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTY2hlbWEsIG1vZGVsLCBtb2RlbHMgfSBmcm9tICdtb25nb29zZSc7XG5cbmNvbnN0IFVzZXJTY2hlbWEgPSBuZXcgU2NoZW1hKHtcbiAgZW1haWw6IHtcbiAgICB0eXBlOiBTdHJpbmcsXG4gICAgdW5pcXVlOiBbdHJ1ZSwgJ0VtYWlsIGFscmVhZHkgZXhpc3RzISddLFxuICAgIHJlcXVpcmVkOiBbdHJ1ZSwgJ0VtYWlsIGlzIHJlcXVpcmVkISddLFxuICB9LFxuICB1c2VybmFtZToge1xuICAgIHR5cGU6IFN0cmluZyxcbiAgICByZXF1aXJlZDogW3RydWUsICdVc2VybmFtZSBpcyByZXF1aXJlZCEnXSxcbiAgICBtYXRjaDogWy9eKD89Lns4LDIwfSQpKD8hW18uXSkoPyEuKltfLl17Mn0pW2EtekEtWjAtOS5fXSsoPzwhW18uXSkkLywgXCJVc2VybmFtZSBpbnZhbGlkLCBpdCBzaG91bGQgY29udGFpbiA4LTIwIGFscGhhbnVtZXJpYyBsZXR0ZXJzIGFuZCBiZSB1bmlxdWUhXCJdXG4gIH0sXG4gIGltYWdlOiB7XG4gICAgdHlwZTogU3RyaW5nLFxuICB9XG59KTtcblxuY29uc3QgVXNlciA9IG1vZGVscy5Vc2VyIHx8IG1vZGVsKFwiVXNlclwiLCBVc2VyU2NoZW1hKTtcblxuZXhwb3J0IGRlZmF1bHQgVXNlcjsiXSwibmFtZXMiOlsiU2NoZW1hIiwibW9kZWwiLCJtb2RlbHMiLCJVc2VyU2NoZW1hIiwiZW1haWwiLCJ0eXBlIiwiU3RyaW5nIiwidW5pcXVlIiwicmVxdWlyZWQiLCJ1c2VybmFtZSIsIm1hdGNoIiwiaW1hZ2UiLCJVc2VyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./models/user.js\n");

/***/ }),

/***/ "(rsc)/./utils/database.js":
/*!***************************!*\
  !*** ./utils/database.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   connectToDB: () => (/* binding */ connectToDB)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n// import mongoose from \"mongoose\";\n// let isConnected = false; // track the connection\n// export const connectToDB = async () => {\n//   mongoose.set(\"strictQuery\", true);\n//   if (isConnected) {\n//     console.log(\"MongoDB is already connected\");\n//     return;\n//   }\n//   try {\n//     await mongoose.connect(process.env.MONGODB_URI, {\n//       dbName: \"mydatabase\",\n//       useNewUrlParser: true,\n//       useUnifiedTopology: true,\n//     });\n//     isConnected = true;\n//     console.log(\"MongoDB connected\");\n//   } catch (error) {\n//     console.log(error);\n//   }\n// };\n\nconst MONGODB_URI = process.env.MONGODB_URI;\nlet cached = global.mongoose || {\n    conn: null,\n    promise: null\n};\n// convert this let cached = (global as any).mongoose || { conn: null, promise: null }; to js\nconst connectToDB = async ()=>{\n    if (cached.conn) return cached.conn;\n    if (!MONGODB_URI) throw new Error(\"MONGODB_URI is missing\");\n    cached.promise = cached.promise || mongoose__WEBPACK_IMPORTED_MODULE_0___default().connect(MONGODB_URI, {\n        dbName: \"mydatabase\",\n        bufferCommands: false,\n        useNewUrlParser: true,\n        useUnifiedTopology: true,\n        serverSelectionTimeoutMS: 5000,\n        socketTimeoutMS: 45000\n    });\n    cached.conn = await cached.promise;\n    return cached.conn;\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi91dGlscy9kYXRhYmFzZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxtQ0FBbUM7QUFFbkMsbURBQW1EO0FBRW5ELDJDQUEyQztBQUMzQyx1Q0FBdUM7QUFFdkMsdUJBQXVCO0FBQ3ZCLG1EQUFtRDtBQUNuRCxjQUFjO0FBQ2QsTUFBTTtBQUVOLFVBQVU7QUFDVix3REFBd0Q7QUFDeEQsOEJBQThCO0FBQzlCLCtCQUErQjtBQUMvQixrQ0FBa0M7QUFDbEMsVUFBVTtBQUVWLDBCQUEwQjtBQUUxQix3Q0FBd0M7QUFDeEMsc0JBQXNCO0FBQ3RCLDBCQUEwQjtBQUMxQixNQUFNO0FBQ04sS0FBSztBQUUyQjtBQUVoQyxNQUFNQyxjQUFjQyxRQUFRQyxHQUFHLENBQUNGLFdBQVc7QUFFM0MsSUFBSUcsU0FBU0MsT0FBT0wsUUFBUSxJQUFJO0lBQUVNLE1BQU07SUFBTUMsU0FBUztBQUFLO0FBQzVELDZGQUE2RjtBQUV0RixNQUFNQyxjQUFjO0lBQ3pCLElBQUlKLE9BQU9FLElBQUksRUFBRSxPQUFPRixPQUFPRSxJQUFJO0lBRW5DLElBQUksQ0FBQ0wsYUFBYSxNQUFNLElBQUlRLE1BQU07SUFFbENMLE9BQU9HLE9BQU8sR0FDWkgsT0FBT0csT0FBTyxJQUNkUCx1REFBZ0IsQ0FBQ0MsYUFBYTtRQUM1QlUsUUFBUTtRQUNSQyxnQkFBZ0I7UUFDaEJDLGlCQUFpQjtRQUNqQkMsb0JBQW9CO1FBQ3BCQywwQkFBMEI7UUFDMUJDLGlCQUFpQjtJQUNuQjtJQUVGWixPQUFPRSxJQUFJLEdBQUcsTUFBTUYsT0FBT0csT0FBTztJQUVsQyxPQUFPSCxPQUFPRSxJQUFJO0FBQ3BCLEVBQUUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wcm9tcHRvcGlhLy4vdXRpbHMvZGF0YWJhc2UuanM/MmI5ZSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpbXBvcnQgbW9uZ29vc2UgZnJvbSBcIm1vbmdvb3NlXCI7XG5cbi8vIGxldCBpc0Nvbm5lY3RlZCA9IGZhbHNlOyAvLyB0cmFjayB0aGUgY29ubmVjdGlvblxuXG4vLyBleHBvcnQgY29uc3QgY29ubmVjdFRvREIgPSBhc3luYyAoKSA9PiB7XG4vLyAgIG1vbmdvb3NlLnNldChcInN0cmljdFF1ZXJ5XCIsIHRydWUpO1xuXG4vLyAgIGlmIChpc0Nvbm5lY3RlZCkge1xuLy8gICAgIGNvbnNvbGUubG9nKFwiTW9uZ29EQiBpcyBhbHJlYWR5IGNvbm5lY3RlZFwiKTtcbi8vICAgICByZXR1cm47XG4vLyAgIH1cblxuLy8gICB0cnkge1xuLy8gICAgIGF3YWl0IG1vbmdvb3NlLmNvbm5lY3QocHJvY2Vzcy5lbnYuTU9OR09EQl9VUkksIHtcbi8vICAgICAgIGRiTmFtZTogXCJteWRhdGFiYXNlXCIsXG4vLyAgICAgICB1c2VOZXdVcmxQYXJzZXI6IHRydWUsXG4vLyAgICAgICB1c2VVbmlmaWVkVG9wb2xvZ3k6IHRydWUsXG4vLyAgICAgfSk7XG5cbi8vICAgICBpc0Nvbm5lY3RlZCA9IHRydWU7XG5cbi8vICAgICBjb25zb2xlLmxvZyhcIk1vbmdvREIgY29ubmVjdGVkXCIpO1xuLy8gICB9IGNhdGNoIChlcnJvcikge1xuLy8gICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbi8vICAgfVxuLy8gfTtcblxuaW1wb3J0IG1vbmdvb3NlIGZyb20gXCJtb25nb29zZVwiO1xuXG5jb25zdCBNT05HT0RCX1VSSSA9IHByb2Nlc3MuZW52Lk1PTkdPREJfVVJJO1xuXG5sZXQgY2FjaGVkID0gZ2xvYmFsLm1vbmdvb3NlIHx8IHsgY29ubjogbnVsbCwgcHJvbWlzZTogbnVsbCB9O1xuLy8gY29udmVydCB0aGlzIGxldCBjYWNoZWQgPSAoZ2xvYmFsIGFzIGFueSkubW9uZ29vc2UgfHwgeyBjb25uOiBudWxsLCBwcm9taXNlOiBudWxsIH07IHRvIGpzXG5cbmV4cG9ydCBjb25zdCBjb25uZWN0VG9EQiA9IGFzeW5jICgpID0+IHtcbiAgaWYgKGNhY2hlZC5jb25uKSByZXR1cm4gY2FjaGVkLmNvbm47XG5cbiAgaWYgKCFNT05HT0RCX1VSSSkgdGhyb3cgbmV3IEVycm9yKFwiTU9OR09EQl9VUkkgaXMgbWlzc2luZ1wiKTtcblxuICBjYWNoZWQucHJvbWlzZSA9XG4gICAgY2FjaGVkLnByb21pc2UgfHxcbiAgICBtb25nb29zZS5jb25uZWN0KE1PTkdPREJfVVJJLCB7XG4gICAgICBkYk5hbWU6IFwibXlkYXRhYmFzZVwiLFxuICAgICAgYnVmZmVyQ29tbWFuZHM6IGZhbHNlLFxuICAgICAgdXNlTmV3VXJsUGFyc2VyOiB0cnVlLFxuICAgICAgdXNlVW5pZmllZFRvcG9sb2d5OiB0cnVlLFxuICAgICAgc2VydmVyU2VsZWN0aW9uVGltZW91dE1TOiA1MDAwLFxuICAgICAgc29ja2V0VGltZW91dE1TOiA0NTAwMCxcbiAgICB9KTtcblxuICBjYWNoZWQuY29ubiA9IGF3YWl0IGNhY2hlZC5wcm9taXNlO1xuXG4gIHJldHVybiBjYWNoZWQuY29ubjtcbn07XG4iXSwibmFtZXMiOlsibW9uZ29vc2UiLCJNT05HT0RCX1VSSSIsInByb2Nlc3MiLCJlbnYiLCJjYWNoZWQiLCJnbG9iYWwiLCJjb25uIiwicHJvbWlzZSIsImNvbm5lY3RUb0RCIiwiRXJyb3IiLCJjb25uZWN0IiwiZGJOYW1lIiwiYnVmZmVyQ29tbWFuZHMiLCJ1c2VOZXdVcmxQYXJzZXIiLCJ1c2VVbmlmaWVkVG9wb2xvZ3kiLCJzZXJ2ZXJTZWxlY3Rpb25UaW1lb3V0TVMiLCJzb2NrZXRUaW1lb3V0TVMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./utils/database.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/jsforce","vendor-chunks/sshpk","vendor-chunks/ajv","vendor-chunks/request","vendor-chunks/mime-db","vendor-chunks/psl","vendor-chunks/xmlbuilder","vendor-chunks/lodash","vendor-chunks/faye","vendor-chunks/next-auth","vendor-chunks/multistream","vendor-chunks/tough-cookie","vendor-chunks/csv-parse","vendor-chunks/ecc-jsbn","vendor-chunks/tweetnacl","vendor-chunks/uri-js","vendor-chunks/websocket-driver","vendor-chunks/sax","vendor-chunks/http-signature","vendor-chunks/lodash.get","vendor-chunks/bcrypt-pbkdf","vendor-chunks/@babel","vendor-chunks/xml2js","vendor-chunks/jsprim","vendor-chunks/url-parse","vendor-chunks/asn1","vendor-chunks/websocket-extensions","vendor-chunks/aws4","vendor-chunks/faye-websocket","vendor-chunks/http-parser-js","vendor-chunks/punycode","vendor-chunks/form-data","vendor-chunks/verror","vendor-chunks/json-schema","vendor-chunks/csv-stringify","vendor-chunks/asynckit","vendor-chunks/har-schema","vendor-chunks/promise","vendor-chunks/tunnel-agent","vendor-chunks/asap","vendor-chunks/assert-plus","vendor-chunks/combined-stream","vendor-chunks/aws-sign2","vendor-chunks/forever-agent","vendor-chunks/extsprintf","vendor-chunks/oauth-sign","vendor-chunks/mime-types","vendor-chunks/extend","vendor-chunks/core-util-is","vendor-chunks/querystringify","vendor-chunks/json-schema-traverse","vendor-chunks/delayed-stream","vendor-chunks/har-validator","vendor-chunks/safer-buffer","vendor-chunks/fast-json-stable-stringify","vendor-chunks/caseless","vendor-chunks/safe-buffer","vendor-chunks/sequin","vendor-chunks/fast-deep-equal","vendor-chunks/process-nextick-args","vendor-chunks/performance-now","vendor-chunks/is-typedarray","vendor-chunks/inherits","vendor-chunks/json-stringify-safe","vendor-chunks/universalify","vendor-chunks/requires-port","vendor-chunks/csprng","vendor-chunks/isstream","vendor-chunks/isarray","vendor-chunks/util-deprecate","vendor-chunks/jose","vendor-chunks/openid-client","vendor-chunks/uuid","vendor-chunks/oauth","vendor-chunks/@panva","vendor-chunks/yallist","vendor-chunks/preact-render-to-string","vendor-chunks/oidc-token-hash","vendor-chunks/dotenv","vendor-chunks/preact","vendor-chunks/object-hash","vendor-chunks/lru-cache","vendor-chunks/cookie"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&page=%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute.js&appDir=C%3A%5CUsers%5Credar%5COneDrive%5CBureau%5Creact%20project%5Cproject_next_14_ai_prompt_sharing-main%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Credar%5COneDrive%5CBureau%5Creact%20project%5Cproject_next_14_ai_prompt_sharing-main&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();