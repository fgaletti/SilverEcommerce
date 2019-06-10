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

module.exports = ":root {\n    --main-bg-color: coral;  \n  }\n  \n  \n "

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n\n\n\n\n<app-nav></app-nav>\n<router-outlet></router-outlet>\n\n<!--app-register></app-register-->\n"

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
        this.title = 'app';
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
/*! exports provided: tokenGetter, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tokenGetter", function() { return tokenGetter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @auth0/angular-jwt */ "./node_modules/@auth0/angular-jwt/index.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng2-file-upload */ "./node_modules/ng2-file-upload/index.js");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(ng2_file_upload__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _nav_nav_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./nav/nav.component */ "./src/app/nav/nav.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _value_value_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./value/value.component */ "./src/app/value/value.component.ts");
/* harmony import */ var _services_alertify_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./services/alertify.service */ "./src/app/services/alertify.service.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./routes */ "./src/app/routes.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _products_product_list_product_list_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./products/product-list/product-list.component */ "./src/app/products/product-list/product-list.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _services_error_interceptor__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./services/error.interceptor */ "./src/app/services/error.interceptor.ts");
/* harmony import */ var _products_product_create_product_create_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./products/product-create/product-create.component */ "./src/app/products/product-create/product-create.component.ts");
/* harmony import */ var _nav_test_nav_test_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./nav_test/nav_test.component */ "./src/app/nav_test/nav_test.component.ts");
/* harmony import */ var _products_product_detail_product_detail_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./products/product-detail/product-detail.component */ "./src/app/products/product-detail/product-detail.component.ts");
/* harmony import */ var _products_product_edit_product_edit_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./products/product-edit/product-edit.component */ "./src/app/products/product-edit/product-edit.component.ts");
/* harmony import */ var _products_product_list_edit_product_list_edit_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./products/product-list-edit/product-list-edit.component */ "./src/app/products/product-list-edit/product-list-edit.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
























function tokenGetter() {
    return localStorage.getItem('token');
}
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
                _nav_nav_component__WEBPACK_IMPORTED_MODULE_8__["NavComponent"],
                _register_register_component__WEBPACK_IMPORTED_MODULE_9__["RegisterComponent"],
                _value_value_component__WEBPACK_IMPORTED_MODULE_10__["ValueComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_15__["HomeComponent"],
                _products_product_list_product_list_component__WEBPACK_IMPORTED_MODULE_16__["ProductListComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_17__["LoginComponent"],
                _products_product_create_product_create_component__WEBPACK_IMPORTED_MODULE_19__["ProductCreateComponent"], _nav_test_nav_test_component__WEBPACK_IMPORTED_MODULE_20__["Nav_testComponent"],
                _products_product_detail_product_detail_component__WEBPACK_IMPORTED_MODULE_21__["ProductDetailComponent"],
                _products_product_edit_product_edit_component__WEBPACK_IMPORTED_MODULE_22__["ProductEditComponent"],
                _products_product_list_edit_product_list_edit_component__WEBPACK_IMPORTED_MODULE_23__["ProductListEditComponent"] /* list of products, edit */
            ],
            imports: [
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"].forRoot(),
                _angular_router__WEBPACK_IMPORTED_MODULE_13__["RouterModule"].forRoot(_routes__WEBPACK_IMPORTED_MODULE_14__["appRoutes"]),
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                ng2_file_upload__WEBPACK_IMPORTED_MODULE_6__["FileUploadModule"],
                _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_4__["JwtModule"].forRoot({
                    config: {
                        tokenGetter: tokenGetter,
                        whitelistedDomains: ['localhost:5000'],
                        blacklistedRoutes: ['localhost:5000/api/auth']
                    }
                }) // token
            ],
            providers: [
                _services_alertify_service__WEBPACK_IMPORTED_MODULE_11__["AlertifyService"],
                _services_user_service__WEBPACK_IMPORTED_MODULE_12__["UserService"],
                _services_error_interceptor__WEBPACK_IMPORTED_MODULE_18__["ErrorInterceptorProvider"],
            ],
            bootstrap: [
                _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]
            ]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  home works!\n</p>\n"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
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

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container \">\n    <div class=\"row justify-content-center text-center \">\n      <div class=\"col col-sm-6 justify-content-center py-5\">Login</div>\n    </div>\n    <div class=\"row justify-content-center  row-register2\">\n        <div class=\"col col-sm-10  col-md-8  col-lg-6 justify-content-center\">\n\n           <form class=\"container\" [formGroup]=\"loginForm\" (ngSubmit)=\"login()\">\n           \n              <div class=\"form-group\">\n                <label for=\"email\">Email address</label>\n                <input formControlName=\"email\" \n                [ngClass]=\"{'is-invalid': loginForm.get('email').errors && loginForm.get('email').touched}\" \n                 type=\"email\" class=\"form-control\" id=\"email\" placeholder=\"name@example.com\">\n                <div class=\"invalid-feedback\" *ngIf=\"loginForm.get('email').touched && loginForm.get('email').hasError('required')\">Email is requiered</div>\n\n            </div>\n              <div class=\"form-group\">\n                  <label for=\"password\">Password</label>\n                  <input formControlName=\"password\" \n                  [ngClass]=\"{'is-invalid': loginForm.get('password').errors\n                  && loginForm.get('password').touched}\"\n                   type=\"password\" class=\"form-control\" id=\"password\" >\n\n                  <div class=\"invalid-feedback\" *ngIf=\"loginForm.get('password').hasError('required')\n      && loginForm.get('password').touched\">Password is required</div>\n\n                </div>\n              \n                <div class=\"form-group\">\n                   <span>By clicking Create Account, you acknowledge you have read and agreed to our Terms of Use and Privacy Policy. </span>  \n                </div>\n                <div class=\" text-center\">  \n                     <button class=\"btn btn-success\" [disabled]=\"!loginForm.valid\" type=\"submit\">Login</button>\n                    <!--button type=\"submit\" class=\"btn btn-primary\">Create Account</button>-->\n                </div>\n          </form>\n        </div>\n       \n    </div>\n  </div>\n"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_alertify_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/alertify.service */ "./src/app/services/alertify.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginComponent = /** @class */ (function () {
    function LoginComponent(alertify, fb, userService, router) {
        this.alertify = alertify;
        this.fb = fb;
        this.userService = userService;
        this.router = router;
        this.model = {};
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.createLoginForm();
    };
    LoginComponent.prototype.createLoginForm = function () {
        this.loginForm = this.fb.group({
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]]
        });
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.model = Object.assign({}, this.loginForm.value);
        console.log(this.model);
        this.userService.login(this.model).subscribe(function (next) {
            _this.alertify.success('logged in successfully');
            // tslint:disable-next-line:no-shadowed-variable
        }, function (error) {
            console.log(error);
            _this.alertify.error(error); //  'Failed to login');
        }, function () {
            _this.router.navigate(['/product-list']);
        });
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_services_alertify_service__WEBPACK_IMPORTED_MODULE_1__["AlertifyService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/nav/nav.component.css":
/*!***************************************!*\
  !*** ./src/app/nav/nav.component.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url(\"https://use.fontawesome.com/releases/v5.8.1/css/all.css\");\n@import url(\"https://fonts.googleapis.com/css?family=Calligraffitti|Mali\");\n.nav-color-blue {\n     background-color: var(--lightblue)!important;\n     /*background-color: #2A4480; */\n    /*background-color: #303E60;*/\n\n}\n.nav-color-silver {\n  background-color: #F9F8F8  ;\n  /*background-color: #2A4480; */\n /*background-color: #303E60;*/\n\n}\n.text-green {\n  color :var(--green)!important;\n}\n.text-yellows {\n    color : var(--mainYellows);\n  }\n.text-yellow {\n    color :var(--mainYellow)!important;\n  }\n.text-salmon {\n    color :var(--salmon);\n  }\n.text-white {\n    color :var(--white)!important;\n  }\n.text-charcol {\n    color :var(--mainCharcol)!important;\n  }\n.dropdown-toggle , .dropdown-item{\n    cursor: pointer;\n}\nbody {\n  color: var(--mainBlack);\n  background: var(--mainWhite);\n  font-family: \"Mali\", cursive;\n}\n.text-slanted {\n  font-family: \"Calligraffitti\", cursive;\n}\n.btn-yellow {\n  background: var(--mainYellow);\n  text-transform: capitalize;\n  font-size: 1.2rem;\n  color: var(--mainBlack);\n  border-radius: 0!important; /* sharp edged */\n}\n.btn-yellow:hover {\n  background: var(--mainBlack);\n  color: var(--mainYellow);\n\n}\n.btn-blue {\n  border-color:  var(--lightblue) !important;\n  text-transform: capitalize;\n  font-size: 1.2rem;\n  color: var(--lightblue)!important;\n  border-radius: 0!important; /* sharp edged */\n}\n.btn-blue:hover {\n  background: var(--lightblue)!important;\n  color: var(--white)!important;\n\n}\n/*navbar*/\n.navbar-toggler {\n  outline: none !important;\n  border: none;\n  font-size: 2.2rem;\n  color: #fdbe02!important; /* var(--mainYellow)!important;*/\n}\n/*deactivated*/\n.nav-link {\n  font-size: 1rem;\n  border-bottom: 0.1rem solid var(--mainWhite);\n}\n/*activated*/\n.nav-active {\n  font-size: 1.6rem;\n  border-bottom: 0.1rem solid var(--mainYellow);\n}\n.navbar-icon {\n  font-size: 1.6rem;\n}\n.navbar-cart-icon {\n  font-size: 1.6rem;\n  color: var(--mainBlack);\n  position: relative;  /*  this is important as parent  */\n}\n.navbar-cart-icon:hover {\n  color: var(--mainGrey);\n}\n.cart-items {\n  color: var(--mainWhite);\n  position: absolute;\n  top: -15%;\n  right: -25%;\n  padding: 0.2rem 0.3rem;\n  background: var(--mainYellow);\n  font-size: 0.1rem;\n  border-radius: 50%;\n}\n/*banner*/\n.banner {\n  min-height: calc(100vh - 101px); /*view hight value*/\n  background-position: center;\n  background-size: cover;\n  background-attachment: fixed; /*paralex effect , image fixed*/\n  background-repeat: no-repeat;\n}\n/*FEATURED SECTION*/\n.old-price {\n  text-decoration: line-through;\n}\n.featured-container {\n  background: var(--TransGrey);\n  position: relative; /* allows to put elements un positions*/\n  overflow: hidden; /* hide the element when its beyond the margin (container)*/\n}\n.featured-search-icon {\n  background: var(--mainWhite);\n  padding: 0.2rem 0.4rem;\n  display: inline-block;\n  position: absolute;\n  right: 0%;\n  top: 50%;  /*this works because container is set to relative*/\n  font-size: 1.2rem;\n  -webkit-transform: translateX(110%);\n          transform: translateX(110%);\n  transition: all 1s ease-in-out;\n  cursor: pointer;\n\n}\n.featured-container:hover .featured-search-icon{\n  -webkit-transform: translateX(0%);\n          transform: translateX(0%);\n}\n.featured-store-link {\n  background: var(--mainYellow);\n  color: var(--mainBlack);\n  padding: 0.2rem 0.4rem;\n  display: inline-block;\n\n  position: absolute;\n  right: 0%;\n  top: 70%;  /*this works because container is set to relative*/\n\n  -webkit-transform: translateX(110%);\n\n          transform: translateX(110%);\n  transition: all 1s ease-in-out;\n}\n.featured-container:hover .featured-store-link{\n  -webkit-transform: translateX(0%);\n          transform: translateX(0%);\n}"

/***/ }),

