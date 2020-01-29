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
/* harmony default export */ __webpack_exports__["default"] = ("<div #container class=\"container\" [class.focused]=\"isFocused()\">\n  <div class=\"header\">\n    <h1>Jack Gallagher</h1>\n  </div>\n  <app-card\n    *ngFor=\"let card of cards; let i = index\"\n    [@focused]=\"isSelected(card.id)\"\n    [ngStyle]=\"getCardStyles(card.id)\"\n    [category]=\"card.category\"\n    [title]=\"card.title\"\n    [subtitle]=\"card.subtitle\"\n    [bgImage]=\"card.bannerUrl\"\n    [showBanner]=\"card.showBanner\"\n    [cardHeight]=\"isSelected(card.id) ? selectedCardHeaderHeight : cardHeaderHeight\"\n    [expanded]=\"isSelected(card.id)\"\n    (click)=\"selectCard(card.id)\"\n    [class.focused]=\"isSelected(card.id)\"\n    [canClose]=\"isMobile()\"\n    (close)=\"deselectCard()\"\n  >\n    <div class=\"card-content\">\n      <ng-container *ngFor=\"let item of card.body\">\n        <div *ngIf=\"item.type == 'text'\" class=\"body-text-container\" [innerHtml]=\"item.content\"></div>\n        <div *ngIf=\"item.type == 'image'\" class=\"body-image-container\">\n          <div class=\"image\">\n            <img [src]=\"item.sourceUrl\">\n            <div *ngIf=\"item.content != '' \" class=\"banner\">{{item.content}}</div>\n          </div>\n          \n        </div>\n        \n        <div *ngIf=\"item.type == 'screenshot'\" class=\"body-screenshot-container\">\n          <div class=\"screenshot\">\n            <img *ngIf=\"!isVideo(item.sourceUrl)\" [src]=\"item.sourceUrl\">\n            <video *ngIf=\"isSelected(card.id) && isVideo(item.sourceUrl)\" autoplay loop [muted]=\"true\" playsinline>\n              <source [src]=\"getSafeVideoUrl(item.sourceUrl)\" type=\"video/mp4\">\n            </video>\n            <div class=\"banner\">{{item.content}}</div>\n          </div>\n          \n        </div>\n\n        <div *ngIf=\"item.type == 'video'\" class=\"body-video-container\">\n          <video *ngIf=\"isSelected(card.id)\" [poster]=\"item.bannerUrl\"  controls allowfullscreen>\n            <source [src]=\"getSafeVideoUrl(item.sourceUrl)\" type=\"video/mp4\">\n          </video>\n        </div>\n        <div *ngIf=\"item.type == 'youtube'\" class=\"body-video-container\">\n          <iframe *ngIf=\"isSelected(card.id)\" width=\"560\" height=\"315\" [src]=\"getSafeVideoUrl(item.sourceUrl)\" frameborder=\"0\" allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>\n        </div>\n\n        <div *ngIf=\"item.type == 'summary'\" class=\"body-summary-container\">\n            <img class=\"icon\" [src]=\"card.iconUrl\">\n            <div class=\"title\">{{card.title}}</div>\n            <div class=\"content\">{{card.subtitle}}</div>\n            <div *ngIf=\"!!card.link\" class=\"link\"><a target=\"_blank\" [href]=\"card.link\">GET</a></div>\n          </div>\n      </ng-container>\n    </div>\n  </app-card>\n  <div class=\"backdrop\" [@fadeInOut]=\"isFocused()\" (click)=\"deselectCard()\" [class.focused]=\"isFocused()\" [ngStyle]=\"backdropPosition\" ></div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/card/card.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/card/card.component.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\" [class.expanded]=\"expanded\" [smoothHeight]=\"expanded\" >\n  <div class=\"close-button\" *ngIf=\"expanded && canClose\" (click)=\"closeCard($event)\">\n      <div class=\"line-1\"></div>\n      <div class=\"line-2\"></div>\n  </div> \n<div class=\"header\" [style.min-height]=\"cardHeight\" [style.background-image]=\"isVideoBanner() ? '' : 'url('+bgImage+')'\">\n    <video *ngIf=\"isVideoBanner()\" class=\"banner-video\" autoplay loop muted playsinline>\n      <source [src]=\"getVideoUrl()\" type=\"video/mp4\">\n    </video>\n    <ng-container *ngIf=\"!showBanner\">\n      <div class=\"category\">{{ category }}</div>\n      <div class=\"title\">{{ title }}</div>\n      <div class=\"subtitle\">{{ subtitle }}</div>\n    </ng-container>\n   \n    <div *ngIf=\"showBanner\" class=\"banner\" >\n      <div class=\"category\">{{ category }}</div>\n      <div class=\"title\">{{ title }}</div>\n      <div class=\"subtitle\">{{ subtitle }}</div>\n    </div>\n  </div>\n  <div class=\"content\" [smoothHeight]=\"expanded\">\n    <ng-content></ng-content>\n  </div>\n</div>\n\n");

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
/* harmony default export */ __webpack_exports__["default"] = (".container {\n  width: 100vw;\n  height: 100vh;\n  overflow: scroll;\n  position: relative;\n}\n.container:before {\n  content: \"\";\n  position: absolute;\n  display: block;\n  height: 100%;\n  width: 100%;\n  top: 0;\n  left: 0;\n  z-index: 998;\n  pointer-events: none;\n  -webkit-transition: z-index 0ms linear 800ms, -webkit-backdrop-filter 600ms linear;\n  transition: z-index 0ms linear 800ms, -webkit-backdrop-filter 600ms linear;\n  transition: z-index 0ms linear 800ms, backdrop-filter 600ms linear;\n  transition: z-index 0ms linear 800ms, backdrop-filter 600ms linear, -webkit-backdrop-filter 600ms linear;\n}\n.header {\n  margin: 1rem auto;\n  border-bottom: thin solid #eee;\n  max-width: 930px;\n}\napp-card {\n  position: absolute;\n  -webkit-transform: scale(1);\n          transform: scale(1);\n  -webkit-transition-property: top, left, width, margin-top, border-radius, max-height, -webkit-transform;\n  transition-property: top, left, width, margin-top, border-radius, max-height, -webkit-transform;\n  transition-property: top, left, width, margin-top, transform, border-radius, max-height;\n  transition-property: top, left, width, margin-top, transform, border-radius, max-height, -webkit-transform;\n  -webkit-transition-duration: 0.6s, 0.6s, 0.6s, 0.6s, 0.6s, 150ms, 400ms, 0.6s;\n          transition-duration: 0.6s, 0.6s, 0.6s, 0.6s, 0.6s, 150ms, 400ms, 0.6s;\n  -webkit-transition-timing-function: cubic-bezier(0.51, -0.07, 0, 1.4), cubic-bezier(0.51, -0.07, 0, 1.4), cubic-bezier(0.51, -0.07, 0, 1.4), cubic-bezier(0.51, -0.07, 0, 1.4), ease-in-out, cubic-bezier(0.51, -0.07, 0, 1.4), ease-in-out;\n          transition-timing-function: cubic-bezier(0.51, -0.07, 0, 1.4), cubic-bezier(0.51, -0.07, 0, 1.4), cubic-bezier(0.51, -0.07, 0, 1.4), cubic-bezier(0.51, -0.07, 0, 1.4), ease-in-out, cubic-bezier(0.51, -0.07, 0, 1.4), ease-in-out;\n  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);\n  overflow: hidden;\n}\napp-card:hover, app-card:active {\n  -webkit-transform: scale(0.97);\n          transform: scale(0.97);\n}\napp-card:last-of-type {\n  margin-bottom: 3rem;\n}\napp-card.focused {\n  margin-top: 0;\n  overflow: scroll;\n  -ms-scroll-chaining: none;\n      overscroll-behavior: none;\n  max-height: 100vh;\n  border-radius: 16px 16px 0 0;\n  -webkit-transform: scale(1);\n          transform: scale(1);\n}\napp-card.focused:hover, app-card.focused:active {\n  -webkit-transform: scale(1);\n          transform: scale(1);\n}\n@media only screen and (max-width: 600px) {\n  app-card.focused {\n    border-radius: 0px;\n  }\n}\n@media only screen and (max-width: 1000px) {\n  .header {\n    margin: 1rem 1.25rem;\n  }\n}\n.backdrop {\n  position: absolute;\n  content: \"\";\n  z-index: 997;\n  -webkit-backdrop-filter: blur(20px);\n          backdrop-filter: blur(20px);\n  pointer-events: none;\n}\n.backdrop.focused {\n  pointer-events: all;\n}\n.card-content {\n  margin-top: 1.5rem;\n  margin-bottom: 6rem;\n}\n.body-screenshot-container, .body-text-container, .body-summary-container {\n  margin: 1.5rem;\n  margin-top: 2rem;\n  font-size: 1.3rem;\n  color: #888;\n  font-weight: 300;\n}\n.body-video-container {\n  width: 100%;\n}\n.body-video-container video {\n  width: 100%;\n}\n.body-video-container video[poster] {\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n.body-video-container iframe {\n  width: 100%;\n}\n.body-image-container img {\n  -o-object-fit: contain;\n     object-fit: contain;\n  width: 100%;\n}\n.body-screenshot-container .screenshot {\n  border: 1px solid #0001;\n  border-radius: 1rem;\n  overflow: hidden;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  max-width: -webkit-fit-content;\n  max-width: -moz-fit-content;\n  max-width: fit-content;\n  max-width: -webkit-fill-available;\n  margin: auto;\n  -webkit-mask-image: -webkit-radial-gradient(white, black);\n}\n.body-screenshot-container img, .body-screenshot-container video {\n  width: 100%;\n  -o-object-fit: contain;\n     object-fit: contain;\n}\n.body-screenshot-container .banner {\n  margin-top: -5px;\n  background: #0001;\n  padding: 1rem 1.5rem;\n  text-align: start;\n  font-size: 0.8em;\n}\n.body-summary-container {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-align: center;\n          align-items: center;\n  background: #0001;\n  padding: 3rem;\n  margin: 1.5rem 0;\n}\n.body-summary-container > * {\n  margin-bottom: 0.8rem;\n}\n.body-summary-container .title {\n  color: black;\n  font-size: 1.8rem;\n}\n.body-summary-container .content {\n  font-weight: 200;\n  font-size: 1rem;\n}\n.body-summary-container .icon {\n  height: 64px;\n  width: 64px;\n  border-radius: 1rem;\n}\n.body-summary-container .link {\n  border-radius: 100em;\n  background: #007aff;\n  font-weight: bold;\n  padding: 0.5rem 1.5rem;\n  font-size: 1rem;\n}\n.body-summary-container .link a {\n  color: white;\n  text-decoration: none;\n  text-transform: uppercase;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qYWNrcGVyc29uYWwvRGV2ZWxvcG1lbnQvYXBwLXN0b3JlLWN2L3NyYy9hcHAvY29tcG9uZW50cy9jYXJkLWNvbnRhaW5lci9jYXJkLWNvbnRhaW5lci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9jYXJkLWNvbnRhaW5lci9jYXJkLWNvbnRhaW5lci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQTtFQUNJLFlBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQ0ZKO0FESUk7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtFQUNBLGtGQUFBO0VBQUEsMEVBQUE7RUFBQSxrRUFBQTtFQUFBLHdHQUFBO0FDRlI7QURXQTtFQUNJLGlCQUFBO0VBQ0EsOEJBQUE7RUFDQSxnQkFBQTtBQ1RKO0FEWUE7RUFDSSxrQkFBQTtFQUVBLDJCQUFBO1VBQUEsbUJBQUE7RUFJQSx1R0FBQTtFQUFBLCtGQUFBO0VBQUEsdUZBQUE7RUFBQSwwR0FBQTtFQUNBLDZFQUFBO1VBQUEscUVBQUE7RUFDQSwyT0FBQTtVQUFBLG1PQUFBO0VBRUEseUNBQUE7RUFFQSxnQkFBQTtBQ2ZKO0FEZ0JLO0VBQ0csOEJBQUE7VUFBQSxzQkFBQTtBQ2RSO0FEZ0JJO0VBQ0ksbUJBQUE7QUNkUjtBRG9CQTtFQUNJLGFBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO01BQUEseUJBQUE7RUFDQSxpQkFBQTtFQUVBLDRCQUFBO0VBQ0EsMkJBQUE7VUFBQSxtQkFBQTtBQ2xCSjtBRG1CSTtFQUNJLDJCQUFBO1VBQUEsbUJBQUE7QUNqQlI7QURvQkE7RUFFSTtJQUNJLGtCQUFBO0VDbEJOO0FBQ0Y7QURxQkE7RUFDSTtJQUNJLG9CQUFBO0VDbkJOO0FBQ0Y7QUR3QkE7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUNBQUE7VUFBQSwyQkFBQTtFQUNBLG9CQUFBO0FDdEJKO0FEdUJJO0VBQ0ksbUJBQUE7QUNyQlI7QUR5QkE7RUFDSSxrQkFBQTtFQUNBLG1CQUFBO0FDdEJKO0FEd0JBO0VBQ0ksY0FBQTtFQUNBLGdCQUFBO0VBRUEsaUJBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7QUN0Qko7QUR5QkE7RUFDSSxXQUFBO0FDdEJKO0FEdUJJO0VBQ0ksV0FBQTtBQ3JCUjtBRHVCSTtFQUNJLG9CQUFBO0tBQUEsaUJBQUE7QUNyQlI7QUR1Qkk7RUFDSSxXQUFBO0FDckJSO0FEMEJJO0VBQ0ksc0JBQUE7S0FBQSxtQkFBQTtFQUNBLFdBQUE7QUN2QlI7QUQyQkk7RUFFSSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSwwQkFBQTtFQUFBLHVCQUFBO0VBQUEsa0JBQUE7RUFDQSw4QkFBQTtFQUFBLDJCQUFBO0VBQUEsc0JBQUE7RUFDQSxpQ0FBQTtFQUNBLFlBQUE7RUFDQSx5REFBQTtBQ3pCUjtBRDJCSTtFQUVJLFdBQUE7RUFDQSxzQkFBQTtLQUFBLG1CQUFBO0FDMUJSO0FENEJJO0VBQ0ksZ0JBQUE7RUFDQSxpQkFsSkQ7RUFtSkMsb0JBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FDMUJSO0FEOEJBO0VBQ0ksb0JBQUE7RUFBQSxhQUFBO0VBQ0EsNEJBQUE7RUFBQSw2QkFBQTtVQUFBLHNCQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtFQUNBLGlCQTdKRztFQThKSCxhQUFBO0VBQ0EsZ0JBQUE7QUMzQko7QUQ0Qkk7RUFDSSxxQkFBQTtBQzFCUjtBRDRCSTtFQUNJLFlBQUE7RUFDQSxpQkFBQTtBQzFCUjtBRDRCSTtFQUNJLGdCQUFBO0VBQ0EsZUFBQTtBQzFCUjtBRDRCSTtFQUNJLFlBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7QUMxQlI7QUQ0Qkk7RUFDSSxvQkFBQTtFQUNBLG1CQW5MSztFQW9MTCxpQkFBQTtFQUNBLHNCQUFBO0VBQ0EsZUFBQTtBQzFCUjtBRDJCUTtFQUNJLFlBQUE7RUFFQSxxQkFBQTtFQUNBLHlCQUFBO0FDMUJaIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9jYXJkLWNvbnRhaW5lci9jYXJkLWNvbnRhaW5lci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRhcHBsZS1ibHVlOiAjMDA3YWZmO1xuJGdyZXk6ICMwMDAxO1xuXG4uY29udGFpbmVye1xuICAgIHdpZHRoOiAxMDB2dztcbiAgICBoZWlnaHQ6IDEwMHZoO1xuICAgIG92ZXJmbG93OiBzY3JvbGw7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gICAgJjpiZWZvcmV7XG4gICAgICAgIGNvbnRlbnQ6ICcnO1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICB0b3A6IDA7XG4gICAgICAgIGxlZnQ6IDA7XG4gICAgICAgIHotaW5kZXg6IDk5ODtcbiAgICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgICAgIHRyYW5zaXRpb246IHotaW5kZXggMG1zIGxpbmVhciA4MDBtcywgYmFja2Ryb3AtZmlsdGVyICA2MDBtcyBsaW5lYXIgO1xuICAgICAgICBcbiAgICB9XG4gICAgJi5mb2N1c2Vke1xuICAgIC8vIG92ZXJmbG93OiBoaWRkZW47XG4gICAgfVxuICAgIFxufVxuXG4uaGVhZGVye1xuICAgIG1hcmdpbjogMXJlbSBhdXRvO1xuICAgIGJvcmRlci1ib3R0b206IHRoaW4gc29saWQgI2VlZTtcbiAgICBtYXgtd2lkdGg6IDkzMHB4O1xufVxuXG5hcHAtY2FyZHtcbiAgICBwb3NpdGlvbjphYnNvbHV0ZTtcblxuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XG4gICAgXG4gICAgJHRyYW5zbGF0ZUR1cmF0aW9uOiAuNnM7XG4gICAgJHRyYW5zbGF0ZVRpbWluZzogY3ViaWMtYmV6aWVyKC41MSwtMC4wNywwLDEuNCk7XG4gICAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogdG9wLCBsZWZ0LCB3aWR0aCwgbWFyZ2luLXRvcCwgdHJhbnNmb3JtLCBib3JkZXItcmFkaXVzLCBtYXgtaGVpZ2h0O1xuICAgIHRyYW5zaXRpb24tZHVyYXRpb246ICR0cmFuc2xhdGVEdXJhdGlvbiwgJHRyYW5zbGF0ZUR1cmF0aW9uLCAkdHJhbnNsYXRlRHVyYXRpb24sICR0cmFuc2xhdGVEdXJhdGlvbiwgJHRyYW5zbGF0ZUR1cmF0aW9uLCAxNTBtcywgNDAwbXMsICR0cmFuc2xhdGVEdXJhdGlvbjtcbiAgICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogJHRyYW5zbGF0ZVRpbWluZywgJHRyYW5zbGF0ZVRpbWluZywgJHRyYW5zbGF0ZVRpbWluZywgJHRyYW5zbGF0ZVRpbWluZywgZWFzZS1pbi1vdXQsICR0cmFuc2xhdGVUaW1pbmcsIGVhc2UtaW4tb3V0O1xuICAgIFxuICAgIGJveC1zaGFkb3c6IDAgNXB4IDE1cHggcmdiYSgwLDAsMCwwLjMpO1xuXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgJjpob3ZlciwgJjphY3RpdmV7XG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMC45Nyk7XG4gICAgfVxuICAgICY6bGFzdC1vZi10eXBle1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAzcmVtO1xuICAgIH1cbn1cblxuXG5cbmFwcC1jYXJkLmZvY3VzZWR7XG4gICAgbWFyZ2luLXRvcDogMDtcbiAgICBvdmVyZmxvdzogc2Nyb2xsO1xuICAgIG92ZXJzY3JvbGwtYmVoYXZpb3I6bm9uZTtcbiAgICBtYXgtaGVpZ2h0OiAxMDB2aDtcblxuICAgIGJvcmRlci1yYWRpdXM6IDE2cHggMTZweCAwIDA7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgICAmOmhvdmVyLCAmOmFjdGl2ZXtcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gICAgXG4gICAgYXBwLWNhcmQuZm9jdXNlZHtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMHB4O1xuICAgIH1cbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDAwcHgpIHtcbiAgICAuaGVhZGVye1xuICAgICAgICBtYXJnaW46IDFyZW0gMS4yNXJlbTtcbiAgICB9XG4gICBcbn1cblxuXG4uYmFja2Ryb3B7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGNvbnRlbnQ6ICcnO1xuICAgIHotaW5kZXg6IDk5NztcbiAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMjBweCk7XG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgJi5mb2N1c2Vke1xuICAgICAgICBwb2ludGVyLWV2ZW50czogYWxsO1xuICAgIH1cbn1cblxuLmNhcmQtY29udGVudHsgXG4gICAgbWFyZ2luLXRvcDogMS41cmVtO1xuICAgIG1hcmdpbi1ib3R0b206IDZyZW07XG59XG4uYm9keS1zY3JlZW5zaG90LWNvbnRhaW5lciwgLmJvZHktdGV4dC1jb250YWluZXIsICAuYm9keS1zdW1tYXJ5LWNvbnRhaW5lcntcbiAgICBtYXJnaW46IDEuNXJlbTtcbiAgICBtYXJnaW4tdG9wOiAycmVtO1xuXG4gICAgZm9udC1zaXplOiAxLjNyZW07XG4gICAgY29sb3I6ICM4ODg7XG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcbn1cblxuLmJvZHktdmlkZW8tY29udGFpbmVye1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHZpZGVve1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICB9XG4gICAgdmlkZW9bcG9zdGVyXSB7XG4gICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xuICAgIH1cbiAgICBpZnJhbWV7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cbn1cblxuLmJvZHktaW1hZ2UtY29udGFpbmVye1xuICAgIGltZ3tcbiAgICAgICAgb2JqZWN0LWZpdDogY29udGFpbjtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfVxufVxuLmJvZHktc2NyZWVuc2hvdC1jb250YWluZXJ7XG4gICAgLnNjcmVlbnNob3R7XG4gICAgICAgXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICRncmV5O1xuICAgICAgICBib3JkZXItcmFkaXVzOiAxcmVtO1xuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICB3aWR0aDogZml0LWNvbnRlbnQ7XG4gICAgICAgIG1heC13aWR0aDogZml0LWNvbnRlbnQ7XG4gICAgICAgIG1heC13aWR0aDogLXdlYmtpdC1maWxsLWF2YWlsYWJsZTtcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xuICAgICAgICAtd2Via2l0LW1hc2staW1hZ2U6IC13ZWJraXQtcmFkaWFsLWdyYWRpZW50KHdoaXRlLCBibGFjayk7XG4gICAgfVxuICAgIGltZywgdmlkZW97XG4gICAgICAgIC8vIGlQaG9uZSA4IHNpemUgc2NyZWVuc2hvdHMgb25seSBmb3IgdGhlIG1vbWVudFxuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgb2JqZWN0LWZpdDogY29udGFpbjtcbiAgICB9XG4gICAgLmJhbm5lcntcbiAgICAgICAgbWFyZ2luLXRvcDogLTVweDtcbiAgICAgICAgYmFja2dyb3VuZDogJGdyZXk7XG4gICAgICAgIHBhZGRpbmc6IDFyZW0gMS41cmVtO1xuICAgICAgICB0ZXh0LWFsaWduOiBzdGFydDtcbiAgICAgICAgZm9udC1zaXplOiAuOGVtO1xuICAgIH1cbn1cblxuLmJvZHktc3VtbWFyeS1jb250YWluZXJ7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZDokZ3JleTsgXG4gICAgcGFkZGluZzogM3JlbTtcbiAgICBtYXJnaW46IDEuNXJlbSAwO1xuICAgID4gKiB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IC44cmVtO1xuICAgIH1cbiAgICAudGl0bGV7XG4gICAgICAgIGNvbG9yOiBibGFjaztcbiAgICAgICAgZm9udC1zaXplOiAxLjhyZW07XG4gICAgfVxuICAgIC5jb250ZW50e1xuICAgICAgICBmb250LXdlaWdodDogMjAwO1xuICAgICAgICBmb250LXNpemU6IDFyZW07XG4gICAgfVxuICAgIC5pY29ue1xuICAgICAgICBoZWlnaHQ6IDY0cHg7XG4gICAgICAgIHdpZHRoOiA2NHB4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiAxcmVtO1xuICAgIH1cbiAgICAubGlua3tcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTAwZW07XG4gICAgICAgIGJhY2tncm91bmQ6ICRhcHBsZS1ibHVlO1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgcGFkZGluZzogLjVyZW0gMS41cmVtO1xuICAgICAgICBmb250LXNpemU6IDFyZW07XG4gICAgICAgIGF7XG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XG5cbiAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgIH1cbiAgICB9XG59IiwiLmNvbnRhaW5lciB7XG4gIHdpZHRoOiAxMDB2dztcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgb3ZlcmZsb3c6IHNjcm9sbDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLmNvbnRhaW5lcjpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHotaW5kZXg6IDk5ODtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gIHRyYW5zaXRpb246IHotaW5kZXggMG1zIGxpbmVhciA4MDBtcywgYmFja2Ryb3AtZmlsdGVyIDYwMG1zIGxpbmVhcjtcbn1cbi5oZWFkZXIge1xuICBtYXJnaW46IDFyZW0gYXV0bztcbiAgYm9yZGVyLWJvdHRvbTogdGhpbiBzb2xpZCAjZWVlO1xuICBtYXgtd2lkdGg6IDkzMHB4O1xufVxuXG5hcHAtY2FyZCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogdG9wLCBsZWZ0LCB3aWR0aCwgbWFyZ2luLXRvcCwgdHJhbnNmb3JtLCBib3JkZXItcmFkaXVzLCBtYXgtaGVpZ2h0O1xuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjZzLCAwLjZzLCAwLjZzLCAwLjZzLCAwLjZzLCAxNTBtcywgNDAwbXMsIDAuNnM7XG4gIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC41MSwgLTAuMDcsIDAsIDEuNCksIGN1YmljLWJlemllcigwLjUxLCAtMC4wNywgMCwgMS40KSwgY3ViaWMtYmV6aWVyKDAuNTEsIC0wLjA3LCAwLCAxLjQpLCBjdWJpYy1iZXppZXIoMC41MSwgLTAuMDcsIDAsIDEuNCksIGVhc2UtaW4tb3V0LCBjdWJpYy1iZXppZXIoMC41MSwgLTAuMDcsIDAsIDEuNCksIGVhc2UtaW4tb3V0O1xuICBib3gtc2hhZG93OiAwIDVweCAxNXB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbmFwcC1jYXJkOmhvdmVyLCBhcHAtY2FyZDphY3RpdmUge1xuICB0cmFuc2Zvcm06IHNjYWxlKDAuOTcpO1xufVxuYXBwLWNhcmQ6bGFzdC1vZi10eXBlIHtcbiAgbWFyZ2luLWJvdHRvbTogM3JlbTtcbn1cblxuYXBwLWNhcmQuZm9jdXNlZCB7XG4gIG1hcmdpbi10b3A6IDA7XG4gIG92ZXJmbG93OiBzY3JvbGw7XG4gIG92ZXJzY3JvbGwtYmVoYXZpb3I6IG5vbmU7XG4gIG1heC1oZWlnaHQ6IDEwMHZoO1xuICBib3JkZXItcmFkaXVzOiAxNnB4IDE2cHggMCAwO1xuICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xufVxuYXBwLWNhcmQuZm9jdXNlZDpob3ZlciwgYXBwLWNhcmQuZm9jdXNlZDphY3RpdmUge1xuICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gIGFwcC1jYXJkLmZvY3VzZWQge1xuICAgIGJvcmRlci1yYWRpdXM6IDBweDtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDAwcHgpIHtcbiAgLmhlYWRlciB7XG4gICAgbWFyZ2luOiAxcmVtIDEuMjVyZW07XG4gIH1cbn1cbi5iYWNrZHJvcCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgY29udGVudDogXCJcIjtcbiAgei1pbmRleDogOTk3O1xuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMjBweCk7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xufVxuLmJhY2tkcm9wLmZvY3VzZWQge1xuICBwb2ludGVyLWV2ZW50czogYWxsO1xufVxuXG4uY2FyZC1jb250ZW50IHtcbiAgbWFyZ2luLXRvcDogMS41cmVtO1xuICBtYXJnaW4tYm90dG9tOiA2cmVtO1xufVxuXG4uYm9keS1zY3JlZW5zaG90LWNvbnRhaW5lciwgLmJvZHktdGV4dC1jb250YWluZXIsIC5ib2R5LXN1bW1hcnktY29udGFpbmVyIHtcbiAgbWFyZ2luOiAxLjVyZW07XG4gIG1hcmdpbi10b3A6IDJyZW07XG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xuICBjb2xvcjogIzg4ODtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbn1cblxuLmJvZHktdmlkZW8tY29udGFpbmVyIHtcbiAgd2lkdGg6IDEwMCU7XG59XG4uYm9keS12aWRlby1jb250YWluZXIgdmlkZW8ge1xuICB3aWR0aDogMTAwJTtcbn1cbi5ib2R5LXZpZGVvLWNvbnRhaW5lciB2aWRlb1twb3N0ZXJdIHtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG59XG4uYm9keS12aWRlby1jb250YWluZXIgaWZyYW1lIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5ib2R5LWltYWdlLWNvbnRhaW5lciBpbWcge1xuICBvYmplY3QtZml0OiBjb250YWluO1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmJvZHktc2NyZWVuc2hvdC1jb250YWluZXIgLnNjcmVlbnNob3Qge1xuICBib3JkZXI6IDFweCBzb2xpZCAjMDAwMTtcbiAgYm9yZGVyLXJhZGl1czogMXJlbTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xuICBtYXgtd2lkdGg6IGZpdC1jb250ZW50O1xuICBtYXgtd2lkdGg6IC13ZWJraXQtZmlsbC1hdmFpbGFibGU7XG4gIG1hcmdpbjogYXV0bztcbiAgLXdlYmtpdC1tYXNrLWltYWdlOiAtd2Via2l0LXJhZGlhbC1ncmFkaWVudCh3aGl0ZSwgYmxhY2spO1xufVxuLmJvZHktc2NyZWVuc2hvdC1jb250YWluZXIgaW1nLCAuYm9keS1zY3JlZW5zaG90LWNvbnRhaW5lciB2aWRlbyB7XG4gIHdpZHRoOiAxMDAlO1xuICBvYmplY3QtZml0OiBjb250YWluO1xufVxuLmJvZHktc2NyZWVuc2hvdC1jb250YWluZXIgLmJhbm5lciB7XG4gIG1hcmdpbi10b3A6IC01cHg7XG4gIGJhY2tncm91bmQ6ICMwMDAxO1xuICBwYWRkaW5nOiAxcmVtIDEuNXJlbTtcbiAgdGV4dC1hbGlnbjogc3RhcnQ7XG4gIGZvbnQtc2l6ZTogMC44ZW07XG59XG5cbi5ib2R5LXN1bW1hcnktY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYmFja2dyb3VuZDogIzAwMDE7XG4gIHBhZGRpbmc6IDNyZW07XG4gIG1hcmdpbjogMS41cmVtIDA7XG59XG4uYm9keS1zdW1tYXJ5LWNvbnRhaW5lciA+ICoge1xuICBtYXJnaW4tYm90dG9tOiAwLjhyZW07XG59XG4uYm9keS1zdW1tYXJ5LWNvbnRhaW5lciAudGl0bGUge1xuICBjb2xvcjogYmxhY2s7XG4gIGZvbnQtc2l6ZTogMS44cmVtO1xufVxuLmJvZHktc3VtbWFyeS1jb250YWluZXIgLmNvbnRlbnQge1xuICBmb250LXdlaWdodDogMjAwO1xuICBmb250LXNpemU6IDFyZW07XG59XG4uYm9keS1zdW1tYXJ5LWNvbnRhaW5lciAuaWNvbiB7XG4gIGhlaWdodDogNjRweDtcbiAgd2lkdGg6IDY0cHg7XG4gIGJvcmRlci1yYWRpdXM6IDFyZW07XG59XG4uYm9keS1zdW1tYXJ5LWNvbnRhaW5lciAubGluayB7XG4gIGJvcmRlci1yYWRpdXM6IDEwMGVtO1xuICBiYWNrZ3JvdW5kOiAjMDA3YWZmO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgcGFkZGluZzogMC41cmVtIDEuNXJlbTtcbiAgZm9udC1zaXplOiAxcmVtO1xufVxuLmJvZHktc3VtbWFyeS1jb250YWluZXIgLmxpbmsgYSB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufSJdfQ== */");

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
        this.cardHeaderHeight = "18rem";
        this.selectedCardHeaderHeight = "23rem";
        this.cardWidthPx = 300;
        this.cardMargin = "2.5rem";
        this.cardMarginPx = 30;
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
    CardContainerComponent.prototype.isFocused = function () {
        return this.selectedId != null;
    };
    CardContainerComponent.prototype.isSelected = function (id) {
        return this.selectedId == id;
    };
    CardContainerComponent.prototype.selectCard = function (id) {
        this.selectedId = id;
        this.calculatePositions();
    };
    CardContainerComponent.prototype.deselectCard = function () {
        this.selectedId = null;
        this.calculatePositions();
    };
    CardContainerComponent.prototype.getCardStyles = function (id) {
        return this.cardMap[id];
    };
    CardContainerComponent.prototype.getScrollTop = function () {
        return this.container.nativeElement.scrollTop;
    };
    /*
      Layout
    */
    CardContainerComponent.prototype.calculatePositions = function () {
        if (this.isFocused()) {
            this.disableScroll();
        }
        else {
            this.enableScroll();
        }
        if (this.isMobile()) {
            this.cardHeaderHeight = "23rem";
            this.selectedCardHeaderHeight = "26rem";
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
    CardContainerComponent.prototype.getPosition = function (i) {
        return {
            top: this.getPositionTop(i),
            left: this.getPositionLeft(i),
            width: this.getWidth(i),
            "max-height": this.cardHeaderHeight
        };
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
            return "calc(100% - " + this.cardMarginPx + "px)";
        }
        else if (this.isPortraitTablet()) {
            return "calc(50% - " + this.cardMarginPx + "px";
        }
        return this.isWide(index) ? this.cardWidthPx * 2 + "px" : this.cardWidthPx + "px";
    };
    CardContainerComponent.prototype.getPositionTop = function (index) {
        var row = 0;
        if (this.isMobile()) {
            row = index;
        }
        else {
            row = this.getRow(index);
        }
        return "calc(" + this.containerMargin + " + " + row + " * " + this.cardHeaderHeight + " + " + row + " * " + this.cardMarginPx + "px )";
    };
    CardContainerComponent.prototype.getPositionLeft = function (index) {
        if (this.isMobile()) {
            return "calc(" + this.cardMarginPx + "px / 2)";
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
            return "calc(" + startColumn + " * 50% + " + this.cardMarginPx + "px / 2)";
        }
        else {
            var marginLeft = (this.container.nativeElement.clientWidth - (this.cardWidthPx * 3 + this.cardMarginPx)) / 2;
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
            return "calc(" + marginLeft + "px + " + startColumn + " * " + this.cardWidthPx + "px + " + (!isFirst ? this.cardMarginPx + "px " : '0px') + ")";
        }
    };
    /*
    Content
    */
    CardContainerComponent.prototype.isVideo = function (url) {
        return url.endsWith("mp4");
    };
    CardContainerComponent.prototype.getSafeVideoUrl = function (url) {
        return this.sanitizer.bypassSecurityTrustResourceUrl(url);
    };
    /*
    Device Detection
    */
    CardContainerComponent.prototype.isMobile = function () {
        return this.windowService.isMobile();
    };
    CardContainerComponent.prototype.isPortraitTablet = function () {
        return this.windowService.isPortraitTablet();
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
/* harmony default export */ __webpack_exports__["default"] = (":host {\n  display: block;\n  -webkit-transition: width 0.5s ease-in-out;\n  transition: width 0.5s ease-in-out;\n  overflow: hidden;\n  border-radius: 16px;\n}\n\n.container {\n  overflow: hidden;\n  position: relative;\n}\n\n.container .close-button {\n  position: absolute;\n  top: 1rem;\n  right: 1rem;\n  z-index: 1;\n  background: rgba(0, 0, 0, 0.2);\n  border-radius: 100em;\n  width: 2rem;\n  height: 2rem;\n}\n\n.container .close-button .line-1,\n.container .close-button .line-2 {\n  position: absolute;\n  top: 0.95rem;\n  left: 0.35rem;\n  width: 1.3rem;\n  height: 1.3rem;\n  border-top: 2px solid #eee;\n  -webkit-transform-origin: 51% 5%;\n          transform-origin: 51% 5%;\n}\n\n.container .close-button .line-1 {\n  -webkit-transform: rotate(45deg);\n          transform: rotate(45deg);\n}\n\n.container .close-button .line-2 {\n  -webkit-transform: rotate(-45deg);\n          transform: rotate(-45deg);\n}\n\n.container .header {\n  border-radius: 16px;\n  -webkit-transition-property: border-radius, min-height;\n  transition-property: border-radius, min-height;\n  -webkit-transition-duration: 150ms, 600ms;\n          transition-duration: 150ms, 600ms;\n  -webkit-transition-timing-function: ease-in-out, cubic-bezier(0.13, 0.29, 0.11, 1.38);\n          transition-timing-function: ease-in-out, cubic-bezier(0.13, 0.29, 0.11, 1.38);\n  position: relative;\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-position: center;\n}\n\n.container .header .banner-video {\n  height: 100%;\n  width: 100%;\n  position: absolute;\n  -o-object-fit: cover;\n     object-fit: cover;\n  z-index: -1;\n}\n\n.container .header .category,\n.container .header .title,\n.container .header .subtitle {\n  padding: 1rem;\n  -webkit-transition: padding 200ms ease-in-out;\n  transition: padding 200ms ease-in-out;\n  opacity: 1;\n}\n\n.container .header .banner {\n  position: absolute;\n  bottom: 0;\n  background: white;\n  width: 100%;\n}\n\n.container .header .banner .title, .container .header .banner .subtitle {\n  color: initial;\n  text-shadow: none;\n}\n\n.container .header .banner .title {\n  padding: 0 1rem;\n}\n\n.container .header .banner .subtitle {\n  position: initial;\n  font-size: 0.9rem;\n  padding-top: 0.5rem;\n  text-align: left;\n}\n\n.container .header .category {\n  text-transform: uppercase;\n  font-size: 0.8rem;\n  color: grey;\n  padding-bottom: 0.3rem;\n}\n\n.container .header .title {\n  padding-top: 0;\n  font-size: 1.5rem;\n  font-weight: 600;\n  color: white;\n  text-shadow: 0px 0 5px rgba(0, 0, 0, 0.3);\n}\n\n.container .header .subtitle {\n  position: absolute;\n  font-weight: 300;\n  bottom: 0;\n  right: 0;\n  text-align: end;\n  color: white;\n  max-height: 1000px;\n  -webkit-transition-property: opacity, max-height, padding;\n  transition-property: opacity, max-height, padding;\n  -webkit-transition-timing-function: ease-in-out, ease-in-out;\n          transition-timing-function: ease-in-out, ease-in-out;\n  -webkit-transition-duration: 300ms, 200ms;\n          transition-duration: 300ms, 200ms;\n}\n\n.container .content {\n  -webkit-transition: max-height 400ms ease-in-out;\n  transition: max-height 400ms ease-in-out;\n  max-height: 0px;\n  background: white;\n}\n\n.container.expanded .header {\n  border-radius: 0px;\n}\n\n.container.expanded .header .category,\n.container.expanded .header .title,\n.container.expanded .header .subtitle {\n  padding-left: 0.7rem;\n  padding-right: 0.7rem;\n}\n\n.container.expanded .header .banner .category, .container.expanded .header .banner .title {\n  padding-left: 1.5rem;\n}\n\n.container.expanded .header .banner .subtitle {\n  opacity: 0;\n  max-height: 0;\n  padding: 0;\n}\n\n.container.expanded .content {\n  max-height: 1000000px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qYWNrcGVyc29uYWwvRGV2ZWxvcG1lbnQvYXBwLXN0b3JlLWN2L3NyYy9hcHAvY29tcG9uZW50cy9jYXJkL2NhcmQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvY2FyZC9jYXJkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBQTtFQUNBLDBDQUFBO0VBQUEsa0NBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FDQ0Y7O0FERUE7RUFDRSxnQkFBQTtFQUVBLGtCQUFBO0FDQUY7O0FEQ0U7RUFDRSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtFQUNBLDhCQUFBO0VBQ0Esb0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQ0NKOztBRENJOztFQUdFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxhQUpPO0VBS1AsY0FMTztFQU1QLDBCQUFBO0VBQ0EsZ0NBQUE7VUFBQSx3QkFBQTtBQ0FOOztBREVJO0VBQ0UsZ0NBQUE7VUFBQSx3QkFBQTtBQ0FOOztBREVJO0VBQ0UsaUNBQUE7VUFBQSx5QkFBQTtBQ0FOOztBREdFO0VBQ0UsbUJBQUE7RUFFQSxzREFBQTtFQUFBLDhDQUFBO0VBQ0EseUNBQUE7VUFBQSxpQ0FBQTtFQUNBLHFGQUFBO1VBQUEsNkVBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0EsNEJBQUE7RUFDQSwyQkFBQTtBQ0ZKOztBREdJO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0tBQUEsaUJBQUE7RUFDQSxXQUFBO0FDRE47O0FER0k7OztFQUdFLGFBQUE7RUFDQSw2Q0FBQTtFQUFBLHFDQUFBO0VBQ0EsVUFBQTtBQ0ROOztBRElJO0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0FDRk47O0FER007RUFDRSxjQUFBO0VBQ0EsaUJBQUE7QUNEUjs7QURHTTtFQUNFLGVBQUE7QUNEUjs7QURHTTtFQUNFLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FDRFI7O0FESUk7RUFDRSx5QkFBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLHNCQUFBO0FDRk47O0FESUk7RUFDRSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSx5Q0FBQTtBQ0ZOOztBREtJO0VBQ0Usa0JBQUE7RUFDQSxnQkFBQTtFQUNBLFNBQUE7RUFDQSxRQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLHlEQUFBO0VBQUEsaURBQUE7RUFDQSw0REFBQTtVQUFBLG9EQUFBO0VBQ0EseUNBQUE7VUFBQSxpQ0FBQTtBQ0hOOztBRE9FO0VBQ0UsZ0RBQUE7RUFBQSx3Q0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQ0xKOztBRFNJO0VBQ0Usa0JBQUE7QUNQTjs7QURRTTs7O0VBR0Usb0JBQUE7RUFDQSxxQkFBQTtBQ05SOztBRFNRO0VBQ0Usb0JBQUE7QUNQVjs7QURTUTtFQUNFLFVBQUE7RUFDQSxhQUFBO0VBQ0EsVUFBQTtBQ1BWOztBRFlJO0VBQ0UscUJBQUE7QUNWTiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY2FyZC9jYXJkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICBkaXNwbGF5OiBibG9jaztcbiAgdHJhbnNpdGlvbjogd2lkdGggMC41cyBlYXNlLWluLW91dDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgYm9yZGVyLXJhZGl1czogMTZweDtcbn1cblxuLmNvbnRhaW5lciB7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIC8vIG1pbi1oZWlnaHQ6IDEwMHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIC5jbG9zZS1idXR0b24ge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDFyZW07XG4gICAgcmlnaHQ6IDFyZW07XG4gICAgei1pbmRleDogMTtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMik7XG4gICAgYm9yZGVyLXJhZGl1czogMTAwZW07XG4gICAgd2lkdGg6IDJyZW07XG4gICAgaGVpZ2h0OiAycmVtO1xuXG4gICAgLmxpbmUtMSxcbiAgICAubGluZS0yIHtcbiAgICAgICRzaXplOiAxLjNyZW07XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICB0b3A6IDAuOTVyZW07XG4gICAgICBsZWZ0OiAwLjM1cmVtO1xuICAgICAgd2lkdGg6ICRzaXplO1xuICAgICAgaGVpZ2h0OiAkc2l6ZTtcbiAgICAgIGJvcmRlci10b3A6IDJweCBzb2xpZCAjZWVlO1xuICAgICAgdHJhbnNmb3JtLW9yaWdpbjogNTElIDUlO1xuICAgIH1cbiAgICAubGluZS0xIHtcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcbiAgICB9XG4gICAgLmxpbmUtMiB7XG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xuICAgIH1cbiAgfVxuICAuaGVhZGVyIHtcbiAgICBib3JkZXItcmFkaXVzOiAxNnB4O1xuXG4gICAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogYm9yZGVyLXJhZGl1cywgbWluLWhlaWdodDtcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAxNTBtcywgNjAwbXM7XG4gICAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW4tb3V0LCBjdWJpYy1iZXppZXIoLjEzLC4yOSwuMTEsMS4zOCk7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgLmJhbm5lci12aWRlbyB7XG4gICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xuICAgICAgei1pbmRleDogLTE7XG4gICAgfVxuICAgIC5jYXRlZ29yeSxcbiAgICAudGl0bGUsXG4gICAgLnN1YnRpdGxlIHtcbiAgICAgIHBhZGRpbmc6IDFyZW07XG4gICAgICB0cmFuc2l0aW9uOiBwYWRkaW5nIDIwMG1zIGVhc2UtaW4tb3V0O1xuICAgICAgb3BhY2l0eTogMTtcbiAgICB9XG5cbiAgICAuYmFubmVye1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgYm90dG9tOiAwO1xuICAgICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIC50aXRsZSwuc3VidGl0bGV7XG4gICAgICAgIGNvbG9yOiBpbml0aWFsO1xuICAgICAgICB0ZXh0LXNoYWRvdzogbm9uZTtcbiAgICAgIH1cbiAgICAgIC50aXRsZXtcbiAgICAgICAgcGFkZGluZzogMCAxcmVtO1xuICAgICAgfVxuICAgICAgLnN1YnRpdGxle1xuICAgICAgICBwb3NpdGlvbjogaW5pdGlhbDtcbiAgICAgICAgZm9udC1zaXplOiAwLjlyZW07XG4gICAgICAgIHBhZGRpbmctdG9wOiAwLjVyZW07XG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICB9XG4gICAgfVxuICAgIC5jYXRlZ29yeSB7XG4gICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgZm9udC1zaXplOiAwLjhyZW07XG4gICAgICBjb2xvcjogZ3JleTtcbiAgICAgIHBhZGRpbmctYm90dG9tOiAwLjNyZW07XG4gICAgfVxuICAgIC50aXRsZSB7XG4gICAgICBwYWRkaW5nLXRvcDogMDtcbiAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgIHRleHQtc2hhZG93OiAwcHggMCA1cHggcmdiYSgwLCAwLCAwLCAwLjMpO1xuICAgIH1cblxuICAgIC5zdWJ0aXRsZSB7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICBmb250LXdlaWdodDogMzAwO1xuICAgICAgYm90dG9tOiAwO1xuICAgICAgcmlnaHQ6IDA7XG4gICAgICB0ZXh0LWFsaWduOiBlbmQ7XG4gICAgICBjb2xvcjogd2hpdGU7XG4gICAgICBtYXgtaGVpZ2h0OiAxMDAwcHg7XG4gICAgICB0cmFuc2l0aW9uLXByb3BlcnR5OiBvcGFjaXR5LCBtYXgtaGVpZ2h0LCBwYWRkaW5nO1xuICAgICAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW4tb3V0LCBlYXNlLWluLW91dDtcbiAgICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDMwMG1zLCAyMDBtcztcbiAgICB9XG4gICAgLy8gLXdlYmtpdC1tYXNrLWltYWdlOiAtd2Via2l0LXJhZGlhbC1ncmFkaWVudCh3aGl0ZSwgYmxhY2spO1xuICB9XG4gIC5jb250ZW50IHtcbiAgICB0cmFuc2l0aW9uOiBtYXgtaGVpZ2h0IDQwMG1zIGVhc2UtaW4tb3V0O1xuICAgIG1heC1oZWlnaHQ6IDBweDtcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgfVxuXG4gICYuZXhwYW5kZWQge1xuICAgIC5oZWFkZXIge1xuICAgICAgYm9yZGVyLXJhZGl1czogMHB4O1xuICAgICAgLmNhdGVnb3J5LFxuICAgICAgLnRpdGxlLFxuICAgICAgLnN1YnRpdGxlIHtcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAwLjdyZW07XG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDAuN3JlbTtcbiAgICAgIH1cbiAgICAgIC5iYW5uZXJ7XG4gICAgICAgIC5jYXRlZ29yeSwgLnRpdGxle1xuICAgICAgICAgIHBhZGRpbmctbGVmdDogMS41cmVtO1xuICAgICAgICB9XG4gICAgICAgIC5zdWJ0aXRsZXtcbiAgICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICAgIG1heC1oZWlnaHQ6IDA7XG4gICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgLy8gbWluLWhlaWdodDogMTUwcHg7XG4gICAgfVxuICAgIC5jb250ZW50IHtcbiAgICAgIG1heC1oZWlnaHQ6IDEwMDAwMDBweDtcbiAgICB9XG4gIH1cbn1cbiIsIjpob3N0IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHRyYW5zaXRpb246IHdpZHRoIDAuNXMgZWFzZS1pbi1vdXQ7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGJvcmRlci1yYWRpdXM6IDE2cHg7XG59XG5cbi5jb250YWluZXIge1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uY29udGFpbmVyIC5jbG9zZS1idXR0b24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMXJlbTtcbiAgcmlnaHQ6IDFyZW07XG4gIHotaW5kZXg6IDE7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgYm9yZGVyLXJhZGl1czogMTAwZW07XG4gIHdpZHRoOiAycmVtO1xuICBoZWlnaHQ6IDJyZW07XG59XG4uY29udGFpbmVyIC5jbG9zZS1idXR0b24gLmxpbmUtMSxcbi5jb250YWluZXIgLmNsb3NlLWJ1dHRvbiAubGluZS0yIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDAuOTVyZW07XG4gIGxlZnQ6IDAuMzVyZW07XG4gIHdpZHRoOiAxLjNyZW07XG4gIGhlaWdodDogMS4zcmVtO1xuICBib3JkZXItdG9wOiAycHggc29saWQgI2VlZTtcbiAgdHJhbnNmb3JtLW9yaWdpbjogNTElIDUlO1xufVxuLmNvbnRhaW5lciAuY2xvc2UtYnV0dG9uIC5saW5lLTEge1xuICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XG59XG4uY29udGFpbmVyIC5jbG9zZS1idXR0b24gLmxpbmUtMiB7XG4gIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XG59XG4uY29udGFpbmVyIC5oZWFkZXIge1xuICBib3JkZXItcmFkaXVzOiAxNnB4O1xuICB0cmFuc2l0aW9uLXByb3BlcnR5OiBib3JkZXItcmFkaXVzLCBtaW4taGVpZ2h0O1xuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAxNTBtcywgNjAwbXM7XG4gIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluLW91dCwgY3ViaWMtYmV6aWVyKDAuMTMsIDAuMjksIDAuMTEsIDEuMzgpO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbn1cbi5jb250YWluZXIgLmhlYWRlciAuYmFubmVyLXZpZGVvIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgei1pbmRleDogLTE7XG59XG4uY29udGFpbmVyIC5oZWFkZXIgLmNhdGVnb3J5LFxuLmNvbnRhaW5lciAuaGVhZGVyIC50aXRsZSxcbi5jb250YWluZXIgLmhlYWRlciAuc3VidGl0bGUge1xuICBwYWRkaW5nOiAxcmVtO1xuICB0cmFuc2l0aW9uOiBwYWRkaW5nIDIwMG1zIGVhc2UtaW4tb3V0O1xuICBvcGFjaXR5OiAxO1xufVxuLmNvbnRhaW5lciAuaGVhZGVyIC5iYW5uZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMDtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIHdpZHRoOiAxMDAlO1xufVxuLmNvbnRhaW5lciAuaGVhZGVyIC5iYW5uZXIgLnRpdGxlLCAuY29udGFpbmVyIC5oZWFkZXIgLmJhbm5lciAuc3VidGl0bGUge1xuICBjb2xvcjogaW5pdGlhbDtcbiAgdGV4dC1zaGFkb3c6IG5vbmU7XG59XG4uY29udGFpbmVyIC5oZWFkZXIgLmJhbm5lciAudGl0bGUge1xuICBwYWRkaW5nOiAwIDFyZW07XG59XG4uY29udGFpbmVyIC5oZWFkZXIgLmJhbm5lciAuc3VidGl0bGUge1xuICBwb3NpdGlvbjogaW5pdGlhbDtcbiAgZm9udC1zaXplOiAwLjlyZW07XG4gIHBhZGRpbmctdG9wOiAwLjVyZW07XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG4uY29udGFpbmVyIC5oZWFkZXIgLmNhdGVnb3J5IHtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgZm9udC1zaXplOiAwLjhyZW07XG4gIGNvbG9yOiBncmV5O1xuICBwYWRkaW5nLWJvdHRvbTogMC4zcmVtO1xufVxuLmNvbnRhaW5lciAuaGVhZGVyIC50aXRsZSB7XG4gIHBhZGRpbmctdG9wOiAwO1xuICBmb250LXNpemU6IDEuNXJlbTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgY29sb3I6IHdoaXRlO1xuICB0ZXh0LXNoYWRvdzogMHB4IDAgNXB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcbn1cbi5jb250YWluZXIgLmhlYWRlciAuc3VidGl0bGUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIGJvdHRvbTogMDtcbiAgcmlnaHQ6IDA7XG4gIHRleHQtYWxpZ246IGVuZDtcbiAgY29sb3I6IHdoaXRlO1xuICBtYXgtaGVpZ2h0OiAxMDAwcHg7XG4gIHRyYW5zaXRpb24tcHJvcGVydHk6IG9wYWNpdHksIG1heC1oZWlnaHQsIHBhZGRpbmc7XG4gIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluLW91dCwgZWFzZS1pbi1vdXQ7XG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDMwMG1zLCAyMDBtcztcbn1cbi5jb250YWluZXIgLmNvbnRlbnQge1xuICB0cmFuc2l0aW9uOiBtYXgtaGVpZ2h0IDQwMG1zIGVhc2UtaW4tb3V0O1xuICBtYXgtaGVpZ2h0OiAwcHg7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xufVxuLmNvbnRhaW5lci5leHBhbmRlZCAuaGVhZGVyIHtcbiAgYm9yZGVyLXJhZGl1czogMHB4O1xufVxuLmNvbnRhaW5lci5leHBhbmRlZCAuaGVhZGVyIC5jYXRlZ29yeSxcbi5jb250YWluZXIuZXhwYW5kZWQgLmhlYWRlciAudGl0bGUsXG4uY29udGFpbmVyLmV4cGFuZGVkIC5oZWFkZXIgLnN1YnRpdGxlIHtcbiAgcGFkZGluZy1sZWZ0OiAwLjdyZW07XG4gIHBhZGRpbmctcmlnaHQ6IDAuN3JlbTtcbn1cbi5jb250YWluZXIuZXhwYW5kZWQgLmhlYWRlciAuYmFubmVyIC5jYXRlZ29yeSwgLmNvbnRhaW5lci5leHBhbmRlZCAuaGVhZGVyIC5iYW5uZXIgLnRpdGxlIHtcbiAgcGFkZGluZy1sZWZ0OiAxLjVyZW07XG59XG4uY29udGFpbmVyLmV4cGFuZGVkIC5oZWFkZXIgLmJhbm5lciAuc3VidGl0bGUge1xuICBvcGFjaXR5OiAwO1xuICBtYXgtaGVpZ2h0OiAwO1xuICBwYWRkaW5nOiAwO1xufVxuLmNvbnRhaW5lci5leHBhbmRlZCAuY29udGVudCB7XG4gIG1heC1oZWlnaHQ6IDEwMDAwMDBweDtcbn0iXX0= */");

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
        this.showBanner = true;
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
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], CardComponent.prototype, "showBanner", void 0);
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

