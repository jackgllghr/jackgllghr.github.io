(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

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
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/__ivy_ngcc__/fesm5/animations.js");

var smoothHeight = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('grow', [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('void <=> *', []),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* <=> *', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ height: '{{startHeight}}px' }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('.5s ease')], {
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");




var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule.ngModuleDef = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
    AppRoutingModule.ngInjectorDef = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
    return AppRoutingModule;
}());

/*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
/*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null);


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _components_card_container_card_container_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/card-container/card-container.component */ "./src/app/components/card-container/card-container.component.ts");



var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app-store-cv';
    }
    AppComponent.ngComponentDef = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], factory: function AppComponent_Factory(t) { return new (t || AppComponent)(); }, consts: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-card-container");
        } }, directives: [_components_card_container_card_container_component__WEBPACK_IMPORTED_MODULE_1__["CardContainerComponent"]], styles: ["[_nghost-%COMP%] {\n  font-family: -apple-system, BlinkMacSystemFont, sans-serif;\n}\n\napp-card-container[_ngcontent-%COMP%] {\n  height: 100vh;\n  width: 100vw;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qYWNrcGVyc29uYWwvRGV2ZWxvcG1lbnQvYXBwLXN0b3JlLWN2L3NyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSwwREFBQTtBQ0NKOztBRENBO0VBQ0ksYUFBQTtFQUNBLFlBQUE7QUNFSiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0e1xuICAgIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIHNhbnMtc2VyaWY7XG59XG5hcHAtY2FyZC1jb250YWluZXJ7XG4gICAgaGVpZ2h0OiAxMDB2aDtcbiAgICB3aWR0aDogMTAwdnc7XG59IiwiOmhvc3Qge1xuICBmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBzYW5zLXNlcmlmO1xufVxuXG5hcHAtY2FyZC1jb250YWluZXIge1xuICBoZWlnaHQ6IDEwMHZoO1xuICB3aWR0aDogMTAwdnc7XG59Il19 */"] });
    return AppComponent;
}());

/*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], null, null);


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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm5/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm5/animations.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_card_card_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/card/card.component */ "./src/app/components/card/card.component.ts");
/* harmony import */ var _directives_smooth_height_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./directives/smooth-height.directive */ "./src/app/directives/smooth-height.directive.ts");
/* harmony import */ var _components_card_container_card_container_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/card-container/card-container.component */ "./src/app/components/card-container/card-container.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");










var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule.ngModuleDef = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]] });
    AppModule.ngInjectorDef = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_8__["CommonModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"]
            ]] });
    return AppModule;
}());

/*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
        _components_card_card_component__WEBPACK_IMPORTED_MODULE_5__["CardComponent"],
        _directives_smooth_height_directive__WEBPACK_IMPORTED_MODULE_6__["SmoothHeightAnimDirective"],
        _components_card_container_card_container_component__WEBPACK_IMPORTED_MODULE_7__["CardContainerComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["CommonModule"],
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"]] });
/*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_8__["CommonModule"],
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"]
                ],
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                    _components_card_card_component__WEBPACK_IMPORTED_MODULE_5__["CardComponent"],
                    _directives_smooth_height_directive__WEBPACK_IMPORTED_MODULE_6__["SmoothHeightAnimDirective"],
                    _components_card_container_card_container_component__WEBPACK_IMPORTED_MODULE_7__["CardContainerComponent"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
            }]
    }], null, null);


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/__ivy_ngcc__/fesm5/animations.js");
/* harmony import */ var _assets_data_data_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../assets/data/data.json */ "./src/assets/data/data.json");
var _assets_data_data_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../../assets/data/data.json */ "./src/assets/data/data.json", 1);
/* harmony import */ var src_app_services_window_service_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/window.service.js */ "./src/app/services/window.service.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm5/platform-browser.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _card_card_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../card/card.component */ "./src/app/components/card/card.component.ts");