/***/ "./src/app/nav/nav.component.html":
/*!****************************************!*\
  !*** ./src/app/nav/nav.component.html ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<link rel=\"stylesheet\" href=\"https://use.fontawesome.com/releases/v5.8.1/css/all.css\" integrity=\"sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf\" crossorigin=\"anonymous\">\n\n\n\n <!-- As a heading -->\n    <div class=\"container-fluid  \">\n      <div class=\"row justify-content-center text-center\">\n        <div class=\"col col-sm-12 justify-content-center text-charcol nav-color-blue \">\n         <h3 class=\"text-white mt-1\">Welcome</h3>  \n        </div>\n      </div>\n    </div>\n\n  <!-- As a link -->\n  <nav class=\"navbar navbar-expand-md  navbar-light navbar1 nav-color-silver \">\n      <div class=\"container\">\n        <a class=\"navbar-brand\" href=\"#\"> \n        <img src=\"../../assets/logo_silver.png\" height=\"30px\" width=\"30px\" ></a>\n        \n        <!---button-- class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarMain\" aria-controls=\"navbarsExampleDefault\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n            <span class=\"navbar-toggler-icon\"></span>\n          </button-->\n                         \n          <button class=\"navbar-toggler \" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarMain\" (click)=\"navbarCollapsed = !navbarCollapsed\" [attr.aria-expanded]=\"!navbarCollapsed\">\n              <i class=\"fas fa-bars\"></i>\n            </button> \n        <div class=\"collapse navbar-collapse\" id=\"navbarMain\" [ngbCollapse]=\"navbarCollapsed\">\n            <a class=\"navbar-brand text-charcol\" [routerLink]=\"['/product-list']\">Silver</a>\n            \n            <form class=\"form-inline my-2 my-lg-0 mx-auto\">\n                <input class=\"form-control mr-sm-2\" type=\"search\" placeholder=\"Search\" aria-label=\"Search\">\n                <button class=\"btn  my-2 my-sm-0 btn-blue \" type=\"submit\">Search</button>\n\n              </form>\n                \n             \n            <ul  class=\"navbar-nav ml-auto mt-2 mt-lg-0\">\n\n              <li *ngIf=\"loggedIn()\" class=\"nav-item active\">\n                <a class=\"nav-link text-charcol\" [routerLink]=\"['/home']\"> <i class=\"fas fa-user-alt\"></i> My Account     <span class=\"sr-only\">(current)</span></a>\n              </li>\n             \n              <li  *ngIf=\"!loggedIn()\" class=\"nav-item\">\n                <a class=\"nav-link text-charcol \" [routerLink]=\"['/login']\"> <i class=\"fas fa-sign-in-alt mr-1\"></i>Login</a>\n              </li>\n              <li *ngIf=\"!loggedIn()\" class=\"nav-item\">\n                <a class=\"nav-link text-charcol \" [routerLink]=\"['/register']\"><i class=\"fas fa-user-plus mr-1\"></i>  Register</a>\n              </li>\n              <li *ngIf=\"loggedIn()\" class=\"nav-item\">\n                  <a class=\"nav-link text-charcol\" (click)=\"logout()\"> <i class=\"fas fa-sign-out-alt\"></i>Logout</a>\n                </li>\n                \n               \n            </ul>\n           \n          \n\n              <!-- class=\"dropdown-menu mt-3\"  <-- does not work with ng-bootstrap -->  \n              <div *ngIf=\"loggedAsAdmin()\" ngbDropdown class=\"d-inline-block  mt-2 mt-lg-0 \">   <!--   mt-2 mt-lg-0 : must be the same as <ul  class   -->\n                  <a class=\"dropdown-toggle text-charcol\" id=\"dropdownBasic1\" ngbDropdownToggle> <i class=\"fas fa-warehouse\"></i> Products</a>\n                  <div ngbDropdownMenu aria-labelledby=\"dropdownBasic1\">\n                    <button ngbDropdownItem [routerLink]=\"['product-create']\">Create</button>\n                    <button ngbDropdownItem [routerLink]=\"['product-list-edit']\">List Products</button>\n                   \n                  </div>\n                </div>\n\n          </div>\n\n        </div>\n    </nav>\n  \n    <!--nav class=\"navbar navbar-light bg-light\">\n        <a class=\"navbar-brand\" href=\"#\">Navbar2</a>\n      </nav>\n      <nav-- class=\"navbar navbar-light bg-light\">\n          <a class=\"navbar-brand\" href=\"#\">Navbar3</a>\n        </nav-->\n\n\n\n    \n      <!--nav class=\"navbar navbar-expand-md navbar-dark fixed-top bg-dark\"-->\n     \n<!--nav class=\"navbar navbar-expand-md navbar-dark  bg-dark\">\n  \n\n\n  <a class=\"navbar-brand\" href=\"#\">Navbar</a>\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarsExampleDefault\" aria-controls=\"navbarsExampleDefault\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n\n  <div class=\"collapse navbar-collapse\" id=\"navbarsExampleDefault\">\n    <ul class=\"navbar-nav mr-auto\">\n      <li class=\"nav-item active\">\n        <a class=\"nav-link\" href=\"#\">Home <span class=\"sr-only\">(current)</span></a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"#\">Link</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link disabled\" href=\"#\">Disabled</a>\n      </li>\n      <li class=\"nav-item dropdown\">\n        <a class=\"nav-link dropdown-toggle\" href=\"http://example.com\" id=\"dropdown01\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">Dropdown</a>\n        <div class=\"dropdown-menu\" aria-labelledby=\"dropdown01\">\n          <a class=\"dropdown-item\" href=\"#\">Action</a>\n          <a class=\"dropdown-item\" href=\"#\">Another action</a>\n          <a class=\"dropdown-item\" href=\"#\">Something else here</a>\n        </div>\n      </li>\n    </ul>\n    <form class=\"form-inline my-2 my-lg-0\">\n      <input class=\"form-control mr-sm-2\" type=\"text\" placeholder=\"Search\" aria-label=\"Search\">\n      <button class=\"btn btn-outline-success my-2 my-sm-0\" type=\"submit\">Search</button>\n    </form>\n  </div>\n</nav> \n\n-->\n\n"

/***/ }),

