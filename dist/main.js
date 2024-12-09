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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&family=Lato:wght@100;900&family=Merriweather:wght@400;700&display=swap);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `body, html {\n    font-family: 'Roboto', sans-serif; /* Default font for body text */\n    overflow-x: hidden;\n    padding-bottom: 50px;\n    overflow: hidden;\n        \n}\n:root {\n    --main-bg-color: #414141;\n    --secondary-bg-color: #f4f4f4;\n    --main-text-color: white;\n    --secondary-text-color: black;\n    --primary-font-size: 16px;\n\n    --neon-green-color: #007BFF;\n    --light-gray-color: #EAEAEA;\n    \n    --card-items-box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);\n}\n\nh1, h2, h3, h4, h5, h6 {\n    font-family: 'Lato', sans-serif; /* Font for headings */\n    font-weight: 900;\n    \n}\nh2 {\n    font-weight: 600;\n    text-transform: uppercase;\n}\n\np {\n    font-family: 'Merriweather', serif; /* Font for paragraphs */\n}\n\n* {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n    \n    \n}\nbody {\n    background-color: var(--main-bg-color);\n    color: var(--main-text-color);\n    font-size: var(--primary-font-size);\n    /* padding-bottom: 50vh; */\n}\n\n.parent-containers {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    height: auto;\n    border-radius: 20px;\n    padding-left: 3px;\n    padding-right: 3px;\n    \n}\n#parent-container-1 {\n    height: 100vh;\n    padding-left: 100px;\n    text-align: left;\n    align-items: flex-start;\n    position: relative;\n    \n\n}\n@keyframes fadeIn {\n    from {\n        opacity: 0;\n    }\n    to {\n        opacity: 1;\n    }\n}\n#parent-container-1 h1 {\n    background-color: rgba(65, 65, 65, 0.5);\n}\n#parent-container-1 p {\n    background-color: rgba(65, 65, 65, 0.5);\n}\n.text-containers {\n    \n    display: flex;\n    flex-direction: column;\n    /* border: 2px solid #bbeD2F; */\n    opacity: 0; /* Start with 0 opacity */\n    animation: fadeIn 8s ease-in-out forwards; /* Apply the fade-in animation */\n    \n}\n.text-containers h1 {\n\n    padding: 20px 0;\n}\n.ctas {\n    background-color: var(--neon-green-color);\n    color: var(--main-text-color);\n    text-decoration: none;\n    text-align:  center;\n    padding: 10px 40px;\n    width: 70%;\n    border-radius: 7px;\n    transition: background-color 0.3s ease;\ncursor: pointer;    \n}\n\n#text-container-1 p {\n    margin-bottom: 100px;\n    \n}\n#text-container-2  {\n    text-align: left;\npadding: 20px;\npadding-bottom: 50px;\nborder-radius: 7px;\n    \n    background-color: var(--secondary-bg-color);\n    \n    \n}\n#parent-container-2 {\nbackground-color: var(--light-gray-color);\ncolor: var(--secondary-text-color);\ndisplay: flex;\n        flex-direction: row;\n        justify-content:space-around;\n        align-items: center;\n    min-height: 500px;\n    max-height: fit-content;\n    \n    text-align: left;\n    \n    opacity: 0; /* Start with 0 opacity */\n    animation: fadeIn 2s ease-in-out forwards; /* Apply the fade-in animation */\n    \n}\n/* margin#parent-container-2 ul {\n    list-style-type: square;\n} */\n.sub-titles {\n    padding: 40px 0;\n    font-size: 14px;\n    \n}\n.span-bolds {\n    font-weight: bold;\n    font-size: 24px;\n}\n#parent-container-2 ul {\n    padding: 20px 0;\n\n}\n.expandable-container p {\n    padding: 20px 0;\n}\n#parent-container-3 {\n    background-color: var(--neon-green-color);\n    background-color: var(--light-gray-color);\n    color:var(--secondary-text-color);\nheight: auto;\npadding: 100px 5px;\ntext-align: center;\n    \n}\n#parent-container-3 h3 {\n    padding: 20px 0;\n    font-size: x-large;\n}\n.card-containers {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    padding: 20px 0;\n    row-gap: 100px;\n    \n}\n.card-items {\n    /* background-color: var(--neon-green-color); */\n    opacity: 0; /* Start with 0 opacity */\n    transition: opacity 0.5s ease-in-out; /* Apply transition for smooth effect */    ;\n}\n\n\n\n@keyframes slideInFromRight {\n    from {\n        transform: translateX(100%);\n        opacity: 0;\n    }\n    to {\n        transform: translateX(0);\n        opacity: 1;\n    }\n}\n.card-containers img {\n    max-width: 2125px;\n    max-height: 125px;\n\n    border-radius: 10px;\n}\n#parent-container-4 {\n    height: auto;\n    padding: 150px 0;\n    \n    text-align: left;\n}\n#parent-container-4 img{    \n    width: 50%;\n\n}\n#parent-container-4 .section-4-card-containers img {\nwidth: 100%;\n}\n\n.gradient-img-containers {\n    position: relative;\n    width: 100%;\n    overflow: hidden;\n}\n.gradient-overlays {\n    position: absolute;\n    bottom: 0;\n    left: 0;\n    width: 100%;\n    height: 50%;\n    background: linear-gradient(to top, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0));\n  }\n.expandables {\n    cursor: pointer;\n            color: #007bff;\n            text-decoration: underline;\n            margin: 10px 0;\n}\n.hidden {\n    display: none;\n    max-height: 0;\n    padding: 0;\n    opacity: 0;\n    transition: max-height 0.3s ease, opacity 0.3s ease;\n    \n}\n.list {\n    list-style-type: disc;\n    \n            padding-left: 20px;\n            padding-top: 20px;\n            padding-bottom: 20px;\n}\n.list li {\n    padding: 10px 0;\n}\n.list p {\n    padding: 20px 0;\n}\n.h2-containers  {\n    padding: 40px 0 10px;\n    font-size: 18px;\n    text-align: center;\n    align-self: flex-start;\n    \n}\n.section-4-card-containers {\n    padding: 40px 10px;\n    transition: max-height 0.3s ease;\n    background-color: black;\n            overflow: hidden;\n            margin: 25px 0;\nopacity: 0;\ntransition: opacity 0.5s ease-in-out; /* Apply transition for smooth effect */    ;   \n        \n}\n@keyframes slideInFromLeft {\n    from {\n        transform: translateX(-100%);\n        opacity: 0;\n    }\n    to {\n        transform: translateX(0);\n        opacity: 1;\n    }\n}\n\n\n.section-4-card-containers img {\n    background-color: var(--neon-green-color);\n    background-color: var(--secondary-bg-color);\n    width: 100%;\n}\n.section-4-card-containers h3 {\n    padding: 20px 0 5px 0;\n    font-weight: bold;\n    \n}\n.section-4-card-containers p:nth-of-type(3) {\n    padding: 20px 0;\n    \n}\n#relevant-earlier-career ul{\n    list-style-type: square ;\n    padding-left: 25px;\n    line-height: 20px;\n}\n#relevant-earlier-career li {\n padding-bottom: 10px;   \n\n\n}\n#education-card-container {\n    background-color: var(--main-bg-color);\n    display: flex;\nflex-direction: row;\noverflow-x: auto;\ncolumn-gap: 25px;\npadding: 25px 0;\nscroll-snap-type: x mandatory;\nwidth: 100%;\nbox-sizing: border-box;\n\n\n}\n.education-cards {\n    background-color: var(--secondary-bg-color);\n    \n    border-radius: 8px;\n    box-shadow: var(--card-items-box-shadow);\ncolor: var(--secondary-text-color);\n    text-align: center;\npadding-top: 20px;\npadding-bottom: 20px;\nflex: 0 0 auto; /* Prevent the child elements from shrinking or growing */\n    width: 300px; /* Set a fixed width for the child elements */\n    scroll-snap-align: start;    \n}\n#case-studies {\n    padding-right: 10px;\n}\n#case-studies h2 {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n\n}\n#case-studies:hover {\n    cursor: pointer;\n}\n#parent-container-5 {\nbackground-color: var(--secondary-text-color);\nborder-radius: 7px;\n    \n}\n#parent-container-5 button {\nwidth: 100%;\n    background-color: var(--neon-green-color);\n    color: var(--main-text-color);\n    border: none;\n    border-radius: 8px;\n    align-self: flex-start;\n    box-shadow: var(--card-items-box-shadow);\n    transition: background-color 0.3s ease;\n}\n#parent-container-5 button:hover {\n    background-color: #007bffeb;\n    \n    \n}\n#parent-container-5 h2 {\ntext-align: left;\n}\n\n.accordion-containers {\n    color: var(--main-bg-color);\n    color: var(--main-text-color);\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: flex-start;\n    padding: 50px 10px 100px;\n    row-gap: 25px;\n    \n    width: 100%;\n}\n.accordion-items {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    row-gap: 15px;\n    width: 100%;\n    \n}\n.accordion-containers button {    \n    \n    border-radius: 8px;\n    border: none;\n    box-shadow: var(--card-items-box-shadow);\n    \n}\n\n.accordion-questions {\n    background-color: var(--main-bg-color);\n    color: var(--main-text-color);\n    width: 100%;\n    padding: 25px 10px 25px 0;\n    text-align: left;\n    border: none;\n    box-shadow: var(--card-items-box-shadow);\n\n}\n.accordion-questions h3 {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    column-gap: 10px;\n}\n.accordion-questions:hover {\n    \n    background-color: var(--neon-green-color);\n    background-color: var(--light-gray-color);\n    cursor: pointer;\n    \n}\n.accordion-answers {\n    padding: 20px 0 40px;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    row-gap: 50px;\n}\n.content-sections {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: flex-start;\n    row-gap: 15px;\n    \n}\n#parent-container-6 {\n    text-align: center;\n    padding: 100px 0;\n    background-color: var(--secondary-text-color);\n}\n#parent-container-6 img {\n    border-radius: 40%;\n    max-width: 75px;\n    padding: 4px;\n}\n.socials-containers {\n    display: flex;\n    flex-direction: row;\n    margin: 25px 0;\n    \n}\n.socials-wrapper {\n    padding: 5px;\n    margin: 2.5px;\n    cursor: pointer;\n    \n}\n.socials-wrapper img {\n    /* background-color: var(--neon-green-color); */\n    width: 35px;\n    \n}\n.link-tree-containers {\n    width: 100%;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: stretch;\n    row-gap: 5px;\n    \n\n    \n}\n.link-tree-wrappers {\n    background-color: var(--main-bg-color);\n    cursor: pointer;\n    border-radius: 5px;\n}\n.link-tree-wrappers a{\n    display: flex;\n    flex-direction: row;\n    justify-content:  flex-start;\n    align-items: center;\n    column-gap: 100px;\n    text-decoration: none;\n    cursor: pointer;\n    color: var(--main-text-color);\n    padding: 10px 0;\n    text-align: left;\n}\n.link-tree-wrappers a img {\n    max-width: 50px;\n    max-height: 50px;\nborder-radius: 1px;\n    \n}\n#parent-container-7 {\n    padding: 0;\n    margin: 0;\nborder-radius: 40px;\n    height: 146px;\n    \n}\n.bg-containers {\n    /* background-color: var(--neon-green-color); */\n    position: absolute;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    height: 100%;\n    transform: translateY(-1%);\n    z-index: -9;\n    \n    \n    \n    \n    \n}\n#loading-screen {\n    position: fixed;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\nbackground-color: var(--main-bg-color);\nanimation: curtainOpen 5s ease forwards; /* Apply the curtain animation */\nz-index: 1000;\n\n}\n#loading-screen img {\n    display: block;\n    margin: auto;\n    width: 250px;\n    height: 250px;\n    \n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n}\n@keyframes curtainOpen {\n    from {\n        height: 100%;\n    }\n    to {\n        height: 0;\n    }\n}\n#bg-container-2 {\n    width: 100%;\n    height: 100%;\n    opacity: 1;\n    \n}\n\n@media (min-width: 768px) {\n    :root {\n        --primary-font-size: 18px;\n    }\n    body, html {\n        font-size: var(--primary-font-size);\n        /* background-color: pink; */\n    }\n    h1 {\n        font-size: 2.5em; /* 45px */\n    }\n    \n    h2 {\n        font-size: 2em; /* 36px */\n    }\n    \n    h3 {\n        font-size: 1.5; /* 31.5px */\n    }\n    \n    h4 {\n        font-size: 1.25em; /* 27px */\n    }\n    \n    h5 {\n        font-size: 1em; /* 22.5px */\n    }\n    \n    h6 {\n        font-size: 1em; /* 18px */\n    }\n\n    .parent-containers {\n        padding-left: 10px;\n        padding-right: 10px;\n    }\n\n    #parent-container-1 {\n        padding-left: 100px;\n        max-height: 100vh;\n    }\n.bg-containers {\n    /* background-color: var(--neon-green-color); */\n    /* background-position: 200px -100px; */\n    background-size: contain;\n    background-position: right center;\n    \n    \n    \n\n}\n    .ctas {\n        width: 100%;\n        padding: 10px 20px;\n    }\n\n    .education-cards {\n        flex: 1 0 400px; \n        \n        \n    }\n\n    .accordion-containers {\n        padding: 20px 10px 50px;\n    }\n\n    .accordion-questions {\n        padding: 15px 10px 15px 0;\n    }\n\n    .accordion-answers {\n        padding: 10px 0 20px;\n    }\n\n    .socials-wrapper img {\n        width: 40px;\n    }\n\n    .link-tree-wrappers a {\n        column-gap: 50px;\n    }\n\n    .link-tree-wrappers a img {\n        max-width: 80px;\n        max-height: 80px;\n    }\n    .card-containers {\n        flex-direction: row;\n        justify-content: space-evenly;\n        align-items: center;\n        flex-wrap: wrap;\n        column-gap: 25px;\n    }\n    #parent-container-4 {\nbackground-color: var(--secondary-text-color);\n\n    }\n\n    .experience-parent-containers {\n        display: flex;\n        flex-direction: row;\n        justify-content: center;\n        column-gap:0.5%;\n        align-items: stretch;\nflex-wrap: wrap;\n\n    }\n    .section-4-card-containers {\n        flex: 1 1 300px; /* Start with a width of 300px and allow to grow */\n        max-width: 400px;\n        background-color: var(--main-bg-color);\n        \n    }\n    .link-tree-containers {\nwidth: 80%;\n    }\n    #parent-container-2 {\n        justify-content: flex-start;\n        padding-left: 100px;\n    padding-right: 100px;    \n    \n    \n\n    }\n \n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://pedro/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://pedro/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://pedro/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://pedro/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://pedro/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://pedro/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://pedro/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://pedro/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://pedro/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://pedro/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _landing_page_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./landing-page.js */ \"./src/landing-page.js\");\n\n\n\n\n document.body.appendChild((0,_landing_page_js__WEBPACK_IMPORTED_MODULE_1__.onPageLoadScreen)());\n  document.body.appendChild((0,_landing_page_js__WEBPACK_IMPORTED_MODULE_1__.section1)());\n  document.body.appendChild((0,_landing_page_js__WEBPACK_IMPORTED_MODULE_1__.section6)());\n  document.body.appendChild((0,_landing_page_js__WEBPACK_IMPORTED_MODULE_1__.linkedInBannerSection)());\n  // document.body.appendChild(section2());\n  // document.body.appendChild(section3());\n  // document.body.appendChild(section4());\n  // document.body.appendChild(section5());\n  \n    \n\n  document.addEventListener(\"DOMContentLoaded\", function() {\n    const loadingScreen = document.getElementById(\"loading-screen\");\n    // const mainContent = document.getElementById(\"main-content\");\n\n    // Show the loading screen for 3 seconds\n    setTimeout(function() {\n        loadingScreen.style.display = \"none\"; // Hide the loading screen\n        document.body.style.overflow = \"auto\";\n        document.documentElement.style.overflow = \"auto\";\n        // mainContent.style.display = \"block\"; // Show the main content\n\n        // Set focus on the first container element\n        const firstContainer = document.querySelector(\"#parent-container-1\");\n        if (firstContainer) {\n            firstContainer.setAttribute(\"tabindex\", \"-1\"); // Make it focusable\n            firstContainer.focus();\n        }\n    }, 2000); // 3000 milliseconds = 3 seconds\n});\n\n\n\ndocument.querySelectorAll('.accordion-questions').forEach(question => {\n    question.addEventListener('click', () => {\n      const firstChild = question.firstElementChild;\n        const answer = question.nextElementSibling;\n        if (answer.style.display === 'none') {\n          firstChild.lastChild.innerHTML = \"-\";\n          question.setAttribute('aria-expanded', 'true');\n            answer.style.display = 'flex';\n        }else {\n          firstChild.lastChild.innerHTML = \"+\";\n            question.setAttribute('aria-expanded', 'false');\n        answer.style.display = 'none';\n        }\n    });\n}\n)\nconst caseStudiesButton = document.getElementById('case-studies');\ncaseStudiesButton.addEventListener('click', () => {\n  const accordionContainer = document.getElementById('accordion-container-1');  \n  const firstChild = caseStudiesButton.firstElementChild.firstElementChild;\n  if(accordionContainer.style.display === 'none') {\n    accordionContainer.style.display = 'flex';\n    firstChild.innerHTML = \"Case Studies<span>-</span>\";\n\n  } else {\n    accordionContainer.style.display = 'none';\n    firstChild.innerHTML = \"Case Studies<span>+</span>\";\n  \n}\n})\n\nconst expandables = document.querySelectorAll('.expandables');\n\nexpandables.forEach(expandable => {\n  expandable.addEventListener('click', () => {\n    const list = expandable.nextElementSibling;\n    list.setAttribute('aria-hidden', 'false');\n    list.classList.toggle('hidden');\n    expandable.textContent = list.classList.contains('hidden') ? 'Show Details' : 'Hide Details';\n    list.classList.contains('hidden') ? list.setAttribute('aria-hidden', 'true') : list.setAttribute('aria-hidden', 'false');\n    \n\n  });\n});\n// parallax effect\nwindow.addEventListener('scroll', function() {\n  const parallax = document.querySelector('.bg-containers');\n  let scrollPosition = window.pageYOffset;\n  parallax.style.transform = 'translateY(' + scrollPosition * 0.5 + 'px)';\n});\n\n\n\n// Intersection Observer API for animating elements on scroll section 3\ndocument.addEventListener(\"DOMContentLoaded\", function() {\n  const cardItems = document.querySelectorAll(\".card-items\");\n\n  const observer = new IntersectionObserver((entries) => {\n      entries.forEach(entry => {\n          if (entry.isIntersecting) {\n              entry.target.style.opacity = 1;\n              entry.target.style.transform = 'translateX(0)';\n              entry.target.style.transition = 'transform 0.5s ease-out, opacity 0.5s ease-out';\n              observer.unobserve(entry.target); // Stop observing once the animation is applied\n          }\n      });\n  }, {\n      threshold: 0.7 // Trigger when 20% of the element is visible\n  });\n\n  cardItems.forEach(card => {\n    card.style.opacity = 0;\n    card.style.transform = 'translateX(-100px)';\n    observer.observe(card);\n  });\n});\n\n\n\ndocument.addEventListener(\"DOMContentLoaded\", function() {\n  const cardItems = document.querySelectorAll(\".section-4-card-containers\");\n\n  const observer = new IntersectionObserver((entries) => {\n      entries.forEach(entry => {\n          if (entry.isIntersecting) {\n              entry.target.style.opacity = 1;\n              entry.target.style.transform = 'translateX(0';\n              entry.target.style.transition = 'transform 0.5s ease-out, opacity 0.5s ease-out';\n              observer.unobserve(entry.target); // Stop observing once the animation is applied\n          }\n      });\n  }, {\n      threshold: 0.2 // Trigger when 20% of the element is visible\n  });\n\n  cardItems.forEach(card => {\n    card.style.opacity = 0;\n    card.style.transform = 'translateX(-100px)';\n    observer.observe(card);\n  });\n})\n\n\n\n\n//# sourceURL=webpack://pedro/./src/index.js?");

/***/ }),

/***/ "./src/landing-page.js":
/*!*****************************!*\
  !*** ./src/landing-page.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   linkedInBannerSection: () => (/* binding */ linkedInBannerSection),\n/* harmony export */   onPageLoadScreen: () => (/* binding */ onPageLoadScreen),\n/* harmony export */   section1: () => (/* binding */ section1),\n/* harmony export */   section2: () => (/* binding */ section2),\n/* harmony export */   section3: () => (/* binding */ section3),\n/* harmony export */   section4: () => (/* binding */ section4),\n/* harmony export */   section5: () => (/* binding */ section5),\n/* harmony export */   section6: () => (/* binding */ section6)\n/* harmony export */ });\n/* harmony import */ var _pedro_1_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pedro-1.png */ \"./src/pedro-1.png\");\n/* harmony import */ var _linkedin_banner_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./linkedin-banner.png */ \"./src/linkedin-banner.png\");\n/* harmony import */ var _skills_icon_1_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./skills-icon-1.png */ \"./src/skills-icon-1.png\");\n/* harmony import */ var _skills_icon_2_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./skills-icon-2.png */ \"./src/skills-icon-2.png\");\n/* harmony import */ var _skills_icon_3_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./skills-icon-3.png */ \"./src/skills-icon-3.png\");\n/* harmony import */ var _skills_icon_4_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./skills-icon-4.png */ \"./src/skills-icon-4.png\");\n/* harmony import */ var _skills_icon_5_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./skills-icon-5.png */ \"./src/skills-icon-5.png\");\n/* harmony import */ var _skills_icon_6_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./skills-icon-6.png */ \"./src/skills-icon-6.png\");\n/* harmony import */ var _skills_icon_7_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./skills-icon-7.png */ \"./src/skills-icon-7.png\");\n/* harmony import */ var _skills_icon_8_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./skills-icon-8.png */ \"./src/skills-icon-8.png\");\n/* harmony import */ var _skills_icon_9_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./skills-icon-9.png */ \"./src/skills-icon-9.png\");\n/* harmony import */ var _skills_icon_10_png__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./skills-icon-10.png */ \"./src/skills-icon-10.png\");\n/* harmony import */ var _pedro_2_jpg__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pedro-2.jpg */ \"./src/pedro-2.jpg\");\n/* harmony import */ var _education_1_png__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./education-1.png */ \"./src/education-1.png\");\n/* harmony import */ var _education_2_png__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./education-2.png */ \"./src/education-2.png\");\n/* harmony import */ var _education_3_png__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./education-3.png */ \"./src/education-3.png\");\n/* harmony import */ var _linkedin_png__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./linkedin.png */ \"./src/linkedin.png\");\n/* harmony import */ var _line_png__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./line.png */ \"./src/line.png\");\n/* harmony import */ var _whatsapp_png__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./whatsapp.png */ \"./src/whatsapp.png\");\n/* harmony import */ var _viber_png__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./viber.png */ \"./src/viber.png\");\n/* harmony import */ var _instagram_png__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./instagram.png */ \"./src/instagram.png\");\n/* harmony import */ var _x_png__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./x.png */ \"./src/x.png\");\n/* harmony import */ var _email_png__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./email.png */ \"./src/email.png\");\n/* harmony import */ var _linktree_1_png__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./linktree-1.png */ \"./src/linktree-1.png\");\n/* harmony import */ var _linktree_2_png__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./linktree-2.png */ \"./src/linktree-2.png\");\n/* harmony import */ var _linktree_3_png__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./linktree-3.png */ \"./src/linktree-3.png\");\n/* harmony import */ var _linktree_4_png__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./linktree-4.png */ \"./src/linktree-4.png\");\n/* harmony import */ var _linktree_5_png__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./linktree-5.png */ \"./src/linktree-5.png\");\n/* harmony import */ var _linktree_6_png__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./linktree-6.png */ \"./src/linktree-6.png\");\n/* harmony import */ var _linktree_7_png__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./linktree-7.png */ \"./src/linktree-7.png\");\n/* harmony import */ var _linktree_8_png__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./linktree-8.png */ \"./src/linktree-8.png\");\n/* harmony import */ var _linktree_9_png__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./linktree-9.png */ \"./src/linktree-9.png\");\n/* harmony import */ var _linktree_10_png__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./linktree-10.png */ \"./src/linktree-10.png\");\n/* harmony import */ var _hochdorf_png__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./hochdorf.png */ \"./src/hochdorf.png\");\n/* harmony import */ var _hero_1_png__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./hero-1.png */ \"./src/hero-1.png\");\n/* harmony import */ var _hero_2_png__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./hero-2.png */ \"./src/hero-2.png\");\n/* harmony import */ var _hero_3_png__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./hero-3.png */ \"./src/hero-3.png\");\n/* harmony import */ var _pg_logo_PNG__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./pg-logo.PNG */ \"./src/pg-logo.PNG\");\n/* harmony import */ var _pedro_3_jpg__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./pedro-3.jpg */ \"./src/pedro-3.jpg\");\n\n \n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n// hero section 1\nconst section1 = () => {\n\n    const parentContainer = document.createElement(\"div\");\n    parentContainer.className = \"parent-containers\";\n    parentContainer.id = \"parent-container-1\";\n\n    const bgContainer = document.createElement(\"div\");\n    bgContainer.className = \"bg-containers\";\n    \n    // Set the background image using the imported image\nbgContainer.style.backgroundImage = `url(${_pedro_1_png__WEBPACK_IMPORTED_MODULE_0__})`;\n\n\nif (window.innerWidth < 768) {\n    bgContainer.style.backgroundSize = \"contain\"; // Ensures the image covers the container\nbgContainer.style.backgroundPosition = \"50px 0\"; // Centers the image\n} else {\n    bgContainer.style.backgroundSize = \"contain\"; // Ensures the image covers the container on larger screens\n    bgContainer.style.backgroundPosition = \"right center\"; // Centers the image\n}\nbgContainer.style.backgroundRepeat = \"no-repeat\"; // Prevents the image from repeating\n// bgContainer.style.backgroundAttachment = \"fixed\"; // Ensures the image remains fixed in the viewport\n\nconst gradientOverlay = document.createElement(\"div\");\ngradientOverlay.className = \"gradient-overlays\";\n\nbgContainer.appendChild(gradientOverlay);\n\n    const textContainer = document.createElement(\"div\");\ntextContainer.className = \"text-containers\";\ntextContainer.id = \"text-container-1\";\nconst h1 = document.createElement(\"h1\");\nh1.innerHTML = \"Hey! I'm<br>Cliffton Kaewkarn\";\nconst p = document.createElement(\"p\");\np.innerHTML = \"I'm a Web Developer<br><br>With strong fundamentals in HTML, CSS & Javascript.<br><br>I value clean code, user-friendly design, and efficient problem-solving.<br><br>Let's build something amazing together!\";\nconst cta = document.createElement(\"a\");\ncta.href = \"https://www.linkedin.com/in/cliffton-kaewkarn-5ba6b1203?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app\";\ncta.target = \"_blank\";\ncta.className = \"ctas\";\ncta.innerHTML = \"View My GitHub Profile\";\n\ntextContainer.appendChild(h1);\ntextContainer.appendChild(p);\ntextContainer.appendChild(cta);\n\n\n\nparentContainer.appendChild(textContainer);\nparentContainer.appendChild(bgContainer);\n\n\nreturn parentContainer;\n}\nconst linkedInBannerSection = () => {\nconst parentContainer = createParentContainer(\"parent-container-7\");\nparentContainer.style.backgroundImage = `url(${_linkedin_banner_png__WEBPACK_IMPORTED_MODULE_1__})`;\nparentContainer.style.backgroundSize = \"contain\"; \nparentContainer.style.backgroundPosition = \"center\";\nparentContainer.style.backgroundRepeat = \"no-repeat\";\n\n    \n    return parentContainer;\n}\n// section 2\nconst section2 = () => {\n    const parentContainer = document.createElement(\"div\");\n    parentContainer.className = \"parent-containers\";\n    parentContainer.id = \"parent-container-2\";\n\n    parentContainer.style.backgroundImage = `url(${_pedro_3_jpg__WEBPACK_IMPORTED_MODULE_38__})`;\n    if (window.innerWidth < 768) {\n        parentContainer.style.backgroundSize = \"cover\";\n        parentContainer.style.backgroundPosition = \"center\";\n    \n    } else {\n        parentContainer.style.backgroundSize = \"contain\";\n        parentContainer.style.backgroundPosition = \"right\";\n    }\n    parentContainer.style.backgroundRepeat = \"no-repeat\";\n    \n\n    const textContainer = document.createElement(\"div\");\n    textContainer.className = \"text-containers\";\n    textContainer.id = \"text-container-2\";\n    // const h2 = document.createElement(\"h2\");\n    // h2.innerHTML = \"Who I Am & What I Do\";\n    const h2 = createH2Component(\"Who I Am & What I Do\");\n    const p = document.createElement(\"p\");\n    p.innerHTML = \"<span class='span-bolds'>My name is Pedro Garda.</span><br>Sales Director & Consumer Goods with<br>+10 years directing market expansion in FMCG.\";\n    const ul = document.createElement(\"ul\");\n    const li1 = document.createElement(\"li\");\n    li1.innerHTML = \"P&L Management\";\n    const li2 = document.createElement(\"li\");\n    li2.innerHTML = \"Go-to Market Strategies\";\n    const li3 = document.createElement(\"li\");\n    li3.innerHTML = \"Customer Metrics Assesment\";\n    const li4 = document.createElement(\"li\");\n    li4.innerHTML = \"Team Leadership & Mentorship\";\n\n    ul.appendChild(li1);\n    ul.appendChild(li2);\n    ul.appendChild(li3);\n    ul.appendChild(li4);\n\n    const expandable = document.createElement(\"p\");\n    expandable.className = \"expandables\";\n    expandable.innerHTML = \"Read more\";\n\nconst expandableContainer = document.createElement(\"div\");\nexpandableContainer.className = \"expandable-container hidden\";\n// expandableContainer.setAttribute('aria-hidden', 'true');\n\nconst expandableParagraph1 = `\n<p>As a highly accomplished Sales Director with over 18 years of experience in the FMCG industry, I have a proven track record of driving business growth and profitability. My expertise lies in steering business direction, leading new business development, and orchestrating strategic branding and marketing initiatives for FMCG, Retailers, Distributors, and E-commerce companies. My leadership has consistently fueled growth across these sectors.</p>\n<p>In addition to my role as a Sales Director, I have extensive experience in Interim Management and Consulting. I specialize in evaluating current business positions, customer metrics, and P&L activities to ensure alignment with growth targets. My unique ability to create and innovate cutting-edge strategic plans has driven superior profitability and market expansion.</p>\n<p>My leadership style is adaptive and tailored to the needs of the team. I primarily employ a delegative approach, emphasizing trust and autonomy. For apprentices, I offer clear guidance through a more directive style. As the team develops, I transition to a delegating style to encourage autonomy. With skilled members, I use a coaching approach to foster growth, and for experts, an empowering style allows them to thrive independently. This tailored approach optimizes team performance at every stage of development.</p>\n<p>I have successfully overseen a team of five members directly at a leading Swiss nutrition company and directly managed an Area Sales Manager at a global food company in Hong Kong. Additionally, I have managed approximately 300 indirect distributor staff across Asia.</p>\n<p>My passion lies in cultivating robust, sustainable, and mutually beneficial relationships with both internal and external stakeholders. This dedication ensures that accounts remain optimized and profitable, contributing to the overall success of the organization.</p>\n<p>Whether in a full-time leadership role or as an interim manager and consultant, I am committed to driving excellence and achieving outstanding results.</p>\n`;\n\nexpandableContainer.innerHTML = expandableParagraph1;\n\n\n\n    textContainer.appendChild(h2);\n    textContainer.appendChild(p);\n    textContainer.appendChild(ul);\n    textContainer.appendChild(expandable);\n    textContainer.appendChild(expandableContainer);\n    \n\n    parentContainer.appendChild(textContainer);\n    \n\n\n    return parentContainer;\n}\n\nconst section3 = () => {\n    const parentContainer = document.createElement(\"div\");\n    parentContainer.className = \"parent-containers\";\n    parentContainer.id = \"parent-container-3\";\n\n    const cardContainer = document.createElement(\"div\");\n    cardContainer.className = \"card-containers\";\n\n    const cardItem1 = createCardItem(_skills_icon_1_png__WEBPACK_IMPORTED_MODULE_2__, \"Strategic Branding & Growth\");\n    const cardItem2 = createCardItem(_skills_icon_2_png__WEBPACK_IMPORTED_MODULE_3__, \"P&L Growth & Financial Performance\");\n    const cardItem3 = createCardItem(_skills_icon_3_png__WEBPACK_IMPORTED_MODULE_4__, \"E-Commerce & Digital Excellence\");\n    const cardItem4 = createCardItem(_skills_icon_4_png__WEBPACK_IMPORTED_MODULE_5__, \"Brand Activation & Launches\");\n    const cardItem5 = createCardItem(_skills_icon_5_png__WEBPACK_IMPORTED_MODULE_6__, \"Senior Team Recruitment & Development\");\n    const cardItem6 = createCardItem(_skills_icon_6_png__WEBPACK_IMPORTED_MODULE_7__, \"Distributor, Partner & Agent Management\");\n    const cardItem7 = createCardItem(_skills_icon_7_png__WEBPACK_IMPORTED_MODULE_8__, \"Local & International Regulatory Compliance\");\n    const cardItem8 = createCardItem(_skills_icon_8_png__WEBPACK_IMPORTED_MODULE_9__, \"Merchandising Partnerships & Seasonality\");\n    const cardItem9 = createCardItem(_skills_icon_9_png__WEBPACK_IMPORTED_MODULE_10__, \"Route-To-Market Strategies\");\n    const cardItem10 = createCardItem(_skills_icon_10_png__WEBPACK_IMPORTED_MODULE_11__, \"Project Management Certified Agile Associate IPMA®\");\n\n\n    cardContainer.appendChild(cardItem1);\n    cardContainer.appendChild(cardItem2);\n    cardContainer.appendChild(cardItem3);\n    cardContainer.appendChild(cardItem4);\n    cardContainer.appendChild(cardItem5);\n    cardContainer.appendChild(cardItem6);\n    cardContainer.appendChild(cardItem7);\n    cardContainer.appendChild(cardItem8);\n    cardContainer.appendChild(cardItem9);\n    cardContainer.appendChild(cardItem10);\n    \n\n    parentContainer.appendChild(cardContainer);\n    \n\nreturn parentContainer;\n}\n\nconst createCardItem = (icon, innerHtml) => {\n    const cardItem = document.createElement(\"div\");\n    cardItem.className = \"card-items\";\n\nconst image = document.createElement(\"img\");\nimage.src = icon;\n\n    const h3 = document.createElement(\"h3\");\n    h3.innerHTML = innerHtml;\n    \n    cardItem.appendChild(image);\n    cardItem.appendChild(h3);\n\n    return cardItem;\n}\n\nconst section4 = () => {\n    const parentContainer = document.createElement(\"div\");\n    parentContainer.className = \"parent-containers\";\n    parentContainer.id = \"parent-container-4\";\n\n    const img1 = document.createElement(\"img\");\n    img1.src = _pedro_2_jpg__WEBPACK_IMPORTED_MODULE_12__;\n    img1.alt = \"Pedro Garda\";\n    img1.id = \"pedro-2\";\n    \n    const heading1 = createH2Component(\"Career History\");\n    \n    const experienceParentContainer = document.createElement(\"div\");\n    experienceParentContainer.className = \"experience-parent-containers\";\n    \n    const card1ExpandableContent = `   \n        <ul>\n            <li><strong>International Expansion:</strong> Spearheaded the international expansion of Bimbosan and Babina, successfully launching in multiple new markets including Hong Kong, Macao, Cambodia, and Greece for 2021 and 2022.</li>\n            <li><strong>Project Management:</strong> Led project management initiatives for both branded and private label businesses, with clearly defined priorities and a strategic approach tailored to different projects.</li>\n            <li><strong>Team Leadership:</strong> Directly managed and inspired a global team of five sales members, fostering a collaborative and high-performing environment.</li>\n            <li><strong>Strategic Planning:</strong> Developed and executed aligned strategic plans to drive market penetration and brand growth across diverse regions.</li>\n            <li><strong>Market Launch:</strong> Orchestrated comprehensive launch plans, ensuring seamless market entry and brand activation in new territories.</li>\n            <li><strong>Cross-Functional Collaboration:</strong> Worked closely with various departments to ensure cohesive and effective implementation of strategic initiatives.</li>\n            <li><strong>Performance Metrics:</strong> Monitored and analyzed key performance indicators to optimize strategies and achieve targeted growth objectives.</li>\n        </ul>\n        <p>My tenure at Hochdorf Swiss Nutrition AG was marked by significant achievements in market expansion, brand growth, and strategic leadership, contributing to the overall success and reputation of the company.</p>\n\n\n    `;\n    const card1 = createSection4CardVersion2(_hochdorf_png__WEBPACK_IMPORTED_MODULE_33__, \"hochdorf\", \"Head of Sales Brand International\", \"Hochdorf Swiss Nutrition AG (Switzerland)\", \"May 2020 - July 2023\", \"As the Head of Sales Brand International at Hochdorf Swiss Nutrition AG, I reported directly to the CEO, leading the formulation and execution of strategic plans for the Baby Care division across regions such as China CBEC, APAC, LATAM, and EMEA. My responsibilities included managing the categories of Infant Milk and Baby Food, with a focus on the brands Bimbosan and Babina. Key achievements included:\", card1ExpandableContent);\n\n    const card2ExpandableContent = `\n    <ul>\n        <li><strong>P&L Improvement:</strong> Drove substantial improvements in the P&L of key countries, ensuring financial health and operational efficiency.</li>\n        <li><strong>Team Management:</strong> Oversaw 25 distributors and teams, delivering meticulous training to over 300 distributor staff across Asia to enhance performance and alignment.</li>\n        <li><strong>Multicultural Collaboration:</strong> Collaborated with diverse partners and stakeholders across five production sites in Switzerland, Germany, Spain, the UK, Egypt, and Turkey, managing various categories and brands within the Hero Group.</li>\n        <li><strong>Retail Strategy:</strong> Designed and executed a comprehensive retail strategy, focusing on expansion across Retail, Food Service, Hospitality, E-commerce, and Global Retail Duty-Free sectors.</li>\n        <li><strong>Market Expansion:</strong> Spearheaded market expansion initiatives, ensuring the brand's presence and growth in key Asian markets.</li>\n        <li><strong>Stakeholder Engagement:</strong> Built and maintained strong relationships with internal and external stakeholders to drive strategic initiatives and achieve business objectives.</li>\n        <li><strong>Performance Optimization:</strong> Continuously monitored and optimized performance metrics to ensure alignment with growth targets and strategic goals.</li>\n    </ul>\n    <p>My tenure at Hero AG was characterized by significant advancements in market expansion, financial performance, and strategic leadership, contributing to the company's success and market position.</p>\n\n    ` \n\n    const card2 = createSection4CardVersion2(\n        _hero_1_png__WEBPACK_IMPORTED_MODULE_34__,\n        \"hero-1\",\n        \"Sales Director (Asia Pacific)\",\n        \"Hero AG (Hong Kong)\",\n        \"July 2019 - May 2020\",\n\"As the Sales Director for Asia at Hero Group, I reported directly to the Vice-President of Global Export, steering a comprehensive portfolio of responsibilities. My role extended beyond achieving targets in P&L, A&P, sales, business development, and marketing to encompass the intricate design and execution of our retail strategy. I managed various categories including Infant Milk, Baby Food, Jams, Cereal and Energy Bars, Organic Baby Food, and Juices, with a focus on brands such as Hero, Organix, Hero Baby, Schwartau, and Corny. Key achievements included:\",\ncard2ExpandableContent\n\n    );\n    const card3ExpandableContent = `\n    <p><strong>Operational Excellence:</strong> Aided the Hong Kong Office in increasing operational productivity and turnover, delivering double-digit growth.</p>\n    <p><strong>Regional Growth:</strong> Took responsibility for APAC for all brands and growth, achieving significant increases: +11% for Indonesia, +66% for the Philippines, +15% for Australia, +730% for Vietnam, +58% for Cambodia, and +126% for the Maldives.</p>\n    <p><strong>Brand Launch:</strong> Operated as Project Leader for the launch of the Hero Baby brand, overseeing all strategic activities including regulatory compliance, road-to-market strategies, pricing, category strategy, channel strategy, product portfolio strategy, trade, and marketing activities. Additionally, provided training to the distribution team to ensure successful market entry and brand activation.</p>\n    <p>My tenure at Hero AG was marked by substantial market growth, strategic brand management, and operational excellence, contributing to the company's success and market leadership in the APAC region.</p>\n\n    `;\nconst card3 = createSection4CardVersion2(\n    _hero_2_png__WEBPACK_IMPORTED_MODULE_35__,\n    \"hero-2\",\n    \"Regional Sales Manager, APAC\",\n    \"Hero AG, (Hong Kong)\",\n    \"July 2015 - June 2019\",\n    \"As the Regional Sales Manager for APAC at Hero AG, reporting to the Export Director, I was responsible for business delivery across APAC countries, operating from Hong Kong. I represented all brands of the Hero Group, including Hero (Jams), Hero Baby, Organix (Baby Food), Corny (Healthy Snacks), and Schwartau (Jams). Key achievements included:\",\n    card3ExpandableContent\n\n);\nconst card4ExpandableContent = `\n    <ul>\n        <li><strong>Business Development:</strong> Developed business directly with retailers and indirectly with distributors, managing a €3 million portfolio.</li>\n        <li><strong>Market Launch:</strong> Successfully launched the Hero Baby brand in Chile and Peru, securing placements in major modern trade accounts such as Walmart, Cencosud, Unimart, and Tottus Supermarket.</li>\n        <li><strong>Strategic Planning:</strong> Implemented strategic plans to drive market penetration and brand growth across LATAM and APAC regions.</li>\n        <li><strong>Stakeholder Engagement:</strong> Built and maintained strong relationships with key retailers and distributors to ensure successful market entry and sustained growth.</li>\n    </ul>\n    <p>My tenure at Hero AG was characterized by strategic market entry, brand growth, and effective stakeholder management, contributing to the company's success and market expansion in LATAM and APAC regions.</p>\n`;\n\nconst card4 = createSection4CardVersion2(\n    _hero_3_png__WEBPACK_IMPORTED_MODULE_36__,\n    \"hero-3\",\n    \"Export Key Account Manager (LATAM & APAC)\",\n    \"Hero AG (Spain)\",\n    \"January 2012 - June 2015\",\n    \"As the Export Key Account Manager for LATAM and APAC at Hero AG, reporting to the Export Director, I was responsible for managing the Hero Jams and Baby Food categories, operating from Murcia, Spain. Key achievements included:\",\ncard4ExpandableContent    \n);\n\nexperienceParentContainer.appendChild(card1)\nexperienceParentContainer.appendChild(card2)\nexperienceParentContainer.appendChild(card3)\nexperienceParentContainer.appendChild(card4)\n\nconst relevantEarlierCareerTitle = createH2Component(\"Relevant Earlier Career\")\n\nconst relevantEarlierCareerContainer = document.createElement(\"div\");\nrelevantEarlierCareerContainer.className = \"section-4-card-containers\";\nrelevantEarlierCareerContainer.id = \"relevant-earlier-career\";\nconst relevantEarlierCareerContent = `\n        <ul class=\"\">\n            <li><time datetime=\"2010-03\">03/2010</time> - <time datetime=\"2011-12\">12/2011</time>: SP Group: Export Business Development (ES)</li>\n            <li><time datetime=\"2005-01\">01/2005</time> - <time datetime=\"2009-02\">02/2009</time>: Brioche Pasquier Recondo S.L.: Sales Manager / Regional KAM (ES)</li>\n            <li><time datetime=\"2001-09\">09/2001</time> - <time datetime=\"2004-12\">12/2004</time>: Elios Shipping S.L Forwarding Agency: Sales Manager (ES)</li>\n            <li><time datetime=\"2001-02\">02/2001</time> - <time datetime=\"2001-08\">08/2001</time>: Safetrading S.L.: Financial Advisor (ES)</li>\n        </ul>\n`\n\nrelevantEarlierCareerContainer.innerHTML = relevantEarlierCareerContent;\n\n\n\nconst heading2 = createH2Component(\"Education\");\n\nconst educationCardsContainer = document.createElement(\"div\");\neducationCardsContainer.id = 'education-card-container';\n\nconst education1 = createEducationCard(_education_1_png__WEBPACK_IMPORTED_MODULE_13__, \"<span class='span-bolds'>Degree in Business Administration</span><br>Universidad Nacional del Centro<br>Argentina<br>2000\");\nconst education2 = createEducationCard(_education_2_png__WEBPACK_IMPORTED_MODULE_14__, \"<span class='span-bolds'>Masters Degree in Marketing & Sales Directorship</span><br>ESIC Business School<br>Spain<br>2007\");\nconst education3 = createEducationCard(_education_3_png__WEBPACK_IMPORTED_MODULE_15__, \"<span class='span-bolds'>IPMA: Project Management Swiss CERTIFIED AGILE ASSOCIATE<br>IPMA®️ LEVEL D</span><br>2024\");\n\neducationCardsContainer.appendChild(education1);\neducationCardsContainer.appendChild(education2);\neducationCardsContainer.appendChild(education3);\n\nparentContainer.appendChild(img1);\nparentContainer.appendChild(heading1);\nparentContainer.appendChild(experienceParentContainer);\nparentContainer.appendChild(relevantEarlierCareerTitle);\nparentContainer.appendChild(relevantEarlierCareerContainer);\nparentContainer.appendChild(heading2);\nparentContainer.appendChild(educationCardsContainer);\n\n\n    return parentContainer;\n\n}\n// function createSection4Card(image,title, company, duration, description, bulletPoints) {\n    \n//     const container = document.createElement(\"div\");\n//     container.className = \"section-4-card-containers\";\n    \n\n//     const imgContainer = document.createElement(\"div\");\n//     imgContainer.className = \"gradient-img-containers\";\n//     const img = document.createElement(\"img\");\n//     img.src = image;\n//     img.alt = company;\n//     img.ariaHidden = true;\n\n//     const gradientOverlay = document.createElement(\"div\");\n//     gradientOverlay.className = \"gradient-overlays\";\n\n//     imgContainer.appendChild(img);\n//     imgContainer.appendChild(gradientOverlay);\n\n//     const h3 = document.createElement(\"h3\");\n//     h3.innerHTML = title;\n\n//     const p1 = document.createElement(\"p\");\n//     p1.innerHTML = company;\n\n//     const p2 = document.createElement(\"p\");\n//     p2.innerHTML = duration;\n\n//     const p3 = document.createElement(\"p\");\n//     p3.innerHTML = description;\n\n//     const p4 = document.createElement(\"p\");\n//     p4.className = 'expandables';\n//     p4.innerHTML = \"Read more\";\n\n//     // Append the elements to the container\n//     container.appendChild(imgContainer);\n//     container.appendChild(h3);\n//     container.appendChild(p1);\n//     container.appendChild(p2);\n//     container.appendChild(p3);\n//     container.appendChild(p4);\n\n    \n// if (bulletPoints){\n//     const ul = document.createElement(\"ul\");\n//     ul.className = 'list hidden'\n//     ul.setAttribute('aria-hidden', 'true');\n//     bulletPoints.forEach((point) => {\n//         const li = document.createElement(\"li\");\n//         li.innerHTML = point;\n//         ul.appendChild(li);\n//     });\n//     container.appendChild(ul);\n// }\n\n//     return container;\n// }\nfunction createSection4CardVersion2(image, id, title, company, duration, description,  expandableContent) {\n    \n    const container = document.createElement(\"div\");\n    container.className = \"section-4-card-containers\";\n    container.id = id;\n\n    const imgContainer = document.createElement(\"div\");\n    imgContainer.className = \"gradient-img-containers\";\n    const img = document.createElement(\"img\");\n    img.src = image;\n    img.alt = company;\n    img.ariaHidden = true;\n\n    const gradientOverlay = document.createElement(\"div\");\n    gradientOverlay.className = \"gradient-overlays\";\n\n    imgContainer.appendChild(img);\n    imgContainer.appendChild(gradientOverlay);\n\n    const h3 = document.createElement(\"h3\");\n    h3.innerHTML = title;\n\n    const p1 = document.createElement(\"p\");\n    p1.innerHTML = company;\n\n    const p2 = document.createElement(\"p\");\n    p2.innerHTML = duration;\n\n    const p3 = document.createElement(\"p\");\n    p3.innerHTML = description;\n\n    const p4 = document.createElement(\"p\");\n    p4.className = 'expandables';\n    p4.innerHTML = \"Read more\";\n\n    // Append the elements to the container\n    container.appendChild(imgContainer);\n    container.appendChild(h3);\n    container.appendChild(p1);\n    container.appendChild(p2);\n    container.appendChild(p3);\n    container.appendChild(p4);\n\nconst expandableContainer = document.createElement(\"div\");\nexpandableContainer.className = \"list hidden\";\nexpandableContainer.setAttribute('aria-hidden', 'true');\nexpandableContainer.innerHTML = expandableContent;\n\n\n    container.appendChild(expandableContainer);\n\n\n    return container;\n}\n\n\n\n\nfunction createH2Component(innerHtml) {\n    const container = document.createElement(\"div\");\n    container.className = \"h2-containers\";\n    const h2 = document.createElement(\"h2\");\n    h2.innerHTML = innerHtml;\n\n    container.appendChild(h2);\n\n    return container\n}\nfunction createEducationCard(img,title) {\n    const card = document.createElement(\"div\");\n    card.className = \"education-cards\";\n\n    const imgContainer = document.createElement(\"div\");\n    const image = document.createElement(\"img\");\n    image.src = img;\n\n    imgContainer.appendChild(image);\n    \n\n    const h3 = document.createElement(\"h3\");\n    h3.innerHTML = title;\n\n    card.appendChild(imgContainer);\n    card.appendChild(h3);\n\n\n    return card;\n\n}\nconst section5 = () => {\n const parentContainer = createParentContainer('parent-container-5');   \n const button = document.createElement(\"button\");\n button.id = \"case-studies\";\n const h2 = createH2Component(\"Case Studies<span>+</span>\");\n\n \n\n button.appendChild(h2);\n\n const accordionContainer = createAccordionContainer('accordion-container-1');\n accordionContainer.style.display = \"none\";\n\n//  const accordionItem1 = createAccordionItem(\"Hochdorf Swiss Nutrition AG\", \"In response to the need for a three-year strategic plan for international sales at Hochdorf Swiss Nutrition, I, as the Head of Brand, collaborated with the CEO and the Board of Directors. The task involved defining five key development pillars for international sales. I repositioned the team by specialties, recruited a senior team for European Retail and identified target countries for product launches. I provided sales projections and enhanced the BABINA brand for LATAM/Macau markets. Additionally, I led an International Consultant project with 6 figures budget, to assess the launch for the Bimbosan Infant Milk brand in China, while measures were implemented to improve ROI, Advertising and Promotion (A&P) efficiency, and Cross-Border e-commerce. These efforts resulted in a significant boost in sales projections, successful penetration of the LATAM/Macau markets with the upgraded BABINA brand, and a streamlined approach to international sales. The integrated and scalable platform implemented under my leadership substantially increased ROI\");\n//  const accordionItem2 = createAccordionItem(\"Hochdorf Swiss Nutrition AG\",\"needed to upgrade Babina / launch Bimbosan in 3 countries in <2 years. As Sales Director, upgraded Babina for Asia and RTM to HK, MC, CBD markets. Aided external agent / Marketing team to upgrade brands to premium level; registered product, formula and brand in Macau; defined 3 markets for Bimbosan Premium Infant Milk launch; adapted labels to meet local regulations and compliance; and incorporated full Brand activation with PR events and Trade Marketing activities. Succeeded in growing Babina in Macau by + 25% and Bimbosan in Vietnam, H- Kong / Cambodia by +75%. ▪ Hero AG As the Sales Director at \");\n//  const accordionItem3 = createAccordionItem(\"Hero AG\", \"As the Sales Director at Hero AG, entrusted with steering the company's course in Asia (excluding China), I played a pivotal role in optimizing both the top and bottom lines. Implementing a comprehensive approach to accounts management and profit and loss (P&L) analysis, I successfully revitalized the three-year strategic plan. This initiative involved a dynamic response to identified white-spots in sales, profit, and new product launches. One of the key strategic enhancements was the professionalization of distributor management, a move that significantly augmented numeric distribution and amplified brand activation. Concurrently, I instituted a standard monthly reporting system, facilitating a more robust oversight of performance metrics. By strategically eliminating lean costs within the P&L structure, I achieved a streamlined and optimized Return on Investment (ROI). A noteworthy accomplishment was the substantial improvement in Advertising and Promotion (A&P) allocation, resulting in a remarkable boost in market share across various territories. Leveraging the STAR framework, I excelled in enhancing Integrated Distribution Network (IDN) by +35%, Sales Growth Network (SGN) by +25%, Japan (JPN) by +10%, Hong Kong (HK) by +12%, Philippines (PH) by +75%, and South Korea (SK) by +14%. In addition to my achievements at Hero AG, I have demonstrated leadership in managing key distributor relationships across Asia, such as SIMS Trading (HK), PT Pandurasa Kharisma (Ind), Sino Pacific trading (TH) among others, who deals with top international consumer brands. This experience underscores my ability to navigate complex market landscapes and contribute to the success of global enterprise\");\n const accordionItem1 = createAccordionItemVersion2('Strategic Leadership and Transformative Results',caseStudy1Array)\n    const accordionItem2 = createAccordionItemVersion2('Brand Transformation and Market Expansion',caseStudy2Array)\n    const accordionItem3 = createAccordionItemVersion2('Driving Growth and Optimization in Asia for a Global Swiss Multi-Brand Company',caseStudy3Array)\n    const accordionItem4 = createAccordionItemVersion2('Expanding Market Footprint for the Baby and Infant Milk Category',caseStudy4Array)\n    const accordionItem5 = createAccordionItemVersion2('Rebranding and Market Expansion for a Premium Food Brand',caseStudy5Array)\n    const accordionItem6 = createAccordionItemVersion2('Integrating and Optimizing Business Operations for a Premium Organic Brand',caseStudy6Array)\n\n \n accordionContainer.appendChild(accordionItem1);\n    accordionContainer.appendChild(accordionItem2);\n    accordionContainer.appendChild(accordionItem3);\n    accordionContainer.appendChild(accordionItem4);\n    accordionContainer.appendChild(accordionItem5);\n    accordionContainer.appendChild(accordionItem6);\n\n    parentContainer.appendChild(button);\n    parentContainer.appendChild(accordionContainer);\n\n    return parentContainer\n}\nfunction createAccordionItemVersion2(title,array) {\nconst container = document.createElement(\"div\");\ncontainer.className = \"accordion-items\";\n\nconst button = document.createElement(\"button\");\nbutton.className = \"accordion-questions\";\nbutton.setAttribute(\"aria-expanded\", \"false\");\nbutton.setAttribute(\"aria-controls\", \"accordion-answers\");\n\nconst h3 = document.createElement(\"h3\");\nh3.innerHTML = `${title}<span>+</span>`;\n\nbutton.appendChild(h3);\ncontainer.appendChild(button);\n\nconst answerContainer = document.createElement(\"div\");\nanswerContainer.className = \"accordion-answers\";\nanswerContainer.style.display = \"none\";    \n\n\narray.forEach(section => {\n    const sectionElement = createContentSection(section);\n    answerContainer.appendChild(sectionElement);\n\n    \n})\n\ncontainer.appendChild(answerContainer);\n\n\nreturn container;\n\n\n}\nconst caseStudy1Array= [\n    {\n        title: \"Strategic Leadership and Transformative Results\",\n        paragraphs: [\n            \"In my role as Head of Brand Sales in Baby Care International at a leading Swiss nutrition company, I was tasked with defining a comprehensive three-year strategic plan for the International Sales department. This plan was built on five key development pillars, each designed to drive growth and innovation.\"\n        ]\n    },\n    {\n        title: \"Pillar 1: Strengthening the Sales Team\",\n        paragraphs: [\n            \"I spearheaded the enhancement of the sales team by recruiting specialists and building a senior team to create and validate the roadmap for e-commerce and digital transformation. This included expanding the team with a new e-commerce specialist and a senior Key Account Manager (KAM) for retail in Europe.\"\n        ]\n    },\n    {\n        title: \"Pillar 2: Strategic Market Expansion\",\n        paragraphs: [\n            \"I identified strategic countries in Asia and Europe for launching branded products, complete with medium- and long-term sales projections. This strategic focus ensured that our market entry was well-planned and executed.\"\n        ]\n    },\n    {\n        title: \"Pillar 3: Brand Rebranding and Expansion\",\n        paragraphs: [\n            \"I led the rebranding and upgrade of a key brand to facilitate its rollout and expansion in LATAM and Macau. This initiative was crucial for increasing brand visibility and market penetration in these regions.\"\n        ]\n    },\n    {\n        title: \"Pillar 4: Exploring the Chinese Market\",\n        paragraphs: [\n            \"To assess the potential of launching our infant milk brand in China, I secured a $200,000 investment for a professional consultant. As a member of the steering committee, I provided strategic advice to the Board of Directors, ensuring that the road to market was well-defined and executed.\"\n        ]\n    },\n    {\n        title: \"Pillar 5: E-commerce Optimization\",\n        paragraphs: [\n            \"I focused on improving ROI and A&P efficiency for our e-commerce operations in China and Singapore. In China, we enhanced brand leadership in Cross Border E-commerce (CBEC). In Singapore, I set up an enabler platform (I Store I Send) to operate more efficiently, gaining new customers faster with better ROI.\"\n        ]\n    },\n    {\n        title: \"Results\",\n        paragraphs: [\n            \"Team Building: Successfully placed the sales team within the agreed deadline.\",\n            \"Market Strategy: Defined and allocated strategic countries to each KAM with clear goals and deadlines for 2022 and 2023.\",\n            \"Consultant Report: Completed the consultant report within the deadline, leading to timely decision-making.\",\n            \"Cost Efficiency: Achieved a 30% reduction in lean costs, allowing for increased investment in brand activation.\",\n            \"These strategic initiatives not only strengthened our market position but also drove significant growth and operational efficiency.\"\n        ]\n    }\n];\nconst caseStudy2Array = [\n    {\n        title: \"Brand Transformation and Market Expansion\",\n        paragraphs: [\n            \"As Head of Sales for Brand International at a prominent Swiss nutrition company, I was tasked with upgrading Swiss Premium Brand 1 and launching Swiss Premium Brand 2 in three strategic countries within two years. This ambitious project required a meticulous approach to branding, regulatory compliance, and market activation.\"\n        ]\n    },\n    {\n        title: \"Swiss Premium Brand 1 Upgrade\",\n        paragraphs: [\n            \"I collaborated with an external agency and the marketing team to elevate Swiss Premium Brand 1, giving it a premium look and feel tailored for the Asian market. This rebranding effort distinguished Swiss Premium Brand 1 from mainstream formulas and designs, positioning it as a high-end product. We successfully registered the product, formula, and brand in Macau, leading to a launch in 2022.\"\n        ]\n    },\n    {\n        title: \"Swiss Premium Brand 2 Market Launch\",\n        paragraphs: [\n            \"For Swiss Premium Brand 2, I identified three strategic markets for the launch of Swiss Premium Brand 2 Premium Infant Milk: Vietnam, Hong Kong, and Cambodia. We adapted the labels to comply with local regulations and ensured full compliance. The launch was supported by comprehensive brand activation, including PR events and trade marketing activities.\"\n        ]\n    },\n    {\n        title: \"Results\",\n        paragraphs: [\n            \"Swiss Premium Brand 1: The label was fully adapted and upgraded with a premium design, resulting in a successful launch in Macau and a remarkable 25% brand growth.\",\n            \"Swiss Premium Brand 2: Successfully launched in Vietnam, Hong Kong, and Cambodia, achieving an impressive 75% international brand growth.\",\n            \"These strategic initiatives not only enhanced our brand presence but also drove significant market growth and customer engagement.\"\n        ]\n    }\n\n];\n\nconst caseStudy3Array = [\n    {\n        title: \"Case Study 3: Driving Growth and Optimization in Asia for a Global Swiss Multi-Brand Company\",\n        paragraphs: [\n            \"As Sales Director for a leading global Swiss multi-brand company, I took full responsibility for the company's operations in Asia, excluding China. My mandate was to optimize both top-line and bottom-line performance by managing all accounts and the profit and loss (P&L) statement.\"\n        ]\n    },\n    {\n        title: \"Strategic Planning and Execution\",\n        paragraphs: [\n            \"I developed and implemented a comprehensive three-year strategic plan aimed at improving both top-line and bottom-line performance. This plan focused on:\",\n            \"Covering White Spots: Identifying and addressing gaps in sales, profit, new product launches, and distributor management.\",\n            \"Professionalization: Enhancing distributor management professionalism to increase numeric distribution, brand activation, and standard monthly reporting.\",\n            \"Cost Optimization: Streamlining the P&L structure by removing unnecessary costs to optimize ROI and bottom-line performance.\",\n            \"A&P Allocation: Improving the allocation of advertising and promotion (A&P) budgets to leverage both top-line and bottom-line growth.\"\n        ]\n    },\n    {\n        title: \"Results\",\n        paragraphs: [\n            \"Through these strategic initiatives, we achieved significant increases in numeric distribution across key markets:\",\n            \"Indonesia: +35%\",\n            \"Singapore: +25%\",\n            \"Japan: +10%\",\n            \"Hong Kong: +12%\",\n            \"Philippines: +75%\",\n            \"South Korea: +14%\",\n            \"These results demonstrate my ability to drive substantial growth and optimization in complex, multinational environments for a global Swiss multi-brand company.\"\n        ]\n    }\n];\nconst caseStudy4Array = [\n    {\n        title: \"Case Study 4: Expanding Market Footprint for the Baby and Infant Milk Category\",\n        paragraphs: [\n            \"As Sales Director for a leading global Swiss multi-brand company, I was tasked with increasing the footprint of the Baby and Infant Milk category in the region. My specific goal was to launch our premium baby food brand in Hong Kong, China, and the Philippines while doubling the business of infant milk.\"\n        ]\n    },\n    {\n        title: \"Strategic Launch Initiatives\",\n        paragraphs: [\n            \"Hong Kong Launch: I spearheaded the launch of our premium baby food brand in Hong Kong in collaboration with a major airline. This strategic partnership significantly enhanced brand visibility.\",\n            \"Philippines Launch: Leveraging our existing network, I successfully launched our premium baby food brand in the Philippines. This initiative not only expanded our market reach but also drove substantial sales growth.\"\n        ]\n    },\n    {\n        title: \"Results\",\n        paragraphs: [\n            \"Hong Kong: Successfully listed our baby food brand with a major airline, improving brand visibility and market penetration.\",\n            \"Philippines: Achieved a significant 12% increase in sales across the entire country by listing our baby food brand in major retail outlets.\",\n            \"These strategic launches demonstrate my ability to drive market expansion and sales growth for a global Swiss multi-brand company in the Baby and Infant Milk category.\"\n        ]\n    }\n]\nconst caseStudy5Array = [\n    {\n        title: \"Case Study 5: Rebranding and Market Expansion for a Premium Food Brand\",\n        paragraphs: [\n            \"As Regional Sales Manager for a leading global Swiss multi-brand company, I was tasked with integrating a rebranding and upgrade of our premium jam brand while coordinating between distributors and internal stakeholders to ensure project success. The goal was to increase sales and activate the brand launch in top retailers across Asia.\"\n        ]\n    },\n    {\n        title: \"Strategic Initiatives\",\n        paragraphs: [\n            \"Project Planning: Defined comprehensive project guidelines and objectives, gathering requirements to ensure a smooth rebranding process.\",\n            \"Task Allocation: Clearly outlined key tasks for each country and internal department to ensure aligned efforts.\",\n            \"Execution Plan: Developed a detailed timeline, checklist, and execution plan to guide the project from start to finish.\",\n            \"Supply Chain Management: Established supply chain timelines and priorities to accommodate changes and ensure seamless product delivery.\",\n            \"Brand Activation: Secured and executed a new brand activation plan efficiently, registering all new products with updated labels across all APAC countries.\"\n        ]\n    },\n    {\n        title: \"Results\",\n        paragraphs: [\n            \"Indonesia: +11%\",\n            \"Philippines: +66%\",\n            \"Australia: +15%\",\n            \"Vietnam: +730%\",\n            \"Cambodia: +58%\",\n            \"Maldives: +126%\",\n            \"These results demonstrate my ability to drive successful rebranding efforts and market expansion, leading to substantial sales growth for a global Swiss multi-brand company.\"\n        ]\n    }\n];\nconst caseStudy6Array = [\n    {\n        title: \"Case Study 6: Integrating and Optimizing Business Operations for a Premium Organic Brand\",\n        paragraphs: [\n            \"As Regional Sales Manager for a leading global Swiss multi-brand company, I was tasked with integrating the business of a premium organic brand into our Hong Kong (HK) business unit and headquarters for the APAC region (HQ). This involved coordinating with teams in the UK, Switzerland, and customers across the Asia-Pacific (APAC) region.\"\n        ]\n    },\n    {\n        title: \"Strategic Initiatives\",\n        paragraphs: [\n            \"Integration: Successfully integrated sales, supply chain, and customer management into the APAC business unit.\",\n            \"Portfolio Optimization: Optimized the product portfolio for the APAC region based on top sellers, profit margins, shelf life, brand strategy, and local adaptations.\",\n            \"Retailer Transition: Facilitated a smooth transition of all retailers in APAC from UK Key Account Managers (KAMs) to APAC KAMs.\",\n            \"SKU Selection: Defined top-selling SKUs and established weighted margin criteria for SKU selection and optimization.\"\n        ]\n    },\n    {\n        title: \"Results\",\n        paragraphs: [\n            \"Portfolio Streamlining: Reduced the portfolio from 70 SKUs to 25 core SKUs, gaining efficiencies and reducing complexity.\",\n            \"Profitability Increase: Improved profitability per country by 15%.\",\n            \"Timely Integration: Fully integrated accounting and the business unit within the set deadline.\",\n            \"These results demonstrate my ability to drive successful business integration and optimization, leading to enhanced operational efficiency and profitability for a global Swiss multi-brand company.\"\n        ]\n    }\n];\n\n\n\n\n\nfunction createContentSection(section) {\n\n    const sectionDiv = document.createElement('div');\n    sectionDiv.className = 'content-sections';\n    \n    \n    const h3 = document.createElement('h3');\n    h3.textContent = section.title;\n    sectionDiv.appendChild(h3);\n    \n    section.paragraphs.forEach(paragraph => {\n        const p = document.createElement('p');\n        p.textContent = paragraph;\n        sectionDiv.appendChild(p);\n    });\n    \n    \n\n\n\n    return sectionDiv;\n}\n\n\n\n\nfunction createParentContainer(id) {\n    const parentContainer = document.createElement(\"div\");\n    parentContainer.className = \"parent-containers\";\n    parentContainer.id = id;\n\n    return parentContainer;\n}\nfunction createAccordionContainer(id) {\n    const accordionContainer = document.createElement(\"div\");\n    accordionContainer.className = \"accordion-containers\";\n    accordionContainer.id = id;\n\n    return accordionContainer;\n}\n\n\nfunction createAccordionItem(title, content) {\n    const accordionItem = document.createElement(\"div\");\n    accordionItem.className = \"accordion-items\";\n\n        const button = document.createElement(\"button\");\n        button.className = \"accordion-questions\";\n        button.setAttribute(\"aria-expanded\", \"false\");\n        button.setAttribute(\"aria-controls\", \"accordion-answers\");\n    \n        const h3 = document.createElement(\"h3\");\n        h3.innerHTML = title;\n    \n        button.appendChild(h3);\n    \n        \n        // button.addEventListener(\"click\", () => {\n        //     const isExpanded = button.getAttribute(\"aria-expanded\") === \"true\";\n        //     button.setAttribute(\"aria-expanded\", !isExpanded);\n        //     p.style.display = isExpanded ? \"none\" : \"flex\";\n        // });\n            \n\n    const p = document.createElement(\"p\");\n    p.className = \"accordion-answers\";\n    p.innerHTML = content;\n    p.style.display = \"none\";\n\n    accordionItem.appendChild(button);\n    accordionItem.appendChild(p);\n\n    return accordionItem;\n}\n\nconst section6 = () => {\n    const parentContainer = createParentContainer('parent-container-6');\n    const img1 = document.createElement(\"img\");\n    img1.src = _pedro_2_jpg__WEBPACK_IMPORTED_MODULE_12__;\n    const h2 = document.createElement(\"h2\");\n    h2.innerHTML = \"CK @cliffykaewkarn\";\n    const p = document.createElement(\"p\");\n    p.innerHTML = \"Web Developer | Digital Nomads Thailand | Community & Business Developer | Meditation & Fitness | Matcha Lover\";\n\n    const socialsContainer = createSocialsComponent(socialsArray);\n    const linkTreeContainer = createLinkTrreeComponent(linkTreeArray);\n\n\n    parentContainer.appendChild(img1);\n    parentContainer.appendChild(h2);\n    parentContainer.appendChild(p);\n    parentContainer.appendChild(socialsContainer);\n    parentContainer.appendChild(linkTreeContainer);\n    \n    return parentContainer;\n}    \nconst socialsArray = [\n    { icon: _linkedin_png__WEBPACK_IMPORTED_MODULE_16__, link: \"https://www.linkedin.com/in/cliffton-kaewkarn-5ba6b1203?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app\", alt: \"LinkedIn\" },\n    { icon: _line_png__WEBPACK_IMPORTED_MODULE_17__, link: \"https://line.me/ti/p/K6b7kw42yF\", alt: \"Twitter\" },\n    { icon: _whatsapp_png__WEBPACK_IMPORTED_MODULE_18__, link: \"https://api.whatsapp.com/send?phone=66842531557\", alt: \"Instagram\" },\n    // { icon: viberIcon, link: \"https://www.facebook.com/pedrogarda/\", alt: \"Facebook\" },\n    { icon: _email_png__WEBPACK_IMPORTED_MODULE_22__, link: \"mailto:sales@phanganist.com\", alt: \"Email\" },\n    { icon: _instagram_png__WEBPACK_IMPORTED_MODULE_20__, link: \"https://www.instagram.com/cliffykaewkarn?igsh=MWpyZDRtcjMyYnplNQ%3D%3D&utm_source=qr\", alt: \"Instagram\" },\n    // { icon: xIcon, link: \"]https://x.com/Peterg12933591\", alt: \"x / twitter\" },\n\n    \n];\n\nfunction createSocialsComponent(array) {\n    const socialsContainer = document.createElement(\"div\");\n    socialsContainer.className = \"socials-containers\";\n\n    array.forEach((social) => {\n        const wrapper = document.createElement(\"div\");\n        wrapper.className = \"socials-wrapper\";\n        const anchor = document.createElement(\"a\");\n        anchor.href = social.link;\n        anchor.target = \"_blank\";\n    \n        const img = document.createElement(\"img\");\n        img.src = social.icon;\n        img.alt = social.alt;\n        \n        anchor.appendChild(img);\n        wrapper.appendChild(anchor);\n        socialsContainer.appendChild(wrapper);\n    });\n\n    return socialsContainer;\n}\nconst linkTreeArray = [\n    {icon: _linktree_1_png__WEBPACK_IMPORTED_MODULE_23__, link: \"https://ck-js.github.io/Nutranation/\", text: \"German Fitness & Nutrition\"},\n    {icon: _linktree_2_png__WEBPACK_IMPORTED_MODULE_24__, link: \"https://ck-js.github.io/Pedro-G/\", text: \"Swiss FMCG Consulting & Advisory\"},\n    {icon: _linktree_3_png__WEBPACK_IMPORTED_MODULE_25__, link: \"https://ck-js.github.io/DKC-Biotech/\", text: \"UK / Thai Biotech & Health\"},\n    {icon: _linktree_4_png__WEBPACK_IMPORTED_MODULE_26__, link: \"https://pureorigincoffeelab.com\", text: \"Laos / Thailand Coffee Import & Export\"},\n    {icon: _linktree_5_png__WEBPACK_IMPORTED_MODULE_27__, link: \"https://www.glowonflow.com\", text: \"Thailand Spa & Beauty\"},\n    {icon: _linktree_6_png__WEBPACK_IMPORTED_MODULE_28__, link: \"https://ck-js.github.io/Sendatradie-Task-Manager/\", text: \"React Task Manager App\"},    \n    {icon: _linktree_7_png__WEBPACK_IMPORTED_MODULE_29__, link: \"https://www.phanganist.com\", text: \"Thailand Travel & Events\"},\n    {icon: _linktree_8_png__WEBPACK_IMPORTED_MODULE_30__, link: \"https://www.facebook.com/groups/thailanddigitalnomads/?ref=share_group_link\", text: \"The largest community of Digital Nomads in Thailand\"},\n    {icon: _linktree_9_png__WEBPACK_IMPORTED_MODULE_31__, link: \"https://www.instagram.com/koh.samui.thailand?igsh=MXV5NTZuZnJqMnFjcw==\", text: \"Grow & Promote your business on Koh Samui\"},\n    {icon: _linktree_10_png__WEBPACK_IMPORTED_MODULE_32__, link: \"https://www.instagram.com/koh.phangan.thailand?igsh=MW5tb2M5aGhneWhnNg==\", text: \"Grow & Promote your business on Koh Phangan\"},\n\n]\nfunction createLinkTrreeComponent(array) {\n    const linkTreeContainer = document.createElement(\"div\");\n    linkTreeContainer.className = \"link-tree-containers\";\n\n    array.forEach((item) => {\n        const wrapper = document.createElement(\"div\");\n        wrapper.className = \"link-tree-wrappers\";\n        const anchor = document.createElement(\"a\");\n        anchor.href = item.link;\n        anchor.target = \"_blank\";\n    \nconst img = document.createElement(\"img\");\nimg.src = item.icon;\nimg.ariaHidden = true;\n\n        \nconst h4 = document.createElement(\"h4\");\nh4.innerHTML = item.text;\n\nanchor.appendChild(img);    \nanchor.appendChild(h4);\n        \n        wrapper.appendChild(anchor);\n        linkTreeContainer.appendChild(wrapper);\n    });\n\n    return linkTreeContainer;\n}\n\nconst onPageLoadScreen = () => {\nconst parentContainer = document.createElement(\"div\");\nparentContainer.id = \"loading-screen\";\nparentContainer.setAttribute(\"aria-label\", \"Loading screen\");\n    parentContainer.setAttribute(\"role\", \"alert\");\n\nconst img = document.createElement(\"img\");\nimg.src = _pg_logo_PNG__WEBPACK_IMPORTED_MODULE_37__;\nimg.alt = \"Pedro Garda logo loading screen with dark gray background\";\n\nparentContainer.appendChild(img);\n\n\nreturn parentContainer;\n\n}\n\n\n\n\n\n\n\n\n\n\n\n\n//# sourceURL=webpack://pedro/./src/landing-page.js?");

