(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-card-container>\n</app-card-container>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/card-container/card-container.component.html":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/card-container/card-container.component.html ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div #container class=\"container\" [class.focused]=\"isFocused()\">\n  <div class=\"header\">\n    <h1>Jack Gallagher</h1>\n  </div>\n  <app-card\n    *ngFor=\"let card of cards; let i = index\"\n    [@focused]=\"isSelected(card.id)\"\n    [ngStyle]=\"getCardStyles(card.id)\"\n    [category]=\"card.category\"\n    [title]=\"card.title\"\n    [subtitle]=\"card.subtitle\"\n    [bgImage]=\"card.bannerUrl\"\n    [cardHeight]=\"cardHeight\"\n    [expanded]=\"isSelected(card.id)\"\n    (click)=\"selectCard(card.id)\"\n    [class.focused]=\"isSelected(card.id)\"\n    [canClose]=\"isMobile()\"\n    (close)=\"deselectCard()\"\n  >\n    <div class=\"card-content\">\n      <ng-container *ngFor=\"let item of card.body\">\n        <div *ngIf=\"item.type == 'text'\" class=\"body-text-container\" [innerHtml]=\"item.content\"></div>\n        <div *ngIf=\"item.type == 'image'\" class=\"body-image-container\">\n          <div class=\"image\">\n            <img [src]=\"item.sourceUrl\">\n            <div *ngIf=\"item.content != '' \" class=\"banner\">{{item.content}}</div>\n          </div>\n          \n        </div>\n        \n        <div *ngIf=\"item.type == 'screenshot'\" class=\"body-screenshot-container\">\n          <div class=\"screenshot\">\n            <img *ngIf=\"!isVideo(item.sourceUrl)\" [src]=\"item.sourceUrl\">\n            <video *ngIf=\"isSelected(card.id) && isVideo(item.sourceUrl)\" autoplay loop [muted]=\"true\" playsinline>\n              <source [src]=\"getSafeVideoUrl(item.sourceUrl)\" type=\"video/mp4\">\n            </video>\n            <div class=\"banner\">{{item.content}}</div>\n          </div>\n          \n        </div>\n\n        <div *ngIf=\"item.type == 'video'\" class=\"body-video-container\">\n          <video *ngIf=\"isSelected(card.id)\" [poster]=\"item.bannerUrl\"  controls allowfullscreen>\n            <source [src]=\"getSafeVideoUrl(item.sourceUrl)\" type=\"video/mp4\">\n          </video>\n        </div>\n        <div *ngIf=\"item.type == 'youtube'\" class=\"body-video-container\">\n          <iframe *ngIf=\"isSelected(card.id)\" width=\"560\" height=\"315\" [src]=\"getSafeVideoUrl(item.sourceUrl)\" frameborder=\"0\" allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>\n        </div>\n\n        <div *ngIf=\"item.type == 'summary'\" class=\"body-summary-container\">\n            <img class=\"icon\" [src]=\"card.iconUrl\">\n            <div class=\"title\">{{card.title}}</div>\n            <div class=\"content\">{{card.subtitle}}</div>\n            <div *ngIf=\"!!card.link\" class=\"link\"><a target=\"_blank\" [href]=\"card.link\">GET</a></div>\n          </div>\n      </ng-container>\n    </div>\n  </app-card>\n  <div class=\"backdrop\" [@fadeInOut]=\"isFocused()\" (click)=\"deselectCard()\" [class.focused]=\"isFocused()\" [ngStyle]=\"backdropPosition\" ></div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/card/card.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/card/card.component.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\" [class.expanded]=\"expanded\" [smoothHeight]=\"expanded\" >\n  <div class=\"close-button\" *ngIf=\"expanded && canClose\" (click)=\"closeCard($event)\">\n      <div class=\"line-1\"></div>\n      <div class=\"line-2\"></div>\n  </div> \n  <div class=\"header\" [style.min-height]=\"cardHeight\" [style.background-image]=\"isVideoBanner() ? '' : 'url('+bgImage+')'\">\n    <video *ngIf=\"isVideoBanner()\" class=\"banner-video\" autoplay loop muted playsinline>\n      <source [src]=\"getVideoUrl()\" type=\"video/mp4\">\n    </video>\n    <div class=\"category\">{{ category }}</div>\n    <div class=\"title\">{{ title }}</div>\n    <div class=\"subtitle\">{{ subtitle }}</div>\n    \n  </div>\n  <div class=\"content\" [smoothHeight]=\"expanded\">\n    <ng-content></ng-content>\n  </div>\n</div>\n\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/animations/animations.ts":
/*!******************************************!*\
  !*** ./src/app/animations/animations.ts ***!
  \******************************************/
/*! exports provided: smoothHeight */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "smoothHeight", function() { return smoothHeight; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");


var smoothHeight = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('grow', [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('void <=> *', []),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('* <=> *', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ height: '{{startHeight}}px' }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('.5s ease')], {
        params: { startHeight: 0 }
    })
]);


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host {\n  font-family: -apple-system, BlinkMacSystemFont, sans-serif;\n}\n\napp-card-container {\n  height: 100vh;\n  width: 100vw;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qYWNrcGVyc29uYWwvRGV2ZWxvcG1lbnQvYXBwLXN0b3JlLWN2L3NyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSwwREFBQTtBQ0NKOztBRENBO0VBQ0ksYUFBQTtFQUNBLFlBQUE7QUNFSiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0e1xuICAgIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIHNhbnMtc2VyaWY7XG59XG5hcHAtY2FyZC1jb250YWluZXJ7XG4gICAgaGVpZ2h0OiAxMDB2aDtcbiAgICB3aWR0aDogMTAwdnc7XG59IiwiOmhvc3Qge1xuICBmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBzYW5zLXNlcmlmO1xufVxuXG5hcHAtY2FyZC1jb250YWluZXIge1xuICBoZWlnaHQ6IDEwMHZoO1xuICB3aWR0aDogMTAwdnc7XG59Il19 */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app-store-cv';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")).default]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_card_card_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/card/card.component */ "./src/app/components/card/card.component.ts");
/* harmony import */ var _directives_smooth_height_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./directives/smooth-height.directive */ "./src/app/directives/smooth-height.directive.ts");
/* harmony import */ var _components_card_container_card_container_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/card-container/card-container.component */ "./src/app/components/card-container/card-container.component.ts");









