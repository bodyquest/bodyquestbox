(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "/gyc":
/*!****************************************************************************!*\
  !*** ./src/app/shared/components/paging-header/paging-header.component.ts ***!
  \****************************************************************************/
/*! exports provided: PagingHeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagingHeaderComponent", function() { return PagingHeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");



function PagingHeaderComponent_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Showing ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " of ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Results");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", (ctx_r0.pageNumber - 1) * ctx_r0.pageSize + 1, " - ", ctx_r0.pageNumber * ctx_r0.pageSize > ctx_r0.totalCount ? ctx_r0.totalCount : ctx_r0.pageNumber * ctx_r0.pageSize, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.totalCount, " ");
} }
function PagingHeaderComponent_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " There are ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " result for this filter ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class PagingHeaderComponent {
    constructor() { }
    ngOnInit() {
    }
}
PagingHeaderComponent.ɵfac = function PagingHeaderComponent_Factory(t) { return new (t || PagingHeaderComponent)(); };
PagingHeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PagingHeaderComponent, selectors: [["app-paging-header"]], inputs: { pageNumber: "pageNumber", pageSize: "pageSize", totalCount: "totalCount" }, decls: 3, vars: 2, consts: [[1, "count"], [4, "ngIf"]], template: function PagingHeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PagingHeaderComponent_span_1_Template, 8, 3, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, PagingHeaderComponent_span_2_Template, 5, 0, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.totalCount && ctx.totalCount > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.totalCount === 0);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwYWdpbmctaGVhZGVyLmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PagingHeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-paging-header',
                templateUrl: './paging-header.component.html',
                styleUrls: ['./paging-header.component.scss']
            }]
    }], function () { return []; }, { pageNumber: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], pageSize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], totalCount: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\PC01\Documents\GitHub\Angular-bodyquest\client\src\main.ts */"zUnb");


/***/ }),

/***/ "2rwd":
/*!********************************************!*\
  !*** ./src/app/account/account.service.ts ***!
  \********************************************/
/*! exports provided: AccountService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountService", function() { return AccountService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");








class AccountService {
    constructor(http, router) {
        this.http = http;
        this.router = router;
        this.baseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiUrl;
        this.currentUserSource = new rxjs__WEBPACK_IMPORTED_MODULE_2__["ReplaySubject"](1);
        this.loggedIn = false;
        this.token = localStorage.getItem('token');
        this.httpHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
            Authorization: `Bearer ${this.token}`,
        });
        this.authCompleted$ = this.http.get(this.baseUrl + 'account', { headers: this.httpHeaders })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["shareReplay"])(1));
        this.authCompleted$.subscribe((user) => {
            this.currentUser = user;
            localStorage.setItem('token', user.token);
            this.currentUserSource.next(user);
        }, () => {
            this.currentUser = null;
            this.currentUserSource.next(null);
        });
    }
    isLoggedIn() {
        return this.loggedIn = !!localStorage.getItem('token');
    }
    loadCurrentUser(token) {
        if (token === null) {
            // tslint:disable-next-line: no-non-null-assertion
            this.currentUserSource.next(null);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(null);
        }
        const httpHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
            Authorization: `Bearer ${token}`
        });
        return this.http.get(this.baseUrl + 'account', { headers: httpHeaders }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((user) => {
            if (user) {
                localStorage.setItem('token', user.token);
                this.currentUserSource.next(user);
            }
        }));
    }
    login(values) {
        return this.http.post(this.baseUrl + 'account/login', values).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((user) => {
            if (user) {
                localStorage.setItem('token', user.token);
                this.loggedIn = true;
                this.currentUserSource.next(user);
            }
        }));
    }
    register(values) {
        return this.http.post(this.baseUrl + 'account/register', values).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((user) => {
            if (user) {
                localStorage.setItem('token', user.token);
                this.currentUserSource.next(user);
            }
        }));
    }
    logout() {
        localStorage.removeItem('token');
        this.loggedIn = true;
        this.currentUser = null;
        this.currentUserSource.next(null);
        this.router.navigateByUrl('/');
    }
    checkEmailExists(email) {
        return this.http.get(this.baseUrl + 'account/emailexists?email=' + email);
    }
    getUserAddress() {
        return this.http.get(this.baseUrl + 'account/address');
    }
    updateUserAddress(address) {
        return this.http.put(this.baseUrl + 'account/address', address);
    }
}
AccountService.ɵfac = function AccountService_Factory(t) { return new (t || AccountService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"])); };
AccountService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: AccountService, factory: AccountService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AccountService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }]; }, null); })();


/***/ }),

/***/ "6nXq":
/*!*******************************************************!*\
  !*** ./src/app/core/not-found/not-found.component.ts ***!
  \*******************************************************/
/*! exports provided: NotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFoundComponent", function() { return NotFoundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class NotFoundComponent {
    constructor() { }
    ngOnInit() {
    }
}
NotFoundComponent.ɵfac = function NotFoundComponent_Factory(t) { return new (t || NotFoundComponent)(); };
NotFoundComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NotFoundComponent, selectors: [["app-not-found"]], decls: 3, vars: 0, consts: [[1, "container", "mt-5", "d-flex", "justify-content-center"], [1, "text-danger"]], template: function NotFoundComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Not Found 404");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJub3QtZm91bmQuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NotFoundComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-not-found',
                templateUrl: './not-found.component.html',
                styleUrls: ['./not-found.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "8mIn":
/*!******************************************************!*\
  !*** ./src/app/core/interceptors/jwt.interceptor.ts ***!
  \******************************************************/
/*! exports provided: JwtInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JwtInterceptor", function() { return JwtInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class JwtInterceptor {
    intercept(request, next) {
        const token = localStorage.getItem('token');
        if (token) {
            request = request.clone({
                setHeaders: {
                    Authorization: `Bearer ${token}`
                }
            });
        }
        return next.handle(request);
    }
}
JwtInterceptor.ɵfac = function JwtInterceptor_Factory(t) { return new (t || JwtInterceptor)(); };
JwtInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: JwtInterceptor, factory: JwtInterceptor.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](JwtInterceptor, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], null, null); })();


/***/ }),

/***/ "9PhW":
/*!****************************************************************!*\
  !*** ./src/app/shared/components/stepper/stepper.component.ts ***!
  \****************************************************************/
/*! exports provided: StepperComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StepperComponent", function() { return StepperComponent; });
/* harmony import */ var _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/stepper */ "B/XX");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");




function StepperComponent_li_2_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function StepperComponent_li_2_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4); const i_r2 = ctx.index; const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r3.onClick(i_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const step_r1 = ctx.$implicit;
    const i_r2 = ctx.index;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("active", ctx_r0.selectedIndex === i_r2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", step_r1.label, " ");
} }
class StepperComponent extends _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_0__["CdkStepper"] {
    ngOnInit() {
        this.linear = this.linearModeSelected;
    }
    onClick(index) {
        this.selectedIndex = index;
    }
}
StepperComponent.ɵfac = function StepperComponent_Factory(t) { return ɵStepperComponent_BaseFactory(t || StepperComponent); };
StepperComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: StepperComponent, selectors: [["app-stepper"]], inputs: { linearModeSelected: "linearModeSelected" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([{ provide: _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_0__["CdkStepper"], useExisting: StepperComponent }]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]], decls: 5, vars: 2, consts: [[1, "container"], [1, "nav", "nav-pills", "nav-justified"], ["class", "nav-item", 4, "ngFor", "ngForOf"], [3, "ngTemplateOutlet"], [1, "nav-item"], [1, "nav-link", "py-2", "text-uppercase", "font-weight-bold", "btn-block", 3, "disabled", "click"]], template: function StepperComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ul", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, StepperComponent_li_2_Template, 3, 4, "li", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainer"](4, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.steps);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", ctx.selected.content);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgTemplateOutlet"]], styles: ["button.nav-link[_ngcontent-%COMP%] {\n  background: #d6d9dc;\n  border-radius: 0;\n  border: none;\n  color: #ffffff70;\n}\nbutton.nav-link[_ngcontent-%COMP%]:focus {\n  outline: none;\n}\nbutton.nav-link.active[_ngcontent-%COMP%] {\n  color: white;\n  background: linear-gradient(0, #E72B3F, #ff8a00);\n}\nbutton.nav-link.active[_ngcontent-%COMP%]:hover {\n  color: white;\n  background: linear-gradient(0, #E72B3F, #ff8a00);\n}\nbutton.nav-link[_ngcontent-%COMP%]:active {\n  outline: none;\n  background: linear-gradient(0, #E72B3F, #ff8a00);\n}\nbutton.nav-link[_ngcontent-%COMP%]:disabled:not(.active) {\n  color: white;\n}\nbutton.nav-link.active[_ngcontent-%COMP%]:focus {\n  outline: none;\n  background: linear-gradient(0, #E72B3F, #ff8a00);\n}\nbutton.nav-link.active[_ngcontent-%COMP%]:visited {\n  outline: none;\n  background: linear-gradient(0, #E72B3F, #ff8a00);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcc3RlcHBlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVJLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUFBSjtBQUdJO0VBQ0ksYUFBQTtBQURSO0FBR0k7RUFDSSxZQUFBO0VBQ0EsZ0RBQUE7QUFEUjtBQUdJO0VBQ0ksWUFBQTtFQUNBLGdEQUFBO0FBRFI7QUFHSTtFQUNJLGFBQUE7RUFDQSxnREFBQTtBQURSO0FBR0k7RUFDSSxZQUFBO0FBRFI7QUFHSTtFQUNJLGFBQUE7RUFDQSxnREFBQTtBQURSO0FBR0k7RUFDSSxhQUFBO0VBQ0EsZ0RBQUE7QUFEUiIsImZpbGUiOiJzdGVwcGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYnV0dG9uLm5hdi1saW5rIHtcclxuICAgIC8vYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDAsICAjRTcyQjNGNzAsI2ZmOGEwMDcwKTtcclxuICAgIGJhY2tncm91bmQ6ICNkNmQ5ZGM7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgY29sb3I6ICNmZmZmZmY3MDtcclxuXHJcbiAgICBcclxuICAgICY6Zm9jdXMge1xyXG4gICAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICB9XHJcbiAgICAmLmFjdGl2ZSB7XHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgwLCAgI0U3MkIzRiwjZmY4YTAwKTtcclxuICAgIH1cclxuICAgICYuYWN0aXZlOmhvdmVyIHtcclxuICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDAsICAjRTcyQjNGLCNmZjhhMDApO1xyXG4gICAgfVxyXG4gICAgJjphY3RpdmUge1xyXG4gICAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDAsICAjRTcyQjNGLCNmZjhhMDApO1xyXG4gICAgfVxyXG4gICAgJjpkaXNhYmxlZDpub3QoLmFjdGl2ZSkge1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIH1cclxuICAgICYuYWN0aXZlOmZvY3VzIHtcclxuICAgICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgwLCAgI0U3MkIzRiwjZmY4YTAwKTtcclxuICAgIH1cclxuICAgICYuYWN0aXZlOnZpc2l0ZWQge1xyXG4gICAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDAsICAjRTcyQjNGLCNmZjhhMDApO1xyXG4gICAgfVxyXG59Il19 */"] });
const ɵStepperComponent_BaseFactory = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](StepperComponent);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](StepperComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-stepper',
                templateUrl: './stepper.component.html',
                styleUrls: ['./stepper.component.scss'],
                providers: [{ provide: _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_0__["CdkStepper"], useExisting: StepperComponent }]
            }]
    }], null, { linearModeSelected: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }] }); })();


/***/ }),

