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
        } }, directives: [_components_card_container_card_container_component__WEBPACK_IMPORTED_MODULE_1__["CardContainerComponent"]], styles: ["[_nghost-%COMP%] {\n  font-family: -apple-system, BlinkMacSystemFont, sans-serif;\n  --body-bg-color: white;\n  --header-color: black;\n  --header-subtitle-color: grey;\n  --header-border-color: #eee;\n  --content-bg-color: white;\n  --content-text-color: #888;\n  --card-title-color: white;\n  --card-subtitle-color: white;\n  --card-banner-color: black;\n  --card-banner-category-color: grey;\n  --card-summary-bg-color: #0001;\n  --chip-color: #007aff;\n  --card-screenshot-banner-color: var(--content-text-color);\n  --card-screenshot-banner-bg-color: #0001;\n  --card-summary-title-color: black;\n  --card-category-color: rgba(255,255,255,0.5);\n}\n\napp-card-container[_ngcontent-%COMP%] {\n  height: 100vh;\n  width: 100vw;\n}\n\n@media (prefers-color-scheme: dark) {\n  [_nghost-%COMP%] {\n    --body-bg-color: black;\n    --header-color: white;\n    --header-subtitle-color: var(--card-category-color);\n    --header-border-color: #333;\n    --content-bg-color: rgb(28,28,30);\n    --card-summary-title-color: white;\n    --card-summary-bg-color: rgb(72,72,74);\n    --card-banner-color: white;\n    --card-banner-category-color: var(--card-category-color);\n    --card-screenshot-banner-bg-color: rgb(58,58,60);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qYWNrZ2FsbGFnaGVyL0RldmVsb3BtZW50L2FwcC1zdG9yZS9zcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0ksMERBQUE7RUFDQSxzQkFBQTtFQUNBLHFCQUFBO0VBQ0EsNkJBQUE7RUFDQSwyQkFBQTtFQUNBLHlCQUFBO0VBQ0EsMEJBQUE7RUFDQSx5QkFBQTtFQUNBLDRCQUFBO0VBQ0EsMEJBQUE7RUFDQSxrQ0FBQTtFQUNBLDhCQUFBO0VBQ0EscUJBQUE7RUFDQSx5REFBQTtFQUNBLHdDQUFBO0VBQ0EsaUNBQUE7RUFDQSw0Q0FBQTtBQ0RKOztBREdBO0VBQ0ksYUFBQTtFQUNBLFlBQUE7QUNBSjs7QURFQTtFQUNJO0lBQ0ksc0JBQUE7SUFDQSxxQkFBQTtJQUNBLG1EQUFBO0lBQ0EsMkJBQUE7SUFDQSxpQ0FBQTtJQUlBLGlDQUFBO0lBQ0Esc0NBQUE7SUFDQSwwQkFBQTtJQUNBLHdEQUFBO0lBQ0EsZ0RBQUE7RUNGTjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJGFwcGxlLWJsdWU6ICMwMDdhZmY7XG4kZ3JleTogIzAwMDE7XG46aG9zdHtcbiAgICBmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBzYW5zLXNlcmlmO1xuICAgIC0tYm9keS1iZy1jb2xvcjogd2hpdGU7XG4gICAgLS1oZWFkZXItY29sb3I6IGJsYWNrO1xuICAgIC0taGVhZGVyLXN1YnRpdGxlLWNvbG9yOiBncmV5O1xuICAgIC0taGVhZGVyLWJvcmRlci1jb2xvcjogI2VlZTtcbiAgICAtLWNvbnRlbnQtYmctY29sb3I6IHdoaXRlO1xuICAgIC0tY29udGVudC10ZXh0LWNvbG9yOiAjODg4O1xuICAgIC0tY2FyZC10aXRsZS1jb2xvcjogd2hpdGU7XG4gICAgLS1jYXJkLXN1YnRpdGxlLWNvbG9yOiB3aGl0ZTtcbiAgICAtLWNhcmQtYmFubmVyLWNvbG9yOiBibGFjaztcbiAgICAtLWNhcmQtYmFubmVyLWNhdGVnb3J5LWNvbG9yOiBncmV5O1xuICAgIC0tY2FyZC1zdW1tYXJ5LWJnLWNvbG9yOiAjeyRncmV5fTtcbiAgICAtLWNoaXAtY29sb3I6ICN7JGFwcGxlLWJsdWV9O1xuICAgIC0tY2FyZC1zY3JlZW5zaG90LWJhbm5lci1jb2xvcjogdmFyKC0tY29udGVudC10ZXh0LWNvbG9yKTtcbiAgICAtLWNhcmQtc2NyZWVuc2hvdC1iYW5uZXItYmctY29sb3I6ICMwMDAxO1xuICAgIC0tY2FyZC1zdW1tYXJ5LXRpdGxlLWNvbG9yOiBibGFjaztcbiAgICAtLWNhcmQtY2F0ZWdvcnktY29sb3I6IHJnYmEoMjU1LDI1NSwyNTUsMC41KTtcbn1cbmFwcC1jYXJkLWNvbnRhaW5lcntcbiAgICBoZWlnaHQ6IDEwMHZoO1xuICAgIHdpZHRoOiAxMDB2dztcbn1cbkBtZWRpYSAocHJlZmVycy1jb2xvci1zY2hlbWU6IGRhcmspIHtcbiAgICA6aG9zdHtcbiAgICAgICAgLS1ib2R5LWJnLWNvbG9yOiBibGFjaztcbiAgICAgICAgLS1oZWFkZXItY29sb3I6IHdoaXRlO1xuICAgICAgICAtLWhlYWRlci1zdWJ0aXRsZS1jb2xvcjogdmFyKC0tY2FyZC1jYXRlZ29yeS1jb2xvcik7XG4gICAgICAgIC0taGVhZGVyLWJvcmRlci1jb2xvcjogIzMzMztcbiAgICAgICAgLS1jb250ZW50LWJnLWNvbG9yOiByZ2IoMjgsMjgsMzApO1xuICAgICAgICAvLyAtLWNvbnRlbnQtdGV4dC1jb2xvcjogd2hpdGU7XG4gICAgICAgIC8vIC0tY2FyZC10aXRsZS1jb2xvcjogd2hpdGU7XG4gICAgICAgIC8vIC0tY2FyZC1zdWJ0aXRsZS1jb2xvcjogd2hpdGU7XG4gICAgICAgIC0tY2FyZC1zdW1tYXJ5LXRpdGxlLWNvbG9yOiB3aGl0ZTtcbiAgICAgICAgLS1jYXJkLXN1bW1hcnktYmctY29sb3I6IHJnYig3Miw3Miw3NCk7XG4gICAgICAgIC0tY2FyZC1iYW5uZXItY29sb3I6IHdoaXRlO1xuICAgICAgICAtLWNhcmQtYmFubmVyLWNhdGVnb3J5LWNvbG9yOiB2YXIoLS1jYXJkLWNhdGVnb3J5LWNvbG9yKTtcbiAgICAgICAgLS1jYXJkLXNjcmVlbnNob3QtYmFubmVyLWJnLWNvbG9yOiByZ2IoNTgsNTgsNjApO1xuICAgICAgICBcbiAgICB9XG4gICBcbn0iLCI6aG9zdCB7XG4gIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIHNhbnMtc2VyaWY7XG4gIC0tYm9keS1iZy1jb2xvcjogd2hpdGU7XG4gIC0taGVhZGVyLWNvbG9yOiBibGFjaztcbiAgLS1oZWFkZXItc3VidGl0bGUtY29sb3I6IGdyZXk7XG4gIC0taGVhZGVyLWJvcmRlci1jb2xvcjogI2VlZTtcbiAgLS1jb250ZW50LWJnLWNvbG9yOiB3aGl0ZTtcbiAgLS1jb250ZW50LXRleHQtY29sb3I6ICM4ODg7XG4gIC0tY2FyZC10aXRsZS1jb2xvcjogd2hpdGU7XG4gIC0tY2FyZC1zdWJ0aXRsZS1jb2xvcjogd2hpdGU7XG4gIC0tY2FyZC1iYW5uZXItY29sb3I6IGJsYWNrO1xuICAtLWNhcmQtYmFubmVyLWNhdGVnb3J5LWNvbG9yOiBncmV5O1xuICAtLWNhcmQtc3VtbWFyeS1iZy1jb2xvcjogIzAwMDE7XG4gIC0tY2hpcC1jb2xvcjogIzAwN2FmZjtcbiAgLS1jYXJkLXNjcmVlbnNob3QtYmFubmVyLWNvbG9yOiB2YXIoLS1jb250ZW50LXRleHQtY29sb3IpO1xuICAtLWNhcmQtc2NyZWVuc2hvdC1iYW5uZXItYmctY29sb3I6ICMwMDAxO1xuICAtLWNhcmQtc3VtbWFyeS10aXRsZS1jb2xvcjogYmxhY2s7XG4gIC0tY2FyZC1jYXRlZ29yeS1jb2xvcjogcmdiYSgyNTUsMjU1LDI1NSwwLjUpO1xufVxuXG5hcHAtY2FyZC1jb250YWluZXIge1xuICBoZWlnaHQ6IDEwMHZoO1xuICB3aWR0aDogMTAwdnc7XG59XG5cbkBtZWRpYSAocHJlZmVycy1jb2xvci1zY2hlbWU6IGRhcmspIHtcbiAgOmhvc3Qge1xuICAgIC0tYm9keS1iZy1jb2xvcjogYmxhY2s7XG4gICAgLS1oZWFkZXItY29sb3I6IHdoaXRlO1xuICAgIC0taGVhZGVyLXN1YnRpdGxlLWNvbG9yOiB2YXIoLS1jYXJkLWNhdGVnb3J5LWNvbG9yKTtcbiAgICAtLWhlYWRlci1ib3JkZXItY29sb3I6ICMzMzM7XG4gICAgLS1jb250ZW50LWJnLWNvbG9yOiByZ2IoMjgsMjgsMzApO1xuICAgIC0tY2FyZC1zdW1tYXJ5LXRpdGxlLWNvbG9yOiB3aGl0ZTtcbiAgICAtLWNhcmQtc3VtbWFyeS1iZy1jb2xvcjogcmdiKDcyLDcyLDc0KTtcbiAgICAtLWNhcmQtYmFubmVyLWNvbG9yOiB3aGl0ZTtcbiAgICAtLWNhcmQtYmFubmVyLWNhdGVnb3J5LWNvbG9yOiB2YXIoLS1jYXJkLWNhdGVnb3J5LWNvbG9yKTtcbiAgICAtLWNhcmQtc2NyZWVuc2hvdC1iYW5uZXItYmctY29sb3I6IHJnYig1OCw1OCw2MCk7XG4gIH1cbn0iXX0= */"] });
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
var _c4 = [1, "subtitle"];
var _c5 = [1, "header-title"];
var _c6 = [1, "profile"];
var _c7 = ["href", "mailto:jackgllghr@gmail.com?subject=I Want To Hire You!"];
var _c8 = ["src", "assets/img/me.jpg"];
var _c9 = [3, "ngStyle", "category", "title", "subtitle", "bgImage", "cardType", "cardHeight", "expanded", "focused", "canClose", "click", "close", 4, "ngFor", "ngForOf"];
var _c10 = [1, "backdrop", 3, "ngStyle", "click"];
var _c11 = [1, "footer", 3, "ngStyle"];
var _c12 = [3, "ngStyle", "category", "title", "subtitle", "bgImage", "cardType", "cardHeight", "expanded", "canClose", "click", "close"];
var _c13 = [1, "card-content"];
var _c14 = [4, "ngFor", "ngForOf"];
var _c15 = ["class", "body-text-container", 3, "innerHtml", 4, "ngIf"];
var _c16 = ["class", "body-image-container", 4, "ngIf"];
var _c17 = ["class", "body-screenshot-container", 4, "ngIf"];
var _c18 = ["class", "body-video-container", 4, "ngIf"];
var _c19 = ["class", "body-summary-container", 4, "ngIf"];
var _c20 = [1, "body-text-container", 3, "innerHtml"];
function CardContainerComponent_app_card_11_ng_container_2_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", _c20);
} if (rf & 2) {
    var item_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHtml", item_r11.content, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
} }
var _c21 = [1, "body-image-container"];
var _c22 = [1, "image"];
var _c23 = [3, "src"];
var _c24 = ["class", "banner", 4, "ngIf"];
var _c25 = [1, "banner"];
function CardContainerComponent_app_card_11_ng_container_2_div_2_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", _c25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var item_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵselect"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r11.content, " ");
} }
function CardContainerComponent_app_card_11_ng_container_2_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", _c21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", _c22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", _c23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, CardContainerComponent_app_card_11_ng_container_2_div_2_div_3_Template, 2, 1, "div", _c24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var item_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵselect"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", item_r11.sourceUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵselect"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r11.content != "");
} }
var _c26 = [1, "body-screenshot-container"];
var _c27 = [1, "screenshot"];
var _c28 = [3, "src", 4, "ngIf"];
var _c29 = ["autoplay", "", "loop", "", "playsinline", "", "onloadedmetadata", "this.muted=true", "oncanplay", "this.play()", 3, "muted", 4, "ngIf"];
function CardContainerComponent_app_card_11_ng_container_2_div_3_img_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", _c23);
} if (rf & 2) {
    var item_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", item_r11.sourceUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
var _c30 = ["autoplay", "", "loop", "", "playsinline", "", "onloadedmetadata", "this.muted=true", "oncanplay", "this.play()", 3, "muted"];
var _c31 = ["type", "video/mp4", 3, "src"];
function CardContainerComponent_app_card_11_ng_container_2_div_3_video_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "video", _c30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "source", _c31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var item_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    var ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("muted", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵselect"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r23.getSafeVideoUrl(item_r11.sourceUrl), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function CardContainerComponent_app_card_11_ng_container_2_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", _c26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", _c27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CardContainerComponent_app_card_11_ng_container_2_div_3_img_2_Template, 1, 1, "img", _c28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, CardContainerComponent_app_card_11_ng_container_2_div_3_video_3_Template, 2, 2, "video", _c29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", _c25);
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
var _c32 = [1, "body-video-container"];
var _c33 = ["controls", "", "allowfullscreen", "", 3, "poster", 4, "ngIf"];
var _c34 = ["controls", "", "allowfullscreen", "", 3, "poster"];
function CardContainerComponent_app_card_11_ng_container_2_div_4_video_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "video", _c34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "source", _c31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var item_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    var ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("poster", item_r11.bannerUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵselect"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r28.getSafeVideoUrl(item_r11.sourceUrl), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function CardContainerComponent_app_card_11_ng_container_2_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", _c32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CardContainerComponent_app_card_11_ng_container_2_div_4_video_1_Template, 2, 2, "video", _c33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var card_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵselect"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r15.isSelected(card_r8.id));
} }
var _c35 = ["width", "560", "height", "315", "frameborder", "0", "allow", "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture", "allowfullscreen", "", 3, "src", 4, "ngIf"];
var _c36 = ["width", "560", "height", "315", "frameborder", "0", "allow", "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture", "allowfullscreen", "", 3, "src"];
function CardContainerComponent_app_card_11_ng_container_2_div_5_iframe_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "iframe", _c36);
} if (rf & 2) {
    var item_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    var ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r31.getSafeVideoUrl(item_r11.sourceUrl), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeResourceUrl"]);
} }
function CardContainerComponent_app_card_11_ng_container_2_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", _c32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CardContainerComponent_app_card_11_ng_container_2_div_5_iframe_1_Template, 1, 1, "iframe", _c35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var card_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵselect"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r16.isSelected(card_r8.id));
} }
var _c37 = [1, "body-summary-container"];
var _c38 = [1, "icon", 3, "src"];
var _c39 = [1, "title"];
var _c40 = [1, "content"];
var _c41 = ["class", "link", 4, "ngIf"];
var _c42 = [1, "link"];
var _c43 = ["target", "_blank", 3, "href"];
function CardContainerComponent_app_card_11_ng_container_2_div_6_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", _c42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", _c43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "GET");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var card_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵselect"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", card_r8.link, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function CardContainerComponent_app_card_11_ng_container_2_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", _c37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", _c38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", _c39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", _c40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, CardContainerComponent_app_card_11_ng_container_2_div_6_div_6_Template, 3, 1, "div", _c41);
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
function CardContainerComponent_app_card_11_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CardContainerComponent_app_card_11_ng_container_2_div_1_Template, 1, 1, "div", _c15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CardContainerComponent_app_card_11_ng_container_2_div_2_Template, 4, 2, "div", _c16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, CardContainerComponent_app_card_11_ng_container_2_div_3_Template, 6, 3, "div", _c17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, CardContainerComponent_app_card_11_ng_container_2_div_4_Template, 2, 1, "div", _c18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, CardContainerComponent_app_card_11_ng_container_2_div_5_Template, 2, 1, "div", _c18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, CardContainerComponent_app_card_11_ng_container_2_div_6_Template, 7, 4, "div", _c19);
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
function CardContainerComponent_app_card_11_Template(rf, ctx) { if (rf & 1) {
    var _r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-card", _c12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyling"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CardContainerComponent_app_card_11_Template_app_card_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r38); var card_r8 = ctx.$implicit; var ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r37.selectCard(card_r8.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("close", function CardContainerComponent_app_card_11_Template_app_card_close_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r38); var ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r39.deselectCard(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", _c13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CardContainerComponent_app_card_11_ng_container_2_Template, 7, 6, "ng-container", _c14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var card_r8 = ctx.$implicit;
    var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("focused", ctx_r7.isSelected(card_r8.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstylingApply"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@focused", ctx_r7.isSelected(card_r8.id))("ngStyle", ctx_r7.getCardStyles(card_r8.id))("category", card_r8.category)("title", card_r8.title)("subtitle", card_r8.subtitle)("bgImage", card_r8.bannerUrl)("cardType", card_r8.cardType)("cardHeight", ctx_r7.isSelected(card_r8.id) ? ctx_r7.selectedCardHeaderHeight : ctx_r7.cardHeaderHeight)("expanded", ctx_r7.isSelected(card_r8.id))("canClose", ctx_r7.isMobile());
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
        window.analytics.page(this.cards.find(function (card) { return card.id == id; }).title);
        this.selectedId = id;
        this.calculatePositions();
    };
    CardContainerComponent.prototype.deselectCard = function () {
        window.analytics.track('Deselected Card');
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
    CardContainerComponent.prototype.getFooterPositionTop = function () {
        return "calc(" + this.getPositionTop(this.cards.length - 1) + " + " + this.cardHeaderHeight + ")";
    };
    CardContainerComponent.prototype.getFooterStyle = function () {
        return {
            top: this.getFooterPositionTop(),
            left: "0px",
        };
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
        } }, consts: 14, vars: 6, template: function CardContainerComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", _c1, _c2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyling"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", _c3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", _c4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "App Developer");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", _c5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h1");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Jack Gallagher");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", _c6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", _c7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "img", _c8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, CardContainerComponent_app_card_11_Template, 3, 12, "app-card", _c9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", _c10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyling"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CardContainerComponent_Template_div_click_12_listener($event) { return ctx.deselectCard(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "div", _c11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("focused", ctx.isFocused());
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstylingApply"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵselect"](11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.cards);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵselect"](12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("focused", ctx.isFocused());
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstylingApply"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@fadeInOut", ctx.isFocused())("ngStyle", ctx.backdropPosition);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵselect"](13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", ctx.getFooterStyle());
        } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgStyle"], _card_card_component__WEBPACK_IMPORTED_MODULE_6__["CardComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"]], styles: [".container[_ngcontent-%COMP%] {\n  width: 100vw;\n  height: 100vh;\n  overflow: scroll;\n  position: relative;\n  background: var(--body-bg-color);\n}\n.container[_ngcontent-%COMP%]::-webkit-scrollbar {\n  display: none;\n}\n.container[_ngcontent-%COMP%]:before {\n  content: \"\";\n  position: absolute;\n  display: block;\n  height: 100%;\n  width: 100%;\n  top: 0;\n  left: 0;\n  z-index: 998;\n  pointer-events: none;\n  -webkit-transition: z-index 0ms linear 800ms, -webkit-backdrop-filter 600ms linear;\n  transition: z-index 0ms linear 800ms, -webkit-backdrop-filter 600ms linear;\n  transition: z-index 0ms linear 800ms, backdrop-filter 600ms linear;\n  transition: z-index 0ms linear 800ms, backdrop-filter 600ms linear, -webkit-backdrop-filter 600ms linear;\n}\n.header[_ngcontent-%COMP%] {\n  color: var(--header-color);\n  margin: 1rem auto;\n  border-bottom: thin solid var(--header-border-color);\n  max-width: 930px;\n}\n.header[_ngcontent-%COMP%]   .subtitle[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  color: var(--header-subtitle-color);\n  text-transform: uppercase;\n  font-weight: 500;\n}\n.header[_ngcontent-%COMP%]   .header-title[_ngcontent-%COMP%] {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n}\n.header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin-bottom: 0.3rem;\n  margin-top: 0.2rem;\n}\n.header[_ngcontent-%COMP%]   .profile[_ngcontent-%COMP%] {\n  height: 2.5rem;\n  width: 2.5rem;\n  float: right;\n  border-radius: 1000em;\n  overflow: hidden;\n  margin: 0.2rem;\n  margin-right: 0;\n}\n.header[_ngcontent-%COMP%]   .profile[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  -o-object-fit: contain;\n     object-fit: contain;\n}\n.footer[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 100%;\n  height: 10rem;\n  margin-bottom: 3rem;\n}\napp-card[_ngcontent-%COMP%] {\n  position: absolute;\n  -webkit-transform: scale(1);\n          transform: scale(1);\n  -webkit-transition-property: top, left, width, margin-top, border-radius, max-height, -webkit-transform;\n  transition-property: top, left, width, margin-top, border-radius, max-height, -webkit-transform;\n  transition-property: top, left, width, margin-top, transform, border-radius, max-height;\n  transition-property: top, left, width, margin-top, transform, border-radius, max-height, -webkit-transform;\n  -webkit-transition-duration: 0.6s, 0.6s, 0.6s, 0.6s, 0.6s, 150ms, 400ms, 0.6s;\n          transition-duration: 0.6s, 0.6s, 0.6s, 0.6s, 0.6s, 150ms, 400ms, 0.6s;\n  -webkit-transition-timing-function: cubic-bezier(0.51, -0.07, 0, 1.4), cubic-bezier(0.51, -0.07, 0, 1.4), cubic-bezier(0.51, -0.07, 0, 1.4), cubic-bezier(0.51, -0.07, 0, 1.4), ease-in-out, cubic-bezier(0.51, -0.07, 0, 1.4), ease-in-out;\n          transition-timing-function: cubic-bezier(0.51, -0.07, 0, 1.4), cubic-bezier(0.51, -0.07, 0, 1.4), cubic-bezier(0.51, -0.07, 0, 1.4), cubic-bezier(0.51, -0.07, 0, 1.4), ease-in-out, cubic-bezier(0.51, -0.07, 0, 1.4), ease-in-out;\n  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);\n  overflow: hidden;\n}\napp-card[_ngcontent-%COMP%]:hover, app-card[_ngcontent-%COMP%]:active {\n  -webkit-transform: scale(0.97);\n          transform: scale(0.97);\n}\napp-card[_ngcontent-%COMP%]:last-of-type {\n  margin-bottom: 3rem;\n}\napp-card.focused[_ngcontent-%COMP%] {\n  margin-top: 0;\n  overflow: scroll;\n  -ms-scroll-chaining: none;\n      overscroll-behavior: none;\n  max-height: 100vh;\n  border-radius: 16px 16px 0 0;\n  -webkit-transform: scale(1);\n          transform: scale(1);\n}\napp-card.focused[_ngcontent-%COMP%]:hover, app-card.focused[_ngcontent-%COMP%]:active {\n  -webkit-transform: scale(1);\n          transform: scale(1);\n}\n@media only screen and (max-width: 600px) {\n  .header[_ngcontent-%COMP%] {\n    border-bottom: none;\n  }\n\n  app-card.focused[_ngcontent-%COMP%] {\n    border-radius: 0px;\n  }\n}\n@media only screen and (max-width: 1000px) {\n  .header[_ngcontent-%COMP%] {\n    margin: 1rem 1.25rem;\n  }\n}\n.backdrop[_ngcontent-%COMP%] {\n  position: absolute;\n  content: \"\";\n  z-index: 997;\n  -webkit-backdrop-filter: blur(20px);\n          backdrop-filter: blur(20px);\n  pointer-events: none;\n}\n.backdrop.focused[_ngcontent-%COMP%] {\n  pointer-events: all;\n}\n.card-content[_ngcontent-%COMP%] {\n  padding-top: 1.5rem;\n  padding-bottom: 6rem;\n}\n.body-screenshot-container[_ngcontent-%COMP%], .body-text-container[_ngcontent-%COMP%], .body-summary-container[_ngcontent-%COMP%] {\n  margin: 1.5rem;\n  margin-top: 2rem;\n  font-size: 1.3rem;\n  color: var(--content-text-color);\n  font-weight: 300;\n  line-height: 1.7rem;\n}\n.body-video-container[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.body-video-container[_ngcontent-%COMP%]   video[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.body-video-container[_ngcontent-%COMP%]   video[poster][_ngcontent-%COMP%] {\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n.body-video-container[_ngcontent-%COMP%]   iframe[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.body-image-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  -o-object-fit: contain;\n     object-fit: contain;\n  width: 100%;\n}\n.body-screenshot-container[_ngcontent-%COMP%]   .screenshot[_ngcontent-%COMP%] {\n  border: 1px solid var(--card-screenshot-banner-bg-color);\n  border-radius: 0.5rem;\n  overflow: hidden;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  max-width: -webkit-fit-content;\n  max-width: -moz-fit-content;\n  max-width: fit-content;\n  max-width: -webkit-fill-available;\n  margin: auto;\n  -webkit-mask-image: -webkit-radial-gradient(white, black);\n}\n.body-screenshot-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%], .body-screenshot-container[_ngcontent-%COMP%]   video[_ngcontent-%COMP%] {\n  width: 100%;\n  -o-object-fit: contain;\n     object-fit: contain;\n}\n.body-screenshot-container[_ngcontent-%COMP%]   .banner[_ngcontent-%COMP%] {\n  margin-top: -5px;\n  background: var(--card-screenshot-banner-bg-color);\n  padding: 1rem 1.5rem;\n  text-align: start;\n  font-size: 0.8em;\n  color: var(--card-screenshot-banner-color);\n}\n.body-summary-container[_ngcontent-%COMP%] {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-align: center;\n          align-items: center;\n  background: var(--card-summary-bg-color);\n  padding: 3rem;\n  margin: 1.5rem 0;\n}\n.body-summary-container[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  margin-bottom: 0.9rem;\n}\n.body-summary-container[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  color: var(--card-summary-title-color);\n  font-size: 1.8rem;\n}\n.body-summary-container[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n  font-weight: 400;\n  font-size: 1rem;\n}\n.body-summary-container[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  height: 64px;\n  width: 64px;\n  border-radius: 1rem;\n}\n.body-summary-container[_ngcontent-%COMP%]   .link[_ngcontent-%COMP%] {\n  border-radius: 100em;\n  background: var(--chip-color);\n  font-weight: bold;\n  padding: 0.5rem 1.5rem;\n  font-size: 1rem;\n}\n.body-summary-container[_ngcontent-%COMP%]   .link[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: white;\n  text-decoration: none;\n  text-transform: uppercase;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qYWNrZ2FsbGFnaGVyL0RldmVsb3BtZW50L2FwcC1zdG9yZS9zcmMvYXBwL2NvbXBvbmVudHMvY2FyZC1jb250YWluZXIvY2FyZC1jb250YWluZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvY2FyZC1jb250YWluZXIvY2FyZC1jb250YWluZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDSSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQ0FBQTtBQ0RKO0FERUk7RUFDSSxhQUFBO0FDQVI7QURFSTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0VBQ0Esa0ZBQUE7RUFBQSwwRUFBQTtFQUFBLGtFQUFBO0VBQUEsd0dBQUE7QUNBUjtBRE9BO0VBQ0ksMEJBQUE7RUFDQSxpQkFBQTtFQUNBLG9EQUFBO0VBQ0EsZ0JBQUE7QUNMSjtBRE1JO0VBQ0ksaUJBQUE7RUFDQSxtQ0FBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7QUNKUjtBRE1JO0VBQ0ksb0JBQUE7RUFBQSxhQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtFQUNBLHlCQUFBO1VBQUEsOEJBQUE7QUNKUjtBRE1JO0VBQ0kscUJBQUE7RUFDQSxrQkFBQTtBQ0pSO0FETUk7RUFFSSxjQURPO0VBRVAsYUFGTztFQUdQLFlBQUE7RUFDQSxxQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7QUNMUjtBRE1RO0VBQ0ksV0FBQTtFQUNBLHNCQUFBO0tBQUEsbUJBQUE7QUNKWjtBRFNBO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FDTko7QURTQTtFQUNJLGtCQUFBO0VBQ0EsMkJBQUE7VUFBQSxtQkFBQTtFQUdBLHVHQUFBO0VBQUEsK0ZBQUE7RUFBQSx1RkFBQTtFQUFBLDBHQUFBO0VBQ0EsNkVBQUE7VUFBQSxxRUFBQTtFQUNBLDJPQUFBO1VBQUEsbU9BQUE7RUFDQSx5Q0FBQTtFQUNBLGdCQUFBO0FDUko7QURTSTtFQUVJLDhCQUFBO1VBQUEsc0JBQUE7QUNSUjtBRFVJO0VBQ0ksbUJBQUE7QUNSUjtBRFlBO0VBQ0ksYUFBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7TUFBQSx5QkFBQTtFQUNBLGlCQUFBO0VBQ0EsNEJBQUE7RUFDQSwyQkFBQTtVQUFBLG1CQUFBO0FDVEo7QURVSTtFQUVJLDJCQUFBO1VBQUEsbUJBQUE7QUNUUjtBRGFBO0VBQ0k7SUFDSSxtQkFBQTtFQ1ZOOztFRFlFO0lBQ0ksa0JBQUE7RUNUTjtBQUNGO0FEWUE7RUFDSTtJQUNJLG9CQUFBO0VDVk47QUFDRjtBRGFBO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1DQUFBO1VBQUEsMkJBQUE7RUFDQSxvQkFBQTtBQ1hKO0FEWUk7RUFDSSxtQkFBQTtBQ1ZSO0FEY0E7RUFDSSxtQkFBQTtFQUNBLG9CQUFBO0FDWEo7QURjQTs7O0VBR0ksY0FBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQ0FBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUNYSjtBRGNBO0VBQ0ksV0FBQTtBQ1hKO0FEWUk7RUFDSSxXQUFBO0FDVlI7QURZSTtFQUNJLG9CQUFBO0tBQUEsaUJBQUE7QUNWUjtBRFlJO0VBQ0ksV0FBQTtBQ1ZSO0FEZUk7RUFDSSxzQkFBQTtLQUFBLG1CQUFBO0VBQ0EsV0FBQTtBQ1pSO0FEaUJJO0VBQ0ksd0RBQUE7RUFDQSxxQkFBQTtFQUNBLGdCQUFBO0VBQ0EsMEJBQUE7RUFBQSx1QkFBQTtFQUFBLGtCQUFBO0VBQ0EsOEJBQUE7RUFBQSwyQkFBQTtFQUFBLHNCQUFBO0VBQ0EsaUNBQUE7RUFDQSxZQUFBO0VBQ0EseURBQUE7QUNkUjtBRGdCSTs7RUFHSSxXQUFBO0VBQ0Esc0JBQUE7S0FBQSxtQkFBQTtBQ2ZSO0FEaUJJO0VBQ0ksZ0JBQUE7RUFDQSxrREFBQTtFQUNBLG9CQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLDBDQUFBO0FDZlI7QURtQkE7RUFDSSxvQkFBQTtFQUFBLGFBQUE7RUFDQSw0QkFBQTtFQUFBLDZCQUFBO1VBQUEsc0JBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0VBQ0Esd0NBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7QUNoQko7QURpQkk7RUFDSSxxQkFBQTtBQ2ZSO0FEaUJJO0VBQ0ksc0NBQUE7RUFDQSxpQkFBQTtBQ2ZSO0FEaUJJO0VBQ0ksZ0JBQUE7RUFDQSxlQUFBO0FDZlI7QURpQkk7RUFDSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0FDZlI7QURpQkk7RUFDSSxvQkFBQTtFQUNBLDZCQUFBO0VBQ0EsaUJBQUE7RUFDQSxzQkFBQTtFQUNBLGVBQUE7QUNmUjtBRGdCUTtFQUNJLFlBQUE7RUFDQSxxQkFBQTtFQUNBLHlCQUFBO0FDZFoiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2NhcmQtY29udGFpbmVyL2NhcmQtY29udGFpbmVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge31cblxuLmNvbnRhaW5lciB7XG4gICAgd2lkdGg6IDEwMHZ3O1xuICAgIGhlaWdodDogMTAwdmg7XG4gICAgb3ZlcmZsb3c6IHNjcm9sbDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgYmFja2dyb3VuZDogdmFyKC0tYm9keS1iZy1jb2xvcik7XG4gICAgJjo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cbiAgICAmOmJlZm9yZSB7XG4gICAgICAgIGNvbnRlbnQ6ICcnO1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICB0b3A6IDA7XG4gICAgICAgIGxlZnQ6IDA7XG4gICAgICAgIHotaW5kZXg6IDk5ODtcbiAgICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgICAgIHRyYW5zaXRpb246IHotaW5kZXggMG1zIGxpbmVhciA4MDBtcywgYmFja2Ryb3AtZmlsdGVyIDYwMG1zIGxpbmVhcjtcbiAgICB9XG4gICAgJi5mb2N1c2VkIHtcbiAgICAgICAgLy8gb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB9XG59XG5cbi5oZWFkZXIge1xuICAgIGNvbG9yOiB2YXIoLS1oZWFkZXItY29sb3IpO1xuICAgIG1hcmdpbjogMXJlbSBhdXRvO1xuICAgIGJvcmRlci1ib3R0b206IHRoaW4gc29saWQgdmFyKC0taGVhZGVyLWJvcmRlci1jb2xvcik7XG4gICAgbWF4LXdpZHRoOiA5MzBweDtcbiAgICAuc3VidGl0bGUge1xuICAgICAgICBmb250LXNpemU6IC44cmVtO1xuICAgICAgICBjb2xvcjogdmFyKC0taGVhZGVyLXN1YnRpdGxlLWNvbG9yKTtcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICB9XG4gICAgLmhlYWRlci10aXRsZSB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICB9XG4gICAgaDEge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAuM3JlbTtcbiAgICAgICAgbWFyZ2luLXRvcDogLjJyZW07XG4gICAgfVxuICAgIC5wcm9maWxlIHtcbiAgICAgICAgJHNpemU6IDIuNXJlbTtcbiAgICAgICAgaGVpZ2h0OiAkc2l6ZTtcbiAgICAgICAgd2lkdGg6ICRzaXplO1xuICAgICAgICBmbG9hdDogcmlnaHQ7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwMDBlbTtcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgbWFyZ2luOiAuMnJlbTtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAwO1xuICAgICAgICBpbWcge1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBvYmplY3QtZml0OiBjb250YWluO1xuICAgICAgICB9XG4gICAgfVxufVxuXG4uZm9vdGVyIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMHJlbTtcbiAgICBtYXJnaW4tYm90dG9tOiAzcmVtO1xufVxuXG5hcHAtY2FyZCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XG4gICAgJHRyYW5zbGF0ZUR1cmF0aW9uOiAuNnM7XG4gICAgJHRyYW5zbGF0ZVRpbWluZzogY3ViaWMtYmV6aWVyKC41MSwgLTAuMDcsIDAsIDEuNCk7XG4gICAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogdG9wLCBsZWZ0LCB3aWR0aCwgbWFyZ2luLXRvcCwgdHJhbnNmb3JtLCBib3JkZXItcmFkaXVzLCBtYXgtaGVpZ2h0O1xuICAgIHRyYW5zaXRpb24tZHVyYXRpb246ICR0cmFuc2xhdGVEdXJhdGlvbiwgJHRyYW5zbGF0ZUR1cmF0aW9uLCAkdHJhbnNsYXRlRHVyYXRpb24sICR0cmFuc2xhdGVEdXJhdGlvbiwgJHRyYW5zbGF0ZUR1cmF0aW9uLCAxNTBtcywgNDAwbXMsICR0cmFuc2xhdGVEdXJhdGlvbjtcbiAgICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogJHRyYW5zbGF0ZVRpbWluZywgJHRyYW5zbGF0ZVRpbWluZywgJHRyYW5zbGF0ZVRpbWluZywgJHRyYW5zbGF0ZVRpbWluZywgZWFzZS1pbi1vdXQsICR0cmFuc2xhdGVUaW1pbmcsIGVhc2UtaW4tb3V0O1xuICAgIGJveC1zaGFkb3c6IDAgNXB4IDE1cHggcmdiYSgwLCAwLCAwLCAwLjMpO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgJjpob3ZlcixcbiAgICAmOmFjdGl2ZSB7XG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMC45Nyk7XG4gICAgfVxuICAgICY6bGFzdC1vZi10eXBlIHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogM3JlbTtcbiAgICB9XG59XG5cbmFwcC1jYXJkLmZvY3VzZWQge1xuICAgIG1hcmdpbi10b3A6IDA7XG4gICAgb3ZlcmZsb3c6IHNjcm9sbDtcbiAgICBvdmVyc2Nyb2xsLWJlaGF2aW9yOiBub25lO1xuICAgIG1heC1oZWlnaHQ6IDEwMHZoO1xuICAgIGJvcmRlci1yYWRpdXM6IDE2cHggMTZweCAwIDA7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgICAmOmhvdmVyLFxuICAgICY6YWN0aXZlIHtcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgICB9XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgICAuaGVhZGVyIHtcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcbiAgICB9XG4gICAgYXBwLWNhcmQuZm9jdXNlZCB7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDBweDtcbiAgICB9XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAwMHB4KSB7XG4gICAgLmhlYWRlciB7XG4gICAgICAgIG1hcmdpbjogMXJlbSAxLjI1cmVtO1xuICAgIH1cbn1cblxuLmJhY2tkcm9wIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgY29udGVudDogJyc7XG4gICAgei1pbmRleDogOTk3O1xuICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cigyMHB4KTtcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICAmLmZvY3VzZWQge1xuICAgICAgICBwb2ludGVyLWV2ZW50czogYWxsO1xuICAgIH1cbn1cblxuLmNhcmQtY29udGVudCB7XG4gICAgcGFkZGluZy10b3A6IDEuNXJlbTtcbiAgICBwYWRkaW5nLWJvdHRvbTogNnJlbTtcbn1cblxuLmJvZHktc2NyZWVuc2hvdC1jb250YWluZXIsXG4uYm9keS10ZXh0LWNvbnRhaW5lcixcbi5ib2R5LXN1bW1hcnktY29udGFpbmVyIHtcbiAgICBtYXJnaW46IDEuNXJlbTtcbiAgICBtYXJnaW4tdG9wOiAycmVtO1xuICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xuICAgIGNvbG9yOiB2YXIoLS1jb250ZW50LXRleHQtY29sb3IpO1xuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgbGluZS1oZWlnaHQ6IDEuN3JlbTtcbn1cblxuLmJvZHktdmlkZW8tY29udGFpbmVyIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICB2aWRlbyB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cbiAgICB2aWRlb1twb3N0ZXJdIHtcbiAgICAgICAgb2JqZWN0LWZpdDogY292ZXI7XG4gICAgfVxuICAgIGlmcmFtZSB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cbn1cblxuLmJvZHktaW1hZ2UtY29udGFpbmVyIHtcbiAgICBpbWcge1xuICAgICAgICBvYmplY3QtZml0OiBjb250YWluO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICB9XG59XG5cbi5ib2R5LXNjcmVlbnNob3QtY29udGFpbmVyIHtcbiAgICAuc2NyZWVuc2hvdCB7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWNhcmQtc2NyZWVuc2hvdC1iYW5uZXItYmctY29sb3IpO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAuNXJlbTtcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgd2lkdGg6IGZpdC1jb250ZW50O1xuICAgICAgICBtYXgtd2lkdGg6IGZpdC1jb250ZW50O1xuICAgICAgICBtYXgtd2lkdGg6IC13ZWJraXQtZmlsbC1hdmFpbGFibGU7XG4gICAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgICAgLXdlYmtpdC1tYXNrLWltYWdlOiAtd2Via2l0LXJhZGlhbC1ncmFkaWVudCh3aGl0ZSwgYmxhY2spO1xuICAgIH1cbiAgICBpbWcsXG4gICAgdmlkZW8ge1xuICAgICAgICAvLyBpUGhvbmUgOCBzaXplIHNjcmVlbnNob3RzIG9ubHkgZm9yIHRoZSBtb21lbnRcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIG9iamVjdC1maXQ6IGNvbnRhaW47XG4gICAgfVxuICAgIC5iYW5uZXIge1xuICAgICAgICBtYXJnaW4tdG9wOiAtNXB4O1xuICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1jYXJkLXNjcmVlbnNob3QtYmFubmVyLWJnLWNvbG9yKTtcbiAgICAgICAgcGFkZGluZzogMXJlbSAxLjVyZW07XG4gICAgICAgIHRleHQtYWxpZ246IHN0YXJ0O1xuICAgICAgICBmb250LXNpemU6IC44ZW07XG4gICAgICAgIGNvbG9yOiB2YXIoLS1jYXJkLXNjcmVlbnNob3QtYmFubmVyLWNvbG9yKTtcbiAgICB9XG59XG5cbi5ib2R5LXN1bW1hcnktY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1jYXJkLXN1bW1hcnktYmctY29sb3IpO1xuICAgIHBhZGRpbmc6IDNyZW07XG4gICAgbWFyZ2luOiAxLjVyZW0gMDtcbiAgICA+KiB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IC45cmVtO1xuICAgIH1cbiAgICAudGl0bGUge1xuICAgICAgICBjb2xvcjogdmFyKC0tY2FyZC1zdW1tYXJ5LXRpdGxlLWNvbG9yKTtcbiAgICAgICAgZm9udC1zaXplOiAxLjhyZW07XG4gICAgfVxuICAgIC5jb250ZW50IHtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgICAgZm9udC1zaXplOiAxcmVtO1xuICAgIH1cbiAgICAuaWNvbiB7XG4gICAgICAgIGhlaWdodDogNjRweDtcbiAgICAgICAgd2lkdGg6IDY0cHg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDFyZW07XG4gICAgfVxuICAgIC5saW5rIHtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTAwZW07XG4gICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWNoaXAtY29sb3IpO1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgcGFkZGluZzogLjVyZW0gMS41cmVtO1xuICAgICAgICBmb250LXNpemU6IDFyZW07XG4gICAgICAgIGEge1xuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgfVxuICAgIH1cbn0iLCIuY29udGFpbmVyIHtcbiAgd2lkdGg6IDEwMHZ3O1xuICBoZWlnaHQ6IDEwMHZoO1xuICBvdmVyZmxvdzogc2Nyb2xsO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJhY2tncm91bmQ6IHZhcigtLWJvZHktYmctY29sb3IpO1xufVxuLmNvbnRhaW5lcjo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICBkaXNwbGF5OiBub25lO1xufVxuLmNvbnRhaW5lcjpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHotaW5kZXg6IDk5ODtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gIHRyYW5zaXRpb246IHotaW5kZXggMG1zIGxpbmVhciA4MDBtcywgYmFja2Ryb3AtZmlsdGVyIDYwMG1zIGxpbmVhcjtcbn1cbi5oZWFkZXIge1xuICBjb2xvcjogdmFyKC0taGVhZGVyLWNvbG9yKTtcbiAgbWFyZ2luOiAxcmVtIGF1dG87XG4gIGJvcmRlci1ib3R0b206IHRoaW4gc29saWQgdmFyKC0taGVhZGVyLWJvcmRlci1jb2xvcik7XG4gIG1heC13aWR0aDogOTMwcHg7XG59XG4uaGVhZGVyIC5zdWJ0aXRsZSB7XG4gIGZvbnQtc2l6ZTogMC44cmVtO1xuICBjb2xvcjogdmFyKC0taGVhZGVyLXN1YnRpdGxlLWNvbG9yKTtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cbi5oZWFkZXIgLmhlYWRlci10aXRsZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cbi5oZWFkZXIgaDEge1xuICBtYXJnaW4tYm90dG9tOiAwLjNyZW07XG4gIG1hcmdpbi10b3A6IDAuMnJlbTtcbn1cbi5oZWFkZXIgLnByb2ZpbGUge1xuICBoZWlnaHQ6IDIuNXJlbTtcbiAgd2lkdGg6IDIuNXJlbTtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBib3JkZXItcmFkaXVzOiAxMDAwZW07XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIG1hcmdpbjogMC4ycmVtO1xuICBtYXJnaW4tcmlnaHQ6IDA7XG59XG4uaGVhZGVyIC5wcm9maWxlIGltZyB7XG4gIHdpZHRoOiAxMDAlO1xuICBvYmplY3QtZml0OiBjb250YWluO1xufVxuXG4uZm9vdGVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMHJlbTtcbiAgbWFyZ2luLWJvdHRvbTogM3JlbTtcbn1cblxuYXBwLWNhcmQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRyYW5zZm9ybTogc2NhbGUoMSk7XG4gIHRyYW5zaXRpb24tcHJvcGVydHk6IHRvcCwgbGVmdCwgd2lkdGgsIG1hcmdpbi10b3AsIHRyYW5zZm9ybSwgYm9yZGVyLXJhZGl1cywgbWF4LWhlaWdodDtcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC42cywgMC42cywgMC42cywgMC42cywgMC42cywgMTUwbXMsIDQwMG1zLCAwLjZzO1xuICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuNTEsIC0wLjA3LCAwLCAxLjQpLCBjdWJpYy1iZXppZXIoMC41MSwgLTAuMDcsIDAsIDEuNCksIGN1YmljLWJlemllcigwLjUxLCAtMC4wNywgMCwgMS40KSwgY3ViaWMtYmV6aWVyKDAuNTEsIC0wLjA3LCAwLCAxLjQpLCBlYXNlLWluLW91dCwgY3ViaWMtYmV6aWVyKDAuNTEsIC0wLjA3LCAwLCAxLjQpLCBlYXNlLWluLW91dDtcbiAgYm94LXNoYWRvdzogMCA1cHggMTVweCByZ2JhKDAsIDAsIDAsIDAuMyk7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5hcHAtY2FyZDpob3ZlciwgYXBwLWNhcmQ6YWN0aXZlIHtcbiAgdHJhbnNmb3JtOiBzY2FsZSgwLjk3KTtcbn1cbmFwcC1jYXJkOmxhc3Qtb2YtdHlwZSB7XG4gIG1hcmdpbi1ib3R0b206IDNyZW07XG59XG5cbmFwcC1jYXJkLmZvY3VzZWQge1xuICBtYXJnaW4tdG9wOiAwO1xuICBvdmVyZmxvdzogc2Nyb2xsO1xuICBvdmVyc2Nyb2xsLWJlaGF2aW9yOiBub25lO1xuICBtYXgtaGVpZ2h0OiAxMDB2aDtcbiAgYm9yZGVyLXJhZGl1czogMTZweCAxNnB4IDAgMDtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbn1cbmFwcC1jYXJkLmZvY3VzZWQ6aG92ZXIsIGFwcC1jYXJkLmZvY3VzZWQ6YWN0aXZlIHtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xuICAuaGVhZGVyIHtcbiAgICBib3JkZXItYm90dG9tOiBub25lO1xuICB9XG5cbiAgYXBwLWNhcmQuZm9jdXNlZCB7XG4gICAgYm9yZGVyLXJhZGl1czogMHB4O1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMDBweCkge1xuICAuaGVhZGVyIHtcbiAgICBtYXJnaW46IDFyZW0gMS4yNXJlbTtcbiAgfVxufVxuLmJhY2tkcm9wIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBjb250ZW50OiBcIlwiO1xuICB6LWluZGV4OiA5OTc7XG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cigyMHB4KTtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG59XG4uYmFja2Ryb3AuZm9jdXNlZCB7XG4gIHBvaW50ZXItZXZlbnRzOiBhbGw7XG59XG5cbi5jYXJkLWNvbnRlbnQge1xuICBwYWRkaW5nLXRvcDogMS41cmVtO1xuICBwYWRkaW5nLWJvdHRvbTogNnJlbTtcbn1cblxuLmJvZHktc2NyZWVuc2hvdC1jb250YWluZXIsXG4uYm9keS10ZXh0LWNvbnRhaW5lcixcbi5ib2R5LXN1bW1hcnktY29udGFpbmVyIHtcbiAgbWFyZ2luOiAxLjVyZW07XG4gIG1hcmdpbi10b3A6IDJyZW07XG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xuICBjb2xvcjogdmFyKC0tY29udGVudC10ZXh0LWNvbG9yKTtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgbGluZS1oZWlnaHQ6IDEuN3JlbTtcbn1cblxuLmJvZHktdmlkZW8tY29udGFpbmVyIHtcbiAgd2lkdGg6IDEwMCU7XG59XG4uYm9keS12aWRlby1jb250YWluZXIgdmlkZW8ge1xuICB3aWR0aDogMTAwJTtcbn1cbi5ib2R5LXZpZGVvLWNvbnRhaW5lciB2aWRlb1twb3N0ZXJdIHtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG59XG4uYm9keS12aWRlby1jb250YWluZXIgaWZyYW1lIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5ib2R5LWltYWdlLWNvbnRhaW5lciBpbWcge1xuICBvYmplY3QtZml0OiBjb250YWluO1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmJvZHktc2NyZWVuc2hvdC1jb250YWluZXIgLnNjcmVlbnNob3Qge1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1jYXJkLXNjcmVlbnNob3QtYmFubmVyLWJnLWNvbG9yKTtcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB3aWR0aDogZml0LWNvbnRlbnQ7XG4gIG1heC13aWR0aDogZml0LWNvbnRlbnQ7XG4gIG1heC13aWR0aDogLXdlYmtpdC1maWxsLWF2YWlsYWJsZTtcbiAgbWFyZ2luOiBhdXRvO1xuICAtd2Via2l0LW1hc2staW1hZ2U6IC13ZWJraXQtcmFkaWFsLWdyYWRpZW50KHdoaXRlLCBibGFjayk7XG59XG4uYm9keS1zY3JlZW5zaG90LWNvbnRhaW5lciBpbWcsXG4uYm9keS1zY3JlZW5zaG90LWNvbnRhaW5lciB2aWRlbyB7XG4gIHdpZHRoOiAxMDAlO1xuICBvYmplY3QtZml0OiBjb250YWluO1xufVxuLmJvZHktc2NyZWVuc2hvdC1jb250YWluZXIgLmJhbm5lciB7XG4gIG1hcmdpbi10b3A6IC01cHg7XG4gIGJhY2tncm91bmQ6IHZhcigtLWNhcmQtc2NyZWVuc2hvdC1iYW5uZXItYmctY29sb3IpO1xuICBwYWRkaW5nOiAxcmVtIDEuNXJlbTtcbiAgdGV4dC1hbGlnbjogc3RhcnQ7XG4gIGZvbnQtc2l6ZTogMC44ZW07XG4gIGNvbG9yOiB2YXIoLS1jYXJkLXNjcmVlbnNob3QtYmFubmVyLWNvbG9yKTtcbn1cblxuLmJvZHktc3VtbWFyeS1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1jYXJkLXN1bW1hcnktYmctY29sb3IpO1xuICBwYWRkaW5nOiAzcmVtO1xuICBtYXJnaW46IDEuNXJlbSAwO1xufVxuLmJvZHktc3VtbWFyeS1jb250YWluZXIgPiAqIHtcbiAgbWFyZ2luLWJvdHRvbTogMC45cmVtO1xufVxuLmJvZHktc3VtbWFyeS1jb250YWluZXIgLnRpdGxlIHtcbiAgY29sb3I6IHZhcigtLWNhcmQtc3VtbWFyeS10aXRsZS1jb2xvcik7XG4gIGZvbnQtc2l6ZTogMS44cmVtO1xufVxuLmJvZHktc3VtbWFyeS1jb250YWluZXIgLmNvbnRlbnQge1xuICBmb250LXdlaWdodDogNDAwO1xuICBmb250LXNpemU6IDFyZW07XG59XG4uYm9keS1zdW1tYXJ5LWNvbnRhaW5lciAuaWNvbiB7XG4gIGhlaWdodDogNjRweDtcbiAgd2lkdGg6IDY0cHg7XG4gIGJvcmRlci1yYWRpdXM6IDFyZW07XG59XG4uYm9keS1zdW1tYXJ5LWNvbnRhaW5lciAubGluayB7XG4gIGJvcmRlci1yYWRpdXM6IDEwMGVtO1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1jaGlwLWNvbG9yKTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHBhZGRpbmc6IDAuNXJlbSAxLjVyZW07XG4gIGZvbnQtc2l6ZTogMXJlbTtcbn1cbi5ib2R5LXN1bW1hcnktY29udGFpbmVyIC5saW5rIGEge1xuICBjb2xvcjogd2hpdGU7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn0iXX0= */"], data: { animation: [
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
/* harmony import */ var src_app_model_SinglePost__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/model/SinglePost */ "./src/app/model/SinglePost.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");







var _c0 = [1, "container"];
var _c1 = ["class", "close-button", 3, "click", 4, "ngIf"];
var _c2 = [1, "header"];
var _c3 = ["class", "banner-video", "autoplay", "", "loop", "", "muted", "", "playsinline", "", "onloadedmetadata", "this.muted=true", "oncanplay", "this.play()", 4, "ngIf"];
var _c4 = [4, "ngIf"];
var _c5 = ["class", "banner", 3, "top", 4, "ngIf"];
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
var _c10 = ["autoplay", "", "loop", "", "muted", "", "playsinline", "", "onloadedmetadata", "this.muted=true", "oncanplay", "this.play()", 1, "banner-video"];
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
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyling"]();
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
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("top", ctx_r3.isBannerTop());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstylingApply"]();
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
    CardComponent.prototype.isBanner = function () {
        return this.cardType == src_app_model_SinglePost__WEBPACK_IMPORTED_MODULE_3__["PostType"].BANNER;
    };
    CardComponent.prototype.isBannerTop = function () {
        return this.cardType == src_app_model_SinglePost__WEBPACK_IMPORTED_MODULE_3__["PostType"].BANNER_TOP;
    };
    CardComponent.ngComponentDef = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CardComponent, selectors: [["app-card"]], factory: function CardComponent_Factory(t) { return new (t || CardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])); }, inputs: { title: "title", subtitle: "subtitle", category: "category", cardHeight: "cardHeight", cardType: "cardType", expanded: "expanded", bgImage: "bgImage", canClose: "canClose" }, outputs: { close: "close" }, ngContentSelectors: _c16, consts: 8, vars: 7, template: function CardComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", _c0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyling"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CardComponent_div_1_Template, 3, 0, "div", _c1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", _c2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyling"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, CardComponent_video_3_Template, 2, 1, "video", _c3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, CardComponent_ng_container_4_Template, 7, 3, "ng-container", _c4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, CardComponent_div_5_Template, 7, 4, "div", _c5);
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
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isBanner() && !ctx.isBannerTop());
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵselect"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isBanner() || ctx.isBannerTop());
        } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"]], styles: ["[_nghost-%COMP%] {\n  display: block;\n  -webkit-transition: width 0.5s ease-in-out;\n  transition: width 0.5s ease-in-out;\n  overflow: hidden;\n  border-radius: 16px;\n}\n[_nghost-%COMP%]::-webkit-scrollbar {\n  display: none;\n}\n.container[_ngcontent-%COMP%] {\n  overflow: hidden;\n  position: relative;\n}\n.container[_ngcontent-%COMP%]   .close-button[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 1rem;\n  right: 1rem;\n  z-index: 5;\n  background: rgba(0, 0, 0, 0.2);\n  border-radius: 100em;\n  width: 2rem;\n  height: 2rem;\n}\n.container[_ngcontent-%COMP%]   .close-button[_ngcontent-%COMP%]   .line-1[_ngcontent-%COMP%], .container[_ngcontent-%COMP%]   .close-button[_ngcontent-%COMP%]   .line-2[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0.95rem;\n  left: 0.35rem;\n  width: 1.3rem;\n  height: 1.3rem;\n  border-top: 2px solid #eee;\n  -webkit-transform-origin: 51% 5%;\n          transform-origin: 51% 5%;\n}\n.container[_ngcontent-%COMP%]   .close-button[_ngcontent-%COMP%]   .line-1[_ngcontent-%COMP%] {\n  -webkit-transform: rotate(45deg);\n          transform: rotate(45deg);\n}\n.container[_ngcontent-%COMP%]   .close-button[_ngcontent-%COMP%]   .line-2[_ngcontent-%COMP%] {\n  -webkit-transform: rotate(-45deg);\n          transform: rotate(-45deg);\n}\n.container[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%] {\n  border-radius: 16px;\n  -webkit-transition-property: border-radius, min-height;\n  transition-property: border-radius, min-height;\n  -webkit-transition-duration: 150ms, 600ms;\n          transition-duration: 150ms, 600ms;\n  -webkit-transition-timing-function: ease-in-out, cubic-bezier(0.13, 0.29, 0.11, 1.38);\n          transition-timing-function: ease-in-out, cubic-bezier(0.13, 0.29, 0.11, 1.38);\n  position: relative;\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-position: center;\n}\n.container[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .banner-video[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 100%;\n  position: absolute;\n  -o-object-fit: cover;\n     object-fit: cover;\n  z-index: -1;\n}\n.container[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .banner[_ngcontent-%COMP%], .container[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .category[_ngcontent-%COMP%], .container[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%], .container[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .subtitle[_ngcontent-%COMP%] {\n  z-index: 1;\n}\n.container[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .category[_ngcontent-%COMP%], .container[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%], .container[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .subtitle[_ngcontent-%COMP%] {\n  padding: 1rem;\n  -webkit-transition: padding 200ms ease-in-out;\n  transition: padding 200ms ease-in-out;\n  opacity: 1;\n}\n.container[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .banner[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 0;\n  background: var(--content-bg-color);\n  width: 100%;\n}\n.container[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .banner.top[_ngcontent-%COMP%] {\n  top: 0;\n  bottom: initial;\n  border-radius: 16px 16px 0 0;\n}\n.container[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .banner[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%], .container[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .banner[_ngcontent-%COMP%]   .subtitle[_ngcontent-%COMP%] {\n  color: var(--card-banner-color);\n  text-shadow: none;\n}\n.container[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .banner[_ngcontent-%COMP%]   .category[_ngcontent-%COMP%] {\n  color: var(--card-banner-category-color);\n}\n.container[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .banner[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  padding: 0 1rem;\n}\n.container[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .banner[_ngcontent-%COMP%]   .subtitle[_ngcontent-%COMP%] {\n  position: initial;\n  font-size: 0.9rem;\n  padding-top: 0.5rem;\n  text-align: left;\n}\n.container[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .category[_ngcontent-%COMP%] {\n  text-transform: uppercase;\n  font-size: 0.8rem;\n  padding-bottom: 0.3rem;\n  font-weight: 500;\n  color: var(--card-category-color);\n  text-shadow: 0 0 5px rgba(0, 0, 0, 0.1);\n}\n.container[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  padding-top: 0;\n  font-size: 1.5rem;\n  font-weight: 600;\n  color: var(--card-title-color);\n  text-shadow: 0px 0 5px rgba(0, 0, 0, 0.3);\n}\n.container[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]:before {\n  content: \"\";\n  width: 100%;\n  height: 100%;\n  background: rgba(60, 60, 60, 0);\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: 0;\n}\n.container[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .subtitle[_ngcontent-%COMP%] {\n  position: absolute;\n  font-weight: 300;\n  bottom: 0;\n  left: 0;\n  text-align: start;\n  color: var(--card-subtitle-color);\n  max-height: 1000px;\n  -webkit-transition-property: opacity, max-height, padding;\n  transition-property: opacity, max-height, padding;\n  -webkit-transition-timing-function: ease-in-out, ease-in-out;\n          transition-timing-function: ease-in-out, ease-in-out;\n  -webkit-transition-duration: 300ms, 200ms;\n          transition-duration: 300ms, 200ms;\n  text-shadow: 0px 0 5px rgba(0, 0, 0, 0.3);\n}\n.container[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n  -webkit-transition: max-height 400ms ease-in-out;\n  transition: max-height 400ms ease-in-out;\n  max-height: 0px;\n  background: var(--content-bg-color);\n}\n.container.expanded[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%] {\n  border-radius: 0px;\n}\n.container.expanded[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .category[_ngcontent-%COMP%], .container.expanded[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%], .container.expanded[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .subtitle[_ngcontent-%COMP%] {\n  padding-left: 0.7rem;\n  padding-right: 0.7rem;\n}\n.container.expanded[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .banner[_ngcontent-%COMP%] {\n  border-radius: 0;\n}\n.container.expanded[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .banner[_ngcontent-%COMP%]   .category[_ngcontent-%COMP%], .container.expanded[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .banner[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  padding-left: 1.5rem;\n}\n.container.expanded[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .banner[_ngcontent-%COMP%]   .subtitle[_ngcontent-%COMP%] {\n  opacity: 0;\n  max-height: 0;\n  padding: 0;\n}\n.container.expanded[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .banner.top[_ngcontent-%COMP%]   .subtitle[_ngcontent-%COMP%] {\n  max-height: initial;\n}\n.container.expanded[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n  max-height: 1000000px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qYWNrZ2FsbGFnaGVyL0RldmVsb3BtZW50L2FwcC1zdG9yZS9zcmMvYXBwL2NvbXBvbmVudHMvY2FyZC9jYXJkLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2NhcmQvY2FyZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGNBQUE7RUFDQSwwQ0FBQTtFQUFBLGtDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQ0NKO0FEQUk7RUFDSSxhQUFBO0FDRVI7QURFQTtFQUNJLGdCQUFBO0VBRUEsa0JBQUE7QUNBSjtBRENJO0VBQ0ksa0JBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7RUFDQSw4QkFBQTtFQUNBLG9CQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUNDUjtBREFROztFQUdJLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxhQUpPO0VBS1AsY0FMTztFQU1QLDBCQUFBO0VBQ0EsZ0NBQUE7VUFBQSx3QkFBQTtBQ0NaO0FEQ1E7RUFDSSxnQ0FBQTtVQUFBLHdCQUFBO0FDQ1o7QURDUTtFQUNJLGlDQUFBO1VBQUEseUJBQUE7QUNDWjtBREVJO0VBQ0ksbUJBQUE7RUFDQSxzREFBQTtFQUFBLDhDQUFBO0VBQ0EseUNBQUE7VUFBQSxpQ0FBQTtFQUNBLHFGQUFBO1VBQUEsNkVBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0EsNEJBQUE7RUFDQSwyQkFBQTtBQ0FSO0FEQ1E7RUFDSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7S0FBQSxpQkFBQTtFQUNBLFdBQUE7QUNDWjtBRENROzs7O0VBSUksVUFBQTtBQ0NaO0FEQ1E7OztFQUdJLGFBQUE7RUFDQSw2Q0FBQTtFQUFBLHFDQUFBO0VBQ0EsVUFBQTtBQ0NaO0FEQ1E7RUFDSSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxtQ0FBQTtFQUNBLFdBQUE7QUNDWjtBREFZO0VBQ0ksTUFBQTtFQUNBLGVBQUE7RUFDQSw0QkFBQTtBQ0VoQjtBREFZOztFQUVJLCtCQUFBO0VBQ0EsaUJBQUE7QUNFaEI7QURBWTtFQUNJLHdDQUFBO0FDRWhCO0FEQVk7RUFDSSxlQUFBO0FDRWhCO0FEQVk7RUFDSSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQ0VoQjtBRENRO0VBQ0kseUJBQUE7RUFDQSxpQkFBQTtFQUNBLHNCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQ0FBQTtFQUNBLHVDQUFBO0FDQ1o7QURDUTtFQVdJLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsOEJBQUE7RUFDQSx5Q0FBQTtBQ1RaO0FETFk7RUFDSSxXQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSwrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxVQUFBO0FDT2hCO0FEQ1E7RUFDSSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsU0FBQTtFQUNBLE9BQUE7RUFDQSxpQkFBQTtFQUNBLGlDQUFBO0VBQ0Esa0JBQUE7RUFDQSx5REFBQTtFQUFBLGlEQUFBO0VBQ0EsNERBQUE7VUFBQSxvREFBQTtFQUNBLHlDQUFBO1VBQUEsaUNBQUE7RUFDQSx5Q0FBQTtBQ0NaO0FER0k7RUFDSSxnREFBQTtFQUFBLHdDQUFBO0VBQ0EsZUFBQTtFQUNBLG1DQUFBO0FDRFI7QURJUTtFQUNJLGtCQUFBO0FDRlo7QURHWTs7O0VBR0ksb0JBQUE7RUFDQSxxQkFBQTtBQ0RoQjtBREdZO0VBQ0ksZ0JBQUE7QUNEaEI7QURFZ0I7O0VBRUksb0JBQUE7QUNBcEI7QURFZ0I7RUFDSSxVQUFBO0VBQ0EsYUFBQTtFQUNBLFVBQUE7QUNBcEI7QURFZ0I7RUFDSSxtQkFBQTtBQ0FwQjtBREtRO0VBQ0kscUJBQUE7QUNIWiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY2FyZC9jYXJkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHRyYW5zaXRpb246IHdpZHRoIDAuNXMgZWFzZS1pbi1vdXQ7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBib3JkZXItcmFkaXVzOiAxNnB4O1xuICAgICY6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG59XG5cbi5jb250YWluZXIge1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgLy8gbWluLWhlaWdodDogMTAwcHg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIC5jbG9zZS1idXR0b24ge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHRvcDogMXJlbTtcbiAgICAgICAgcmlnaHQ6IDFyZW07XG4gICAgICAgIHotaW5kZXg6IDU7XG4gICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTAwZW07XG4gICAgICAgIHdpZHRoOiAycmVtO1xuICAgICAgICBoZWlnaHQ6IDJyZW07XG4gICAgICAgIC5saW5lLTEsXG4gICAgICAgIC5saW5lLTIge1xuICAgICAgICAgICAgJHNpemU6IDEuM3JlbTtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIHRvcDogMC45NXJlbTtcbiAgICAgICAgICAgIGxlZnQ6IDAuMzVyZW07XG4gICAgICAgICAgICB3aWR0aDogJHNpemU7XG4gICAgICAgICAgICBoZWlnaHQ6ICRzaXplO1xuICAgICAgICAgICAgYm9yZGVyLXRvcDogMnB4IHNvbGlkICNlZWU7XG4gICAgICAgICAgICB0cmFuc2Zvcm0tb3JpZ2luOiA1MSUgNSU7XG4gICAgICAgIH1cbiAgICAgICAgLmxpbmUtMSB7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XG4gICAgICAgIH1cbiAgICAgICAgLmxpbmUtMiB7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xuICAgICAgICB9XG4gICAgfVxuICAgIC5oZWFkZXIge1xuICAgICAgICBib3JkZXItcmFkaXVzOiAxNnB4O1xuICAgICAgICB0cmFuc2l0aW9uLXByb3BlcnR5OiBib3JkZXItcmFkaXVzLCBtaW4taGVpZ2h0O1xuICAgICAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAxNTBtcywgNjAwbXM7XG4gICAgICAgIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluLW91dCwgY3ViaWMtYmV6aWVyKC4xMywgLjI5LCAuMTEsIDEuMzgpO1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICAgICAgLmJhbm5lci12aWRlbyB7XG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xuICAgICAgICAgICAgei1pbmRleDogLTE7XG4gICAgICAgIH1cbiAgICAgICAgLmJhbm5lcixcbiAgICAgICAgLmNhdGVnb3J5LFxuICAgICAgICAudGl0bGUsXG4gICAgICAgIC5zdWJ0aXRsZSB7XG4gICAgICAgICAgICB6LWluZGV4OiAxO1xuICAgICAgICB9XG4gICAgICAgIC5jYXRlZ29yeSxcbiAgICAgICAgLnRpdGxlLFxuICAgICAgICAuc3VidGl0bGUge1xuICAgICAgICAgICAgcGFkZGluZzogMXJlbTtcbiAgICAgICAgICAgIHRyYW5zaXRpb246IHBhZGRpbmcgMjAwbXMgZWFzZS1pbi1vdXQ7XG4gICAgICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICB9XG4gICAgICAgIC5iYW5uZXIge1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tY29udGVudC1iZy1jb2xvcik7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICYudG9wIHtcbiAgICAgICAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgICAgICAgYm90dG9tOiBpbml0aWFsO1xuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDE2cHggMTZweCAwIDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAudGl0bGUsXG4gICAgICAgICAgICAuc3VidGl0bGUge1xuICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1jYXJkLWJhbm5lci1jb2xvcik7XG4gICAgICAgICAgICAgICAgdGV4dC1zaGFkb3c6IG5vbmU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuY2F0ZWdvcnkge1xuICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1jYXJkLWJhbm5lci1jYXRlZ29yeS1jb2xvcik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAudGl0bGUge1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAgMXJlbTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5zdWJ0aXRsZSB7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGluaXRpYWw7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAwLjlyZW07XG4gICAgICAgICAgICAgICAgcGFkZGluZy10b3A6IDAuNXJlbTtcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC5jYXRlZ29yeSB7XG4gICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICAgICAgZm9udC1zaXplOiAwLjhyZW07XG4gICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMC4zcmVtO1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1jYXJkLWNhdGVnb3J5LWNvbG9yKTtcbiAgICAgICAgICAgIHRleHQtc2hhZG93OiAwIDAgNXB4IHJnYmEoMCwgMCwgMCwgMC4xKVxuICAgICAgICB9XG4gICAgICAgIC50aXRsZSB7XG4gICAgICAgICAgICAmOmJlZm9yZSB7XG4gICAgICAgICAgICAgICAgY29udGVudDogJyc7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoNjAsIDYwLCA2MCwgMCk7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgICAgICAgIHotaW5kZXg6IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBwYWRkaW5nLXRvcDogMDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1jYXJkLXRpdGxlLWNvbG9yKTtcbiAgICAgICAgICAgIHRleHQtc2hhZG93OiAwcHggMCA1cHggcmdiYSgwLCAwLCAwLCAwLjMpO1xuICAgICAgICB9XG4gICAgICAgIC5zdWJ0aXRsZSB7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICBmb250LXdlaWdodDogMzAwO1xuICAgICAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IHN0YXJ0O1xuICAgICAgICAgICAgY29sb3I6IHZhcigtLWNhcmQtc3VidGl0bGUtY29sb3IpO1xuICAgICAgICAgICAgbWF4LWhlaWdodDogMTAwMHB4O1xuICAgICAgICAgICAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogb3BhY2l0eSwgbWF4LWhlaWdodCwgcGFkZGluZztcbiAgICAgICAgICAgIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluLW91dCwgZWFzZS1pbi1vdXQ7XG4gICAgICAgICAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAzMDBtcywgMjAwbXM7XG4gICAgICAgICAgICB0ZXh0LXNoYWRvdzogMHB4IDAgNXB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcbiAgICAgICAgfVxuICAgICAgICAvLyAtd2Via2l0LW1hc2staW1hZ2U6IC13ZWJraXQtcmFkaWFsLWdyYWRpZW50KHdoaXRlLCBibGFjayk7XG4gICAgfVxuICAgIC5jb250ZW50IHtcbiAgICAgICAgdHJhbnNpdGlvbjogbWF4LWhlaWdodCA0MDBtcyBlYXNlLWluLW91dDtcbiAgICAgICAgbWF4LWhlaWdodDogMHB4O1xuICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1jb250ZW50LWJnLWNvbG9yKTtcbiAgICB9XG4gICAgJi5leHBhbmRlZCB7XG4gICAgICAgIC5oZWFkZXIge1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMHB4O1xuICAgICAgICAgICAgLmNhdGVnb3J5LFxuICAgICAgICAgICAgLnRpdGxlLFxuICAgICAgICAgICAgLnN1YnRpdGxlIHtcbiAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDAuN3JlbTtcbiAgICAgICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAwLjdyZW07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuYmFubmVyIHtcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAwO1xuICAgICAgICAgICAgICAgIC5jYXRlZ29yeSxcbiAgICAgICAgICAgICAgICAudGl0bGUge1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDEuNXJlbTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLnN1YnRpdGxlIHtcbiAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgICAgICAgICAgICAgbWF4LWhlaWdodDogMDtcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgJi50b3AgLnN1YnRpdGxlIHtcbiAgICAgICAgICAgICAgICAgICAgbWF4LWhlaWdodDogaW5pdGlhbDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBtaW4taGVpZ2h0OiAxNTBweDtcbiAgICAgICAgfVxuICAgICAgICAuY29udGVudCB7XG4gICAgICAgICAgICBtYXgtaGVpZ2h0OiAxMDAwMDAwcHg7XG4gICAgICAgIH1cbiAgICB9XG59IiwiOmhvc3Qge1xuICBkaXNwbGF5OiBibG9jaztcbiAgdHJhbnNpdGlvbjogd2lkdGggMC41cyBlYXNlLWluLW91dDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgYm9yZGVyLXJhZGl1czogMTZweDtcbn1cbjpob3N0Ojotd2Via2l0LXNjcm9sbGJhciB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5jb250YWluZXIge1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uY29udGFpbmVyIC5jbG9zZS1idXR0b24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMXJlbTtcbiAgcmlnaHQ6IDFyZW07XG4gIHotaW5kZXg6IDU7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgYm9yZGVyLXJhZGl1czogMTAwZW07XG4gIHdpZHRoOiAycmVtO1xuICBoZWlnaHQ6IDJyZW07XG59XG4uY29udGFpbmVyIC5jbG9zZS1idXR0b24gLmxpbmUtMSxcbi5jb250YWluZXIgLmNsb3NlLWJ1dHRvbiAubGluZS0yIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDAuOTVyZW07XG4gIGxlZnQ6IDAuMzVyZW07XG4gIHdpZHRoOiAxLjNyZW07XG4gIGhlaWdodDogMS4zcmVtO1xuICBib3JkZXItdG9wOiAycHggc29saWQgI2VlZTtcbiAgdHJhbnNmb3JtLW9yaWdpbjogNTElIDUlO1xufVxuLmNvbnRhaW5lciAuY2xvc2UtYnV0dG9uIC5saW5lLTEge1xuICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XG59XG4uY29udGFpbmVyIC5jbG9zZS1idXR0b24gLmxpbmUtMiB7XG4gIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XG59XG4uY29udGFpbmVyIC5oZWFkZXIge1xuICBib3JkZXItcmFkaXVzOiAxNnB4O1xuICB0cmFuc2l0aW9uLXByb3BlcnR5OiBib3JkZXItcmFkaXVzLCBtaW4taGVpZ2h0O1xuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAxNTBtcywgNjAwbXM7XG4gIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluLW91dCwgY3ViaWMtYmV6aWVyKDAuMTMsIDAuMjksIDAuMTEsIDEuMzgpO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbn1cbi5jb250YWluZXIgLmhlYWRlciAuYmFubmVyLXZpZGVvIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgei1pbmRleDogLTE7XG59XG4uY29udGFpbmVyIC5oZWFkZXIgLmJhbm5lcixcbi5jb250YWluZXIgLmhlYWRlciAuY2F0ZWdvcnksXG4uY29udGFpbmVyIC5oZWFkZXIgLnRpdGxlLFxuLmNvbnRhaW5lciAuaGVhZGVyIC5zdWJ0aXRsZSB7XG4gIHotaW5kZXg6IDE7XG59XG4uY29udGFpbmVyIC5oZWFkZXIgLmNhdGVnb3J5LFxuLmNvbnRhaW5lciAuaGVhZGVyIC50aXRsZSxcbi5jb250YWluZXIgLmhlYWRlciAuc3VidGl0bGUge1xuICBwYWRkaW5nOiAxcmVtO1xuICB0cmFuc2l0aW9uOiBwYWRkaW5nIDIwMG1zIGVhc2UtaW4tb3V0O1xuICBvcGFjaXR5OiAxO1xufVxuLmNvbnRhaW5lciAuaGVhZGVyIC5iYW5uZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMDtcbiAgYmFja2dyb3VuZDogdmFyKC0tY29udGVudC1iZy1jb2xvcik7XG4gIHdpZHRoOiAxMDAlO1xufVxuLmNvbnRhaW5lciAuaGVhZGVyIC5iYW5uZXIudG9wIHtcbiAgdG9wOiAwO1xuICBib3R0b206IGluaXRpYWw7XG4gIGJvcmRlci1yYWRpdXM6IDE2cHggMTZweCAwIDA7XG59XG4uY29udGFpbmVyIC5oZWFkZXIgLmJhbm5lciAudGl0bGUsXG4uY29udGFpbmVyIC5oZWFkZXIgLmJhbm5lciAuc3VidGl0bGUge1xuICBjb2xvcjogdmFyKC0tY2FyZC1iYW5uZXItY29sb3IpO1xuICB0ZXh0LXNoYWRvdzogbm9uZTtcbn1cbi5jb250YWluZXIgLmhlYWRlciAuYmFubmVyIC5jYXRlZ29yeSB7XG4gIGNvbG9yOiB2YXIoLS1jYXJkLWJhbm5lci1jYXRlZ29yeS1jb2xvcik7XG59XG4uY29udGFpbmVyIC5oZWFkZXIgLmJhbm5lciAudGl0bGUge1xuICBwYWRkaW5nOiAwIDFyZW07XG59XG4uY29udGFpbmVyIC5oZWFkZXIgLmJhbm5lciAuc3VidGl0bGUge1xuICBwb3NpdGlvbjogaW5pdGlhbDtcbiAgZm9udC1zaXplOiAwLjlyZW07XG4gIHBhZGRpbmctdG9wOiAwLjVyZW07XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG4uY29udGFpbmVyIC5oZWFkZXIgLmNhdGVnb3J5IHtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgZm9udC1zaXplOiAwLjhyZW07XG4gIHBhZGRpbmctYm90dG9tOiAwLjNyZW07XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGNvbG9yOiB2YXIoLS1jYXJkLWNhdGVnb3J5LWNvbG9yKTtcbiAgdGV4dC1zaGFkb3c6IDAgMCA1cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xufVxuLmNvbnRhaW5lciAuaGVhZGVyIC50aXRsZSB7XG4gIHBhZGRpbmctdG9wOiAwO1xuICBmb250LXNpemU6IDEuNXJlbTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgY29sb3I6IHZhcigtLWNhcmQtdGl0bGUtY29sb3IpO1xuICB0ZXh0LXNoYWRvdzogMHB4IDAgNXB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcbn1cbi5jb250YWluZXIgLmhlYWRlciAudGl0bGU6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgYmFja2dyb3VuZDogcmdiYSg2MCwgNjAsIDYwLCAwKTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHotaW5kZXg6IDA7XG59XG4uY29udGFpbmVyIC5oZWFkZXIgLnN1YnRpdGxlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBmb250LXdlaWdodDogMzAwO1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDA7XG4gIHRleHQtYWxpZ246IHN0YXJ0O1xuICBjb2xvcjogdmFyKC0tY2FyZC1zdWJ0aXRsZS1jb2xvcik7XG4gIG1heC1oZWlnaHQ6IDEwMDBweDtcbiAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogb3BhY2l0eSwgbWF4LWhlaWdodCwgcGFkZGluZztcbiAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW4tb3V0LCBlYXNlLWluLW91dDtcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMzAwbXMsIDIwMG1zO1xuICB0ZXh0LXNoYWRvdzogMHB4IDAgNXB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcbn1cbi5jb250YWluZXIgLmNvbnRlbnQge1xuICB0cmFuc2l0aW9uOiBtYXgtaGVpZ2h0IDQwMG1zIGVhc2UtaW4tb3V0O1xuICBtYXgtaGVpZ2h0OiAwcHg7XG4gIGJhY2tncm91bmQ6IHZhcigtLWNvbnRlbnQtYmctY29sb3IpO1xufVxuLmNvbnRhaW5lci5leHBhbmRlZCAuaGVhZGVyIHtcbiAgYm9yZGVyLXJhZGl1czogMHB4O1xufVxuLmNvbnRhaW5lci5leHBhbmRlZCAuaGVhZGVyIC5jYXRlZ29yeSxcbi5jb250YWluZXIuZXhwYW5kZWQgLmhlYWRlciAudGl0bGUsXG4uY29udGFpbmVyLmV4cGFuZGVkIC5oZWFkZXIgLnN1YnRpdGxlIHtcbiAgcGFkZGluZy1sZWZ0OiAwLjdyZW07XG4gIHBhZGRpbmctcmlnaHQ6IDAuN3JlbTtcbn1cbi5jb250YWluZXIuZXhwYW5kZWQgLmhlYWRlciAuYmFubmVyIHtcbiAgYm9yZGVyLXJhZGl1czogMDtcbn1cbi5jb250YWluZXIuZXhwYW5kZWQgLmhlYWRlciAuYmFubmVyIC5jYXRlZ29yeSxcbi5jb250YWluZXIuZXhwYW5kZWQgLmhlYWRlciAuYmFubmVyIC50aXRsZSB7XG4gIHBhZGRpbmctbGVmdDogMS41cmVtO1xufVxuLmNvbnRhaW5lci5leHBhbmRlZCAuaGVhZGVyIC5iYW5uZXIgLnN1YnRpdGxlIHtcbiAgb3BhY2l0eTogMDtcbiAgbWF4LWhlaWdodDogMDtcbiAgcGFkZGluZzogMDtcbn1cbi5jb250YWluZXIuZXhwYW5kZWQgLmhlYWRlciAuYmFubmVyLnRvcCAuc3VidGl0bGUge1xuICBtYXgtaGVpZ2h0OiBpbml0aWFsO1xufVxuLmNvbnRhaW5lci5leHBhbmRlZCAuY29udGVudCB7XG4gIG1heC1oZWlnaHQ6IDEwMDAwMDBweDtcbn0iXX0= */"], data: { animation: [
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
        }], cardType: [{
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

/***/ "./src/app/model/SinglePost.ts":
/*!*************************************!*\
  !*** ./src/app/model/SinglePost.ts ***!
  \*************************************/
/*! exports provided: PostType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostType", function() { return PostType; });
var PostType;
(function (PostType) {
    PostType["BANNER_TOP"] = "banner-top";
    PostType["BANNER"] = "banner";
})(PostType || (PostType = {}));


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

module.exports = JSON.parse("{\"items\":[{\"id\":12,\"title\":\"DropChef\",\"subtitle\":\"Take the hassle & stress out of dinner\",\"category\":\"App\",\"iconUrl\":\"assets/img/dropchef-icon.png\",\"link\":\"https://dropchef.com/app/\",\"bannerUrl\":\"assets/img/dropchef-banner.png\",\"body\":[{\"type\":\"text\",\"content\":\"Founded in 2015, DropChef delivers tailored healthy meal kits with measured, locally sourced ingredients to households throughout Ireland. By following easy-to-use recipes, users cook healthy meal options with minimal waste and no fear of forgetting vital ingredients.\"},{\"type\":\"youtube\",\"content\":\"Our latest explainer advertisement\",\"sourceUrl\":\"https://www.youtube-nocookie.com/embed/20i_5VCPwR8?controls=0\"},{\"type\":\"text\",\"content\":\"I built the app in React Native, with state management handled using Redux. React Native Elements provides the UI components, as the goal is to provide a web build of the application using React Native Web. We use OneSignal to handle our push notifications, (which integrates well with many CRM systems allowing us to tailor our messaging) as well as provide lovely full-screen in-app messages and carousels, for tutorials, announcements and more.\"},{\"type\":\"screenshot\",\"sourceUrl\":\"assets/img/dropchef-demo.mp4\",\"content\":\"The app allows users to make their weekly DropChef order, as well as manage their account, quickly and conveniently.\"},{\"type\":\"text\",\"content\":\"To accompany the app, I also built a API Gateway that provides a safe intermediary between the app and WooCommerce CMS and our various other data sources. This gateway is built using NestJS, Swagger, Bull, Redis and integrates with a few AWS services, namely DynamoDB, SNS, CloudWatch, and is deployed to AWS ECS as a Docker container.\"},{\"type\":\"text\",\"content\":\"It is was initially released in August 2021, and is continually being updated.\"},{\"type\":\"summary\"}]},{\"id\":5,\"title\":\"Clinical Noting\",\"subtitle\":\"Towards a paperless future\",\"category\":\"App\",\"iconUrl\":\"assets/img/clinical_noting_icon.png\",\"link\":\"http://www.imsmaxims.com\",\"bannerUrl\":\"assets/img/clinical_noting.jpg\",\"cardType\":\"banner-top\",\"body\":[{\"type\":\"text\",\"content\":\"The Clinical Noting app is a web application designed to assist clinicians with note taking during patient appointments. It is launched from IMS MAXIMS, the main enterprise offering from IMS, and also provided wrapped through Capacitor as a standalone iOS, Android and web application in the near future. Through a series of WebSockets connections and app deeplinking, the user can move seamlessly between our suite of applications, safely maintaining and validating patient in context for clinical safety.\"},{\"type\":\"screenshot\",\"sourceUrl\":\"assets/img/clinical_noting_screenshot.png\",\"content\":\"Clinicians can record various types of information for an appointment\"},{\"type\":\"text\",\"content\":\"It os built in Angular 8, using Angular Material components, with state management being handled by NGRX. It takes advantages of the latest Angular and NGRX features, such as using the Ivy renderer, taking advantage of NGRX's new factory framework to make generic reducers/actions/selectors, and using the latest Angular CDK.\"},{\"type\":\"text\",\"content\":\"It was released in October 2020 and is updated regularly at present. \"},{\"type\":\"summary\"}]},{\"id\":4,\"title\":\"mHealth\",\"subtitle\":\"Assisting our nurses and clinicians\",\"category\":\"App\",\"iconUrl\":\"assets/img/mhealth_icon.png\",\"link\":\"http://www.imsmaxims.com\",\"body\":[{\"type\":\"text\",\"content\":\"mHealth (Mobile Health) is a iOS, Android and Web application designed to aid clinicians and nursing with patient management. It allows the users to do a plethora of tasks, including record vital signs for a patient, do bed management, discharge planning, managing surgical theatres and much more.\"},{\"type\":\"screenshot\",\"sourceUrl\":\"assets/img/mhealth_ipad.png\",\"content\":\"Our Patient Bedside View gives a high-level view of the patient's care\"},{\"type\":\"text\",\"content\":\"I led development on this app for over 4.5 years with a team of 5 UI engineers, taking it from the R&D stage to production. I contributed to the development, design, deployment and planning.\"},{\"type\":\"screenshot\",\"sourceUrl\":\"assets/img/mhealth_demo.mp4\",\"content\":\"Recording vital signs is just one of the many features available\"},{\"type\":\"text\",\"content\":\"Originally developed in AngularJS and Ionic, and migrated to Angular 5 and Ionic 3 by myself, the app makes extensive use of RxJS (ReactiveX), following an event driven programming model. IMS MAXIMS, the company's main enterprise offering, offers a REST API which we used to populate data.\"},{\"type\":\"text\",\"content\":\"It is currently live in Taunton & Somerset NHS Foundation Trust, as well as Wye Valley NHS Trust. Check out a video from Taunton here: \"},{\"type\":\"video\",\"sourceUrl\":\"assets/img/mhealth_taunton.mp4\"},{\"type\":\"summary\"}],\"bannerUrl\":\"assets/img/mhealth.mp4\"},{\"id\":2,\"title\":\"We Can Help\",\"subtitle\":\"Providing a helping hand when needed\",\"category\":\"App\",\"iconUrl\":\"assets/img/wecanhelp_icon.png\",\"link\":\"http://jackgallagher.ie/WeCanHelp\",\"bannerUrl\":\"assets/img/wecanhelp.png\",\"body\":[{\"type\":\"text\",\"content\":\"We Can Help was a iOS and Android app built for as a pitch to the HSE (Health Service Executive of Ireland) for giving people easy access to various health and safety services available in Ireland. It was an Ionic 3 / Angular 5 app that took advantage of Google Maps API, text-to-speech for  an accident and emergency feature, and SMS integration.\"},{\"type\":\"screenshot\",\"content\":\"It was designed to be approachable to a wide audience\",\"sourceUrl\":\"assets/img/wecanhelp_animated.mp4\"},{\"type\":\"text\",\"content\":\"Ultimately, the pitch was unsuccessful due to a lack of funding, however the aesthetic design was used in an alternative informational sticker campaign. These are currently located in many public places throughout the north-west of Ireland.\"},{\"type\":\"image\",\"sourceUrl\":\"assets/img/wecanhelp_sticker.jpg\"},{\"type\":\"summary\"}]},{\"id\":1,\"title\":\"IBM Coplink\",\"subtitle\":\"Facilitating Law Enforcement\",\"category\":\"App\",\"iconUrl\":\"assets/img/coplink_icon.jpg\",\"bannerUrl\":\"assets/img/coplink.mp4\",\"cardType\":\"banner\",\"link\":\"https://apkpure.com/ibm-coplink/com.ibm.i2.coplink\",\"body\":[{\"type\":\"text\",\"content\":\"IBM Coplink is an app to assist law enforcement officers while on the move. It is a iOS and Android application that allows the user to search the Coplink database to find people, vehicles, objects, organisations and relationships. The user can also use a map screen to find the same results for situational awareness. \"},{\"type\":\"image\",\"sourceUrl\":\"assets/img/coplink_search.jpg\"},{\"type\":\"text\",\"content\":\"I led development on the Android app, built natively with no specific framework, and ported over from an IBM Worklight hybrid app. Developments included using the Google Maps API for the situational awareness feature, building the search screens generically to minimise duplicated UI elements and logic, and using the native camera APIs to facilitate server-side facial recognition.\"},{\"type\":\"screenshot\",\"content\":\"Working primarily on the Android app, I got extensive experience in native Android APIs\",\"sourceUrl\":\"assets/img/coplink_login.jpg\"},{\"type\":\"text\",\"content\":\"It was live in the San Bernardino Police Department, and was used by officers in the event which kicked off one of the <a href='https://www.npr.org/sections/alltechconsidered/2016/12/03/504130977/a-year-after-san-bernardino-and-apple-fbi-where-are-we-on-encryption'>highest profile tech stories of 2016</a> (Apple - FBI Encryption Dispute).\"},{\"type\":\"youtube\",\"content\":\"Coplink in action\",\"sourceUrl\":\"https://www.youtube-nocookie.com/embed/-MEqDy_a4v4?controls=0\"},{\"type\":\"text\",\"content\":\"It has since been removed from the App Store but is available on mirrors. \"},{\"type\":\"summary\"}]},{\"id\":8,\"title\":\"Access Earth\",\"subtitle\":\"Know more. Do more. Live more.\",\"category\":\"App\",\"link\":\"http://access.earth\",\"iconUrl\":\"assets/img/access_earth_icon.png\",\"bannerUrl\":\"assets/img/access_earth_1.png\",\"body\":[{\"type\":\"text\",\"content\":\"The goal of Access Earth is to provide accessibility information for locations around the globe. The service is a platform for users to share and upload accessibility information, crowd-sourced and crowd-verified. \"},{\"type\":\"video\",\"sourceUrl\":\"assets/img/access_earth_demo.mp4\",\"bannerUrl\":\"assets/img/access_earth_promo.jpg\"},{\"type\":\"text\",\"content\":\"We entered the app and service into Microsoft's Imagine Cup in 2014. We built it in initially in jQuery and Cordova, and a second version was built in WinJS with Windows 8 Metro inspired design. It featured Cortana voice assistant support, allowing the user to add accessibility information using only their voice.\"},{\"type\":\"image\",\"sourceUrl\":\"assets/img/access_earth_win.jpg\"},{\"type\":\"text\",\"content\":\"We came 3rd Place Worldwide in the Citizenship Category. The service is still live and developing to this day (without my involvement), and has secured regular investment. \"},{\"type\":\"text\",\"content\":\"Please check out the latest version on iOS, Android and the web.\"},{\"type\":\"summary\"}]},{\"id\":11,\"title\":\"GameDevelopers.ie\",\"subtitle\":\"Supporting local game developers\",\"category\":\"Web\",\"bannerUrl\":\"assets/img/gamedevelopers.png\",\"body\":[{\"type\":\"text\",\"content\":\"GameDevelopers.ie is a volunteer-run portal for developers in the video game industry in Ireland. It offers visitors the latest news and stories from the national game development scene, with guest posts from many of the developers in Ireland.\"},{\"type\":\"screenshot\",\"sourceUrl\":\"assets/img/gamedevelopers_screenshot.png\",\"content\":\"The site has been active for over a decade and contains a large library of articles\"},{\"type\":\"text\",\"content\":\"I currently volunteer and support the team with technical assistance. The website was a legacy Wordpress installation with many plugins added over time to add functionality. My work involves upgrading the website whilst maintaining compatibility, investigating new features that would assist the writing team, and support in event of an issue.\"}]},{\"id\":6,\"title\":\"IBM Citizen Collaboration\",\"subtitle\":\"Enabling citizens to assist local governments\",\"category\":\"App\",\"bannerUrl\":\"assets/img/coplink.jpg\",\"body\":[{\"type\":\"text\",\"content\":\"The IBM Intelligent Operations Center for Citizen Collaboration application is designed to improve communication between cities and their citizens about non-emergency city matters. IBM Intelligent Operations Center for Citizen Collaboration supports a rich set of communication channels, providing citizens with anywhere or anytime access to their channels of choice.\"},{\"type\":\"text\",\"content\":\"The app was built in IBM Worklight, a set of tools that provided push notifications,federated identity management and CLI tools. The underlying frontend framework was an extension of Dojo, which allowed use of libraries developed across IBM. I developed features such as photo uploading, image galleries and customisable user profiles.\"},{\"type\":\"screenshot\",\"sourceUrl\":\"assets/img/ibm_citizen_collab.jpg\",\"content\":\"IBM Worklight was later rebranded as IBM MobileFirst\"},{\"type\":\"text\",\"content\":\"I worked on the Citizen Collaboration app as the lead developer for 6 months until the project was cancelled.\"}]},{\"id\":7,\"title\":\"IBM Intelligent Operations Center\",\"subtitle\":\"Providing Operational Insight\",\"category\":\"Enterprise\",\"link\":\"https://www.ibm.com/uk-en/marketplace/city-insights\",\"bannerUrl\":\"assets/img/ioc.png\",\"body\":[{\"type\":\"text\",\"content\":\"The IBM Intelligent Operations Center provided city officials with a tool that offered data visualisation, deep analytics and real time collaboration. This allowed them to plan for growth, prepare for problems, and coordinate and manage response efforts.\"},{\"type\":\"youtube\",\"sourceUrl\":\"https://www.youtube-nocookie.com/embed/wmgRSW0DwVY\"},{\"type\":\"text\",\"content\":\"The IOC is built on a stack of Dojo, Java EE and IBM Websphere. I worked across the full stack, building new UI elements and working on business logic such as integrating with a SMS/email notification system. \"},{\"type\":\"text\",\"content\":\"The application was architected to be very extendable, and was used as the basis for numerous other applictions in the Safer Planet Group. I built a prototype based on it that tracked police officers vital signs(with data pulled from the Apple Watch) and provided a high level visualisation for the control center team. This prototype was demoed at the IBM i2 Global Summit 2016.\"}]},{\"id\":3,\"title\":\"Oracle Worldwide Product Translation Group\",\"subtitle\":\"Providing i18n for the Oracle Suite\",\"category\":\"QA\",\"cardType\":\"banner\",\"bannerUrl\":\"assets/img/oracle.png\",\"body\":[{\"type\":\"text\",\"content\":\"Oracle has a wide array of products on the market built by teams all around the globe. The <strong>Worldwide Product Translation Group</strong> was set up to optimise translation efforts across the company. This was achieved through an application called HyperHUB, that identified where to reuse existing translations and suggested new strings. This massively cut down on localisation costs for the company, with savings in the millions.\"},{\"type\":\"text\",\"content\":\"I provided QA for HyperHUB and the various supporting tools. This involved developing Perl scripts for automated testing, manual testing, writing test cases and working with the development team to maintain quality in the product. I also carried out full compatibility testing in Windows 8 \"},{\"type\":\"text\",\"content\":\"I worked here for a 13-month internship between my university studies. For my efforts, I was nominated for the WPTG Student of the Year internal award.\"}]},{\"id\":10,\"title\":\"Donegal Websites\",\"subtitle\":\"Building for local businesses\",\"category\":\"Web\",\"bannerUrl\":\"assets/img/donegal_websites.jpg\",\"body\":[{\"type\":\"text\",\"content\":\"Donegal Websites was a local business providing web solutions for small to medium businesses in County Donegal, Ireland. We provided solutions that ranged from simple brochure sites to full e-commerce solutions.\"},{\"type\":\"screenshot\",\"sourceUrl\":\"assets/img/donegal_websites_screenshot.png\",\"content\":\"We developed sites for many local sports clubs, including my local GAA team.\"},{\"type\":\"text\",\"content\":\"I worked across the full-stack during my time at Donegal Websites. We mainly worked in a LAMP(Linux, Apache, MySQL, PHP) environment, using Wordpress as the foundation of many of our sites, however we offered many custom solutions tailored to each clients needs. Hosting was also provided, which we handled directly.\"}]}]}");

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

module.exports = __webpack_require__(/*! /Users/jackgallagher/Development/app-store/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map