/***/ }),

/***/ "./src/education-1.png":
/*!*****************************!*\
  !*** ./src/education-1.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"52483d51694be1641c3a.png\";\n\n//# sourceURL=webpack://pedro/./src/education-1.png?");

/***/ }),

/***/ "./src/education-2.png":
/*!*****************************!*\
  !*** ./src/education-2.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"8ea7fb73c2f8ba8ea922.png\";\n\n//# sourceURL=webpack://pedro/./src/education-2.png?");

/***/ }),

/***/ "./src/education-3.png":
/*!*****************************!*\
  !*** ./src/education-3.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"debb38d74d0034a78864.png\";\n\n//# sourceURL=webpack://pedro/./src/education-3.png?");

/***/ }),

/***/ "./src/email.png":
/*!***********************!*\
  !*** ./src/email.png ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"ba9f5a668186151da8d5.png\";\n\n//# sourceURL=webpack://pedro/./src/email.png?");

/***/ }),

/***/ "./src/hero-1.png":
/*!************************!*\
  !*** ./src/hero-1.png ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"c1d8fa9b4586233bba6f.png\";\n\n//# sourceURL=webpack://pedro/./src/hero-1.png?");

/***/ }),

/***/ "./src/hero-2.png":
/*!************************!*\
  !*** ./src/hero-2.png ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"e8fab24351e30ab22679.png\";\n\n//# sourceURL=webpack://pedro/./src/hero-2.png?");

/***/ }),

