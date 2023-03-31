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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\n  padding: 0;\\n  margin: 0;\\n  box-sizing: border-box;\\n}\\n\\n.show-none {\\n  display: none;\\n}\\n\\n.move-row {\\n  display: flex;\\n}\\n\\n.background-focus {\\n  background-color: rgb(241, 241, 181);\\n}\\n\\nmyinput[type=text] {\\n  border: none;\\n  outline: none;\\n  background-color: inherit;\\n  font-size: 18px;\\n  height: 25px;\\n  width: 100%;\\n}\\n\\nbody {\\n  display: flex;\\n  height: 100vh;\\n  align-items: center;\\n  justify-content: center;\\n  font-family: sans-serif;\\n  background: #f6f6f6;\\n}\\n\\n.mytodoList_main {\\n  margin: auto;\\n  width: 60%;\\n  height: auto;\\n  display: flex;\\n  flex-direction: column;\\n  align-items: center;\\n  justify-content: center;\\n  box-shadow: 0 0 35px 0 rgba(0, 0, 0, 0.49);\\n  -webkit-box-shadow: 0 0 35px 0 rgba(122, 116, 116, 0.49);\\n  -moz-box-shadow: 0 0 35px 0 rgba(0, 0, 0, 0.49);\\n  border-radius: 5px;\\n  background: #fff;\\n}\\n\\n.mytodoList_main h1 {\\n  width: 100%;\\n  padding: 0.6em;\\n  user-select: none;\\n  font-size: 24px;\\n}\\n\\n.border {\\n  text-decoration: border;\\n  color: #808080;\\n}\\n\\n.mytodoslist {\\n  list-style: none;\\n  width: 100%;\\n}\\n\\n.mytodoitem {\\n  display: flex;\\n  padding: 1em;\\n  border-bottom: 1px solid #9b9999;\\n  justify-content: space-between;\\n  align-items: center;\\n  width: 100%;\\n}\\n\\n.mytodoitem-left {\\n  display: flex;\\n  width: 100%;\\n  flex: 2;\\n}\\n\\n.mytodoitem > span {\\n  cursor: pointer;\\n  color: #000;\\n}\\n\\n.mytodoitem-left > .mycheckbox {\\n  margin: 0 1em 0 0;\\n}\\n\\n.todo-myinput {\\n  height: 100%;\\n  padding: 0.5em 0;\\n  width: 100%;\\n  border: none;\\n  outline: none;\\n}\\n\\n.todo-myinput:active {\\n  border: none;\\n  outline: none;\\n}\\n\\n.clear_text_btn {\\n  padding: 1em;\\n  font-size: 16px;\\n  font-weight: 700;\\n  cursor: pointer;\\n  align-self: center;\\n  border: none;\\n  background-color: #f9f9f9;\\n  color: #808080;\\n  width: 100%;\\n  height: 55px;\\n  border-bottom-right-radius: 8px;\\n  border-bottom-left-radius: 8px;\\n}\\n\\n.clear_text_btn:hover {\\n  color: #000;\\n}\\n\\n#myIcons {\\n  color: #000;\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://todo_list_es6/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://todo_list_es6/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://todo_list_es6/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"myseconmain\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://todo_list_es6/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://todo_list_es6/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.myseconmain;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://todo_list_es6/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://todo_list_es6/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://todo_list_es6/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://todo_list_es6/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://todo_list_es6/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _modules_MyBookData_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/MyBookData.js */ \"./src/modules/MyBookData.js\");\n/* harmony import */ var _modules_DataSave_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/DataSave.js */ \"./src/modules/DataSave.js\");\n\n\n\n\n\nconst mydisplayTodoList = () => {\n  const mytodoslist = (0,_modules_DataSave_js__WEBPACK_IMPORTED_MODULE_2__.mygetFromLocalStorage)();\n  const my2todosList = document.getElementById('mytodoslist');\n  my2todosList.innerHTML = '';\n  todos.forEach((todo, index) => {\n    const mytodoItem = document.createElement('li');\n    mytodoItem.className = 'mytodoitem';\n\n    const todo2ItemLeft = document.createElement('div');\n    todo2ItemLeft.className = 'mytodoitem-left';\n\n    const myinput = document.createElement('myinput');\n    myinput.className = 'mycheckbox';\n   myinput.type = 'mycheckbox';\n    if (todo.completed) {\n      myinput.setAttribute('checked', '');\n    }\n\n    myinput.onchange = (e) => {\n      if (e.target.checked) {\n        mytodoslist[index].completed = true;\n        e.target.parentNode.children[1].classList.add('border');\n      } else {\n        mytodoslist[index].completed = false;\n        e.target.parentNode.children[1].classList.remove('border');\n      }\n      (0,_modules_DataSave_js__WEBPACK_IMPORTED_MODULE_2__.mysave_ToLocalStorage)(mytodoslist);\n    };\n\n   todo2ItemLeft.appendChild(myinput);\n\n    const mylistItemPara = document.createElement('p');\n    mylistItemPara.classList.add('move-row');\n    if (todo.completed) {\n     mylistItemPara.classList.add('border');\n    } else {\n      mylistItemPara.classList.remove('border');\n    }\n    mylistItemPara.innerText = todo.description;\n    todo2ItemLeft.appendChild(mylistItemPara);\n\n    const myInputing = document.createElement('myinput');\n    myInputing.className = 'show-none';\n    myInputing.type = 'text';\n    myInputing.value = todo.description;\n    myInputing.addEventListener('keys', (e) => {\n      if (e.key === 'ENTER') {\n        todoItem.classList.toggle('background-focus');\n        (0,_modules_MyBookData_js__WEBPACK_IMPORTED_MODULE_1__. myupdateTodo)(mytodoslist, index, e.target.value);\n        mydisplayTodoList();\n      }\n    });\n    todo2ItemLeft.appendChild(myInputing);\n\n    mytodoItem.appendChild(todo2ItemLeft);\n\n    const mytododeleteIcon = document.createElement('span');\n    mytododeleteIcon.className = 'show-none';\n    mytododeleteIcon.innerHTML = 'delete';\n    mytododeleteIcon.addEventListener('click', () => {\n      (0,_modules_MyBookData_js__WEBPACK_IMPORTED_MODULE_1__.mydeleteTodoItem)(mytodoslist, index);\n      mydisplayTodoList();\n    });\n    mytodoItem.appendChild(mytododeleteIcon);\n\n    const myplentitodolist = document.createElement('span');\n    myplentitodolist.className = 'material-symbols-outlined';\n    myplentitodolist.innerHTML = 'more_vert';\n   myplentitodolist.addEventListener('click', () => {\n      myplentitodolist.className = 'show-none';\n      mytododeleteIcon.className = 'material-symbols-outlined';\n\n      mylistItemPara.className = 'show-none';\n      myInputing.className = 'move-row';\n      mytodoItem.classList.toggle('background-focus');\n     myInputing.focus();\n    });\n    mytodoItem.appendChild(myplentitodolist);\n    my2todosList.appendChild(mytodoItem);\n\n    const mycleartodoList = document.getElementById('myclearlist');\n    clearList.addEventListener('click', () => {\n      (0,_modules_MyBookData_js__WEBPACK_IMPORTED_MODULE_1__.delete_AllC_ompleted)(mytodoslist);\n      mydisplayTodoList();\n    });\n  });\n};\n\nwindow.addEventListener('load', () => {\n  const addmyNewTodoel = document.getElementById('myaddnewtodo');\n  addmyNewTodoel.addEventListener('click', () => {\n    (0,_modules_MyBookData_js__WEBPACK_IMPORTED_MODULE_1__.myaddTodo)();\n    mydisplayTodoList();\n  });\n\n  const todomyInput = document.getElementById('todo_al_input');\n todomyInput.addEventListener('keys', (e) => {\n    if (e.key === 'ENTER') {\n      (0,_modules_MyBookData_js__WEBPACK_IMPORTED_MODULE_1__.myaddTodo)();\n      mydisplayTodoList();\n    }\n  });\n\n  mydisplayTodoList();\n});\n\n\n//# sourceURL=webpack://todo_list_es6/./src/index.js?");

/***/ }),