var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _components_card_card_component__WEBPACK_IMPORTED_MODULE_6__["CardComponent"],
                _directives_smooth_height_directive__WEBPACK_IMPORTED_MODULE_7__["SmoothHeightAnimDirective"],
                _components_card_container_card_container_component__WEBPACK_IMPORTED_MODULE_8__["CardContainerComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/card-container/card-container.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/components/card-container/card-container.component.scss ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".container {\n  width: 100vw;\n  height: 100vh;\n  overflow: scroll;\n  position: relative;\n}\n.container:before {\n  content: \"\";\n  position: absolute;\n  display: block;\n  height: 100%;\n  width: 100%;\n  top: 0;\n  left: 0;\n  z-index: 998;\n  pointer-events: none;\n  -webkit-transition: z-index 0ms linear 800ms, -webkit-backdrop-filter 600ms linear;\n  transition: z-index 0ms linear 800ms, -webkit-backdrop-filter 600ms linear;\n  transition: z-index 0ms linear 800ms, backdrop-filter 600ms linear;\n  transition: z-index 0ms linear 800ms, backdrop-filter 600ms linear, -webkit-backdrop-filter 600ms linear;\n}\n.header {\n  margin: 1rem 2.5rem;\n  border-bottom: thin solid #eee;\n}\napp-card {\n  position: absolute;\n  -webkit-transform: scale(1);\n          transform: scale(1);\n  -webkit-transition-property: top, left, width, margin-top, border-radius, max-height, -webkit-transform;\n  transition-property: top, left, width, margin-top, border-radius, max-height, -webkit-transform;\n  transition-property: top, left, width, margin-top, transform, border-radius, max-height;\n  transition-property: top, left, width, margin-top, transform, border-radius, max-height, -webkit-transform;\n  -webkit-transition-duration: 0.6s, 0.6s, 0.6s, 0.6s, 0.6s, 150ms, 400ms, 0.6s;\n          transition-duration: 0.6s, 0.6s, 0.6s, 0.6s, 0.6s, 150ms, 400ms, 0.6s;\n  -webkit-transition-timing-function: cubic-bezier(0.51, -0.07, 0, 1.4), cubic-bezier(0.51, -0.07, 0, 1.4), cubic-bezier(0.51, -0.07, 0, 1.4), cubic-bezier(0.51, -0.07, 0, 1.4), cubic-bezier(0.51, -0.07, 0, 1.4), cubic-bezier(0.51, -0.07, 0, 1.4), ease-in-out;\n          transition-timing-function: cubic-bezier(0.51, -0.07, 0, 1.4), cubic-bezier(0.51, -0.07, 0, 1.4), cubic-bezier(0.51, -0.07, 0, 1.4), cubic-bezier(0.51, -0.07, 0, 1.4), cubic-bezier(0.51, -0.07, 0, 1.4), cubic-bezier(0.51, -0.07, 0, 1.4), ease-in-out;\n  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);\n  overflow: hidden;\n}\napp-card:active {\n  -webkit-transform: scale(0.98);\n          transform: scale(0.98);\n}\napp-card:nth-last-of-type() {\n  margin-bottom: 1rem;\n}\napp-card.focused {\n  margin-top: 0;\n  overflow: scroll;\n  -ms-scroll-chaining: none;\n      overscroll-behavior: none;\n  max-height: 100vh;\n  border-radius: 16px 16px 0 0;\n}\napp-card.focused:active {\n  -webkit-transform: scale(1);\n          transform: scale(1);\n}\n@media only screen and (max-width: 600px) {\n  app-card.focused {\n    border-radius: 0px;\n  }\n}\n@media only screen and (max-width: 1000px) {\n  .header {\n    margin: 1rem 1.25rem;\n  }\n}\n.backdrop {\n  position: absolute;\n  content: \"\";\n  z-index: 997;\n  -webkit-backdrop-filter: blur(20px);\n          backdrop-filter: blur(20px);\n  pointer-events: none;\n}\n.backdrop.focused {\n  pointer-events: all;\n}\n.card-content {\n  margin-top: 1.5rem;\n  margin-bottom: 6rem;\n}\n.body-screenshot-container, .body-text-container, .body-summary-container {\n  margin: 1.5rem;\n  margin-top: 2rem;\n  font-size: 1.3rem;\n  color: #888;\n  font-weight: 300;\n}\n.body-video-container {\n  width: 100%;\n}\n.body-video-container video {\n  width: 100%;\n}\n.body-video-container video[poster] {\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n.body-image-container img {\n  -o-object-fit: contain;\n     object-fit: contain;\n  width: 100%;\n}\n.body-screenshot-container .screenshot {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  border: 1px solid #0001;\n  border-radius: 1rem;\n  overflow: hidden;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  max-width: -webkit-fit-content;\n  max-width: -moz-fit-content;\n  max-width: fit-content;\n  max-width: -webkit-fill-available;\n  margin: auto;\n  -webkit-mask-image: -webkit-radial-gradient(white, black);\n}\n.body-screenshot-container img {\n  width: 375px;\n  -o-object-fit: contain;\n     object-fit: contain;\n}\n.body-screenshot-container .banner {\n  -webkit-box-flex: 1;\n          flex-grow: 1;\n  background: #0001;\n  padding: 1rem 1.5rem;\n  text-align: start;\n  font-size: 0.8em;\n}\n.body-summary-container {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-align: center;\n          align-items: center;\n  background: #0001;\n  padding: 3rem;\n  margin: 0;\n}\n.body-summary-container > * {\n  margin-bottom: 0.8rem;\n}\n.body-summary-container .title {\n  color: black;\n  font-size: 1.8rem;\n}\n.body-summary-container .content {\n  font-weight: 200;\n  font-size: 1rem;\n}\n.body-summary-container .icon {\n  height: 64px;\n  width: 64px;\n  border-radius: 1rem;\n}\n.body-summary-container .link {\n  border-radius: 100em;\n  background: #007aff;\n  font-weight: bold;\n  padding: 0.5rem 1.5rem;\n  font-size: 1rem;\n}\n.body-summary-container .link a {\n  color: white;\n  text-decoration: none;\n  text-transform: uppercase;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qYWNrcGVyc29uYWwvRGV2ZWxvcG1lbnQvYXBwLXN0b3JlLWN2L3NyYy9hcHAvY29tcG9uZW50cy9jYXJkLWNvbnRhaW5lci9jYXJkLWNvbnRhaW5lci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9jYXJkLWNvbnRhaW5lci9jYXJkLWNvbnRhaW5lci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQTtFQUNJLFlBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQ0ZKO0FESUk7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtFQUNBLGtGQUFBO0VBQUEsMEVBQUE7RUFBQSxrRUFBQTtFQUFBLHdHQUFBO0FDRlI7QURXQTtFQUNJLG1CQUFBO0VBQ0EsOEJBQUE7QUNUSjtBRFlBO0VBQ0ksa0JBQUE7RUFFQSwyQkFBQTtVQUFBLG1CQUFBO0VBSUEsdUdBQUE7RUFBQSwrRkFBQTtFQUFBLHVGQUFBO0VBQUEsMEdBQUE7RUFDQSw2RUFBQTtVQUFBLHFFQUFBO0VBQ0EsaVFBQUE7VUFBQSx5UEFBQTtFQUVBLHlDQUFBO0VBRUEsZ0JBQUE7QUNmSjtBRGdCSTtFQUNJLDhCQUFBO1VBQUEsc0JBQUE7QUNkUjtBRGdCSTtFQUNJLG1CQUFBO0FDZFI7QURvQkE7RUFDSSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtNQUFBLHlCQUFBO0VBQ0EsaUJBQUE7RUFFQSw0QkFBQTtBQ2xCSjtBRG9CSTtFQUNJLDJCQUFBO1VBQUEsbUJBQUE7QUNsQlI7QURxQkE7RUFFSTtJQUNJLGtCQUFBO0VDbkJOO0FBQ0Y7QURzQkE7RUFDSTtJQUNJLG9CQUFBO0VDcEJOO0FBQ0Y7QUR5QkE7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUNBQUE7VUFBQSwyQkFBQTtFQUNBLG9CQUFBO0FDdkJKO0FEd0JJO0VBQ0ksbUJBQUE7QUN0QlI7QUQwQkE7RUFDSSxrQkFBQTtFQUNBLG1CQUFBO0FDdkJKO0FEeUJBO0VBQ0ksY0FBQTtFQUNBLGdCQUFBO0VBRUEsaUJBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7QUN2Qko7QUQwQkE7RUFDSSxXQUFBO0FDdkJKO0FEd0JJO0VBQ0ksV0FBQTtBQ3RCUjtBRHdCSTtFQUNJLG9CQUFBO0tBQUEsaUJBQUE7QUN0QlI7QUQyQkk7RUFDSSxzQkFBQTtLQUFBLG1CQUFBO0VBQ0EsV0FBQTtBQ3hCUjtBRDRCSTtFQUNJLG9CQUFBO0VBQUEsYUFBQTtFQUNBLDRCQUFBO0VBQUEsNkJBQUE7VUFBQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLDBCQUFBO0VBQUEsdUJBQUE7RUFBQSxrQkFBQTtFQUNBLDhCQUFBO0VBQUEsMkJBQUE7RUFBQSxzQkFBQTtFQUNBLGlDQUFBO0VBQ0EsWUFBQTtFQUNBLHlEQUFBO0FDekJSO0FEMkJJO0VBRUksWUFBQTtFQUNBLHNCQUFBO0tBQUEsbUJBQUE7QUMxQlI7QUQ0Qkk7RUFDSSxtQkFBQTtVQUFBLFlBQUE7RUFDQSxpQkEvSUQ7RUFnSkMsb0JBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FDMUJSO0FEOEJBO0VBQ0ksb0JBQUE7RUFBQSxhQUFBO0VBQ0EsNEJBQUE7RUFBQSw2QkFBQTtVQUFBLHNCQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtFQUNBLGlCQTFKRztFQTJKSCxhQUFBO0VBQ0EsU0FBQTtBQzNCSjtBRDRCSTtFQUNJLHFCQUFBO0FDMUJSO0FENEJJO0VBQ0ksWUFBQTtFQUNBLGlCQUFBO0FDMUJSO0FENEJJO0VBQ0ksZ0JBQUE7RUFDQSxlQUFBO0FDMUJSO0FENEJJO0VBQ0ksWUFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtBQzFCUjtBRDRCSTtFQUNJLG9CQUFBO0VBQ0EsbUJBaExLO0VBaUxMLGlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxlQUFBO0FDMUJSO0FEMkJRO0VBQ0ksWUFBQTtFQUVBLHFCQUFBO0VBQ0EseUJBQUE7QUMxQloiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2NhcmQtY29udGFpbmVyL2NhcmQtY29udGFpbmVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJGFwcGxlLWJsdWU6ICMwMDdhZmY7XG4kZ3JleTogIzAwMDE7XG5cbi5jb250YWluZXJ7XG4gICAgd2lkdGg6IDEwMHZ3O1xuICAgIGhlaWdodDogMTAwdmg7XG4gICAgb3ZlcmZsb3c6IHNjcm9sbDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgICAmOmJlZm9yZXtcbiAgICAgICAgY29udGVudDogJyc7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIHRvcDogMDtcbiAgICAgICAgbGVmdDogMDtcbiAgICAgICAgei1pbmRleDogOTk4O1xuICAgICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICAgICAgdHJhbnNpdGlvbjogei1pbmRleCAwbXMgbGluZWFyIDgwMG1zLCBiYWNrZHJvcC1maWx0ZXIgIDYwMG1zIGxpbmVhciA7XG4gICAgICAgIFxuICAgIH1cbiAgICAmLmZvY3VzZWR7XG4gICAgLy8gb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB9XG4gICAgXG59XG5cbi5oZWFkZXJ7XG4gICAgbWFyZ2luOiAxcmVtIDIuNXJlbTtcbiAgICBib3JkZXItYm90dG9tOiB0aGluIHNvbGlkICNlZWU7XG59XG5cbmFwcC1jYXJke1xuICAgIHBvc2l0aW9uOmFic29sdXRlO1xuXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgICBcbiAgICAkdHJhbnNsYXRlRHVyYXRpb246IC42cztcbiAgICAkdHJhbnNsYXRlVGltaW5nOiBjdWJpYy1iZXppZXIoLjUxLC0wLjA3LDAsMS40KTtcbiAgICB0cmFuc2l0aW9uLXByb3BlcnR5OiB0b3AsIGxlZnQsIHdpZHRoLCBtYXJnaW4tdG9wLCB0cmFuc2Zvcm0sIGJvcmRlci1yYWRpdXMsIG1heC1oZWlnaHQ7XG4gICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogJHRyYW5zbGF0ZUR1cmF0aW9uLCAkdHJhbnNsYXRlRHVyYXRpb24sICR0cmFuc2xhdGVEdXJhdGlvbiwgJHRyYW5zbGF0ZUR1cmF0aW9uLCAkdHJhbnNsYXRlRHVyYXRpb24sIDE1MG1zLCA0MDBtcywgJHRyYW5zbGF0ZUR1cmF0aW9uO1xuICAgIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiAkdHJhbnNsYXRlVGltaW5nLCAkdHJhbnNsYXRlVGltaW5nLCAkdHJhbnNsYXRlVGltaW5nLCAkdHJhbnNsYXRlVGltaW5nLCAkdHJhbnNsYXRlVGltaW5nLCAkdHJhbnNsYXRlVGltaW5nLCBlYXNlLWluLW91dDtcbiAgICBcbiAgICBib3gtc2hhZG93OiAwIDVweCAxNXB4IHJnYmEoMCwwLDAsMC4zKTtcblxuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgJjphY3RpdmV7XG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMC45OCk7XG4gICAgfVxuICAgICY6bnRoLWxhc3Qtb2YtdHlwZSgpe1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xuICAgIH1cbn1cblxuXG5cbmFwcC1jYXJkLmZvY3VzZWR7XG4gICAgbWFyZ2luLXRvcDogMDtcbiAgICBvdmVyZmxvdzogc2Nyb2xsO1xuICAgIG92ZXJzY3JvbGwtYmVoYXZpb3I6bm9uZTtcbiAgICBtYXgtaGVpZ2h0OiAxMDB2aDtcblxuICAgIGJvcmRlci1yYWRpdXM6IDE2cHggMTZweCAwIDA7XG4gICAgXG4gICAgJjphY3RpdmV7XG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XG4gICAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xuICAgIFxuICAgIGFwcC1jYXJkLmZvY3VzZWR7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDBweDtcbiAgICB9XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAwMHB4KSB7XG4gICAgLmhlYWRlcntcbiAgICAgICAgbWFyZ2luOiAxcmVtIDEuMjVyZW07XG4gICAgfVxuICAgXG59XG5cblxuLmJhY2tkcm9we1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBjb250ZW50OiAnJztcbiAgICB6LWluZGV4OiA5OTc7XG4gICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDIwcHgpO1xuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgICYuZm9jdXNlZHtcbiAgICAgICAgcG9pbnRlci1ldmVudHM6IGFsbDtcbiAgICB9XG59XG5cbi5jYXJkLWNvbnRlbnR7IFxuICAgIG1hcmdpbi10b3A6IDEuNXJlbTtcbiAgICBtYXJnaW4tYm90dG9tOiA2cmVtO1xufVxuLmJvZHktc2NyZWVuc2hvdC1jb250YWluZXIsIC5ib2R5LXRleHQtY29udGFpbmVyLCAgLmJvZHktc3VtbWFyeS1jb250YWluZXJ7XG4gICAgbWFyZ2luOiAxLjVyZW07XG4gICAgbWFyZ2luLXRvcDogMnJlbTtcblxuICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xuICAgIGNvbG9yOiAjODg4O1xuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG59XG5cbi5ib2R5LXZpZGVvLWNvbnRhaW5lcntcbiAgICB3aWR0aDogMTAwJTtcbiAgICB2aWRlb3tcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfVxuICAgIHZpZGVvW3Bvc3Rlcl0ge1xuICAgICAgICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgICB9XG59XG5cbi5ib2R5LWltYWdlLWNvbnRhaW5lcntcbiAgICBpbWd7XG4gICAgICAgIG9iamVjdC1maXQ6IGNvbnRhaW47XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cbn1cbi5ib2R5LXNjcmVlbnNob3QtY29udGFpbmVye1xuICAgIC5zY3JlZW5zaG90e1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAkZ3JleTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMXJlbTtcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgd2lkdGg6IGZpdC1jb250ZW50O1xuICAgICAgICBtYXgtd2lkdGg6IGZpdC1jb250ZW50O1xuICAgICAgICBtYXgtd2lkdGg6IC13ZWJraXQtZmlsbC1hdmFpbGFibGU7XG4gICAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgICAgLXdlYmtpdC1tYXNrLWltYWdlOiAtd2Via2l0LXJhZGlhbC1ncmFkaWVudCh3aGl0ZSwgYmxhY2spO1xuICAgIH1cbiAgICBpbWd7XG4gICAgICAgIC8vIGlQaG9uZSA4IHNpemUgc2NyZWVuc2hvdHMgb25seSBmb3IgdGhlIG1vbWVudFxuICAgICAgICB3aWR0aDogMzc1cHg7XG4gICAgICAgIG9iamVjdC1maXQ6IGNvbnRhaW47XG4gICAgfVxuICAgIC5iYW5uZXJ7XG4gICAgICAgIGZsZXgtZ3JvdzogMTtcbiAgICAgICAgYmFja2dyb3VuZDogJGdyZXk7XG4gICAgICAgIHBhZGRpbmc6IDFyZW0gMS41cmVtO1xuICAgICAgICB0ZXh0LWFsaWduOiBzdGFydDtcbiAgICAgICAgZm9udC1zaXplOiAuOGVtO1xuICAgIH1cbn1cblxuLmJvZHktc3VtbWFyeS1jb250YWluZXJ7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZDokZ3JleTsgXG4gICAgcGFkZGluZzogM3JlbTtcbiAgICBtYXJnaW46IDA7XG4gICAgPiAqIHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogLjhyZW07XG4gICAgfVxuICAgIC50aXRsZXtcbiAgICAgICAgY29sb3I6IGJsYWNrO1xuICAgICAgICBmb250LXNpemU6IDEuOHJlbTtcbiAgICB9XG4gICAgLmNvbnRlbnR7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiAyMDA7XG4gICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICB9XG4gICAgLmljb257XG4gICAgICAgIGhlaWdodDogNjRweDtcbiAgICAgICAgd2lkdGg6IDY0cHg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDFyZW07XG4gICAgfVxuICAgIC5saW5re1xuICAgICAgICBib3JkZXItcmFkaXVzOiAxMDBlbTtcbiAgICAgICAgYmFja2dyb3VuZDogJGFwcGxlLWJsdWU7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICBwYWRkaW5nOiAuNXJlbSAxLjVyZW07XG4gICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICAgICAgYXtcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcblxuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgfVxuICAgIH1cbn0iLCIuY29udGFpbmVyIHtcbiAgd2lkdGg6IDEwMHZ3O1xuICBoZWlnaHQ6IDEwMHZoO1xuICBvdmVyZmxvdzogc2Nyb2xsO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uY29udGFpbmVyOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgei1pbmRleDogOTk4O1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgdHJhbnNpdGlvbjogei1pbmRleCAwbXMgbGluZWFyIDgwMG1zLCBiYWNrZHJvcC1maWx0ZXIgNjAwbXMgbGluZWFyO1xufVxuLmhlYWRlciB7XG4gIG1hcmdpbjogMXJlbSAyLjVyZW07XG4gIGJvcmRlci1ib3R0b206IHRoaW4gc29saWQgI2VlZTtcbn1cblxuYXBwLWNhcmQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRyYW5zZm9ybTogc2NhbGUoMSk7XG4gIHRyYW5zaXRpb24tcHJvcGVydHk6IHRvcCwgbGVmdCwgd2lkdGgsIG1hcmdpbi10b3AsIHRyYW5zZm9ybSwgYm9yZGVyLXJhZGl1cywgbWF4LWhlaWdodDtcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC42cywgMC42cywgMC42cywgMC42cywgMC42cywgMTUwbXMsIDQwMG1zLCAwLjZzO1xuICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuNTEsIC0wLjA3LCAwLCAxLjQpLCBjdWJpYy1iZXppZXIoMC41MSwgLTAuMDcsIDAsIDEuNCksIGN1YmljLWJlemllcigwLjUxLCAtMC4wNywgMCwgMS40KSwgY3ViaWMtYmV6aWVyKDAuNTEsIC0wLjA3LCAwLCAxLjQpLCBjdWJpYy1iZXppZXIoMC41MSwgLTAuMDcsIDAsIDEuNCksIGN1YmljLWJlemllcigwLjUxLCAtMC4wNywgMCwgMS40KSwgZWFzZS1pbi1vdXQ7XG4gIGJveC1zaGFkb3c6IDAgNXB4IDE1cHggcmdiYSgwLCAwLCAwLCAwLjMpO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuYXBwLWNhcmQ6YWN0aXZlIHtcbiAgdHJhbnNmb3JtOiBzY2FsZSgwLjk4KTtcbn1cbmFwcC1jYXJkOm50aC1sYXN0LW9mLXR5cGUoKSB7XG4gIG1hcmdpbi1ib3R0b206IDFyZW07XG59XG5cbmFwcC1jYXJkLmZvY3VzZWQge1xuICBtYXJnaW4tdG9wOiAwO1xuICBvdmVyZmxvdzogc2Nyb2xsO1xuICBvdmVyc2Nyb2xsLWJlaGF2aW9yOiBub25lO1xuICBtYXgtaGVpZ2h0OiAxMDB2aDtcbiAgYm9yZGVyLXJhZGl1czogMTZweCAxNnB4IDAgMDtcbn1cbmFwcC1jYXJkLmZvY3VzZWQ6YWN0aXZlIHtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xuICBhcHAtY2FyZC5mb2N1c2VkIHtcbiAgICBib3JkZXItcmFkaXVzOiAwcHg7XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAwMHB4KSB7XG4gIC5oZWFkZXIge1xuICAgIG1hcmdpbjogMXJlbSAxLjI1cmVtO1xuICB9XG59XG4uYmFja2Ryb3Age1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHotaW5kZXg6IDk5NztcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDIwcHgpO1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbn1cbi5iYWNrZHJvcC5mb2N1c2VkIHtcbiAgcG9pbnRlci1ldmVudHM6IGFsbDtcbn1cblxuLmNhcmQtY29udGVudCB7XG4gIG1hcmdpbi10b3A6IDEuNXJlbTtcbiAgbWFyZ2luLWJvdHRvbTogNnJlbTtcbn1cblxuLmJvZHktc2NyZWVuc2hvdC1jb250YWluZXIsIC5ib2R5LXRleHQtY29udGFpbmVyLCAuYm9keS1zdW1tYXJ5LWNvbnRhaW5lciB7XG4gIG1hcmdpbjogMS41cmVtO1xuICBtYXJnaW4tdG9wOiAycmVtO1xuICBmb250LXNpemU6IDEuM3JlbTtcbiAgY29sb3I6ICM4ODg7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG59XG5cbi5ib2R5LXZpZGVvLWNvbnRhaW5lciB7XG4gIHdpZHRoOiAxMDAlO1xufVxuLmJvZHktdmlkZW8tY29udGFpbmVyIHZpZGVvIHtcbiAgd2lkdGg6IDEwMCU7XG59XG4uYm9keS12aWRlby1jb250YWluZXIgdmlkZW9bcG9zdGVyXSB7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xufVxuXG4uYm9keS1pbWFnZS1jb250YWluZXIgaW1nIHtcbiAgb2JqZWN0LWZpdDogY29udGFpbjtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5ib2R5LXNjcmVlbnNob3QtY29udGFpbmVyIC5zY3JlZW5zaG90IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYm9yZGVyOiAxcHggc29saWQgIzAwMDE7XG4gIGJvcmRlci1yYWRpdXM6IDFyZW07XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHdpZHRoOiBmaXQtY29udGVudDtcbiAgbWF4LXdpZHRoOiBmaXQtY29udGVudDtcbiAgbWF4LXdpZHRoOiAtd2Via2l0LWZpbGwtYXZhaWxhYmxlO1xuICBtYXJnaW46IGF1dG87XG4gIC13ZWJraXQtbWFzay1pbWFnZTogLXdlYmtpdC1yYWRpYWwtZ3JhZGllbnQod2hpdGUsIGJsYWNrKTtcbn1cbi5ib2R5LXNjcmVlbnNob3QtY29udGFpbmVyIGltZyB7XG4gIHdpZHRoOiAzNzVweDtcbiAgb2JqZWN0LWZpdDogY29udGFpbjtcbn1cbi5ib2R5LXNjcmVlbnNob3QtY29udGFpbmVyIC5iYW5uZXIge1xuICBmbGV4LWdyb3c6IDE7XG4gIGJhY2tncm91bmQ6ICMwMDAxO1xuICBwYWRkaW5nOiAxcmVtIDEuNXJlbTtcbiAgdGV4dC1hbGlnbjogc3RhcnQ7XG4gIGZvbnQtc2l6ZTogMC44ZW07XG59XG5cbi5ib2R5LXN1bW1hcnktY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYmFja2dyb3VuZDogIzAwMDE7XG4gIHBhZGRpbmc6IDNyZW07XG4gIG1hcmdpbjogMDtcbn1cbi5ib2R5LXN1bW1hcnktY29udGFpbmVyID4gKiB7XG4gIG1hcmdpbi1ib3R0b206IDAuOHJlbTtcbn1cbi5ib2R5LXN1bW1hcnktY29udGFpbmVyIC50aXRsZSB7XG4gIGNvbG9yOiBibGFjaztcbiAgZm9udC1zaXplOiAxLjhyZW07XG59XG4uYm9keS1zdW1tYXJ5LWNvbnRhaW5lciAuY29udGVudCB7XG4gIGZvbnQtd2VpZ2h0OiAyMDA7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbn1cbi5ib2R5LXN1bW1hcnktY29udGFpbmVyIC5pY29uIHtcbiAgaGVpZ2h0OiA2NHB4O1xuICB3aWR0aDogNjRweDtcbiAgYm9yZGVyLXJhZGl1czogMXJlbTtcbn1cbi5ib2R5LXN1bW1hcnktY29udGFpbmVyIC5saW5rIHtcbiAgYm9yZGVyLXJhZGl1czogMTAwZW07XG4gIGJhY2tncm91bmQ6ICMwMDdhZmY7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBwYWRkaW5nOiAwLjVyZW0gMS41cmVtO1xuICBmb250LXNpemU6IDFyZW07XG59XG4uYm9keS1zdW1tYXJ5LWNvbnRhaW5lciAubGluayBhIHtcbiAgY29sb3I6IHdoaXRlO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59Il19 */");

/***/ }),

