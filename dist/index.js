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
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _src_engine_Engine__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/engine/Engine */ \"./src/engine/Engine.js\");\n/* harmony import */ var _src_game_levels_Level_1__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./src/game/levels/Level_1 */ \"./src/game/levels/Level_1.js\");\n/* harmony import */ var _src_game_config_ActionMap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./src/game/config/ActionMap */ \"./src/game/config/ActionMap.js\");\n\r\n\r\n\r\n\r\nconst game = new _src_engine_Engine__WEBPACK_IMPORTED_MODULE_0__[\"default\"](\r\n    \"gamecanvas\",\r\n    _src_game_config_ActionMap__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\r\n);\r\ngame.loadLevel(_src_game_levels_Level_1__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\r\ngame.run();\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./src/engine/Engine.js":
/*!******************************!*\
  !*** ./src/engine/Engine.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _input_Input__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./input/Input */ \"./src/engine/input/Input.js\");\n/* harmony import */ var _renderer_Renderer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./renderer/Renderer */ \"./src/engine/renderer/Renderer.js\");\n/* harmony import */ var _physics_Physics__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./physics/Physics */ \"./src/engine/physics/Physics.js\");\n\r\n\r\n\r\n\r\nclass Engine {\r\n    constructor(canvasName, actionMap) {\r\n        _input_Input__WEBPACK_IMPORTED_MODULE_0__[\"default\"].init(canvasName, actionMap);\r\n        this.renderer = new _renderer_Renderer__WEBPACK_IMPORTED_MODULE_1__[\"default\"](canvasName);\r\n        this.physics = new _physics_Physics__WEBPACK_IMPORTED_MODULE_2__[\"default\"]();\r\n        this.gameObjects = [];\r\n    }\r\n\r\n    loadLevel(level) {\r\n        this.gameObjects = [];\r\n        level.forEach(gameObject => this.gameObjects.push(gameObject));\r\n    }\r\n\r\n    update(deltaTime) {\r\n        const oldTransforms = this.getOldTransforms(this.gameObjects);\r\n        this.gameObjects.forEach(obj => obj.update(deltaTime));\r\n        this.physics.run(deltaTime, this.gameObjects, oldTransforms);\r\n        this.renderer.render(deltaTime, this.gameObjects);\r\n        this.destroyGameObjectsIfNecessary(this.gameObjects);\r\n    }\r\n\r\n    getOldTransforms(gameObjs) {\r\n        let ret = [];\r\n        const oldTransforms = gameObjs.map(obj => ({ id: obj.id, ...obj.transform }));\r\n        ret = [ ...oldTransforms ];\r\n        const childTransforms = gameObjs.forEach(obj => {\r\n            if(obj.gameObjects.length > 0)\r\n                ret = [...ret, ...this.getOldTransforms(obj.gameObjects) ];\r\n        });\r\n        return ret;\r\n    }\r\n\r\n    destroyGameObjectsIfNecessary(objs) {\r\n        objs.forEach(obj => {\r\n            if(obj.toDestroy) {\r\n                this.destroyGameObject(obj);\r\n            } else {\r\n                this.destroyGameObjectsIfNecessary(obj.gameObjects);\r\n            }\r\n        });\r\n    }\r\n\r\n    destroyGameObject(obj) {\r\n        if(obj.parent) {\r\n            obj.parent.gameObjects = obj.parent.gameObjects.filter(obj2 => obj2.id !== obj.id);\r\n        } else {\r\n            this.gameObjects = this.gameObjects.filter(obj2 => obj2.id !== obj.id);\r\n        }\r\n    }\r\n\r\n    run() {\r\n        this.lastUpdate = Date.now();\r\n        setInterval(() => {\r\n            let now = Date.now();\r\n            let deltaTime = now - this.lastUpdate;\r\n            this.lastUpdate = now;\r\n            deltaTime = deltaTime / 1000;\r\n            this.update(deltaTime);\r\n        }, 0);\r\n    }\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (Engine);\n\n//# sourceURL=webpack:///./src/engine/Engine.js?");