/***/ "./src/app/nav/nav.component.ts":
/*!**************************************!*\
  !*** ./src/app/nav/nav.component.ts ***!
  \**************************************/
/*! exports provided: NavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavComponent", function() { return NavComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_alertify_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/alertify.service */ "./src/app/services/alertify.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/user.service */ "./src/app/services/user.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NavComponent = /** @class */ (function () {
    function NavComponent(alertify, userService, router) {
        this.alertify = alertify;
        this.userService = userService;
        this.router = router;
        this.navbarCollapsed = true;
    }
    NavComponent.prototype.ngOnInit = function () {
    };
    NavComponent.prototype.loggedIn = function () {
        // if token is not expired the user is logged in
        return this.userService.loggedIn();
    };
    NavComponent.prototype.loggedAsAdmin = function () {
        return this.userService.loggedAsAdmin();
    };
    NavComponent.prototype.logout = function () {
        // remove the variables in the localStorage
        localStorage.removeItem('token');
        localStorage.removeItem('user'); // 114
        // this.authService.decodedToken = null;
        // this.authService.currentUser = null;
        this.alertify.message('logged out');
        this.router.navigate(['/home']);
    };
    NavComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-nav',
            template: __webpack_require__(/*! ./nav.component.html */ "./src/app/nav/nav.component.html"),
            styles: [__webpack_require__(/*! ./nav.component.css */ "./src/app/nav/nav.component.css"), __webpack_require__(/*! ../../../node_modules/bootstrap/dist/css/bootstrap.css */ "./node_modules/bootstrap/dist/css/bootstrap.css")]
        }),
        __metadata("design:paramtypes", [_services_alertify_service__WEBPACK_IMPORTED_MODULE_1__["AlertifyService"], _services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], NavComponent);
    return NavComponent;
}());



/***/ }),

/***/ "./src/app/nav_test/nav_test.component.css":
/*!*************************************************!*\
  !*** ./src/app/nav_test/nav_test.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":root {\n    --primary-color: #fff; \n    --background-color: #fdbe02; \n    --text-color: #2d2d2d;\n    --mainYellow: #fdbe02;\n    --mainWhite: #fff;\n  }\n\n  .test_span {\n    color: var(--main-bg-color) !important; \n  }\n\n  .testwhite {\n    color: var(--mainWhite ) !important; \n  }\n\n  /* GENERAL STYLES */\n\n  /*:root {\n    --mainYellow: #fdbe02;\n    --mainWhite: #fff;\n    --mainBlack: #071013;\n    --mainGrey: #9b9999;\n    --mainBlue: #2A4480;\n    --TransGrey: rgba(0, 0, 0, 0.1);\n  }*/\n\n  .navbar-toggler {\n    outline: none !important;\n    border: none;\n    font-size: 2.2rem;\n     color: var(--mainYellow)!important; \n}\n\n  .navbar-toggler2 {\n\n    color: #fdbe02 !important;;\n}\n\n"

/***/ }),

/***/ "./src/app/nav_test/nav_test.component.html":
/*!**************************************************!*\
  !*** ./src/app/nav_test/nav_test.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<span id=\"test_ss\" class=\"test_span \"> \n   TEST SPAN\n</span>\n\n<span id=\"test_s\" class=\" testwhite \"> \n    TEST SPAN\n </span>\n\n  <!--navbar-->\n  <nav class=\"navbar navbar-expand-lg navbar-light\">\n      <a href=\"index.html\" class=\"navbar-brand\">\n      <img src=\"img/logo.png\"  alt=\"logo\">\n    </a>\n       <!--navbar-toggler  : only dysplaied when the width is small-->\n      <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#myNavbar\"  (click)=\"navbarCollapsed = !navbarCollapsed\" [attr.aria-expanded]=\"!navbarCollapsed\" >\n        <i class=\"fas fa-bars\"></i>\n      </button>\n      <div class=\"collapse navbar-collapse\"  [ngbCollapse]=\"navbarCollapsed\" id=\"myNavbar\">\n        <ul class=\"navbar-nav mx-auto\">\n           <!--nav-active is going to change depending on the page we are working on -->\n          <li class=\"nav-item mx-2 nav-active\">\n            <a href=\"\" class=\"nav-link test_span\" >Home</a>\n          </li>\n          <li class=\"nav-item mx-2 \">\n              <a href=\"products.html\" class=\"nav-link\" >Products</a>\n          </li>\n          <li class=\"nav-item mx-2 \">\n              <a href=\"singleproduct.html\" class=\"nav-link\" >Single Product</a>\n            </li>\n            <li class=\"nav-item mx-2 \">\n                <a href=\"store.html\" class=\"nav-link\" >Store</a>\n              </li>  \n        </ul>\n      </div>\n       <!--icons-->\n      <div class=\"navbar-icons d-none d-lg-flex\">\n        <div class=\"navbar-icon mx-2\">\n          <i class=\"fas fa-search\"></i>\n        </div>\n        <a href=\"store.html\" class=\"navbar-icon mx-2 navbar-cart-icon\"> \n          <i class=\"fas fa-shopping-cart\"></i> \n          <div class=\"cart-items\">10</div>\n        </a>\n      </div>\n      <!--end icons-->\n  \n    </nav>\n    <!--end navbar-->"

/***/ }),

/***/ "./src/app/nav_test/nav_test.component.ts":
/*!************************************************!*\
  !*** ./src/app/nav_test/nav_test.component.ts ***!
  \************************************************/
/*! exports provided: Nav_testComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Nav_testComponent", function() { return Nav_testComponent; });
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

var Nav_testComponent = /** @class */ (function () {
    function Nav_testComponent() {
        this.navbarCollapsed = true;
    }
    Nav_testComponent.prototype.ngOnInit = function () {
    };
    Nav_testComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-nav-test',
            template: __webpack_require__(/*! ./nav_test.component.html */ "./src/app/nav_test/nav_test.component.html"),
            styles: [__webpack_require__(/*! ./nav_test.component.css */ "./src/app/nav_test/nav_test.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], Nav_testComponent);
    return Nav_testComponent;
}());



/***/ }),

/***/ "./src/app/products/product-create/product-create.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/products/product-create/product-create.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container-form {\n    padding: 1em 3em 2em 3em;\n    margin: 0em auto;\n    background-color: #F9F8F8 ;\n    border-radius: 3px* 1.4;\n    box-shadow: 0px 3px 10px -2px rgba(0,0,0,0.2);\n  }\n\n  nav--silver\n\n\n  .text-blue {\n      color: var(--lightblue)!important;\n  }\n\n  img.img-thumbnail {\n    height: 190px;\n    min-width: 190px !important;\n    margin-bottom: 2px;\n}\n\n  .nv-file-over {\n    border: dotted 3px red;\n}\n\n  /* hide text NO FILE CHOOSEN */\n\n  input[type=file] {\n    color:transparent;\n}\n\n  .dashed {\n    border-style: dashed;\n}\n"

/***/ }),