/***/ "./src/app/components/card-container/card-container.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/card-container/card-container.component.ts ***!
  \***********************************************************************/
/*! exports provided: CardContainerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardContainerComponent", function() { return CardContainerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
/* harmony import */ var _assets_data_data_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../assets/data/data.json */ "./src/assets/data/data.json");
var _assets_data_data_json__WEBPACK_IMPORTED_MODULE_3___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../../assets/data/data.json */ "./src/assets/data/data.json", 1);
/* harmony import */ var src_app_services_window_service_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/window.service.js */ "./src/app/services/window.service.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");






var CardContainerComponent = /** @class */ (function () {
    function CardContainerComponent(cdRef, sanitizer, windowService) {
        this.cdRef = cdRef;
        this.sanitizer = sanitizer;
        this.windowService = windowService;
        this.cardHeight = "300px";
        this.cardMargin = "2.5rem";
        this.containerMargin = "6rem";
        this.cards = [];
        this.cardMap = {};
    }
    CardContainerComponent.prototype.onResize = function (event) {
        this.calculatePositions();
    };
    CardContainerComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.cards = _assets_data_data_json__WEBPACK_IMPORTED_MODULE_3__["items"];
        this.calculatePositions();
        this.windowService.onResize().subscribe(function () {
            console.log("onResize");
            _this.calculatePositions();
        });
    };
    CardContainerComponent.prototype.ngAfterViewInit = function () { };
    CardContainerComponent.prototype.disableScroll = function () {
        var _this = this;
        // Get the current page scroll position
        var scrollTop = this.container.nativeElement.scrollTop;
        var scrollLeft = this.container.nativeElement.scrollLeft;
        // if any scroll is attempted,
        // set this to the previous value
        this.container.nativeElement.onscroll = function () {
            _this.container.nativeElement.scrollTo(scrollLeft, scrollTop);
        };
    };
    CardContainerComponent.prototype.enableScroll = function () {
        this.container.nativeElement.onscroll = function () { };
    };
    CardContainerComponent.prototype.calculatePositions = function () {
        if (this.isFocused()) {
            this.disableScroll();
        }
        else {
            this.enableScroll();
        }
        if (this.isMobile()) {
            this.cardHeight = "380px";
        }
        console.log("Selected: " + this.selectedId);
        for (var i = 0; i < this.cards.length; i++) {
            var id = this.cards[i].id;
            this.cardMap[id] = this.isSelected(id)
                ? this.getSelectedPosition()
                : this.getPosition(i);
        }
        this.backdropPosition = this.getBackdropPosition();
        this.cdRef.detectChanges();
    };
    CardContainerComponent.prototype.getBackdropPosition = function () {
        return {
            top: this.getScrollTop() + "px",
            left: "0",
            width: "100vw",
            height: "100vh",
            "max-height": "100vh"
        };
    };
    CardContainerComponent.prototype.getCardStyles = function (id) {
        return this.cardMap[id];
    };
    CardContainerComponent.prototype.getSelectedPosition = function () {
        var scrollHeight = this.getScrollTop();
        var tabletCardWidth = 600;
        return this.isMobile()
            ? {
                top: scrollHeight + "px",
                left: "0px",
                width: "100vw",
                "max-height": "100vh"
            }
            : {
                top: "calc(" + scrollHeight + "px + 5vh)",
                left: "calc(50vw - " + tabletCardWidth / 2 + "px)",
                width: tabletCardWidth + "px",
                "max-height": "95vh"
            };
    };
    CardContainerComponent.prototype.getScrollTop = function () {
        return this.container.nativeElement.scrollTop;
    };
    CardContainerComponent.prototype.getPosition = function (i) {
        return {
            top: this.getPositionTop(i),
            left: this.getPositionLeft(i),
            width: this.getWidth(i),
            "max-height": this.cardHeight
        };
    };
    CardContainerComponent.prototype.selectCard = function (id) {
        this.selectedId = id;
        this.calculatePositions();
    };
    CardContainerComponent.prototype.deselectCard = function () {
        this.selectedId = null;
        this.calculatePositions();
    };
    CardContainerComponent.prototype.isFocused = function () {
        return this.selectedId != null;
    };
    CardContainerComponent.prototype.isSelected = function (id) {
        return this.selectedId == id;
    };
    CardContainerComponent.prototype.isFirstInRow = function (index) {
        return index % 2 == 0;
    };
    CardContainerComponent.prototype.isWide = function (index) {
        var row = this.getRow(index);
        var isEvenRow = row % 2 == 0;
        var firstInRow = this.isFirstInRow(index);
        return (isEvenRow && firstInRow) || (!isEvenRow && !firstInRow);
    };
    CardContainerComponent.prototype.getRow = function (index) {
        return Math.floor(index / 2);
    };
    CardContainerComponent.prototype.getWidth = function (index) {
        if (this.isMobile()) {
            return "calc(100% - " + this.cardMargin + ")";
        }
        else if (this.isPortraitTablet()) {
            return "calc(50% - " + this.cardMargin;
        }
        var widthOne = "30%";
        var widthTwo = "60%";
        return this.isWide(index) ? widthTwo : widthOne;
    };
    CardContainerComponent.prototype.isMobile = function () {
        return this.windowService.isMobile();
    };
    CardContainerComponent.prototype.isPortraitTablet = function () {
        return this.windowService.isPortraitTablet();
    };
    CardContainerComponent.prototype.getPositionTop = function (index) {
        var row = 0;
        if (this.isMobile()) {
            row = index;
        }
        else {
            row = this.getRow(index);
        }
        return "calc(" + this.containerMargin + " + " + row + " * " + this.cardHeight + " + " + row + " * " + this.cardMargin + " )";
    };
    CardContainerComponent.prototype.getPositionLeft = function (index) {
        if (this.isMobile()) {
            return "calc(" + this.cardMargin + " / 2)";
        }
        else if (this.isPortraitTablet()) {
            var startColumn = 0;
            var isFirst = this.isFirstInRow(index);
            if (isFirst) {
                startColumn = 0;
            }
            if (!isFirst) {
                startColumn = 1;
            }
            return "calc(" + startColumn + " * 50% + " + this.cardMargin + " / 2)";
        }
        else {
            var startColumn = 0;
            var isFirst = this.isFirstInRow(index);
            var isWide = this.isWide(index);
            if (isFirst) {
                startColumn = 0;
            }
            if (!isFirst) {
                startColumn = 1;
            }
            if (!isFirst && !isWide) {
                startColumn = 2;
            }
            return "calc(" + startColumn + " * 30% + " + (!isFirst ? this.cardMargin + ' * 2' : this.cardMargin) + ")";
        }
    };
    CardContainerComponent.prototype.isVideo = function (url) {
        return url.endsWith('mp4');
    };
    CardContainerComponent.prototype.getSafeVideoUrl = function (url) {
        return this.sanitizer.bypassSecurityTrustResourceUrl(url);
    };
    CardContainerComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["DomSanitizer"] },
        { type: src_app_services_window_service_js__WEBPACK_IMPORTED_MODULE_4__["WindowService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("container", { static: true }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], CardContainerComponent.prototype, "container", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], CardContainerComponent.prototype, "cardHeight", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])("window:resize", ["$event"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], CardContainerComponent.prototype, "onResize", null);
    CardContainerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-card-container",
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./card-container.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/card-container/card-container.component.html")).default,
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])("focused", [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])("true", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
                        "z-index": "999"
                        // "position":"fixed"
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])("false", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
                        "z-index": "997"
                        // "position":"absolute"
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])("true => false", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])(".6s 0s")),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])("false => true", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])(0))
                ]),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])("fadeInOut", [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])("true", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
                        opacity: "1"
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])("false", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
                        opacity: "0"
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])("true => false", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])(".4s")),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])("false => true", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])(".4s"))
                ])
            ],
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./card-container.component.scss */ "./src/app/components/card-container/card-container.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["DomSanitizer"],
            src_app_services_window_service_js__WEBPACK_IMPORTED_MODULE_4__["WindowService"]])
    ], CardContainerComponent);
    return CardContainerComponent;
}());