/***/ }),

/***/ "./src/engine/gameObject/GameObject.js":
/*!*********************************************!*\
  !*** ./src/engine/gameObject/GameObject.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nlet GENERATED_ID = 0;\r\n\r\nclass GameObject {\r\n    constructor(name) {\r\n        this.id = GENERATED_ID++;\r\n        this.tags = [];\r\n        this.name = name;\r\n        this.parent = null;\r\n        this.gameObjects = [];\r\n        this.sprite = null;\r\n        this.collider = null;\r\n        this.rigidBody = null;\r\n        this.rigidBody = null;\r\n        this.toDestroy = false;\r\n        this.transform = { x: 0, y: 0, w: 0, h: 0 }\r\n        this._update = () => {}\r\n        this.onCollision = col2 => {}\r\n    }\r\n\r\n    setComponent(componentName, component) {\r\n        this[componentName] = component;\r\n    }\r\n\r\n    setUpdate(updateCallback) {\r\n        this._update = updateCallback.bind(this);\r\n    }\r\n\r\n    setOnCreate(onCreateCallback) {\r\n        this._onCreate = onCreateCallback.bind(this);\r\n    }\r\n\r\n    update(deltaTime) {\r\n        this._update(deltaTime);\r\n        this.gameObjects.forEach( obj => obj.update(deltaTime) );\r\n    }\r\n\r\n    setOnCollision(onCollisionCallback) {\r\n        this.onCollision = onCollisionCallback.bind(this);\r\n    }\r\n\r\n    addChild(gameObject) {\r\n        gameObject.parent = this;\r\n        this.gameObjects.push(gameObject);\r\n    }\r\n\r\n    addTag(tag) {\r\n        this.tags.push(tag);\r\n    }\r\n\r\n    hasTag(tag) {\r\n        return !!this.tags.find(t => t === tag);\r\n    }\r\n\r\n    destroySelf() {\r\n        this.toDestroy = true;\r\n    }\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (GameObject);\n\n//# sourceURL=webpack:///./src/engine/gameObject/GameObject.js?");

/***/ }),

/***/ "./src/engine/input/Input.js":
/*!***********************************!*\
  !*** ./src/engine/input/Input.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass Input {\r\n    constructor() {\r\n        this.initialized = false;\r\n        this.Mouse = {};\r\n        this.Keys = {};\r\n        this.Actions = {};\r\n        this.ActionMap = null;\r\n    }\r\n\r\n    init(canvasName, actionMap) {\r\n        if(!this.initialized) {\r\n            this.ActionMap = actionMap;\r\n\r\n            window.onkeyup = e => this.keyPressed(e.key, false)\r\n            \r\n            window.onkeydown = e => this.keyPressed(e.key, true)\r\n            \r\n            let canvas = document.getElementById(canvasName);\r\n            \r\n            onmousemove = e => {\r\n                if(canvas) {\r\n                    let rect = canvas.getBoundingClientRect();\r\n                    this.Mouse.x = e.clientX - rect.left;\r\n                    this.Mouse.y = e.clientY - rect.top;\r\n                }\r\n            }\r\n\r\n            onmouseup = e => {\r\n                this.onMouseClicked(false);\r\n            }\r\n\r\n            onmousedown = e => {\r\n                this.onMouseClicked(true);\r\n            }\r\n\r\n            this.initialized = true;\r\n        }\r\n    }\r\n\r\n    onMouseClicked(state) {\r\n        this.Actions[this.ActionMap[\"MouseDown\"]] = state;\r\n    }\r\n\r\n    keyPressed(key, state) {\r\n        this.Keys[key] = state;\r\n        if(this.ActionMap)\r\n            this.Actions[this.ActionMap[key]] = state;\r\n    }\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (new Input());\n\n//# sourceURL=webpack:///./src/engine/input/Input.js?");

/***/ }),

