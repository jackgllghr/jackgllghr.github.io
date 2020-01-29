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
        } }, directives: [_components_card_container_card_container_component__WEBPACK_IMPORTED_MODULE_1__["CardContainerComponent"]], styles: ["[_nghost-%COMP%] {\n  font-family: -apple-system, BlinkMacSystemFont, sans-serif;\n  --body-bg-color: white;\n  --header-color: black;\n  --header-subtitle-color: grey;\n  --header-border-color: #eee;\n  --content-bg-color: white;\n  --content-text-color: #888;\n  --card-title-color: white;\n  --card-subtitle-color: white;\n  --card-banner-color: black;\n  --card-banner-category-color: grey;\n  --card-summary-bg-color: #0001;\n  --chip-color: #007aff;\n  --card-screenshot-banner-color: var(--content-text-color);\n  --card-screenshot-banner-bg-color: #0001;\n  --card-summary-title-color: black;\n  --card-category-color: rgba(255,255,255,0.5);\n}\n\napp-card-container[_ngcontent-%COMP%] {\n  height: 100vh;\n  width: 100vw;\n}\n\n@media (prefers-color-scheme: dark) {\n  [_nghost-%COMP%] {\n    --body-bg-color: black;\n    --header-color: white;\n    --header-subtitle-color: var(--card-category-color);\n    --header-border-color: #333;\n    --content-bg-color: rgb(28,28,30);\n    --card-summary-title-color: white;\n    --card-summary-bg-color: rgb(72,72,74);\n    --card-banner-color: white;\n    --card-banner-category-color: var(--card-category-color);\n    --card-screenshot-banner-bg-color: rgb(58,58,60);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qYWNrcGVyc29uYWwvRGV2ZWxvcG1lbnQvYXBwLXN0b3JlLWN2L3NyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDSSwwREFBQTtFQUNBLHNCQUFBO0VBQ0EscUJBQUE7RUFDQSw2QkFBQTtFQUNBLDJCQUFBO0VBQ0EseUJBQUE7RUFDQSwwQkFBQTtFQUNBLHlCQUFBO0VBQ0EsNEJBQUE7RUFDQSwwQkFBQTtFQUNBLGtDQUFBO0VBQ0EsOEJBQUE7RUFDQSxxQkFBQTtFQUNBLHlEQUFBO0VBQ0Esd0NBQUE7RUFDQSxpQ0FBQTtFQUNBLDRDQUFBO0FDREo7O0FER0E7RUFDSSxhQUFBO0VBQ0EsWUFBQTtBQ0FKOztBREVBO0VBQ0k7SUFDSSxzQkFBQTtJQUNBLHFCQUFBO0lBQ0EsbURBQUE7SUFDQSwyQkFBQTtJQUNBLGlDQUFBO0lBSUEsaUNBQUE7SUFDQSxzQ0FBQTtJQUNBLDBCQUFBO0lBQ0Esd0RBQUE7SUFDQSxnREFBQTtFQ0ZOO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkYXBwbGUtYmx1ZTogIzAwN2FmZjtcbiRncmV5OiAjMDAwMTtcbjpob3N0e1xuICAgIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIHNhbnMtc2VyaWY7XG4gICAgLS1ib2R5LWJnLWNvbG9yOiB3aGl0ZTtcbiAgICAtLWhlYWRlci1jb2xvcjogYmxhY2s7XG4gICAgLS1oZWFkZXItc3VidGl0bGUtY29sb3I6IGdyZXk7XG4gICAgLS1oZWFkZXItYm9yZGVyLWNvbG9yOiAjZWVlO1xuICAgIC0tY29udGVudC1iZy1jb2xvcjogd2hpdGU7XG4gICAgLS1jb250ZW50LXRleHQtY29sb3I6ICM4ODg7XG4gICAgLS1jYXJkLXRpdGxlLWNvbG9yOiB3aGl0ZTtcbiAgICAtLWNhcmQtc3VidGl0bGUtY29sb3I6IHdoaXRlO1xuICAgIC0tY2FyZC1iYW5uZXItY29sb3I6IGJsYWNrO1xuICAgIC0tY2FyZC1iYW5uZXItY2F0ZWdvcnktY29sb3I6IGdyZXk7XG4gICAgLS1jYXJkLXN1bW1hcnktYmctY29sb3I6ICN7JGdyZXl9O1xuICAgIC0tY2hpcC1jb2xvcjogI3skYXBwbGUtYmx1ZX07XG4gICAgLS1jYXJkLXNjcmVlbnNob3QtYmFubmVyLWNvbG9yOiB2YXIoLS1jb250ZW50LXRleHQtY29sb3IpO1xuICAgIC0tY2FyZC1zY3JlZW5zaG90LWJhbm5lci1iZy1jb2xvcjogIzAwMDE7XG4gICAgLS1jYXJkLXN1bW1hcnktdGl0bGUtY29sb3I6IGJsYWNrO1xuICAgIC0tY2FyZC1jYXRlZ29yeS1jb2xvcjogcmdiYSgyNTUsMjU1LDI1NSwwLjUpO1xufVxuYXBwLWNhcmQtY29udGFpbmVye1xuICAgIGhlaWdodDogMTAwdmg7XG4gICAgd2lkdGg6IDEwMHZ3O1xufVxuQG1lZGlhIChwcmVmZXJzLWNvbG9yLXNjaGVtZTogZGFyaykge1xuICAgIDpob3N0e1xuICAgICAgICAtLWJvZHktYmctY29sb3I6IGJsYWNrO1xuICAgICAgICAtLWhlYWRlci1jb2xvcjogd2hpdGU7XG4gICAgICAgIC0taGVhZGVyLXN1YnRpdGxlLWNvbG9yOiB2YXIoLS1jYXJkLWNhdGVnb3J5LWNvbG9yKTtcbiAgICAgICAgLS1oZWFkZXItYm9yZGVyLWNvbG9yOiAjMzMzO1xuICAgICAgICAtLWNvbnRlbnQtYmctY29sb3I6IHJnYigyOCwyOCwzMCk7XG4gICAgICAgIC8vIC0tY29udGVudC10ZXh0LWNvbG9yOiB3aGl0ZTtcbiAgICAgICAgLy8gLS1jYXJkLXRpdGxlLWNvbG9yOiB3aGl0ZTtcbiAgICAgICAgLy8gLS1jYXJkLXN1YnRpdGxlLWNvbG9yOiB3aGl0ZTtcbiAgICAgICAgLS1jYXJkLXN1bW1hcnktdGl0bGUtY29sb3I6IHdoaXRlO1xuICAgICAgICAtLWNhcmQtc3VtbWFyeS1iZy1jb2xvcjogcmdiKDcyLDcyLDc0KTtcbiAgICAgICAgLS1jYXJkLWJhbm5lci1jb2xvcjogd2hpdGU7XG4gICAgICAgIC0tY2FyZC1iYW5uZXItY2F0ZWdvcnktY29sb3I6IHZhcigtLWNhcmQtY2F0ZWdvcnktY29sb3IpO1xuICAgICAgICAtLWNhcmQtc2NyZWVuc2hvdC1iYW5uZXItYmctY29sb3I6IHJnYig1OCw1OCw2MCk7XG4gICAgICAgIFxuICAgIH1cbiAgIFxufSIsIjpob3N0IHtcbiAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgc2Fucy1zZXJpZjtcbiAgLS1ib2R5LWJnLWNvbG9yOiB3aGl0ZTtcbiAgLS1oZWFkZXItY29sb3I6IGJsYWNrO1xuICAtLWhlYWRlci1zdWJ0aXRsZS1jb2xvcjogZ3JleTtcbiAgLS1oZWFkZXItYm9yZGVyLWNvbG9yOiAjZWVlO1xuICAtLWNvbnRlbnQtYmctY29sb3I6IHdoaXRlO1xuICAtLWNvbnRlbnQtdGV4dC1jb2xvcjogIzg4ODtcbiAgLS1jYXJkLXRpdGxlLWNvbG9yOiB3aGl0ZTtcbiAgLS1jYXJkLXN1YnRpdGxlLWNvbG9yOiB3aGl0ZTtcbiAgLS1jYXJkLWJhbm5lci1jb2xvcjogYmxhY2s7XG4gIC0tY2FyZC1iYW5uZXItY2F0ZWdvcnktY29sb3I6IGdyZXk7XG4gIC0tY2FyZC1zdW1tYXJ5LWJnLWNvbG9yOiAjMDAwMTtcbiAgLS1jaGlwLWNvbG9yOiAjMDA3YWZmO1xuICAtLWNhcmQtc2NyZWVuc2hvdC1iYW5uZXItY29sb3I6IHZhcigtLWNvbnRlbnQtdGV4dC1jb2xvcik7XG4gIC0tY2FyZC1zY3JlZW5zaG90LWJhbm5lci1iZy1jb2xvcjogIzAwMDE7XG4gIC0tY2FyZC1zdW1tYXJ5LXRpdGxlLWNvbG9yOiBibGFjaztcbiAgLS1jYXJkLWNhdGVnb3J5LWNvbG9yOiByZ2JhKDI1NSwyNTUsMjU1LDAuNSk7XG59XG5cbmFwcC1jYXJkLWNvbnRhaW5lciB7XG4gIGhlaWdodDogMTAwdmg7XG4gIHdpZHRoOiAxMDB2dztcbn1cblxuQG1lZGlhIChwcmVmZXJzLWNvbG9yLXNjaGVtZTogZGFyaykge1xuICA6aG9zdCB7XG4gICAgLS1ib2R5LWJnLWNvbG9yOiBibGFjaztcbiAgICAtLWhlYWRlci1jb2xvcjogd2hpdGU7XG4gICAgLS1oZWFkZXItc3VidGl0bGUtY29sb3I6IHZhcigtLWNhcmQtY2F0ZWdvcnktY29sb3IpO1xuICAgIC0taGVhZGVyLWJvcmRlci1jb2xvcjogIzMzMztcbiAgICAtLWNvbnRlbnQtYmctY29sb3I6IHJnYigyOCwyOCwzMCk7XG4gICAgLS1jYXJkLXN1bW1hcnktdGl0bGUtY29sb3I6IHdoaXRlO1xuICAgIC0tY2FyZC1zdW1tYXJ5LWJnLWNvbG9yOiByZ2IoNzIsNzIsNzQpO1xuICAgIC0tY2FyZC1iYW5uZXItY29sb3I6IHdoaXRlO1xuICAgIC0tY2FyZC1iYW5uZXItY2F0ZWdvcnktY29sb3I6IHZhcigtLWNhcmQtY2F0ZWdvcnktY29sb3IpO1xuICAgIC0tY2FyZC1zY3JlZW5zaG90LWJhbm5lci1iZy1jb2xvcjogcmdiKDU4LDU4LDYwKTtcbiAgfVxufSJdfQ== */"] });
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
var _c9 = [3, "ngStyle", "category", "title", "subtitle", "bgImage", "showBanner", "cardHeight", "expanded", "focused", "canClose", "click", "close", 4, "ngFor", "ngForOf"];
var _c10 = [1, "backdrop", 3, "ngStyle", "click"];
var _c11 = [1, "footer", 3, "ngStyle"];
var _c12 = [3, "ngStyle", "category", "title", "subtitle", "bgImage", "showBanner", "cardHeight", "expanded", "canClose", "click", "close"];
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
var _c29 = ["autoplay", "", "loop", "", "playsinline", "", 3, "muted", 4, "ngIf"];
function CardContainerComponent_app_card_11_ng_container_2_div_3_img_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", _c23);
} if (rf & 2) {
    var item_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", item_r11.sourceUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
var _c30 = ["autoplay", "", "loop", "", "playsinline", "", 3, "muted"];
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
        } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgStyle"], _card_card_component__WEBPACK_IMPORTED_MODULE_6__["CardComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"]], styles: [".container[_ngcontent-%COMP%] {\n  width: 100vw;\n  height: 100vh;\n  overflow: scroll;\n  position: relative;\n  background: var(--body-bg-color);\n}\n.container[_ngcontent-%COMP%]:before {\n  content: \"\";\n  position: absolute;\n  display: block;\n  height: 100%;\n  width: 100%;\n  top: 0;\n  left: 0;\n  z-index: 998;\n  pointer-events: none;\n  -webkit-transition: z-index 0ms linear 800ms, -webkit-backdrop-filter 600ms linear;\n  transition: z-index 0ms linear 800ms, -webkit-backdrop-filter 600ms linear;\n  transition: z-index 0ms linear 800ms, backdrop-filter 600ms linear;\n  transition: z-index 0ms linear 800ms, backdrop-filter 600ms linear, -webkit-backdrop-filter 600ms linear;\n}\n.header[_ngcontent-%COMP%] {\n  color: var(--header-color);\n  margin: 1rem auto;\n  border-bottom: thin solid var(--header-border-color);\n  max-width: 930px;\n}\n.header[_ngcontent-%COMP%]   .subtitle[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  color: var(--header-subtitle-color);\n  text-transform: uppercase;\n  font-weight: 500;\n}\n.header[_ngcontent-%COMP%]   .header-title[_ngcontent-%COMP%] {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n}\n.header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin-bottom: 0.3rem;\n  margin-top: 0.2rem;\n}\n.header[_ngcontent-%COMP%]   .profile[_ngcontent-%COMP%] {\n  height: 2.5rem;\n  width: 2.5rem;\n  float: right;\n  border-radius: 1000em;\n  overflow: hidden;\n  margin: 0.2rem;\n  margin-right: 0;\n}\n.header[_ngcontent-%COMP%]   .profile[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  -o-object-fit: contain;\n     object-fit: contain;\n}\n.footer[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 100%;\n  height: 10rem;\n  margin-bottom: 3rem;\n}\napp-card[_ngcontent-%COMP%] {\n  position: absolute;\n  -webkit-transform: scale(1);\n          transform: scale(1);\n  -webkit-transition-property: top, left, width, margin-top, border-radius, max-height, -webkit-transform;\n  transition-property: top, left, width, margin-top, border-radius, max-height, -webkit-transform;\n  transition-property: top, left, width, margin-top, transform, border-radius, max-height;\n  transition-property: top, left, width, margin-top, transform, border-radius, max-height, -webkit-transform;\n  -webkit-transition-duration: 0.6s, 0.6s, 0.6s, 0.6s, 0.6s, 150ms, 400ms, 0.6s;\n          transition-duration: 0.6s, 0.6s, 0.6s, 0.6s, 0.6s, 150ms, 400ms, 0.6s;\n  -webkit-transition-timing-function: cubic-bezier(0.51, -0.07, 0, 1.4), cubic-bezier(0.51, -0.07, 0, 1.4), cubic-bezier(0.51, -0.07, 0, 1.4), cubic-bezier(0.51, -0.07, 0, 1.4), ease-in-out, cubic-bezier(0.51, -0.07, 0, 1.4), ease-in-out;\n          transition-timing-function: cubic-bezier(0.51, -0.07, 0, 1.4), cubic-bezier(0.51, -0.07, 0, 1.4), cubic-bezier(0.51, -0.07, 0, 1.4), cubic-bezier(0.51, -0.07, 0, 1.4), ease-in-out, cubic-bezier(0.51, -0.07, 0, 1.4), ease-in-out;\n  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);\n  overflow: hidden;\n}\napp-card[_ngcontent-%COMP%]:hover, app-card[_ngcontent-%COMP%]:active {\n  -webkit-transform: scale(0.97);\n          transform: scale(0.97);\n}\napp-card[_ngcontent-%COMP%]:last-of-type {\n  margin-bottom: 3rem;\n}\napp-card.focused[_ngcontent-%COMP%] {\n  margin-top: 0;\n  overflow: scroll;\n  -ms-scroll-chaining: none;\n      overscroll-behavior: none;\n  max-height: 100vh;\n  border-radius: 16px 16px 0 0;\n  -webkit-transform: scale(1);\n          transform: scale(1);\n}\napp-card.focused[_ngcontent-%COMP%]:hover, app-card.focused[_ngcontent-%COMP%]:active {\n  -webkit-transform: scale(1);\n          transform: scale(1);\n}\n@media only screen and (max-width: 600px) {\n  .header[_ngcontent-%COMP%] {\n    border-bottom: none;\n  }\n\n  app-card.focused[_ngcontent-%COMP%] {\n    border-radius: 0px;\n  }\n}\n@media only screen and (max-width: 1000px) {\n  .header[_ngcontent-%COMP%] {\n    margin: 1rem 1.25rem;\n  }\n}\n.backdrop[_ngcontent-%COMP%] {\n  position: absolute;\n  content: \"\";\n  z-index: 997;\n  -webkit-backdrop-filter: blur(20px);\n          backdrop-filter: blur(20px);\n  pointer-events: none;\n}\n.backdrop.focused[_ngcontent-%COMP%] {\n  pointer-events: all;\n}\n.card-content[_ngcontent-%COMP%] {\n  padding-top: 1.5rem;\n  padding-bottom: 6rem;\n}\n.body-screenshot-container[_ngcontent-%COMP%], .body-text-container[_ngcontent-%COMP%], .body-summary-container[_ngcontent-%COMP%] {\n  margin: 1.5rem;\n  margin-top: 2rem;\n  font-size: 1.3rem;\n  color: var(--content-text-color);\n  font-weight: 300;\n}\n.body-video-container[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.body-video-container[_ngcontent-%COMP%]   video[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.body-video-container[_ngcontent-%COMP%]   video[poster][_ngcontent-%COMP%] {\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n.body-video-container[_ngcontent-%COMP%]   iframe[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.body-image-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  -o-object-fit: contain;\n     object-fit: contain;\n  width: 100%;\n}\n.body-screenshot-container[_ngcontent-%COMP%]   .screenshot[_ngcontent-%COMP%] {\n  border: 1px solid var(--card-screenshot-banner-bg-color);\n  border-radius: 0.5rem;\n  overflow: hidden;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  max-width: -webkit-fit-content;\n  max-width: -moz-fit-content;\n  max-width: fit-content;\n  max-width: -webkit-fill-available;\n  margin: auto;\n  -webkit-mask-image: -webkit-radial-gradient(white, black);\n}\n.body-screenshot-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%], .body-screenshot-container[_ngcontent-%COMP%]   video[_ngcontent-%COMP%] {\n  width: 100%;\n  -o-object-fit: contain;\n     object-fit: contain;\n}\n.body-screenshot-container[_ngcontent-%COMP%]   .banner[_ngcontent-%COMP%] {\n  margin-top: -5px;\n  background: var(--card-screenshot-banner-bg-color);\n  padding: 1rem 1.5rem;\n  text-align: start;\n  font-size: 0.8em;\n  color: var(--card-screenshot-banner-color);\n}\n.body-summary-container[_ngcontent-%COMP%] {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-align: center;\n          align-items: center;\n  background: var(--card-summary-bg-color);\n  padding: 3rem;\n  margin: 1.5rem 0;\n}\n.body-summary-container[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  margin-bottom: 0.8rem;\n}\n.body-summary-container[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  color: var(--card-summary-title-color);\n  font-size: 1.8rem;\n}\n.body-summary-container[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n  font-weight: 400;\n  font-size: 1rem;\n}\n.body-summary-container[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  height: 64px;\n  width: 64px;\n  border-radius: 1rem;\n}\n.body-summary-container[_ngcontent-%COMP%]   .link[_ngcontent-%COMP%] {\n  border-radius: 100em;\n  background: var(--chip-color);\n  font-weight: bold;\n  padding: 0.5rem 1.5rem;\n  font-size: 1rem;\n}\n.body-summary-container[_ngcontent-%COMP%]   .link[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: white;\n  text-decoration: none;\n  text-transform: uppercase;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qYWNrcGVyc29uYWwvRGV2ZWxvcG1lbnQvYXBwLXN0b3JlLWN2L3NyYy9hcHAvY29tcG9uZW50cy9jYXJkLWNvbnRhaW5lci9jYXJkLWNvbnRhaW5lci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9jYXJkLWNvbnRhaW5lci9jYXJkLWNvbnRhaW5lci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNJLFlBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdDQUFBO0FDREo7QURFSTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0VBQ0Esa0ZBQUE7RUFBQSwwRUFBQTtFQUFBLGtFQUFBO0VBQUEsd0dBQUE7QUNBUjtBRFFBO0VBQ0ksMEJBQUE7RUFDQSxpQkFBQTtFQUNBLG9EQUFBO0VBQ0EsZ0JBQUE7QUNOSjtBRE9JO0VBQ0ksaUJBQUE7RUFDQSxtQ0FBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7QUNMUjtBRE9JO0VBQ0ksb0JBQUE7RUFBQSxhQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtFQUNBLHlCQUFBO1VBQUEsOEJBQUE7QUNMUjtBRE9JO0VBQ0kscUJBQUE7RUFDQSxrQkFBQTtBQ0xSO0FET0k7RUFFSSxjQURPO0VBRVAsYUFGTztFQUdQLFlBQUE7RUFDQSxxQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7QUNOUjtBRE9RO0VBQ0ksV0FBQTtFQUNBLHNCQUFBO0tBQUEsbUJBQUE7QUNMWjtBRFVBO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FDUEo7QURVQTtFQUNJLGtCQUFBO0VBRUEsMkJBQUE7VUFBQSxtQkFBQTtFQUlBLHVHQUFBO0VBQUEsK0ZBQUE7RUFBQSx1RkFBQTtFQUFBLDBHQUFBO0VBQ0EsNkVBQUE7VUFBQSxxRUFBQTtFQUNBLDJPQUFBO1VBQUEsbU9BQUE7RUFFQSx5Q0FBQTtFQUVBLGdCQUFBO0FDYko7QURjSztFQUNHLDhCQUFBO1VBQUEsc0JBQUE7QUNaUjtBRGNJO0VBQ0ksbUJBQUE7QUNaUjtBRGtCQTtFQUNJLGFBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO01BQUEseUJBQUE7RUFDQSxpQkFBQTtFQUVBLDRCQUFBO0VBQ0EsMkJBQUE7VUFBQSxtQkFBQTtBQ2hCSjtBRGlCSTtFQUNJLDJCQUFBO1VBQUEsbUJBQUE7QUNmUjtBRGtCQTtFQUNJO0lBQ0ksbUJBQUE7RUNmTjs7RURpQkU7SUFDSSxrQkFBQTtFQ2ROO0FBQ0Y7QURpQkE7RUFDSTtJQUNJLG9CQUFBO0VDZk47QUFDRjtBRG9CQTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxtQ0FBQTtVQUFBLDJCQUFBO0VBQ0Esb0JBQUE7QUNsQko7QURtQkk7RUFDSSxtQkFBQTtBQ2pCUjtBRHFCQTtFQUNJLG1CQUFBO0VBQ0Esb0JBQUE7QUNsQko7QURvQkE7RUFDSSxjQUFBO0VBQ0EsZ0JBQUE7RUFFQSxpQkFBQTtFQUNBLGdDQUFBO0VBQ0EsZ0JBQUE7QUNsQko7QURxQkE7RUFDSSxXQUFBO0FDbEJKO0FEbUJJO0VBQ0ksV0FBQTtBQ2pCUjtBRG1CSTtFQUNJLG9CQUFBO0tBQUEsaUJBQUE7QUNqQlI7QURtQkk7RUFDSSxXQUFBO0FDakJSO0FEc0JJO0VBQ0ksc0JBQUE7S0FBQSxtQkFBQTtFQUNBLFdBQUE7QUNuQlI7QUR1Qkk7RUFFSSx3REFBQTtFQUNBLHFCQUFBO0VBQ0EsZ0JBQUE7RUFDQSwwQkFBQTtFQUFBLHVCQUFBO0VBQUEsa0JBQUE7RUFDQSw4QkFBQTtFQUFBLDJCQUFBO0VBQUEsc0JBQUE7RUFDQSxpQ0FBQTtFQUNBLFlBQUE7RUFDQSx5REFBQTtBQ3JCUjtBRHVCSTtFQUVJLFdBQUE7RUFDQSxzQkFBQTtLQUFBLG1CQUFBO0FDdEJSO0FEd0JJO0VBQ0ksZ0JBQUE7RUFDQSxrREFBQTtFQUNBLG9CQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLDBDQUFBO0FDdEJSO0FEMEJBO0VBQ0ksb0JBQUE7RUFBQSxhQUFBO0VBQ0EsNEJBQUE7RUFBQSw2QkFBQTtVQUFBLHNCQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtFQUNBLHdDQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0FDdkJKO0FEd0JJO0VBQ0kscUJBQUE7QUN0QlI7QUR3Qkk7RUFDSSxzQ0FBQTtFQUNBLGlCQUFBO0FDdEJSO0FEd0JJO0VBQ0ksZ0JBQUE7RUFDQSxlQUFBO0FDdEJSO0FEd0JJO0VBQ0ksWUFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtBQ3RCUjtBRHdCSTtFQUNJLG9CQUFBO0VBQ0EsNkJBQUE7RUFDQSxpQkFBQTtFQUNBLHNCQUFBO0VBQ0EsZUFBQTtBQ3RCUjtBRHVCUTtFQUNJLFlBQUE7RUFFQSxxQkFBQTtFQUNBLHlCQUFBO0FDdEJaIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9jYXJkLWNvbnRhaW5lci9jYXJkLWNvbnRhaW5lci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuXG4uY29udGFpbmVye1xuICAgIHdpZHRoOiAxMDB2dztcbiAgICBoZWlnaHQ6IDEwMHZoO1xuICAgIG92ZXJmbG93OiBzY3JvbGw7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGJhY2tncm91bmQ6IHZhcigtLWJvZHktYmctY29sb3IpO1xuICAgICY6YmVmb3Jle1xuICAgICAgICBjb250ZW50OiAnJztcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgdG9wOiAwO1xuICAgICAgICBsZWZ0OiAwO1xuICAgICAgICB6LWluZGV4OiA5OTg7XG4gICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgICAgICB0cmFuc2l0aW9uOiB6LWluZGV4IDBtcyBsaW5lYXIgODAwbXMsIGJhY2tkcm9wLWZpbHRlciAgNjAwbXMgbGluZWFyIDtcbiAgICB9XG4gICAgJi5mb2N1c2Vke1xuICAgIC8vIG92ZXJmbG93OiBoaWRkZW47XG4gICAgfVxuICAgIFxufVxuXG4uaGVhZGVye1xuICAgIGNvbG9yOiB2YXIoLS1oZWFkZXItY29sb3IpO1xuICAgIG1hcmdpbjogMXJlbSBhdXRvO1xuICAgIGJvcmRlci1ib3R0b206IHRoaW4gc29saWQgdmFyKC0taGVhZGVyLWJvcmRlci1jb2xvcik7XG4gICAgbWF4LXdpZHRoOiA5MzBweDtcbiAgICAuc3VidGl0bGV7XG4gICAgICAgIGZvbnQtc2l6ZTouOHJlbTtcbiAgICAgICAgY29sb3I6IHZhcigtLWhlYWRlci1zdWJ0aXRsZS1jb2xvcik7XG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgfVxuICAgIC5oZWFkZXItdGl0bGV7XG4gICAgICAgIGRpc3BsYXk6ZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIH1cbiAgICBoMXtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogLjNyZW07XG4gICAgICAgIG1hcmdpbi10b3A6LjJyZW07XG4gICAgfVxuICAgIC5wcm9maWxle1xuICAgICAgICAkc2l6ZTogMi41cmVtO1xuICAgICAgICBoZWlnaHQ6ICRzaXplO1xuICAgICAgICB3aWR0aDogJHNpemU7XG4gICAgICAgIGZsb2F0OnJpZ2h0O1xuICAgICAgICBib3JkZXItcmFkaXVzOiAxMDAwZW07XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgIG1hcmdpbjogLjJyZW07XG4gICAgICAgIG1hcmdpbi1yaWdodDogMDtcbiAgICAgICAgaW1ne1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBvYmplY3QtZml0OiBjb250YWluO1xuICAgICAgICB9XG4gICAgfVxufVxuXG4uZm9vdGVye1xuICAgIHBvc2l0aW9uOmFic29sdXRlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTByZW07XG4gICAgbWFyZ2luLWJvdHRvbTogM3JlbTtcbn1cblxuYXBwLWNhcmR7XG4gICAgcG9zaXRpb246YWJzb2x1dGU7XG5cbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xuICAgIFxuICAgICR0cmFuc2xhdGVEdXJhdGlvbjogLjZzO1xuICAgICR0cmFuc2xhdGVUaW1pbmc6IGN1YmljLWJlemllciguNTEsLTAuMDcsMCwxLjQpO1xuICAgIHRyYW5zaXRpb24tcHJvcGVydHk6IHRvcCwgbGVmdCwgd2lkdGgsIG1hcmdpbi10b3AsIHRyYW5zZm9ybSwgYm9yZGVyLXJhZGl1cywgbWF4LWhlaWdodDtcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAkdHJhbnNsYXRlRHVyYXRpb24sICR0cmFuc2xhdGVEdXJhdGlvbiwgJHRyYW5zbGF0ZUR1cmF0aW9uLCAkdHJhbnNsYXRlRHVyYXRpb24sICR0cmFuc2xhdGVEdXJhdGlvbiwgMTUwbXMsIDQwMG1zLCAkdHJhbnNsYXRlRHVyYXRpb247XG4gICAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246ICR0cmFuc2xhdGVUaW1pbmcsICR0cmFuc2xhdGVUaW1pbmcsICR0cmFuc2xhdGVUaW1pbmcsICR0cmFuc2xhdGVUaW1pbmcsIGVhc2UtaW4tb3V0LCAkdHJhbnNsYXRlVGltaW5nLCBlYXNlLWluLW91dDtcbiAgICBcbiAgICBib3gtc2hhZG93OiAwIDVweCAxNXB4IHJnYmEoMCwwLDAsMC4zKTtcblxuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICY6aG92ZXIsICY6YWN0aXZle1xuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDAuOTcpO1xuICAgIH1cbiAgICAmOmxhc3Qtb2YtdHlwZXtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogM3JlbTtcbiAgICB9XG59XG5cblxuXG5hcHAtY2FyZC5mb2N1c2Vke1xuICAgIG1hcmdpbi10b3A6IDA7XG4gICAgb3ZlcmZsb3c6IHNjcm9sbDtcbiAgICBvdmVyc2Nyb2xsLWJlaGF2aW9yOm5vbmU7XG4gICAgbWF4LWhlaWdodDogMTAwdmg7XG5cbiAgICBib3JkZXItcmFkaXVzOiAxNnB4IDE2cHggMCAwO1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XG4gICAgJjpob3ZlciwgJjphY3RpdmV7XG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XG4gICAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xuICAgIC5oZWFkZXIge1xuICAgICAgICBib3JkZXItYm90dG9tOiBub25lO1xuICAgIH1cbiAgICBhcHAtY2FyZC5mb2N1c2Vke1xuICAgICAgICBib3JkZXItcmFkaXVzOiAwcHg7XG4gICAgfVxufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMDBweCkge1xuICAgIC5oZWFkZXJ7XG4gICAgICAgIG1hcmdpbjogMXJlbSAxLjI1cmVtO1xuICAgIH1cbiAgIFxufVxuXG5cbi5iYWNrZHJvcHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgY29udGVudDogJyc7XG4gICAgei1pbmRleDogOTk3O1xuICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cigyMHB4KTtcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICAmLmZvY3VzZWR7XG4gICAgICAgIHBvaW50ZXItZXZlbnRzOiBhbGw7XG4gICAgfVxufVxuXG4uY2FyZC1jb250ZW50eyBcbiAgICBwYWRkaW5nLXRvcDogMS41cmVtO1xuICAgIHBhZGRpbmctYm90dG9tOiA2cmVtO1xufVxuLmJvZHktc2NyZWVuc2hvdC1jb250YWluZXIsIC5ib2R5LXRleHQtY29udGFpbmVyLCAgLmJvZHktc3VtbWFyeS1jb250YWluZXJ7XG4gICAgbWFyZ2luOiAxLjVyZW07XG4gICAgbWFyZ2luLXRvcDogMnJlbTtcblxuICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xuICAgIGNvbG9yOiB2YXIoLS1jb250ZW50LXRleHQtY29sb3IpO1xuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG59XG5cbi5ib2R5LXZpZGVvLWNvbnRhaW5lcntcbiAgICB3aWR0aDogMTAwJTtcbiAgICB2aWRlb3tcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfVxuICAgIHZpZGVvW3Bvc3Rlcl0ge1xuICAgICAgICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgICB9XG4gICAgaWZyYW1le1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICB9XG59XG5cbi5ib2R5LWltYWdlLWNvbnRhaW5lcntcbiAgICBpbWd7XG4gICAgICAgIG9iamVjdC1maXQ6IGNvbnRhaW47XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cbn1cbi5ib2R5LXNjcmVlbnNob3QtY29udGFpbmVye1xuICAgIC5zY3JlZW5zaG90e1xuICAgICAgIFxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1jYXJkLXNjcmVlbnNob3QtYmFubmVyLWJnLWNvbG9yKTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogLjVyZW07XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgIHdpZHRoOiBmaXQtY29udGVudDtcbiAgICAgICAgbWF4LXdpZHRoOiBmaXQtY29udGVudDtcbiAgICAgICAgbWF4LXdpZHRoOiAtd2Via2l0LWZpbGwtYXZhaWxhYmxlO1xuICAgICAgICBtYXJnaW46IGF1dG87XG4gICAgICAgIC13ZWJraXQtbWFzay1pbWFnZTogLXdlYmtpdC1yYWRpYWwtZ3JhZGllbnQod2hpdGUsIGJsYWNrKTtcbiAgICB9XG4gICAgaW1nLCB2aWRlb3tcbiAgICAgICAgLy8gaVBob25lIDggc2l6ZSBzY3JlZW5zaG90cyBvbmx5IGZvciB0aGUgbW9tZW50XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBvYmplY3QtZml0OiBjb250YWluO1xuICAgIH1cbiAgICAuYmFubmVye1xuICAgICAgICBtYXJnaW4tdG9wOiAtNXB4O1xuICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1jYXJkLXNjcmVlbnNob3QtYmFubmVyLWJnLWNvbG9yKTtcbiAgICAgICAgcGFkZGluZzogMXJlbSAxLjVyZW07XG4gICAgICAgIHRleHQtYWxpZ246IHN0YXJ0O1xuICAgICAgICBmb250LXNpemU6IC44ZW07XG4gICAgICAgIGNvbG9yOiB2YXIoLS1jYXJkLXNjcmVlbnNob3QtYmFubmVyLWNvbG9yKTtcbiAgICB9XG59XG5cbi5ib2R5LXN1bW1hcnktY29udGFpbmVye1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGJhY2tncm91bmQ6IHZhcigtLWNhcmQtc3VtbWFyeS1iZy1jb2xvcik7IFxuICAgIHBhZGRpbmc6IDNyZW07XG4gICAgbWFyZ2luOiAxLjVyZW0gMDtcbiAgICA+ICoge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAuOHJlbTtcbiAgICB9XG4gICAgLnRpdGxle1xuICAgICAgICBjb2xvcjogdmFyKC0tY2FyZC1zdW1tYXJ5LXRpdGxlLWNvbG9yKTtcbiAgICAgICAgZm9udC1zaXplOiAxLjhyZW07XG4gICAgfVxuICAgIC5jb250ZW50e1xuICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgICBmb250LXNpemU6IDFyZW07XG4gICAgfVxuICAgIC5pY29ue1xuICAgICAgICBoZWlnaHQ6IDY0cHg7XG4gICAgICAgIHdpZHRoOiA2NHB4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiAxcmVtO1xuICAgIH1cbiAgICAubGlua3tcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTAwZW07XG4gICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWNoaXAtY29sb3IpO1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgcGFkZGluZzogLjVyZW0gMS41cmVtO1xuICAgICAgICBmb250LXNpemU6IDFyZW07XG4gICAgICAgIGF7XG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XG5cbiAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgIH1cbiAgICB9XG59IiwiLmNvbnRhaW5lciB7XG4gIHdpZHRoOiAxMDB2dztcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgb3ZlcmZsb3c6IHNjcm9sbDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1ib2R5LWJnLWNvbG9yKTtcbn1cbi5jb250YWluZXI6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBkaXNwbGF5OiBibG9jaztcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB6LWluZGV4OiA5OTg7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICB0cmFuc2l0aW9uOiB6LWluZGV4IDBtcyBsaW5lYXIgODAwbXMsIGJhY2tkcm9wLWZpbHRlciA2MDBtcyBsaW5lYXI7XG59XG4uaGVhZGVyIHtcbiAgY29sb3I6IHZhcigtLWhlYWRlci1jb2xvcik7XG4gIG1hcmdpbjogMXJlbSBhdXRvO1xuICBib3JkZXItYm90dG9tOiB0aGluIHNvbGlkIHZhcigtLWhlYWRlci1ib3JkZXItY29sb3IpO1xuICBtYXgtd2lkdGg6IDkzMHB4O1xufVxuLmhlYWRlciAuc3VidGl0bGUge1xuICBmb250LXNpemU6IDAuOHJlbTtcbiAgY29sb3I6IHZhcigtLWhlYWRlci1zdWJ0aXRsZS1jb2xvcik7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG4uaGVhZGVyIC5oZWFkZXItdGl0bGUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG4uaGVhZGVyIGgxIHtcbiAgbWFyZ2luLWJvdHRvbTogMC4zcmVtO1xuICBtYXJnaW4tdG9wOiAwLjJyZW07XG59XG4uaGVhZGVyIC5wcm9maWxlIHtcbiAgaGVpZ2h0OiAyLjVyZW07XG4gIHdpZHRoOiAyLjVyZW07XG4gIGZsb2F0OiByaWdodDtcbiAgYm9yZGVyLXJhZGl1czogMTAwMGVtO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBtYXJnaW46IDAuMnJlbTtcbiAgbWFyZ2luLXJpZ2h0OiAwO1xufVxuLmhlYWRlciAucHJvZmlsZSBpbWcge1xuICB3aWR0aDogMTAwJTtcbiAgb2JqZWN0LWZpdDogY29udGFpbjtcbn1cblxuLmZvb3RlciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTByZW07XG4gIG1hcmdpbi1ib3R0b206IDNyZW07XG59XG5cbmFwcC1jYXJkIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xuICB0cmFuc2l0aW9uLXByb3BlcnR5OiB0b3AsIGxlZnQsIHdpZHRoLCBtYXJnaW4tdG9wLCB0cmFuc2Zvcm0sIGJvcmRlci1yYWRpdXMsIG1heC1oZWlnaHQ7XG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDAuNnMsIDAuNnMsIDAuNnMsIDAuNnMsIDAuNnMsIDE1MG1zLCA0MDBtcywgMC42cztcbiAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjUxLCAtMC4wNywgMCwgMS40KSwgY3ViaWMtYmV6aWVyKDAuNTEsIC0wLjA3LCAwLCAxLjQpLCBjdWJpYy1iZXppZXIoMC41MSwgLTAuMDcsIDAsIDEuNCksIGN1YmljLWJlemllcigwLjUxLCAtMC4wNywgMCwgMS40KSwgZWFzZS1pbi1vdXQsIGN1YmljLWJlemllcigwLjUxLCAtMC4wNywgMCwgMS40KSwgZWFzZS1pbi1vdXQ7XG4gIGJveC1zaGFkb3c6IDAgNXB4IDE1cHggcmdiYSgwLCAwLCAwLCAwLjMpO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuYXBwLWNhcmQ6aG92ZXIsIGFwcC1jYXJkOmFjdGl2ZSB7XG4gIHRyYW5zZm9ybTogc2NhbGUoMC45Nyk7XG59XG5hcHAtY2FyZDpsYXN0LW9mLXR5cGUge1xuICBtYXJnaW4tYm90dG9tOiAzcmVtO1xufVxuXG5hcHAtY2FyZC5mb2N1c2VkIHtcbiAgbWFyZ2luLXRvcDogMDtcbiAgb3ZlcmZsb3c6IHNjcm9sbDtcbiAgb3ZlcnNjcm9sbC1iZWhhdmlvcjogbm9uZTtcbiAgbWF4LWhlaWdodDogMTAwdmg7XG4gIGJvcmRlci1yYWRpdXM6IDE2cHggMTZweCAwIDA7XG4gIHRyYW5zZm9ybTogc2NhbGUoMSk7XG59XG5hcHAtY2FyZC5mb2N1c2VkOmhvdmVyLCBhcHAtY2FyZC5mb2N1c2VkOmFjdGl2ZSB7XG4gIHRyYW5zZm9ybTogc2NhbGUoMSk7XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgLmhlYWRlciB7XG4gICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcbiAgfVxuXG4gIGFwcC1jYXJkLmZvY3VzZWQge1xuICAgIGJvcmRlci1yYWRpdXM6IDBweDtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDAwcHgpIHtcbiAgLmhlYWRlciB7XG4gICAgbWFyZ2luOiAxcmVtIDEuMjVyZW07XG4gIH1cbn1cbi5iYWNrZHJvcCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgY29udGVudDogXCJcIjtcbiAgei1pbmRleDogOTk3O1xuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMjBweCk7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xufVxuLmJhY2tkcm9wLmZvY3VzZWQge1xuICBwb2ludGVyLWV2ZW50czogYWxsO1xufVxuXG4uY2FyZC1jb250ZW50IHtcbiAgcGFkZGluZy10b3A6IDEuNXJlbTtcbiAgcGFkZGluZy1ib3R0b206IDZyZW07XG59XG5cbi5ib2R5LXNjcmVlbnNob3QtY29udGFpbmVyLCAuYm9keS10ZXh0LWNvbnRhaW5lciwgLmJvZHktc3VtbWFyeS1jb250YWluZXIge1xuICBtYXJnaW46IDEuNXJlbTtcbiAgbWFyZ2luLXRvcDogMnJlbTtcbiAgZm9udC1zaXplOiAxLjNyZW07XG4gIGNvbG9yOiB2YXIoLS1jb250ZW50LXRleHQtY29sb3IpO1xuICBmb250LXdlaWdodDogMzAwO1xufVxuXG4uYm9keS12aWRlby1jb250YWluZXIge1xuICB3aWR0aDogMTAwJTtcbn1cbi5ib2R5LXZpZGVvLWNvbnRhaW5lciB2aWRlbyB7XG4gIHdpZHRoOiAxMDAlO1xufVxuLmJvZHktdmlkZW8tY29udGFpbmVyIHZpZGVvW3Bvc3Rlcl0ge1xuICBvYmplY3QtZml0OiBjb3Zlcjtcbn1cbi5ib2R5LXZpZGVvLWNvbnRhaW5lciBpZnJhbWUge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmJvZHktaW1hZ2UtY29udGFpbmVyIGltZyB7XG4gIG9iamVjdC1maXQ6IGNvbnRhaW47XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uYm9keS1zY3JlZW5zaG90LWNvbnRhaW5lciAuc2NyZWVuc2hvdCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWNhcmQtc2NyZWVuc2hvdC1iYW5uZXItYmctY29sb3IpO1xuICBib3JkZXItcmFkaXVzOiAwLjVyZW07XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHdpZHRoOiBmaXQtY29udGVudDtcbiAgbWF4LXdpZHRoOiBmaXQtY29udGVudDtcbiAgbWF4LXdpZHRoOiAtd2Via2l0LWZpbGwtYXZhaWxhYmxlO1xuICBtYXJnaW46IGF1dG87XG4gIC13ZWJraXQtbWFzay1pbWFnZTogLXdlYmtpdC1yYWRpYWwtZ3JhZGllbnQod2hpdGUsIGJsYWNrKTtcbn1cbi5ib2R5LXNjcmVlbnNob3QtY29udGFpbmVyIGltZywgLmJvZHktc2NyZWVuc2hvdC1jb250YWluZXIgdmlkZW8ge1xuICB3aWR0aDogMTAwJTtcbiAgb2JqZWN0LWZpdDogY29udGFpbjtcbn1cbi5ib2R5LXNjcmVlbnNob3QtY29udGFpbmVyIC5iYW5uZXIge1xuICBtYXJnaW4tdG9wOiAtNXB4O1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1jYXJkLXNjcmVlbnNob3QtYmFubmVyLWJnLWNvbG9yKTtcbiAgcGFkZGluZzogMXJlbSAxLjVyZW07XG4gIHRleHQtYWxpZ246IHN0YXJ0O1xuICBmb250LXNpemU6IDAuOGVtO1xuICBjb2xvcjogdmFyKC0tY2FyZC1zY3JlZW5zaG90LWJhbm5lci1jb2xvcik7XG59XG5cbi5ib2R5LXN1bW1hcnktY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYmFja2dyb3VuZDogdmFyKC0tY2FyZC1zdW1tYXJ5LWJnLWNvbG9yKTtcbiAgcGFkZGluZzogM3JlbTtcbiAgbWFyZ2luOiAxLjVyZW0gMDtcbn1cbi5ib2R5LXN1bW1hcnktY29udGFpbmVyID4gKiB7XG4gIG1hcmdpbi1ib3R0b206IDAuOHJlbTtcbn1cbi5ib2R5LXN1bW1hcnktY29udGFpbmVyIC50aXRsZSB7XG4gIGNvbG9yOiB2YXIoLS1jYXJkLXN1bW1hcnktdGl0bGUtY29sb3IpO1xuICBmb250LXNpemU6IDEuOHJlbTtcbn1cbi5ib2R5LXN1bW1hcnktY29udGFpbmVyIC5jb250ZW50IHtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgZm9udC1zaXplOiAxcmVtO1xufVxuLmJvZHktc3VtbWFyeS1jb250YWluZXIgLmljb24ge1xuICBoZWlnaHQ6IDY0cHg7XG4gIHdpZHRoOiA2NHB4O1xuICBib3JkZXItcmFkaXVzOiAxcmVtO1xufVxuLmJvZHktc3VtbWFyeS1jb250YWluZXIgLmxpbmsge1xuICBib3JkZXItcmFkaXVzOiAxMDBlbTtcbiAgYmFja2dyb3VuZDogdmFyKC0tY2hpcC1jb2xvcik7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBwYWRkaW5nOiAwLjVyZW0gMS41cmVtO1xuICBmb250LXNpemU6IDFyZW07XG59XG4uYm9keS1zdW1tYXJ5LWNvbnRhaW5lciAubGluayBhIHtcbiAgY29sb3I6IHdoaXRlO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59Il19 */"], data: { animation: [
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
        } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"]], styles: ["[_nghost-%COMP%] {\n  display: block;\n  -webkit-transition: width 0.5s ease-in-out;\n  transition: width 0.5s ease-in-out;\n  overflow: hidden;\n  border-radius: 16px;\n}\n\n.container[_ngcontent-%COMP%] {\n  overflow: hidden;\n  position: relative;\n}\n\n.container[_ngcontent-%COMP%]   .close-button[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 1rem;\n  right: 1rem;\n  z-index: 1;\n  background: rgba(0, 0, 0, 0.2);\n  border-radius: 100em;\n  width: 2rem;\n  height: 2rem;\n}\n\n.container[_ngcontent-%COMP%]   .close-button[_ngcontent-%COMP%]   .line-1[_ngcontent-%COMP%], .container[_ngcontent-%COMP%]   .close-button[_ngcontent-%COMP%]   .line-2[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0.95rem;\n  left: 0.35rem;\n  width: 1.3rem;\n  height: 1.3rem;\n  border-top: 2px solid #eee;\n  -webkit-transform-origin: 51% 5%;\n          transform-origin: 51% 5%;\n}\n\n.container[_ngcontent-%COMP%]   .close-button[_ngcontent-%COMP%]   .line-1[_ngcontent-%COMP%] {\n  -webkit-transform: rotate(45deg);\n          transform: rotate(45deg);\n}\n\n.container[_ngcontent-%COMP%]   .close-button[_ngcontent-%COMP%]   .line-2[_ngcontent-%COMP%] {\n  -webkit-transform: rotate(-45deg);\n          transform: rotate(-45deg);\n}\n\n.container[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%] {\n  border-radius: 16px;\n  -webkit-transition-property: border-radius, min-height;\n  transition-property: border-radius, min-height;\n  -webkit-transition-duration: 150ms, 600ms;\n          transition-duration: 150ms, 600ms;\n  -webkit-transition-timing-function: ease-in-out, cubic-bezier(0.13, 0.29, 0.11, 1.38);\n          transition-timing-function: ease-in-out, cubic-bezier(0.13, 0.29, 0.11, 1.38);\n  position: relative;\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-position: center;\n}\n\n.container[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .banner-video[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 100%;\n  position: absolute;\n  -o-object-fit: cover;\n     object-fit: cover;\n  z-index: -1;\n}\n\n.container[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .banner[_ngcontent-%COMP%], .container[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .category[_ngcontent-%COMP%], .container[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%], .container[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .subtitle[_ngcontent-%COMP%] {\n  z-index: 1;\n}\n\n.container[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .category[_ngcontent-%COMP%], .container[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%], .container[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .subtitle[_ngcontent-%COMP%] {\n  padding: 1rem;\n  -webkit-transition: padding 200ms ease-in-out;\n  transition: padding 200ms ease-in-out;\n  opacity: 1;\n}\n\n.container[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .banner[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 0;\n  background: var(--content-bg-color);\n  width: 100%;\n}\n\n.container[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .banner[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%], .container[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .banner[_ngcontent-%COMP%]   .subtitle[_ngcontent-%COMP%] {\n  color: var(--card-banner-color);\n  text-shadow: none;\n}\n\n.container[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .banner[_ngcontent-%COMP%]   .category[_ngcontent-%COMP%] {\n  color: var(--card-banner-category-color);\n}\n\n.container[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .banner[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  padding: 0 1rem;\n}\n\n.container[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .banner[_ngcontent-%COMP%]   .subtitle[_ngcontent-%COMP%] {\n  position: initial;\n  font-size: 0.9rem;\n  padding-top: 0.5rem;\n  text-align: left;\n}\n\n.container[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .category[_ngcontent-%COMP%] {\n  text-transform: uppercase;\n  font-size: 0.8rem;\n  padding-bottom: 0.3rem;\n  font-weight: 500;\n  color: var(--card-category-color);\n  text-shadow: 0 0 5px rgba(0, 0, 0, 0.1);\n}\n\n.container[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  padding-top: 0;\n  font-size: 1.5rem;\n  font-weight: 600;\n  color: var(--card-title-color);\n  text-shadow: 0px 0 5px rgba(0, 0, 0, 0.3);\n}\n\n.container[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]:before {\n  content: \"\";\n  width: 100%;\n  height: 100%;\n  background: rgba(60, 60, 60, 0);\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: 0;\n}\n\n.container[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .subtitle[_ngcontent-%COMP%] {\n  position: absolute;\n  font-weight: 300;\n  bottom: 0;\n  right: 0;\n  text-align: end;\n  color: var(--card-subtitle-color);\n  max-height: 1000px;\n  -webkit-transition-property: opacity, max-height, padding;\n  transition-property: opacity, max-height, padding;\n  -webkit-transition-timing-function: ease-in-out, ease-in-out;\n          transition-timing-function: ease-in-out, ease-in-out;\n  -webkit-transition-duration: 300ms, 200ms;\n          transition-duration: 300ms, 200ms;\n  text-shadow: 0px 0 5px rgba(0, 0, 0, 0.3);\n}\n\n.container[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n  -webkit-transition: max-height 400ms ease-in-out;\n  transition: max-height 400ms ease-in-out;\n  max-height: 0px;\n  background: var(--content-bg-color);\n}\n\n.container.expanded[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%] {\n  border-radius: 0px;\n}\n\n.container.expanded[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .category[_ngcontent-%COMP%], .container.expanded[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%], .container.expanded[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .subtitle[_ngcontent-%COMP%] {\n  padding-left: 0.7rem;\n  padding-right: 0.7rem;\n}\n\n.container.expanded[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .banner[_ngcontent-%COMP%]   .category[_ngcontent-%COMP%], .container.expanded[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .banner[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  padding-left: 1.5rem;\n}\n\n.container.expanded[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .banner[_ngcontent-%COMP%]   .subtitle[_ngcontent-%COMP%] {\n  opacity: 0;\n  max-height: 0;\n  padding: 0;\n}\n\n.container.expanded[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n  max-height: 1000000px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qYWNrcGVyc29uYWwvRGV2ZWxvcG1lbnQvYXBwLXN0b3JlLWN2L3NyYy9hcHAvY29tcG9uZW50cy9jYXJkL2NhcmQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvY2FyZC9jYXJkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBQTtFQUNBLDBDQUFBO0VBQUEsa0NBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FDQ0Y7O0FESUE7RUFDRSxnQkFBQTtFQUVBLGtCQUFBO0FDRkY7O0FER0U7RUFDRSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtFQUNBLDhCQUFBO0VBQ0Esb0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQ0RKOztBREdJOztFQUdFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxhQUpPO0VBS1AsY0FMTztFQU1QLDBCQUFBO0VBQ0EsZ0NBQUE7VUFBQSx3QkFBQTtBQ0ZOOztBRElJO0VBQ0UsZ0NBQUE7VUFBQSx3QkFBQTtBQ0ZOOztBRElJO0VBQ0UsaUNBQUE7VUFBQSx5QkFBQTtBQ0ZOOztBREtFO0VBQ0UsbUJBQUE7RUFFQSxzREFBQTtFQUFBLDhDQUFBO0VBQ0EseUNBQUE7VUFBQSxpQ0FBQTtFQUNBLHFGQUFBO1VBQUEsNkVBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0EsNEJBQUE7RUFDQSwyQkFBQTtBQ0pKOztBREtJO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0tBQUEsaUJBQUE7RUFDQSxXQUFBO0FDSE47O0FES0k7RUFDRSxVQUFBO0FDSE47O0FETUk7OztFQUdFLGFBQUE7RUFDQSw2Q0FBQTtFQUFBLHFDQUFBO0VBQ0EsVUFBQTtBQ0pOOztBRE9JO0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0VBQ0EsbUNBQUE7RUFDQSxXQUFBO0FDTE47O0FETU07RUFDRSwrQkFBQTtFQUNBLGlCQUFBO0FDSlI7O0FETU07RUFDRSx3Q0FBQTtBQ0pSOztBRE1NO0VBQ0UsZUFBQTtBQ0pSOztBRE1NO0VBQ0UsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUNKUjs7QURPSTtFQUNFLHlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUNBQUE7RUFDQSx1Q0FBQTtBQ0xOOztBRE9JO0VBV0UsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSw4QkFBQTtFQUNBLHlDQUFBO0FDZk47O0FEQ007RUFDRSxXQUFBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSwrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxVQUFBO0FDQ1Y7O0FEUUk7RUFDRSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7RUFDQSxlQUFBO0VBQ0EsaUNBQUE7RUFDQSxrQkFBQTtFQUNBLHlEQUFBO0VBQUEsaURBQUE7RUFDQSw0REFBQTtVQUFBLG9EQUFBO0VBQ0EseUNBQUE7VUFBQSxpQ0FBQTtFQUNBLHlDQUFBO0FDTk47O0FEVUU7RUFDRSxnREFBQTtFQUFBLHdDQUFBO0VBQ0EsZUFBQTtFQUNBLG1DQUFBO0FDUko7O0FEWUk7RUFDRSxrQkFBQTtBQ1ZOOztBRFdNOzs7RUFHRSxvQkFBQTtFQUNBLHFCQUFBO0FDVFI7O0FEWVE7RUFFRSxvQkFBQTtBQ1hWOztBRGFRO0VBQ0UsVUFBQTtFQUNBLGFBQUE7RUFDQSxVQUFBO0FDWFY7O0FEZ0JJO0VBQ0UscUJBQUE7QUNkTiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY2FyZC9jYXJkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICBkaXNwbGF5OiBibG9jaztcbiAgdHJhbnNpdGlvbjogd2lkdGggMC41cyBlYXNlLWluLW91dDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgYm9yZGVyLXJhZGl1czogMTZweDtcblxuICA7XG59XG5cbi5jb250YWluZXIge1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICAvLyBtaW4taGVpZ2h0OiAxMDBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAuY2xvc2UtYnV0dG9uIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAxcmVtO1xuICAgIHJpZ2h0OiAxcmVtO1xuICAgIHotaW5kZXg6IDE7XG4gICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjIpO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwMGVtO1xuICAgIHdpZHRoOiAycmVtO1xuICAgIGhlaWdodDogMnJlbTtcblxuICAgIC5saW5lLTEsXG4gICAgLmxpbmUtMiB7XG4gICAgICAkc2l6ZTogMS4zcmVtO1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgdG9wOiAwLjk1cmVtO1xuICAgICAgbGVmdDogMC4zNXJlbTtcbiAgICAgIHdpZHRoOiAkc2l6ZTtcbiAgICAgIGhlaWdodDogJHNpemU7XG4gICAgICBib3JkZXItdG9wOiAycHggc29saWQgI2VlZTtcbiAgICAgIHRyYW5zZm9ybS1vcmlnaW46IDUxJSA1JTtcbiAgICB9XG4gICAgLmxpbmUtMSB7XG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XG4gICAgfVxuICAgIC5saW5lLTIge1xuICAgICAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcbiAgICB9XG4gIH1cbiAgLmhlYWRlciB7XG4gICAgYm9yZGVyLXJhZGl1czogMTZweDtcblxuICAgIHRyYW5zaXRpb24tcHJvcGVydHk6IGJvcmRlci1yYWRpdXMsIG1pbi1oZWlnaHQ7XG4gICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMTUwbXMsIDYwMG1zO1xuICAgIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluLW91dCwgY3ViaWMtYmV6aWVyKC4xMywuMjksLjExLDEuMzgpO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgIC5iYW5uZXItdmlkZW8ge1xuICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgICAgIHotaW5kZXg6IC0xO1xuICAgIH1cbiAgICAuYmFubmVyLCAuY2F0ZWdvcnksIC50aXRsZSwgLnN1YnRpdGxle1xuICAgICAgei1pbmRleDogMTtcbiAgICB9XG5cbiAgICAuY2F0ZWdvcnksXG4gICAgLnRpdGxlLFxuICAgIC5zdWJ0aXRsZSB7XG4gICAgICBwYWRkaW5nOiAxcmVtO1xuICAgICAgdHJhbnNpdGlvbjogcGFkZGluZyAyMDBtcyBlYXNlLWluLW91dDtcbiAgICAgIG9wYWNpdHk6IDE7XG4gICAgfVxuXG4gICAgLmJhbm5lcntcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIGJvdHRvbTogMDtcbiAgICAgIGJhY2tncm91bmQ6IHZhcigtLWNvbnRlbnQtYmctY29sb3IpO1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAudGl0bGUsLnN1YnRpdGxle1xuICAgICAgICBjb2xvcjogdmFyKC0tY2FyZC1iYW5uZXItY29sb3IpO1xuICAgICAgICB0ZXh0LXNoYWRvdzogbm9uZTtcbiAgICAgIH1cbiAgICAgIC5jYXRlZ29yeXtcbiAgICAgICAgY29sb3I6IHZhcigtLWNhcmQtYmFubmVyLWNhdGVnb3J5LWNvbG9yKTtcbiAgICAgIH1cbiAgICAgIC50aXRsZXtcbiAgICAgICAgcGFkZGluZzogMCAxcmVtO1xuICAgICAgfVxuICAgICAgLnN1YnRpdGxle1xuICAgICAgICBwb3NpdGlvbjogaW5pdGlhbDtcbiAgICAgICAgZm9udC1zaXplOiAwLjlyZW07XG4gICAgICAgIHBhZGRpbmctdG9wOiAwLjVyZW07XG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICB9XG4gICAgfVxuICAgIC5jYXRlZ29yeSB7XG4gICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgZm9udC1zaXplOiAwLjhyZW07XG4gICAgICBwYWRkaW5nLWJvdHRvbTogMC4zcmVtO1xuICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgIGNvbG9yOiB2YXIoLS1jYXJkLWNhdGVnb3J5LWNvbG9yKTtcbiAgICAgIHRleHQtc2hhZG93OiAwIDAgNXB4IHJnYmEoMCwwLDAsMC4xKVxuICAgIH1cbiAgICAudGl0bGUge1xuICAgICAgJjpiZWZvcmV7XG4gICAgICAgIGNvbnRlbnQ6ICcnO1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDYwLCA2MCwgNjAsIDApO1xuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICB6LWluZGV4OiAwO1xuICAgICAgfVxuICAgICAgcGFkZGluZy10b3A6IDA7XG4gICAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICBjb2xvcjogdmFyKC0tY2FyZC10aXRsZS1jb2xvcik7XG4gICAgICB0ZXh0LXNoYWRvdzogMHB4IDAgNXB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcbiAgICB9XG5cbiAgICAuc3VidGl0bGUge1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICAgIGJvdHRvbTogMDtcbiAgICAgIHJpZ2h0OiAwO1xuICAgICAgdGV4dC1hbGlnbjogZW5kO1xuICAgICAgY29sb3I6IHZhcigtLWNhcmQtc3VidGl0bGUtY29sb3IpO1xuICAgICAgbWF4LWhlaWdodDogMTAwMHB4O1xuICAgICAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogb3BhY2l0eSwgbWF4LWhlaWdodCwgcGFkZGluZztcbiAgICAgIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluLW91dCwgZWFzZS1pbi1vdXQ7XG4gICAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAzMDBtcywgMjAwbXM7XG4gICAgICB0ZXh0LXNoYWRvdzogMHB4IDAgNXB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcbiAgICB9XG4gICAgLy8gLXdlYmtpdC1tYXNrLWltYWdlOiAtd2Via2l0LXJhZGlhbC1ncmFkaWVudCh3aGl0ZSwgYmxhY2spO1xuICB9XG4gIC5jb250ZW50IHtcbiAgICB0cmFuc2l0aW9uOiBtYXgtaGVpZ2h0IDQwMG1zIGVhc2UtaW4tb3V0O1xuICAgIG1heC1oZWlnaHQ6IDBweDtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1jb250ZW50LWJnLWNvbG9yKTtcbiAgfVxuXG4gICYuZXhwYW5kZWQge1xuICAgIC5oZWFkZXIge1xuICAgICAgYm9yZGVyLXJhZGl1czogMHB4O1xuICAgICAgLmNhdGVnb3J5LFxuICAgICAgLnRpdGxlLFxuICAgICAgLnN1YnRpdGxlIHtcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAwLjdyZW07XG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDAuN3JlbTtcbiAgICAgIH1cbiAgICAgIC5iYW5uZXJ7XG4gICAgICAgIC5jYXRlZ29yeSwgLnRpdGxle1xuICAgICAgICAgIFxuICAgICAgICAgIHBhZGRpbmctbGVmdDogMS41cmVtO1xuICAgICAgICB9XG4gICAgICAgIC5zdWJ0aXRsZXtcbiAgICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICAgIG1heC1oZWlnaHQ6IDA7XG4gICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgLy8gbWluLWhlaWdodDogMTUwcHg7XG4gICAgfVxuICAgIC5jb250ZW50IHtcbiAgICAgIG1heC1oZWlnaHQ6IDEwMDAwMDBweDtcbiAgICB9XG4gIH1cbn1cbiIsIjpob3N0IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHRyYW5zaXRpb246IHdpZHRoIDAuNXMgZWFzZS1pbi1vdXQ7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGJvcmRlci1yYWRpdXM6IDE2cHg7XG59XG5cbi5jb250YWluZXIge1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uY29udGFpbmVyIC5jbG9zZS1idXR0b24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMXJlbTtcbiAgcmlnaHQ6IDFyZW07XG4gIHotaW5kZXg6IDE7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgYm9yZGVyLXJhZGl1czogMTAwZW07XG4gIHdpZHRoOiAycmVtO1xuICBoZWlnaHQ6IDJyZW07XG59XG4uY29udGFpbmVyIC5jbG9zZS1idXR0b24gLmxpbmUtMSxcbi5jb250YWluZXIgLmNsb3NlLWJ1dHRvbiAubGluZS0yIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDAuOTVyZW07XG4gIGxlZnQ6IDAuMzVyZW07XG4gIHdpZHRoOiAxLjNyZW07XG4gIGhlaWdodDogMS4zcmVtO1xuICBib3JkZXItdG9wOiAycHggc29saWQgI2VlZTtcbiAgdHJhbnNmb3JtLW9yaWdpbjogNTElIDUlO1xufVxuLmNvbnRhaW5lciAuY2xvc2UtYnV0dG9uIC5saW5lLTEge1xuICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XG59XG4uY29udGFpbmVyIC5jbG9zZS1idXR0b24gLmxpbmUtMiB7XG4gIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XG59XG4uY29udGFpbmVyIC5oZWFkZXIge1xuICBib3JkZXItcmFkaXVzOiAxNnB4O1xuICB0cmFuc2l0aW9uLXByb3BlcnR5OiBib3JkZXItcmFkaXVzLCBtaW4taGVpZ2h0O1xuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAxNTBtcywgNjAwbXM7XG4gIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluLW91dCwgY3ViaWMtYmV6aWVyKDAuMTMsIDAuMjksIDAuMTEsIDEuMzgpO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbn1cbi5jb250YWluZXIgLmhlYWRlciAuYmFubmVyLXZpZGVvIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgei1pbmRleDogLTE7XG59XG4uY29udGFpbmVyIC5oZWFkZXIgLmJhbm5lciwgLmNvbnRhaW5lciAuaGVhZGVyIC5jYXRlZ29yeSwgLmNvbnRhaW5lciAuaGVhZGVyIC50aXRsZSwgLmNvbnRhaW5lciAuaGVhZGVyIC5zdWJ0aXRsZSB7XG4gIHotaW5kZXg6IDE7XG59XG4uY29udGFpbmVyIC5oZWFkZXIgLmNhdGVnb3J5LFxuLmNvbnRhaW5lciAuaGVhZGVyIC50aXRsZSxcbi5jb250YWluZXIgLmhlYWRlciAuc3VidGl0bGUge1xuICBwYWRkaW5nOiAxcmVtO1xuICB0cmFuc2l0aW9uOiBwYWRkaW5nIDIwMG1zIGVhc2UtaW4tb3V0O1xuICBvcGFjaXR5OiAxO1xufVxuLmNvbnRhaW5lciAuaGVhZGVyIC5iYW5uZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMDtcbiAgYmFja2dyb3VuZDogdmFyKC0tY29udGVudC1iZy1jb2xvcik7XG4gIHdpZHRoOiAxMDAlO1xufVxuLmNvbnRhaW5lciAuaGVhZGVyIC5iYW5uZXIgLnRpdGxlLCAuY29udGFpbmVyIC5oZWFkZXIgLmJhbm5lciAuc3VidGl0bGUge1xuICBjb2xvcjogdmFyKC0tY2FyZC1iYW5uZXItY29sb3IpO1xuICB0ZXh0LXNoYWRvdzogbm9uZTtcbn1cbi5jb250YWluZXIgLmhlYWRlciAuYmFubmVyIC5jYXRlZ29yeSB7XG4gIGNvbG9yOiB2YXIoLS1jYXJkLWJhbm5lci1jYXRlZ29yeS1jb2xvcik7XG59XG4uY29udGFpbmVyIC5oZWFkZXIgLmJhbm5lciAudGl0bGUge1xuICBwYWRkaW5nOiAwIDFyZW07XG59XG4uY29udGFpbmVyIC5oZWFkZXIgLmJhbm5lciAuc3VidGl0bGUge1xuICBwb3NpdGlvbjogaW5pdGlhbDtcbiAgZm9udC1zaXplOiAwLjlyZW07XG4gIHBhZGRpbmctdG9wOiAwLjVyZW07XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG4uY29udGFpbmVyIC5oZWFkZXIgLmNhdGVnb3J5IHtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgZm9udC1zaXplOiAwLjhyZW07XG4gIHBhZGRpbmctYm90dG9tOiAwLjNyZW07XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGNvbG9yOiB2YXIoLS1jYXJkLWNhdGVnb3J5LWNvbG9yKTtcbiAgdGV4dC1zaGFkb3c6IDAgMCA1cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xufVxuLmNvbnRhaW5lciAuaGVhZGVyIC50aXRsZSB7XG4gIHBhZGRpbmctdG9wOiAwO1xuICBmb250LXNpemU6IDEuNXJlbTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgY29sb3I6IHZhcigtLWNhcmQtdGl0bGUtY29sb3IpO1xuICB0ZXh0LXNoYWRvdzogMHB4IDAgNXB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcbn1cbi5jb250YWluZXIgLmhlYWRlciAudGl0bGU6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgYmFja2dyb3VuZDogcmdiYSg2MCwgNjAsIDYwLCAwKTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHotaW5kZXg6IDA7XG59XG4uY29udGFpbmVyIC5oZWFkZXIgLnN1YnRpdGxlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBmb250LXdlaWdodDogMzAwO1xuICBib3R0b206IDA7XG4gIHJpZ2h0OiAwO1xuICB0ZXh0LWFsaWduOiBlbmQ7XG4gIGNvbG9yOiB2YXIoLS1jYXJkLXN1YnRpdGxlLWNvbG9yKTtcbiAgbWF4LWhlaWdodDogMTAwMHB4O1xuICB0cmFuc2l0aW9uLXByb3BlcnR5OiBvcGFjaXR5LCBtYXgtaGVpZ2h0LCBwYWRkaW5nO1xuICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbi1vdXQsIGVhc2UtaW4tb3V0O1xuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAzMDBtcywgMjAwbXM7XG4gIHRleHQtc2hhZG93OiAwcHggMCA1cHggcmdiYSgwLCAwLCAwLCAwLjMpO1xufVxuLmNvbnRhaW5lciAuY29udGVudCB7XG4gIHRyYW5zaXRpb246IG1heC1oZWlnaHQgNDAwbXMgZWFzZS1pbi1vdXQ7XG4gIG1heC1oZWlnaHQ6IDBweDtcbiAgYmFja2dyb3VuZDogdmFyKC0tY29udGVudC1iZy1jb2xvcik7XG59XG4uY29udGFpbmVyLmV4cGFuZGVkIC5oZWFkZXIge1xuICBib3JkZXItcmFkaXVzOiAwcHg7XG59XG4uY29udGFpbmVyLmV4cGFuZGVkIC5oZWFkZXIgLmNhdGVnb3J5LFxuLmNvbnRhaW5lci5leHBhbmRlZCAuaGVhZGVyIC50aXRsZSxcbi5jb250YWluZXIuZXhwYW5kZWQgLmhlYWRlciAuc3VidGl0bGUge1xuICBwYWRkaW5nLWxlZnQ6IDAuN3JlbTtcbiAgcGFkZGluZy1yaWdodDogMC43cmVtO1xufVxuLmNvbnRhaW5lci5leHBhbmRlZCAuaGVhZGVyIC5iYW5uZXIgLmNhdGVnb3J5LCAuY29udGFpbmVyLmV4cGFuZGVkIC5oZWFkZXIgLmJhbm5lciAudGl0bGUge1xuICBwYWRkaW5nLWxlZnQ6IDEuNXJlbTtcbn1cbi5jb250YWluZXIuZXhwYW5kZWQgLmhlYWRlciAuYmFubmVyIC5zdWJ0aXRsZSB7XG4gIG9wYWNpdHk6IDA7XG4gIG1heC1oZWlnaHQ6IDA7XG4gIHBhZGRpbmc6IDA7XG59XG4uY29udGFpbmVyLmV4cGFuZGVkIC5jb250ZW50IHtcbiAgbWF4LWhlaWdodDogMTAwMDAwMHB4O1xufSJdfQ== */"], data: { animation: [
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