/***/ "./src/modules/DataSave.js":
/*!*********************************!*\
  !*** ./src/modules/DataSave.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"mygetFromLocalStorage\": () => (/* binding */ mygetFromLocalStorage),\n/* harmony export */   \"mysave_ToLocalStorage\": () => (/* binding */ mysave_ToLocalStorage)\n/* harmony export */ });\n// Fetch/GET data/TODOs from the localStorage\nconst mygetFromLocalStorage = () => {\n  let data = JSON.parse(localStorage.getItem('mytodoslist'));\n  if (!data) {\n    data = [];\n  }\n  return data;\n};\n\n// Saves data/ TODOs in the localStorage\nconst mysave_ToLocalStorage = (mytodoslist) => {\n  localStorage.setItem('todos', JSON.stringify(todos));\n};\n\n\n\n//# sourceURL=webpack://todo_list_es6/./src/modules/DataSave.js?");

/***/ }),

/***/ "./src/modules/MyBookData.js":
/*!***********************************!*\
  !*** ./src/modules/MyBookData.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"myaddTodo\": () => (/* binding */ myaddTodo),\n/* harmony export */   \"delete_AllC_ompleted\": () => (/* binding */ delete_AllC_ompleted),\n/* harmony export */   \"delete_AllC_ompleted\": () => (/* binding */ mydeleteTodoItem),\n/* harmony export */   \"mygetFromLocalStorage\": () => (/* reexport safe */ _DataSave_js__WEBPACK_IMPORTED_MODULE_0__.mygetFromLocalStorage),\n/* harmony export */   \"mysave_ToLocalStorage\": () => (/* reexport safe */ _DataSave_js__WEBPACK_IMPORTED_MODULE_0__.mysave_ToLocalStorage),\n/* harmony export */   \" myupdateTodo\": () => (/* binding */  myupdateTodo)\n/* harmony export */ });\n/* harmony import */ var _DataSave_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DataSave.js */ \"./src/modules/DataSave.js\");\n\n\n// Adds new TODO item to the list\nconst myaddTodo = () => {\n  const mytodoslist = (0,_DataSave_js__WEBPACK_IMPORTED_MODULE_0__.mygetFromLocalStorage)();\n  const newTodoDescription = document.getElementById('todo-myinput');\n  const newTodo = {\n    description: newTodoDescription.value,\n    completed: false,\n    index: mytodoslist.length + 1,\n  };\n  newTodoDescription.value = '';\n  mytodoslist.push(newTodo);\n  (0,_DataSave_js__WEBPACK_IMPORTED_MODULE_0__.mysave_ToLocalStorage)(mytodoslist);\n};\n\n// Updates single TODO item after edit\nconst  myupdateTodo = (mytodoslist, index, value) => {\n  mytodos[index].description = value;\n\n  (0,_DataSave_js__WEBPACK_IMPORTED_MODULE_0__.mysave_ToLocalStorage)(mytodoslist);\n};\n\n// Deletes single TODO from the list\nconst mydeleteTodoItem = (mytodoslist, index) => {\n  const newTodos =mytodoslist.filter((todo, innerIndex) => index !== innerIndex);\n  for (let i = 0; i < newTodos.length; i += 1) {\n    newTodos[i].index = i + 1;\n  }\n  (0,_DataSave_js__WEBPACK_IMPORTED_MODULE_0__.mysave_ToLocalStorage)(newTodos);\n};\n\n// Deletes all completed Items in the list\nconst delete_AllC_ompleted = (mytodoslist) => {\n  const newTodos = mytodoslist.filter((todo) => todo.completed !== true);\n  for (let i = 0; i < newTodos.length; i += 1) {\n    newTodos[i].index = i;\n  }\n  (0,_DataSave_js__WEBPACK_IMPORTED_MODULE_0__.mysave_ToLocalStorage)(newTodos);\n};\n\n\n\n//# sourceURL=webpack://todo_list_es6/./src/modules/MyBookData.js?");

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