var _c0 = ["container"];
var _c1 = [1, "container"];
var _c2 = ["container", ""];
var _c3 = [1, "header"];
var _c4 = [3, "ngStyle", "category", "title", "subtitle", "bgImage", "showBanner", "cardHeight", "expanded", "focused", "canClose", "click", "close", 4, "ngFor", "ngForOf"];
var _c5 = [1, "backdrop", 3, "ngStyle", "click"];
var _c6 = [3, "ngStyle", "category", "title", "subtitle", "bgImage", "showBanner", "cardHeight", "expanded", "canClose", "click", "close"];
var _c7 = [1, "card-content"];
var _c8 = [4, "ngFor", "ngForOf"];
var _c9 = ["class", "body-text-container", 3, "innerHtml", 4, "ngIf"];
var _c10 = ["class", "body-image-container", 4, "ngIf"];
var _c11 = ["class", "body-screenshot-container", 4, "ngIf"];
var _c12 = ["class", "body-video-container", 4, "ngIf"];
var _c13 = ["class", "body-summary-container", 4, "ngIf"];
var _c14 = [1, "body-text-container", 3, "innerHtml"];
function CardContainerComponent_app_card_5_ng_container_2_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", _c14);
} if (rf & 2) {
    var item_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHtml", item_r11.content, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
} }
var _c15 = [1, "body-image-container"];
var _c16 = [1, "image"];
var _c17 = [3, "src"];
var _c18 = ["class", "banner", 4, "ngIf"];
var _c19 = [1, "banner"];
function CardContainerComponent_app_card_5_ng_container_2_div_2_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", _c19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var item_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵselect"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r11.content);
} }
function CardContainerComponent_app_card_5_ng_container_2_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", _c15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", _c16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", _c17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, CardContainerComponent_app_card_5_ng_container_2_div_2_div_3_Template, 2, 1, "div", _c18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var item_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵselect"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", item_r11.sourceUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵselect"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r11.content != "");
} }
var _c20 = [1, "body-screenshot-container"];
var _c21 = [1, "screenshot"];
var _c22 = [3, "src", 4, "ngIf"];
var _c23 = ["autoplay", "", "loop", "", "playsinline", "", 3, "muted", 4, "ngIf"];
function CardContainerComponent_app_card_5_ng_container_2_div_3_img_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", _c17);
} if (rf & 2) {
    var item_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", item_r11.sourceUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
var _c24 = ["autoplay", "", "loop", "", "playsinline", "", 3, "muted"];
var _c25 = ["type", "video/mp4", 3, "src"];
function CardContainerComponent_app_card_5_ng_container_2_div_3_video_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "video", _c24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "source", _c25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var item_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    var ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("muted", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵselect"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r23.getSafeVideoUrl(item_r11.sourceUrl), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function CardContainerComponent_app_card_5_ng_container_2_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", _c20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", _c21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CardContainerComponent_app_card_5_ng_container_2_div_3_img_2_Template, 1, 1, "img", _c22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, CardContainerComponent_app_card_5_ng_container_2_div_3_video_3_Template, 2, 2, "video", _c23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", _c19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var item_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    var card_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵselect"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r14.isVideo(item_r11.sourceUrl));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵselect"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r14.isSelected(card_r8.id) && ctx_r14.isVideo(item_r11.sourceUrl));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵselect"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r11.content);
} }
var _c26 = [1, "body-video-container"];
var _c27 = ["controls", "", "allowfullscreen", "", 3, "poster", 4, "ngIf"];
var _c28 = ["controls", "", "allowfullscreen", "", 3, "poster"];
function CardContainerComponent_app_card_5_ng_container_2_div_4_video_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "video", _c28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "source", _c25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var item_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    var ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("poster", item_r11.bannerUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵselect"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r28.getSafeVideoUrl(item_r11.sourceUrl), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function CardContainerComponent_app_card_5_ng_container_2_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", _c26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CardContainerComponent_app_card_5_ng_container_2_div_4_video_1_Template, 2, 2, "video", _c27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var card_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵselect"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r15.isSelected(card_r8.id));
} }
var _c29 = ["width", "560", "height", "315", "frameborder", "0", "allow", "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture", "allowfullscreen", "", 3, "src", 4, "ngIf"];
var _c30 = ["width", "560", "height", "315", "frameborder", "0", "allow", "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture", "allowfullscreen", "", 3, "src"];
function CardContainerComponent_app_card_5_ng_container_2_div_5_iframe_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "iframe", _c30);
} if (rf & 2) {
    var item_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    var ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r31.getSafeVideoUrl(item_r11.sourceUrl), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeResourceUrl"]);
} }
function CardContainerComponent_app_card_5_ng_container_2_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", _c26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CardContainerComponent_app_card_5_ng_container_2_div_5_iframe_1_Template, 1, 1, "iframe", _c29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var card_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵselect"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r16.isSelected(card_r8.id));
} }
var _c31 = [1, "body-summary-container"];
var _c32 = [1, "icon", 3, "src"];
var _c33 = [1, "title"];
var _c34 = [1, "content"];
var _c35 = ["class", "link", 4, "ngIf"];
var _c36 = [1, "link"];
var _c37 = ["target", "_blank", 3, "href"];
function CardContainerComponent_app_card_5_ng_container_2_div_6_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", _c36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", _c37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "GET");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var card_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵselect"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", card_r8.link, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function CardContainerComponent_app_card_5_ng_container_2_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", _c31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", _c32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", _c33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", _c34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, CardContainerComponent_app_card_5_ng_container_2_div_6_div_6_Template, 3, 1, "div", _c35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var card_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵselect"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", card_r8.iconUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵselect"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](card_r8.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵselect"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](card_r8.subtitle);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵselect"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !!card_r8.link);
} }
function CardContainerComponent_app_card_5_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CardContainerComponent_app_card_5_ng_container_2_div_1_Template, 1, 1, "div", _c9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CardContainerComponent_app_card_5_ng_container_2_div_2_Template, 4, 2, "div", _c10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, CardContainerComponent_app_card_5_ng_container_2_div_3_Template, 6, 3, "div", _c11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, CardContainerComponent_app_card_5_ng_container_2_div_4_Template, 2, 1, "div", _c12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, CardContainerComponent_app_card_5_ng_container_2_div_5_Template, 2, 1, "div", _c12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, CardContainerComponent_app_card_5_ng_container_2_div_6_Template, 7, 4, "div", _c13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    var item_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵselect"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r11.type == "text");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵselect"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r11.type == "image");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵselect"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r11.type == "screenshot");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵselect"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r11.type == "video");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵselect"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r11.type == "youtube");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵselect"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r11.type == "summary");
} }
function CardContainerComponent_app_card_5_Template(rf, ctx) { if (rf & 1) {
    var _r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-card", _c6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyling"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CardContainerComponent_app_card_5_Template_app_card_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r38); var card_r8 = ctx.$implicit; var ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r37.selectCard(card_r8.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("close", function CardContainerComponent_app_card_5_Template_app_card_close_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r38); var ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r39.deselectCard(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", _c7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CardContainerComponent_app_card_5_ng_container_2_Template, 7, 6, "ng-container", _c8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var card_r8 = ctx.$implicit;
    var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("focused", ctx_r7.isSelected(card_r8.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstylingApply"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@focused", ctx_r7.isSelected(card_r8.id))("ngStyle", ctx_r7.getCardStyles(card_r8.id))("category", card_r8.category)("title", card_r8.title)("subtitle", card_r8.subtitle)("bgImage", card_r8.bannerUrl)("showBanner", card_r8.showBanner)("cardHeight", ctx_r7.isSelected(card_r8.id) ? ctx_r7.selectedCardHeaderHeight : ctx_r7.cardHeaderHeight)("expanded", ctx_r7.isSelected(card_r8.id))("canClose", ctx_r7.isMobile());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵselect"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", card_r8.body);
} }
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
        this.cards = _assets_data_data_json__WEBPACK_IMPORTED_MODULE_2__["items"];
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
    CardContainerComponent.ngComponentDef = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CardContainerComponent, selectors: [["app-card-container"]], factory: function CardContainerComponent_Factory(t) { return new (t || CardContainerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["DomSanitizer"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_window_service_js__WEBPACK_IMPORTED_MODULE_3__["WindowService"])); }, viewQuery: function CardContainerComponent_Query(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_c0, true);
        } if (rf & 2) {
            var _t;
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"]((_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadViewQuery"]())) && (ctx.container = _t.first);
        } }, hostBindings: function CardContainerComponent_HostBindings(rf, ctx, elIndex) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("resize", function CardContainerComponent_resize_HostBindingHandler($event) { return ctx.onResize($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
        } }, consts: 7, vars: 5, template: function CardContainerComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", _c1, _c2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyling"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", _c3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Jack Gallagher");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, CardContainerComponent_app_card_5_Template, 3, 12, "app-card", _c4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", _c5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyling"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CardContainerComponent_Template_div_click_6_listener($event) { return ctx.deselectCard(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("focused", ctx.isFocused());
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstylingApply"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵselect"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.cards);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵselect"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("focused", ctx.isFocused());
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstylingApply"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@fadeInOut", ctx.isFocused())("ngStyle", ctx.backdropPosition);
        } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgStyle"], _card_card_component__WEBPACK_IMPORTED_MODULE_6__["CardComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"]], styles: [".container[_ngcontent-%COMP%] {\n  width: 100vw;\n  height: 100vh;\n  overflow: scroll;\n  position: relative;\n}\n.container[_ngcontent-%COMP%]:before {\n  content: \"\";\n  position: absolute;\n  display: block;\n  height: 100%;\n  width: 100%;\n  top: 0;\n  left: 0;\n  z-index: 998;\n  pointer-events: none;\n  -webkit-transition: z-index 0ms linear 800ms, -webkit-backdrop-filter 600ms linear;\n  transition: z-index 0ms linear 800ms, -webkit-backdrop-filter 600ms linear;\n  transition: z-index 0ms linear 800ms, backdrop-filter 600ms linear;\n  transition: z-index 0ms linear 800ms, backdrop-filter 600ms linear, -webkit-backdrop-filter 600ms linear;\n}\n.header[_ngcontent-%COMP%] {\n  margin: 1rem auto;\n  border-bottom: thin solid #eee;\n  max-width: 930px;\n}\napp-card[_ngcontent-%COMP%] {\n  position: absolute;\n  -webkit-transform: scale(1);\n          transform: scale(1);\n  -webkit-transition-property: top, left, width, margin-top, border-radius, max-height, -webkit-transform;\n  transition-property: top, left, width, margin-top, border-radius, max-height, -webkit-transform;\n  transition-property: top, left, width, margin-top, transform, border-radius, max-height;\n  transition-property: top, left, width, margin-top, transform, border-radius, max-height, -webkit-transform;\n  -webkit-transition-duration: 0.6s, 0.6s, 0.6s, 0.6s, 0.6s, 150ms, 400ms, 0.6s;\n          transition-duration: 0.6s, 0.6s, 0.6s, 0.6s, 0.6s, 150ms, 400ms, 0.6s;\n  -webkit-transition-timing-function: cubic-bezier(0.51, -0.07, 0, 1.4), cubic-bezier(0.51, -0.07, 0, 1.4), cubic-bezier(0.51, -0.07, 0, 1.4), cubic-bezier(0.51, -0.07, 0, 1.4), ease-in-out, cubic-bezier(0.51, -0.07, 0, 1.4), ease-in-out;\n          transition-timing-function: cubic-bezier(0.51, -0.07, 0, 1.4), cubic-bezier(0.51, -0.07, 0, 1.4), cubic-bezier(0.51, -0.07, 0, 1.4), cubic-bezier(0.51, -0.07, 0, 1.4), ease-in-out, cubic-bezier(0.51, -0.07, 0, 1.4), ease-in-out;\n  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);\n  overflow: hidden;\n}\napp-card[_ngcontent-%COMP%]:hover, app-card[_ngcontent-%COMP%]:active {\n  -webkit-transform: scale(0.97);\n          transform: scale(0.97);\n}\napp-card[_ngcontent-%COMP%]:last-of-type {\n  margin-bottom: 3rem;\n}\napp-card.focused[_ngcontent-%COMP%] {\n  margin-top: 0;\n  overflow: scroll;\n  -ms-scroll-chaining: none;\n      overscroll-behavior: none;\n  max-height: 100vh;\n  border-radius: 16px 16px 0 0;\n  -webkit-transform: scale(1);\n          transform: scale(1);\n}\napp-card.focused[_ngcontent-%COMP%]:hover, app-card.focused[_ngcontent-%COMP%]:active {\n  -webkit-transform: scale(1);\n          transform: scale(1);\n}\n@media only screen and (max-width: 600px) {\n  app-card.focused[_ngcontent-%COMP%] {\n    border-radius: 0px;\n  }\n}\n@media only screen and (max-width: 1000px) {\n  .header[_ngcontent-%COMP%] {\n    margin: 1rem 1.25rem;\n  }\n}\n.backdrop[_ngcontent-%COMP%] {\n  position: absolute;\n  content: \"\";\n  z-index: 997;\n  -webkit-backdrop-filter: blur(20px);\n          backdrop-filter: blur(20px);\n  pointer-events: none;\n}\n.backdrop.focused[_ngcontent-%COMP%] {\n  pointer-events: all;\n}\n.card-content[_ngcontent-%COMP%] {\n  padding-top: 1.5rem;\n  padding-bottom: 6rem;\n}\n.body-screenshot-container[_ngcontent-%COMP%], .body-text-container[_ngcontent-%COMP%], .body-summary-container[_ngcontent-%COMP%] {\n  margin: 1.5rem;\n  margin-top: 2rem;\n  font-size: 1.3rem;\n  color: #888;\n  font-weight: 300;\n}\n.body-video-container[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.body-video-container[_ngcontent-%COMP%]   video[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.body-video-container[_ngcontent-%COMP%]   video[poster][_ngcontent-%COMP%] {\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n.body-video-container[_ngcontent-%COMP%]   iframe[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.body-image-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  -o-object-fit: contain;\n     object-fit: contain;\n  width: 100%;\n}\n.body-screenshot-container[_ngcontent-%COMP%]   .screenshot[_ngcontent-%COMP%] {\n  border: 1px solid #0001;\n  border-radius: 1rem;\n  overflow: hidden;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  max-width: -webkit-fit-content;\n  max-width: -moz-fit-content;\n  max-width: fit-content;\n  max-width: -webkit-fill-available;\n  margin: auto;\n  -webkit-mask-image: -webkit-radial-gradient(white, black);\n}\n.body-screenshot-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%], .body-screenshot-container[_ngcontent-%COMP%]   video[_ngcontent-%COMP%] {\n  width: 100%;\n  -o-object-fit: contain;\n     object-fit: contain;\n}\n.body-screenshot-container[_ngcontent-%COMP%]   .banner[_ngcontent-%COMP%] {\n  margin-top: -5px;\n  background: #0001;\n  padding: 1rem 1.5rem;\n  text-align: start;\n  font-size: 0.8em;\n}\n.body-summary-container[_ngcontent-%COMP%] {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-align: center;\n          align-items: center;\n  background: #0001;\n  padding: 3rem;\n  margin: 1.5rem 0;\n}\n.body-summary-container[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  margin-bottom: 0.8rem;\n}\n.body-summary-container[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  color: black;\n  font-size: 1.8rem;\n}\n.body-summary-container[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n  font-weight: 200;\n  font-size: 1rem;\n}\n.body-summary-container[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  height: 64px;\n  width: 64px;\n  border-radius: 1rem;\n}\n.body-summary-container[_ngcontent-%COMP%]   .link[_ngcontent-%COMP%] {\n  border-radius: 100em;\n  background: #007aff;\n  font-weight: bold;\n  padding: 0.5rem 1.5rem;\n  font-size: 1rem;\n}\n.body-summary-container[_ngcontent-%COMP%]   .link[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: white;\n  text-decoration: none;\n  text-transform: uppercase;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qYWNrcGVyc29uYWwvRGV2ZWxvcG1lbnQvYXBwLXN0b3JlLWN2L3NyYy9hcHAvY29tcG9uZW50cy9jYXJkLWNvbnRhaW5lci9jYXJkLWNvbnRhaW5lci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9jYXJkLWNvbnRhaW5lci9jYXJkLWNvbnRhaW5lci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQTtFQUNJLFlBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQ0ZKO0FESUk7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtFQUNBLGtGQUFBO0VBQUEsMEVBQUE7RUFBQSxrRUFBQTtFQUFBLHdHQUFBO0FDRlI7QURXQTtFQUNJLGlCQUFBO0VBQ0EsOEJBQUE7RUFDQSxnQkFBQTtBQ1RKO0FEWUE7RUFDSSxrQkFBQTtFQUVBLDJCQUFBO1VBQUEsbUJBQUE7RUFJQSx1R0FBQTtFQUFBLCtGQUFBO0VBQUEsdUZBQUE7RUFBQSwwR0FBQTtFQUNBLDZFQUFBO1VBQUEscUVBQUE7RUFDQSwyT0FBQTtVQUFBLG1PQUFBO0VBRUEseUNBQUE7RUFFQSxnQkFBQTtBQ2ZKO0FEZ0JLO0VBQ0csOEJBQUE7VUFBQSxzQkFBQTtBQ2RSO0FEZ0JJO0VBQ0ksbUJBQUE7QUNkUjtBRG9CQTtFQUNJLGFBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO01BQUEseUJBQUE7RUFDQSxpQkFBQTtFQUVBLDRCQUFBO0VBQ0EsMkJBQUE7VUFBQSxtQkFBQTtBQ2xCSjtBRG1CSTtFQUNJLDJCQUFBO1VBQUEsbUJBQUE7QUNqQlI7QURvQkE7RUFFSTtJQUNJLGtCQUFBO0VDbEJOO0FBQ0Y7QURxQkE7RUFDSTtJQUNJLG9CQUFBO0VDbkJOO0FBQ0Y7QUR3QkE7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUNBQUE7VUFBQSwyQkFBQTtFQUNBLG9CQUFBO0FDdEJKO0FEdUJJO0VBQ0ksbUJBQUE7QUNyQlI7QUR5QkE7RUFDSSxtQkFBQTtFQUNBLG9CQUFBO0FDdEJKO0FEd0JBO0VBQ0ksY0FBQTtFQUNBLGdCQUFBO0VBRUEsaUJBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7QUN0Qko7QUR5QkE7RUFDSSxXQUFBO0FDdEJKO0FEdUJJO0VBQ0ksV0FBQTtBQ3JCUjtBRHVCSTtFQUNJLG9CQUFBO0tBQUEsaUJBQUE7QUNyQlI7QUR1Qkk7RUFDSSxXQUFBO0FDckJSO0FEMEJJO0VBQ0ksc0JBQUE7S0FBQSxtQkFBQTtFQUNBLFdBQUE7QUN2QlI7QUQyQkk7RUFFSSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSwwQkFBQTtFQUFBLHVCQUFBO0VBQUEsa0JBQUE7RUFDQSw4QkFBQTtFQUFBLDJCQUFBO0VBQUEsc0JBQUE7RUFDQSxpQ0FBQTtFQUNBLFlBQUE7RUFDQSx5REFBQTtBQ3pCUjtBRDJCSTtFQUVJLFdBQUE7RUFDQSxzQkFBQTtLQUFBLG1CQUFBO0FDMUJSO0FENEJJO0VBQ0ksZ0JBQUE7RUFDQSxpQkFsSkQ7RUFtSkMsb0JBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FDMUJSO0FEOEJBO0VBQ0ksb0JBQUE7RUFBQSxhQUFBO0VBQ0EsNEJBQUE7RUFBQSw2QkFBQTtVQUFBLHNCQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtFQUNBLGlCQTdKRztFQThKSCxhQUFBO0VBQ0EsZ0JBQUE7QUMzQko7QUQ0Qkk7RUFDSSxxQkFBQTtBQzFCUjtBRDRCSTtFQUNJLFlBQUE7RUFDQSxpQkFBQTtBQzFCUjtBRDRCSTtFQUNJLGdCQUFBO0VBQ0EsZUFBQTtBQzFCUjtBRDRCSTtFQUNJLFlBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7QUMxQlI7QUQ0Qkk7RUFDSSxvQkFBQTtFQUNBLG1CQW5MSztFQW9MTCxpQkFBQTtFQUNBLHNCQUFBO0VBQ0EsZUFBQTtBQzFCUjtBRDJCUTtFQUNJLFlBQUE7RUFFQSxxQkFBQTtFQUNBLHlCQUFBO0FDMUJaIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9jYXJkLWNvbnRhaW5lci9jYXJkLWNvbnRhaW5lci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRhcHBsZS1ibHVlOiAjMDA3YWZmO1xuJGdyZXk6ICMwMDAxO1xuXG4uY29udGFpbmVye1xuICAgIHdpZHRoOiAxMDB2dztcbiAgICBoZWlnaHQ6IDEwMHZoO1xuICAgIG92ZXJmbG93OiBzY3JvbGw7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gICAgJjpiZWZvcmV7XG4gICAgICAgIGNvbnRlbnQ6ICcnO1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICB0b3A6IDA7XG4gICAgICAgIGxlZnQ6IDA7XG4gICAgICAgIHotaW5kZXg6IDk5ODtcbiAgICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgICAgIHRyYW5zaXRpb246IHotaW5kZXggMG1zIGxpbmVhciA4MDBtcywgYmFja2Ryb3AtZmlsdGVyICA2MDBtcyBsaW5lYXIgO1xuICAgICAgICBcbiAgICB9XG4gICAgJi5mb2N1c2Vke1xuICAgIC8vIG92ZXJmbG93OiBoaWRkZW47XG4gICAgfVxuICAgIFxufVxuXG4uaGVhZGVye1xuICAgIG1hcmdpbjogMXJlbSBhdXRvO1xuICAgIGJvcmRlci1ib3R0b206IHRoaW4gc29saWQgI2VlZTtcbiAgICBtYXgtd2lkdGg6IDkzMHB4O1xufVxuXG5hcHAtY2FyZHtcbiAgICBwb3NpdGlvbjphYnNvbHV0ZTtcblxuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XG4gICAgXG4gICAgJHRyYW5zbGF0ZUR1cmF0aW9uOiAuNnM7XG4gICAgJHRyYW5zbGF0ZVRpbWluZzogY3ViaWMtYmV6aWVyKC41MSwtMC4wNywwLDEuNCk7XG4gICAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogdG9wLCBsZWZ0LCB3aWR0aCwgbWFyZ2luLXRvcCwgdHJhbnNmb3JtLCBib3JkZXItcmFkaXVzLCBtYXgtaGVpZ2h0O1xuICAgIHRyYW5zaXRpb24tZHVyYXRpb246ICR0cmFuc2xhdGVEdXJhdGlvbiwgJHRyYW5zbGF0ZUR1cmF0aW9uLCAkdHJhbnNsYXRlRHVyYXRpb24sICR0cmFuc2xhdGVEdXJhdGlvbiwgJHRyYW5zbGF0ZUR1cmF0aW9uLCAxNTBtcywgNDAwbXMsICR0cmFuc2xhdGVEdXJhdGlvbjtcbiAgICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogJHRyYW5zbGF0ZVRpbWluZywgJHRyYW5zbGF0ZVRpbWluZywgJHRyYW5zbGF0ZVRpbWluZywgJHRyYW5zbGF0ZVRpbWluZywgZWFzZS1pbi1vdXQsICR0cmFuc2xhdGVUaW1pbmcsIGVhc2UtaW4tb3V0O1xuICAgIFxuICAgIGJveC1zaGFkb3c6IDAgNXB4IDE1cHggcmdiYSgwLDAsMCwwLjMpO1xuXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgJjpob3ZlciwgJjphY3RpdmV7XG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMC45Nyk7XG4gICAgfVxuICAgICY6bGFzdC1vZi10eXBle1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAzcmVtO1xuICAgIH1cbn1cblxuXG5cbmFwcC1jYXJkLmZvY3VzZWR7XG4gICAgbWFyZ2luLXRvcDogMDtcbiAgICBvdmVyZmxvdzogc2Nyb2xsO1xuICAgIG92ZXJzY3JvbGwtYmVoYXZpb3I6bm9uZTtcbiAgICBtYXgtaGVpZ2h0OiAxMDB2aDtcblxuICAgIGJvcmRlci1yYWRpdXM6IDE2cHggMTZweCAwIDA7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgICAmOmhvdmVyLCAmOmFjdGl2ZXtcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gICAgXG4gICAgYXBwLWNhcmQuZm9jdXNlZHtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMHB4O1xuICAgIH1cbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDAwcHgpIHtcbiAgICAuaGVhZGVye1xuICAgICAgICBtYXJnaW46IDFyZW0gMS4yNXJlbTtcbiAgICB9XG4gICBcbn1cblxuXG4uYmFja2Ryb3B7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGNvbnRlbnQ6ICcnO1xuICAgIHotaW5kZXg6IDk5NztcbiAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMjBweCk7XG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgJi5mb2N1c2Vke1xuICAgICAgICBwb2ludGVyLWV2ZW50czogYWxsO1xuICAgIH1cbn1cblxuLmNhcmQtY29udGVudHsgXG4gICAgcGFkZGluZy10b3A6IDEuNXJlbTtcbiAgICBwYWRkaW5nLWJvdHRvbTogNnJlbTtcbn1cbi5ib2R5LXNjcmVlbnNob3QtY29udGFpbmVyLCAuYm9keS10ZXh0LWNvbnRhaW5lciwgIC5ib2R5LXN1bW1hcnktY29udGFpbmVye1xuICAgIG1hcmdpbjogMS41cmVtO1xuICAgIG1hcmdpbi10b3A6IDJyZW07XG5cbiAgICBmb250LXNpemU6IDEuM3JlbTtcbiAgICBjb2xvcjogIzg4ODtcbiAgICBmb250LXdlaWdodDogMzAwO1xufVxuXG4uYm9keS12aWRlby1jb250YWluZXJ7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgdmlkZW97XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cbiAgICB2aWRlb1twb3N0ZXJdIHtcbiAgICAgICAgb2JqZWN0LWZpdDogY292ZXI7XG4gICAgfVxuICAgIGlmcmFtZXtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfVxufVxuXG4uYm9keS1pbWFnZS1jb250YWluZXJ7XG4gICAgaW1ne1xuICAgICAgICBvYmplY3QtZml0OiBjb250YWluO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICB9XG59XG4uYm9keS1zY3JlZW5zaG90LWNvbnRhaW5lcntcbiAgICAuc2NyZWVuc2hvdHtcbiAgICAgICBcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgJGdyZXk7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDFyZW07XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgIHdpZHRoOiBmaXQtY29udGVudDtcbiAgICAgICAgbWF4LXdpZHRoOiBmaXQtY29udGVudDtcbiAgICAgICAgbWF4LXdpZHRoOiAtd2Via2l0LWZpbGwtYXZhaWxhYmxlO1xuICAgICAgICBtYXJnaW46IGF1dG87XG4gICAgICAgIC13ZWJraXQtbWFzay1pbWFnZTogLXdlYmtpdC1yYWRpYWwtZ3JhZGllbnQod2hpdGUsIGJsYWNrKTtcbiAgICB9XG4gICAgaW1nLCB2aWRlb3tcbiAgICAgICAgLy8gaVBob25lIDggc2l6ZSBzY3JlZW5zaG90cyBvbmx5IGZvciB0aGUgbW9tZW50XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBvYmplY3QtZml0OiBjb250YWluO1xuICAgIH1cbiAgICAuYmFubmVye1xuICAgICAgICBtYXJnaW4tdG9wOiAtNXB4O1xuICAgICAgICBiYWNrZ3JvdW5kOiAkZ3JleTtcbiAgICAgICAgcGFkZGluZzogMXJlbSAxLjVyZW07XG4gICAgICAgIHRleHQtYWxpZ246IHN0YXJ0O1xuICAgICAgICBmb250LXNpemU6IC44ZW07XG4gICAgfVxufVxuXG4uYm9keS1zdW1tYXJ5LWNvbnRhaW5lcntcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kOiRncmV5OyBcbiAgICBwYWRkaW5nOiAzcmVtO1xuICAgIG1hcmdpbjogMS41cmVtIDA7XG4gICAgPiAqIHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogLjhyZW07XG4gICAgfVxuICAgIC50aXRsZXtcbiAgICAgICAgY29sb3I6IGJsYWNrO1xuICAgICAgICBmb250LXNpemU6IDEuOHJlbTtcbiAgICB9XG4gICAgLmNvbnRlbnR7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiAyMDA7XG4gICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICB9XG4gICAgLmljb257XG4gICAgICAgIGhlaWdodDogNjRweDtcbiAgICAgICAgd2lkdGg6IDY0cHg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDFyZW07XG4gICAgfVxuICAgIC5saW5re1xuICAgICAgICBib3JkZXItcmFkaXVzOiAxMDBlbTtcbiAgICAgICAgYmFja2dyb3VuZDogJGFwcGxlLWJsdWU7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICBwYWRkaW5nOiAuNXJlbSAxLjVyZW07XG4gICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICAgICAgYXtcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcblxuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgfVxuICAgIH1cbn0iLCIuY29udGFpbmVyIHtcbiAgd2lkdGg6IDEwMHZ3O1xuICBoZWlnaHQ6IDEwMHZoO1xuICBvdmVyZmxvdzogc2Nyb2xsO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uY29udGFpbmVyOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgei1pbmRleDogOTk4O1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgdHJhbnNpdGlvbjogei1pbmRleCAwbXMgbGluZWFyIDgwMG1zLCBiYWNrZHJvcC1maWx0ZXIgNjAwbXMgbGluZWFyO1xufVxuLmhlYWRlciB7XG4gIG1hcmdpbjogMXJlbSBhdXRvO1xuICBib3JkZXItYm90dG9tOiB0aGluIHNvbGlkICNlZWU7XG4gIG1heC13aWR0aDogOTMwcHg7XG59XG5cbmFwcC1jYXJkIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xuICB0cmFuc2l0aW9uLXByb3BlcnR5OiB0b3AsIGxlZnQsIHdpZHRoLCBtYXJnaW4tdG9wLCB0cmFuc2Zvcm0sIGJvcmRlci1yYWRpdXMsIG1heC1oZWlnaHQ7XG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDAuNnMsIDAuNnMsIDAuNnMsIDAuNnMsIDAuNnMsIDE1MG1zLCA0MDBtcywgMC42cztcbiAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjUxLCAtMC4wNywgMCwgMS40KSwgY3ViaWMtYmV6aWVyKDAuNTEsIC0wLjA3LCAwLCAxLjQpLCBjdWJpYy1iZXppZXIoMC41MSwgLTAuMDcsIDAsIDEuNCksIGN1YmljLWJlemllcigwLjUxLCAtMC4wNywgMCwgMS40KSwgZWFzZS1pbi1vdXQsIGN1YmljLWJlemllcigwLjUxLCAtMC4wNywgMCwgMS40KSwgZWFzZS1pbi1vdXQ7XG4gIGJveC1zaGFkb3c6IDAgNXB4IDE1cHggcmdiYSgwLCAwLCAwLCAwLjMpO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuYXBwLWNhcmQ6aG92ZXIsIGFwcC1jYXJkOmFjdGl2ZSB7XG4gIHRyYW5zZm9ybTogc2NhbGUoMC45Nyk7XG59XG5hcHAtY2FyZDpsYXN0LW9mLXR5cGUge1xuICBtYXJnaW4tYm90dG9tOiAzcmVtO1xufVxuXG5hcHAtY2FyZC5mb2N1c2VkIHtcbiAgbWFyZ2luLXRvcDogMDtcbiAgb3ZlcmZsb3c6IHNjcm9sbDtcbiAgb3ZlcnNjcm9sbC1iZWhhdmlvcjogbm9uZTtcbiAgbWF4LWhlaWdodDogMTAwdmg7XG4gIGJvcmRlci1yYWRpdXM6IDE2cHggMTZweCAwIDA7XG4gIHRyYW5zZm9ybTogc2NhbGUoMSk7XG59XG5hcHAtY2FyZC5mb2N1c2VkOmhvdmVyLCBhcHAtY2FyZC5mb2N1c2VkOmFjdGl2ZSB7XG4gIHRyYW5zZm9ybTogc2NhbGUoMSk7XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgYXBwLWNhcmQuZm9jdXNlZCB7XG4gICAgYm9yZGVyLXJhZGl1czogMHB4O1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMDBweCkge1xuICAuaGVhZGVyIHtcbiAgICBtYXJnaW46IDFyZW0gMS4yNXJlbTtcbiAgfVxufVxuLmJhY2tkcm9wIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBjb250ZW50OiBcIlwiO1xuICB6LWluZGV4OiA5OTc7XG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cigyMHB4KTtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG59XG4uYmFja2Ryb3AuZm9jdXNlZCB7XG4gIHBvaW50ZXItZXZlbnRzOiBhbGw7XG59XG5cbi5jYXJkLWNvbnRlbnQge1xuICBwYWRkaW5nLXRvcDogMS41cmVtO1xuICBwYWRkaW5nLWJvdHRvbTogNnJlbTtcbn1cblxuLmJvZHktc2NyZWVuc2hvdC1jb250YWluZXIsIC5ib2R5LXRleHQtY29udGFpbmVyLCAuYm9keS1zdW1tYXJ5LWNvbnRhaW5lciB7XG4gIG1hcmdpbjogMS41cmVtO1xuICBtYXJnaW4tdG9wOiAycmVtO1xuICBmb250LXNpemU6IDEuM3JlbTtcbiAgY29sb3I6ICM4ODg7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG59XG5cbi5ib2R5LXZpZGVvLWNvbnRhaW5lciB7XG4gIHdpZHRoOiAxMDAlO1xufVxuLmJvZHktdmlkZW8tY29udGFpbmVyIHZpZGVvIHtcbiAgd2lkdGg6IDEwMCU7XG59XG4uYm9keS12aWRlby1jb250YWluZXIgdmlkZW9bcG9zdGVyXSB7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xufVxuLmJvZHktdmlkZW8tY29udGFpbmVyIGlmcmFtZSB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uYm9keS1pbWFnZS1jb250YWluZXIgaW1nIHtcbiAgb2JqZWN0LWZpdDogY29udGFpbjtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5ib2R5LXNjcmVlbnNob3QtY29udGFpbmVyIC5zY3JlZW5zaG90IHtcbiAgYm9yZGVyOiAxcHggc29saWQgIzAwMDE7XG4gIGJvcmRlci1yYWRpdXM6IDFyZW07XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHdpZHRoOiBmaXQtY29udGVudDtcbiAgbWF4LXdpZHRoOiBmaXQtY29udGVudDtcbiAgbWF4LXdpZHRoOiAtd2Via2l0LWZpbGwtYXZhaWxhYmxlO1xuICBtYXJnaW46IGF1dG87XG4gIC13ZWJraXQtbWFzay1pbWFnZTogLXdlYmtpdC1yYWRpYWwtZ3JhZGllbnQod2hpdGUsIGJsYWNrKTtcbn1cbi5ib2R5LXNjcmVlbnNob3QtY29udGFpbmVyIGltZywgLmJvZHktc2NyZWVuc2hvdC1jb250YWluZXIgdmlkZW8ge1xuICB3aWR0aDogMTAwJTtcbiAgb2JqZWN0LWZpdDogY29udGFpbjtcbn1cbi5ib2R5LXNjcmVlbnNob3QtY29udGFpbmVyIC5iYW5uZXIge1xuICBtYXJnaW4tdG9wOiAtNXB4O1xuICBiYWNrZ3JvdW5kOiAjMDAwMTtcbiAgcGFkZGluZzogMXJlbSAxLjVyZW07XG4gIHRleHQtYWxpZ246IHN0YXJ0O1xuICBmb250LXNpemU6IDAuOGVtO1xufVxuXG4uYm9keS1zdW1tYXJ5LWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJhY2tncm91bmQ6ICMwMDAxO1xuICBwYWRkaW5nOiAzcmVtO1xuICBtYXJnaW46IDEuNXJlbSAwO1xufVxuLmJvZHktc3VtbWFyeS1jb250YWluZXIgPiAqIHtcbiAgbWFyZ2luLWJvdHRvbTogMC44cmVtO1xufVxuLmJvZHktc3VtbWFyeS1jb250YWluZXIgLnRpdGxlIHtcbiAgY29sb3I6IGJsYWNrO1xuICBmb250LXNpemU6IDEuOHJlbTtcbn1cbi5ib2R5LXN1bW1hcnktY29udGFpbmVyIC5jb250ZW50IHtcbiAgZm9udC13ZWlnaHQ6IDIwMDtcbiAgZm9udC1zaXplOiAxcmVtO1xufVxuLmJvZHktc3VtbWFyeS1jb250YWluZXIgLmljb24ge1xuICBoZWlnaHQ6IDY0cHg7XG4gIHdpZHRoOiA2NHB4O1xuICBib3JkZXItcmFkaXVzOiAxcmVtO1xufVxuLmJvZHktc3VtbWFyeS1jb250YWluZXIgLmxpbmsge1xuICBib3JkZXItcmFkaXVzOiAxMDBlbTtcbiAgYmFja2dyb3VuZDogIzAwN2FmZjtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHBhZGRpbmc6IDAuNXJlbSAxLjVyZW07XG4gIGZvbnQtc2l6ZTogMXJlbTtcbn1cbi5ib2R5LXN1bW1hcnktY29udGFpbmVyIC5saW5rIGEge1xuICBjb2xvcjogd2hpdGU7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn0iXX0= */"], data: { animation: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])("focused", [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])("true", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                        "z-index": "999"
                        // "position":"fixed"
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])("false", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                        "z-index": "997"
                        // "position":"absolute"
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])("true => false", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])(".6s 0s")),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])("false => true", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])(0))
                ]),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])("fadeInOut", [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])("true", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                        opacity: "1"
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])("false", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                        opacity: "0"
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])("true => false", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])(".4s")),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])("false => true", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])(".4s"))
                ])
            ] }, changeDetection: 0 });
    return CardContainerComponent;
}());