/***/ "./src/hero-3.png":
/*!************************!*\
  !*** ./src/hero-3.png ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"e8fab24351e30ab22679.png\";\n\n//# sourceURL=webpack://pedro/./src/hero-3.png?");

/***/ }),

/***/ "./src/hochdorf.png":
/*!**************************!*\
  !*** ./src/hochdorf.png ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"5ddd68f80319aabee63b.png\";\n\n//# sourceURL=webpack://pedro/./src/hochdorf.png?");

/***/ }),

/***/ "./src/instagram.png":
/*!***************************!*\
  !*** ./src/instagram.png ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"eb65e1dc14f26088adb2.png\";\n\n//# sourceURL=webpack://pedro/./src/instagram.png?");

/***/ }),

/***/ "./src/line.png":
/*!**********************!*\
  !*** ./src/line.png ***!
  \**********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"291eaf2f5cb2503c9a19.png\";\n\n//# sourceURL=webpack://pedro/./src/line.png?");

/***/ }),

/***/ "./src/linkedin-banner.png":
/*!*********************************!*\
  !*** ./src/linkedin-banner.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"f49aad1c067a89b6a216.png\";\n\n//# sourceURL=webpack://pedro/./src/linkedin-banner.png?");

/***/ }),

/***/ "./src/linkedin.png":
/*!**************************!*\
  !*** ./src/linkedin.png ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"4d96c0d3b060bb3ca3d0.png\";\n\n//# sourceURL=webpack://pedro/./src/linkedin.png?");

/***/ }),