/***/ }),

/***/ "./src/app/components/card/card.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/components/card/card.component.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host {\n  display: block;\n  -webkit-transition: width 0.5s ease-in-out;\n  transition: width 0.5s ease-in-out;\n  overflow: hidden;\n  border-radius: 16px;\n}\n\n.container {\n  overflow: hidden;\n  position: relative;\n}\n\n.container .close-button {\n  position: absolute;\n  top: 1rem;\n  right: 1rem;\n  z-index: 1;\n  background: rgba(0, 0, 0, 0.2);\n  border-radius: 100em;\n  width: 2rem;\n  height: 2rem;\n}\n\n.container .close-button .line-1,\n.container .close-button .line-2 {\n  position: absolute;\n  top: 0.95rem;\n  left: 0.35rem;\n  width: 1.3rem;\n  height: 1.3rem;\n  border-top: 2px solid #eee;\n  -webkit-transform-origin: 51% 5%;\n          transform-origin: 51% 5%;\n}\n\n.container .close-button .line-1 {\n  -webkit-transform: rotate(45deg);\n          transform: rotate(45deg);\n}\n\n.container .close-button .line-2 {\n  -webkit-transform: rotate(-45deg);\n          transform: rotate(-45deg);\n}\n\n.container .header {\n  border-radius: 16px;\n  -webkit-transition: border-radius 150ms ease-in-out;\n  transition: border-radius 150ms ease-in-out;\n  position: relative;\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-position: center;\n}\n\n.container .header .banner-video {\n  height: 100%;\n  width: 100%;\n  position: absolute;\n  -o-object-fit: cover;\n     object-fit: cover;\n  z-index: -1;\n}\n\n.container .header .category,\n.container .header .title,\n.container .header .subtitle {\n  padding: 1rem;\n  -webkit-transition: padding 200ms ease-in-out;\n  transition: padding 200ms ease-in-out;\n}\n\n.container .header .category {\n  text-transform: uppercase;\n  font-size: 0.8rem;\n  color: grey;\n  padding-bottom: 0.3rem;\n}\n\n.container .header .title {\n  padding-top: 0;\n  font-size: 1.5rem;\n  font-weight: 600;\n  color: white;\n  text-shadow: 0px 0 5px rgba(0, 0, 0, 0.3);\n}\n\n.container .header .subtitle {\n  position: absolute;\n  font-weight: 300;\n  bottom: 0;\n  right: 0;\n  text-align: end;\n  color: white;\n}\n\n.container .content {\n  -webkit-transition: max-height 400ms ease-in-out;\n  transition: max-height 400ms ease-in-out;\n  max-height: 0px;\n  background: white;\n}\n\n.container.expanded .header {\n  border-radius: 0px;\n}\n\n.container.expanded .header .category,\n.container.expanded .header .title,\n.container.expanded .header .subtitle {\n  padding-left: 0.7rem;\n  padding-right: 0.7rem;\n}\n\n.container.expanded .content {\n  max-height: 1000000px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qYWNrcGVyc29uYWwvRGV2ZWxvcG1lbnQvYXBwLXN0b3JlLWN2L3NyYy9hcHAvY29tcG9uZW50cy9jYXJkL2NhcmQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvY2FyZC9jYXJkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBQTtFQUNBLDBDQUFBO0VBQUEsa0NBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FDQ0Y7O0FERUE7RUFDRSxnQkFBQTtFQUVBLGtCQUFBO0FDQUY7O0FEQ0U7RUFDRSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtFQUNBLDhCQUFBO0VBQ0Esb0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQ0NKOztBRENJOztFQUdFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxhQUpPO0VBS1AsY0FMTztFQU1QLDBCQUFBO0VBQ0EsZ0NBQUE7VUFBQSx3QkFBQTtBQ0FOOztBREVJO0VBQ0UsZ0NBQUE7VUFBQSx3QkFBQTtBQ0FOOztBREVJO0VBQ0UsaUNBQUE7VUFBQSx5QkFBQTtBQ0FOOztBREdFO0VBQ0UsbUJBQUE7RUFFQSxtREFBQTtFQUFBLDJDQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtFQUNBLDRCQUFBO0VBQ0EsMkJBQUE7QUNGSjs7QURHSTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtLQUFBLGlCQUFBO0VBQ0EsV0FBQTtBQ0ROOztBREdJOzs7RUFHRSxhQUFBO0VBQ0EsNkNBQUE7RUFBQSxxQ0FBQTtBQ0ROOztBREdJO0VBQ0UseUJBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxzQkFBQTtBQ0ROOztBREdJO0VBQ0UsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EseUNBQUE7QUNETjs7QURJSTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0FDRk47O0FETUU7RUFDRSxnREFBQTtFQUFBLHdDQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FDSko7O0FEUUk7RUFDRSxrQkFBQTtBQ05OOztBRE9NOzs7RUFHRSxvQkFBQTtFQUNBLHFCQUFBO0FDTFI7O0FEU0k7RUFDRSxxQkFBQTtBQ1BOIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9jYXJkL2NhcmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB0cmFuc2l0aW9uOiB3aWR0aCAwLjVzIGVhc2UtaW4tb3V0O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBib3JkZXItcmFkaXVzOiAxNnB4O1xufVxuXG4uY29udGFpbmVyIHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgLy8gbWluLWhlaWdodDogMTAwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgLmNsb3NlLWJ1dHRvbiB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMXJlbTtcbiAgICByaWdodDogMXJlbTtcbiAgICB6LWluZGV4OiAxO1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgICBib3JkZXItcmFkaXVzOiAxMDBlbTtcbiAgICB3aWR0aDogMnJlbTtcbiAgICBoZWlnaHQ6IDJyZW07XG5cbiAgICAubGluZS0xLFxuICAgIC5saW5lLTIge1xuICAgICAgJHNpemU6IDEuM3JlbTtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIHRvcDogMC45NXJlbTtcbiAgICAgIGxlZnQ6IDAuMzVyZW07XG4gICAgICB3aWR0aDogJHNpemU7XG4gICAgICBoZWlnaHQ6ICRzaXplO1xuICAgICAgYm9yZGVyLXRvcDogMnB4IHNvbGlkICNlZWU7XG4gICAgICB0cmFuc2Zvcm0tb3JpZ2luOiA1MSUgNSU7XG4gICAgfVxuICAgIC5saW5lLTEge1xuICAgICAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xuICAgIH1cbiAgICAubGluZS0yIHtcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XG4gICAgfVxuICB9XG4gIC5oZWFkZXIge1xuICAgIGJvcmRlci1yYWRpdXM6IDE2cHg7XG5cbiAgICB0cmFuc2l0aW9uOiBib3JkZXItcmFkaXVzIDE1MG1zIGVhc2UtaW4tb3V0O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgIC5iYW5uZXItdmlkZW8ge1xuICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgICAgIHotaW5kZXg6IC0xO1xuICAgIH1cbiAgICAuY2F0ZWdvcnksXG4gICAgLnRpdGxlLFxuICAgIC5zdWJ0aXRsZSB7XG4gICAgICBwYWRkaW5nOiAxcmVtO1xuICAgICAgdHJhbnNpdGlvbjogcGFkZGluZyAyMDBtcyBlYXNlLWluLW91dDtcbiAgICB9XG4gICAgLmNhdGVnb3J5IHtcbiAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICBmb250LXNpemU6IDAuOHJlbTtcbiAgICAgIGNvbG9yOiBncmV5O1xuICAgICAgcGFkZGluZy1ib3R0b206IDAuM3JlbTtcbiAgICB9XG4gICAgLnRpdGxlIHtcbiAgICAgIHBhZGRpbmctdG9wOiAwO1xuICAgICAgZm9udC1zaXplOiAxLjVyZW07XG4gICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgdGV4dC1zaGFkb3c6IDBweCAwIDVweCByZ2JhKDAsIDAsIDAsIDAuMyk7XG4gICAgfVxuXG4gICAgLnN1YnRpdGxlIHtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgICBib3R0b206IDA7XG4gICAgICByaWdodDogMDtcbiAgICAgIHRleHQtYWxpZ246IGVuZDtcbiAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICB9XG4gICAgLy8gLXdlYmtpdC1tYXNrLWltYWdlOiAtd2Via2l0LXJhZGlhbC1ncmFkaWVudCh3aGl0ZSwgYmxhY2spO1xuICB9XG4gIC5jb250ZW50IHtcbiAgICB0cmFuc2l0aW9uOiBtYXgtaGVpZ2h0IDQwMG1zIGVhc2UtaW4tb3V0O1xuICAgIG1heC1oZWlnaHQ6IDBweDtcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgfVxuXG4gICYuZXhwYW5kZWQge1xuICAgIC5oZWFkZXIge1xuICAgICAgYm9yZGVyLXJhZGl1czogMHB4O1xuICAgICAgLmNhdGVnb3J5LFxuICAgICAgLnRpdGxlLFxuICAgICAgLnN1YnRpdGxlIHtcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAwLjdyZW07XG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDAuN3JlbTtcbiAgICAgIH1cbiAgICAgIC8vIG1pbi1oZWlnaHQ6IDE1MHB4O1xuICAgIH1cbiAgICAuY29udGVudCB7XG4gICAgICBtYXgtaGVpZ2h0OiAxMDAwMDAwcHg7XG4gICAgfVxuICB9XG59XG4iLCI6aG9zdCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB0cmFuc2l0aW9uOiB3aWR0aCAwLjVzIGVhc2UtaW4tb3V0O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBib3JkZXItcmFkaXVzOiAxNnB4O1xufVxuXG4uY29udGFpbmVyIHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLmNvbnRhaW5lciAuY2xvc2UtYnV0dG9uIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDFyZW07XG4gIHJpZ2h0OiAxcmVtO1xuICB6LWluZGV4OiAxO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMik7XG4gIGJvcmRlci1yYWRpdXM6IDEwMGVtO1xuICB3aWR0aDogMnJlbTtcbiAgaGVpZ2h0OiAycmVtO1xufVxuLmNvbnRhaW5lciAuY2xvc2UtYnV0dG9uIC5saW5lLTEsXG4uY29udGFpbmVyIC5jbG9zZS1idXR0b24gLmxpbmUtMiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwLjk1cmVtO1xuICBsZWZ0OiAwLjM1cmVtO1xuICB3aWR0aDogMS4zcmVtO1xuICBoZWlnaHQ6IDEuM3JlbTtcbiAgYm9yZGVyLXRvcDogMnB4IHNvbGlkICNlZWU7XG4gIHRyYW5zZm9ybS1vcmlnaW46IDUxJSA1JTtcbn1cbi5jb250YWluZXIgLmNsb3NlLWJ1dHRvbiAubGluZS0xIHtcbiAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xufVxuLmNvbnRhaW5lciAuY2xvc2UtYnV0dG9uIC5saW5lLTIge1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xufVxuLmNvbnRhaW5lciAuaGVhZGVyIHtcbiAgYm9yZGVyLXJhZGl1czogMTZweDtcbiAgdHJhbnNpdGlvbjogYm9yZGVyLXJhZGl1cyAxNTBtcyBlYXNlLWluLW91dDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG59XG4uY29udGFpbmVyIC5oZWFkZXIgLmJhbm5lci12aWRlbyB7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG4gIHotaW5kZXg6IC0xO1xufVxuLmNvbnRhaW5lciAuaGVhZGVyIC5jYXRlZ29yeSxcbi5jb250YWluZXIgLmhlYWRlciAudGl0bGUsXG4uY29udGFpbmVyIC5oZWFkZXIgLnN1YnRpdGxlIHtcbiAgcGFkZGluZzogMXJlbTtcbiAgdHJhbnNpdGlvbjogcGFkZGluZyAyMDBtcyBlYXNlLWluLW91dDtcbn1cbi5jb250YWluZXIgLmhlYWRlciAuY2F0ZWdvcnkge1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBmb250LXNpemU6IDAuOHJlbTtcbiAgY29sb3I6IGdyZXk7XG4gIHBhZGRpbmctYm90dG9tOiAwLjNyZW07XG59XG4uY29udGFpbmVyIC5oZWFkZXIgLnRpdGxlIHtcbiAgcGFkZGluZy10b3A6IDA7XG4gIGZvbnQtc2l6ZTogMS41cmVtO1xuICBmb250LXdlaWdodDogNjAwO1xuICBjb2xvcjogd2hpdGU7XG4gIHRleHQtc2hhZG93OiAwcHggMCA1cHggcmdiYSgwLCAwLCAwLCAwLjMpO1xufVxuLmNvbnRhaW5lciAuaGVhZGVyIC5zdWJ0aXRsZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgYm90dG9tOiAwO1xuICByaWdodDogMDtcbiAgdGV4dC1hbGlnbjogZW5kO1xuICBjb2xvcjogd2hpdGU7XG59XG4uY29udGFpbmVyIC5jb250ZW50IHtcbiAgdHJhbnNpdGlvbjogbWF4LWhlaWdodCA0MDBtcyBlYXNlLWluLW91dDtcbiAgbWF4LWhlaWdodDogMHB4O1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbn1cbi5jb250YWluZXIuZXhwYW5kZWQgLmhlYWRlciB7XG4gIGJvcmRlci1yYWRpdXM6IDBweDtcbn1cbi5jb250YWluZXIuZXhwYW5kZWQgLmhlYWRlciAuY2F0ZWdvcnksXG4uY29udGFpbmVyLmV4cGFuZGVkIC5oZWFkZXIgLnRpdGxlLFxuLmNvbnRhaW5lci5leHBhbmRlZCAuaGVhZGVyIC5zdWJ0aXRsZSB7XG4gIHBhZGRpbmctbGVmdDogMC43cmVtO1xuICBwYWRkaW5nLXJpZ2h0OiAwLjdyZW07XG59XG4uY29udGFpbmVyLmV4cGFuZGVkIC5jb250ZW50IHtcbiAgbWF4LWhlaWdodDogMTAwMDAwMHB4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/components/card/card.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/card/card.component.ts ***!
  \***************************************************/
