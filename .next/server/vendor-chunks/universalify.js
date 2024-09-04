"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/universalify";
exports.ids = ["vendor-chunks/universalify"];
exports.modules = {

/***/ "(action-browser)/./node_modules/universalify/index.js":
/*!********************************************!*\
  !*** ./node_modules/universalify/index.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\n\nexports.fromCallback = function (fn) {\n  return Object.defineProperty(function () {\n    if (typeof arguments[arguments.length - 1] === 'function') fn.apply(this, arguments)\n    else {\n      return new Promise((resolve, reject) => {\n        arguments[arguments.length] = (err, res) => {\n          if (err) return reject(err)\n          resolve(res)\n        }\n        arguments.length++\n        fn.apply(this, arguments)\n      })\n    }\n  }, 'name', { value: fn.name })\n}\n\nexports.fromPromise = function (fn) {\n  return Object.defineProperty(function () {\n    const cb = arguments[arguments.length - 1]\n    if (typeof cb !== 'function') return fn.apply(this, arguments)\n    else {\n      delete arguments[arguments.length - 1]\n      arguments.length--\n      fn.apply(this, arguments).then(r => cb(null, r), cb)\n    }\n  }, 'name', { value: fn.name })\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFjdGlvbi1icm93c2VyKS8uL25vZGVfbW9kdWxlcy91bml2ZXJzYWxpZnkvaW5kZXguanMiLCJtYXBwaW5ncyI6IkFBQVk7O0FBRVosb0JBQW9CO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsR0FBRyxZQUFZLGdCQUFnQjtBQUMvQjs7QUFFQSxtQkFBbUI7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUcsWUFBWSxnQkFBZ0I7QUFDL0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wcm9tcHRvcGlhLy4vbm9kZV9tb2R1bGVzL3VuaXZlcnNhbGlmeS9pbmRleC5qcz84M2VmIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0J1xuXG5leHBvcnRzLmZyb21DYWxsYmFjayA9IGZ1bmN0aW9uIChmbikge1xuICByZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KGZ1bmN0aW9uICgpIHtcbiAgICBpZiAodHlwZW9mIGFyZ3VtZW50c1thcmd1bWVudHMubGVuZ3RoIC0gMV0gPT09ICdmdW5jdGlvbicpIGZuLmFwcGx5KHRoaXMsIGFyZ3VtZW50cylcbiAgICBlbHNlIHtcbiAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgIGFyZ3VtZW50c1thcmd1bWVudHMubGVuZ3RoXSA9IChlcnIsIHJlcykgPT4ge1xuICAgICAgICAgIGlmIChlcnIpIHJldHVybiByZWplY3QoZXJyKVxuICAgICAgICAgIHJlc29sdmUocmVzKVxuICAgICAgICB9XG4gICAgICAgIGFyZ3VtZW50cy5sZW5ndGgrK1xuICAgICAgICBmbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpXG4gICAgICB9KVxuICAgIH1cbiAgfSwgJ25hbWUnLCB7IHZhbHVlOiBmbi5uYW1lIH0pXG59XG5cbmV4cG9ydHMuZnJvbVByb21pc2UgPSBmdW5jdGlvbiAoZm4pIHtcbiAgcmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShmdW5jdGlvbiAoKSB7XG4gICAgY29uc3QgY2IgPSBhcmd1bWVudHNbYXJndW1lbnRzLmxlbmd0aCAtIDFdXG4gICAgaWYgKHR5cGVvZiBjYiAhPT0gJ2Z1bmN0aW9uJykgcmV0dXJuIGZuLmFwcGx5KHRoaXMsIGFyZ3VtZW50cylcbiAgICBlbHNlIHtcbiAgICAgIGRlbGV0ZSBhcmd1bWVudHNbYXJndW1lbnRzLmxlbmd0aCAtIDFdXG4gICAgICBhcmd1bWVudHMubGVuZ3RoLS1cbiAgICAgIGZuLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykudGhlbihyID0+IGNiKG51bGwsIHIpLCBjYilcbiAgICB9XG4gIH0sICduYW1lJywgeyB2YWx1ZTogZm4ubmFtZSB9KVxufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(action-browser)/./node_modules/universalify/index.js\n");

/***/ }),