/***/ "./src/linktree-1.png":
/*!****************************!*\
  !*** ./src/linktree-1.png ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"d95d2b39576e4b79d872.png\";\n\n//# sourceURL=webpack://pedro/./src/linktree-1.png?");

/***/ }),

/***/ "./src/linktree-10.png":
/*!*****************************!*\
  !*** ./src/linktree-10.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"71034af8808a256e00c9.png\";\n\n//# sourceURL=webpack://pedro/./src/linktree-10.png?");

/***/ }),

/***/ "./src/linktree-2.png":
/*!****************************!*\
  !*** ./src/linktree-2.png ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"fea692a3c4d6f9f52cdb.png\";\n\n//# sourceURL=webpack://pedro/./src/linktree-2.png?");

/***/ }),

/***/ "./src/linktree-3.png":
/*!****************************!*\
  !*** ./src/linktree-3.png ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"dcda956ada62064f6edc.png\";\n\n//# sourceURL=webpack://pedro/./src/linktree-3.png?");

/***/ }),

/***/ "./src/linktree-4.png":
/*!****************************!*\
  !*** ./src/linktree-4.png ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"a918e1a4ec1be11ad5d7.png\";\n\n//# sourceURL=webpack://pedro/./src/linktree-4.png?");

/***/ }),

