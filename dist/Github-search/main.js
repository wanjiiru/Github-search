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
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div>\n    <app-navbar></app-navbar>\n</div>\n\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'GitHub Search';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _ngx_progressbar_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-progressbar/core */ "./node_modules/@ngx-progressbar/core/fesm5/ngx-progressbar-core.js");
/* harmony import */ var _ngx_progressbar_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-progressbar/http */ "./node_modules/@ngx-progressbar/http/fesm5/ngx-progressbar-http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _navigation_navbar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./navigation/navbar.component */ "./src/app/navigation/navbar.component.ts");
/* harmony import */ var _user_search_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./user/search.component */ "./src/app/user/search.component.ts");
/* harmony import */ var _repositories_repositories_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./repositories/repositories.component */ "./src/app/repositories/repositories.component.ts");
/* harmony import */ var _routing_routing_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./routing/routing.module */ "./src/app/routing/routing.module.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _search_form_search_form_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./search-form/search-form.component */ "./src/app/search-form/search-form.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _search_request_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./search-request.service */ "./src/app/search-request.service.ts");
/* harmony import */ var _upper_case_pipe__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./upper-case.pipe */ "./src/app/upper-case.pipe.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


// import {HttpClient} from '@angular/common/http';













var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _navigation_navbar_component__WEBPACK_IMPORTED_MODULE_6__["NavbarComponent"],
                _user_search_component__WEBPACK_IMPORTED_MODULE_7__["SearchComponent"],
                _repositories_repositories_component__WEBPACK_IMPORTED_MODULE_8__["RepositoriesComponent"],
                _search_form_search_form_component__WEBPACK_IMPORTED_MODULE_11__["SearchFormComponent"],
                _upper_case_pipe__WEBPACK_IMPORTED_MODULE_14__["UpperCasePipe"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _routing_routing_module__WEBPACK_IMPORTED_MODULE_9__["RoutingModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_10__["RouterModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormsModule"],
                _ngx_progressbar_core__WEBPACK_IMPORTED_MODULE_3__["NgProgressModule"].forRoot(),
                _ngx_progressbar_http__WEBPACK_IMPORTED_MODULE_4__["NgProgressHttpModule"],
                // HttpClient,
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"]
            ],
            providers: [_search_request_service__WEBPACK_IMPORTED_MODULE_13__["SearchRequestService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/navigation/navbar.component.css":
/*!*************************************************!*\
  !*** ./src/app/navigation/navbar.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".navbar-dark a {\n    /*float: left;*/\n    display: block;\n    color: dodgerblue;\n    text-align: center;\n    padding: 15px 17px;\n    font-size: 20px;\n    text-align: center;\n}\n\n\n* {box-sizing: border-box;}\n\n\n.navbar-dark {\n    overflow: hidden;\n    background-color: #056b5b;\n}\n"

/***/ }),

/***/ "./src/app/navigation/navbar.component.html":
/*!**************************************************!*\
  !*** ./src/app/navigation/navbar.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"navbar-dark\">\n    <a class=\"nav-link\" routerLink=\"/users\" routerLinkActive=\"active\">Users</a>\n    <a class=\"nav-link\" routerLink=\"/repository\" routerLinkActive=\"active\">Repositories</a>\n</div>\n<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/navigation/navbar.component.ts":
/*!************************************************!*\
  !*** ./src/app/navigation/navbar.component.ts ***!
  \************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavbarComponent = /** @class */ (function () {
    function NavbarComponent() {
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/navigation/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.css */ "./src/app/navigation/navbar.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/repositories/repositories.component.css":
/*!*********************************************************!*\
  !*** ./src/app/repositories/repositories.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*body*/\n.container{\n    margin-top: 5rem;\n}\np {\n    text-indent: 2rem;\n    font-family: SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace;\n}\n.btn{\n    margin-top: 30px;\n    background-color: #056b5b;\n}\n.seeMorebtn{\n    text-align: center;\n}\n.display{\n    float: left;\n    margin-bottom: 0.3rem;\n}\n/*user form*/\n.search-form p {\n    font-size: 30px;\n    margin: 0;\n    justify-content: left;\n    align-items: left;\n    /*position: sticky;*/\n}\n\n"

/***/ }),

/***/ "./src/app/repositories/repositories.component.html":
/*!**********************************************************!*\
  !*** ./src/app/repositories/repositories.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <ng-progress></ng-progress>\n    <div class=\"row \">\n    <div class=\"col-md-9 text-center\">\n      <app-search-form (getName)='searchRepos($event)'></app-search-form>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-md-11\">\n      <div >\n        <div class=\"table\">\n          <table class=\"table\">\n            <tbody>\n             <tr *ngFor=\" let repository of gitRepoRequest.searchRepo\" >\n              <td>\n                <h4>\n                  <a style=\"text-align: center\" href=\"{{repository.html_url}} \" >{{repository.name}}</a>\n                </h4>\n                <p > Repository Owner:\n                  <a href=\"{{repository.owner.html_url}}\">{{repository.owner.login}}</a>\n                </p>\n                <p>Date Created : {{repository.created_at|date}}</p>\n                <p>Description : {{repository.description}}</p>\n              </td>\n            </tr>\n            </tbody>\n          </table>\n          <hr>\n        </div>\n      </div>\n    </div>\n\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/repositories/repositories.component.ts":
/*!********************************************************!*\
  !*** ./src/app/repositories/repositories.component.ts ***!
  \********************************************************/
/*! exports provided: RepositoriesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RepositoriesComponent", function() { return RepositoriesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _search_request_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../search-request.service */ "./src/app/search-request.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RepositoriesComponent = /** @class */ (function () {
    function RepositoriesComponent(gitRepoRequest) {
        this.gitRepoRequest = gitRepoRequest;
        this.resultCount = 12;
    }
    RepositoriesComponent.prototype.searchRepos = function () {
        this.searchRepo = '';
        this.resultCount = 10;
        this.getDataFunction();
    };
    RepositoriesComponent.prototype.ngOnInit = function () {
        this.resultCount = 5;
        this.gitRepoRequest.gitRepos(this.searchRepo);
    };
    RepositoriesComponent.prototype.getDataFunction = function () {
        this.gitRepoRequest.gitRepos(this.searchRepo);
    };
    RepositoriesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-repositories',
            template: __webpack_require__(/*! ./repositories.component.html */ "./src/app/repositories/repositories.component.html"),
            providers: [_search_request_service__WEBPACK_IMPORTED_MODULE_1__["SearchRequestService"]],
            styles: [__webpack_require__(/*! ./repositories.component.css */ "./src/app/repositories/repositories.component.css")]
        }),
        __metadata("design:paramtypes", [_search_request_service__WEBPACK_IMPORTED_MODULE_1__["SearchRequestService"]])
    ], RepositoriesComponent);
    return RepositoriesComponent;
}());