/***/ "./src/engine/physics/Physics.js":
/*!***************************************!*\
  !*** ./src/engine/physics/Physics.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _vector_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../vector/utils */ \"./src/engine/vector/utils.js\");\n\r\n\r\nclass Physics {\r\n    run(deltaTime, gameObjects, oldTransforms) {\r\n        this.moveRigidBodies( gameObjects, deltaTime );\r\n        this.treatCollisions( deltaTime, gameObjects, oldTransforms );\r\n    }\r\n\r\n    moveRigidBodies(gameObjects, deltaTime) {\r\n        gameObjects.forEach( gameObject => {\r\n            this.moveRigidBody( gameObject, deltaTime );\r\n        } );\r\n    }\r\n    \r\n    moveRigidBody(gameObject, deltaTime) {\r\n        if(gameObject.rigidBody) {\r\n            gameObject.transform.x += gameObject.rigidBody.velocity.x * deltaTime;\r\n            gameObject.transform.y += gameObject.rigidBody.velocity.y * deltaTime;\r\n        }\r\n        gameObject.gameObjects.forEach( child => this.moveRigidBody(child, deltaTime) );\r\n    }\r\n\r\n    treatCollisions(deltaTime, gameObjects, oldTransforms) {\r\n        const toCancel = [];\r\n        gameObjects.forEach( gameObject1 => this.treatGameObjectCollision( deltaTime, gameObjects, gameObject1, oldTransforms, toCancel ) );\r\n        toCancel.forEach( t => cancelCollision( t.transform1, t.oldTransform1, t.collider1, t.transform2, t.collider2 ) );\r\n    }\r\n\r\n    treatGameObjectCollision(deltaTime, gameObjects, gameObject1, oldTransforms, toCancel) {\r\n        if(gameObject1.collider) {\r\n            gameObjects.forEach( gameObject2 => {\r\n                this.treatSingleCollision(deltaTime, gameObject1, gameObject2, oldTransforms, toCancel);\r\n                gameObject2.gameObjects.forEach(obj => this.treatSingleCollision(deltaTime, gameObject1, obj, oldTransforms, toCancel))\r\n            } )\r\n        }\r\n        gameObject1.gameObjects.forEach(obj => this.treatGameObjectCollision(deltaTime, gameObjects, obj, oldTransforms, toCancel))\r\n    }\r\n\r\n    treatSingleCollision(deltaTime, gameObject1, gameObject2, oldTransforms, toCancel) {\r\n        if(gameObject1.name !== gameObject2.name && gameObject2.collider) {\r\n            const transform1 = gameObject1.transform;\r\n            const transform2 = gameObject2.transform;\r\n            const collider1 = gameObject1.collider;\r\n            const collider2 = gameObject2.collider;\r\n            if(isColliding( collider1, transform1, collider2, transform2 )) {\r\n                gameObject1.onCollision( gameObject2, deltaTime );\r\n                gameObject2.onCollision( gameObject1, deltaTime );\r\n                if(collider1.solid && collider2.solid) {\r\n                    const oldTransform1 = oldTransforms.find( t => t.id === gameObject1.id );\r\n                    toCancel.push({\r\n                        transform1,\r\n                        oldTransform1,\r\n                        collider1,\r\n                        transform2,\r\n                        collider2\r\n                     });\r\n                }\r\n            }\r\n        }\r\n    }\r\n}\r\n\r\nconst isColliding = (collider1, transform1, collider2, transform2) => \r\n    (\r\n        (transform1.x > transform2.x && transform1.x < (transform2.x + collider2.w))\r\n        ||\r\n        ((transform1.x + collider1.w) > transform2.x && (transform1.x + collider1.w) < (transform2.x + collider2.w))\r\n    )\r\n    &&\r\n    (\r\n        (transform1.y > transform2.y && transform1.y < (transform2.y + collider2.h))\r\n        ||\r\n        ((transform1.y + collider1.h) > transform2.y && (transform1.y + collider1.h) < (transform2.y + collider2.h))\r\n    )\r\n\r\nconst cancelCollision = (transform1, oldTransform1, collider1, transform2, collider2) => {\r\n    const holdX = {...transform1, x: oldTransform1.x};\r\n    const holdY = {...transform1, y: oldTransform1.y};\r\n    if(isColliding(collider1, holdX, collider2, transform2)) {\r\n        transform1.y = oldTransform1.y;\r\n    } else if(isColliding(collider1, holdY, collider2, transform2)) {\r\n        transform1.x = oldTransform1.x;\r\n    }\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (Physics);\n\n//# sourceURL=webpack:///./src/engine/physics/Physics.js?");