/***/ "./src/linktree-5.png":
/*!****************************!*\
  !*** ./src/linktree-5.png ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"be17e3fcc08a370bb177.png\";\n\n//# sourceURL=webpack://pedro/./src/linktree-5.png?");

/***/ }),

/***/ "./src/linktree-6.png":
/*!****************************!*\
  !*** ./src/linktree-6.png ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"cc99f46b333c372d7aae.png\";\n\n//# sourceURL=webpack://pedro/./src/linktree-6.png?");

/***/ }),

/***/ "./src/linktree-7.png":
/*!****************************!*\
  !*** ./src/linktree-7.png ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"9a2e338ac9890e2556e9.png\";\n\n//# sourceURL=webpack://pedro/./src/linktree-7.png?");

/***/ }),

/***/ "./src/linktree-8.png":
/*!****************************!*\
  !*** ./src/linktree-8.png ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"3220d930bd42bbe0c984.png\";\n\n//# sourceURL=webpack://pedro/./src/linktree-8.png?");

/***/ }),

/***/ "./src/linktree-9.png":
/*!****************************!*\
  !*** ./src/linktree-9.png ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"1e09696a64a7139000c5.png\";\n\n//# sourceURL=webpack://pedro/./src/linktree-9.png?");

/***/ }),

/***/ "./src/pedro-1.png":
/*!*************************!*\
  !*** ./src/pedro-1.png ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"34a46812f48edbed56de.png\";\n\n//# sourceURL=webpack://pedro/./src/pedro-1.png?");

/***/ }),