/***/ "./src/app/products/product-create/product-create.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/products/product-create/product-create.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container \">\n    <!--div-- class=\"row justify-content-center text-center \">\n      <div class=\"col col-sm-6 justify-content-center py-5\">Create Product</div>\n    </div-->\n    <div class=\"row justify-content-center  row-register2 mt-4\">\n        <div class=\"col col-sm-10  col-md-8  col-lg-6 justify-content-center\">\n\n           <form class=\"container container-form\" [formGroup]=\"productForm\"  (ngSubmit)=\"createProduct()\">\n              \n              <div class=\"form-group\">   \n                  <h4 class=\"text-blue\"> Create</h4>   \n              </div>\n              <div class=\"form-group\">              \n                    <label for=\"name\" class=\"form-label\"> Name</label>\n                     <input  \n                     formControlName=\"name\" \n                     [ngClass]=\"{'is-invalid': productForm.get('name').errors && productForm.get('name').touched}\" \n                     type=\"text\" class=\"form-control\" id=\"name\" placeholder=\"nameProduct\" >\n\n\n                     <div class=\"invalid-feedback\" *ngIf=\"productForm.get('name').touched && productForm.get('name').hasError('required')\">name of product is requiered</div>\n              </div>\n            <div class=\"form-group\">\n                  <label for=\"description\"> Description</label>\n                  <input  formControlName=\"description\" \n                  [ngClass]=\"{'is-invalid': productForm.get('description').errors && productForm.get('description').touched}\" \n                   type=\"text\" class=\"form-control\" id=\"description\" placeholder=\"Description\">\n                \n                  <div class=\"invalid-feedback\" *ngIf=\"productForm.get('description').touched && productForm.get('description').hasError('required')\">Description is requiered</div>\n\n                </div>\n               <div class=\"form-group\">\n                    <label for=\"price\">Price</label>\n                    <input  formControlName=\"price\"  (keypress)=\"onlyDecimalNumberKey($event)\"\n                    [ngClass]=\"{'is-invalid': productForm.get('price').errors && productForm.get('price').touched}\" \n                     type=\"text\" class=\"form-control\" id=\"price\" placeholder=\"\">\n                  \n                    <div class=\"invalid-feedback\" *ngIf=\"productForm.get('price').touched && productForm.get('price').hasError('required')\"> Price is requiered</div>\n  \n               </div>  \n\n              <div class=\"form-group\">\n                <label for=\"sku\">SKU</label>\n                <input formControlName=\"sku\" \n                [ngClass]=\"{'is-invalid': productForm.get('sku').errors && productForm.get('sku').touched}\" \n                 type=\"sku\" class=\"form-control\" id=\"sku\" placeholder=\"sku\">\n                <div class=\"invalid-feedback\" *ngIf=\"productForm.get('sku').touched && productForm.get('sku').hasError('required')\">Sku is requiered</div>\n\n             </div>\n\n             <div>\n                    <label>Category: </label>\n                    <select (change)=\"selectCategoryClick($event.target.value)\">\n                        <option value=\"0\">--Select Category--</option>\n                        <option *ngFor=\"let category of listCategories\" value={{category.id}}>\n                            {{category.name}}\n                        </option>\n                    </select>\n                </div>\n              \n            <div class=\"form-check\">\n                <label for=\"isActive\"   class=\"form-check-label\">\n                  <input type=\"checkbox\" formControlName=\"isActive\" class=\"form-check-input\" id=\"isActive\" value= \"true\">Is Active\n                </label>\n              </div>\n               \n               <!-- file uploader    -->\n               \n          <div class=\"row mt-3 mb-4 dashed \">\n          \n            <div class=\"col col-sm-12 col-md-12  text-center\">\n\n                <h5>Add Image</h5>\n\n                <!--div ng2FileDrop\n                    [ngClass]=\"{'nv-file-over': hasBaseDropZoneOver}\"\n                    (fileOver)=\"fileOverBase($event)\"\n                    [uploader]=\"uploader\"\n                    class=\"card bg-faded p-3 text-center mb-3 my-drop-zone\">\n                    <i class=\"fa fa-upload fa-3x\"></i>\n                    Drop Photos Here\n                </div -->\n\n\n                <!-- show image-->\n\n                    \n                  <img  *ngIf=\"imageLoaded\" class=\"img-thumbnail mb-2\" src=\"{{ productImageUrl}}\" alt=\"img-thumbnail p-1\" alt=\"\">                     \n                \n                <input type=\"file\" ng2FileSelect [uploader]=\"uploader\" (change)=\"onFileSelected($event)\" #fileInput />\n                <button *ngIf=\"imageLoaded\" type=\"button\" class=\"btn btn-danger btn-s\"\n                          (click)=\"uploader.clearQueue(); deleteImage();\" >\n                      <span class=\"fa fa-trash\"></span> Remove \n                  </button>    \n            </div>\n\n       \n\n          </div>\n\n          <!--INICO UPLOAD-->\n          <div class=\"col-md-9\" style=\"margin-bottom: 40px\" *ngIf=\"uploader?.queue?.length\">\n              <table class=\"table\">\n                  <tbody>\n                  <tr *ngFor=\"let item of uploader.queue\">\n                      <td><strong>{{ item?.file?.name }}</strong></td>\n                      <td *ngIf=\"uploader.options.isHTML5\" nowrap>{{ item?.file?.size/1024/1024 | number:'.2' }} MB</td>\n                  </tr>\n                  </tbody>\n              </table>\n        \n              <div>\n                  <div>\n                      Queue progress:\n                      <div class=\"progress mb-4\" >\n                          <div class=\"progress-bar\" role=\"progressbar\" [ngStyle]=\"{ 'width': uploader.progress + '%' }\"></div>\n                      </div>\n                  </div>\n                  <button type=\"button\" class=\"btn btn-success btn-s\"\n                          (click)=\"uploader.uploadAll()\" [disabled]=\"!uploader.getNotUploadedItems().length\">\n                      <span class=\"fa fa-upload\"></span> Upload \n                  </button>\n                 \n                  <button type=\"button\" class=\"btn btn-danger btn-s\"\n                          (click)=\"uploader.clearQueue()\" [disabled]=\"!uploader.queue.length\">\n                      <span class=\"fa fa-trash\"></span> Remove \n                  </button>\n              </div>\n          </div>\n          <!-- FIN UPLOAD-->\n                <div class=\" text-center\">  \n                     <button class=\"btn btn-success\" [disabled]=\"!productForm.valid\" type=\"submit\">Create Product</button>\n                    <!--button type=\"submit\" class=\"btn btn-primary\">Create Account</button>-->\n                </div>\n          </form>\n        </div>\n       \n    </div>\n  </div>\n\n"

/***/ }),

/***/ "./src/app/products/product-create/product-create.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/products/product-create/product-create.component.ts ***!
  \*********************************************************************/
/*! exports provided: ProductCreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductCreateComponent", function() { return ProductCreateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_services_alertify_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/alertify.service */ "./src/app/services/alertify.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_product_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/product.service */ "./src/app/services/product.service.ts");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng2-file-upload */ "./node_modules/ng2-file-upload/index.js");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(ng2_file_upload__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var src_app_services_category_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/category.service */ "./src/app/services/category.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// import { FormGroup, FormBuilder, FormControl, Validators  } from '@angular/forms';