/***/ }),

/***/ "./src/engine/renderer/Primitives.js":
/*!*******************************************!*\
  !*** ./src/engine/renderer/Primitives.js ***!
  \*******************************************/
/*! exports provided: PrimitiveTypes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"PrimitiveTypes\", function() { return PrimitiveTypes; });\nconst PrimitiveTypes = {\r\n    Square: \"Primitives.Square\"\r\n}\r\n\r\n\n\n//# sourceURL=webpack:///./src/engine/renderer/Primitives.js?");

/***/ }),

/***/ "./src/engine/renderer/Renderer.js":
/*!*****************************************!*\
  !*** ./src/engine/renderer/Renderer.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Renderer; });\n/* harmony import */ var _Primitives__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Primitives */ \"./src/engine/renderer/Primitives.js\");\n\r\n\r\nclass Renderer {\r\n    constructor(canvasName) {\r\n        this.canvas = document.getElementById(canvasName);\r\n        if(!this.canvas) {\r\n            console.log(\"No canvas detected. Aborting.\")\r\n        } else {\r\n            this.context = this.canvas.getContext(\"2d\");\r\n        }\r\n    }\r\n\r\n    render(deltaTime, gameObjects) {\r\n        this.context.fillStyle = \"#000000\";\r\n        this.context.fillRect(0, 0, this.canvas.width, this.canvas.height);\r\n        gameObjects.forEach(gameObject => {\r\n            this.renderObj( gameObject );\r\n        })\r\n    }\r\n\r\n    renderObj(gameObject) {\r\n        const { sprite, transform } = gameObject;\r\n        if(sprite && sprite.primitive && sprite.primitiveType === _Primitives__WEBPACK_IMPORTED_MODULE_0__[\"PrimitiveTypes\"].Square) {\r\n            this.context.fillStyle = sprite.primitiveColor;\r\n            this.context.fillRect(transform.x, transform.y, transform.w, transform.h);\r\n        }\r\n        gameObject.gameObjects.forEach( child => this.renderObj(child) )\r\n    }\r\n}\n\n//# sourceURL=webpack:///./src/engine/renderer/Renderer.js?");

/***/ }),

/***/ "./src/engine/vector/utils.js":
/*!************************************!*\
  !*** ./src/engine/vector/utils.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst module = vector => {\r\n    return Math.sqrt(vector.x*vector.x+vector.y*vector.y);\r\n}\r\n\r\nconst unit = vector => {\r\n    const mod = module(vector);\r\n    return {\r\n        x: vector.x / mod,\r\n        y: vector.y / mod\r\n    }\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\r\n    module,\r\n    unit\r\n});\n\n//# sourceURL=webpack:///./src/engine/vector/utils.js?");

/***/ }),

/***/ "./src/game/characters/dummy/Dummy.js":
/*!********************************************!*\
  !*** ./src/game/characters/dummy/Dummy.js ***!
  \********************************************/