/*! exports provided: CardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardComponent", function() { return CardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _animations_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../animations/animations */ "./src/app/animations/animations.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");




var CardComponent = /** @class */ (function () {
    function CardComponent(sanitizer, container) {
        this.sanitizer = sanitizer;
        this.container = container;
        this.expandedValue = false;
        this.bgImage = "assets/coplink.jpg";
        this.canClose = true;
        this.close = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    Object.defineProperty(CardComponent.prototype, "expanded", {
        get: function () {
            return this.expandedValue;
        },
        set: function (val) {
            this.expandedValue = val;
            if (!val && !!this.container)
                this.scrollToTop();
        },
        enumerable: true,
        configurable: true
    });
    ;
    CardComponent.prototype.ngOnInit = function () {
    };
    CardComponent.prototype.closeCard = function (event) {
        this.close.emit();
        event.preventDefault();
        event.stopPropagation();
    };
    CardComponent.prototype.isVideoBanner = function () {
        return this.bgImage.endsWith('mp4');
    };
    CardComponent.prototype.getVideoUrl = function () {
        return this.sanitizer.bypassSecurityTrustResourceUrl(this.bgImage);
    };
    CardComponent.prototype.scrollToTop = function () {
        this.container.nativeElement.scrollTo({ top: 0 });
    };
    CardComponent.ctorParameters = function () { return [
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], CardComponent.prototype, "title", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], CardComponent.prototype, "subtitle", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], CardComponent.prototype, "category", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], CardComponent.prototype, "cardHeight", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Boolean])
    ], CardComponent.prototype, "expanded", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], CardComponent.prototype, "bgImage", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], CardComponent.prototype, "canClose", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], CardComponent.prototype, "close", void 0);
    CardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-card',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./card.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/card/card.component.html")).default,
            animations: [
                _animations_animations__WEBPACK_IMPORTED_MODULE_2__["smoothHeight"]
            ],
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./card.component.scss */ "./src/app/components/card/card.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])
    ], CardComponent);
    return CardComponent;
}());