var ProductCreateComponent = /** @class */ (function () {
    function ProductCreateComponent(alertify, fb, categoryService, productService, router) {
        this.alertify = alertify;
        this.fb = fb;
        this.categoryService = categoryService;
        this.productService = productService;
        this.router = router;
        this.hasBaseDropZoneOver = false;
        this.baseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].apiUrl;
        this.imageLoaded = false; // flag to indicate if the photo has been uploaded into the server
        this.productImageUrl = '';
    }
    ProductCreateComponent.prototype.ngOnInit = function () {
        this.createProductForm();
        this.initializeUploader();
        this.getCategoryList();
    };
    ProductCreateComponent.prototype.getCategoryList = function () {
        var _this = this;
        this.categoryService.getCategoryList().subscribe(function (categories) {
            _this.listCategories = categories;
        }, function (error) {
            _this.alertify.error(error);
        });
    };
    ProductCreateComponent.prototype.fileOverBase = function (e) {
        this.hasBaseDropZoneOver = e;
    };
    ProductCreateComponent.prototype.initializeUploader = function () {
        var _this = this;
        this.uploader = new ng2_file_upload__WEBPACK_IMPORTED_MODULE_5__["FileUploader"]({
            url: this.baseUrl + 'products/AddImageProduct',
            // auto  authTokenHeader:  'authorization',
            authToken: 'Bearer ' + localStorage.getItem('token'),
            isHTML5: true,
            allowedFileType: ['image'],
            removeAfterUpload: true,
            autoUpload: false,
            maxFileSize: 10 * 1024 * 1024
        });
        this.uploader.onAfterAddingFile = function (file) {
            console.log('fullle');
            file.withCredentials = false;
        };
        this.uploader.onSuccessItem = function (item, response, status, headers) {
            if (response) {
                // const res: Photo = JSON.parse(response);
                // const res = JSON.parse(response);
                console.log('response');
                _this.imageLoaded = true;
                _this.productImageUrl = 'http://' + response;
                _this.fileInput.nativeElement.value = ''; // clean the fileuploa s that we can add the same file again
                console.log(response);
            }
        };
    };
    // tslint:disable-next-line:use-life-cycle-interface
    ProductCreateComponent.prototype.ngAfterViewInit = function () {
        this.uploader.onAfterAddingFile = (function (item) {
            item.withCredentials = false;
        });
    };
    ProductCreateComponent.prototype.deleteImage = function () {
        // delete image added to the product
        this.imageLoaded = false;
        this.productImageUrl = '';
    };
    ProductCreateComponent.prototype.createProductForm = function () {
        this.productForm = this.fb.group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            description: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            price: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('^-?[0-9]+(.[0-9]+)?$')]],
            sku: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            isActive: [true],
            avatar: []
        });
    };
    ProductCreateComponent.prototype.createProduct = function () {
        var _this = this;
        this.product = Object.assign({}, this.productForm.value); // pass the values
        this.product.shortDescription = this.product.description;
        this.product.isActive = this.productForm.get('isActive').value === true ? 1 : 0;
        this.product.urlImage = this.productImageUrl === '' ? null : this.productImageUrl;
        this.productService.createProduct(this.product).subscribe(function () {
            _this.alertify.success('new product added');
        }, function (error) {
            _this.alertify.error(error);
        }, function () {
            _this.router.navigate(['/product-list']);
        });
        this.alertify.message(this.product.name);
    };
    ProductCreateComponent.prototype.getNewIdImage = function () {
        // get autonumeric Id from the database so that a new image does not collapse with another image
        return 1; // should go to a web api
    };
    ProductCreateComponent.prototype.onlyDecimalNumberKey = function (event) {
        var charCode = (event.which) ? event.which : event.keyCode;
        if (charCode !== 46 && charCode > 31 && (charCode < 48 || charCode > 57)) {
            return false;
        }
        return true;
    };
    ProductCreateComponent.prototype.onFileChange = function (event) {
        var _this = this;
        var reader = new FileReader();
        if (event.target.files && event.target.files.length > 0) {
            var file_1 = event.target.files[0];
            reader.readAsDataURL(file_1);
            reader.onload = function () {
                _this.productForm.get('avatar').setValue({
                    filename: file_1.name,
                    filetype: file_1.type,
                    value: reader.result
                });
            };
        }
    };
    ProductCreateComponent.prototype.onFileSelected = function (event) {
        this.uploader.uploadAll();
        console.log('uploadAll');
    };
    ProductCreateComponent.prototype.selectCategoryClick = function (categoryId) {
        console.log(categoryId);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('fileInput'),
        __metadata("design:type", Object)
    ], ProductCreateComponent.prototype, "fileInput", void 0);
    ProductCreateComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-product-create',
            template: __webpack_require__(/*! ./product-create.component.html */ "./src/app/products/product-create/product-create.component.html"),
            styles: [__webpack_require__(/*! ./product-create.component.css */ "./src/app/products/product-create/product-create.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_services_alertify_service__WEBPACK_IMPORTED_MODULE_2__["AlertifyService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], src_app_services_category_service__WEBPACK_IMPORTED_MODULE_7__["CategoryService"], src_app_services_product_service__WEBPACK_IMPORTED_MODULE_4__["ProductService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], ProductCreateComponent);
    return ProductCreateComponent;
}());



/***/ }),

/***/ "./src/app/products/product-detail/product-detail.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/products/product-detail/product-detail.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/products/product-detail/product-detail.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/products/product-detail/product-detail.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  product-detail works!\n</p>\n"

/***/ }),

/***/ "./src/app/products/product-detail/product-detail.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/products/product-detail/product-detail.component.ts ***!
  \*********************************************************************/
/*! exports provided: ProductDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductDetailComponent", function() { return ProductDetailComponent; });
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

var ProductDetailComponent = /** @class */ (function () {
    function ProductDetailComponent() {
    }
    ProductDetailComponent.prototype.ngOnInit = function () {
    };
    ProductDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-product-detail',
            template: __webpack_require__(/*! ./product-detail.component.html */ "./src/app/products/product-detail/product-detail.component.html"),
            styles: [__webpack_require__(/*! ./product-detail.component.css */ "./src/app/products/product-detail/product-detail.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ProductDetailComponent);
    return ProductDetailComponent;
}());



/***/ }),

/***/ "./src/app/products/product-edit/product-edit.component.css":
/*!******************************************************************!*\
  !*** ./src/app/products/product-edit/product-edit.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/products/product-edit/product-edit.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/products/product-edit/product-edit.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<h1>{{title}}</h1>\n<p>{{product?.id}}</p>"

/***/ }),

/***/ "./src/app/products/product-edit/product-edit.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/products/product-edit/product-edit.component.ts ***!
  \*****************************************************************/
/*! exports provided: ProductEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductEditComponent", function() { return ProductEditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_product_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/product.service */ "./src/app/services/product.service.ts");
/* harmony import */ var src_app_services_alertify_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/alertify.service */ "./src/app/services/alertify.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProductEditComponent = /** @class */ (function () {
    function ProductEditComponent(alertify, route, productService) {
        this.alertify = alertify;
        this.route = route;
        this.productService = productService;
        this.title = 'Tour of Heroes';
    }
    ProductEditComponent.prototype.ngOnInit = function () {
        this.loadProduct();
    };
    // members /4
    ProductEditComponent.prototype.loadProduct = function () {
        var _this = this;
        this.productService.getProduct(this.route.snapshot.params['id']).subscribe(function (product) {
            _this.product = product;
            console.log(_this.product.urlImage);
        }, function (error) {
            _this.alertify.error(error);
        });
    };
    ProductEditComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-product-edit',
            template: __webpack_require__(/*! ./product-edit.component.html */ "./src/app/products/product-edit/product-edit.component.html"),
            styles: [__webpack_require__(/*! ./product-edit.component.css */ "./src/app/products/product-edit/product-edit.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_services_alertify_service__WEBPACK_IMPORTED_MODULE_3__["AlertifyService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], src_app_services_product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"]])
    ], ProductEditComponent);
    return ProductEditComponent;
}());



/***/ }),

/***/ "./src/app/products/product-list-edit/product-list-edit.component.css":
/*!****************************************************************************!*\
  !*** ./src/app/products/product-list-edit/product-list-edit.component.css ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".selected {\n    background-color: #CFD8DC !important;\n    color: white;\n  }\n  .products {\n    margin: 0 0 2em 0;\n    list-style-type: none;\n    padding: 0;\n    width: 100%;\n  }\n  .products li {\n    cursor: pointer;\n    position: relative;\n    left: 0;\n    background-color: #EEE;\n    margin: .5em;\n    padding: .3em 0;\n    height: 2.6em;\n    border-radius: 4px;\n  }\n  .products li.selected:hover {\n    background-color: #BBD8DC !important;\n    color: white;\n  }\n  .products li:hover {\n    color: #607D8B;\n    background-color: #DDD;\n    left: .1em;\n  }\n  .products .text {\n    position: relative;\n    top: -3px;\n  }\n  .products .badge {\n    display: inline-block;\n    font-size: small;\n    color: white;\n    padding: 0.8em 0.7em 0 0.7em;\n    background-color:#405061;\n    line-height: 1em;\n    position: relative;\n    left: -1px;\n    top: -4px;\n    height: 3.2em;  /* same as li*/\n    margin-right: .8em;\n    border-radius: 4px 0 0 4px;\n  }"

/***/ }),

/***/ "./src/app/products/product-list-edit/product-list-edit.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/products/product-list-edit/product-list-edit.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col col-md-10\">\n        <div class=\"h3\">List of Products</div>\n    </div>\n    <div *ngFor=\"let product of listProducts\" class=\"col-10 text-center\"> \n        {{product.id}} -- {{product.name}}\n    </div>\n  </div>\n</div>\n\n<h2>List of Products</h2>\n<ul class=\"products\">\n  <li *ngFor=\"let product of listProducts\"\n    [class.selected]=\"product === selectedProduct\"\n    (click)=\"onSelect(product.id)\">\n    <span class=\"badge\">{{product.id}}</span> {{product.name}}\n  </li>\n</ul>"

/***/ }),

/***/ "./src/app/products/product-list-edit/product-list-edit.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/products/product-list-edit/product-list-edit.component.ts ***!
  \***************************************************************************/