/***/ "9vUh":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class HomeComponent {
    constructor() { }
    ngOnInit() {
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 57, vars: 0, consts: [[1, "site-media"], ["src", "../../assets/images/facility_equipment.jpg", "alt", ""], [1, "hero-text-wrapper"], [1, "social"], ["href", ""], ["src", "../../assets/images/icons/j-box-svg.svg", "alt", ""], [1, "site-wrapper"], [1, "entry"], [1, "entry-media"], ["src", "../../assets/images/vests.jpg", "alt", ""], [1, "entry-content"], [1, "entry-title"], ["href", "/#"], [1, "entry-meta"], ["src", "../../assets/images/Strength-and-Conditioning.jpg", "alt", ""], ["src", "../../assets/images/airbike.jpg", "alt", ""]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " A sleek, modern theme for personal websites ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Personal is the prefect theme for developers, designers and other creatives ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "ul", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "article", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "h3", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Unique selection");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "p", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Brand design");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, " This page is a demo that shows everything you can do indie portfolio blog posts. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "article", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "img", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "h3", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "High quality");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "p", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Brand design");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, " This page is a demo that shows everything you can do indie portfolio blog posts. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "article", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "img", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "h3", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Affordability");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "p", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Brand design");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, " This page is a demo that shows everything you can do indie portfolio blog posts. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["h1[_ngcontent-%COMP%] {\n  font-size: 2.8em;\n}\n\nh2[_ngcontent-%COMP%] {\n  font-size: 2.6em;\n}\n\nh3[_ngcontent-%COMP%] {\n  font-size: 1.8em;\n}\n\nh4[_ngcontent-%COMP%] {\n  font-size: 1.4em;\n}\n\nh5[_ngcontent-%COMP%] {\n  font-size: 1.2em;\n}\n\nh6[_ngcontent-%COMP%] {\n  font-size: 1em;\n}\n\n.site-media[_ngcontent-%COMP%] {\n  background: transparent;\n  height: 90vh;\n  overflow: hidden;\n  position: relative;\n}\n\n.site-media[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n  height: 90vh;\n  object-fit: cover;\n  object-position: center;\n}\n\n.site-media[_ngcontent-%COMP%]:before {\n  content: \"\";\n  position: absolute;\n  display: block;\n  background: rgba(19, 41, 48, 0.3);\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n}\n\n.hero-text-wrapper[_ngcontent-%COMP%] {\n  position: absolute;\n  \n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  color: white;\n  \n  font-size: 1.5em;\n  width: 70vw;\n}\n\n.hero-text-wrapper[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-weight: 600;\n}\n\n.hero-text-wrapper[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  padding-top: 2em;\n  font-weight: 400;\n  opacity: 0.8;\n}\n\n.social[_ngcontent-%COMP%] {\n  display: flex;\n  padding-top: 2em;\n  justify-content: start;\n}\n\n.social[_ngcontent-%COMP%] {\n  list-style: none;\n  padding-left: 0;\n}\n\n.social[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  display: block;\n  list-style: none;\n  margin-right: 1em;\n}\n\n.social[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  color: black;\n  width: 2.8em;\n  height: 2.8em;\n  line-height: 1;\n  border-radius: 50%;\n  background: rgba(255, 255, 255, 0.5);\n  transition: background 0.3s ease-in-out;\n}\n\n.social[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.8);\n}\n\n.social[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  max-height: 1.5em;\n  width: auto;\n  display: inline;\n}\n\n.site-wrapper[_ngcontent-%COMP%] {\n  max-width: 90vw;\n  padding: 0 8%;\n  margin: 0 auto;\n}\n\n.entry[_ngcontent-%COMP%] {\n  display: flex;\n  position: relative;\n  top: -2em;\n  z-index: 1;\n  height: 57vh;\n  margin-bottom: -2em;\n}\n\n.entry-media[_ngcontent-%COMP%] {\n  position: relative;\n  flex: 0 0 55%;\n  overflow: hidden;\n}\n\n.entry-media[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  display: block;\n  height: 60vh;\n  object-fit: cover;\n  object-position: center;\n}\n\n.entry-media[_ngcontent-%COMP%]:hover   img[_ngcontent-%COMP%] {\n  transform: translate(-50%, -50%) scale(1.1);\n}\n\n.entry-content[_ngcontent-%COMP%] {\n  position: relative;\n  background: #fff;\n  margin: 2em 2em 6em -2em;\n  padding: 2em;\n  z-index: 2;\n  box-shadow: 0 0 0.5em 0 rgba(0, 0, 0, 0.07);\n}\n\n.entry-title[_ngcontent-%COMP%] {\n  padding-bottom: 0.5rem;\n  font-weight: 600;\n  font-size: 3em;\n}\n\n.entry-title[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #222;\n}\n\n.entry-meta[_ngcontent-%COMP%] {\n  margin-bottom: 3em;\n}\n\n.entry-media[_ngcontent-%COMP%]:before {\n  display: block;\n  content: \"\";\n  padding-top: 80%;\n}\n\n.entry-media[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  display: block;\n  width: auto;\n  height: 100%;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  transform-origin: center;\n  transition: transform 0.4s ease-in-out;\n}\n\n.entry[_ngcontent-%COMP%]:nth-child(even)   .entry-media[_ngcontent-%COMP%] {\n  order: 1;\n}\n\n.entry[_ngcontent-%COMP%]:nth-child(even)   .entry-content[_ngcontent-%COMP%] {\n  margin: 2em -2em 6em 2em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGhvbWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFBSyxnQkFBQTtBQUVMOztBQURBO0VBQUssZ0JBQUE7QUFLTDs7QUFKQTtFQUFLLGdCQUFBO0FBUUw7O0FBUEE7RUFBSyxnQkFBQTtBQVdMOztBQVZBO0VBQUssZ0JBQUE7QUFjTDs7QUFiQTtFQUFLLGNBQUE7QUFpQkw7O0FBZkE7RUFDSSx1QkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FBa0JKOztBQWZBO0VBQ0ksY0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSx1QkFBQTtBQWtCSjs7QUFmQTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxpQ0FBQTtFQUNBLE1BQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLE9BQUE7QUFrQko7O0FBZkE7RUFDSSxrQkFBQTtFQUNBO3VCQUFBO0VBRUEsUUFBQTtFQUNBLFNBQUE7RUFFQSxnQ0FBQTtFQUNBLFlBQUE7RUFDQSx3QkFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtBQWlCSjs7QUFkQTtFQUNJLGdCQUFBO0FBaUJKOztBQWRBO0VBQ0ksZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7QUFpQko7O0FBZEE7RUFDSSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkFBQTtBQWlCSjs7QUFmQTtFQUNJLGdCQUFBO0VBQ0EsZUFBQTtBQWtCSjs7QUFmQTtFQUNJLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FBa0JKOztBQWZBO0VBQ0ksYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBRUEsWUFBQTtFQUNBLGFBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQ0FBQTtFQUNBLHVDQUFBO0FBaUJKOztBQWRBO0VBQ0ksb0NBQUE7QUFpQko7O0FBZEE7RUFDSSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0FBaUJKOztBQWRBO0VBQ0ksZUFBQTtFQUNBLGFBQUE7RUFDQSxjQUFBO0FBaUJKOztBQWRBO0VBQ0ksYUFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFFQSxZQUFBO0VBRUEsbUJBQUE7QUFlSjs7QUFWQTtFQUNJLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0FBYUo7O0FBVkE7RUFDSSxjQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsdUJBQUE7QUFhSjs7QUFWQTtFQUNJLDJDQUFBO0FBYUo7O0FBVkE7RUFDSSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0Esd0JBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLDJDQUFBO0FBYUo7O0FBVkE7RUFDSSxzQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQWFKOztBQVZBO0VBQ0ksV0FBQTtBQWFKOztBQVZBO0VBQ0ksa0JBQUE7QUFhSjs7QUFWQTtFQUNJLGNBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7QUFhSjs7QUFWQTtFQUNJLGNBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxnQ0FBQTtFQUNBLHdCQUFBO0VBQ0Esc0NBQUE7QUFhSjs7QUFWQTtFQUNJLFFBQUE7QUFhSjs7QUFWQTtFQUNJLHdCQUFBO0FBYUoiLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImgxIHsgZm9udC1zaXplOiAyLjhlbTt9XHJcbmgyIHsgZm9udC1zaXplOiAyLjZlbTt9XHJcbmgzIHsgZm9udC1zaXplOiAxLjhlbTt9XHJcbmg0IHsgZm9udC1zaXplOiAxLjRlbTt9XHJcbmg1IHsgZm9udC1zaXplOiAxLjJlbTt9XHJcbmg2IHsgZm9udC1zaXplOiAxLjBlbTt9XHJcblxyXG4uc2l0ZS1tZWRpYSB7XHJcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgIGhlaWdodDogOTB2aDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbi5zaXRlLW1lZGlhIGltZyB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiA5MHZoO1xyXG4gICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgICBvYmplY3QtcG9zaXRpb246IGNlbnRlcjtcclxufVxyXG5cclxuLnNpdGUtbWVkaWE6YmVmb3JlIHtcclxuICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMTksIDQxLCA0OCwgMC4zMCk7XHJcbiAgICB0b3A6IDA7XHJcbiAgICByaWdodDogMDtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIGxlZnQ6IDA7XHJcbn1cclxuXHJcbi5oZXJvLXRleHQtd3JhcHBlciB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAvKiBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgIG1hcmdpbi1yaWdodDogYXV0bzsgKi9cclxuICAgIHRvcDogNTAlO1xyXG4gICAgbGVmdDogNTAlO1xyXG5cclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgLyogdGV4dC1hbGlnbjogY2VudGVyOyAqL1xyXG4gICAgZm9udC1zaXplOiAxLjVlbTtcclxuICAgIHdpZHRoOiA3MHZ3O1xyXG59XHJcblxyXG4uaGVyby10ZXh0LXdyYXBwZXIgaDIge1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxufVxyXG5cclxuLmhlcm8tdGV4dC13cmFwcGVyIHAge1xyXG4gICAgcGFkZGluZy10b3A6IDJlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICBvcGFjaXR5OiAwLjg7XHJcbn1cclxuXHJcbi5zb2NpYWwge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIHBhZGRpbmctdG9wOiAyZW07XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xyXG59XHJcbi5zb2NpYWwge1xyXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICAgIHBhZGRpbmctbGVmdDogMDtcclxufVxyXG5cclxuLnNvY2lhbCBsaSB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDFlbTtcclxufVxyXG5cclxuLnNvY2lhbCBhIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcblxyXG4gICAgd2lkdGg6IDIuOGVtO1xyXG4gICAgaGVpZ2h0OiAyLjhlbTtcclxuICAgIGxpbmUtaGVpZ2h0OiAxO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpO1xyXG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZCAwLjNzIGVhc2UtaW4tb3V0O1xyXG59XHJcblxyXG4uc29jaWFsIGE6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjgpO1xyXG59XHJcblxyXG4uc29jaWFsIGltZyB7XHJcbiAgICBtYXgtaGVpZ2h0OiAxLjVlbTtcclxuICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgZGlzcGxheTogaW5saW5lO1xyXG59XHJcblxyXG4uc2l0ZS13cmFwcGVyIHtcclxuICAgIG1heC13aWR0aDogOTB2dztcclxuICAgIHBhZGRpbmc6IDAgOCU7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxufVxyXG5cclxuLmVudHJ5IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB0b3A6IC0yZW07XHJcbiAgICB6LWluZGV4OiAxO1xyXG5cclxuICAgIGhlaWdodDogNTd2aDtcclxuICAgIFxyXG4gICAgbWFyZ2luLWJvdHRvbTogLTJlbTtcclxuICAgIC8vIGJhY2tncm91bmQ6ICNmOGY4Zjg7XHJcbiAgICAvLyBib3gtc2hhZG93OiAwIDAgMWVtIDAgcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG59XHJcblxyXG4uZW50cnktbWVkaWF7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBmbGV4OiAwIDAgNTUlO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG5cclxuLmVudHJ5LW1lZGlhIGltZyB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGhlaWdodDogNjB2aDtcclxuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gICAgb2JqZWN0LXBvc2l0aW9uOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5lbnRyeS1tZWRpYTpob3ZlciBpbWcge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSkgc2NhbGUoMS4xKSA7XHJcbn1cclxuXHJcbi5lbnRyeS1jb250ZW50IHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICBtYXJnaW46IDJlbSAyZW0gNmVtIC0yZW07XHJcbiAgICBwYWRkaW5nOiAyZW07XHJcbiAgICB6LWluZGV4OiAyO1xyXG4gICAgYm94LXNoYWRvdzogMCAwIDAuNWVtIDAgcmdiYSgwLCAwLCAwLCAwLjA3KTtcclxufVxyXG5cclxuLmVudHJ5LXRpdGxlIHtcclxuICAgIHBhZGRpbmctYm90dG9tOiAwLjVyZW07XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgZm9udC1zaXplOiAzZW07XHJcbn1cclxuXHJcbi5lbnRyeS10aXRsZSBhe1xyXG4gICAgY29sb3I6ICMyMjI7XHJcbn1cclxuXHJcbi5lbnRyeS1tZXRhIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDNlbTtcclxufVxyXG5cclxuLmVudHJ5LW1lZGlhOmJlZm9yZSB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICBwYWRkaW5nLXRvcDogODAlO1xyXG59XHJcblxyXG4uZW50cnktbWVkaWEgaW1nIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgd2lkdGg6IGF1dG87XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDUwJTtcclxuICAgIGxlZnQ6IDUwJTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gICAgdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyO1xyXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuNHMgZWFzZS1pbi1vdXQgO1xyXG59XHJcblxyXG4uZW50cnk6bnRoLWNoaWxkKGV2ZW4pIC5lbnRyeS1tZWRpYSB7XHJcbiAgICBvcmRlcjogMTtcclxufVxyXG5cclxuLmVudHJ5Om50aC1jaGlsZChldmVuKSAuZW50cnktY29udGVudCB7XHJcbiAgICBtYXJnaW46IDJlbSAtMmVtIDZlbSAyZW07XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-home',
                templateUrl: './home.component.html',
                styleUrls: ['./home.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "Ag0X":
/*!*****************************************************************!*\
  !*** ./src/app/core/section-header/section-header.component.ts ***!
  \*****************************************************************/
/*! exports provided: SectionHeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SectionHeaderComponent", function() { return SectionHeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var xng_breadcrumb__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! xng-breadcrumb */ "tc9g");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");




function SectionHeaderComponent_ng_container_0_section_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "xng-breadcrumb");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const breadcrumbs_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 1, breadcrumbs_r1.length > 0 && breadcrumbs_r1[breadcrumbs_r1.length - 1].label));
} }
function SectionHeaderComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SectionHeaderComponent_ng_container_0_section_1_Template, 9, 3, "section", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const breadcrumbs_r1 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", breadcrumbs_r1.length > 0 && breadcrumbs_r1[breadcrumbs_r1.length - 1].label !== "Home");
} }
class SectionHeaderComponent {
    constructor(bcService) {
        this.bcService = bcService;
    }
    ngOnInit() {
        this.breadcrumb$ = this.bcService.breadcrumbs$;
    }
}
SectionHeaderComponent.ɵfac = function SectionHeaderComponent_Factory(t) { return new (t || SectionHeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](xng_breadcrumb__WEBPACK_IMPORTED_MODULE_1__["BreadcrumbService"])); };
SectionHeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SectionHeaderComponent, selectors: [["app-section-header"]], decls: 2, vars: 3, consts: [[4, "ngIf"], ["class", "breadcrumbs-container-wrapper", 4, "ngIf"], [1, "breadcrumbs-container-wrapper"], [1, "breadcrumbs-container", 2, "background-color", "#f5f5f5"], [1, "breadcrumbs"], [1, "breadcrumb-title"], [1, "breadcrumb-nav"]], template: function SectionHeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, SectionHeaderComponent_ng_container_0_Template, 2, 1, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "async");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 1, ctx.breadcrumb$));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], xng_breadcrumb__WEBPACK_IMPORTED_MODULE_1__["BreadcrumbComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["AsyncPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["TitleCasePipe"]], styles: [".xng-breadcrumb-trail[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n}\n\n.breadcrumbs-container-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  width: 100%;\n}\n\n.breadcrumbs-container[_ngcontent-%COMP%] {\n  flex: 0 0 100%;\n  padding: 0em 3em;\n}\n\n.breadcrumbs[_ngcontent-%COMP%] {\n  display: flex;\n  width: 100%;\n  align-items: center;\n}\n\n.breadcrumb-nav[_ngcontent-%COMP%] {\n  margin-left: 3em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxzZWN0aW9uLWhlYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFBO0FBQ0o7O0FBRUE7RUFDSSxhQUFBO0VBQ0EsV0FBQTtBQUNKOztBQUVBO0VBQ0ksY0FBQTtFQUVBLGdCQUFBO0FBQUo7O0FBR0E7RUFDSSxhQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0FBQUo7O0FBR0E7RUFDSSxnQkFBQTtBQUFKIiwiZmlsZSI6InNlY3Rpb24taGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnhuZy1icmVhZGNydW1iLXRyYWlsIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbn1cclxuXHJcbi5icmVhZGNydW1icy1jb250YWluZXItd3JhcHBlciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5icmVhZGNydW1icy1jb250YWluZXIge1xyXG4gICAgZmxleDogMCAwIDEwMCU7XHJcbiAgICAvLyB3aWR0aDogMTAwJTtcclxuICAgIHBhZGRpbmc6IDBlbSAzZW07XHJcbn1cclxuXHJcbi5icmVhZGNydW1icyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4uYnJlYWRjcnVtYi1uYXYge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDNlbTtcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SectionHeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-section-header',
                templateUrl: './section-header.component.html',
                styleUrls: ['./section-header.component.scss']
            }]
    }], function () { return [{ type: xng_breadcrumb__WEBPACK_IMPORTED_MODULE_1__["BreadcrumbService"] }]; }, null); })();


/***/ }),

/***/ "AytR":
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
const environment = {
    production: false,
    apiUrl: 'https://localhost:5001/api/'
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

/***/ "FxKa":
/*!*****************************************!*\
  !*** ./src/app/shared/models/basket.ts ***!
  \*****************************************/
/*! exports provided: Basket */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Basket", function() { return Basket; });
class Basket {
    constructor() {
        this.id = createUUID();
        this.items = [];
    }
}
function createUUID() {
    var dt = new Date().getTime();
    var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = (dt + Math.random() * 16) % 16 | 0;
        dt = Math.floor(dt / 16);
        return (c == 'x' ? r : (r & 0x3 | 0x8)).toString(16);
    });
    return uuid;
}


/***/ }),