/***/ }),

/***/ "./src/app/repository.ts":
/*!*******************************!*\
  !*** ./src/app/repository.ts ***!
  \*******************************/
/*! exports provided: Repository */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Repository", function() { return Repository; });
var Repository = /** @class */ (function () {
    function Repository(name, html_url, description, created_at) {
        this.name = name;
        this.html_url = html_url;
        this.description = description;
        this.created_at = created_at;
    }
    return Repository;
}());



/***/ }),

/***/ "./src/app/routing/routing.module.ts":
/*!*******************************************!*\
  !*** ./src/app/routing/routing.module.ts ***!
  \*******************************************/
/*! exports provided: RoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoutingModule", function() { return RoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _user_search_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../user/search.component */ "./src/app/user/search.component.ts");
/* harmony import */ var _repositories_repositories_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../repositories/repositories.component */ "./src/app/repositories/repositories.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    { path: 'users', component: _user_search_component__WEBPACK_IMPORTED_MODULE_3__["SearchComponent"] },
    { path: 'repository', component: _repositories_repositories_component__WEBPACK_IMPORTED_MODULE_4__["RepositoriesComponent"] },
    { path: '', redirectTo: '/users', pathMatch: 'full' },
];
var RoutingModule = /** @class */ (function () {
    function RoutingModule() {
    }
    RoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)
            ],
            declarations: []
        })
    ], RoutingModule);
    return RoutingModule;
}());