/*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CardContainerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "app-card-container",
                templateUrl: "./card-container.component.html",
                styleUrls: ["./card-container.component.scss"],
                animations: [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])("focused", [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])("true", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                            "z-index": "999"
                            // "position":"fixed"
                        })),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])("false", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                            "z-index": "997"
                            // "position":"absolute"
                        })),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])("true => false", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])(".6s 0s")),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])("false => true", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])(0))
                    ]),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])("fadeInOut", [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])("true", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                            opacity: "1"
                        })),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])("false", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                            opacity: "0"
                        })),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])("true => false", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])(".4s")),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])("false => true", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])(".4s"))
                    ])
                ],
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }, { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["DomSanitizer"] }, { type: src_app_services_window_service_js__WEBPACK_IMPORTED_MODULE_3__["WindowService"] }]; }, { container: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ["container", { static: true }]
        }], onResize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ["window:resize", ["$event"]]
        }] });


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _animations_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../animations/animations */ "./src/app/animations/animations.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm5/platform-browser.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");






var _c0 = [1, "container"];
var _c1 = ["class", "close-button", 3, "click", 4, "ngIf"];
var _c2 = [1, "header"];
var _c3 = ["class", "banner-video", "autoplay", "", "loop", "", "muted", "", "playsinline", "", 4, "ngIf"];
var _c4 = [4, "ngIf"];
var _c5 = ["class", "banner", 4, "ngIf"];
var _c6 = [1, "content"];
var _c7 = [1, "close-button", 3, "click"];
var _c8 = [1, "line-1"];
var _c9 = [1, "line-2"];
function CardComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", _c7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CardComponent_div_1_Template_div_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.closeCard($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", _c8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", _c9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
var _c10 = ["autoplay", "", "loop", "", "muted", "", "playsinline", "", 1, "banner-video"];
var _c11 = ["type", "video/mp4", 3, "src"];
function CardComponent_video_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "video", _c10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "source", _c11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵselect"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r1.getVideoUrl(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
var _c12 = [1, "category"];
var _c13 = [1, "title"];
var _c14 = [1, "subtitle"];
function CardComponent_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", _c12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", _c13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", _c14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵselect"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.category);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵselect"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵselect"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.subtitle);
} }
var _c15 = [1, "banner"];
function CardComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", _c15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", _c12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", _c13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", _c14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵselect"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r3.category);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵselect"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r3.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵselect"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r3.subtitle);
} }
var _c16 = ["*"];
var CardComponent = /** @class */ (function () {
    function CardComponent(sanitizer, container) {
        this.sanitizer = sanitizer;
        this.container = container;
        this.showBanner = true;
        this.expandedValue = false;
        this.bgImage = "assets/coplink.jpg";
        this.canClose = true;
        this.close = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
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
    CardComponent.ngComponentDef = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CardComponent, selectors: [["app-card"]], factory: function CardComponent_Factory(t) { return new (t || CardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])); }, inputs: { title: "title", subtitle: "subtitle", category: "category", cardHeight: "cardHeight", showBanner: "showBanner", expanded: "expanded", bgImage: "bgImage", canClose: "canClose" }, outputs: { close: "close" }, ngContentSelectors: _c16, consts: 8, vars: 7, template: function CardComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", _c0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyling"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CardComponent_div_1_Template, 3, 0, "div", _c1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", _c2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyling"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, CardComponent_video_3_Template, 2, 1, "video", _c3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, CardComponent_ng_container_4_Template, 7, 3, "ng-container", _c4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, CardComponent_div_5_Template, 7, 3, "div", _c5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", _c6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("expanded", ctx.expanded);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstylingApply"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵselect"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.expanded && ctx.canClose);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵselect"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleSanitizer"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefaultStyleSanitizer"]);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("min-height", ctx.cardHeight);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background-image", ctx.isVideoBanner() ? "" : "url(" + ctx.bgImage + ")");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstylingApply"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵselect"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isVideoBanner());
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵselect"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.showBanner);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵselect"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showBanner);
        } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"]], styles: ["[_nghost-%COMP%] {\n  display: block;\n  -webkit-transition: width 0.5s ease-in-out;\n  transition: width 0.5s ease-in-out;\n  overflow: hidden;\n  border-radius: 16px;\n}\n\n.container[_ngcontent-%COMP%] {\n  overflow: hidden;\n  position: relative;\n}\n\n.container[_ngcontent-%COMP%]   .close-button[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 1rem;\n  right: 1rem;\n  z-index: 1;\n  background: rgba(0, 0, 0, 0.2);\n  border-radius: 100em;\n  width: 2rem;\n  height: 2rem;\n}\n\n.container[_ngcontent-%COMP%]   .close-button[_ngcontent-%COMP%]   .line-1[_ngcontent-%COMP%], .container[_ngcontent-%COMP%]   .close-button[_ngcontent-%COMP%]   .line-2[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0.95rem;\n  left: 0.35rem;\n  width: 1.3rem;\n  height: 1.3rem;\n  border-top: 2px solid #eee;\n  -webkit-transform-origin: 51% 5%;\n          transform-origin: 51% 5%;\n}\n\n.container[_ngcontent-%COMP%]   .close-button[_ngcontent-%COMP%]   .line-1[_ngcontent-%COMP%] {\n  -webkit-transform: rotate(45deg);\n          transform: rotate(45deg);\n}\n\n.container[_ngcontent-%COMP%]   .close-button[_ngcontent-%COMP%]   .line-2[_ngcontent-%COMP%] {\n  -webkit-transform: rotate(-45deg);\n          transform: rotate(-45deg);\n}\n\n.container[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%] {\n  border-radius: 16px;\n  -webkit-transition-property: border-radius, min-height;\n  transition-property: border-radius, min-height;\n  -webkit-transition-duration: 150ms, 600ms;\n          transition-duration: 150ms, 600ms;\n  -webkit-transition-timing-function: ease-in-out, cubic-bezier(0.13, 0.29, 0.11, 1.38);\n          transition-timing-function: ease-in-out, cubic-bezier(0.13, 0.29, 0.11, 1.38);\n  position: relative;\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-position: center;\n}\n\n.container[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .banner-video[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 100%;\n  position: absolute;\n  -o-object-fit: cover;\n     object-fit: cover;\n  z-index: -1;\n}\n\n.container[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .category[_ngcontent-%COMP%], .container[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%], .container[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .subtitle[_ngcontent-%COMP%] {\n  padding: 1rem;\n  -webkit-transition: padding 200ms ease-in-out;\n  transition: padding 200ms ease-in-out;\n  opacity: 1;\n}\n\n.container[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .banner[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 0;\n  background: white;\n  width: 100%;\n}\n\n.container[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .banner[_ngcontent-%COMP%]   .category[_ngcontent-%COMP%] {\n  color: grey;\n}\n\n.container[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .banner[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%], .container[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .banner[_ngcontent-%COMP%]   .subtitle[_ngcontent-%COMP%] {\n  color: initial;\n  text-shadow: none;\n}\n\n.container[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .banner[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  padding: 0 1rem;\n}\n\n.container[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .banner[_ngcontent-%COMP%]   .subtitle[_ngcontent-%COMP%] {\n  position: initial;\n  font-size: 0.9rem;\n  padding-top: 0.5rem;\n  text-align: left;\n}\n\n.container[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .category[_ngcontent-%COMP%] {\n  text-transform: uppercase;\n  font-size: 0.8rem;\n  color: grey;\n  padding-bottom: 0.3rem;\n  font-weight: 500;\n  color: rgba(255, 255, 255, 0.5);\n}\n\n.container[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  padding-top: 0;\n  font-size: 1.5rem;\n  font-weight: 600;\n  color: white;\n  text-shadow: 0px 0 5px rgba(0, 0, 0, 0.3);\n}\n\n.container[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .subtitle[_ngcontent-%COMP%] {\n  position: absolute;\n  font-weight: 300;\n  bottom: 0;\n  right: 0;\n  text-align: end;\n  color: white;\n  max-height: 1000px;\n  -webkit-transition-property: opacity, max-height, padding;\n  transition-property: opacity, max-height, padding;\n  -webkit-transition-timing-function: ease-in-out, ease-in-out;\n          transition-timing-function: ease-in-out, ease-in-out;\n  -webkit-transition-duration: 300ms, 200ms;\n          transition-duration: 300ms, 200ms;\n  text-shadow: 0px 0 5px rgba(0, 0, 0, 0.3);\n}\n\n.container[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n  -webkit-transition: max-height 400ms ease-in-out;\n  transition: max-height 400ms ease-in-out;\n  max-height: 0px;\n  background: white;\n}\n\n.container.expanded[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%] {\n  border-radius: 0px;\n}\n\n.container.expanded[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .category[_ngcontent-%COMP%], .container.expanded[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%], .container.expanded[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .subtitle[_ngcontent-%COMP%] {\n  padding-left: 0.7rem;\n  padding-right: 0.7rem;\n}\n\n.container.expanded[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .banner[_ngcontent-%COMP%]   .category[_ngcontent-%COMP%], .container.expanded[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .banner[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  padding-left: 1.5rem;\n}\n\n.container.expanded[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .banner[_ngcontent-%COMP%]   .subtitle[_ngcontent-%COMP%] {\n  opacity: 0;\n  max-height: 0;\n  padding: 0;\n}\n\n.container.expanded[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n  max-height: 1000000px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qYWNrcGVyc29uYWwvRGV2ZWxvcG1lbnQvYXBwLXN0b3JlLWN2L3NyYy9hcHAvY29tcG9uZW50cy9jYXJkL2NhcmQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvY2FyZC9jYXJkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBQTtFQUNBLDBDQUFBO0VBQUEsa0NBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FDQ0Y7O0FERUE7RUFDRSxnQkFBQTtFQUVBLGtCQUFBO0FDQUY7O0FEQ0U7RUFDRSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtFQUNBLDhCQUFBO0VBQ0Esb0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQ0NKOztBRENJOztFQUdFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxhQUpPO0VBS1AsY0FMTztFQU1QLDBCQUFBO0VBQ0EsZ0NBQUE7VUFBQSx3QkFBQTtBQ0FOOztBREVJO0VBQ0UsZ0NBQUE7VUFBQSx3QkFBQTtBQ0FOOztBREVJO0VBQ0UsaUNBQUE7VUFBQSx5QkFBQTtBQ0FOOztBREdFO0VBQ0UsbUJBQUE7RUFFQSxzREFBQTtFQUFBLDhDQUFBO0VBQ0EseUNBQUE7VUFBQSxpQ0FBQTtFQUNBLHFGQUFBO1VBQUEsNkVBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0EsNEJBQUE7RUFDQSwyQkFBQTtBQ0ZKOztBREdJO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0tBQUEsaUJBQUE7RUFDQSxXQUFBO0FDRE47O0FER0k7OztFQUdFLGFBQUE7RUFDQSw2Q0FBQTtFQUFBLHFDQUFBO0VBQ0EsVUFBQTtBQ0ROOztBRElJO0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0FDRk47O0FER007RUFDRSxXQUFBO0FDRFI7O0FER007RUFDRSxjQUFBO0VBQ0EsaUJBQUE7QUNEUjs7QURHTTtFQUNFLGVBQUE7QUNEUjs7QURHTTtFQUNFLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FDRFI7O0FESUk7RUFDRSx5QkFBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLHNCQUFBO0VBQ0EsZ0JBQUE7RUFDQSwrQkFBQTtBQ0ZOOztBRElJO0VBQ0UsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EseUNBQUE7QUNGTjs7QURLSTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSx5REFBQTtFQUFBLGlEQUFBO0VBQ0EsNERBQUE7VUFBQSxvREFBQTtFQUNBLHlDQUFBO1VBQUEsaUNBQUE7RUFDQSx5Q0FBQTtBQ0hOOztBRE9FO0VBQ0UsZ0RBQUE7RUFBQSx3Q0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQ0xKOztBRFNJO0VBQ0Usa0JBQUE7QUNQTjs7QURRTTs7O0VBR0Usb0JBQUE7RUFDQSxxQkFBQTtBQ05SOztBRFNRO0VBQ0Usb0JBQUE7QUNQVjs7QURTUTtFQUNFLFVBQUE7RUFDQSxhQUFBO0VBQ0EsVUFBQTtBQ1BWOztBRFlJO0VBQ0UscUJBQUE7QUNWTiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY2FyZC9jYXJkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICBkaXNwbGF5OiBibG9jaztcbiAgdHJhbnNpdGlvbjogd2lkdGggMC41cyBlYXNlLWluLW91dDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgYm9yZGVyLXJhZGl1czogMTZweDtcbn1cblxuLmNvbnRhaW5lciB7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIC8vIG1pbi1oZWlnaHQ6IDEwMHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIC5jbG9zZS1idXR0b24ge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDFyZW07XG4gICAgcmlnaHQ6IDFyZW07XG4gICAgei1pbmRleDogMTtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMik7XG4gICAgYm9yZGVyLXJhZGl1czogMTAwZW07XG4gICAgd2lkdGg6IDJyZW07XG4gICAgaGVpZ2h0OiAycmVtO1xuXG4gICAgLmxpbmUtMSxcbiAgICAubGluZS0yIHtcbiAgICAgICRzaXplOiAxLjNyZW07XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICB0b3A6IDAuOTVyZW07XG4gICAgICBsZWZ0OiAwLjM1cmVtO1xuICAgICAgd2lkdGg6ICRzaXplO1xuICAgICAgaGVpZ2h0OiAkc2l6ZTtcbiAgICAgIGJvcmRlci10b3A6IDJweCBzb2xpZCAjZWVlO1xuICAgICAgdHJhbnNmb3JtLW9yaWdpbjogNTElIDUlO1xuICAgIH1cbiAgICAubGluZS0xIHtcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcbiAgICB9XG4gICAgLmxpbmUtMiB7XG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xuICAgIH1cbiAgfVxuICAuaGVhZGVyIHtcbiAgICBib3JkZXItcmFkaXVzOiAxNnB4O1xuXG4gICAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogYm9yZGVyLXJhZGl1cywgbWluLWhlaWdodDtcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAxNTBtcywgNjAwbXM7XG4gICAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW4tb3V0LCBjdWJpYy1iZXppZXIoLjEzLC4yOSwuMTEsMS4zOCk7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgLmJhbm5lci12aWRlbyB7XG4gICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xuICAgICAgei1pbmRleDogLTE7XG4gICAgfVxuICAgIC5jYXRlZ29yeSxcbiAgICAudGl0bGUsXG4gICAgLnN1YnRpdGxlIHtcbiAgICAgIHBhZGRpbmc6IDFyZW07XG4gICAgICB0cmFuc2l0aW9uOiBwYWRkaW5nIDIwMG1zIGVhc2UtaW4tb3V0O1xuICAgICAgb3BhY2l0eTogMTtcbiAgICB9XG5cbiAgICAuYmFubmVye1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgYm90dG9tOiAwO1xuICAgICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIC5jYXRlZ29yeXtcbiAgICAgICAgY29sb3I6IGdyZXk7XG4gICAgICB9XG4gICAgICAudGl0bGUsLnN1YnRpdGxle1xuICAgICAgICBjb2xvcjogaW5pdGlhbDtcbiAgICAgICAgdGV4dC1zaGFkb3c6IG5vbmU7XG4gICAgICB9XG4gICAgICAudGl0bGV7XG4gICAgICAgIHBhZGRpbmc6IDAgMXJlbTtcbiAgICAgIH1cbiAgICAgIC5zdWJ0aXRsZXtcbiAgICAgICAgcG9zaXRpb246IGluaXRpYWw7XG4gICAgICAgIGZvbnQtc2l6ZTogMC45cmVtO1xuICAgICAgICBwYWRkaW5nLXRvcDogMC41cmVtO1xuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgfVxuICAgIH1cbiAgICAuY2F0ZWdvcnkge1xuICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgIGZvbnQtc2l6ZTogMC44cmVtO1xuICAgICAgY29sb3I6IGdyZXk7XG4gICAgICBwYWRkaW5nLWJvdHRvbTogMC4zcmVtO1xuICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgIGNvbG9yOiByZ2JhKDI1NSwyNTUsMjU1LDAuNSk7XG4gICAgfVxuICAgIC50aXRsZSB7XG4gICAgICBwYWRkaW5nLXRvcDogMDtcbiAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgIHRleHQtc2hhZG93OiAwcHggMCA1cHggcmdiYSgwLCAwLCAwLCAwLjMpO1xuICAgIH1cblxuICAgIC5zdWJ0aXRsZSB7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICBmb250LXdlaWdodDogMzAwO1xuICAgICAgYm90dG9tOiAwO1xuICAgICAgcmlnaHQ6IDA7XG4gICAgICB0ZXh0LWFsaWduOiBlbmQ7XG4gICAgICBjb2xvcjogd2hpdGU7XG4gICAgICBtYXgtaGVpZ2h0OiAxMDAwcHg7XG4gICAgICB0cmFuc2l0aW9uLXByb3BlcnR5OiBvcGFjaXR5LCBtYXgtaGVpZ2h0LCBwYWRkaW5nO1xuICAgICAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW4tb3V0LCBlYXNlLWluLW91dDtcbiAgICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDMwMG1zLCAyMDBtcztcbiAgICAgIHRleHQtc2hhZG93OiAwcHggMCA1cHggcmdiYSgwLCAwLCAwLCAwLjMpO1xuICAgIH1cbiAgICAvLyAtd2Via2l0LW1hc2staW1hZ2U6IC13ZWJraXQtcmFkaWFsLWdyYWRpZW50KHdoaXRlLCBibGFjayk7XG4gIH1cbiAgLmNvbnRlbnQge1xuICAgIHRyYW5zaXRpb246IG1heC1oZWlnaHQgNDAwbXMgZWFzZS1pbi1vdXQ7XG4gICAgbWF4LWhlaWdodDogMHB4O1xuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICB9XG5cbiAgJi5leHBhbmRlZCB7XG4gICAgLmhlYWRlciB7XG4gICAgICBib3JkZXItcmFkaXVzOiAwcHg7XG4gICAgICAuY2F0ZWdvcnksXG4gICAgICAudGl0bGUsXG4gICAgICAuc3VidGl0bGUge1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDAuN3JlbTtcbiAgICAgICAgcGFkZGluZy1yaWdodDogMC43cmVtO1xuICAgICAgfVxuICAgICAgLmJhbm5lcntcbiAgICAgICAgLmNhdGVnb3J5LCAudGl0bGV7XG4gICAgICAgICAgcGFkZGluZy1sZWZ0OiAxLjVyZW07XG4gICAgICAgIH1cbiAgICAgICAgLnN1YnRpdGxle1xuICAgICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgICAgbWF4LWhlaWdodDogMDtcbiAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICAvLyBtaW4taGVpZ2h0OiAxNTBweDtcbiAgICB9XG4gICAgLmNvbnRlbnQge1xuICAgICAgbWF4LWhlaWdodDogMTAwMDAwMHB4O1xuICAgIH1cbiAgfVxufVxuIiwiOmhvc3Qge1xuICBkaXNwbGF5OiBibG9jaztcbiAgdHJhbnNpdGlvbjogd2lkdGggMC41cyBlYXNlLWluLW91dDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgYm9yZGVyLXJhZGl1czogMTZweDtcbn1cblxuLmNvbnRhaW5lciB7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5jb250YWluZXIgLmNsb3NlLWJ1dHRvbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAxcmVtO1xuICByaWdodDogMXJlbTtcbiAgei1pbmRleDogMTtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjIpO1xuICBib3JkZXItcmFkaXVzOiAxMDBlbTtcbiAgd2lkdGg6IDJyZW07XG4gIGhlaWdodDogMnJlbTtcbn1cbi5jb250YWluZXIgLmNsb3NlLWJ1dHRvbiAubGluZS0xLFxuLmNvbnRhaW5lciAuY2xvc2UtYnV0dG9uIC5saW5lLTIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMC45NXJlbTtcbiAgbGVmdDogMC4zNXJlbTtcbiAgd2lkdGg6IDEuM3JlbTtcbiAgaGVpZ2h0OiAxLjNyZW07XG4gIGJvcmRlci10b3A6IDJweCBzb2xpZCAjZWVlO1xuICB0cmFuc2Zvcm0tb3JpZ2luOiA1MSUgNSU7XG59XG4uY29udGFpbmVyIC5jbG9zZS1idXR0b24gLmxpbmUtMSB7XG4gIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcbn1cbi5jb250YWluZXIgLmNsb3NlLWJ1dHRvbiAubGluZS0yIHtcbiAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcbn1cbi5jb250YWluZXIgLmhlYWRlciB7XG4gIGJvcmRlci1yYWRpdXM6IDE2cHg7XG4gIHRyYW5zaXRpb24tcHJvcGVydHk6IGJvcmRlci1yYWRpdXMsIG1pbi1oZWlnaHQ7XG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDE1MG1zLCA2MDBtcztcbiAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW4tb3V0LCBjdWJpYy1iZXppZXIoMC4xMywgMC4yOSwgMC4xMSwgMS4zOCk7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xufVxuLmNvbnRhaW5lciAuaGVhZGVyIC5iYW5uZXItdmlkZW8ge1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xuICB6LWluZGV4OiAtMTtcbn1cbi5jb250YWluZXIgLmhlYWRlciAuY2F0ZWdvcnksXG4uY29udGFpbmVyIC5oZWFkZXIgLnRpdGxlLFxuLmNvbnRhaW5lciAuaGVhZGVyIC5zdWJ0aXRsZSB7XG4gIHBhZGRpbmc6IDFyZW07XG4gIHRyYW5zaXRpb246IHBhZGRpbmcgMjAwbXMgZWFzZS1pbi1vdXQ7XG4gIG9wYWNpdHk6IDE7XG59XG4uY29udGFpbmVyIC5oZWFkZXIgLmJhbm5lciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAwO1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgd2lkdGg6IDEwMCU7XG59XG4uY29udGFpbmVyIC5oZWFkZXIgLmJhbm5lciAuY2F0ZWdvcnkge1xuICBjb2xvcjogZ3JleTtcbn1cbi5jb250YWluZXIgLmhlYWRlciAuYmFubmVyIC50aXRsZSwgLmNvbnRhaW5lciAuaGVhZGVyIC5iYW5uZXIgLnN1YnRpdGxlIHtcbiAgY29sb3I6IGluaXRpYWw7XG4gIHRleHQtc2hhZG93OiBub25lO1xufVxuLmNvbnRhaW5lciAuaGVhZGVyIC5iYW5uZXIgLnRpdGxlIHtcbiAgcGFkZGluZzogMCAxcmVtO1xufVxuLmNvbnRhaW5lciAuaGVhZGVyIC5iYW5uZXIgLnN1YnRpdGxlIHtcbiAgcG9zaXRpb246IGluaXRpYWw7XG4gIGZvbnQtc2l6ZTogMC45cmVtO1xuICBwYWRkaW5nLXRvcDogMC41cmVtO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuLmNvbnRhaW5lciAuaGVhZGVyIC5jYXRlZ29yeSB7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGZvbnQtc2l6ZTogMC44cmVtO1xuICBjb2xvcjogZ3JleTtcbiAgcGFkZGluZy1ib3R0b206IDAuM3JlbTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KTtcbn1cbi5jb250YWluZXIgLmhlYWRlciAudGl0bGUge1xuICBwYWRkaW5nLXRvcDogMDtcbiAgZm9udC1zaXplOiAxLjVyZW07XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgdGV4dC1zaGFkb3c6IDBweCAwIDVweCByZ2JhKDAsIDAsIDAsIDAuMyk7XG59XG4uY29udGFpbmVyIC5oZWFkZXIgLnN1YnRpdGxlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBmb250LXdlaWdodDogMzAwO1xuICBib3R0b206IDA7XG4gIHJpZ2h0OiAwO1xuICB0ZXh0LWFsaWduOiBlbmQ7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgbWF4LWhlaWdodDogMTAwMHB4O1xuICB0cmFuc2l0aW9uLXByb3BlcnR5OiBvcGFjaXR5LCBtYXgtaGVpZ2h0LCBwYWRkaW5nO1xuICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbi1vdXQsIGVhc2UtaW4tb3V0O1xuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAzMDBtcywgMjAwbXM7XG4gIHRleHQtc2hhZG93OiAwcHggMCA1cHggcmdiYSgwLCAwLCAwLCAwLjMpO1xufVxuLmNvbnRhaW5lciAuY29udGVudCB7XG4gIHRyYW5zaXRpb246IG1heC1oZWlnaHQgNDAwbXMgZWFzZS1pbi1vdXQ7XG4gIG1heC1oZWlnaHQ6IDBweDtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG59XG4uY29udGFpbmVyLmV4cGFuZGVkIC5oZWFkZXIge1xuICBib3JkZXItcmFkaXVzOiAwcHg7XG59XG4uY29udGFpbmVyLmV4cGFuZGVkIC5oZWFkZXIgLmNhdGVnb3J5LFxuLmNvbnRhaW5lci5leHBhbmRlZCAuaGVhZGVyIC50aXRsZSxcbi5jb250YWluZXIuZXhwYW5kZWQgLmhlYWRlciAuc3VidGl0bGUge1xuICBwYWRkaW5nLWxlZnQ6IDAuN3JlbTtcbiAgcGFkZGluZy1yaWdodDogMC43cmVtO1xufVxuLmNvbnRhaW5lci5leHBhbmRlZCAuaGVhZGVyIC5iYW5uZXIgLmNhdGVnb3J5LCAuY29udGFpbmVyLmV4cGFuZGVkIC5oZWFkZXIgLmJhbm5lciAudGl0bGUge1xuICBwYWRkaW5nLWxlZnQ6IDEuNXJlbTtcbn1cbi5jb250YWluZXIuZXhwYW5kZWQgLmhlYWRlciAuYmFubmVyIC5zdWJ0aXRsZSB7XG4gIG9wYWNpdHk6IDA7XG4gIG1heC1oZWlnaHQ6IDA7XG4gIHBhZGRpbmc6IDA7XG59XG4uY29udGFpbmVyLmV4cGFuZGVkIC5jb250ZW50IHtcbiAgbWF4LWhlaWdodDogMTAwMDAwMHB4O1xufSJdfQ== */"], data: { animation: [
                _animations_animations__WEBPACK_IMPORTED_MODULE_1__["smoothHeight"]
            ] } });
    return CardComponent;
}());