/***/ }),

/***/ "./src/app/directives/smooth-height.directive.ts":
/*!*******************************************************!*\
  !*** ./src/app/directives/smooth-height.directive.ts ***!
  \*******************************************************/
/*! exports provided: SmoothHeightAnimDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SmoothHeightAnimDirective", function() { return SmoothHeightAnimDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SmoothHeightAnimDirective = /** @class */ (function () {
    function SmoothHeightAnimDirective(element) {
        this.element = element;
    }
    Object.defineProperty(SmoothHeightAnimDirective.prototype, "grow", {
        get: function () {
            return { value: this.pulse, params: { startHeight: this.startHeight } };
        },
        enumerable: true,
        configurable: true
    });
    SmoothHeightAnimDirective.prototype.setStartHeight = function () {
        this.startHeight = this.element.nativeElement.clientHeight;
    };
    SmoothHeightAnimDirective.prototype.ngOnChanges = function (changes) {
        this.setStartHeight();
        this.pulse = !this.pulse;
    };
    SmoothHeightAnimDirective.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SmoothHeightAnimDirective.prototype, "smoothHeight", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('@grow'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SmoothHeightAnimDirective.prototype, "grow", null);
    SmoothHeightAnimDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[smoothHeight]',
            host: { '[style.display]': '"block"', '[style.overflow]': '"hidden"' }
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])
    ], SmoothHeightAnimDirective);
    return SmoothHeightAnimDirective;
}());