/***/ }),

/***/ "./src/app/search-form/search-form.component.css":
/*!*******************************************************!*\
  !*** ./src/app/search-form/search-form.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n\ninput {\n     width: 100%;\n    padding: 12px;\n    border: 1px solid #ccc;\n    border-radius: 4px;\n    box-sizing: border-box;\n    margin-top: 6px;\n    margin-bottom: 16px;\n}\n\n\ninput[type=submit] {\n    background-color: #056b5b;\n    color: white;\n    text-align: center;\n    /* width: 50%; */\n}\n\n\nbutton {\n    background-color: #056b5b;\n    color: white;\n    padding: 14px 20px;\n    margin: 8px 0;\n    border: none;\n    cursor: pointer;\n    /* width: 100%; */\n    opacity: 0.9;\n}\n\n\nform {\n    background-color: #f1f1f1;\n    padding: 20px;\n    width: 100vh;\n     /*height: 100%; */\n}"

/***/ }),

/***/ "./src/app/search-form/search-form.component.html":
/*!********************************************************!*\
  !*** ./src/app/search-form/search-form.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "  <form (ngSubmit)=\"searchFor(searchForm)\" #searchForm=\"ngForm\">\n  <div class=\"form-group\">\n    <input type=\"text\" class=\"form-control\" name=\"find\" placeholder=\"Enter username\"[(ngModel)]= \"searchInfo.find\"  #find='ngModel'>\n    <button type=\"submit\" class=\"btn btn-group\"> Search</button>\n  </div>\n</form>\n"

/***/ }),

/***/ "./src/app/search-form/search-form.component.ts":
/*!******************************************************!*\
  !*** ./src/app/search-form/search-form.component.ts ***!
  \******************************************************/
/*! exports provided: SearchFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchFormComponent", function() { return SearchFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _search__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../search */ "./src/app/search.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SearchFormComponent = /** @class */ (function () {
    function SearchFormComponent() {
        this.searchInfo = new _search__WEBPACK_IMPORTED_MODULE_1__["Search"]('');
        this.getName = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    SearchFormComponent.prototype.searchFor = function (data) {
        this.getName.emit(data.value.find);
        console.log(data.value.find);
        data.reset();
    };
    SearchFormComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], SearchFormComponent.prototype, "getName", void 0);
    SearchFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-search-form',
            template: __webpack_require__(/*! ./search-form.component.html */ "./src/app/search-form/search-form.component.html"),
            styles: [__webpack_require__(/*! ./search-form.component.css */ "./src/app/search-form/search-form.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SearchFormComponent);
    return SearchFormComponent;
}());



/***/ }),

/***/ "./src/app/search-request.service.ts":
/*!*******************************************!*\
  !*** ./src/app/search-request.service.ts ***!
  \*******************************************/