/*! exports provided: createDummy */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createDummy\", function() { return createDummy; });\n/* harmony import */ var _engine_gameObject_GameObject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../engine/gameObject/GameObject */ \"./src/engine/gameObject/GameObject.js\");\n/* harmony import */ var _engine_renderer_Primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../engine/renderer/Primitives */ \"./src/engine/renderer/Primitives.js\");\n/* harmony import */ var _engine_vector_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../engine/vector/utils */ \"./src/engine/vector/utils.js\");\n\r\n\r\n\r\n\r\nfunction onCollision(collidedObj, deltaTime) {\r\n    if(collidedObj.hasTag(\"bullet\")) {\r\n        this.sprite.primitiveColor = \"#FFFFFF\";\r\n        setTimeout(() => {\r\n            this.destroySelf();\r\n        }, 50);\r\n    }\r\n}\r\n\r\nfunction createDummy(name, player) {\r\n    const dummy = new _engine_gameObject_GameObject__WEBPACK_IMPORTED_MODULE_0__[\"default\"]( name );\r\n    dummy.moveSpeed = 250;\r\n    dummy.playerRef = player;\r\n    dummy.setComponent(\"transform\", { x: 150, y: 150, h: 20, w: 20 });\r\n    dummy.setComponent(\"collider\", { h: 20, w: 20, solid: true });\r\n    dummy.setComponent(\"sprite\", { primitive: true, primitiveType: _engine_renderer_Primitives__WEBPACK_IMPORTED_MODULE_1__[\"PrimitiveTypes\"].Square, primitiveColor: \"#8e2727\" });\r\n    dummy.setComponent(\"rigidBody\", { velocity: { x: 0, y: 0 } });\r\n    dummy.setUpdate(function(deltaTime) {\r\n        const direction = _engine_vector_utils__WEBPACK_IMPORTED_MODULE_2__[\"default\"].unit({\r\n            x: (this.playerRef.transform.x - this.transform.x),\r\n            y: (this.playerRef.transform.y - this.transform.y)\r\n        });\r\n        this.rigidBody.velocity = { x: direction.x * dummy.moveSpeed, y: direction.y * dummy.moveSpeed }\r\n    })\r\n    dummy.setOnCollision( onCollision );\r\n    dummy.addTag(\"enemy\");\r\n    return dummy;\r\n}\n\n//# sourceURL=webpack:///./src/game/characters/dummy/Dummy.js?");

/***/ }),

/***/ "./src/game/characters/player/Crosshairs.js":
/*!**************************************************!*\
  !*** ./src/game/characters/player/Crosshairs.js ***!
  \**************************************************/