/***/ "./src/pedro-2.jpg":
/*!*************************!*\
  !*** ./src/pedro-2.jpg ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"3bb93b80c61d9374337f.jpg\";\n\n//# sourceURL=webpack://pedro/./src/pedro-2.jpg?");

/***/ }),

/***/ "./src/pedro-3.jpg":
/*!*************************!*\
  !*** ./src/pedro-3.jpg ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"371a224fdf87857bc401.jpg\";\n\n//# sourceURL=webpack://pedro/./src/pedro-3.jpg?");

/***/ }),

/***/ "./src/pg-logo.PNG":
/*!*************************!*\
  !*** ./src/pg-logo.PNG ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"a7cb930d8b82826cfd69.PNG\";\n\n//# sourceURL=webpack://pedro/./src/pg-logo.PNG?");

/***/ }),

/***/ "./src/skills-icon-1.png":
/*!*******************************!*\
  !*** ./src/skills-icon-1.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"c5c1b4722e6808b9cf1a.png\";\n\n//# sourceURL=webpack://pedro/./src/skills-icon-1.png?");

/***/ }),

/***/ "./src/skills-icon-10.png":
/*!********************************!*\
  !*** ./src/skills-icon-10.png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"a45b2647d50431222c66.png\";\n\n//# sourceURL=webpack://pedro/./src/skills-icon-10.png?");

/***/ }),

