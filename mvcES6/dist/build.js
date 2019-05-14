/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./js/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./js/app.js":
/*!*******************!*\
  !*** ./js/app.js ***!
  \*******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./model */ \"./js/model.js\");\n/* harmony import */ var _template__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./template */ \"./js/template.js\");\n/* harmony import */ var _view__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./view */ \"./js/view.js\");\n/* harmony import */ var _controller__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./controller */ \"./js/controller.js\");\n\r\n\r\n\r\n\r\n\r\nconst template = new _template__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\r\nconst view = new _view__WEBPACK_IMPORTED_MODULE_2__[\"default\"](template);\r\nconst model = new _model__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\r\nconst controller = new _controller__WEBPACK_IMPORTED_MODULE_3__[\"default\"](view, model);\r\n\r\nconst setView = () => controller.setView(document.location.hash);\r\nwindow.addEventListener('load', setView);\r\nwindow.addEventListener('hashchange', setView);\n\n//# sourceURL=webpack:///./js/app.js?");

/***/ }),

/***/ "./js/controller.js":
/*!**************************!*\
  !*** ./js/controller.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Controller; });\nclass Controller{\r\n    constructor(view, model){\r\n        /*3 ways to keep context\r\n        1. save context to closure: var self = this;\r\n        2. bind context: bind(this)\r\n        3. use arrow functuons: (todo) => this.addTodo(todo) */\r\n        var self = this;\r\n\t\tthis.model = model;\r\n\t\tthis.view = view;\r\n        this.view.bindAddTodo(todo => this.addTodo(todo));\r\n        this.view.bindDeleteTodo(function(id){this.deleteTodo(id)}.bind(this));\r\n        this.view.bindCheckTodo(function(id, isChecked){self.changeTodoState(id, isChecked)});\r\n    }\r\n\r\n    addTodo(title){\r\n        console.log('controller addTodo');\r\n        this.model.create(title, (todos) => this.updateView(todos));\r\n    }\r\n\r\n    changeTodoState(id, isChecked){\r\n        var self = this;\r\n        self.model.changeState(id, isChecked, function(todos) {self.updateView(todos)});\r\n    }\r\n\r\n    deleteTodo(id){\r\n        this.model.delete(id, function(todos) {this.updateView(todos)}.bind(this));\r\n    }\r\n\r\n    updateView(todos){\r\n        this.view.clearNewTodo();\r\n        this.view.render(todos);\r\n    }\r\n\r\n    setView(locationHash){\r\n        var route = locationHash.split('/')[1];\r\n\t\tvar page = route || '';\r\n        \r\n        this.model.read(page, (todos) => this.view.render(todos));\r\n    }\r\n}\n\n//# sourceURL=webpack:///./js/controller.js?");

/***/ }),

/***/ "./js/model.js":
/*!*********************!*\
  !*** ./js/model.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Model; });\nclass Model {\r\n    constructor(){\r\n        this._dbName = 'todos';\r\n        this.todos = JSON.parse(localStorage.getItem(this._dbName));\r\n    }\r\n\r\n    create(title, callback){\r\n        var todo = {\r\n            id: this.todos.length,\r\n            title: title,\r\n            isComplete: false\r\n        }\r\n\r\n        this.todos.push(todo);\r\n        localStorage.setItem(this._dbName, JSON.stringify(this.todos));\r\n\r\n        callback(this.todos);\r\n    }\r\n\r\n    changeState(id, isComplete, callback){\r\n        for (var i = 0; i < this.todos.length; i++) {\r\n\t\t\tif (this.todos[i].id == id) {\r\n\t\t\t\tthis.todos[i].isComplete = isComplete;\r\n\t\t\t\tbreak;\r\n\t\t\t}\r\n        }\r\n        localStorage.setItem(this._dbName, JSON.stringify(this.todos));\r\n        callback(this.todos);\r\n    }\r\n\r\n    delete(id, callback){\r\n        for (var i = 0; i < this.todos.length; i++) {\r\n\t\t\tif (this.todos[i].id == id) {\r\n\t\t\t\tthis.todos.splice(i, 1);\r\n\t\t\t\tbreak;\r\n\t\t\t}\r\n        }\r\n        localStorage.setItem(this._dbName, JSON.stringify(this.todos));\r\n        callback(this.todos);\r\n    }\r\n\r\n    read(stateFilter, callback){\r\n        var res = [];\r\n\t\tif(!stateFilter){\r\n            res = this.todos;\r\n        } else if(stateFilter === 'active'){\r\n            res = this.todos.filter(todo => !todo.isComplete);\r\n        } else if(stateFilter === 'completed'){\r\n            res = this.todos.filter(todo => todo.isComplete);\r\n        }\r\n        callback(res);\r\n    }\r\n}\n\n//# sourceURL=webpack:///./js/model.js?");

/***/ }),