/*! exports provided: createCrosshairs */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createCrosshairs\", function() { return createCrosshairs; });\n/* harmony import */ var _engine_gameObject_GameObject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../engine/gameObject/GameObject */ \"./src/engine/gameObject/GameObject.js\");\n/* harmony import */ var _engine_renderer_Primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../engine/renderer/Primitives */ \"./src/engine/renderer/Primitives.js\");\n/* harmony import */ var _engine_vector_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../engine/vector/utils */ \"./src/engine/vector/utils.js\");\n/* harmony import */ var _engine_input_Input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../engine/input/Input */ \"./src/engine/input/Input.js\");\n\r\n\r\n\r\n\r\n\r\nfunction createBullet(name, origin, target) {\r\n    const bullet = new _engine_gameObject_GameObject__WEBPACK_IMPORTED_MODULE_0__[\"default\"]( name );\r\n    bullet.speed = 2000;\r\n    const direction = _engine_vector_utils__WEBPACK_IMPORTED_MODULE_2__[\"default\"].unit({\r\n        x: (target.transform.x - origin.transform.x),\r\n        y: (target.transform.y - origin.transform.y)\r\n    });\r\n    bullet.setComponent( \"transform\", { x: origin.transform.x, y: origin.transform.y, h: 15, w: 15 } );\r\n    bullet.setComponent( \"sprite\", { primitive: true, primitiveType: _engine_renderer_Primitives__WEBPACK_IMPORTED_MODULE_1__[\"PrimitiveTypes\"].Square, primitiveColor: \"#ffe399\" } );\r\n    bullet.setComponent( \"rigidBody\", { velocity: { x: direction.x * bullet.speed, y: direction.y * bullet.speed } } );\r\n    bullet.setComponent(\"collider\", { h: 15, w: 15, solid: false });\r\n    bullet.setOnCollision(function(collidedObj, deltaTime) {\r\n        if(!collidedObj.hasTag(\"player\")) {\r\n            bullet.destroySelf();\r\n        }\r\n    });\r\n    bullet.addTag(\"bullet\");\r\n    setTimeout(() => { bullet.destroySelf() }, 600)\r\n    return bullet;\r\n}\r\n\r\nfunction createCrosshairs(name) {\r\n    const crosshairs = new _engine_gameObject_GameObject__WEBPACK_IMPORTED_MODULE_0__[\"default\"]( name );\r\n    crosshairs.setComponent( \"transform\", { x: 200, y: 200, h: 5, w: 5 } );\r\n    crosshairs.setComponent( \"sprite\", { primitive: true, primitiveType: _engine_renderer_Primitives__WEBPACK_IMPORTED_MODULE_1__[\"PrimitiveTypes\"].Square, primitiveColor: \"#ffecba\" } );\r\n    crosshairs.setUpdate(function(deltaTime) {\r\n        this.transform = { ..._engine_input_Input__WEBPACK_IMPORTED_MODULE_3__[\"default\"].Mouse, h: this.transform.h, w: this.transform.w };\r\n        let player = this.parent;\r\n        if(!this.isFiring && _engine_input_Input__WEBPACK_IMPORTED_MODULE_3__[\"default\"].Actions[\"Fire\"]) {\r\n            this.addChild(createBullet(\"bullet\", player, this));\r\n            this.isFiring = true;\r\n            setTimeout(() => {\r\n                this.isFiring = false;\r\n            }, 100)\r\n        }\r\n    });\r\n    return crosshairs;\r\n}\n\n//# sourceURL=webpack:///./src/game/characters/player/Crosshairs.js?");

/***/ }),

/***/ "./src/game/characters/player/Player.js":
/*!**********************************************!*\
  !*** ./src/game/characters/player/Player.js ***!
  \**********************************************/
/*! exports provided: createPlayer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createPlayer\", function() { return createPlayer; });\n/* harmony import */ var _engine_gameObject_GameObject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../engine/gameObject/GameObject */ \"./src/engine/gameObject/GameObject.js\");\n/* harmony import */ var _engine_renderer_Primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../engine/renderer/Primitives */ \"./src/engine/renderer/Primitives.js\");\n/* harmony import */ var _engine_input_Input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../engine/input/Input */ \"./src/engine/input/Input.js\");\n\r\n\r\n\r\n\r\nfunction update(deltaTime) {\r\n    const speed = 300;\r\n    this.rigidBody.velocity = { x: 0, y: 0 }\r\n    if(_engine_input_Input__WEBPACK_IMPORTED_MODULE_2__[\"default\"].Actions[\"MoveLeft\"])\r\n        this.rigidBody.velocity = { x: -1 * speed, y: this.rigidBody.velocity.y }\r\n    if(_engine_input_Input__WEBPACK_IMPORTED_MODULE_2__[\"default\"].Actions[\"MoveRight\"])\r\n        this.rigidBody.velocity = { x: speed, y: this.rigidBody.velocity.y }\r\n    if(_engine_input_Input__WEBPACK_IMPORTED_MODULE_2__[\"default\"].Actions[\"MoveDown\"])\r\n        this.rigidBody.velocity = { x: this.rigidBody.velocity.x, y: speed }\r\n    if(_engine_input_Input__WEBPACK_IMPORTED_MODULE_2__[\"default\"].Actions[\"MoveUp\"])\r\n        this.rigidBody.velocity = { x: this.rigidBody.velocity.x, y: -1 * speed }\r\n}\r\n\r\nfunction onCollision(collidedObj, deltaTime) {\r\n}\r\n\r\nfunction createPlayer(name) {\r\n    const player = new _engine_gameObject_GameObject__WEBPACK_IMPORTED_MODULE_0__[\"default\"]( name );\r\n    player.setComponent( \"transform\", { x: 500, y: 100, h: 20, w: 20 } );\r\n    player.setComponent( \"collider\", { h: 20, w: 20, solid: true } );\r\n    player.setComponent( \"sprite\", { primitive: true, primitiveType: _engine_renderer_Primitives__WEBPACK_IMPORTED_MODULE_1__[\"PrimitiveTypes\"].Square, primitiveColor: \"#42F4A1\" } );\r\n    player.setComponent( \"rigidBody\", { velocity: { x: 0, y: 0 } } );\r\n    player.addTag(\"player\");\r\n    player.setOnCollision( onCollision );\r\n    player.setUpdate( update );\r\n    return player;\r\n}\n\n//# sourceURL=webpack:///./src/game/characters/player/Player.js?");