/***/ "./src/skills-icon-2.png":
/*!*******************************!*\
  !*** ./src/skills-icon-2.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"fee7aed1c64cd19e9fcb.png\";\n\n//# sourceURL=webpack://pedro/./src/skills-icon-2.png?");

/***/ }),

/***/ "./src/skills-icon-3.png":
/*!*******************************!*\
  !*** ./src/skills-icon-3.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"e6fa877d635621885462.png\";\n\n//# sourceURL=webpack://pedro/./src/skills-icon-3.png?");

/***/ }),

/***/ "./src/skills-icon-4.png":
/*!*******************************!*\
  !*** ./src/skills-icon-4.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"253b581683fb0a783524.png\";\n\n//# sourceURL=webpack://pedro/./src/skills-icon-4.png?");

/***/ }),

/***/ "./src/skills-icon-5.png":
/*!*******************************!*\
  !*** ./src/skills-icon-5.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"3200a26d4b401520c8f5.png\";\n\n//# sourceURL=webpack://pedro/./src/skills-icon-5.png?");

/***/ }),

/***/ "./src/skills-icon-6.png":
/*!*******************************!*\
  !*** ./src/skills-icon-6.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"099b3f7d20b93fab640a.png\";\n\n//# sourceURL=webpack://pedro/./src/skills-icon-6.png?");

/***/ }),