/*! exports provided: SearchRequestService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchRequestService", function() { return SearchRequestService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _repository__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./repository */ "./src/app/repository.ts");
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user */ "./src/app/user.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SearchRequestService = /** @class */ (function () {
    function SearchRequestService(http) {
        this.http = http;
        this.repository = new _repository__WEBPACK_IMPORTED_MODULE_2__["Repository"]('', '', '', new Date());
        this.users = new _user__WEBPACK_IMPORTED_MODULE_3__["User"]('', '', '', 0, '', new Date(), 0, 0);
    }
    SearchRequestService.prototype.githubUser = function (searchName) {
        var _this = this;
        var promise = new Promise(function (resolve) {
            _this.http.get('https://api.github.com/users/' + searchName + '?access_token=' + _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].myApi).toPromise().then(function (getResponse) {
                _this.users.name = getResponse.name;
                _this.users.html_url = getResponse.html_url;
                _this.users.login = getResponse.login;
                _this.users.avatar_url = getResponse.avatar_url;
                _this.users.public_repos = getResponse.public_repos;
                _this.users.created_at = getResponse.created_at;
                _this.users.followers = getResponse.followers;
                _this.users.following = getResponse.following;
                resolve();
            });
        });
        return promise;
    };
    SearchRequestService.prototype.gitUserRepos = function (searchMe) {
        var _this = this;
        var myPromise = new Promise(function (resolve, reject) {
            _this.http.get('https://api.github.com/users/' + searchMe + '/repos?order=created&sort=asc?access_token=' + _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].myApi).toPromise().then(function (getRepoResponse) {
                _this.newRepository = getRepoResponse;
                resolve();
            }, function (error) {
                reject(error);
            });
        });
        return myPromise;
    };
    SearchRequestService.prototype.gitRepos = function (searchName) {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            _this.http.get('https://api.github.com/search/repositories?q=' + searchName + ' &per_page=10 ' + _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].myApi).toPromise().then(function (getRepoResponse) {
                _this.searchRepo = getRepoResponse.items;
                resolve();
            }, function (error) {
                _this.searchRepo = 'error';
                reject(error);
            });
        });
        return promise;
    };
    SearchRequestService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]])
    ], SearchRequestService);
    return SearchRequestService;
}());



/***/ }),

/***/ "./src/app/search.ts":
/*!***************************!*\
  !*** ./src/app/search.ts ***!
  \***************************/
/*! exports provided: Search */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Search", function() { return Search; });
var Search = /** @class */ (function () {
    function Search(find) {
        this.find = find;
    }
    return Search;
}());



/***/ }),

/***/ "./src/app/upper-case.pipe.ts":
/*!************************************!*\
  !*** ./src/app/upper-case.pipe.ts ***!
  \************************************/
/*! exports provided: UpperCasePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpperCasePipe", function() { return UpperCasePipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var UpperCasePipe = /** @class */ (function () {
    function UpperCasePipe() {
    }
    UpperCasePipe.prototype.transform = function (value) {
        return value.toUpperCase;
    };
    UpperCasePipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'upperCase'
        })
    ], UpperCasePipe);
    return UpperCasePipe;
}());



/***/ }),

/***/ "./src/app/user.ts":
/*!*************************!*\
  !*** ./src/app/user.ts ***!
  \*************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
var User = /** @class */ (function () {
    function User(name, login, avatar_url, public_repos, html_url, created_at, followers, following) {
        this.name = name;
        this.login = login;
        this.avatar_url = avatar_url;
        this.public_repos = public_repos;
        this.html_url = html_url;
        this.created_at = created_at;
        this.followers = followers;
        this.following = following;
    }
    return User;
}());



/***/ }),

/***/ "./src/app/user/search.component.css":
/*!*******************************************!*\
  !*** ./src/app/user/search.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\ntable {\n    border-collapse: collapse;\n    width: 100%;\n}\n/*.table-striped > tbody > tr:nth-child(2n+1) > td, .table-striped > tbody > tr:nth-child(2n+1) > th {*/\n/*background-color: red;*/\n/*}*/\n/*github user repos*/\n.my-repos p {\n    text-indent: 3rem;\n    text-align: left;\n}\n.desc{\n    text-align: left;\n}\ntr {\n    font-size: 16px;\n}\na:hover {\n    text-decoration: none;\n}\ntd a {\n    font-size: 25px;\n}\np {\n    text-indent: 2rem;\n    font-family: SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace;\n}\n.col-md-12 {\n    text-align: center;\n}\n.container {\n    margin-top: 2rem;\n}\n/* profile*/\nimg {\n    max-width: 60%;\n    border-radius: 600px;\n}\n.image-right {\n    padding-top: 8rem;\n    text-align: center;\n}\n/**/\n\n"

/***/ }),