/*! exports provided: ProductListEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductListEditComponent", function() { return ProductListEditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_alertify_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/alertify.service */ "./src/app/services/alertify.service.ts");
/* harmony import */ var src_app_services_product_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/product.service */ "./src/app/services/product.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProductListEditComponent = /** @class */ (function () {
    function ProductListEditComponent(alertify, productService, router) {
        this.alertify = alertify;
        this.productService = productService;
        this.router = router;
    }
    ProductListEditComponent.prototype.ngOnInit = function () {
        this.getProductList();
    };
    ProductListEditComponent.prototype.getProductList = function () {
        var _this = this;
        this.productService.getProductList().subscribe(function (products) {
            _this.listProducts = products;
        }, function (error) {
            _this.alertify.error(error);
        });
    };
    ProductListEditComponent.prototype.onSelect = function (productId) {
        this.router.navigate(['/product-edit/' + productId.toString()]);
    };
    ProductListEditComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-product-list-edit',
            template: __webpack_require__(/*! ./product-list-edit.component.html */ "./src/app/products/product-list-edit/product-list-edit.component.html"),
            styles: [__webpack_require__(/*! ./product-list-edit.component.css */ "./src/app/products/product-list-edit/product-list-edit.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_services_alertify_service__WEBPACK_IMPORTED_MODULE_1__["AlertifyService"], src_app_services_product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], ProductListEditComponent);
    return ProductListEditComponent;
}());



/***/ }),

/***/ "./src/app/products/product-list/product-list.component.css":
/*!******************************************************************!*\
  !*** ./src/app/products/product-list/product-list.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n  .carousel-image  {\n    height: auto;\n    width:  100vw;\n\n }\n\n img22 {\n    width: 100%;\n    height: auto;\n  }\n\n .carousel-control-prev-icon {\n     color:black;\n     background-image: url('watch.jpeg');\n     background:url('watch.jpeg');\n  }\n\n .carousel-control-prev  {\n    color:black;\n    background-image: url('watch.jpeg');\n    background:url('watch.jpeg');\n }\n\n .carousel-control-prev-icon,\n.carousel-control-next-icon {\n  height: 100px !important;\n  width: 100px !important;\n  outline: black !important;\n  background-size: 100%, 100%;\n  border-radius: 50%;\n  border: 1px solid black !important;\n  background-image: none !important;\n}\n\n .carousel-control-next-icon:after\n{\n  content: '>';\n  font-size: 55px;\n  color: red;\n}\n\n .carousel-control-prev-icon:after {\n  content: '<';\n  font-size: 55px;\n  color: red;\n}\n\n .height-max{\n    min-height: calc(100vh - 76px);\n    background:url('watch.jpeg');\n    background-position: center;\n    background-size: cover;\n    background-attachment: fixed;\n    background-repeat: no-repeat;\n    -webkit-animation-name: zoom;\n            animation-name: zoom;\n    -webkit-animation-duration: 20s;\n            animation-duration: 20s;\n    -webkit-animation-delay: 5s;\n            animation-delay: 5s;\n    -webkit-animation-iteration-count: infinite;\n            animation-iteration-count: infinite;\n  }\n\n .background-products{\n    background-color: #F9F8F8  ;\n    /*background-color: #2A4480; */\n   /*background-color: #303E60;*/\n  \n  }\n\n .filled {\n    color: var(--mainYellow)!important;\n  }\n\n .star {\n    font-size: 1.5rem;\n    color: #b0c4de;\n  }\n\n .featured-store-link {\n    background: var(--mainYellow);\n    color: var(--mainBlack);\n    padding: 0.2rem 0.4rem;\n  \n     /*this works because container is set to relative*/\n     position: absolute;\n    top: 30%; \n    right: 70%;\n    display: none; /* show */\n    -webkit-transform: translateX(110%);\n            transform: translateX(110%);\n    transition: all 1s ease-in-out;\n  }\n\n .featured-container:hover .featured-store-link{\n    /*transform: translateX(0%); */\n    display: block;\n  }"

/***/ }),

/***/ "./src/app/products/product-list/product-list.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/products/product-list/product-list.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--p\n  product-list works!\n</p-->\n\n<script\n  src=\"https://code.jquery.com/jquery-2.2.4.min.js\"\n  integrity=\"sha256-BbhdlvQf/xTY9gja0Dq3HiwQF8LaCRTXxZKRutelT44=\"\n  crossorigin=\"anonymous\"></script>\n\n \n\n  <div class=\"container-fluid background-products \">\n      \n      <div class=\"row justify-content-center  bg-secondary\">\n          <div class=\"col col-sm-12  col-md-12  col-lg-12 text-center bg-warning pl-0 pr-0\">\n              \n              <ngb-carousel *ngIf=\"images\">\n                  <ng-template ngbSlide>\n                    <img class=\"carousel-image\" [src]=\"images2[0]\" alt=\"Random first slide\">\n                    <div class=\"carousel-caption\">\n                      <h3></h3>\n                      <p></p>\n                    </div>\n                  </ng-template>\n                  <ng-template ngbSlide>\n                    <img class=\"carousel-image\" [src]=\"images2[1]\" alt=\"Random second slide\">\n                    <div class=\"carousel-caption\">\n                      <h3></h3>\n                      <p></p>\n                    </div>\n                  </ng-template>\n                  <ng-template ngbSlide>\n                    <img class=\"carousel-image\" [src]=\"images2[2]\" alt=\"Random third slide\">\n                    <div class=\"carousel-caption\">\n                      <h3></h3>\n                      <p></p>\n                    </div>\n                  </ng-template>\n                </ngb-carousel>  \n\n         </div>\n        \n      </div>   \n      \n      <!--div class=\"row d-flex justify-content-center\">\n          \n           <div *ngFor=\"let product of listProducts\" class=\"col col-sm-10  col-md-8  col-lg-6  \">\n              {{product.name}}\n            </div>\n      </div>--> \n      \n      <div class=\"row justify-content-center\">\n          <!--single product-->\n            <div *ngFor=\"let product of listProducts\" class=\"col-9  col-sm-4 col-md-3 col-lg-3 text-center\"> \n              <div class=\"featured-container p-2 mt-2 text-center justify-content-center\">\n                  <a href=\"#\" [routerLink]=\"['/product-detail']\" >\n                    <img src=\"{{product.urlImage || '../../assets/logo_silver.png'}}\" alt=\"product\" class=\"img-fluid\" >\n                    <a href=\"#\" [routerLink]=\"['/product-detail',  product.id]\" class=\"featured-store-link text-capitalize\">Add to cart</a>\n             \n                  </a>\n                <!--span class=\"featured-search-icon\" data-toggle=\"model\" data-target=\"#productModal\"><i class=\"fas fa-search\"></i></span-->\n              </div>\n              <h6 class=\"text-capitalize text-center my-2\">{{product.name}}</h6>\n              <h6 class=\"text-center\">\n                <span class=\"text-muted old-price mx-2\">$ {{product.price}}</span>\n                <span>$0</span>\n              </h6>\n\n              <ngb-rating  [(ngModel)]=\"product.id\" [(rate)]=product.id   >\n                  <ng-template let-fill=\"fill\" let-index=\"index\">\n                    <span class=\"star\" [class.filled]=\"fill === 100\" >&#9733;</span>\n                  </ng-template>\n                </ngb-rating>\n\n                <hr>\n                <pre>Rate: <b>{{currentRate}}</b></pre>\n            </div>\n       </div>    <!--row-->          \n      \n      \n  </div> \n\n  \n\n\n  \n"

/***/ }),

/***/ "./src/app/products/product-list/product-list.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/products/product-list/product-list.component.ts ***!
  \*****************************************************************/
/*! exports provided: ProductListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductListComponent", function() { return ProductListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var src_app_services_alertify_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/alertify.service */ "./src/app/services/alertify.service.ts");
/* harmony import */ var src_app_services_product_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/product.service */ "./src/app/services/product.service.ts");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/user.service */ "./src/app/services/user.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ProductListComponent = /** @class */ (function () {
    function ProductListComponent(alertify, productService, config, userService) {
        this.alertify = alertify;
        this.productService = productService;
        this.config = config;
        this.userService = userService;
        this.images = [1, 2, 3].map(function () { return 'https://picsum.photos/900/500?random&t=${Math.random()}'; });
        this.images2 = ['../../../assets/couch1.jpg', '../../../assets/banner_phones.jpg', '../../../assets/deco1.jpg'];
        this.currentRate = 8;
        config.max = 5;
        // config.readonly = true;
    }
    ProductListComponent.prototype.ngOnInit = function () {
        this.getProductList();
    };
    ProductListComponent.prototype.loggedAsAdmin = function () {
        return this.userService.loggedAsAdmin();
    };
    ProductListComponent.prototype.getProductList = function () {
        var _this = this;
        this.productService.getProductList().subscribe(function (products) {
            _this.listProducts = products;
        }, function (error) {
            _this.alertify.error(error);
        });
    };
    ProductListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-product-list',
            template: __webpack_require__(/*! ./product-list.component.html */ "./src/app/products/product-list/product-list.component.html"),
            styles: [__webpack_require__(/*! ./product-list.component.css */ "./src/app/products/product-list/product-list.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_services_alertify_service__WEBPACK_IMPORTED_MODULE_2__["AlertifyService"], src_app_services_product_service__WEBPACK_IMPORTED_MODULE_3__["ProductService"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbRatingConfig"],
            src_app_services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"]])
    ], ProductListComponent);
    return ProductListComponent;
}());