/***/ "FxTl":
/*!*************************************************!*\
  !*** ./src/app/core/footer/footer.component.ts ***!
  \*************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");



class FooterComponent {
    constructor() { }
    ngOnInit() {
        this.year = new Date().getFullYear();
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 67, vars: 1, consts: [[1, "site-footer"], [1, "footer-container"], [1, "navigation"], [1, "nav-one"], ["href", ""], [1, "nav-two"], [1, "nav-three"], ["routerLink", "/shop"], [1, "nav-four"], ["routerLink", "/account/register"], ["routerLink", "/account/login"], [1, "nav-five"], ["aria-hidden", "true", 1, "fa", "fa-phone-square"], ["aria-hidden", "true", 1, "fa", "fa-envelope-square"], [1, "social"], [1, "icons"], ["href", "https://www.facebook.com/bodyquestbox/", "target", "_blank"], ["aria-hidden", "true", 1, "fa", "fa-facebook-square"], ["href", "https://www.instagram.com/bodyquest/", "target", "_blank", 1, "instagram"], ["id", "insta", "aria-hidden", "true", 1, "fa", "fa-instagram"], [1, "copyright"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "section", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "section", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "About us");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Who We Are");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "section", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Policy");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Privacy & Terms of Service");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "section", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Shopping");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "All Products");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "New Products");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Product Bundle Sets");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "section", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Members");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Register");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "section", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Contact");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "+359 885 757785 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "bodyquest@gmail.com ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "section", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Connect");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](58, "i", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](61, "i", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "section", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "\u00A9 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.year, " Bodyquestbox");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]], styles: [".site-footer[_ngcontent-%COMP%] {\n  max-width: 100vw;\n  margin: 0;\n  padding: 1.5em 3em 1em 3em;\n  margin-top: 1em;\n  background-color: #3d3d3d;\n}\n\na[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\n.footer-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-flow: column wrap;\n  justify-content: center;\n  align-items: center;\n}\n\n.navigation[_ngcontent-%COMP%] {\n  display: flex;\n  flex: 1 1 100%;\n  color: white;\n}\n\n.navigation[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]:not(:last-child) {\n  margin-right: 3em;\n}\n\n.navigation[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  margin-bottom: 0.5em;\n}\n\n.navigation[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%], .social[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  list-style: none;\n  padding: 0;\n}\n\n.icons[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:first-child {\n  margin-right: 0.5em;\n}\n\n.navigation[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: white;\n  font-size: 0.9em;\n  font-weight: 200;\n}\n\n.social[_ngcontent-%COMP%] {\n  display: flex;\n  flex-flow: column wrap;\n}\n\n.social[_ngcontent-%COMP%]   .icons[_ngcontent-%COMP%] {\n  display: flex;\n}\n\n.social[_ngcontent-%COMP%]   .icons[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: flex;\n  width: 2.5em;\n  height: 2.5em;\n  align-items: center;\n  justify-content: center;\n  border-radius: 50%;\n  background: rgba(255, 255, 255, 0.8);\n  transition: background 0.2s ease-in-out;\n}\n\n.social[_ngcontent-%COMP%]   .icons[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.97);\n}\n\n.social[_ngcontent-%COMP%]   .icons[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 1.5em;\n  color: #ccc;\n}\n\n.social[_ngcontent-%COMP%]   .icons[_ngcontent-%COMP%]   .fa-facebook-square[_ngcontent-%COMP%] {\n  color: #3759a8;\n}\n\n.instagram[_ngcontent-%COMP%] {\n  position: relative;\n}\n\n.social[_ngcontent-%COMP%]   .icons[_ngcontent-%COMP%]   .fa-instagram[_ngcontent-%COMP%] {\n  background: white;\n  background: radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%);\n  -webkit-background-clip: text;\n  background-clip: text;\n  -webkit-text-fill-color: transparent;\n  position: relative;\n}\n\n.nav-five[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 1em;\n  margin-right: 1em;\n  color: #ccc;\n}\n\n.copyright[_ngcontent-%COMP%] {\n  flex: 1 1 100%;\n  color: #999;\n  font-size: 0.9em;\n  font-weight: 200;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxmb290ZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxnQkFBQTtFQUNBLFNBQUE7RUFDQSwwQkFBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtBQUNKOztBQUVBO0VBQ0ksZUFBQTtBQUNKOztBQUVBO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQUNKOztBQUVBO0VBQ0ksYUFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0FBQ0o7O0FBRUE7RUFDSSxpQkFBQTtBQUNKOztBQUVBO0VBQ0ksb0JBQUE7QUFDSjs7QUFFQTs7RUFFSSxnQkFBQTtFQUNBLFVBQUE7QUFDSjs7QUFFQTtFQUNJLG1CQUFBO0FBQ0o7O0FBRUE7RUFDSSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQUNKOztBQUVBO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0FBQ0o7O0FBRUE7RUFDSSxhQUFBO0FBQ0o7O0FBRUE7RUFDSSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBRUEsa0JBQUE7RUFDQSxvQ0FBQTtFQUNBLHVDQUFBO0FBQUo7O0FBR0E7RUFDSSxxQ0FBQTtBQUFKOztBQUdBO0VBQ0ksZ0JBQUE7RUFDQSxXQUFBO0FBQUo7O0FBR0E7RUFDSSxjQUFBO0FBQUo7O0FBR0E7RUFDSSxrQkFBQTtBQUFKOztBQUdBO0VBQ0ksaUJBQUE7RUFDQSw4R0FBQTtFQUNBLDZCQUFBO0VBQ0EscUJBQUE7RUFDQSxvQ0FBQTtFQUNBLGtCQUFBO0FBQUo7O0FBZ0JBO0VBQ0ksY0FBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtBQWJKOztBQWdCQTtFQUNJLGNBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQWJKIiwiZmlsZSI6ImZvb3Rlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zaXRlLWZvb3RlciB7XHJcbiAgICBtYXgtd2lkdGg6IDEwMHZ3O1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZzogMS41ZW0gM2VtIDFlbSAzZW07XHJcbiAgICBtYXJnaW4tdG9wOiAxZW07XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2QzZDNkO1xyXG59XHJcblxyXG5hIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLmZvb3Rlci1jb250YWluZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZmxvdzogY29sdW1uIHdyYXA7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5uYXZpZ2F0aW9uIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4OiAxIDEgMTAwJTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLm5hdmlnYXRpb24gc2VjdGlvbjpub3QoOmxhc3QtY2hpbGQpIHtcclxuICAgIG1hcmdpbi1yaWdodDogM2VtO1xyXG59XHJcblxyXG4ubmF2aWdhdGlvbiBzZWN0aW9uIGg1IHtcclxuICAgIG1hcmdpbi1ib3R0b206IDAuNWVtO1xyXG59XHJcblxyXG4ubmF2aWdhdGlvbiB1bCxcclxuLnNvY2lhbCBsaSB7XHJcbiAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgcGFkZGluZzogMDtcclxufVxyXG5cclxuLmljb25zIGxpOmZpcnN0LWNoaWxkIHtcclxuICAgIG1hcmdpbi1yaWdodDogMC41ZW07XHJcbn1cclxuXHJcbi5uYXZpZ2F0aW9uIGEge1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgZm9udC1zaXplOiAwLjllbTtcclxuICAgIGZvbnQtd2VpZ2h0OiAyMDA7XHJcbn1cclxuXHJcbi5zb2NpYWwge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZmxvdzogY29sdW1uIHdyYXA7XHJcbn1cclxuXHJcbi5zb2NpYWwgLmljb25zIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuXHJcbi5zb2NpYWwgLmljb25zIGEge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIHdpZHRoOiAyLjVlbTtcclxuICAgIGhlaWdodDogMi41ZW07XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAvLyBsaW5lLWhlaWdodDogMTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44KTtcclxuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQgMC4ycyBlYXNlLWluLW91dDtcclxufVxyXG5cclxuLnNvY2lhbCAuaWNvbnMgYTpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOTcpO1xyXG59XHJcblxyXG4uc29jaWFsIC5pY29ucyBpIHtcclxuICAgIGZvbnQtc2l6ZTogMS41ZW07XHJcbiAgICBjb2xvcjogI2NjYztcclxufVxyXG5cclxuLnNvY2lhbCAuaWNvbnMgLmZhLWZhY2Vib29rLXNxdWFyZSB7XHJcbiAgICBjb2xvcjogIzM3NTlhODtcclxufVxyXG5cclxuLmluc3RhZ3JhbSB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbi5zb2NpYWwgLmljb25zIC5mYS1pbnN0YWdyYW0ge1xyXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICBiYWNrZ3JvdW5kOiByYWRpYWwtZ3JhZGllbnQoY2lyY2xlIGF0IDMwJSAxMDclLCAjZmRmNDk3IDAlLCAjZmRmNDk3IDUlLCAjZmQ1OTQ5IDQ1JSwgI2Q2MjQ5ZiA2MCUsICMyODVBRUIgOTAlKTtcclxuICAgIC13ZWJraXQtYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xyXG4gICAgYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xyXG4gICAgLXdlYmtpdC10ZXh0LWZpbGwtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4vLyAuZmEtaW5zdGFncmFtOmFmdGVyIHtcclxuLy8gICAgIGNvbnRlbnQ6IFwiXCI7XHJcbi8vICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbi8vICAgICBsZWZ0OiA1MCU7XHJcbi8vICAgICB0b3A6IDUwJTtcclxuLy8gICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4vLyAgICAgd2lkdGg6IDkwJTtcclxuLy8gICAgIGhlaWdodDogODAlO1xyXG4vLyAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4vLyAgICAgYmFja2dyb3VuZDogI2ZmZmZmZjtcclxuLy8gICAgIHotaW5kZXg6IDA7XHJcbi8vIH1cclxuXHJcbi5uYXYtZml2ZSBpIHtcclxuICAgIGZvbnQtc2l6ZTogMWVtO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxZW07XHJcbiAgICBjb2xvcjogI2NjYztcclxufVxyXG5cclxuLmNvcHlyaWdodCB7XHJcbiAgICBmbGV4OiAxIDEgMTAwJTtcclxuICAgIGNvbG9yOiAjOTk5O1xyXG4gICAgZm9udC1zaXplOiAwLjllbTtcclxuICAgIGZvbnQtd2VpZ2h0OiAyMDA7XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-footer',
                templateUrl: './footer.component.html',
                styleUrls: ['./footer.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "GJcC":
/*!******************************************************************************!*\
  !*** ./src/app/shared/components/basket-summary/basket-summary.component.ts ***!
  \******************************************************************************/
/*! exports provided: BasketSummaryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasketSummaryComponent", function() { return BasketSummaryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_basket_basket_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/basket/basket.service */ "cAP4");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");





function BasketSummaryComponent_ng_container_0_th_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Remove");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function BasketSummaryComponent_ng_container_0_tr_14_i_11_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "i", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BasketSummaryComponent_ng_container_0_tr_14_i_11_Template_i_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const item_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r7.decrementItemQuantity(item_r3); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function BasketSummaryComponent_ng_container_0_tr_14_i_14_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "i", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BasketSummaryComponent_ng_container_0_tr_14_i_14_Template_i_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const item_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r10.incrementItemQuantity(item_r3); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function BasketSummaryComponent_ng_container_0_tr_14_i_20_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "i", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BasketSummaryComponent_ng_container_0_tr_14_i_20_Template_i_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15); const item_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r13.removeBasketItem(item_r3); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function BasketSummaryComponent_ng_container_0_tr_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, BasketSummaryComponent_ng_container_0_tr_14_i_11_Template, 1, 0, "i", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, BasketSummaryComponent_ng_container_0_tr_14_i_14_Template, 1, 0, "i", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](17, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, BasketSummaryComponent_ng_container_0_tr_14_i_20_Template, 1, 0, "i", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r3 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", item_r3.pictureUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("alt", item_r3.productName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/shop/", item_r3.id || item_r3.productId, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r3.productName, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r3.price);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.isBasket);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r3.quantity);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.isBasket);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](17, 10, item_r3.price * item_r3.quantity, "1.2-2"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.isBasket);
} }
function BasketSummaryComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "table", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Product");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Price");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Quantity");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Subtotal");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, BasketSummaryComponent_ng_container_0_th_12_Template, 2, 0, "th", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, BasketSummaryComponent_ng_container_0_tr_14_Template, 21, 13, "tr", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.isBasket);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.items);
} }
class BasketSummaryComponent {
    constructor(basketService) {
        this.basketService = basketService;
        // basket$!: Observable<IBasket>;
        this.thumbnail = '';
        this.isBasket = true;
        this.items = [];
        this.isOrder = false;
        this.decrement = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.increment = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.remove = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() {
        // if (this.basketService.basket$ !== null) {
        //   this.basket$ = this.basketService.basket$;
        // }
    }
    decrementItemQuantity(item) {
        this.decrement.emit(item);
    }
    incrementItemQuantity(item) {
        this.increment.emit(item);
    }
    removeBasketItem(item) {
        this.remove.emit(item);
    }
    convertImage(pictureUrl) {
        let result = pictureUrl.replace("upload/", "upload/w_50,ar_1:1,c_fill,g_auto/");
        this.thumbnail = result;
    }
}
BasketSummaryComponent.ɵfac = function BasketSummaryComponent_Factory(t) { return new (t || BasketSummaryComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_basket_basket_service__WEBPACK_IMPORTED_MODULE_1__["BasketService"])); };
BasketSummaryComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BasketSummaryComponent, selectors: [["app-basket-summary"]], inputs: { isBasket: "isBasket", items: "items", isOrder: "isOrder" }, outputs: { decrement: "decrement", increment: "increment", remove: "remove" }, decls: 1, vars: 1, consts: [[4, "ngIf"], [1, "products"], [4, "ngFor", "ngForOf"], [3, "src", "alt"], [3, "routerLink"], ["class", "fa fa-minus-circle", 3, "click", 4, "ngIf"], ["class", "fa fa-plus-circle", 3, "click", 4, "ngIf"], ["href", ""], ["class", "fa fa-trash", 3, "click", 4, "ngIf"], [1, "fa", "fa-minus-circle", 3, "click"], [1, "fa", "fa-plus-circle", 3, "click"], [1, "fa", "fa-trash", 3, "click"]], template: function BasketSummaryComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, BasketSummaryComponent_ng_container_0_Template, 15, 2, "ng-container", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.items.length > 0);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DecimalPipe"]], styles: ["table[_ngcontent-%COMP%] {\n  width: 100%;\n  margin: 0 auto;\n  border-collapse: collapse;\n}\n\n.products[_ngcontent-%COMP%]    > tfoot[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  position: relative;\n  float: right;\n}\n\ntable[_ngcontent-%COMP%], td[_ngcontent-%COMP%], th[_ngcontent-%COMP%] {\n  border: 1px solid #ccc;\n}\n\nthead[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]    > th[_ngcontent-%COMP%], tbody[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%] {\n  padding: 0.4em;\n}\n\ntd[_ngcontent-%COMP%]:nth-child(1) {\n  padding-left: 0.4em;\n}\n\ntd[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #444444;\n}\n\ntd[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 40px;\n}\n\ntable[_ngcontent-%COMP%]    > thead[_ngcontent-%COMP%] {\n  color: white;\n  background-image: linear-gradient(90deg, #E72B3F, #ff8a00);\n  text-align: left;\n}\n\ntbody[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]:nth-child(odd) {\n  background: #eee;\n}\n\ntbody[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]:nth-child(even) {\n  background: #fff;\n}\n\n.products[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:not(:nth-child(1)) {\n  text-align: center;\n}\n\n.products[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  display: inline-block;\n}\n\n.products[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:nth-child(2) {\n  margin-left: 0.5em;\n}\n\n.update-table[_ngcontent-%COMP%] {\n  float: right;\n}\n\n.update-table[_ngcontent-%COMP%]    > tbody[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%] {\n  background: white;\n  text-align: left;\n}\n\n.update-cart[_ngcontent-%COMP%] {\n  margin: 0;\n  background-image: linear-gradient(90deg, #E72B3F, #ff8a00);\n  padding: 0.5em 5em;\n  color: white;\n  font-weight: 700;\n  float: right;\n  border: none;\n  cursor: pointer;\n}\n\n.fa-minus-circle[_ngcontent-%COMP%], .fa-plus-circle[_ngcontent-%COMP%] {\n  font-size: 1.2em;\n  cursor: pointer;\n  margin-top: 0.2em;\n}\n\n.fa-minus-circle[_ngcontent-%COMP%] {\n  color: #FF8901;\n  margin-right: 0.4em;\n}\n\n.fa-plus-circle[_ngcontent-%COMP%] {\n  color: #FF8901;\n  margin-left: 0.4em;\n}\n\n.fa-trash[_ngcontent-%COMP%] {\n  font-size: 1.5em;\n  align-self: middle;\n  justify-self: center;\n  background: linear-gradient(45deg, #E72B3F 0%, #FF8901 100%);\n  -webkit-background-clip: text;\n  -moz-background-clip: text;\n  background-clip: text;\n  -webkit-text-fill-color: transparent;\n}\n\n.products[_ngcontent-%COMP%]    > tbody[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]    > td[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  font-size: 1em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcYmFza2V0LXN1bW1hcnkuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0VBQ0EsY0FBQTtFQUNBLHlCQUFBO0FBQ0o7O0FBRUE7RUFDSSxhQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7QUFDSjs7QUFFQTs7O0VBR0ksc0JBQUE7QUFDSjs7QUFFQTs7RUFFSSxjQUFBO0FBQ0o7O0FBRUE7RUFDSSxtQkFBQTtBQUNKOztBQUVBO0VBQ0ksY0FBQTtBQUNKOztBQUVBO0VBQ0ksWUFBQTtBQUNKOztBQUVBO0VBQ0ksWUFBQTtFQUNBLDBEQUFBO0VBQ0EsZ0JBQUE7QUFDSjs7QUFFQTtFQUNJLGdCQUFBO0FBQ0o7O0FBRUE7RUFDSSxnQkFBQTtBQUNKOztBQUVBO0VBQ0ksa0JBQUE7QUFDSjs7QUFFQTtFQUNJLHFCQUFBO0FBQ0o7O0FBRUE7RUFDSSxrQkFBQTtBQUNKOztBQUVBO0VBQ0ksWUFBQTtBQUNKOztBQUVBO0VBQ0ksaUJBQUE7RUFDQSxnQkFBQTtBQUNKOztBQUVBO0VBQ0ksU0FBQTtFQUNBLDBEQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QUFDSjs7QUFFQTs7RUFFSSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQUNKOztBQUVBO0VBQ0ksY0FBQTtFQUNBLG1CQUFBO0FBQ0o7O0FBRUE7RUFDSSxjQUFBO0VBQ0Esa0JBQUE7QUFDSjs7QUFFQTtFQUNJLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtFQUdBLDREQUFBO0VBQ0EsNkJBQUE7RUFDQSwwQkFBQTtFQUNBLHFCQUFBO0VBQ0Esb0NBQUE7QUFDSjs7QUFFQTtFQUNJLGNBQUE7QUFDSiIsImZpbGUiOiJiYXNrZXQtc3VtbWFyeS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbInRhYmxlIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xyXG59XHJcblxyXG4ucHJvZHVjdHMgPiB0Zm9vdCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGZsb2F0OiByaWdodDtcclxufVxyXG5cclxudGFibGUsXHJcbnRkLFxyXG50aCB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xyXG59XHJcblxyXG50aGVhZCA+IHRyID4gdGgsXHJcbnRib2R5ID4gdHIge1xyXG4gICAgcGFkZGluZzogMC40ZW07XHJcbn1cclxuXHJcbnRkOm50aC1jaGlsZCgxKSB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDAuNGVtO1xyXG59XHJcblxyXG50ZCBhIHtcclxuICAgIGNvbG9yOiAjNDQ0NDQ0O1xyXG59XHJcblxyXG50ZCBpbWcge1xyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG59XHJcblxyXG50YWJsZSA+IHRoZWFkIHtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgI0U3MkIzRiwjZmY4YTAwKTtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbn1cclxuXHJcbnRib2R5ID4gdHI6bnRoLWNoaWxkKG9kZCkge1xyXG4gICAgYmFja2dyb3VuZDogI2VlZTtcclxufVxyXG5cclxudGJvZHkgPiB0cjpudGgtY2hpbGQoZXZlbikge1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcclxufVxyXG5cclxuLnByb2R1Y3RzIHRkOm5vdCg6bnRoLWNoaWxkKDEpKXtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlclxyXG59XHJcblxyXG4ucHJvZHVjdHMgdGQgPiBkaXYge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG59XHJcblxyXG4ucHJvZHVjdHMgdGQgPiBkaXY6bnRoLWNoaWxkKDIpIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAwLjVlbTtcclxufVxyXG5cclxuLnVwZGF0ZS10YWJsZSAge1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG59XHJcblxyXG4udXBkYXRlLXRhYmxlID4gdGJvZHkgPnRyIHtcclxuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxufVxyXG5cclxuLnVwZGF0ZS1jYXJ0IHtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgI0U3MkIzRiwjZmY4YTAwKTtcclxuICAgIHBhZGRpbmc6IDAuNWVtIDVlbTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5mYS1taW51cy1jaXJjbGUsXHJcbi5mYS1wbHVzLWNpcmNsZSB7XHJcbiAgICBmb250LXNpemU6IDEuMmVtO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgbWFyZ2luLXRvcDogMC4yZW07XHJcbn1cclxuXHJcbi5mYS1taW51cy1jaXJjbGUge1xyXG4gICAgY29sb3I6ICNGRjg5MDE7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDAuNGVtO1xyXG59XHJcblxyXG4uZmEtcGx1cy1jaXJjbGUge1xyXG4gICAgY29sb3I6ICNGRjg5MDE7XHJcbiAgICBtYXJnaW4tbGVmdDogMC40ZW07XHJcbn1cclxuXHJcbi5mYS10cmFzaCB7XHJcbiAgICBmb250LXNpemU6IDEuNWVtO1xyXG4gICAgYWxpZ24tc2VsZjogbWlkZGxlO1xyXG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kOiAtbW96LWxpbmVhci1ncmFkaWVudCg0NWRlZywgI0U3MkIzRiAwJSwjRkY4OTAxIDEwMCUpO1xyXG4gICAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQoNDVkZWcsICNFNzJCM0YgMCUsI0ZGODkwMSAxMDAlKTtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg0NWRlZywgI0U3MkIzRiAwJSwjRkY4OTAxIDEwMCUpO1xyXG4gICAgLXdlYmtpdC1iYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XHJcbiAgICAtbW96LWJhY2tncm91bmQtY2xpcDogdGV4dDtcclxuICAgIGJhY2tncm91bmQtY2xpcDogdGV4dDtcclxuICAgIC13ZWJraXQtdGV4dC1maWxsLWNvbG9yOiB0cmFuc3BhcmVudDtcclxufVxyXG5cclxuLnByb2R1Y3RzID4gdGJvZHkgPiB0ciA+IHRkID4gc3BhbiB7XHJcbiAgICBmb250LXNpemU6IDFlbTtcclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BasketSummaryComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-basket-summary',
                templateUrl: './basket-summary.component.html',
                styleUrls: ['./basket-summary.component.scss']
            }]
    }], function () { return [{ type: src_app_basket_basket_service__WEBPACK_IMPORTED_MODULE_1__["BasketService"] }]; }, { isBasket: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], items: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], isOrder: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], decrement: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], increment: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], remove: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "KIxA":