/***/ "(rsc)/./node_modules/universalify/index.js":
/*!********************************************!*\
  !*** ./node_modules/universalify/index.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\n\nexports.fromCallback = function (fn) {\n  return Object.defineProperty(function () {\n    if (typeof arguments[arguments.length - 1] === 'function') fn.apply(this, arguments)\n    else {\n      return new Promise((resolve, reject) => {\n        arguments[arguments.length] = (err, res) => {\n          if (err) return reject(err)\n          resolve(res)\n        }\n        arguments.length++\n        fn.apply(this, arguments)\n      })\n    }\n  }, 'name', { value: fn.name })\n}\n\nexports.fromPromise = function (fn) {\n  return Object.defineProperty(function () {\n    const cb = arguments[arguments.length - 1]\n    if (typeof cb !== 'function') return fn.apply(this, arguments)\n    else {\n      delete arguments[arguments.length - 1]\n      arguments.length--\n      fn.apply(this, arguments).then(r => cb(null, r), cb)\n    }\n  }, 'name', { value: fn.name })\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvdW5pdmVyc2FsaWZ5L2luZGV4LmpzIiwibWFwcGluZ3MiOiJBQUFZOztBQUVaLG9CQUFvQjtBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLEdBQUcsWUFBWSxnQkFBZ0I7QUFDL0I7O0FBRUEsbUJBQW1CO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHLFlBQVksZ0JBQWdCO0FBQy9CIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcHJvbXB0b3BpYS8uL25vZGVfbW9kdWxlcy91bml2ZXJzYWxpZnkvaW5kZXguanM/Y2VjZCJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCdcblxuZXhwb3J0cy5mcm9tQ2FsbGJhY2sgPSBmdW5jdGlvbiAoZm4pIHtcbiAgcmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShmdW5jdGlvbiAoKSB7XG4gICAgaWYgKHR5cGVvZiBhcmd1bWVudHNbYXJndW1lbnRzLmxlbmd0aCAtIDFdID09PSAnZnVuY3Rpb24nKSBmbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpXG4gICAgZWxzZSB7XG4gICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICBhcmd1bWVudHNbYXJndW1lbnRzLmxlbmd0aF0gPSAoZXJyLCByZXMpID0+IHtcbiAgICAgICAgICBpZiAoZXJyKSByZXR1cm4gcmVqZWN0KGVycilcbiAgICAgICAgICByZXNvbHZlKHJlcylcbiAgICAgICAgfVxuICAgICAgICBhcmd1bWVudHMubGVuZ3RoKytcbiAgICAgICAgZm4uYXBwbHkodGhpcywgYXJndW1lbnRzKVxuICAgICAgfSlcbiAgICB9XG4gIH0sICduYW1lJywgeyB2YWx1ZTogZm4ubmFtZSB9KVxufVxuXG5leHBvcnRzLmZyb21Qcm9taXNlID0gZnVuY3Rpb24gKGZuKSB7XG4gIHJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkoZnVuY3Rpb24gKCkge1xuICAgIGNvbnN0IGNiID0gYXJndW1lbnRzW2FyZ3VtZW50cy5sZW5ndGggLSAxXVxuICAgIGlmICh0eXBlb2YgY2IgIT09ICdmdW5jdGlvbicpIHJldHVybiBmbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpXG4gICAgZWxzZSB7XG4gICAgICBkZWxldGUgYXJndW1lbnRzW2FyZ3VtZW50cy5sZW5ndGggLSAxXVxuICAgICAgYXJndW1lbnRzLmxlbmd0aC0tXG4gICAgICBmbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpLnRoZW4ociA9PiBjYihudWxsLCByKSwgY2IpXG4gICAgfVxuICB9LCAnbmFtZScsIHsgdmFsdWU6IGZuLm5hbWUgfSlcbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/universalify/index.js\n");

/***/ })

};
;