/*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-card',
                templateUrl: './card.component.html',
                styleUrls: ['./card.component.scss'],
                animations: [
                    _animations_animations__WEBPACK_IMPORTED_MODULE_1__["smoothHeight"]
                ]
            }]
    }], function () { return [{ type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }]; }, { title: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], subtitle: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], category: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], cardHeight: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], showBanner: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], expanded: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], bgImage: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], canClose: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], close: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] });


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");


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
    SmoothHeightAnimDirective.ngDirectiveDef = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: SmoothHeightAnimDirective, selectors: [["", "smoothHeight", ""]], factory: function SmoothHeightAnimDirective_Factory(t) { return new (t || SmoothHeightAnimDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])); }, hostBindings: function SmoothHeightAnimDirective_HostBindings(rf, ctx, elIndex) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵallocHostVars"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyling"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵupdateSyntheticHostBinding"]("@grow", ctx.grow);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("display", "block");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("overflow", "hidden");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstylingApply"]();
        } }, inputs: { smoothHeight: "smoothHeight" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]()] });
    return SmoothHeightAnimDirective;
}());

/*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SmoothHeightAnimDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: '[smoothHeight]',
                host: { '[style.display]': '"block"', '[style.overflow]': '"hidden"' }
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }]; }, { smoothHeight: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], grow: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['@grow']
        }] });


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm5/platform-browser.js");





var WindowService = /** @class */ (function () {
    function WindowService(eventManager) {
        var _this = this;
        this.eventManager = eventManager;
        this.window = window;
        this.resizeSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
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
    WindowService.ngInjectableDef = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: WindowService, factory: function WindowService_Factory(t) { return new (t || WindowService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["EventManager"])); }, providedIn: 'root' });
    return WindowService;
}());

/*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WindowService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["EventManager"] }]; }, null);
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm5/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
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