/***/ "./js/template.js":
/*!************************!*\
  !*** ./js/template.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Template; });\nclass Template{\r\n    constructor(){\r\n        this.template = `\r\n        <li id=\"{{id}}\">\r\n            <input class=\"todo__checkbox\" type=\"checkbox\" {{checked}} />\r\n            <label>{{title}}</label>\r\n            <button class=\"todo__delete\">Delete</button>\r\n        </li>`;\r\n    }\r\n\r\n    show(todos){\r\n        var i, l;\r\n\t\tvar view = '';\r\n\r\n\t\tfor (i = 0, l = todos.length; i < l; i++) {\r\n            var template = this.template;\r\n            template = template.replace('{{id}}', todos[i].id);\r\n            template = template.replace('{{title}}', todos[i].title);\r\n            template = template.replace('{{checked}}', todos[i].isComplete ? 'checked' : '');\r\n\t\t\tview = view + template;\r\n\t\t}\r\n\r\n\t\treturn view;\r\n    }\r\n}\n\n//# sourceURL=webpack:///./js/template.js?");

/***/ }),

/***/ "./js/view.js":
/*!********************!*\
  !*** ./js/view.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return View; });\nclass View{\r\n    constructor(template){\r\n        this.template = template;\r\n        this.$createBtn = document.getElementById('create-btn');\r\n        this.$newTodoInput = document.getElementById('new-todo-input');\r\n        this.$list = document.getElementById('list');\r\n    }\r\n\r\n    bindAddTodo(handler){\r\n        var self = this;\r\n        self.$createBtn.addEventListener('click', function(){\r\n            handler(self.$newTodoInput.value);\r\n        });\r\n    }\r\n\r\n    bindCheckTodo(handler){\r\n        var self = this;\r\n        self.$list.addEventListener('change', function(event){\r\n            var allCheckboxs = document.querySelectorAll('.todo__checkbox');\r\n            var isCheckbox = Array.prototype.indexOf.call(allCheckboxs, event.target) >= 0;\r\n            if(isCheckbox){\r\n                handler(event.target.parentNode.id, event.target.checked);\r\n            }\r\n        });\r\n    }\r\n\r\n    bindDeleteTodo(handler){\r\n        var self = this;\r\n        self.$list.addEventListener('click', function(event){\r\n            var allDeleteBtns = document.querySelectorAll('.todo__delete');\r\n            var isBtn = Array.prototype.indexOf.call(allDeleteBtns, event.target) >= 0;\r\n            if(isBtn){\r\n                handler(event.target.parentNode.id);\r\n            }\r\n        });\r\n    }\r\n\r\n    render(todos){\r\n        this.$list.innerHTML = this.template.show(todos);\r\n    }\r\n\r\n    clearNewTodo(){\r\n        this.$newTodoInput.value = '';\r\n    }\r\n}\n\n//# sourceURL=webpack:///./js/view.js?");

/***/ })

/******/ });