/***/ "./src/skills-icon-7.png":
/*!*******************************!*\
  !*** ./src/skills-icon-7.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"8a3c5f5486ec2920b8fd.png\";\n\n//# sourceURL=webpack://pedro/./src/skills-icon-7.png?");

/***/ }),

/***/ "./src/skills-icon-8.png":
/*!*******************************!*\
  !*** ./src/skills-icon-8.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"ffc5c2166e786a8e0a93.png\";\n\n//# sourceURL=webpack://pedro/./src/skills-icon-8.png?");

/***/ }),

/***/ "./src/skills-icon-9.png":
/*!*******************************!*\
  !*** ./src/skills-icon-9.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"22049ac186981061f055.png\";\n\n//# sourceURL=webpack://pedro/./src/skills-icon-9.png?");

/***/ }),

/***/ "./src/viber.png":
/*!***********************!*\
  !*** ./src/viber.png ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"a0ecb6210093bc729860.png\";\n\n//# sourceURL=webpack://pedro/./src/viber.png?");

/***/ }),

/***/ "./src/whatsapp.png":
/*!**************************!*\
  !*** ./src/whatsapp.png ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"407e4aef6b3415bedbfb.png\";\n\n//# sourceURL=webpack://pedro/./src/whatsapp.png?");

/***/ }),

/***/ "./src/x.png":
/*!*******************!*\
  !*** ./src/x.png ***!
  \*******************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"ddbb97b3a964fbf4fa4f.png\";\n\n//# sourceURL=webpack://pedro/./src/x.png?");

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
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