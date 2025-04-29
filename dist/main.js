/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   loadHome: () => (/* binding */ loadHome)\n/* harmony export */ });\n//html content creation for page-load\nfunction loadHome () {\n    \n    let parent = document.createElement('div');\n    parent.setAttribute('id', 'container')\n    document.getElementById('content').appendChild(parent);\n\n    let newElement = document.createElement('h1');\n    newElement.textContent = 'You Are What You Eat';\n    parent.appendChild(newElement);\n    \n    newElement = document.createElement('h3')\n    newElement.textContent = 'Only the finest.';\n    parent.appendChild(newElement);\n    \n    let newList = document.createElement('ul')\n    parent.appendChild(newList);\n    \n    newElement = document.createElement('p')\n    newElement.textContent = 'Hours of operation';\n    newList.appendChild(newElement);\n}\n\n//# sourceURL=webpack:///./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.js */ \"./src/home.js\");\n/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu.js */ \"./src/menu.js\");\n/* harmony import */ var _reviews_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./reviews.js */ \"./src/reviews.js\");\n\n\n\n\nconst clearContent = () => {\n    document.getElementById('container').remove();\n}\n\n;(0,_home_js__WEBPACK_IMPORTED_MODULE_0__.loadHome)();\n\nconst homeButton = document.getElementById('home');\nconst menuButton = document.getElementById('menu');\nconst reviewsButton = document.getElementById('reviews');\n\nhomeButton.addEventListener('click', () => {\n    clearContent();\n    (0,_home_js__WEBPACK_IMPORTED_MODULE_0__.loadHome)();\n});\n\nmenuButton.addEventListener('click', () => {\n    clearContent();\n    (0,_menu_js__WEBPACK_IMPORTED_MODULE_1__.loadMenu)();\n});\n\nreviewsButton.addEventListener('click', () => {\n    clearContent();\n    (0,_reviews_js__WEBPACK_IMPORTED_MODULE_2__.loadReviews)();\n})\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   loadMenu: () => (/* binding */ loadMenu)\n/* harmony export */ });\n//html content creation for page-load\nfunction loadMenu () {\n    \n    let parent = document.createElement('div');\n    parent.setAttribute('id', 'container')\n    document.getElementById('content').appendChild(parent);\n\n    let newElement = document.createElement('h3')\n    newElement.textContent = 'Menu';\n    parent.appendChild(newElement);\n    \n    let newList = document.createElement('ul')\n    parent.appendChild(newList);\n    \n    newElement = document.createElement('li')\n    newElement.textContent = 'some foods';\n    newList.appendChild(newElement);\n}\n\n//# sourceURL=webpack:///./src/menu.js?");

/***/ }),

/***/ "./src/reviews.js":
/*!************************!*\
  !*** ./src/reviews.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   loadReviews: () => (/* binding */ loadReviews)\n/* harmony export */ });\n//html content creation for page-load\nfunction loadReviews () {\n    \n    let parent = document.createElement('div');\n    parent.setAttribute('id', 'container')\n    document.getElementById('content').appendChild(parent);\n\n    let newElement = document.createElement('h3')\n    newElement.textContent = 'What they say...';\n    parent.appendChild(newElement);\n    \n    newElement = document.createElement('p')\n    newElement.textContent = 'This place works miracles. my husband and I shared a wonderful date night for the first time in ages while the staff took care of our children.';\n    parent.appendChild(newElement);\n    \n}\n\n//# sourceURL=webpack:///./src/reviews.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;