/***/ }),

/***/ "./src/app/register/register.component.css":
/*!*************************************************!*\
  !*** ./src/app/register/register.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n.container-form {\n    padding: 1em 3em 2em 3em;\n    margin: 0em auto;\n    background-color: #F9F8F8 ;\n    border-radius: 3px* 1.4;\n    box-shadow: 0px 3px 10px -2px rgba(0,0,0,0.2);\n  }\n  .text-blue {\n    color: var(--lightblue)!important;\n}\n  .row-register{\n    background-color: #2A4480;\n}\n  .form-control {\n    margin-top: 0px !important;\n\n}\n  .form-label2 {\n    margin-top: 5px !important;\n    margin-bottom: 1px ;\n\n}\n"

/***/ }),

/***/ "./src/app/register/register.component.html":
/*!**************************************************!*\
  !*** ./src/app/register/register.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n <div class=\"container \">\n   \n    <div class=\"row justify-content-center  row-register2\">\n        <div class=\"col col-sm-10  col-md-8  col-lg-6 justify-content-center\">\n\n           <form class=\"container container-form\" [formGroup]=\"registerForm\" (ngSubmit)=\"register()\">\n\n                <!--div class=\"row justify-content-center text-center \">\n                     <div class=\"col col-sm-6 justify-content-center py-5\">Register</div>\n                 </div-->\n\n                <div class=\"form-group\">   \n                        <h4 class=\"text-blue\"> Register</h4>   \n                    </div>  \n            \n            <div class=\"form-group  \">              \n                    <label for=\"firstname \" class=\"form-label\">Firts Name</label>\n                     <input  \n                     formControlName=\"firstname\" \n                     [ngClass]=\"{'is-invalid': registerForm.get('firstname').errors && registerForm.get('firstname').touched}\" \n                     type=\"text\" class=\"form-control\" id=\"firstname\" placeholder=\"name@example.com\" >\n\n\n                     <div class=\"invalid-feedback\" *ngIf=\"registerForm.get('firstname').touched && registerForm.get('firstname').hasError('required')\">First name is requiered</div>\n\n\n              </div>\n            <div class=\"form-group\">\n                  <label for=\"lastname\">Last Name</label>\n                  <input  formControlName=\"lastname\" \n                  [ngClass]=\"{'is-invalid': registerForm.get('lastname').errors && registerForm.get('lastname').touched}\" \n                   type=\"text\" class=\"form-control\" id=\"lastname\" placeholder=\"Last name\">\n                \n                  <div class=\"invalid-feedback\" *ngIf=\"registerForm.get('lastname').touched && registerForm.get('lastname').hasError('required')\">Last name is requiered</div>\n\n                </div>\n              <div class=\"form-group\">\n                <label for=\"email\">Email address</label>\n                <input formControlName=\"email\" \n                [ngClass]=\"{'is-invalid': registerForm.get('email').errors && registerForm.get('email').touched}\" \n                 type=\"email\" class=\"form-control\" id=\"email\" placeholder=\"name@example.com\">\n                <div class=\"invalid-feedback\" *ngIf=\"registerForm.get('email').touched && registerForm.get('email').hasError('required') ;else content\">Email is requiered</div>\n                <ng-template #content>\n                        <div class=\"invalid-feedback\" *ngIf=\"registerForm.get('email').errors\">Email is not Valid</div>\n\n                    </ng-template>\n            </div>\n              <div class=\"form-group\">\n                  <label for=\"password\">Create a Password</label>\n                  <input formControlName=\"password\" \n                  [ngClass]=\"{'is-invalid': registerForm.get('password').errors\n                  && registerForm.get('password').touched}\"\n                   type=\"password\" class=\"form-control\" id=\"password\" placeholder=\"*********\">\n\n                  <div class=\"invalid-feedback\" *ngIf=\"registerForm.get('password').hasError('required')\n      && registerForm.get('password').touched\">Password is required</div>\n\n                </div>\n                <div class=\"form-group\">\n                    <label for=\"confirmPassword\">Confirm the Password</label>\n                    <input formControlName=\"confirmPassword\" \n                    [ngClass]=\"{'is-invalid': registerForm.get('confirmPassword').errors\n                    && registerForm.get('confirmPassword').touched\n                      || registerForm.get('confirmPassword').touched\n                      && registerForm.hasError('mismatch') }\"\n                    type=\"password\" class=\"form-control\" id=\"confirmPassword\" placeholder=\"*********\">\n                 \n                    <div class=\"invalid-feedback\" \n                    *ngIf=\"registerForm.get('confirmPassword').hasError('required')\n                    && registerForm.get('confirmPassword').touched\">Confirm password is required</div>\n                \n                    <div class=\"invalid-feedback\" \n                    *ngIf=\"registerForm.hasError('mismatch')\n                    && registerForm.get('confirmPassword').touched\">Passwords must match</div>\n                </div> \n                <div class=\"form-group\">\n                   <span>By clicking Create Account, you acknowledge you have read and agreed to our Terms of Use and Privacy Policy. </span>  \n                </div>\n                <div class=\" text-center\">  \n                     <button class=\"btn btn-success\" [disabled]=\"!registerForm.valid\" type=\"submit\">Create Account</button>\n                    <!--button type=\"submit\" class=\"btn btn-primary\">Create Account</button>-->\n                </div>\n          </form>\n        </div>\n       \n    </div>\n  </div>\n\n\n  \n  "

/***/ }),

/***/ "./src/app/register/register.component.ts":
/*!************************************************!*\
  !*** ./src/app/register/register.component.ts ***!
  \************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_alertify_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/alertify.service */ "./src/app/services/alertify.service.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(alertify, fb, userService, router) {
        this.alertify = alertify;
        this.fb = fb;
        this.userService = userService;
        this.router = router;
        this.emailPattern = '^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$';
    }
    RegisterComponent.prototype.ngOnInit = function () {
        this.createRegisterForm();
        /*this.registerForm = new FormGroup({
    
          firstname: new FormControl('', Validators.required ),
          lastname: new FormControl('', Validators.required ),
          email: new FormControl('', Validators.required ),
    
          password: new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(8)]),
          confirmPassword: new FormControl('', Validators.required)
        }, this.passwordMatchValidator); */ // 123 passwordMatchValidator
    };
    RegisterComponent.prototype.createRegisterForm = function () {
        this.registerForm = this.fb.group({
            firstname: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            lastname: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(this.emailPattern)]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(4), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(8)]],
            confirmPassword: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        }, { validator: this.passwordMatchValidator });
    };
    RegisterComponent.prototype.register = function () {
        var _this = this;
        if (this.registerForm.valid) {
            // move the vslues from this.registerForm.value to {}
            this.user = Object.assign({}, this.registerForm.value);
            this.userService.register(this.user).subscribe(function () {
                _this.alertify.success('Registration successful');
            }, function (error) {
                _this.alertify.error(error);
            }, function () {
                _this.userService.login(_this.user).subscribe(function () {
                    _this.router.navigate(['/product-list']);
                    console.log('login/member');
                });
            });
        }
    };
    // 123
    RegisterComponent.prototype.passwordMatchValidator = function (g) {
        return g.get('password').value === g.get('confirmPassword').value ? null : { 'mismatch': true };
    };
    RegisterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/register/register.component.css")]
        }),
        __metadata("design:paramtypes", [_services_alertify_service__WEBPACK_IMPORTED_MODULE_2__["AlertifyService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], _services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/routes.ts":
/*!***************************!*\
  !*** ./src/app/routes.ts ***!
  \***************************/
/*! exports provided: appRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appRoutes", function() { return appRoutes; });
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _products_product_list_product_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./products/product-list/product-list.component */ "./src/app/products/product-list/product-list.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _value_value_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./value/value.component */ "./src/app/value/value.component.ts");
/* harmony import */ var _products_product_create_product_create_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./products/product-create/product-create.component */ "./src/app/products/product-create/product-create.component.ts");
/* harmony import */ var _products_product_detail_product_detail_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./products/product-detail/product-detail.component */ "./src/app/products/product-detail/product-detail.component.ts");
/* harmony import */ var _products_product_edit_product_edit_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./products/product-edit/product-edit.component */ "./src/app/products/product-edit/product-edit.component.ts");
/* harmony import */ var _products_product_list_edit_product_list_edit_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./products/product-list-edit/product-list-edit.component */ "./src/app/products/product-list-edit/product-list-edit.component.ts");