/***/ }),

/***/ "./src/app/services/window.service.js":
/*!********************************************!*\
  !*** ./src/app/services/window.service.js ***!
  \********************************************/
/*! exports provided: WindowService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WindowService", function() { return WindowService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");




var WindowService = /** @class */ (function () {
    function WindowService(eventManager) {
        var _this = this;
        this.eventManager = eventManager;
        this.window = window;
        this.resizeSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.eventManager.addGlobalEventListener('window', 'resize', function () {
            _this.resizeSubject.next();
        });
        this.eventManager.addGlobalEventListener('window', 'orientationchange', function () {
            _this.resizeSubject.next();
        });
    }
    WindowService.prototype.onResize = function () {
        return this.resizeSubject.asObservable();
    };
    WindowService.prototype.isMobile = function () {
        return this.window.innerWidth < 600;
    };
    WindowService.prototype.isPortraitTablet = function () {
        return this.window.innerWidth < 1000;
    };
    WindowService.ctorParameters = function () { return [
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["EventManager"] }
    ]; };
    WindowService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["EventManager"]])
    ], WindowService);
    return WindowService;
}());

//# sourceMappingURL=window.service.js.map

/***/ }),

/***/ "./src/assets/data/data.json":
/*!***********************************!*\
  !*** ./src/assets/data/data.json ***!
  \***********************************/