/***/ }),

/***/ "./src/game/config/ActionMap.js":
/*!**************************************!*\
  !*** ./src/game/config/ActionMap.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst ActionMap = {\r\n    \"w\":            \"MoveUp\",\r\n    \"ArrowUp\":      \"MoveUp\",\r\n    \"s\":            \"MoveDown\",\r\n    \"ArrowDown\":    \"MoveDown\",\r\n    \"d\":            \"MoveRight\",\r\n    \"ArrowRight\":   \"MoveRight\",\r\n    \"a\":            \"MoveLeft\",\r\n    \"ArrowLeft\":    \"MoveLeft\",\r\n    \"MouseDown\":    \"Fire\"\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (ActionMap);\n\n//# sourceURL=webpack:///./src/game/config/ActionMap.js?");

/***/ }),

/***/ "./src/game/levels/Level_1.js":
/*!************************************!*\
  !*** ./src/game/levels/Level_1.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _engine_gameObject_GameObject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../engine/gameObject/GameObject */ \"./src/engine/gameObject/GameObject.js\");\n/* harmony import */ var _engine_renderer_Primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../engine/renderer/Primitives */ \"./src/engine/renderer/Primitives.js\");\n/* harmony import */ var _engine_input_Input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../engine/input/Input */ \"./src/engine/input/Input.js\");\n/* harmony import */ var _characters_player_Player__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../characters/player/Player */ \"./src/game/characters/player/Player.js\");\n/* harmony import */ var _characters_player_Crosshairs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../characters/player/Crosshairs */ \"./src/game/characters/player/Crosshairs.js\");\n/* harmony import */ var _characters_dummy_Dummy__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../characters/dummy/Dummy */ \"./src/game/characters/dummy/Dummy.js\");\n/* harmony import */ var _commons_Walls__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./commons/Walls */ \"./src/game/levels/commons/Walls.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nconst player = Object(_characters_player_Player__WEBPACK_IMPORTED_MODULE_3__[\"createPlayer\"])(\"player\");\r\nplayer.addChild(Object(_characters_player_Crosshairs__WEBPACK_IMPORTED_MODULE_4__[\"createCrosshairs\"])(\"crosshairs\"));\r\nconst walls = Object(_commons_Walls__WEBPACK_IMPORTED_MODULE_6__[\"createWalls\"])(\"walls\");\r\n\r\nlet Level_1 = [\r\n    player,\r\n    walls\r\n];\r\n\r\nconst levelManager = new _engine_gameObject_GameObject__WEBPACK_IMPORTED_MODULE_0__[\"default\"]( name );\r\nlevelManager.setComponent( \"transform\", { x: 0, y: 0, h: 0, w: 0 } );\r\nsetInterval(() => {\r\n    const dummy = Object(_characters_dummy_Dummy__WEBPACK_IMPORTED_MODULE_5__[\"createDummy\"])(\"dummy2\", player);\r\n    dummy.transform.y = Math.random() * 500;\r\n    dummy.transform.x = Math.random() * 400;\r\n    levelManager.addChild(dummy);\r\n}, 500);\r\n\r\nLevel_1.push(levelManager);\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (Level_1);\n\n//# sourceURL=webpack:///./src/game/levels/Level_1.js?");