var appRoutes = [
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_0__["HomeComponent"] },
    { path: 'register', component: _register_register_component__WEBPACK_IMPORTED_MODULE_1__["RegisterComponent"] },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] },
    { path: 'product-create', component: _products_product_create_product_create_component__WEBPACK_IMPORTED_MODULE_5__["ProductCreateComponent"] },
    { path: 'product-list', component: _products_product_list_product_list_component__WEBPACK_IMPORTED_MODULE_2__["ProductListComponent"] },
    { path: 'product-detail', component: _products_product_detail_product_detail_component__WEBPACK_IMPORTED_MODULE_6__["ProductDetailComponent"] },
    { path: 'product-detail/:id', component: _products_product_detail_product_detail_component__WEBPACK_IMPORTED_MODULE_6__["ProductDetailComponent"] },
    { path: 'product-edit/:id', component: _products_product_edit_product_edit_component__WEBPACK_IMPORTED_MODULE_7__["ProductEditComponent"] },
    { path: 'product-list-edit', component: _products_product_list_edit_product_list_edit_component__WEBPACK_IMPORTED_MODULE_8__["ProductListEditComponent"] },
    { path: 'values', component: _value_value_component__WEBPACK_IMPORTED_MODULE_4__["ValueComponent"] },
    { path: '**', redirectTo: 'home', pathMatch: 'full' }
];


/***/ }),

/***/ "./src/app/services/alertify.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/alertify.service.ts ***!
  \**********************************************/
/*! exports provided: AlertifyService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertifyService", function() { return AlertifyService; });
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

var AlertifyService = /** @class */ (function () {
    function AlertifyService() {
    }
    AlertifyService.prototype.confirm = function (message, okCallback) {
        alertify.confirm(message, function (e) {
            if (e) {
                okCallback();
            }
            else { }
        });
    };
    AlertifyService.prototype.success = function (message) {
        alertify.success(message);
    };
    AlertifyService.prototype.error = function (message) {
        alertify.error(message);
    };
    AlertifyService.prototype.warning = function (message) {
        alertify.warning(message);
    };
    AlertifyService.prototype.message = function (message) {
        alertify.message(message);
    };
    AlertifyService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], AlertifyService);
    return AlertifyService;
}());



/***/ }),

/***/ "./src/app/services/category.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/category.service.ts ***!
  \**********************************************/
/*! exports provided: CategoryService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryService", function() { return CategoryService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CategoryService = /** @class */ (function () {
    function CategoryService(http) {
        this.http = http;
        this.baseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl + 'categories/';
    }
    CategoryService.prototype.getCategoryList = function () {
        return this.http.get(this.baseUrl);
    };
    // alternative with observable
    CategoryService.prototype.getCategoryListObs = function () {
        return this.http.get(this.baseUrl);
    };
    CategoryService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], CategoryService);
    return CategoryService;
}());



/***/ }),

/***/ "./src/app/services/error.interceptor.ts":
/*!***********************************************!*\
  !*** ./src/app/services/error.interceptor.ts ***!
  \***********************************************/
/*! exports provided: ErrorInterceptor, ErrorInterceptorProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorInterceptor", function() { return ErrorInterceptor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorInterceptorProvider", function() { return ErrorInterceptorProvider; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




// interceps the differents types of error : 401  , typo = object , etc
var ErrorInterceptor = /** @class */ (function () {
    function ErrorInterceptor() {
    }
    ErrorInterceptor.prototype.intercept = function (req, next) {
        return next.handle(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (error) {
            if (error instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpErrorResponse"]) {
                // for the login where the user is unauthorize
                if (error.status === 401) {
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(error.statusText);
                }
                var applicationError = error.headers.get('Application-Error');
                if (applicationError) {
                    console.error(applicationError);
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(applicationError);
                }
                var serverError = error.error;
                var modalStateErrors = '';
                if (serverError && typeof serverError === 'object') {
                    for (var key in serverError) {
                        if (serverError[key]) {
                            modalStateErrors += serverError[key] + '\n';
                        }
                    }
                }
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(modalStateErrors || serverError || 'Server Error');
            }
        }));
    };
    ErrorInterceptor = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], ErrorInterceptor);
    return ErrorInterceptor;
}());

var ErrorInterceptorProvider = {
    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HTTP_INTERCEPTORS"],
    useClass: ErrorInterceptor,
    multi: true // ADDED TO INTERCEPTROR
    // tslint:disable-next-line:semicolon
};


/***/ }),

/***/ "./src/app/services/product.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/product.service.ts ***!
  \*********************************************/
/*! exports provided: ProductService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductService", function() { return ProductService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProductService = /** @class */ (function () {
    function ProductService(http) {
        this.http = http;
        this.baseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl + 'products/';
    }
    ProductService.prototype.createProduct = function (model) {
        return this.http.post(this.baseUrl + 'create', model);
    };
    ProductService.prototype.getProductList = function () {
        return this.http.get(this.baseUrl);
    };
    // alternative with observable
    ProductService.prototype.getProductListObs = function () {
        return this.http.get(this.baseUrl);
    };
    // product/1
    ProductService.prototype.getProduct = function (id) {
        return this.http.get(this.baseUrl + id);
    };
    ProductService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], ProductService);
    return ProductService;
}());



/***/ }),

/***/ "./src/app/services/user.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/user.service.ts ***!
  \******************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @auth0/angular-jwt */ "./node_modules/@auth0/angular-jwt/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var UserService = /** @class */ (function () {
    function UserService(http) {
        this.http = http;
        // 'http://localhost:5000/api/'
        this.baseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl + 'Users/';
        // baseUrl =  environment.apiUrl +  'Auth/';
        this.jwtHelper = new _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_2__["JwtHelperService"]();
    }
    UserService.prototype.register = function (user) {
        return this.http.post(this.baseUrl + 'register', user);
    };
    UserService.prototype.loggedIn = function () {
        // if token is not expired the user is logged in
        var token = localStorage.getItem('token');
        return !this.jwtHelper.isTokenExpired(token);
    };
    UserService.prototype.loggedAsAdmin = function () {
        // if token is not expired the user is logged in
        var token = localStorage.getItem('token');
        if (!this.jwtHelper.isTokenExpired(token)) {
            // user is logged in, now check if user is Admin
            var data = JSON.parse(localStorage.getItem('user'));
            if (data != null) {
                if (data['isAdmin'] === 1) {
                    // console.log('userr --->isAdmin' );
                    return true;
                }
                else {
                    // console.log(data['isAdmin']);
                    return false;
                }
            }
            else {
                return false;
            }
        }
    };
    // 2 objects are recieved, token and user
    UserService.prototype.login = function (model) {
        var _this = this;
        console.log(model);
        return this.http.post(this.baseUrl + 'login', model)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (response) {
            var user = response;
            if (user) {
                localStorage.setItem('token', user.token);
                localStorage.setItem('user', JSON.stringify(user.user));
                _this.decodedToken = _this.jwtHelper.decodeToken(user.token);
                _this.currentUser = user.user;
            }
        }));
    };
    UserService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/app/value/value.component.css":
/*!*******************************************!*\
  !*** ./src/app/value/value.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/value/value.component.html":
/*!********************************************!*\
  !*** ./src/app/value/value.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p *ngFor=\"let value of values\" >\n   {{value}} \n</p>\n"

/***/ }),

/***/ "./src/app/value/value.component.ts":
/*!******************************************!*\
  !*** ./src/app/value/value.component.ts ***!
  \******************************************/
/*! exports provided: ValueComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValueComponent", function() { return ValueComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ValueComponent = /** @class */ (function () {
    function ValueComponent(http) {
        this.http = http;
    }
    ValueComponent.prototype.ngOnInit = function () {
        this.getValues();
    };
    ValueComponent.prototype.getValues = function () {
        var _this = this;
        this.http.get('http://localhost:5000/api/values').subscribe(function (response) {
            _this.values = response;
        }, function (error) {
            console.log(error);
        });
    };
    ValueComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-value',
            template: __webpack_require__(/*! ./value.component.html */ "./src/app/value/value.component.html"),
            styles: [__webpack_require__(/*! ./value.component.css */ "./src/app/value/value.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ValueComponent);
    return ValueComponent;
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
    apiUrl: 'http://localhost:5000/api/'
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

module.exports = __webpack_require__(/*! /Users/francisco/Documents/Silver/SilverApp-SPA/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map