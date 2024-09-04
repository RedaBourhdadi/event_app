/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/isstream";
exports.ids = ["vendor-chunks/isstream"];
exports.modules = {

/***/ "(action-browser)/./node_modules/isstream/isstream.js":
/*!*******************************************!*\
  !*** ./node_modules/isstream/isstream.js ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var stream = __webpack_require__(/*! stream */ \"stream\")\n\n\nfunction isStream (obj) {\n  return obj instanceof stream.Stream\n}\n\n\nfunction isReadable (obj) {\n  return isStream(obj) && typeof obj._read == 'function' && typeof obj._readableState == 'object'\n}\n\n\nfunction isWritable (obj) {\n  return isStream(obj) && typeof obj._write == 'function' && typeof obj._writableState == 'object'\n}\n\n\nfunction isDuplex (obj) {\n  return isReadable(obj) && isWritable(obj)\n}\n\n\nmodule.exports            = isStream\nmodule.exports.isReadable = isReadable\nmodule.exports.isWritable = isWritable\nmodule.exports.isDuplex   = isDuplex\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFjdGlvbi1icm93c2VyKS8uL25vZGVfbW9kdWxlcy9pc3N0cmVhbS9pc3N0cmVhbS5qcyIsIm1hcHBpbmdzIjoiQUFBQSxhQUFhLG1CQUFPLENBQUMsc0JBQVE7OztBQUc3QjtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0EseUJBQXlCO0FBQ3pCLHlCQUF5QjtBQUN6Qix1QkFBdUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wcm9tcHRvcGlhLy4vbm9kZV9tb2R1bGVzL2lzc3RyZWFtL2lzc3RyZWFtLmpzP2I3YTMiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIHN0cmVhbSA9IHJlcXVpcmUoJ3N0cmVhbScpXG5cblxuZnVuY3Rpb24gaXNTdHJlYW0gKG9iaikge1xuICByZXR1cm4gb2JqIGluc3RhbmNlb2Ygc3RyZWFtLlN0cmVhbVxufVxuXG5cbmZ1bmN0aW9uIGlzUmVhZGFibGUgKG9iaikge1xuICByZXR1cm4gaXNTdHJlYW0ob2JqKSAmJiB0eXBlb2Ygb2JqLl9yZWFkID09ICdmdW5jdGlvbicgJiYgdHlwZW9mIG9iai5fcmVhZGFibGVTdGF0ZSA9PSAnb2JqZWN0J1xufVxuXG5cbmZ1bmN0aW9uIGlzV3JpdGFibGUgKG9iaikge1xuICByZXR1cm4gaXNTdHJlYW0ob2JqKSAmJiB0eXBlb2Ygb2JqLl93cml0ZSA9PSAnZnVuY3Rpb24nICYmIHR5cGVvZiBvYmouX3dyaXRhYmxlU3RhdGUgPT0gJ29iamVjdCdcbn1cblxuXG5mdW5jdGlvbiBpc0R1cGxleCAob2JqKSB7XG4gIHJldHVybiBpc1JlYWRhYmxlKG9iaikgJiYgaXNXcml0YWJsZShvYmopXG59XG5cblxubW9kdWxlLmV4cG9ydHMgICAgICAgICAgICA9IGlzU3RyZWFtXG5tb2R1bGUuZXhwb3J0cy5pc1JlYWRhYmxlID0gaXNSZWFkYWJsZVxubW9kdWxlLmV4cG9ydHMuaXNXcml0YWJsZSA9IGlzV3JpdGFibGVcbm1vZHVsZS5leHBvcnRzLmlzRHVwbGV4ICAgPSBpc0R1cGxleFxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(action-browser)/./node_modules/isstream/isstream.js\n");

/***/ }),

/***/ "(rsc)/./node_modules/isstream/isstream.js":
/*!*******************************************!*\
  !*** ./node_modules/isstream/isstream.js ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var stream = __webpack_require__(/*! stream */ \"stream\")\n\n\nfunction isStream (obj) {\n  return obj instanceof stream.Stream\n}\n\n\nfunction isReadable (obj) {\n  return isStream(obj) && typeof obj._read == 'function' && typeof obj._readableState == 'object'\n}\n\n\nfunction isWritable (obj) {\n  return isStream(obj) && typeof obj._write == 'function' && typeof obj._writableState == 'object'\n}\n\n\nfunction isDuplex (obj) {\n  return isReadable(obj) && isWritable(obj)\n}\n\n\nmodule.exports            = isStream\nmodule.exports.isReadable = isReadable\nmodule.exports.isWritable = isWritable\nmodule.exports.isDuplex   = isDuplex\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvaXNzdHJlYW0vaXNzdHJlYW0uanMiLCJtYXBwaW5ncyI6IkFBQUEsYUFBYSxtQkFBTyxDQUFDLHNCQUFROzs7QUFHN0I7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBLHlCQUF5QjtBQUN6Qix5QkFBeUI7QUFDekIsdUJBQXVCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcHJvbXB0b3BpYS8uL25vZGVfbW9kdWxlcy9pc3N0cmVhbS9pc3N0cmVhbS5qcz82Njg4Il0sInNvdXJjZXNDb250ZW50IjpbInZhciBzdHJlYW0gPSByZXF1aXJlKCdzdHJlYW0nKVxuXG5cbmZ1bmN0aW9uIGlzU3RyZWFtIChvYmopIHtcbiAgcmV0dXJuIG9iaiBpbnN0YW5jZW9mIHN0cmVhbS5TdHJlYW1cbn1cblxuXG5mdW5jdGlvbiBpc1JlYWRhYmxlIChvYmopIHtcbiAgcmV0dXJuIGlzU3RyZWFtKG9iaikgJiYgdHlwZW9mIG9iai5fcmVhZCA9PSAnZnVuY3Rpb24nICYmIHR5cGVvZiBvYmouX3JlYWRhYmxlU3RhdGUgPT0gJ29iamVjdCdcbn1cblxuXG5mdW5jdGlvbiBpc1dyaXRhYmxlIChvYmopIHtcbiAgcmV0dXJuIGlzU3RyZWFtKG9iaikgJiYgdHlwZW9mIG9iai5fd3JpdGUgPT0gJ2Z1bmN0aW9uJyAmJiB0eXBlb2Ygb2JqLl93cml0YWJsZVN0YXRlID09ICdvYmplY3QnXG59XG5cblxuZnVuY3Rpb24gaXNEdXBsZXggKG9iaikge1xuICByZXR1cm4gaXNSZWFkYWJsZShvYmopICYmIGlzV3JpdGFibGUob2JqKVxufVxuXG5cbm1vZHVsZS5leHBvcnRzICAgICAgICAgICAgPSBpc1N0cmVhbVxubW9kdWxlLmV4cG9ydHMuaXNSZWFkYWJsZSA9IGlzUmVhZGFibGVcbm1vZHVsZS5leHBvcnRzLmlzV3JpdGFibGUgPSBpc1dyaXRhYmxlXG5tb2R1bGUuZXhwb3J0cy5pc0R1cGxleCAgID0gaXNEdXBsZXhcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/isstream/isstream.js\n");

/***/ })

};
;