/*!***************************************************!*\
  !*** ./src/app/core/nav-bar/nav-bar.component.ts ***!
  \***************************************************/
/*! exports provided: NavBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavBarComponent", function() { return NavBarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_basket_basket_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/basket/basket.service */ "cAP4");
/* harmony import */ var src_app_account_account_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/account/account.service */ "2rwd");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");






function NavBarComponent_ng_container_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "i", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 26, 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Login");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Register");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function NavBarComponent_ng_container_35_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 31, 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Orders");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Basket");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavBarComponent_ng_container_35_Template_a_click_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.logout(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Logout");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    let tmp_0_0 = null;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Welcome ", (tmp_0_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 1, ctx_r1.currentUser$)) == null ? null : tmp_0_0.displayName, " ");
} }
function NavBarComponent_div_39_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const basket_r7 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](basket_r7 == null ? null : basket_r7.items.length);
} }
const _c0 = function () { return { exact: true }; };
class NavBarComponent {
    constructor(basketService, accountService) {
        this.basketService = basketService;
        this.accountService = accountService;
    }
    get isLogged() {
        return this.accountService.isLoggedIn();
    }
    ngOnInit() {
        // if (this.basketService.basket$ !== null) {
        this.basket$ = this.basketService.basket$;
        // }
        // this.currentUser$ = this.accountService.currentUser$;
        this.currentUser$ = this.accountService.authCompleted$;
    }
    logout() {
        this.accountService.logout();
    }
}
NavBarComponent.ɵfac = function NavBarComponent_Factory(t) { return new (t || NavBarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_basket_basket_service__WEBPACK_IMPORTED_MODULE_1__["BasketService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_account_account_service__WEBPACK_IMPORTED_MODULE_2__["AccountService"])); };
NavBarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavBarComponent, selectors: [["app-nav-bar"]], decls: 46, vars: 13, consts: [[1, "site-header"], [1, "wrapper"], [1, "site-branding"], [1, "site-title"], ["routerLink", "/"], [1, "site-description"], [1, "main-nav"], [1, "search-field"], ["type", "search"], [1, "fa", "fa-search"], [1, "site-nav"], ["routerLink", "/test-error"], ["routerLink", "/shop", "routerLinkActive", "activated", 3, "routerLinkActiveOptions"], ["routerLink", "/shop/new", "routerLinkActive", "activated", 3, "routerLinkActiveOptions"], ["routerLink", "/shop/barsandplates", "routerLinkActive", "activated", 3, "routerLinkActiveOptions"], ["routerLink", "/shop/bestsellers", "routerLinkActive", "activated", 3, "routerLinkActiveOptions"], [1, "right-nav-section"], [4, "ngIf"], [1, "cart"], ["routerLink", "/basket"], ["src", "assets/images/SNATCH_Shopping_Cart_WHITE.png", "alt", "Shopping Cart"], ["class", "cart-qty", 4, "ngIf"], [1, "hamburger"], [1, "row"], ["id", "dropdown", 1, "login"], [1, "fa", "fa-user-o"], ["role", "tablist", "id", "navdrop", 1, "nav"], ["navdrop", ""], ["routerLink", "/account/login", "role", "tab", "data-toggle", "tab", 1, "nav-link"], ["routerLink", "/account/register", "role", "tab", "data-toggle", "tab", 1, "nav-link"], ["href", "#", 1, "display-name"], ["role", "tablist", "id", "navdrop", 1, "nav-user"], ["routerLink", "/orders", "role", "tab", "data-toggle", "tab", 1, "nav-link"], ["routerLink", "/basket", "role", "tab", "data-toggle", "tab", 1, "nav-link"], ["role", "tab", "data-toggle", "tab", 1, "nav-link", "logout", 3, "click"], [1, "cart-qty"]], template: function NavBarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "BODYQUEST");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "prepare for ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "intensity ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "section", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "section", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "nav", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Errors ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "ALL PRODUCTS ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "NEW PRODUCTS ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "BARS & PLATES ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "BESTSELLERS ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "section", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](34, NavBarComponent_ng_container_34_Template, 10, 0, "ng-container", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](35, NavBarComponent_ng_container_35_Template, 13, 3, "ng-container", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "a", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "img", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](39, NavBarComponent_div_39_Template, 2, 1, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](40, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](9, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](10, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](11, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](12, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isLogged);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLogged);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](40, 7, ctx.basket$));
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkActive"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["AsyncPipe"]], styles: ["header[_ngcontent-%COMP%] {\n  background: #3d3d3d;\n}\n\n.wrapper[_ngcontent-%COMP%] {\n  max-width: 100vw;\n  margin: 0 auto;\n}\n\na[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\n.site-header[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 0 3em;\n  border: 0;\n  border-bottom: 2px solid;\n  border-image-slice: 1;\n  border-image-source: linear-gradient(90deg, #E72B3F, #ff8a00);\n}\n\n.site-header[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%] {\n  margin: 0.2em 0.5em 0.2em 0.5em;\n}\n\n.site-branding[_ngcontent-%COMP%]   .site-title[_ngcontent-%COMP%] {\n  margin: 0.2em 0 0 0;\n  padding: 0;\n  font-size: 2.8em;\n  letter-spacing: 0.05em;\n  font-weight: normal;\n}\n\n.site-branding[_ngcontent-%COMP%]   .site-title[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  font-family: \"H_Gothic\", sans-serif;\n  color: #ffffff;\n  text-decoration: none;\n  outline: none;\n}\n\n@media screen and (min-width: 320px) {\n  .site-branding[_ngcontent-%COMP%]   .site-title[_ngcontent-%COMP%] {\n    font-size: calc(1.5em + 14 * ((100vw - 320px) / 680));\n  }\n}\n\n@media screen and (min-width: 1366px) {\n  .site-branding[_ngcontent-%COMP%]   .site-title[_ngcontent-%COMP%] {\n    font-size: 3em;\n  }\n}\n\n.site-branding[_ngcontent-%COMP%]    > .site-description[_ngcontent-%COMP%] {\n  margin: -0.2em 0 0.3em 0;\n  padding-left: 0.1em;\n  text-transform: uppercase;\n  font-size: 1.54em;\n  letter-spacing: 0.3em;\n}\n\n.site-branding[_ngcontent-%COMP%]   .site-description[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  font-family: \"Alrns\", sans-serif;\n  color: #fa1143;\n}\n\n@media screen and (min-width: 320px) {\n  .site-branding[_ngcontent-%COMP%]    > .site-description[_ngcontent-%COMP%] {\n    font-size: calc(0.85em + 6.5 * ((100vw - 320px) / 680));\n  }\n}\n\n@media screen and (min-width: 1366px) {\n  .site-branding[_ngcontent-%COMP%]    > .site-description[_ngcontent-%COMP%] {\n    font-size: 1.64em;\n  }\n}\n\n.site-branding[_ngcontent-%COMP%]   .site-description[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  font-family: \"Alrns\", sans-serif;\n  color: #fbfbfb;\n  text-decoration: none;\n  opacity: 0.8;\n}\n\n@media screen and (min-width: 320px) {\n  .site-nav[_ngcontent-%COMP%] {\n    font-size: calc(0.6em + 2.7 * ((100vw - 320px) / 680));\n  }\n}\n\n@media screen and (min-width: 1500px) {\n  .site-nav[_ngcontent-%COMP%] {\n    font-size: 1em;\n  }\n}\n\n.site-nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n  display: flex;\n  justify-items: flex-start;\n}\n\n.site-nav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  font-family: Arial, Helvetica, sans-serif;\n  font-size: 1em;\n  display: block;\n  list-style: none outside;\n  padding: 0 0.1em;\n}\n\n.site-nav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(1) {\n  margin: 0.3em 0;\n}\n\n.site-nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: block;\n  padding: 0.5em 0.5em;\n  border-radius: 0.3em;\n  color: #bdbdbd;\n  transition: color 0.3s ease-in-out;\n  outline: none;\n}\n\n.site-nav[_ngcontent-%COMP%]   a.activated[_ngcontent-%COMP%] {\n  color: #EE1143;\n}\n\n.site-nav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(1)   a[_ngcontent-%COMP%] {\n  background: #E72B3F;\n  border: none;\n  border-radius: 0.4em;\n  color: white;\n  font-weight: 700;\n  text-decoration: none;\n  padding: 0.3em 2em;\n}\n\n.site-nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #d8d8d8;\n  transition: color 0.3s ease-in-out;\n}\n\n.site-nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover.activated {\n  transition: color 0.3s ease-in-out;\n}\n\n.main-nav[_ngcontent-%COMP%] {\n  display: flex;\n  flex-flow: column wrap;\n  align-items: flex-start;\n  width: 47vw;\n  padding-top: 0.1em;\n}\n\n.search-field[_ngcontent-%COMP%] {\n  display: inline-flex;\n  flex: 1 1 100%;\n  align-self: stretch;\n  background: rgba(255, 255, 255, 0.8);\n  margin: 0.8em 0.5em 0 0.5em;\n  height: 0.8em;\n  align-items: center;\n  padding: 5px;\n  border-radius: 0.4em;\n}\n\n.search-field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  flex: 1;\n  background: transparent;\n  border: 0;\n  text-indent: 5px;\n  font-size: 20px;\n  color: #777;\n  font-family: Arial, Helvetica, sans-serif;\n}\n\n.search-field[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  border: 0;\n  background-color: transparent;\n  width: 24px;\n  height: 24px;\n  border-radius: 50%;\n  cursor: pointer;\n  padding: 0;\n  order: -1;\n}\n\n.search-field[_ngcontent-%COMP%]   .fa-search[_ngcontent-%COMP%] {\n  font-size: 1.5em;\n  color: #777;\n}\n\n.right-nav-section[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-end;\n  align-self: flex-start;\n  margin-top: 1.7em;\n  position: relative;\n}\n\n@media screen and (max-width: 1366px) {\n  .right-nav-section[_ngcontent-%COMP%] {\n    margin-top: calc(1.2em - 3 * ((100vw - 320px) / 680));\n  }\n}\n\n.right-nav-section[_ngcontent-%COMP%]    > .login[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]    > .fa-user-o[_ngcontent-%COMP%] {\n  color: white;\n  font-size: 1.8em;\n  cursor: pointer;\n}\n\n.right-nav-section[_ngcontent-%COMP%]    > .cart[_ngcontent-%COMP%] {\n  position: relative;\n}\n\n.right-nav-section[_ngcontent-%COMP%]    > .cart[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%] {\n  text-decoration: none;\n}\n\n.right-nav-section[_ngcontent-%COMP%]    > .cart[_ngcontent-%COMP%] {\n  margin-left: 1.5em;\n}\n\n.right-nav-section[_ngcontent-%COMP%]    > .cart[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]    > img[_ngcontent-%COMP%] {\n  max-width: 2.6em;\n  display: block;\n  height: auto;\n}\n\n.right-nav-section[_ngcontent-%COMP%]    > .cart[_ngcontent-%COMP%]::before {\n  content: \"\";\n  width: 1.2em;\n  height: 1.2em;\n  background: #E72B3F;\n  border: none;\n  border-radius: 50%;\n  position: absolute;\n  top: 0px;\n  left: 0.4em;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: center;\n}\n\n.display-name[_ngcontent-%COMP%] {\n  background: -webkit-linear-gradient(left, #E72B3F 50%, #ff8a00);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  font-weight: 600;\n}\n\n.right-nav-section[_ngcontent-%COMP%]    > .cart[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]    > .cart-qty[_ngcontent-%COMP%] {\n  position: absolute;\n  top: -0.15em;\n  left: 0.83em;\n  color: white;\n  font-size: 0.9em;\n}\n\n.login[_ngcontent-%COMP%] {\n  position: relative;\n}\n\n.nav-user[_ngcontent-%COMP%] {\n  display: none;\n  position: absolute;\n  padding: 0.5em;\n  width: 6.2em;\n  height: 6.5em;\n  -ms-overflow-style: none;\n  z-index: 2;\n  left: 50%;\n  transform: translateX(-50%);\n}\n\n.nav[_ngcontent-%COMP%] {\n  display: none;\n  position: absolute;\n  padding: 0.5em;\n  width: 6.2em;\n  height: 6.5em;\n  -ms-overflow-style: none;\n  z-index: 2;\n  left: 50%;\n  transform: translateX(-50%);\n}\n\n.nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], .nav-user[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  float: none;\n  color: white;\n  background: rgba(0, 0, 0, 0.5);\n  padding: 12px 16px;\n  text-decoration: none;\n  display: flex;\n  text-align: left;\n}\n\n.nav-link.logout[_ngcontent-%COMP%] {\n  border-top: 1px solid white;\n}\n\n.nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:nth-child(1), .nav-user[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:nth-child(1) {\n  border-top-left-radius: 0.4em;\n  border-top-right-radius: 0.4em;\n}\n\n.nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:nth-child(2), .nav-user[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:nth-child(3) {\n  border-bottom-left-radius: 0.4em;\n  border-bottom-right-radius: 0.4em;\n}\n\n.nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover, .nav-user[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  background-color: #d53b3b;\n  color: white;\n  font-weight: 600;\n  transition: background-color 0.25s ease-in-out;\n}\n\n.login[_ngcontent-%COMP%]:hover   .nav[_ngcontent-%COMP%], .login[_ngcontent-%COMP%]:hover   .nav-user[_ngcontent-%COMP%] {\n  display: block;\n}\n\n.hamburger[_ngcontent-%COMP%] {\n  display: none;\n  width: 3.5em;\n  height: 2.5em;\n  cursor: pointer;\n}\n\n.hamburger[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%] {\n  border-radius: 0.15em;\n}\n\n.hamburger[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]:nth-child(1) {\n  width: 100%;\n  height: 20%;\n  background: green;\n}\n\n.hamburger[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]:nth-child(2) {\n  width: 100%;\n  height: 20%;\n  background: #ffff14;\n}\n\n.hamburger[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]:nth-child(3) {\n  width: 100%;\n  height: 20%;\n  background: blue;\n}\n\n.hamburger[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]:nth-child(4) {\n  width: 100%;\n  height: 20%;\n  background: red;\n}\n\n@media screen and (max-width: 1280px) {\n  .main-nav[_ngcontent-%COMP%] {\n    padding: 0;\n    padding-left: 1em;\n    width: 40vw;\n    justify-content: flex-start;\n    margin-left: -1em;\n  }\n\n  .search-field[_ngcontent-%COMP%] {\n    margin-top: 0em;\n    height: 0.8em;\n    padding: 0.6em 0.3em;\n  }\n\n  .site-header[_ngcontent-%COMP%]   .site-nav[_ngcontent-%COMP%] {\n    display: none;\n  }\n\n  .hamburger[_ngcontent-%COMP%] {\n    display: flex;\n    flex-flow: column wrap;\n    justify-content: space-between;\n    align-items: center;\n    margin-left: 1em;\n  }\n\n  .right-nav-section[_ngcontent-%COMP%] {\n    margin: auto 0;\n    align-self: center;\n  }\n\n  .right-nav-section[_ngcontent-%COMP%]    > .login[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]    > .fa-user-o[_ngcontent-%COMP%] {\n    font-size: 1.5em;\n    margin-left: 0.5em;\n  }\n\n  .right-nav-section[_ngcontent-%COMP%]    > .cart[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]    > img[_ngcontent-%COMP%] {\n    max-width: 2.3em;\n    display: block;\n    height: auto;\n  }\n\n  .right-nav-section[_ngcontent-%COMP%]    > .cart[_ngcontent-%COMP%]::before {\n    top: 0px;\n    left: 0.32em;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxuYXYtYmFyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksbUJBQUE7QUFDSjs7QUFFQTtFQUNJLGdCQUFBO0VBQ0EsY0FBQTtBQUNKOztBQUVBO0VBQ0ksZUFBQTtBQUNKOztBQUVBO0VBQ0ksYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQ0EsU0FBQTtFQUNBLHdCQUFBO0VBQ0EscUJBQUE7RUFDQSw2REFBQTtBQUNKOztBQUVBO0VBQ0ksK0JBQUE7QUFDSjs7QUFFQTtFQUVJLG1CQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtBQUFKOztBQUdBO0VBQ0ksbUNBQUE7RUFDQSxjQUFBO0VBQ0EscUJBQUE7RUFDQSxhQUFBO0FBQUo7O0FBR0E7RUFDSTtJQUNFLHFEQUFBO0VBQUo7QUFDRjs7QUFFRTtFQUNFO0lBQ0UsY0FBQTtFQUFKO0FBQ0Y7O0FBR0E7RUFDSSx3QkFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxpQkFBQTtFQUVBLHFCQUFBO0FBRko7O0FBTUE7RUFDSSxnQ0FBQTtFQUNBLGNBQUE7QUFISjs7QUFNQTtFQUNJO0lBQ0UsdURBQUE7RUFISjtBQUNGOztBQUtBO0VBQ0k7SUFDRSxpQkFBQTtFQUhKO0FBQ0Y7O0FBTUE7RUFDSSxnQ0FBQTtFQUNBLGNBQUE7RUFDQSxxQkFBQTtFQUNBLFlBQUE7QUFKSjs7QUFPQTtFQUNJO0lBQ0Usc0RBQUE7RUFKSjtBQUNGOztBQU1BO0VBQ0k7SUFDRSxjQUFBO0VBSko7QUFDRjs7QUFPQTtFQUNJLFNBQUE7RUFDQSxVQUFBO0VBQ0EsYUFBQTtFQUNBLHlCQUFBO0FBTEo7O0FBUUE7RUFDSSx5Q0FBQTtFQUNBLGNBQUE7RUFDQSxjQUFBO0VBQ0Esd0JBQUE7RUFDQSxnQkFBQTtBQUxKOztBQVFBO0VBQ0ksZUFBQTtBQUxKOztBQVFBO0VBQ0ksY0FBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxjQUFBO0VBQ0Esa0NBQUE7RUFDQSxhQUFBO0FBTEo7O0FBTUk7RUFDSSxjQUFBO0FBSlI7O0FBUUE7RUFDSSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7QUFMSjs7QUFRQTtFQUNJLGNBQUE7RUFDQSxrQ0FBQTtBQUxKOztBQU9JO0VBQ0ksa0NBQUE7QUFMUjs7QUFhQTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FBVko7O0FBYUE7RUFDSSxvQkFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUNBLG9DQUFBO0VBQ0EsMkJBQUE7RUFDQSxhQUFBO0VBRUEsbUJBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7QUFYSjs7QUFjQTtFQUNJLE9BQUE7RUFDQSx1QkFBQTtFQUNBLFNBQUE7RUFFQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EseUNBQUE7QUFaSjs7QUFlQTtFQUNJLFNBQUE7RUFDQSw2QkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7QUFaSjs7QUFlQTtFQUNJLGdCQUFBO0VBQ0EsV0FBQTtBQVpKOztBQWVBO0VBQ0ksYUFBQTtFQUNBLDhCQUFBO0VBQ0EscUJBQUE7RUFDQSxzQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUFaSjs7QUFlQTtFQUNJO0lBRUkscURBQUE7RUFiTjtBQUNGOztBQWdCQTtFQUNJLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUFkSjs7QUFpQkE7RUFDSSxrQkFBQTtBQWRKOztBQWlCQTtFQUNJLHFCQUFBO0FBZEo7O0FBaUJBO0VBQ0ksa0JBQUE7QUFkSjs7QUFpQkE7RUFDSSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0FBZEo7O0FBaUJBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQWRKOztBQWlCQTtFQUNJLCtEQUFBO0VBQ0EsNkJBQUE7RUFDQSxvQ0FBQTtFQUNBLGdCQUFBO0FBZEo7O0FBaUJBO0VBQ0ksa0JBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQWRKOztBQWlCQTtFQUNJLGtCQUFBO0FBZEo7O0FBaUJBO0VBQ0ksYUFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBRUEsd0JBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtFQUVBLDJCQUFBO0FBZko7O0FBa0JBO0VBQ0ksYUFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBRUEsd0JBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtFQUVBLDJCQUFBO0FBaEJKOztBQW1CQTs7RUFFSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLDhCQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtBQWhCSjs7QUFtQkE7RUFDSSwyQkFBQTtBQWhCSjs7QUFtQkE7O0VBRUksNkJBQUE7RUFDQSw4QkFBQTtBQWhCSjs7QUFtQkE7O0VBRUksZ0NBQUE7RUFDQSxpQ0FBQTtBQWhCSjs7QUFtQkE7O0VBRUkseUJBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFFQSw4Q0FBQTtBQWpCSjs7QUFvQkE7O0VBRUksY0FBQTtBQWpCSjs7QUFvQkE7RUFDSSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0FBakJKOztBQW9CQTtFQUNJLHFCQUFBO0FBakJKOztBQXVCQTtFQUNJLFdBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7QUFwQko7O0FBdUJBO0VBQ0ksV0FBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtBQXBCSjs7QUF1QkE7RUFDSSxXQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0FBcEJKOztBQXVCQTtFQUNJLFdBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtBQXBCSjs7QUF1QkE7RUFDSTtJQUNJLFVBQUE7SUFDQSxpQkFBQTtJQUNBLFdBQUE7SUFDQSwyQkFBQTtJQUNBLGlCQUFBO0VBcEJOOztFQXVCRTtJQUNJLGVBQUE7SUFDQSxhQUFBO0lBQ0Esb0JBQUE7RUFwQk47O0VBdUJFO0lBQ0ksYUFBQTtFQXBCTjs7RUF3QkU7SUFDSSxhQUFBO0lBQ0Esc0JBQUE7SUFDQSw4QkFBQTtJQUNBLG1CQUFBO0lBQ0EsZ0JBQUE7RUFyQk47O0VBd0JFO0lBRUksY0FBQTtJQUNBLGtCQUFBO0VBdEJOOztFQXlCRTtJQUNJLGdCQUFBO0lBQ0Esa0JBQUE7RUF0Qk47O0VBeUJFO0lBQ0ksZ0JBQUE7SUFDQSxjQUFBO0lBQ0EsWUFBQTtFQXRCTjs7RUF5QkU7SUFDSSxRQUFBO0lBQ0EsWUFBQTtFQXRCTjtBQUNGIiwiZmlsZSI6Im5hdi1iYXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoZWFkZXIge1xyXG4gICAgYmFja2dyb3VuZDogcmdiKDYxLCA2MSwgNjEpO1xyXG59XHJcblxyXG4ud3JhcHBlciB7XHJcbiAgICBtYXgtd2lkdGg6IDEwMHZ3O1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbn1cclxuXHJcbmEge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4uc2l0ZS1oZWFkZXIgLndyYXBwZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiAwIDNlbTtcclxuICAgIGJvcmRlcjogMDtcclxuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZDtcclxuICAgIGJvcmRlci1pbWFnZS1zbGljZTogMTtcclxuICAgIGJvcmRlci1pbWFnZS1zb3VyY2U6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgI0U3MkIzRiwjZmY4YTAwKTtcclxufVxyXG5cclxuLnNpdGUtaGVhZGVyIG5hdiB7XHJcbiAgICBtYXJnaW46IDAuMmVtIDAuNWVtIDAuMmVtIDAuNWVtO1xyXG59XHJcblxyXG4uc2l0ZS1icmFuZGluZyAuc2l0ZS10aXRsZSB7XHJcbiAgICBcclxuICAgIG1hcmdpbjogMC4yZW0gMCAwIDA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgZm9udC1zaXplOiAyLjhlbTtcclxuICAgIGxldHRlci1zcGFjaW5nOiAwLjA1ZW07XHJcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG59XHJcblxyXG4uc2l0ZS1icmFuZGluZyAuc2l0ZS10aXRsZSBhIHtcclxuICAgIGZvbnQtZmFtaWx5OiAnSF9Hb3RoaWMnLCBzYW5zLXNlcmlmO1xyXG4gICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAzMjBweCkge1xyXG4gICAgLnNpdGUtYnJhbmRpbmcgLnNpdGUtdGl0bGUge1xyXG4gICAgICBmb250LXNpemU6IGNhbGMoMS41ZW0gKyAxNCAqICgoMTAwdncgLSAzMjBweCkgLyA2ODApKTtcclxuICAgIH1cclxuICB9XHJcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTM2NnB4KSB7XHJcbiAgICAuc2l0ZS1icmFuZGluZyAuc2l0ZS10aXRsZSB7XHJcbiAgICAgIGZvbnQtc2l6ZTogM2VtO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbi5zaXRlLWJyYW5kaW5nID4gLnNpdGUtZGVzY3JpcHRpb24ge1xyXG4gICAgbWFyZ2luOiAtMC4yZW0gMCAwLjNlbSAwO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAwLjFlbTtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBmb250LXNpemU6IDEuNTRlbTtcclxuICAgIC8vIG1hcmdpbi10b3A6IC0wLjNlbTtcclxuICAgIGxldHRlci1zcGFjaW5nOiAwLjNlbTtcclxuICAgIFxyXG59XHJcblxyXG4uc2l0ZS1icmFuZGluZyAuc2l0ZS1kZXNjcmlwdGlvbiBhIHtcclxuICAgIGZvbnQtZmFtaWx5OiAnQWxybnMnLCBzYW5zLXNlcmlmO1xyXG4gICAgY29sb3I6IHJnYigyNTAsIDE3LCA2Nyk7XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDMyMHB4KSB7XHJcbiAgICAuc2l0ZS1icmFuZGluZyA+IC5zaXRlLWRlc2NyaXB0aW9uIHtcclxuICAgICAgZm9udC1zaXplOiBjYWxjKDAuODVlbSArIDYuNSAqICgoMTAwdncgLSAzMjBweCkgLyA2ODApKTtcclxuICAgIH1cclxufVxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMzY2cHgpIHtcclxuICAgIC5zaXRlLWJyYW5kaW5nID4gLnNpdGUtZGVzY3JpcHRpb24ge1xyXG4gICAgICBmb250LXNpemU6IDEuNjRlbTtcclxuICAgIH1cclxufVxyXG5cclxuLnNpdGUtYnJhbmRpbmcgLnNpdGUtZGVzY3JpcHRpb24gYSA+IHNwYW4ge1xyXG4gICAgZm9udC1mYW1pbHk6ICdBbHJucycsIHNhbnMtc2VyaWY7XHJcbiAgICBjb2xvcjogcmdiKDI1MSwgMjUxLCAyNTEpO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgb3BhY2l0eTogMC44O1xyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAzMjBweCkge1xyXG4gICAgLnNpdGUtbmF2IHtcclxuICAgICAgZm9udC1zaXplOiBjYWxjKDAuNmVtICsgMi43ICogKCgxMDB2dyAtIDMyMHB4KSAvIDY4MCkpO1xyXG4gICAgfVxyXG59XHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDE1MDBweCkge1xyXG4gICAgLnNpdGUtbmF2IHtcclxuICAgICAgZm9udC1zaXplOiAxZW07XHJcbiAgICB9XHJcbn1cclxuXHJcbi5zaXRlLW5hdiB1bCB7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktaXRlbXM6IGZsZXgtc3RhcnQ7XHJcbn1cclxuXHJcbi5zaXRlLW5hdiBsaSB7XHJcbiAgICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtc2l6ZTogMWVtO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBsaXN0LXN0eWxlOiBub25lIG91dHNpZGU7XHJcbiAgICBwYWRkaW5nOiAwIDAuMWVtO1xyXG59XHJcblxyXG4uc2l0ZS1uYXYgbGk6bnRoLWNoaWxkKDEpIHtcclxuICAgIG1hcmdpbjogMC4zZW0gMDtcclxufVxyXG5cclxuLnNpdGUtbmF2IGEge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBwYWRkaW5nOiAwLjVlbSAwLjVlbTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDAuM2VtO1xyXG4gICAgY29sb3I6IHJnYigxODksIDE4OSwgMTg5KTtcclxuICAgIHRyYW5zaXRpb246IGNvbG9yIC4zcyBlYXNlLWluLW91dDtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICAmLmFjdGl2YXRlZCB7XHJcbiAgICAgICAgY29sb3I6ICNFRTExNDM7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5zaXRlLW5hdiBsaTpudGgtY2hpbGQoMSkgYXtcclxuICAgIGJhY2tncm91bmQ6ICNFNzJCM0Y7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwLjRlbTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBwYWRkaW5nOiAwLjNlbSAyZW07XHJcbn1cclxuXHJcbi5zaXRlLW5hdiBhOmhvdmVyIHtcclxuICAgIGNvbG9yOiByZ2IoMjE2LCAyMTYsIDIxNik7XHJcbiAgICB0cmFuc2l0aW9uOiBjb2xvciAuM3MgZWFzZS1pbi1vdXQ7XHJcblxyXG4gICAgJi5hY3RpdmF0ZWQge1xyXG4gICAgICAgIHRyYW5zaXRpb246IGNvbG9yIC4zcyBlYXNlLWluLW91dDtcclxuICAgIH1cclxufVxyXG5cclxuLy8gLnNpdGUtbmF2IGE6Zm9jdXMge1xyXG4vLyAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbi8vIH1cclxuXHJcbi5tYWluLW5hdiB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1mbG93OiBjb2x1bW4gd3JhcDtcclxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG4gICAgd2lkdGg6IDQ3dnc7XHJcbiAgICBwYWRkaW5nLXRvcDogMC4xZW07XHJcbn1cclxuXHJcbi5zZWFyY2gtZmllbGQge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbiAgICBmbGV4OiAxIDEgMTAwJTtcclxuICAgIGFsaWduLXNlbGY6IHN0cmV0Y2g7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwyNTUsMjU1LC44MCk7XHJcbiAgICBtYXJnaW46IDAuOGVtIDAuNWVtIDAgMC41ZW07XHJcbiAgICBoZWlnaHQ6IDAuOGVtO1xyXG4gICAgLy8gd2lkdGg6IDM1ZW07XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMC40ZW07XHJcbn1cclxuXHJcbi5zZWFyY2gtZmllbGQgaW5wdXQge1xyXG4gICAgZmxleDogMTtcclxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgYm9yZGVyOiAwO1xyXG5cclxuICAgIHRleHQtaW5kZW50OiA1cHg7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBjb2xvcjogICM3Nzc7XHJcbiAgICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcclxufVxyXG5cclxuLnNlYXJjaC1maWVsZCBidXR0b24ge1xyXG4gICAgYm9yZGVyOiAwO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjp0cmFuc3BhcmVudDtcclxuICAgIHdpZHRoOiAyNHB4O1xyXG4gICAgaGVpZ2h0OiAyNHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIG9yZGVyOiAtMTtcclxufVxyXG5cclxuLnNlYXJjaC1maWVsZCAuZmEtc2VhcmNoIHtcclxuICAgIGZvbnQtc2l6ZTogMS41ZW07XHJcbiAgICBjb2xvcjogICM3Nzc7XHJcbn1cclxuXHJcbi5yaWdodC1uYXYtc2VjdGlvbiB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xyXG4gICAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcclxuICAgIG1hcmdpbi10b3A6IDEuN2VtO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMzY2cHgpIHtcclxuICAgIC5yaWdodC1uYXYtc2VjdGlvbiB7XHJcbiAgICAgICBcclxuICAgICAgICBtYXJnaW4tdG9wOiBjYWxjKDEuMmVtIC0gMyAqICgoMTAwdncgLSAzMjBweCkgLyA2ODApKTtcclxuICAgIH1cclxufVxyXG5cclxuLnJpZ2h0LW5hdi1zZWN0aW9uID4gLmxvZ2luID4gYSA+IC5mYS11c2VyLW8ge1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgZm9udC1zaXplOiAxLjhlbTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLnJpZ2h0LW5hdi1zZWN0aW9uID4gLmNhcnQge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4ucmlnaHQtbmF2LXNlY3Rpb24gPiAuY2FydCA+IGEge1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59XHJcblxyXG4ucmlnaHQtbmF2LXNlY3Rpb24gPiAuY2FydCB7XHJcbiAgICBtYXJnaW4tbGVmdDogMS41ZW07XHJcbn1cclxuXHJcbi5yaWdodC1uYXYtc2VjdGlvbiA+IC5jYXJ0ID4gYSA+IGltZ3tcclxuICAgIG1heC13aWR0aDogMi42ZW07IFxyXG4gICAgZGlzcGxheTpibG9jazsgXHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbn1cclxuXHJcbi5yaWdodC1uYXYtc2VjdGlvbiA+IC5jYXJ0OjpiZWZvcmUge1xyXG4gICAgY29udGVudDogXCJcIjtcclxuICAgIHdpZHRoOiAxLjJlbTtcclxuICAgIGhlaWdodDogMS4yZW07XHJcbiAgICBiYWNrZ3JvdW5kOiAjRTcyQjNGO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwcHg7XHJcbiAgICBsZWZ0OiAwLjRlbTtcclxuICAgIGRpc3BsYXk6ZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOnJvdztcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuLmRpc3BsYXktbmFtZSB7XHJcbiAgICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudChsZWZ0LCAjRTcyQjNGIDUwJSwjZmY4YTAwKTtcclxuICAgIC13ZWJraXQtYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xyXG4gICAgLXdlYmtpdC10ZXh0LWZpbGwtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxufVxyXG5cclxuLnJpZ2h0LW5hdi1zZWN0aW9uID4gLmNhcnQgPiBhID4gLmNhcnQtcXR5IHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogLTAuMTVlbTtcclxuICAgIGxlZnQ6IDAuODNlbTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGZvbnQtc2l6ZTogMC45ZW07XHJcbn1cclxuXHJcbi5sb2dpbiB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbi5uYXYtdXNlcntcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7IFxyXG4gICAgcGFkZGluZzowLjVlbTtcclxuICAgIHdpZHRoOiA2LjJlbTtcclxuICAgIGhlaWdodDogNi41ZW07XHJcbiAgICAvLyBvdmVyZmxvdzogLW1vei1zY3JvbGxiYXJzLW5vbmU7XHJcbiAgICAtbXMtb3ZlcmZsb3ctc3R5bGU6IG5vbmU7XHJcbiAgICB6LWluZGV4OiAyO1xyXG4gICAgbGVmdDogNTAlO1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSlcclxufVxyXG5cclxuLm5hdntcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7IFxyXG4gICAgcGFkZGluZzowLjVlbTtcclxuICAgIHdpZHRoOiA2LjJlbTtcclxuICAgIGhlaWdodDogNi41ZW07XHJcbiAgICAvLyBvdmVyZmxvdzogLW1vei1zY3JvbGxiYXJzLW5vbmU7XHJcbiAgICAtbXMtb3ZlcmZsb3ctc3R5bGU6IG5vbmU7XHJcbiAgICB6LWluZGV4OiAyO1xyXG4gICAgbGVmdDogNTAlO1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSlcclxufVxyXG5cclxuLm5hdiBhLFxyXG4ubmF2LXVzZXIgYSB7XHJcbiAgICBmbG9hdDogbm9uZTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGJhY2tncm91bmQ6IHJnYigwLCAwLCAwLCAwLjUpO1xyXG4gICAgcGFkZGluZzogMTJweCAxNnB4O1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgZGlzcGxheTogZmxleDsgXHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG59XHJcblxyXG4ubmF2LWxpbmsubG9nb3V0IHtcclxuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCB3aGl0ZTtcclxufVxyXG5cclxuLm5hdiBhOm50aC1jaGlsZCgxKSxcclxuLm5hdi11c2VyIGE6bnRoLWNoaWxkKDEpIHtcclxuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDAuNGVtO1xyXG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDAuNGVtO1xyXG59XHJcblxyXG4ubmF2IGE6bnRoLWNoaWxkKDIpLFxyXG4ubmF2LXVzZXIgYTpudGgtY2hpbGQoMykge1xyXG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMC40ZW07XHJcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMC40ZW07XHJcbn1cclxuXHJcbi5uYXYgYTpob3ZlcixcclxuLm5hdi11c2VyIGE6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIxMywgNTksIDU5KTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcblxyXG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjI1cyBlYXNlLWluLW91dDtcclxufVxyXG5cclxuLmxvZ2luOmhvdmVyIC5uYXYsXHJcbi5sb2dpbjpob3ZlciAubmF2LXVzZXIge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuXHJcbi5oYW1idXJnZXIge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICAgIHdpZHRoOiAzLjVlbTtcclxuICAgIGhlaWdodDogMi41ZW07XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5oYW1idXJnZXIgLnJvdyB7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwLjE1ZW07XHJcbiAgICAvLyBib3gtc2hhZG93OiBcclxuICAgIC8vIDEuOGVtIDAgMS4zZW0gLTFlbSByZ2JhKDAsIDAsIDAsIDAuMykgaW5zZXQsXHJcbiAgICAvLyAtMS44ZW0gMCAxLjNlbSAtMWVtIHJnYmEoMCwgMCwgMCwgMC4zKSBpbnNldDtcclxufVxyXG5cclxuLmhhbWJ1cmdlciAucm93Om50aC1jaGlsZCgxKSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMjAlO1xyXG4gICAgYmFja2dyb3VuZDogZ3JlZW47XHJcbn1cclxuXHJcbi5oYW1idXJnZXIgLnJvdzpudGgtY2hpbGQoMikge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDIwJTtcclxuICAgIGJhY2tncm91bmQ6IHJnYigyNTUsIDI1NSwgMjApO1xyXG59XHJcblxyXG4uaGFtYnVyZ2VyIC5yb3c6bnRoLWNoaWxkKDMpIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAyMCU7XHJcbiAgICBiYWNrZ3JvdW5kOiBibHVlO1xyXG59XHJcblxyXG4uaGFtYnVyZ2VyIC5yb3c6bnRoLWNoaWxkKDQpIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAyMCU7XHJcbiAgICBiYWNrZ3JvdW5kOiByZWQ7XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEyODBweCkge1xyXG4gICAgLm1haW4tbmF2IHtcclxuICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogMWVtO1xyXG4gICAgICAgIHdpZHRoOiA0MHZ3O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICAgICAgICBtYXJnaW4tbGVmdDogLTFlbTtcclxuICAgIH1cclxuXHJcbiAgICAuc2VhcmNoLWZpZWxkIHtcclxuICAgICAgICBtYXJnaW4tdG9wOiAwZW07XHJcbiAgICAgICAgaGVpZ2h0OiAwLjhlbTtcclxuICAgICAgICBwYWRkaW5nOiAwLjZlbSAwLjNlbTtcclxuICAgIH1cclxuXHJcbiAgICAuc2l0ZS1oZWFkZXIgLnNpdGUtbmF2IHtcclxuICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgIC8vIHZpc2liaWxpdHk6IGhpZGRlbjtcclxuICAgIH1cclxuXHJcbiAgICAuaGFtYnVyZ2VyIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXgtZmxvdzogY29sdW1uIHdyYXA7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDFlbTtcclxuICAgIH1cclxuXHJcbiAgICAucmlnaHQtbmF2LXNlY3Rpb24ge1xyXG4gICAgICAgXHJcbiAgICAgICAgbWFyZ2luOiBhdXRvIDA7XHJcbiAgICAgICAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG4gICAgfVxyXG5cclxuICAgIC5yaWdodC1uYXYtc2VjdGlvbiA+IC5sb2dpbiA+IGEgPiAuZmEtdXNlci1vIHtcclxuICAgICAgICBmb250LXNpemU6IDEuNWVtO1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAwLjVlbTtcclxuICAgIH1cclxuXHJcbiAgICAucmlnaHQtbmF2LXNlY3Rpb24gPiAuY2FydCA+IGEgPiBpbWd7XHJcbiAgICAgICAgbWF4LXdpZHRoOiAyLjNlbTsgXHJcbiAgICAgICAgZGlzcGxheTpibG9jazsgXHJcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgfVxyXG5cclxuICAgIC5yaWdodC1uYXYtc2VjdGlvbiA+IC5jYXJ0OjpiZWZvcmUge1xyXG4gICAgICAgIHRvcDogMHB4O1xyXG4gICAgICAgIGxlZnQ6IDAuMzJlbTtcclxuICAgIH1cclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavBarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-nav-bar',
                templateUrl: './nav-bar.component.html',
                styleUrls: ['./nav-bar.component.scss']
            }]
    }], function () { return [{ type: src_app_basket_basket_service__WEBPACK_IMPORTED_MODULE_1__["BasketService"] }, { type: src_app_account_account_service__WEBPACK_IMPORTED_MODULE_2__["AccountService"] }]; }, null); })();


