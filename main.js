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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _w_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./w.js */ \"./src/w.js\");\n\n\n\ndocument.querySelector('#test').addEventListener(\"click\", async () => {\n    const data = await searchQuery() \n    console.log(data)\n\n    _w_js__WEBPACK_IMPORTED_MODULE_0__.extract.current(data)\n    _w_js__WEBPACK_IMPORTED_MODULE_0__.extract.forecast(data)\n    \n    // then do something with extract.forecastWeather array\n    \n    _w_js__WEBPACK_IMPORTED_MODULE_0__.extract.logForecast()\n})\n\nasync function searchQuery() {\n    try {\n        const response = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=01aeb086078c4e5aaa5160639230208&q=london&days=3`, {mode: 'cors'});\n        const data = await response.json();\n        return data\n    } catch (err) {\n        console.log(err)\n    }\n}\n\n\n\n//# sourceURL=webpack://weather_app/./src/index.js?");

/***/ }),

/***/ "./src/w.js":
/*!******************!*\
  !*** ./src/w.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   extract: () => (/* binding */ extract)\n/* harmony export */ });\n\nconst extract = {\n\n    currentWeather: {},\n    forecastWeather: [],\n\n    current: data => {\n        extract.currentWeather = {\n            location: data.location.name,\n            country: data.location.country,\n            tempC: data.current.temp_c,\n            tempF: data.current.temp_f,\n            state: data.current.condition.text,\n            code: data.current.condition.code\n        }\n    }, \n\n    forecast: data => {\n        const forecastDays = data.forecast.forecastday\n        forecastDays.forEach(day => extract.forecastWeather.push(extract.dailyForecast(day)))\n    }, \n    \n    dailyForecast: (fdata) => {\n        const test = {\n            date: fdata.date,\n            maxtempc: fdata.day.maxtemp_c,\n        }\n        return test\n    },\n\n\n    logForecast: () => {\n        // console.log(extract.currentWeather)\n        console.log(extract.forecastWeather)\n    },\n\n\n\n    // filter: data => {\n    //     const test = data.forecast.forecastday\n    //     console.log(test)\n\n    //     const userNames = Object.keys(test)\n    //         .filter((key) => key.includes(\"date\"))\n    //         .reduce((object, key) => {\n    //             return Object.assign(object, {\n    //             [key]: test[key]\n    //             });\n    //     }, {});\n\n    //     console.log(userNames);\n    // },\n\n    // forecast: data => {\n    // // data.forecast.forecastday.forEach(day => extract.dailyForecast(day))\n    //     const forecast = data.forecast.forecastday\n    //         for ( let i = 0 ; i < forecast.length ; i++) {\n    //             //const test =    \n    //             extract.forecastWeather.push(extract.dailyForecast(forecast, i))\n    //            // extract.forecastWeather.push(test)\n    //         }\n    // }, \n\n    // dailyForecast: (fdata, index) => {\n    //     console.log(fdata)\n    //     const test = {\n    //         date: fdata[index].date,\n    //         maxtempc: fdata[index].day.maxtemp_c,\n    //         condition: fdata[index].day.condition.text\n    //     }\n    //     return test\n    //     //extract.forecastWeather.push(test)\n    // },\n\n}\n\n \n\n//# sourceURL=webpack://weather_app/./src/w.js?");

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