/*! exports provided: items, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"items\":[{\"id\":4,\"title\":\"mHealth\",\"subtitle\":\"Assisting our nurses and clinicians\",\"category\":\"App\",\"iconUrl\":\"assets/img/mhealth_icon.png\",\"link\":\"http://www.imsmaxims.com\",\"body\":[{\"type\":\"text\",\"content\":\"mHealth (Mobile Health) is a iOS, Android and Web application designed to aid clinicians and nursing with patient management. It allows the users to do a plethora of tasks, including record vital signs for a patient, do bed management, discharge planning, managing surgical theatres and much more.\"},{\"type\":\"text\",\"content\":\"I led development on this app for over 3 years with a team of 5 UI engineers, taking it from the R&D stage to production. I contributed to the development, design, deployment and planning.\"},{\"type\":\"text\",\"content\":\"Originally developed in AngularJS and Ionic, and migrated to Angular 5 and Ionic 3 by myself, the app makes extensive use of RxJS (ReactiveX), following an event driven programming model. IMS MAXIMS, the company's main enterprise offering, offers a REST API which we used to populate data.\"},{\"type\":\"text\",\"content\":\"It is currently live in Taunton & Somerset NHS Foundation Trust, as well as Wye Valley NHS Trust. Check out a video from Taunton here: \"},{\"type\":\"video\",\"sourceUrl\":\"https://dms.licdn.com/playlist/C4D05AQFEh9vxPht1Og/feedshare-captions-thumbnails-dualWrite-inhouse-mp4_h264_aac_3300k/0?e=1579906800&v=beta&t=IWb_CSb_zpPxa7GFmlQ1KS_XPyW0rdKpGapcGs807pg\"},{\"type\":\"summary\"}],\"bannerUrl\":\"assets/img/mhealth.mp4\"},{\"id\":5,\"title\":\"Clinical Noting\",\"subtitle\":\"Towards a paperless future\",\"category\":\"App\",\"iconUrl\":\"assets/img/clinical_noting_icon.png\",\"link\":\"http://www.imsmaxims.com\",\"bannerUrl\":\"assets/img/clinical_noting.jpg\",\"body\":[{\"type\":\"text\",\"content\":\"The Clinical Noting app is a web application designed to assist clinicians with note taking during patient appointments. It is launched from IMS MAXIMS, the main enterprise offering from IMS, with further developments to launch it as a standalone iOS, Android and web application in the near future.\"},{\"type\":\"screenshot\",\"sourceUrl\":\"\"},{\"type\":\"text\",\"content\":\"It is built in Angular 8, using Angular Material components, with state management being handled by NGRX. It takes advantages of the latest Angular and NGRX features, such as using the Ivy renderer, taking advantage of NGRX's new factory framework to make generic reducers/actions/selectors, and using the latest Angular CDK.\"},{\"type\":\"screenshot\",\"sourceUrl\":\"\"},{\"type\":\"text\",\"content\":\"It is due for release in Q1 2020.\"},{\"type\":\"summary\"}]},{\"id\":2,\"title\":\"We Can Help\",\"subtitle\":\"Providing a helping hand when needed\",\"category\":\"App\",\"iconUrl\":\"assets/img/wecanhelp_icon.png\",\"link\":\"http://jackgallagher.ie/WeCanHelp\",\"bannerUrl\":\"assets/img/wecanhelp.png\",\"body\":[{\"type\":\"text\",\"content\":\"We Can Help was a iOS and Android app built for my cousin, as a pitch to the HSE (Health Service Executive of Ireland) for giving people easy access to various health and safety services available in Ireland. It was an Ionic 3 / Angular 5 app that took advantage of Google Maps API, text-to-speech for  an accident and emergency feature, and SMS integration.\"},{\"type\":\"screenshot\",\"content\":\"Designed to be approachable\",\"sourceUrl\":\"assets/img/wecanhelp_animated.mp4\"},{\"type\":\"text\",\"content\":\"Ultimately, the pitch was unsuccessful due to a lack of funding, however the aesthetic design was used in an alternative pitch, for placing stickers with the relevant information. These are currently located in many public places throughout the north-west of Ireland.\"},{\"type\":\"image\",\"sourceUrl\":\"assets/img/wecanhelp_sticker.jpg\"},{\"type\":\"summary\"}]},{\"id\":1,\"title\":\"IBM Coplink\",\"subtitle\":\"Facilitating Law Enforcement\",\"category\":\"App\",\"iconUrl\":\"assets/img/coplink_icon.jpg\",\"bannerUrl\":\"assets/img/coplink.mp4\",\"body\":[{\"type\":\"text\",\"content\":\"IBM Coplink is an app to assist law enforcement officers while on the move. It is a iOS and Android application that allows the user to search the Coplink database to find people, vehicles, objects, organisations and relationships. The user can also use a map screen to find the same results for situational awareness. \"},{\"type\":\"image\",\"sourceUrl\":\"assets/img/coplink_search.jpg\"},{\"type\":\"text\",\"content\":\"I led development on the Android app, built natively with no specific framework. I ported this over from an IBM Worklight hybrid app. Developments included using the Google Maps API for the situational awareness feature, building the search screens generically to minimise duplicated UI elements and logic, and using the native camera APIs to facilitate server-side facial recognition.\"},{\"type\":\"screenshot\",\"content\":\"I worked primarily on the Andorid app.\",\"sourceUrl\":\"assets/img/coplink_login.jpg\"},{\"type\":\"text\",\"content\":\"It was live in the San Bernardino Police Department, and was used by officers in the event which kicked off one of the highest profile tech stories of 2016 (Apple - FBI Encryption Dispute).\"},{\"type\":\"youtube\",\"content\":\"Coplink in action\",\"sourceUrl\":\"https://www.youtube-nocookie.com/embed/ELGr22fIq1M?controls=0\"},{\"type\":\"text\",\"content\":\"It has since been removed from the App Store due to acquisitions.\"},{\"type\":\"summary\"}]},{\"id\":8,\"title\":\"Access Earth\",\"subtitle\":\"\",\"category\":\"App\",\"link\":\"http://access.earth\",\"iconUrl\":\"assets/img/access_earth_icon.png\",\"bannerUrl\":\"assets/img/access_earth.png\",\"body\":[{\"type\":\"text\",\"content\":\"The goal of Access Earth is to provide accessibility information for locations around the globe. The service is a platform for users to share and upload accessibility information, crowd-sourced and crowd-verified. \"},{\"type\":\"video\",\"sourceUrl\":\"assets/img/access_earth_demo.mp4\",\"bannerUrl\":\"assets/img/access_earth_promo.jpg\"},{\"type\":\"text\",\"content\":\"We entered the app and service into Microsoft's Imagine Cup in 2014. We built it in initially in jQuery and Cordova, and a second version was built in WinJS with Windows 8 Metro inspired design. It featured Cortana voice assistant support, allowing the user to add accessibility information using only their voice.\"},{\"type\":\"image\",\"sourceUrl\":\"assets/img/access_earth_win.jpg\"},{\"type\":\"text\",\"content\":\"We came 3rd Place Worldwide in the Citizenship Category. The service is still live and developing to this day (without my involvement), and has secured regular investment. \"},{\"type\":\"text\",\"content\":\"Please check out the latest version on iOS, Android and the web.\"},{\"type\":\"summary\"}]},{\"id\":6,\"title\":\"IBM Citizen Collaboration\",\"subtitle\":\"Enabling citizens to assist local governments\",\"category\":\"App\",\"body\":[{\"type\":\"text\",\"content\":\"Some content here\"}],\"bannerUrl\":\"assets/img/coplink.jpg\"},{\"id\":7,\"title\":\"IBM Intelligent Operations Center\",\"subtitle\":\"\",\"category\":\"Enterprise\",\"body\":[{\"type\":\"text\",\"content\":\"Some content here\"}],\"bannerUrl\":\"assets/img/coplink.jpg\"},{\"id\":3,\"title\":\"Worldwide Product Translation Group\",\"subtitle\":\"Providing i18n for the Oracle Suite\",\"category\":\"QA\",\"body\":[{\"type\":\"text\",\"content\":\"Some content here\"}],\"bannerUrl\":\"assets/img/oracle.jpg\"}]}");

/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/jackpersonal/Development/app-store-cv/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map