/***/ }),

/***/ "M9IJ":
/*!***********************************************!*\
  !*** ./src/app/core/services/busy.service.ts ***!
  \***********************************************/
/*! exports provided: BusyService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BusyService", function() { return BusyService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-spinner */ "JqCM");



class BusyService {
    constructor(spinnerService) {
        this.spinnerService = spinnerService;
        this.busyRequestCount = 0;
    }
    busy() {
        this.busyRequestCount++;
        this.spinnerService.show(undefined, {
            bdColor: 'rgba(255, 255, 255, 0.6)',
            type: '',
            template: '../../../assets/images/burpee.gif',
            color: '#333333'
        });
    }
    idle() {
        this.busyRequestCount--;
        if (this.busyRequestCount <= 0) {
            this.busyRequestCount = 0;
            this.spinnerService.hide();
        }
    }
}
BusyService.ɵfac = function BusyService_Factory(t) { return new (t || BusyService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_1__["NgxSpinnerService"])); };
BusyService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: BusyService, factory: BusyService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BusyService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: ngx_spinner__WEBPACK_IMPORTED_MODULE_1__["NgxSpinnerService"] }]; }, null); })();


/***/ }),

/***/ "NH84":
/*!***********************************************************!*\
  !*** ./src/app/core/interceptors/loading.interceptors.ts ***!
  \***********************************************************/