module.exports = JSON.parse("{\"items\":[{\"id\":4,\"title\":\"mHealth\",\"subtitle\":\"Assisting our nurses and clinicians\",\"category\":\"App\",\"iconUrl\":\"assets/img/mhealth_icon.png\",\"link\":\"http://www.imsmaxims.com\",\"body\":[{\"type\":\"text\",\"content\":\"mHealth (Mobile Health) is a iOS, Android and Web application designed to aid clinicians and nursing with patient management. It allows the users to do a plethora of tasks, including record vital signs for a patient, do bed management, discharge planning, managing surgical theatres and much more.\"},{\"type\":\"screenshot\",\"sourceUrl\":\"assets/img/mhealth_ipad.png\",\"content\":\"Our Patient Bedside View gives a high-level view of the patient's care\"},{\"type\":\"text\",\"content\":\"I led development on this app for over 3 years with a team of 5 UI engineers, taking it from the R&D stage to production. I contributed to the development, design, deployment and planning.\"},{\"type\":\"screenshot\",\"sourceUrl\":\"assets/img/mhealth_demo.mp4\",\"content\":\"Recording vital signs is just one of the many features available\"},{\"type\":\"text\",\"content\":\"Originally developed in AngularJS and Ionic, and migrated to Angular 5 and Ionic 3 by myself, the app makes extensive use of RxJS (ReactiveX), following an event driven programming model. IMS MAXIMS, the company's main enterprise offering, offers a REST API which we used to populate data.\"},{\"type\":\"text\",\"content\":\"It is currently live in Taunton & Somerset NHS Foundation Trust, as well as Wye Valley NHS Trust. Check out a video from Taunton here: \"},{\"type\":\"video\",\"sourceUrl\":\"assets/img/mhealth_taunton.mp4\"},{\"type\":\"summary\"}],\"bannerUrl\":\"assets/img/mhealth.mp4\"},{\"id\":5,\"title\":\"Clinical Noting\",\"subtitle\":\"Towards a paperless future\",\"category\":\"App\",\"iconUrl\":\"assets/img/clinical_noting_icon.png\",\"link\":\"http://www.imsmaxims.com\",\"bannerUrl\":\"assets/img/clinical_noting.jpg\",\"body\":[{\"type\":\"text\",\"content\":\"The Clinical Noting app is a web application designed to assist clinicians with note taking during patient appointments. It is launched from IMS MAXIMS, the main enterprise offering from IMS, with further developments to launch it as a standalone iOS, Android and web application in the near future.\"},{\"type\":\"screenshot\",\"sourceUrl\":\"assets/img/clinical_noting_screenshot.png\",\"content\":\"Clinicians can record various types of information for an appointment\"},{\"type\":\"text\",\"content\":\"It is built in Angular 8, using Angular Material components, with state management being handled by NGRX. It takes advantages of the latest Angular and NGRX features, such as using the Ivy renderer, taking advantage of NGRX's new factory framework to make generic reducers/actions/selectors, and using the latest Angular CDK.\"},{\"type\":\"text\",\"content\":\"It is due for release in Q1 2020.\"},{\"type\":\"summary\"}]},{\"id\":2,\"title\":\"We Can Help\",\"subtitle\":\"Providing a helping hand when needed\",\"category\":\"App\",\"iconUrl\":\"assets/img/wecanhelp_icon.png\",\"link\":\"http://jackgallagher.ie/WeCanHelp\",\"bannerUrl\":\"assets/img/wecanhelp.png\",\"body\":[{\"type\":\"text\",\"content\":\"We Can Help was a iOS and Android app built for my cousin, as a pitch to the HSE (Health Service Executive of Ireland) for giving people easy access to various health and safety services available in Ireland. It was an Ionic 3 / Angular 5 app that took advantage of Google Maps API, text-to-speech for  an accident and emergency feature, and SMS integration.\"},{\"type\":\"screenshot\",\"content\":\"Designed to be approachable\",\"sourceUrl\":\"assets/img/wecanhelp_animated.mp4\"},{\"type\":\"text\",\"content\":\"Ultimately, the pitch was unsuccessful due to a lack of funding, however the aesthetic design was used in an alternative informational sticker campaign. These are currently located in many public places throughout the north-west of Ireland.\"},{\"type\":\"image\",\"sourceUrl\":\"assets/img/wecanhelp_sticker.jpg\"},{\"type\":\"summary\"}]},{\"id\":1,\"title\":\"IBM Coplink\",\"subtitle\":\"Facilitating Law Enforcement\",\"category\":\"App\",\"iconUrl\":\"assets/img/coplink_icon.jpg\",\"bannerUrl\":\"assets/img/coplink.mp4\",\"showBanner\":true,\"link\":\"https://apkpure.com/ibm-coplink/com.ibm.i2.coplink\",\"body\":[{\"type\":\"text\",\"content\":\"IBM Coplink is an app to assist law enforcement officers while on the move. It is a iOS and Android application that allows the user to search the Coplink database to find people, vehicles, objects, organisations and relationships. The user can also use a map screen to find the same results for situational awareness. \"},{\"type\":\"image\",\"sourceUrl\":\"assets/img/coplink_search.jpg\"},{\"type\":\"text\",\"content\":\"I led development on the Android app, built natively with no specific framework. I ported this over from an IBM Worklight hybrid app. Developments included using the Google Maps API for the situational awareness feature, building the search screens generically to minimise duplicated UI elements and logic, and using the native camera APIs to facilitate server-side facial recognition.\"},{\"type\":\"screenshot\",\"content\":\"I worked primarily on the Android app.\",\"sourceUrl\":\"assets/img/coplink_login.jpg\"},{\"type\":\"text\",\"content\":\"It was live in the San Bernardino Police Department, and was used by officers in the event which kicked off one of the highest profile tech stories of 2016 (Apple - FBI Encryption Dispute).\"},{\"type\":\"youtube\",\"content\":\"Coplink in action\",\"sourceUrl\":\"https://www.youtube-nocookie.com/embed/ELGr22fIq1M?controls=0\"},{\"type\":\"text\",\"content\":\"It has since been removed from the App Store but is available on mirrors. \"},{\"type\":\"summary\"}]},{\"id\":8,\"title\":\"Access Earth\",\"subtitle\":\"Know more. Do more. Live more.\",\"category\":\"App\",\"link\":\"http://access.earth\",\"iconUrl\":\"assets/img/access_earth_icon.png\",\"bannerUrl\":\"assets/img/access_earth_1.png\",\"body\":[{\"type\":\"text\",\"content\":\"The goal of Access Earth is to provide accessibility information for locations around the globe. The service is a platform for users to share and upload accessibility information, crowd-sourced and crowd-verified. \"},{\"type\":\"video\",\"sourceUrl\":\"assets/img/access_earth_demo.mp4\",\"bannerUrl\":\"assets/img/access_earth_promo.jpg\"},{\"type\":\"text\",\"content\":\"We entered the app and service into Microsoft's Imagine Cup in 2014. We built it in initially in jQuery and Cordova, and a second version was built in WinJS with Windows 8 Metro inspired design. It featured Cortana voice assistant support, allowing the user to add accessibility information using only their voice.\"},{\"type\":\"image\",\"sourceUrl\":\"assets/img/access_earth_win.jpg\"},{\"type\":\"text\",\"content\":\"We came 3rd Place Worldwide in the Citizenship Category. The service is still live and developing to this day (without my involvement), and has secured regular investment. \"},{\"type\":\"text\",\"content\":\"Please check out the latest version on iOS, Android and the web.\"},{\"type\":\"summary\"}]},{\"id\":6,\"title\":\"IBM Citizen Collaboration\",\"subtitle\":\"Enabling citizens to assist local governments\",\"category\":\"App\",\"body\":[{\"type\":\"text\",\"content\":\"Some content here\"}],\"bannerUrl\":\"assets/img/coplink.jpg\"},{\"id\":7,\"title\":\"IBM Intelligent Operations Center\",\"subtitle\":\"Providing Operational Insight\",\"category\":\"Enterprise\",\"link\":\"https://www.ibm.com/uk-en/marketplace/city-insights\",\"bannerUrl\":\"assets/img/ioc.png\",\"body\":[{\"type\":\"text\",\"content\":\"Some content here\"},{\"type\":\"youtube\",\"sourceUrl\":\"https://www.youtube-nocookie.com/embed/3yVe1DL2qjs?autoplay=1&hl=en-uk&iv_load_policy=3&listType=playlist&origin=https%3A%2F%2Fwww.ibm.com&rel=0&showinfo=1&controls=1&modestbranding=0&theme=dark&enablejsapi=1&widgetid=1\"}]},{\"id\":3,\"title\":\"Oracle Worldwide Product Translation Group\",\"subtitle\":\"Providing i18n for the Oracle Suite\",\"category\":\"QA\",\"showBanner\":true,\"body\":[{\"type\":\"text\",\"content\":\"Some content here\"}],\"bannerUrl\":\"assets/img/oracle.png\"}]}");

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