/***/ }),

/***/ "./src/game/levels/commons/Walls.js":
/*!******************************************!*\
  !*** ./src/game/levels/commons/Walls.js ***!
  \******************************************/
/*! exports provided: createWalls */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createWalls\", function() { return createWalls; });\n/* harmony import */ var _engine_gameObject_GameObject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../engine/gameObject/GameObject */ \"./src/engine/gameObject/GameObject.js\");\n/* harmony import */ var _engine_renderer_Primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../engine/renderer/Primitives */ \"./src/engine/renderer/Primitives.js\");\n\r\n\r\n\r\nfunction createWalls() {\r\n    const wallRight = new _engine_gameObject_GameObject__WEBPACK_IMPORTED_MODULE_0__[\"default\"]( \"wallRight\" );\r\n    wallRight.setComponent(\"transform\", { x: 980, y: 0, h: 600, w: 20 });\r\n    wallRight.setComponent(\"collider\", { h: 980, w: 20, solid: true });\r\n    wallRight.setComponent(\"sprite\", { primitive: true, primitiveType: _engine_renderer_Primitives__WEBPACK_IMPORTED_MODULE_1__[\"PrimitiveTypes\"].Square, primitiveColor: \"#F4C242\" });\r\n    const wallLeft = new _engine_gameObject_GameObject__WEBPACK_IMPORTED_MODULE_0__[\"default\"]( \"wallLeft\" );\r\n    wallLeft.setComponent(\"transform\", { x: 0, y: 0, h: 980, w: 20 });\r\n    wallLeft.setComponent(\"collider\", { h: 600, w: 20, solid: true });\r\n    wallLeft.setComponent(\"sprite\", { primitive: true, primitiveType: _engine_renderer_Primitives__WEBPACK_IMPORTED_MODULE_1__[\"PrimitiveTypes\"].Square, primitiveColor: \"#F4C242\" });\r\n    const wallTop = new _engine_gameObject_GameObject__WEBPACK_IMPORTED_MODULE_0__[\"default\"]( \"wallTop\" );\r\n    wallTop.setComponent(\"transform\", { x: 20, y: 0, h: 20, w: 980 });\r\n    wallTop.setComponent(\"collider\", { h: 20, w: 980, solid: true });\r\n    wallTop.setComponent(\"sprite\", { primitive: true, primitiveType: _engine_renderer_Primitives__WEBPACK_IMPORTED_MODULE_1__[\"PrimitiveTypes\"].Square, primitiveColor: \"#F4C242\" });\r\n    const wallBottom = new _engine_gameObject_GameObject__WEBPACK_IMPORTED_MODULE_0__[\"default\"]( \"wallBottom\" );\r\n    wallBottom.setComponent(\"transform\", { x: 20, y: 580, h: 20, w: 960 });\r\n    wallBottom.setComponent(\"collider\", { h: 20, w: 960, solid: true });\r\n    wallBottom.setComponent(\"sprite\", { primitive: true, primitiveType: _engine_renderer_Primitives__WEBPACK_IMPORTED_MODULE_1__[\"PrimitiveTypes\"].Square, primitiveColor: \"#F4C242\" });\r\n    const walls = new _engine_gameObject_GameObject__WEBPACK_IMPORTED_MODULE_0__[\"default\"](\"walls\");\r\n    walls.addChild(wallRight);\r\n    walls.addChild(wallLeft);\r\n    walls.addChild(wallTop);\r\n    walls.addChild(wallBottom);\r\n    return walls;\r\n}\n\n//# sourceURL=webpack:///./src/game/levels/commons/Walls.js?");

/***/ })

/******/ });