/*! exports provided: LoadingInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadingInterceptor", function() { return LoadingInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _services_busy_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/busy.service */ "M9IJ");




class LoadingInterceptor {
    constructor(busyService) {
        this.busyService = busyService;
    }
    intercept(req, next) {
        if (req.method === 'POST' && req.url.includes('orders')) {
            return next.handle(req);
        }
        if (req.method === 'DELETE') {
            return next.handle(req);
        }
        if (req.url.includes('emailexists')) {
            return next.handle(req);
        }
        this.busyService.busy();
        return next.handle(req).pipe(
        // delay(1000),
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["finalize"])(() => {
            this.busyService.idle();
        }));
    }
}
LoadingInterceptor.ɵfac = function LoadingInterceptor_Factory(t) { return new (t || LoadingInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_busy_service__WEBPACK_IMPORTED_MODULE_2__["BusyService"])); };
LoadingInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: LoadingInterceptor, factory: LoadingInterceptor.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoadingInterceptor, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _services_busy_service__WEBPACK_IMPORTED_MODULE_2__["BusyService"] }]; }, null); })();


/***/ }),

/***/ "NUQi":
/*!*******************************************!*\
  !*** ./src/app/core/guards/auth.guard.ts ***!
  \*******************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_account_account_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/account/account.service */ "2rwd");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");




class AuthGuard {
    constructor(accountService, router) {
        this.accountService = accountService;
        this.router = router;
    }
    canActivate(next, state) {
        if (!this.accountService.isLoggedIn()) {
            this.router.navigate(['account/login'], { queryParams: { returnUrl: state.url } });
            return false;
        }
        return true;
    }
}
AuthGuard.ɵfac = function AuthGuard_Factory(t) { return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](src_app_account_account_service__WEBPACK_IMPORTED_MODULE_1__["AccountService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
AuthGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthGuard, factory: AuthGuard.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: src_app_account_account_service__WEBPACK_IMPORTED_MODULE_1__["AccountService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "Nlor":
/*!********************************************************!*\
  !*** ./src/app/core/interceptors/error.interceptor.ts ***!
  \********************************************************/
/*! exports provided: ErrorInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorInterceptor", function() { return ErrorInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "5eHb");






class ErrorInterceptor {
    constructor(router, toastr) {
        this.router = router;
        this.toastr = toastr;
    }
    intercept(req, next) {
        return next.handle(req)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(error => {
            if (error) {
                if (error.status === 400) {
                    if (error.error.errors) {
                        throw error.error;
                    }
                    else {
                        this.toastr.error(error.error.message, error.error.statusCode);
                    }
                }
                if (error.status === 401) {
                    this.toastr.error(error.error.message, error.error.statusCode);
                }
                if (error.status === 404) {
                    this.router.navigateByUrl('/not-found');
                }
                if (error.status === 500) {
                    const navigationExtras = { state: { error: error.error } };
                    this.router.navigateByUrl('/server-error', navigationExtras);
                }
            }
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(error);
        }));
    }
}
ErrorInterceptor.ɵfac = function ErrorInterceptor_Factory(t) { return new (t || ErrorInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"])); };
ErrorInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ErrorInterceptor, factory: ErrorInterceptor.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ErrorInterceptor, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"] }]; }, null); })();


/***/ }),

/***/ "PCNd":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-bootstrap/pagination */ "Lm2G");
/* harmony import */ var ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap/dropdown */ "dZIy");
/* harmony import */ var _components_paging_header_paging_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/paging-header/paging-header.component */ "/gyc");
/* harmony import */ var _components_pager_pager_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/pager/pager.component */ "a4eG");
/* harmony import */ var _components_order_totals_order_totals_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/order-totals/order-totals.component */ "PoZw");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _components_text_input_text_input_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/text-input/text-input.component */ "gA0Q");
/* harmony import */ var _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/cdk/stepper */ "B/XX");
/* harmony import */ var _components_stepper_stepper_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/stepper/stepper.component */ "9PhW");
/* harmony import */ var _components_basket_summary_basket_summary_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/basket-summary/basket-summary.component */ "GJcC");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ "tyNb");
















class SharedModule {
}
SharedModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: SharedModule });
SharedModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function SharedModule_Factory(t) { return new (t || SharedModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_2__["PaginationModule"].forRoot(),
            ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_3__["BsDropdownModule"].forRoot(),
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
            _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_9__["CdkStepperModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_12__["RouterModule"]
        ], ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_2__["PaginationModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
        ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_3__["BsDropdownModule"],
        _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_9__["CdkStepperModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SharedModule, { declarations: [_components_paging_header_paging_header_component__WEBPACK_IMPORTED_MODULE_4__["PagingHeaderComponent"], _components_pager_pager_component__WEBPACK_IMPORTED_MODULE_5__["PagerComponent"], _components_order_totals_order_totals_component__WEBPACK_IMPORTED_MODULE_6__["OrderTotalsComponent"], _components_text_input_text_input_component__WEBPACK_IMPORTED_MODULE_8__["TextInputComponent"], _components_stepper_stepper_component__WEBPACK_IMPORTED_MODULE_10__["StepperComponent"], _components_basket_summary_basket_summary_component__WEBPACK_IMPORTED_MODULE_11__["BasketSummaryComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_2__["PaginationModule"], ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_3__["BsDropdownModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
        _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_9__["CdkStepperModule"],
        _angular_router__WEBPACK_IMPORTED_MODULE_12__["RouterModule"]], exports: [ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_2__["PaginationModule"],
        _components_paging_header_paging_header_component__WEBPACK_IMPORTED_MODULE_4__["PagingHeaderComponent"],
        _components_pager_pager_component__WEBPACK_IMPORTED_MODULE_5__["PagerComponent"],
        _components_order_totals_order_totals_component__WEBPACK_IMPORTED_MODULE_6__["OrderTotalsComponent"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
        ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_3__["BsDropdownModule"],
        _components_text_input_text_input_component__WEBPACK_IMPORTED_MODULE_8__["TextInputComponent"],
        _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_9__["CdkStepperModule"],
        _components_stepper_stepper_component__WEBPACK_IMPORTED_MODULE_10__["StepperComponent"],
        _components_basket_summary_basket_summary_component__WEBPACK_IMPORTED_MODULE_11__["BasketSummaryComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SharedModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _components_paging_header_paging_header_component__WEBPACK_IMPORTED_MODULE_4__["PagingHeaderComponent"], _components_pager_pager_component__WEBPACK_IMPORTED_MODULE_5__["PagerComponent"], _components_order_totals_order_totals_component__WEBPACK_IMPORTED_MODULE_6__["OrderTotalsComponent"], _components_text_input_text_input_component__WEBPACK_IMPORTED_MODULE_8__["TextInputComponent"], _components_stepper_stepper_component__WEBPACK_IMPORTED_MODULE_10__["StepperComponent"], _components_basket_summary_basket_summary_component__WEBPACK_IMPORTED_MODULE_11__["BasketSummaryComponent"]
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_2__["PaginationModule"].forRoot(),
                    ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_3__["BsDropdownModule"].forRoot(),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
                    _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_9__["CdkStepperModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_12__["RouterModule"]
                ],
                exports: [
                    ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_2__["PaginationModule"],
                    _components_paging_header_paging_header_component__WEBPACK_IMPORTED_MODULE_4__["PagingHeaderComponent"],
                    _components_pager_pager_component__WEBPACK_IMPORTED_MODULE_5__["PagerComponent"],
                    _components_order_totals_order_totals_component__WEBPACK_IMPORTED_MODULE_6__["OrderTotalsComponent"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
                    ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_3__["BsDropdownModule"],
                    _components_text_input_text_input_component__WEBPACK_IMPORTED_MODULE_8__["TextInputComponent"],
                    _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_9__["CdkStepperModule"],
                    _components_stepper_stepper_component__WEBPACK_IMPORTED_MODULE_10__["StepperComponent"],
                    _components_basket_summary_basket_summary_component__WEBPACK_IMPORTED_MODULE_11__["BasketSummaryComponent"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "PoZw":
/*!**************************************************************************!*\
  !*** ./src/app/shared/components/order-totals/order-totals.component.ts ***!
  \**************************************************************************/
/*! exports provided: OrderTotalsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderTotalsComponent", function() { return OrderTotalsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_basket_basket_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/basket/basket.service */ "cAP4");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");




class OrderTotalsComponent {
    constructor(basketService) {
        this.basketService = basketService;
    }
    ngOnInit() {
        this.basketTotal$ = this.basketService.basketTotal$;
    }
}
OrderTotalsComponent.ɵfac = function OrderTotalsComponent_Factory(t) { return new (t || OrderTotalsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_basket_basket_service__WEBPACK_IMPORTED_MODULE_1__["BasketService"])); };
OrderTotalsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: OrderTotalsComponent, selectors: [["app-order-totals"]], inputs: { shippingPrice: "shippingPrice", subtotal: "subtotal", total: "total" }, decls: 23, vars: 6, consts: [[1, "title"], [1, "totals-title"], [1, "info"]], template: function OrderTotalsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h5", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Order Summary");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "section", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Shipping costs will be added depending on your choices in checkout ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Order subtotal");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Shipping and handling");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Total");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](22, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.subtotal);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.shippingPrice);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](22, 3, ctx.total, "1.2-2"));
    } }, pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DecimalPipe"]], styles: [".title[_ngcontent-%COMP%] {\n  padding: 0.7em 2em;\n  background-image: linear-gradient(90deg, #E72B3F, #ff8a00);\n}\n\n.title[_ngcontent-%COMP%]    > h5[_ngcontent-%COMP%] {\n  color: white;\n  font-weight: 700;\n  text-transform: uppercase;\n}\n\n.info[_ngcontent-%COMP%] {\n  padding: 1em 2em 2em 2em;\n  background: white;\n}\n\n.info[_ngcontent-%COMP%]    > p[_ngcontent-%COMP%] {\n  font-style: italic;\n  margin-bottom: 1em;\n}\n\n.info[_ngcontent-%COMP%]    > ul[_ngcontent-%COMP%] {\n  list-style: none;\n  padding-left: 0;\n  margin-bottom: 2em;\n}\n\n.info[_ngcontent-%COMP%]    > ul[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%] {\n  display: flex;\n  flex-flow: row wrap;\n  justify-content: space-between;\n  padding: 1em 0;\n  border-bottom: 1px solid #E72B3F;\n}\n\n.info[_ngcontent-%COMP%]    > ul[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]:nth-child(1) {\n  color: #333;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcb3JkZXItdG90YWxzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7RUFDQSwwREFBQTtBQUNKOztBQUVBO0VBQ0ksWUFBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7QUFDSjs7QUFFQTtFQUNJLHdCQUFBO0VBQ0EsaUJBQUE7QUFDSjs7QUFFQTtFQUNJLGtCQUFBO0VBQ0Esa0JBQUE7QUFDSjs7QUFFQTtFQUNJLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FBQ0o7O0FBRUE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUNBLGNBQUE7RUFDQSxnQ0FBQTtBQUNKOztBQUVBO0VBQ0ksV0FBQTtBQUNKIiwiZmlsZSI6Im9yZGVyLXRvdGFscy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50aXRsZSB7XHJcbiAgICBwYWRkaW5nOiAwLjdlbSAyZW07XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICNFNzJCM0YsI2ZmOGEwMCk7XHJcbn1cclxuXHJcbi50aXRsZSA+IGg1IHtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG59XHJcblxyXG4uaW5mbyB7XHJcbiAgICBwYWRkaW5nOiAxZW0gMmVtIDJlbSAyZW07XHJcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxufVxyXG5cclxuLmluZm8gPiBwIHtcclxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcclxuICAgIG1hcmdpbi1ib3R0b206IDFlbTtcclxufVxyXG5cclxuLmluZm8gPiB1bCB7XHJcbiAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAwO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMmVtO1xyXG59XHJcblxyXG4uaW5mbyA+IHVsID4gbGkge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZmxvdzogcm93IHdyYXA7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBwYWRkaW5nOiAxZW0gMDtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjRTcyQjNGO1xyXG59XHJcblxyXG4uaW5mbyA+IHVsID4gbGk6bnRoLWNoaWxkKDEpIHtcclxuICAgIGNvbG9yOiAjMzMzO1xyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OrderTotalsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-order-totals',
                templateUrl: './order-totals.component.html',
                styleUrls: ['./order-totals.component.scss']
            }]
    }], function () { return [{ type: src_app_basket_basket_service__WEBPACK_IMPORTED_MODULE_1__["BasketService"] }]; }, { shippingPrice: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], subtotal: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], total: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "Rikm":
/*!*********************************************************!*\
  !*** ./src/app/core/test-error/test-error.component.ts ***!
  \*********************************************************/
/*! exports provided: TestErrorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestErrorComponent", function() { return TestErrorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");





function TestErrorComponent_div_9_li_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const error_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](error_r2);
} }
function TestErrorComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, TestErrorComponent_div_9_li_2_Template, 2, 1, "li", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.validationErrors);
} }
class TestErrorComponent {
    constructor(http) {
        this.http = http;
        this.baseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl;
    }
    ngOnInit() {
    }
    get404Error() {
        this.http.get(this.baseUrl + 'products/42')
            .subscribe(response => {
            console.log(response);
        }, error => {
            console.log(error);
        });
    }
    get500Error() {
        this.http.get(this.baseUrl + 'buggy/servererror')
            .subscribe(response => {
            console.log(response);
        }, error => {
            console.log(error);
        });
    }
    get400Error() {
        this.http.get(this.baseUrl + 'buggy/badrequest')
            .subscribe(response => {
            console.log(response);
        }, error => {
            console.log(error);
        });
    }
    get400ValidationError() {
        this.http.get(this.baseUrl + 'products/fortytwo')
            .subscribe(response => {
            console.log(response);
        }, error => {
            console.log(error);
            this.validationErrors = error.errors;
        });
    }
}
TestErrorComponent.ɵfac = function TestErrorComponent_Factory(t) { return new (t || TestErrorComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
TestErrorComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TestErrorComponent, selectors: [["app-test-error"]], decls: 10, vars: 1, consts: [[1, "container", "mt-5", "d-flex", "justify-content-center", "flex-wrap", "col-lg-6"], [1, "btn", "btn-outline-primary", "mr-3", 3, "click"], ["class", "row mt-5", 4, "ngIf"], [1, "row", "mt-5"], [1, "text-danger"], [4, "ngFor", "ngForOf"]], template: function TestErrorComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TestErrorComponent_Template_button_click_1_listener() { return ctx.get500Error(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Test 500 Error");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TestErrorComponent_Template_button_click_3_listener() { return ctx.get404Error(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Test 404 Error");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TestErrorComponent_Template_button_click_5_listener() { return ctx.get400Error(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Test 400 Error");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TestErrorComponent_Template_button_click_7_listener() { return ctx.get400ValidationError(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Test 400 Val Error");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, TestErrorComponent_div_9_Template, 3, 1, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.validationErrors);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0ZXN0LWVycm9yLmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TestErrorComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-test-error',
                templateUrl: './test-error.component.html',
                styleUrls: ['./test-error.component.scss']
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _basket_basket_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./basket/basket.service */ "cAP4");
/* harmony import */ var _account_account_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./account/account.service */ "2rwd");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-spinner */ "JqCM");
/* harmony import */ var _core_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./core/nav-bar/nav-bar.component */ "KIxA");
/* harmony import */ var _core_section_header_section_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./core/section-header/section-header.component */ "Ag0X");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _core_footer_footer_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./core/footer/footer.component */ "FxTl");