/***/ "./src/app/user/search.component.html":
/*!********************************************!*\
  !*** ./src/app/user/search.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <ng-progress></ng-progress>\n  <div class=\"row \">\n    <div class=\"col-md-12\">\n      <app-search-form (getName)='findUser($event)'></app-search-form>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-md-7\">\n      <div class=\"table table-striped table-bordered\">\n        <h3> {{users.name}}</h3>\n        <table class=\"table table-striped table-light\">\n          <tbody>\n          <tr>\n            <th scope=\"row\">Github Username:</th>\n              <td> <a href=\"{{users.html_url}}\" target=\"_blank\">{{users.login}}</a></td>\n\n          </tr>\n          <tr>\n            <th scope=\"row\">Repositories:</th>\n            <td>{{users.public_repos }}</td>\n          </tr>\n          <tr>\n            <th scope=\"row\">Date created:</th>\n            <td>{{users.created_at | date}}</td>\n          </tr>\n          <tr>\n            <th scope=\"row\">Followers:</th>\n            <td>{{users.followers}}</td>\n          </tr>\n          <tr>\n            <th scope=\"row\">Following</th>\n            <td>{{users.following}}</td>\n          </tr>\n          </tbody>\n        </table>\n      </div>\n    </div>\n    <div class=\"col-md-5 image-end\">\n      <img src=\"{{users.avatar_url}}\">\n    </div>\n  </div>\n  <hr>\n</div>\n<div class=\"container\">\n  <div class=\"row\">\n    <div  class=\"col-md-12\">\n      <h2 style=\"color: #056b5b\" > User Repositories</h2>\n      <div class=\"table table-striped\">\n        <table class=\"table\">\n          <tbody>\n          <tr *ngFor='let repository of userRepos.newRepository'>\n            <td>\n                <a href=\"{{repository.html_url}}\" target=\"_blank\" >{{repository.name}}</a>\n\n                <br>\n              <p class=\"desc\">Description: {{repository.description}}</p>\n              <br>\n              <p>Date Created: {{repository.created_at | date}}</p>\n            </td>\n          </tr>\n          </tbody>\n        </table>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/user/search.component.ts":
/*!******************************************!*\
  !*** ./src/app/user/search.component.ts ***!
  \******************************************/
/*! exports provided: SearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchComponent", function() { return SearchComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _search_request_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../search-request.service */ "./src/app/search-request.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SearchComponent = /** @class */ (function () {
    function SearchComponent(githubUserRequest, userRepos) {
        this.githubUserRequest = githubUserRequest;
        this.userRepos = userRepos;
        this.searchMe = 'wanjiiru';
        this.resultCount = 12;
    }
    SearchComponent.prototype.findUser = function (username) {
        this.githubUser = '';
        this.searchMe = username;
        this.ngOnInit();
    };
    SearchComponent.prototype.ngOnInit = function () {
        this.githubUserRequest.githubUser(this.searchMe);
        this.users = this.githubUserRequest.users;
        this.userRepos.gitUserRepos(this.searchMe);
        console.log(this.userRepos);
    };
    SearchComponent.prototype.searchRepos = function () {
        this.searchRepo = '';
        this.resultCount = 10;
    };
    SearchComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-search',
            template: __webpack_require__(/*! ./search.component.html */ "./src/app/user/search.component.html"),
            providers: [_search_request_service__WEBPACK_IMPORTED_MODULE_1__["SearchRequestService"]],
            styles: [__webpack_require__(/*! ./search.component.css */ "./src/app/user/search.component.css")]
        }),
        __metadata("design:paramtypes", [_search_request_service__WEBPACK_IMPORTED_MODULE_1__["SearchRequestService"], _search_request_service__WEBPACK_IMPORTED_MODULE_1__["SearchRequestService"]])
    ], SearchComponent);
    return SearchComponent;
}());



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
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    myApi: '8d519577963aecac686226e04976f1c31f02b53a'
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/liz/Code/Angularjs/Github-search/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map