class AppComponent {
    constructor(basketService, accountService) {
        this.basketService = basketService;
        this.accountService = accountService;
        this.title = 'Bodyquestbox';
    }
    ngOnInit() {
        this.loadBasket();
        this.loadCurrentUser();
    }
    loadCurrentUser() {
        const token = localStorage.getItem('token');
        if (token === null) {
            this.accountService.loadCurrentUser(null);
        }
        else {
            this.accountService.isLoggedIn();
        }
    }
    loadBasket() {
        const basketId = localStorage.getItem('basket_id');
        if (basketId) {
            this.basketService.getBasket(basketId).subscribe(() => {
                console.log('initialized');
            }, error => {
                console.log(error);
            });
        }
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_basket_basket_service__WEBPACK_IMPORTED_MODULE_1__["BasketService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_account_account_service__WEBPACK_IMPORTED_MODULE_2__["AccountService"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 7, vars: 0, consts: [["src", "assets/images/burpee.gif"], [1, "main"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ngx-spinner");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-nav-bar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-section-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "section", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "app-footer");
    } }, directives: [ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerComponent"], _core_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_4__["NavBarComponent"], _core_section_header_section_header_component__WEBPACK_IMPORTED_MODULE_5__["SectionHeaderComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterOutlet"], _core_footer_footer_component__WEBPACK_IMPORTED_MODULE_7__["FooterComponent"]], styles: [".main[_ngcontent-%COMP%] {\n  min-height: 100vh;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksaUJBQUE7QUFDSiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFpbiB7XHJcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], function () { return [{ type: _basket_basket_service__WEBPACK_IMPORTED_MODULE_1__["BasketService"] }, { type: _account_account_service__WEBPACK_IMPORTED_MODULE_2__["AccountService"] }]; }, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./core/core.module */ "pKmL");
/* harmony import */ var _home_home_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./home/home.module */ "ct+p");
/* harmony import */ var _core_interceptors_error_interceptor__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./core/interceptors/error.interceptor */ "Nlor");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-spinner */ "JqCM");
/* harmony import */ var _core_interceptors_loading_interceptors__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./core/interceptors/loading.interceptors */ "NH84");
/* harmony import */ var _core_interceptors_jwt_interceptor__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./core/interceptors/jwt.interceptor */ "8mIn");













class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [
        { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HTTP_INTERCEPTORS"], useClass: _core_interceptors_error_interceptor__WEBPACK_IMPORTED_MODULE_8__["ErrorInterceptor"], multi: true },
        { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HTTP_INTERCEPTORS"], useClass: _core_interceptors_loading_interceptors__WEBPACK_IMPORTED_MODULE_10__["LoadingInterceptor"], multi: true },
        { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HTTP_INTERCEPTORS"], useClass: _core_interceptors_jwt_interceptor__WEBPACK_IMPORTED_MODULE_11__["JwtInterceptor"], multi: true }
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
            _core_core_module__WEBPACK_IMPORTED_MODULE_6__["CoreModule"],
            _home_home_module__WEBPACK_IMPORTED_MODULE_7__["HomeModule"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_9__["NgxSpinnerModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
        _core_core_module__WEBPACK_IMPORTED_MODULE_6__["CoreModule"],
        _home_home_module__WEBPACK_IMPORTED_MODULE_7__["HomeModule"],
        ngx_spinner__WEBPACK_IMPORTED_MODULE_9__["NgxSpinnerModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                    _core_core_module__WEBPACK_IMPORTED_MODULE_6__["CoreModule"],
                    _home_home_module__WEBPACK_IMPORTED_MODULE_7__["HomeModule"],
                    ngx_spinner__WEBPACK_IMPORTED_MODULE_9__["NgxSpinnerModule"]
                ],
                providers: [
                    { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HTTP_INTERCEPTORS"], useClass: _core_interceptors_error_interceptor__WEBPACK_IMPORTED_MODULE_8__["ErrorInterceptor"], multi: true },
                    { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HTTP_INTERCEPTORS"], useClass: _core_interceptors_loading_interceptors__WEBPACK_IMPORTED_MODULE_10__["LoadingInterceptor"], multi: true },
                    { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HTTP_INTERCEPTORS"], useClass: _core_interceptors_jwt_interceptor__WEBPACK_IMPORTED_MODULE_11__["JwtInterceptor"], multi: true }
                ],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "a4eG":
/*!************************************************************!*\
  !*** ./src/app/shared/components/pager/pager.component.ts ***!
  \************************************************************/
/*! exports provided: PagerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagerComponent", function() { return PagerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-bootstrap/pagination */ "Lm2G");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");





function PagerComponent_pagination_0_Template(rf, ctx) { if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "pagination", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("pageChanged", function PagerComponent_pagination_0_Template_pagination_pageChanged_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r1.onPagerChanged($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("boundaryLinks", true)("totalItems", ctx_r0.totalCount)("ngModel", ctx_r0.pageNumber)("itemsPerPage", ctx_r0.pageSize);
} }
class PagerComponent {
    constructor() {
        this.pageChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() {
    }
    onPagerChanged(event) {
        this.pageChanged.emit(event.page);
    }
}
PagerComponent.ɵfac = function PagerComponent_Factory(t) { return new (t || PagerComponent)(); };
PagerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PagerComponent, selectors: [["app-pager"]], inputs: { totalCount: "totalCount", pageSize: "pageSize", pageNumber: "pageNumber" }, outputs: { pageChanged: "pageChanged" }, decls: 1, vars: 1, consts: [["previousText", "\u2039", "nextText", "\u203A", "firstText", "\u00AB", "lastText", "\u00BB", 3, "boundaryLinks", "totalItems", "ngModel", "itemsPerPage", "pageChanged", 4, "ngIf"], ["previousText", "\u2039", "nextText", "\u203A", "firstText", "\u00AB", "lastText", "\u00BB", 3, "boundaryLinks", "totalItems", "ngModel", "itemsPerPage", "pageChanged"]], template: function PagerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, PagerComponent_pagination_0_Template, 1, 4, "pagination", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.totalCount > 0);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_2__["PaginationComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwYWdlci5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PagerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-pager',
                templateUrl: './pager.component.html',
                styleUrls: ['./pager.component.scss']
            }]
    }], function () { return []; }, { totalCount: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], pageSize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], pageNumber: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], pageChanged: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "cAP4":
/*!******************************************!*\
  !*** ./src/app/basket/basket.service.ts ***!
  \******************************************/
/*! exports provided: BasketService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasketService", function() { return BasketService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _shared_models_basket__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/models/basket */ "FxKa");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "tk/3");







class BasketService {
    constructor(http) {
        var _a;
        this.http = http;
        this.baseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl;
        // private basketSource: BehaviorSubject<any> = new BehaviorSubject(null);
        this.basketSource = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
        this.basketTotalSource = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
        this.basket$ = this.basketSource.asObservable();
        this.basketTotal$ = (_a = this.basketTotalSource) === null || _a === void 0 ? void 0 : _a.asObservable();
        this.shipping = 0;
    }
    createPaymentIntent() {
        var _a;
        return this.http
            .post(this.baseUrl + 'payments/' + ((_a = this.getCurrentBasketValue()) === null || _a === void 0 ? void 0 : _a.id), {})
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((basket) => {
            this.basketSource.next(basket);
        }));
    }
    getBasket(id) {
        return this.http.get(this.baseUrl + 'basket?id=' + id)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((basket) => {
            this.basketSource.next(basket);
            if (basket !== null && basket.shippingPrice !== undefined) {
                this.shipping = basket.shippingPrice;
            }
            this.calculateTotals();
        }));
    }
    setShippingPrice(deliveryMethod) {
        this.shipping = deliveryMethod.price;
        const basket = this.getCurrentBasketValue();
        if (basket !== null) {
            basket.deliveryMethodId = deliveryMethod.id;
            basket.shippingPrice = deliveryMethod.price;
            this.setBasket(basket);
        }
        this.calculateTotals();
    }
    setBasket(basket) {
        return this.http.post(this.baseUrl + 'basket', basket)
            .subscribe((response) => {
            this.basketSource.next(response);
            this.calculateTotals();
        }, error => {
            console.log(error);
        });
    }
    getCurrentBasketValue() {
        var _a;
        return (_a = this.basketSource) === null || _a === void 0 ? void 0 : _a.value;
    }
    addItemToBasket(item, quantity = 1) {
        var _a;
        const itemToAdd = this.mapProductItemToBasketItem(item, quantity);
        const basket = (_a = this.getCurrentBasketValue()) !== null && _a !== void 0 ? _a : this.createBasket();
        basket.items = this.addOrUpdateItem(basket.items, itemToAdd, quantity);
        this.setBasket(basket);
    }
    incrementItemQuantity(item) {
        const basket = this.getCurrentBasketValue();
        if (basket !== null) {
            const foundItemIndex = basket.items.findIndex(x => x.id === item.id);
            basket.items[foundItemIndex].quantity++;
            this.setBasket(basket);
        }
    }
    decrementItemQuantity(item) {
        const basket = this.getCurrentBasketValue();
        if (basket !== null) {
            const foundItemIndex = basket.items.findIndex(x => x.id === item.id);
            if (basket.items[foundItemIndex].quantity > 1) {
                basket.items[foundItemIndex].quantity--;
                this.setBasket(basket);
            }
            else {
                this.removeItemFromBasket(item);
            }
        }
    }
    removeItemFromBasket(item) {
        const basket = this.getCurrentBasketValue();
        if (basket !== null) {
            if (basket.items.some(x => x.id === item.id)) {
                basket.items = basket.items.filter(i => i.id !== item.id);
                if (basket.items.length > 0) {
                    this.setBasket(basket);
                }
                else {
                    this.deleteBasket(basket);
                }
            }
        }
    }
    deleteLocalBasket(id) {
        this.basketSource.next(null);
        this.basketTotalSource.next(null);
        localStorage.removeItem('basket_id');
    }
    deleteBasket(basket) {
        return this.http.delete(this.baseUrl + 'basket?id=' + basket.id)
            .subscribe(() => {
            this.basketSource.next(null);
            this.basketTotalSource.next(null);
            localStorage.removeItem('basket_id');
        }, error => {
            console.log(error);
        });
    }
    calculateTotals() {
        const basket = this.getCurrentBasketValue();
        const shipping = this.shipping;
        if (basket !== null) {
            const subtotal = basket.items.reduce((acc, curr) => (curr.price * curr.quantity) + acc, 0);
            const total = subtotal + shipping;
            this.basketTotalSource.next({ shipping, total, subtotal });
        }
    }
    addOrUpdateItem(items, itemToAdd, quantity) {
        const index = items.findIndex(i => i.id === itemToAdd.id);
        if (index === -1) {
            itemToAdd.quantity = quantity;
            items.push(itemToAdd);
        }
        else {
            items[index].quantity += quantity;
        }
        return items;
    }
    createBasket() {
        const basket = new _shared_models_basket__WEBPACK_IMPORTED_MODULE_4__["Basket"]();
        localStorage.setItem('basket_id', basket.id);
        return basket;
    }
    mapProductItemToBasketItem(item, quantity) {
        return {
            id: item.id,
            productName: item.name,
            price: item.price,
            pictureUrl: item.pictureUrl,
            quantity
        };
    }
}
BasketService.ɵfac = function BasketService_Factory(t) { return new (t || BasketService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"])); };
BasketService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: BasketService, factory: BasketService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BasketService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "ct+p":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeModule", function() { return HomeModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home.component */ "9vUh");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/shared.module */ "PCNd");





class HomeModule {
}
HomeModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: HomeModule });
HomeModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function HomeModule_Factory(t) { return new (t || HomeModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](HomeModule, { declarations: [_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"]], exports: [_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"]
                ],
                exports: [_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "gA0Q":
/*!**********************************************************************!*\
  !*** ./src/app/shared/components/text-input/text-input.component.ts ***!
  \**********************************************************************/
/*! exports provided: TextInputComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextInputComponent", function() { return TextInputComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");




const _c0 = ["input"];
function TextInputComponent_div_5_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r2.label, " is required ");
} }
function TextInputComponent_div_5_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Invalid email address ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TextInputComponent_div_5_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Email address is in use ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TextInputComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TextInputComponent_div_5_span_1_Template, 2, 1, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, TextInputComponent_div_5_span_2_Template, 2, 0, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, TextInputComponent_div_5_span_3_Template, 2, 0, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.controlDir.control == null ? null : ctx_r1.controlDir.control.errors == null ? null : ctx_r1.controlDir.control.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.controlDir.control == null ? null : ctx_r1.controlDir.control.errors == null ? null : ctx_r1.controlDir.control.errors.pattern);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.controlDir.control == null ? null : ctx_r1.controlDir.control.errors == null ? null : ctx_r1.controlDir.control.errors.emailExists);
} }
class TextInputComponent {
    constructor(controlDir) {
        this.controlDir = controlDir;
        this.type = 'text';
        this.controlDir.valueAccessor = this;
    }
    ngOnInit() {
        const control = this.controlDir.control;
        const validators = (control === null || control === void 0 ? void 0 : control.validator) ? [control.validator] : [];
        const asyncValidators = (control === null || control === void 0 ? void 0 : control.asyncValidator) ? [control.asyncValidator] : [];
        control === null || control === void 0 ? void 0 : control.setValidators(validators);
        control === null || control === void 0 ? void 0 : control.setAsyncValidators(asyncValidators);
        control === null || control === void 0 ? void 0 : control.updateValueAndValidity();
    }
    onChange(event) { }
    onTouched() { }
    writeValue(obj) {
        this.input.nativeElement.value = obj || '';
    }
    registerOnChange(fn) {
        this.onChange = fn;
    }
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
}
TextInputComponent.ɵfac = function TextInputComponent_Factory(t) { return new (t || TextInputComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControl"], 2)); };
TextInputComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TextInputComponent, selectors: [["app-text-input"]], viewQuery: function TextInputComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_c0, true);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.input = _t.first);
    } }, inputs: { type: "type", label: "label" }, decls: 6, vars: 7, consts: [[1, "form-label-group"], ["required", "", "autofocus", "", 1, "form-control", 3, "ngClass", "type", "id", "placeholder", "input", "blur"], ["input", ""], [3, "for"], ["class", "invalid-feedback", 4, "ngIf"], [1, "invalid-feedback"], [4, "ngIf"]], template: function TextInputComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function TextInputComponent_Template_input_input_1_listener($event) { return ctx.onChange($event.target.value); })("blur", function TextInputComponent_Template_input_blur_1_listener() { return ctx.onTouched(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, TextInputComponent_div_5_Template, 4, 3, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("id", ctx.label);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("placeholder", ctx.label);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.controlDir && ctx.controlDir.control && (ctx.controlDir.control == null ? null : ctx.controlDir.control.touched) ? !(ctx.controlDir.control == null ? null : ctx.controlDir.control.valid) ? "is-invalid" : "is-valid" : null)("type", ctx.type);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("for", ctx.label);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.label);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.controlDir && ctx.controlDir.control && !(ctx.controlDir.control == null ? null : ctx.controlDir.control.valid) && (ctx.controlDir.control == null ? null : ctx.controlDir.control.touched));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]], styles: [".form-label-group[_ngcontent-%COMP%] {\n  position: relative;\n  margin-bottom: 1rem;\n}\n\n.form-label-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .form-label-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  height: 3.125rem;\n  padding: 0.75rem;\n}\n\n.form-label-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  display: block;\n  width: 100%;\n  margin-bottom: 0;\n  \n  line-height: 1.5;\n  color: #495057;\n  pointer-events: none;\n  cursor: text;\n  \n  border: 1px solid transparent;\n  border-radius: 0.25rem;\n  transition: all 0.1s ease-in-out;\n}\n\n.form-label-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder {\n  color: transparent;\n}\n\n.form-label-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:not(:placeholder-shown) {\n  padding-top: 1.25rem;\n  padding-bottom: 0.25rem;\n}\n\n.form-label-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:not(:placeholder-shown)    ~ label[_ngcontent-%COMP%] {\n  padding-top: 0.25rem;\n  padding-bottom: 0.25rem;\n  font-size: 12px;\n  color: #777;\n}\n\n.form-control[_ngcontent-%COMP%] {\n  box-shadow: none;\n  border: 1px solid #ccc;\n}\n\n.form-control[_ngcontent-%COMP%]:focus {\n  box-shadow: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcdGV4dC1pbnB1dC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0VBQ0EsbUJBQUE7QUFDSjs7QUFFRTs7RUFFRSxnQkFBQTtFQUNBLGdCQUFBO0FBQ0o7O0FBRUU7RUFDRSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUFrQixzQ0FBQTtFQUNsQixnQkFBQTtFQUNBLGNBQUE7RUFDQSxvQkFBQTtFQUNBLFlBQUE7RUFBYyxvQ0FBQTtFQUNkLDZCQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQ0FBQTtBQUdKOztBQWdCRTtFQUNFLGtCQUFBO0FBR0o7O0FBVUU7RUFDRSxvQkFBQTtFQUNBLHVCQUFBO0FBR0o7O0FBY0U7RUFDRSxvQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7QUFHSjs7QUFBRTtFQUNFLGdCQUFBO0VBQ0Esc0JBQUE7QUFHSjs7QUFBRTtFQUNFLGdCQUFBO0FBR0oiLCJmaWxlIjoidGV4dC1pbnB1dC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb3JtLWxhYmVsLWdyb3VwIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbiAgfVxyXG4gIFxyXG4gIC5mb3JtLWxhYmVsLWdyb3VwIGlucHV0LFxyXG4gIC5mb3JtLWxhYmVsLWdyb3VwIGxhYmVsIHtcclxuICAgIGhlaWdodDogMy4xMjVyZW07XHJcbiAgICBwYWRkaW5nOiAuNzVyZW07XHJcbiAgfVxyXG4gIFxyXG4gIC5mb3JtLWxhYmVsLWdyb3VwIGxhYmVsIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMDsgLyogT3ZlcnJpZGUgZGVmYXVsdCBgPGxhYmVsPmAgbWFyZ2luICovXHJcbiAgICBsaW5lLWhlaWdodDogMS41O1xyXG4gICAgY29sb3I6ICM0OTUwNTc7XHJcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxuICAgIGN1cnNvcjogdGV4dDsgLyogTWF0Y2ggdGhlIGlucHV0IHVuZGVyIHRoZSBsYWJlbCAqL1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiAuMjVyZW07XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgLjFzIGVhc2UtaW4tb3V0O1xyXG4gIH1cclxuICBcclxuICAuZm9ybS1sYWJlbC1ncm91cCBpbnB1dDo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7XHJcbiAgICBjb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgfVxyXG4gIFxyXG4gIC5mb3JtLWxhYmVsLWdyb3VwIGlucHV0OjotbW96LXBsYWNlaG9sZGVyIHtcclxuICAgIGNvbG9yOiB0cmFuc3BhcmVudDtcclxuICB9XHJcbiAgXHJcbiAgLmZvcm0tbGFiZWwtZ3JvdXAgaW5wdXQ6LW1zLWlucHV0LXBsYWNlaG9sZGVyIHtcclxuICAgIGNvbG9yOiB0cmFuc3BhcmVudDtcclxuICB9XHJcbiAgXHJcbiAgLmZvcm0tbGFiZWwtZ3JvdXAgaW5wdXQ6Oi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7XHJcbiAgICBjb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgfVxyXG4gIFxyXG4gIC5mb3JtLWxhYmVsLWdyb3VwIGlucHV0OjpwbGFjZWhvbGRlciB7XHJcbiAgICBjb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgfVxyXG4gIFxyXG4gIC5mb3JtLWxhYmVsLWdyb3VwIGlucHV0Om5vdCg6LW1vei1wbGFjZWhvbGRlci1zaG93bikge1xyXG4gICAgcGFkZGluZy10b3A6IDEuMjVyZW07XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogLjI1cmVtO1xyXG4gIH1cclxuICBcclxuICAuZm9ybS1sYWJlbC1ncm91cCBpbnB1dDpub3QoOi1tcy1pbnB1dC1wbGFjZWhvbGRlcikge1xyXG4gICAgcGFkZGluZy10b3A6IDEuMjVyZW07XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogLjI1cmVtO1xyXG4gIH1cclxuICBcclxuICAuZm9ybS1sYWJlbC1ncm91cCBpbnB1dDpub3QoOnBsYWNlaG9sZGVyLXNob3duKSB7XHJcbiAgICBwYWRkaW5nLXRvcDogMS4yNXJlbTtcclxuICAgIHBhZGRpbmctYm90dG9tOiAuMjVyZW07XHJcbiAgfVxyXG4gIFxyXG4gIC5mb3JtLWxhYmVsLWdyb3VwIGlucHV0Om5vdCg6LW1vei1wbGFjZWhvbGRlci1zaG93bikgfiBsYWJlbCB7XHJcbiAgICBwYWRkaW5nLXRvcDogLjI1cmVtO1xyXG4gICAgcGFkZGluZy1ib3R0b206IC4yNXJlbTtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIGNvbG9yOiAjNzc3O1xyXG4gIH1cclxuICBcclxuICAuZm9ybS1sYWJlbC1ncm91cCBpbnB1dDpub3QoOi1tcy1pbnB1dC1wbGFjZWhvbGRlcikgfiBsYWJlbCB7XHJcbiAgICBwYWRkaW5nLXRvcDogLjI1cmVtO1xyXG4gICAgcGFkZGluZy1ib3R0b206IC4yNXJlbTtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIGNvbG9yOiAjNzc3O1xyXG4gIH1cclxuICBcclxuICAuZm9ybS1sYWJlbC1ncm91cCBpbnB1dDpub3QoOnBsYWNlaG9sZGVyLXNob3duKSB+IGxhYmVsIHtcclxuICAgIHBhZGRpbmctdG9wOiAuMjVyZW07XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogLjI1cmVtO1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgY29sb3I6ICM3Nzc7XHJcbiAgfVxyXG5cclxuICAuZm9ybS1jb250cm9sIHtcclxuICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xyXG4gIH1cclxuXHJcbiAgLmZvcm0tY29udHJvbDpmb2N1cyB7XHJcbiAgICBib3gtc2hhZG93OiBub25lO1xyXG4gIH0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TextInputComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-text-input',
                templateUrl: './text-input.component.html',
                styleUrls: ['./text-input.component.scss']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControl"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"]
            }] }]; }, { input: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['input', { static: true }]
        }], type: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], label: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "hYLj":
/*!*************************************************************!*\
  !*** ./src/app/core/server-error/server-error.component.ts ***!
  \*************************************************************/
/*! exports provided: ServerErrorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServerErrorComponent", function() { return ServerErrorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");




function ServerErrorComponent_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h5", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Note: if you are seeing this then Angular is probably not responsible");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "What to do next?");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "ol");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Open the browser dev tools");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Inspect the network tab");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Check the failing request");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Examine this URL - make sure this is correct");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Reproduce the error in Postman - if we get the same response in Postman, then the issue is NOT with Angular");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " Following is the stack trace - this is where your investigation should start");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "code", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Error: ", ctx_r0.error.message, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.error.details);
} }
class ServerErrorComponent {
    constructor(router) {
        this.router = router;
        const navigation = this.router.getCurrentNavigation();
        this.error = navigation
            && navigation.extras
            && navigation.extras.state
            && navigation.extras.state.error;
    }
    ngOnInit() {
    }
}
ServerErrorComponent.ɵfac = function ServerErrorComponent_Factory(t) { return new (t || ServerErrorComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
ServerErrorComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ServerErrorComponent, selectors: [["app-server-error"]], decls: 4, vars: 1, consts: [[1, "container", "mt-5"], [4, "ngIf"], [1, "text-danger"], [1, "font-weight-bold"], [1, "mt-5", 2, "background-color", "whitesmoke"]], template: function ServerErrorComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Internal Server Error - refreshing the page will make the exception disappear ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ServerErrorComponent_ng_container_3_Template, 22, 2, "ng-container", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.error);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzZXJ2ZXItZXJyb3IuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ServerErrorComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-server-error',
                templateUrl: './server-error.component.html',
                styleUrls: ['./server-error.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, null); })();


/***/ }),

/***/ "pKmL":
/*!*************************************!*\
  !*** ./src/app/core/core.module.ts ***!
  \*************************************/
/*! exports provided: CoreModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreModule", function() { return CoreModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./nav-bar/nav-bar.component */ "KIxA");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _test_error_test_error_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./test-error/test-error.component */ "Rikm");
/* harmony import */ var _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./not-found/not-found.component */ "6nXq");
/* harmony import */ var _server_error_server_error_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./server-error/server-error.component */ "hYLj");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var xng_breadcrumb__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! xng-breadcrumb */ "tc9g");
/* harmony import */ var _section_header_section_header_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./section-header/section-header.component */ "Ag0X");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./footer/footer.component */ "FxTl");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../shared/shared.module */ "PCNd");














class CoreModule {
}
CoreModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: CoreModule });
CoreModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function CoreModule_Factory(t) { return new (t || CoreModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"],
            xng_breadcrumb__WEBPACK_IMPORTED_MODULE_8__["BreadcrumbModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_11__["SharedModule"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_7__["ToastrModule"].forRoot({
                positionClass: 'toast-bottom-right',
                preventDuplicates: true,
                timeOut: 10000
            })
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CoreModule, { declarations: [_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_2__["NavBarComponent"],
        _test_error_test_error_component__WEBPACK_IMPORTED_MODULE_4__["TestErrorComponent"],
        _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_5__["NotFoundComponent"],
        _server_error_server_error_component__WEBPACK_IMPORTED_MODULE_6__["ServerErrorComponent"],
        _section_header_section_header_component__WEBPACK_IMPORTED_MODULE_9__["SectionHeaderComponent"],
        _footer_footer_component__WEBPACK_IMPORTED_MODULE_10__["FooterComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"],
        xng_breadcrumb__WEBPACK_IMPORTED_MODULE_8__["BreadcrumbModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_11__["SharedModule"], ngx_toastr__WEBPACK_IMPORTED_MODULE_7__["ToastrModule"]], exports: [_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_2__["NavBarComponent"],
        _footer_footer_component__WEBPACK_IMPORTED_MODULE_10__["FooterComponent"],
        _section_header_section_header_component__WEBPACK_IMPORTED_MODULE_9__["SectionHeaderComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CoreModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_2__["NavBarComponent"],
                    _test_error_test_error_component__WEBPACK_IMPORTED_MODULE_4__["TestErrorComponent"],
                    _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_5__["NotFoundComponent"],
                    _server_error_server_error_component__WEBPACK_IMPORTED_MODULE_6__["ServerErrorComponent"],
                    _section_header_section_header_component__WEBPACK_IMPORTED_MODULE_9__["SectionHeaderComponent"],
                    _footer_footer_component__WEBPACK_IMPORTED_MODULE_10__["FooterComponent"]
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"],
                    xng_breadcrumb__WEBPACK_IMPORTED_MODULE_8__["BreadcrumbModule"],
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_11__["SharedModule"],
                    ngx_toastr__WEBPACK_IMPORTED_MODULE_7__["ToastrModule"].forRoot({
                        positionClass: 'toast-bottom-right',
                        preventDuplicates: true,
                        timeOut: 10000
                    })
                ],
                exports: [
                    _nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_2__["NavBarComponent"],
                    _footer_footer_component__WEBPACK_IMPORTED_MODULE_10__["FooterComponent"],
                    _section_header_section_header_component__WEBPACK_IMPORTED_MODULE_9__["SectionHeaderComponent"]
                ],
                schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["CUSTOM_ELEMENTS_SCHEMA"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _core_guards_auth_guard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./core/guards/auth.guard */ "NUQi");
/* harmony import */ var _core_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./core/not-found/not-found.component */ "6nXq");
/* harmony import */ var _core_server_error_server_error_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./core/server-error/server-error.component */ "hYLj");
/* harmony import */ var _core_test_error_test_error_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./core/test-error/test-error.component */ "Rikm");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home/home.component */ "9vUh");









const routes = [
    { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"], data: { breadcrumb: 'Home' } },
    { path: 'test-error', component: _core_test_error_test_error_component__WEBPACK_IMPORTED_MODULE_5__["TestErrorComponent"], data: { breadcrumb: 'Test Errors' } },
    { path: 'not-found', component: _core_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_3__["NotFoundComponent"], data: { breadcrumb: 'Not Found' } },
    { path: 'server-error', component: _core_server_error_server_error_component__WEBPACK_IMPORTED_MODULE_4__["ServerErrorComponent"], data: { breadcrumb: 'Server Error' } },
    // --------------------------------------------------------------- //
    { path: 'shop', loadChildren: () => __webpack_require__.e(/*! import() | shop-shop-module */ "shop-shop-module").then(__webpack_require__.bind(null, /*! ./shop/shop.module */ "6ANv"))
            .then(mod => mod.ShopModule), data: { breadcrumb: 'Shop' } },
    { path: 'basket', loadChildren: () => __webpack_require__.e(/*! import() | basket-basket-module */ "basket-basket-module").then(__webpack_require__.bind(null, /*! ./basket/basket.module */ "SCLQ"))
            .then(mod => mod.BasketModule), data: { breadcrumb: 'Shopping Cart' } },
    { path: 'checkout', canActivate: [_core_guards_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]], loadChildren: () => __webpack_require__.e(/*! import() | checkout-checkout-module */ "checkout-checkout-module").then(__webpack_require__.bind(null, /*! ./checkout/checkout.module */ "8y03"))
            .then(mod => mod.CheckoutModule), data: { breadcrumb: 'Checkout' } },
    { path: 'orders', canActivate: [_core_guards_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]], loadChildren: () => __webpack_require__.e(/*! import() | orders-orders-module */ "orders-orders-module").then(__webpack_require__.bind(null, /*! ./orders/orders.module */ "h9W5"))
            .then(mod => mod.OrdersModule), data: { breadcrumb: 'Orders' } },
    { path: 'account', loadChildren: () => __webpack_require__.e(/*! import() | account-account-module */ "account-account-module").then(__webpack_require__.bind(null, /*! ./account/account.module */ "jcJX"))
            .then(mod => mod.AccountModule), data: { breadcrumb: { skip: true } } },
    // skip prevents the breadcrumb service from giving this automatically
    // -------------------------------------------------------------- //
    { path: '**', redirectTo: 'not-found', pathMatch: 'full' },
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map