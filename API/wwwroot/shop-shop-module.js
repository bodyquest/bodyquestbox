(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["shop-shop-module"],{

/***/ "6ANv":
/*!*************************************!*\
  !*** ./src/app/shop/shop.module.ts ***!
  \*************************************/
/*! exports provided: ShopModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShopModule", function() { return ShopModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _shop_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shop.component */ "Zs0Q");
/* harmony import */ var _product_item_product_item_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./product-item/product-item.component */ "r6QL");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/shared.module */ "PCNd");
/* harmony import */ var _product_details_product_details_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./product-details/product-details.component */ "Fzfi");
/* harmony import */ var _shop_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shop-routing.module */ "Erzm");








class ShopModule {
}
ShopModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ShopModule });
ShopModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ShopModule_Factory(t) { return new (t || ShopModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
            _shop_routing_module__WEBPACK_IMPORTED_MODULE_6__["ShopRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ShopModule, { declarations: [_shop_component__WEBPACK_IMPORTED_MODULE_2__["ShopComponent"], _product_item_product_item_component__WEBPACK_IMPORTED_MODULE_3__["ProductItemComponent"], _product_details_product_details_component__WEBPACK_IMPORTED_MODULE_5__["ProductDetailsComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
        _shop_routing_module__WEBPACK_IMPORTED_MODULE_6__["ShopRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ShopModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_shop_component__WEBPACK_IMPORTED_MODULE_2__["ShopComponent"], _product_item_product_item_component__WEBPACK_IMPORTED_MODULE_3__["ProductItemComponent"], _product_details_product_details_component__WEBPACK_IMPORTED_MODULE_5__["ProductDetailsComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
                    _shop_routing_module__WEBPACK_IMPORTED_MODULE_6__["ShopRoutingModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "Erzm":
/*!*********************************************!*\
  !*** ./src/app/shop/shop-routing.module.ts ***!
  \*********************************************/
/*! exports provided: ShopRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShopRoutingModule", function() { return ShopRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _shop_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shop.component */ "Zs0Q");
/* harmony import */ var _product_details_product_details_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./product-details/product-details.component */ "Fzfi");






const routes = [
    { path: '', component: _shop_component__WEBPACK_IMPORTED_MODULE_2__["ShopComponent"] },
    { path: ':id', component: _product_details_product_details_component__WEBPACK_IMPORTED_MODULE_3__["ProductDetailsComponent"], data: { breadcrumb: { alias: "productDetails" } } },
];
class ShopRoutingModule {
}
ShopRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ShopRoutingModule });
ShopRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ShopRoutingModule_Factory(t) { return new (t || ShopRoutingModule)(); }, imports: [[
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)
        ], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ShopRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ShopRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [],
                imports: [
                    _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)
                ],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "Fzfi":
/*!*******************************************************************!*\
  !*** ./src/app/shop/product-details/product-details.component.ts ***!
  \*******************************************************************/
/*! exports provided: ProductDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductDetailsComponent", function() { return ProductDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shop_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shop.service */ "mwRl");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var xng_breadcrumb__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! xng-breadcrumb */ "tc9g");
/* harmony import */ var src_app_basket_basket_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/basket/basket.service */ "cAP4");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");







function ProductDetailsComponent_section_0_Template(rf, ctx) { if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "section", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "section", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "i", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductDetailsComponent_section_0_Template_i_click_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r1.decrementQuantity(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "i", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductDetailsComponent_section_0_Template_i_click_13_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.incrementQuantity(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductDetailsComponent_section_0_Template_button_click_14_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.addItemToBasket(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " Add to Cart ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r0.product.pictureUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.product.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](8, 5, ctx_r0.product.price));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.quantity);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx_r0.product.shortDescription, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
} }
class ProductDetailsComponent {
    constructor(shopService, activatedRoute, bcService, basketService) {
        this.shopService = shopService;
        this.activatedRoute = activatedRoute;
        this.bcService = bcService;
        this.basketService = basketService;
        this.quantity = 1;
        this.bcService.set('@productDetails', '');
    }
    ngOnInit() {
        this.loadProduct();
    }
    addItemToBasket() {
        this.basketService.addItemToBasket(this.product, this.quantity);
    }
    incrementQuantity() {
        this.quantity++;
    }
    decrementQuantity() {
        if (this.quantity > 1) {
            this.quantity--;
        }
    }
    loadProduct() {
        let str;
        let final;
        this.shopService.getProduct(Number(this.activatedRoute.snapshot.paramMap.get('id')))
            .subscribe(product => {
            // const arr = str.split('\n');
            // arr.forEach(item => {
            //   const div = document.createElement('div');
            //   div.innerText = item;
            //   document.body.appendChild(div);
            // });
            str = "<p>" + product.shortDescription;
            final = str.replace(/(?:\n\n|\n)/g, "</p><p>");
            this.product = product;
            this.product.shortDescription = final;
            this.bcService.set("@productDetails", product.name);
        }, error => {
            console.log(error);
        });
    }
}
ProductDetailsComponent.ɵfac = function ProductDetailsComponent_Factory(t) { return new (t || ProductDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shop_service__WEBPACK_IMPORTED_MODULE_1__["ShopService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](xng_breadcrumb__WEBPACK_IMPORTED_MODULE_3__["BreadcrumbService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_basket_basket_service__WEBPACK_IMPORTED_MODULE_4__["BasketService"])); };
ProductDetailsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProductDetailsComponent, selectors: [["app-product-details"]], decls: 1, vars: 1, consts: [["class", "wrapper", 4, "ngIf"], [1, "wrapper"], [1, "image-container"], ["alt", "", 3, "src"], [1, "product-main-info"], [1, "qty"], [1, "fa", "fa-minus-circle", 3, "click"], [1, "fa", "fa-plus-circle", 3, "click"], [1, "btn", "btn-outline-secondary", 3, "click"], [1, "p-text", 3, "innerHTML"]], template: function ProductDetailsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ProductDetailsComponent_section_0_Template, 17, 7, "section", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.product);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["CurrencyPipe"]], styles: [".wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  flex-flow: row wrap;\n  justify-content: center;\n  width: 100vw;\n  padding: 2em 5em;\n}\n\n.image-container[_ngcontent-%COMP%] {\n  flex: 0 0 50%;\n  max-height: 400px;\n  overflow: hidden;\n}\n\n.image-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.product-main-info[_ngcontent-%COMP%] {\n  flex: 0 0 50%;\n  padding: 0 3em;\n}\n\n.product-main-info[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin-bottom: 1em;\n}\n\n.product-main-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 1.2em;\n  text-align: left;\n  padding-right: 3em;\n}\n\n.product-main-info[_ngcontent-%COMP%]   .p-text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-bottom: 2em;\n}\n\n.product-main-info[_ngcontent-%COMP%]   .p-text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:nth-child(1) {\n  font-weight: 700;\n}\n\n.qty[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  flex: 0 0 10%;\n  padding: 1em 0;\n}\n\n.fa-minus-circle[_ngcontent-%COMP%], .fa-plus-circle[_ngcontent-%COMP%] {\n  font-size: 2em;\n  color: #E72B3F;\n  cursor: pointer;\n}\n\n.fa-minus-circle[_ngcontent-%COMP%] {\n  margin-right: 0.5em;\n}\n\n.fa-plus-circle[_ngcontent-%COMP%] {\n  margin-left: 0.5em;\n}\n\n.qty[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  margin-left: 1em;\n}\n\n.qty[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 1.2em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxwcm9kdWN0LWRldGFpbHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUVBLFlBQUE7RUFDQSxnQkFBQTtBQUFKOztBQUdBO0VBQ0ksYUFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUFBSjs7QUFHQTtFQUNJLFdBQUE7QUFBSjs7QUFHQTtFQUNJLGFBQUE7RUFDQSxjQUFBO0FBQUo7O0FBR0E7RUFDSSxrQkFBQTtBQUFKOztBQUdBO0VBQ0ksZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FBQUo7O0FBR0E7RUFDSSxrQkFBQTtBQUFKOztBQUdBO0VBQ0ksZ0JBQUE7QUFBSjs7QUFHQTtFQUNJLGFBQUE7RUFDQSwyQkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLGNBQUE7QUFBSjs7QUFHQTs7RUFFSSxjQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7QUFBSjs7QUFHQTtFQUNJLG1CQUFBO0FBQUo7O0FBR0E7RUFDSSxrQkFBQTtBQUFKOztBQUdBO0VBQ0ksZ0JBQUE7QUFBSjs7QUFHQTtFQUNJLGdCQUFBO0FBQUoiLCJmaWxlIjoicHJvZHVjdC1kZXRhaWxzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLndyYXBwZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZmxvdzogcm93IHdyYXA7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHJcbiAgICB3aWR0aDogMTAwdnc7XHJcbiAgICBwYWRkaW5nOiAyZW0gNWVtO1xyXG59XHJcblxyXG4uaW1hZ2UtY29udGFpbmVyIHtcclxuICAgIGZsZXg6IDAgMCA1MCU7XHJcbiAgICBtYXgtaGVpZ2h0OiA0MDBweDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuXHJcbi5pbWFnZS1jb250YWluZXIgaW1nIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4ucHJvZHVjdC1tYWluLWluZm8ge1xyXG4gICAgZmxleDogMCAwIDUwJTtcclxuICAgIHBhZGRpbmc6IDAgM2VtO1xyXG59XHJcblxyXG4ucHJvZHVjdC1tYWluLWluZm8gaDIge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMWVtO1xyXG59XHJcblxyXG4ucHJvZHVjdC1tYWluLWluZm8gcCB7XHJcbiAgICBmb250LXNpemU6IDEuMmVtO1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDNlbTtcclxufVxyXG5cclxuLnByb2R1Y3QtbWFpbi1pbmZvIC5wLXRleHQgcCB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyZW07XHJcbn1cclxuXHJcbi5wcm9kdWN0LW1haW4taW5mbyAucC10ZXh0IHA6bnRoLWNoaWxkKDEpIHtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbn1cclxuXHJcbi5xdHkge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBmbGV4OiAwIDAgMTAlO1xyXG4gICAgcGFkZGluZzogMWVtIDA7XHJcbn1cclxuXHJcbi5mYS1taW51cy1jaXJjbGUsXHJcbi5mYS1wbHVzLWNpcmNsZSB7XHJcbiAgICBmb250LXNpemU6IDJlbTtcclxuICAgIGNvbG9yOiAjRTcyQjNGO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4uZmEtbWludXMtY2lyY2xlIHtcclxuICAgIG1hcmdpbi1yaWdodDogMC41ZW07XHJcbn1cclxuXHJcbi5mYS1wbHVzLWNpcmNsZSB7XHJcbiAgICBtYXJnaW4tbGVmdDogMC41ZW07XHJcbn1cclxuXHJcbi5xdHkgYnV0dG9uIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAxZW07XHJcbn1cclxuXHJcbi5xdHkgc3BhbiB7XHJcbiAgICBmb250LXNpemU6IDEuMmVtO1xyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProductDetailsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-product-details',
                templateUrl: './product-details.component.html',
                styleUrls: ['./product-details.component.scss']
            }]
    }], function () { return [{ type: _shop_service__WEBPACK_IMPORTED_MODULE_1__["ShopService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }, { type: xng_breadcrumb__WEBPACK_IMPORTED_MODULE_3__["BreadcrumbService"] }, { type: src_app_basket_basket_service__WEBPACK_IMPORTED_MODULE_4__["BasketService"] }]; }, null); })();


/***/ }),

/***/ "UDJr":
/*!*********************************************!*\
  !*** ./src/app/shared/models/pagination.ts ***!
  \*********************************************/
/*! exports provided: Pagination */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Pagination", function() { return Pagination; });
// import { IProduct } from './product';
// added in #284, 3:00
class Pagination {
    constructor() {
        this.data = [];
    }
}


/***/ }),

/***/ "XJHN":
/*!*********************************************!*\
  !*** ./src/app/shared/models/shopParams.ts ***!
  \*********************************************/
/*! exports provided: ShopParams */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShopParams", function() { return ShopParams; });
class ShopParams {
    constructor() {
        this.categoryIdSelected = 0;
        this.sort = 'name';
        this.pageNumber = 1;
        this.pageSize = 3;
    }
}


/***/ }),

/***/ "Zs0Q":
/*!****************************************!*\
  !*** ./src/app/shop/shop.component.ts ***!
  \****************************************/
/*! exports provided: ShopComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShopComponent", function() { return ShopComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_models_shopParams__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/models/shopParams */ "XJHN");
/* harmony import */ var _shop_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shop.service */ "mwRl");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _shared_components_paging_header_paging_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/components/paging-header/paging-header.component */ "/gyc");
/* harmony import */ var _shared_components_pager_pager_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/components/pager/pager.component */ "a4eG");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _product_item_product_item_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./product-item/product-item.component */ "r6QL");









const _c0 = ["search"];
function ShopComponent_ng_container_2_option_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const sort_r6 = ctx.$implicit;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("selected", ctx_r4.shopParams.sort === sort_r6.value)("value", sort_r6.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", sort_r6.name, " ");
} }
function ShopComponent_ng_container_2_li_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const category_r7 = ctx.$implicit;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", category_r7.id === ctx_r5.shopParams.categoryIdSelected);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", category_r7.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", category_r7.name, " ");
} }
function ShopComponent_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h5", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Sort");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "select", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function ShopComponent_ng_container_2_Template_select_change_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.onSortSelected($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ShopComponent_ng_container_2_option_4_Template, 2, 3, "option", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "section", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h5", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Categories");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, ShopComponent_ng_container_2_li_9_Template, 2, 4, "li", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.sortOptions);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.categories);
} }
function ShopComponent_div_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-product-item", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("product", item_r10);
} }
class ShopComponent {
    constructor(shopService) {
        this.shopService = shopService;
        this.products = [];
        this.sortOptions = [
            { name: 'Alphabetical', value: 'name' },
            { name: 'Price: Low to High', value: 'priceAsc' },
            { name: 'Price: High to Low', value: 'priceDesc' }
        ];
        this.shopParams = this.shopService.getShopParams();
    }
    ngOnInit() {
        this.getProducts(true);
        this.getCategories();
    }
    ngAfterViewInit() {
        if (this.shopParams.search !== undefined) {
            this.searchTerm.nativeElement.value = this.shopParams.search;
        }
    }
    getProducts(useCache = false) {
        this.shopService.getProducts(useCache)
            .subscribe((response) => {
            if (response) {
                this.products = response.data;
                this.totalCount = response.count;
            }
            else { }
        }, error => {
            console.log(error);
        });
    }
    getCategories() {
        this.shopService.getCategories()
            .subscribe(response => {
            this.categories = [{ id: 0, name: 'All' }, ...response];
        }, error => {
            console.log(error);
        });
    }
    // NOT IMPLEMENTED YET
    // onCategorySelected() {
    //   this.shopParams.categoryIdSelected = categoryId;
    //   this.shopParams.pageNumber = 1;
    //   this.getCategoryProduct();
    // }
    onSortSelected(event) {
        const params = this.shopService.getShopParams();
        let element = event.target;
        params.sort = element.value;
        ;
        this.shopService.setShopParams(params);
        this.getProducts();
        // let element = event.target as HTMLSelectElement;
        // this.shopParams.sort = element.value;
        // this.getProducts();
    }
    onPageChanged(event) {
        const params = this.shopService.getShopParams();
        if (params.pageNumber !== event) {
            params.pageNumber = event;
            this.shopService.setShopParams(params);
            this.getProducts(true);
        }
    }
    onSearch() {
        const params = this.shopService.getShopParams();
        if (this.searchTerm) {
            params.search = this.searchTerm.nativeElement.value;
        }
        params.pageNumber = 1;
        this.shopService.setShopParams(params);
        this.getProducts();
    }
    onReset() {
        if (this.searchTerm) {
            this.searchTerm.nativeElement.value = '';
        }
        this.shopParams = new _shared_models_shopParams__WEBPACK_IMPORTED_MODULE_1__["ShopParams"]();
        this.shopService.setShopParams(this.shopParams);
        this.getProducts();
    }
}
ShopComponent.ɵfac = function ShopComponent_Factory(t) { return new (t || ShopComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shop_service__WEBPACK_IMPORTED_MODULE_2__["ShopService"])); };
ShopComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ShopComponent, selectors: [["app-shop"]], viewQuery: function ShopComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.searchTerm = _t.first);
    } }, decls: 18, vars: 8, consts: [[1, "main-products-container"], [1, "product-categories"], [4, "ngIf"], [1, "product-list"], [1, "products-head"], ["[hidden]]", "!categories"], [1, "count", 3, "totalCount", "pageSize", "pageNumber"], [1, "search-field"], ["type", "search", 3, "keyup.enter"], ["search", "", "default", ""], ["type", "submit", 1, "search-btn", 3, "click"], [1, "fa", "fa-search"], [1, "reset-btn", 3, "click"], [1, "fa", "fa-times"], [1, "products-wrapper"], ["class", "product-card", 4, "ngFor", "ngForOf"], [1, "pagination", 3, "pageSize", "totalCount", "pageNumber", "pageChanged"], [1, "title"], [3, "change"], [3, "selected", "value", 4, "ngFor", "ngForOf"], [1, "categories"], [3, "active", "value", 4, "ngFor", "ngForOf"], [3, "selected", "value"], [3, "value"], [1, "product-card"], [1, "container", 3, "product"]], template: function ShopComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "section", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ShopComponent_ng_container_2_Template, 10, 2, "ng-container", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "section", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "section", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](5, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "app-paging-header", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "section", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "input", 8, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup.enter", function ShopComponent_Template_input_keyup_enter_8_listener() { return ctx.onSearch(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ShopComponent_Template_button_click_11_listener() { return ctx.onSearch(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "i", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ShopComponent_Template_button_click_13_listener() { return ctx.onReset(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "section", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, ShopComponent_div_16_Template, 2, 1, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "app-pager", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("pageChanged", function ShopComponent_Template_app_pager_pageChanged_17_listener($event) { return ctx.onPageChanged($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.categories);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("totalCount", ctx.totalCount)("pageSize", ctx.shopParams.pageSize)("pageNumber", ctx.shopParams.pageNumber);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.products);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("pageSize", ctx.shopParams.pageSize)("totalCount", ctx.totalCount)("pageNumber", ctx.shopParams.pageNumber);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _shared_components_paging_header_paging_header_component__WEBPACK_IMPORTED_MODULE_4__["PagingHeaderComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _shared_components_pager_pager_component__WEBPACK_IMPORTED_MODULE_5__["PagerComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_forms_forms_x"], _product_item_product_item_component__WEBPACK_IMPORTED_MODULE_7__["ProductItemComponent"]], styles: [".main-products-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-flow: row wrap;\n  justify-content: space-between;\n  max-width: 100vw;\n  margin: 0 auto;\n  padding: 0 3em;\n}\n\n.product-categories[_ngcontent-%COMP%] {\n  display: flex;\n  flex-flow: column wrap;\n  justify-content: flex-start;\n  flex: 0 0 12%;\n  margin: 0;\n  padding: 2.5em 0;\n}\n\n.categories[_ngcontent-%COMP%] {\n  margin-top: 2em;\n}\n\n.categories[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  padding: 0;\n  margin-top: 0.5em;\n}\n\n.categories[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  list-style: none;\n  padding: 0.3em;\n  border: 1px solid #ccc;\n  cursor: pointer;\n  border-top-left-radius: 0.3em;\n  border-bottom-left-radius: 0.3em;\n  border-top-right-radius: 0.3em;\n  border-bottom-right-radius: 0.3em;\n}\n\n.categories[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:not(:last-child) {\n  border-bottom: none;\n}\n\n.active[_ngcontent-%COMP%] {\n  background-image: linear-gradient(to right, #E72B3F, #ff635d);\n  color: white;\n  font-weight: 700;\n}\n\nselect[_ngcontent-%COMP%] {\n  margin-top: 0.8em;\n  padding: 0.3em;\n  border: 1px solid #ccc;\n  border-radius: 0.2em;\n}\n\n.product-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-flow: column wrap;\n  justify-content: flex-start;\n  flex: 0 0 84%;\n  padding: 0 4em;\n}\n\n.products-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  flex-flow: row wrap;\n  justify-content: flex-start;\n  align-items: flex-start;\n  flex: 0 0 70%;\n}\n\n.products-head[_ngcontent-%COMP%] {\n  display: flex;\n  flex-flow: row wrap;\n  justify-content: space-between;\n  align-items: center;\n  padding: 2em 0 0 0;\n  margin-bottom: 1em;\n}\n\n.count[_ngcontent-%COMP%] {\n  flex: 0 0 25%;\n}\n\n.search-field[_ngcontent-%COMP%] {\n  display: inline-flex;\n  flex: 0 0 30%;\n  align-self: stretch;\n  background: rgba(255, 255, 255, 0.8);\n  margin: 0;\n  height: 2.5em;\n  align-items: center;\n  padding: 5px;\n  border-radius: 0.5em;\n  border: 1px solid #dfe1e5;\n  box-shadow: none;\n}\n\n.search-field[_ngcontent-%COMP%]:hover, .search-field[_ngcontent-%COMP%]:active, .search-field[_ngcontent-%COMP%]:focus {\n  box-shadow: 0 1px 6px 0 rgba(32, 33, 36, 0.28);\n  border-color: rgba(223, 225, 229, 0);\n  transition: 0.3s;\n}\n\n.search-field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  flex: 1;\n  background: transparent;\n  border: 0;\n  text-indent: 5px;\n  font-size: 20px;\n  color: #777;\n  font-family: Arial, Helvetica, sans-serif;\n}\n\n.search-field[_ngcontent-%COMP%]   .search-btn[_ngcontent-%COMP%] {\n  border: 0;\n  background-color: transparent;\n  width: 24px;\n  height: 24px;\n  border-radius: 50%;\n  cursor: pointer;\n  padding: 0;\n  order: -1;\n}\n\n.fa-search[_ngcontent-%COMP%], .fa-search[_ngcontent-%COMP%]:active, .fa-search[_ngcontent-%COMP%]:focus {\n  font-size: 1.5em;\n  color: rgba(120, 120, 120, 0.3);\n}\n\n.search-field[_ngcontent-%COMP%]   .reset-btn[_ngcontent-%COMP%] {\n  border: 0;\n  background-color: transparent;\n  width: 24px;\n  height: 24px;\n  border-radius: 50%;\n  cursor: pointer;\n  padding: 0;\n  order: 2;\n}\n\n.search-field[_ngcontent-%COMP%]   .fa-times[_ngcontent-%COMP%] {\n  font-size: 1.5em;\n  color: rgba(119, 119, 119, 0.3);\n}\n\n.product-card[_ngcontent-%COMP%] {\n  display: flex;\n  flex-flow: column wrap;\n  justify-content: flex-start;\n  flex: 0 0 31.3%;\n  height: 420px;\n  border-radius: 10px;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);\n  margin-bottom: 2em;\n  background: white;\n}\n\n.container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-flow: column wrap;\n  justify-content: flex-start;\n  height: 420px;\n  padding: 0;\n}\n\n.product-card[_ngcontent-%COMP%]:not(:nth-child(3)) {\n  margin-right: 2em;\n}\n\n.product-card[_ngcontent-%COMP%]:hover {\n  box-shadow: 0px 10px 20px 8px rgba(0, 0, 0, 0.15);\n  transition: 0.3s;\n}\n\n.pagination[_ngcontent-%COMP%] {\n  align-self: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXHNob3AuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGNBQUE7QUFDSjs7QUFVQTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLDJCQUFBO0VBQ0EsYUFBQTtFQUNBLFNBQUE7RUFDQSxnQkFBQTtBQVBKOztBQVVBO0VBQ0ksZUFBQTtBQVBKOztBQVVBO0VBQ0ksVUFBQTtFQUNBLGlCQUFBO0FBUEo7O0FBV0E7RUFDSSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxzQkFBQTtFQUNBLGVBQUE7RUFDQSw2QkFBQTtFQUNBLGdDQUFBO0VBQ0EsOEJBQUE7RUFDQSxpQ0FBQTtBQVJKOztBQVdBO0VBQ0ksbUJBQUE7QUFSSjs7QUFZQTtFQUNJLDZEQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FBVEo7O0FBWUE7RUFDSSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxzQkFBQTtFQUNBLG9CQUFBO0FBVEo7O0FBWUE7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSwyQkFBQTtFQUNBLGFBQUE7RUFDQSxjQUFBO0FBVEo7O0FBWUE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSwyQkFBQTtFQUNBLHVCQUFBO0VBQ0EsYUFBQTtBQVRKOztBQWtCQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FBZko7O0FBbUJBO0VBQ0ksYUFBQTtBQWhCSjs7QUFtQkE7RUFDSSxvQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLG9DQUFBO0VBQ0EsU0FBQTtFQUNBLGFBQUE7RUFFQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7QUFqQko7O0FBcUJBOzs7RUFHSSw4Q0FBQTtFQUNBLG9DQUFBO0VBT0EsZ0JBQUE7QUF4Qko7O0FBMkJBO0VBQ0ksT0FBQTtFQUNBLHVCQUFBO0VBQ0EsU0FBQTtFQUVBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSx5Q0FBQTtBQXpCSjs7QUE0QkE7RUFDSSxTQUFBO0VBQ0EsNkJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0FBekJKOztBQTRCQTtFQUNJLGdCQUFBO0VBQ0EsK0JBQUE7QUF6Qko7O0FBNEJBO0VBQ0ksU0FBQTtFQUNBLDZCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxVQUFBO0VBQ0EsUUFBQTtBQXpCSjs7QUE0QkE7RUFDSSxnQkFBQTtFQUNBLCtCQUFBO0FBekJKOztBQTRCQTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLDJCQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHdDQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBQXpCSjs7QUE0QkE7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSwyQkFBQTtFQUNBLGFBQUE7RUFDQSxVQUFBO0FBekJKOztBQTRCQTtFQUNJLGlCQUFBO0FBekJKOztBQTRCQTtFQUVJLGlEQUNBO0VBT0EsZ0JBQUE7QUFqQ0o7O0FBb0NBO0VBQ0ksa0JBQUE7QUFqQ0oiLCJmaWxlIjoic2hvcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYWluLXByb2R1Y3RzLWNvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1mbG93OiByb3cgd3JhcDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIG1heC13aWR0aDogMTAwdnc7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIHBhZGRpbmc6IDAgM2VtO1xyXG59XHJcblxyXG4vLyBoZWFkZXIge1xyXG4vLyAgICAgZGlzcGxheTogZmxleDtcclxuLy8gICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuLy8gICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcclxuLy8gICAgIHBhZGRpbmctdG9wOiAyZW07XHJcbi8vICAgICBtYXJnaW4tbGVmdDogMzF2dztcclxuLy8gfVxyXG5cclxuLnByb2R1Y3QtY2F0ZWdvcmllcyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1mbG93OiBjb2x1bW4gd3JhcDtcclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICAgIGZsZXg6IDAgMCAxMiU7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAyLjVlbSAwO1xyXG59XHJcblxyXG4uY2F0ZWdvcmllcyB7XHJcbiAgICBtYXJnaW4tdG9wOiAyZW07XHJcbn1cclxuXHJcbi5jYXRlZ29yaWVzIHVsIHtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBtYXJnaW4tdG9wOiAwLjVlbTtcclxuICAgIFxyXG59XHJcblxyXG4uY2F0ZWdvcmllcyB1bCBsaSB7XHJcbiAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgcGFkZGluZzogMC4zZW07XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCNjY2M7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAwLjNlbTtcclxuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDAuM2VtO1xyXG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDAuM2VtO1xyXG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDAuM2VtO1xyXG59XHJcblxyXG4uY2F0ZWdvcmllcyB1bCBsaTpub3QoOmxhc3QtY2hpbGQpIHtcclxuICAgIGJvcmRlci1ib3R0b206IG5vbmU7XHJcbiAgICBcclxufVxyXG5cclxuLmFjdGl2ZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICNFNzJCM0YsICNmZjYzNWQpO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxufVxyXG5cclxuc2VsZWN0IHtcclxuICAgIG1hcmdpbi10b3A6IDAuOGVtO1xyXG4gICAgcGFkZGluZzogMC4zZW07XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMC4yZW07XHJcbn1cclxuXHJcbi5wcm9kdWN0LWxpc3Qge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZmxvdzogY29sdW1uIHdyYXA7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgICBmbGV4OiAwIDAgODQlIDtcclxuICAgIHBhZGRpbmc6IDAgNGVtO1xyXG59XHJcblxyXG4ucHJvZHVjdHMtd3JhcHBlciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1mbG93OiByb3cgd3JhcDtcclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG4gICAgZmxleDogMCAwIDcwJSA7XHJcblxyXG4gICAgLy8gcGFkZGluZzogMCA0ZW07XHJcbn1cclxuXHJcbi5wcm9kdWN0LWNhcmQtd3JhcHBlciB7XHJcbiAgICBcclxufVxyXG5cclxuLnByb2R1Y3RzLWhlYWQge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZmxvdzogcm93IHdyYXA7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgcGFkZGluZzogMmVtIDAgMCAwO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMWVtO1xyXG4gICAgLy8gaGVpZ2h0OiAyLjVlbTtcclxufVxyXG5cclxuLmNvdW50IHtcclxuICAgIGZsZXg6IDAgMCAyNSU7XHJcbn1cclxuXHJcbi5zZWFyY2gtZmllbGQge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbiAgICBmbGV4OiAwIDAgMzAlO1xyXG4gICAgYWxpZ24tc2VsZjogc3RyZXRjaDtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44KTtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIGhlaWdodDogMi41ZW07XHJcbiAgICAvLyB3aWR0aDogMzVlbTtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwLjVlbTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNkZmUxZTU7XHJcbiAgICBib3gtc2hhZG93OiBub25lO1xyXG4gICAgLy8gYm94LXNoYWRvdzogMCAycHggNHB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcclxufVxyXG5cclxuLnNlYXJjaC1maWVsZDpob3ZlcixcclxuLnNlYXJjaC1maWVsZDphY3RpdmUsXHJcbi5zZWFyY2gtZmllbGQ6Zm9jdXMge1xyXG4gICAgYm94LXNoYWRvdzogMCAxcHggNnB4IDAgcmdiYSgzMiwzMywzNiwwLjI4KTtcclxuICAgIGJvcmRlci1jb2xvcjogcmdiYSgyMjMsMjI1LDIyOSwwKTtcclxuICAgIC8vIDAgMi44cHggMi4ycHggcmdiYSgwLCAwLCAwLCAwLjAzNCksXHJcbiAgICAvLyAwIDYuN3B4IDUuM3B4IHJnYmEoMCwgMCwgMCwgMC4wNDgpLFxyXG4gICAgLy8gMCAxMi41cHggMTBweCByZ2JhKDAsIDAsIDAsIDAuMDYpLFxyXG4gICAgLy8gMCAyMi4zcHggMTcuOXB4IHJnYmEoMCwgMCwgMCwgMC4wNzIpLFxyXG4gICAgLy8gMCA0MS44cHggMzMuNHB4IHJnYmEoMCwgMCwgMCwgMC4wODYpLFxyXG4gICAgLy8gMCAxMDBweCA4MHB4IHJnYmEoMCwgMCwgMCwgMC4xMik7XHJcbiAgICB0cmFuc2l0aW9uOiAwLjNzO1xyXG59XHJcblxyXG4uc2VhcmNoLWZpZWxkIGlucHV0IHtcclxuICAgIGZsZXg6IDE7XHJcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgIGJvcmRlcjogMDtcclxuXHJcbiAgICB0ZXh0LWluZGVudDogNXB4O1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgY29sb3I6ICAjNzc3O1xyXG4gICAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbi5zZWFyY2gtZmllbGQgLnNlYXJjaC1idG4ge1xyXG4gICAgYm9yZGVyOiAwO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjp0cmFuc3BhcmVudDtcclxuICAgIHdpZHRoOiAyNHB4O1xyXG4gICAgaGVpZ2h0OiAyNHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIG9yZGVyOiAtMTtcclxufVxyXG5cclxuLmZhLXNlYXJjaCwgLmZhLXNlYXJjaDphY3RpdmUsIC5mYS1zZWFyY2g6Zm9jdXMge1xyXG4gICAgZm9udC1zaXplOiAxLjVlbTtcclxuICAgIGNvbG9yOiAgcmdiYSgxMjAsIDEyMCwgMTIwLCAwLjMpO1xyXG59XHJcblxyXG4uc2VhcmNoLWZpZWxkIC5yZXNldC1idG4ge1xyXG4gICAgYm9yZGVyOiAwO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjp0cmFuc3BhcmVudDtcclxuICAgIHdpZHRoOiAyNHB4O1xyXG4gICAgaGVpZ2h0OiAyNHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIG9yZGVyOiAyO1xyXG59XHJcblxyXG4uc2VhcmNoLWZpZWxkIC5mYS10aW1lcyB7XHJcbiAgICBmb250LXNpemU6IDEuNWVtO1xyXG4gICAgY29sb3I6ICByZ2JhKDExOSwgMTE5LCAxMTksIDAuMyk7XHJcbn1cclxuXHJcbi5wcm9kdWN0LWNhcmQge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZmxvdzogY29sdW1uIHdyYXA7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgICBmbGV4OjAgMCAzMS4zJTtcclxuICAgIGhlaWdodDogNDIwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgYm94LXNoYWRvdzogMCAycHggNHB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcclxuICAgIG1hcmdpbi1ib3R0b206IDJlbTtcclxuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG59XHJcblxyXG4uY29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWZsb3c6IGNvbHVtbiB3cmFwO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gICAgaGVpZ2h0OiA0MjBweDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbn1cclxuXHJcbi5wcm9kdWN0LWNhcmQ6bm90KDpudGgtY2hpbGQoMykpIHtcclxuICAgIG1hcmdpbi1yaWdodDogMmVtO1xyXG59XHJcblxyXG4ucHJvZHVjdC1jYXJkOmhvdmVyIHtcclxuICAgIC8vIGJveC1zaGFkb3c6IDBweCAxMHB4IDE1cHggOHB4IHJnYmEoMCwwLDAsMC4xNSk7XHJcbiAgICBib3gtc2hhZG93OlxyXG4gICAgMHB4IDEwcHggMjBweCA4cHggcmdiYSgwLDAsMCwwLjE1KTtcclxuICAgIC8vIDAgMi44cHggMi4ycHggcmdiYSgwLCAwLCAwLCAwLjAzNCksXHJcbiAgICAvLyAwIDYuN3B4IDUuM3B4IHJnYmEoMCwgMCwgMCwgMC4wNDgpLFxyXG4gICAgLy8gMCAxMi41cHggMTBweCByZ2JhKDAsIDAsIDAsIDAuMDYpLFxyXG4gICAgLy8gMCAyMi4zcHggMTcuOXB4IHJnYmEoMCwgMCwgMCwgMC4wNzIpLFxyXG4gICAgLy8gMCA0MS44cHggMzMuNHB4IHJnYmEoMCwgMCwgMCwgMC4wODYpLFxyXG4gICAgLy8gMCAxMDBweCA4MHB4IHJnYmEoMCwgMCwgMCwgMC4xMik7XHJcbiAgICB0cmFuc2l0aW9uOiAwLjNzO1xyXG59XHJcblxyXG4ucGFnaW5hdGlvbiB7XHJcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ShopComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-shop',
                templateUrl: './shop.component.html',
                styleUrls: ['./shop.component.scss']
            }]
    }], function () { return [{ type: _shop_service__WEBPACK_IMPORTED_MODULE_2__["ShopService"] }]; }, { searchTerm: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['search', { static: false }]
        }] }); })();


/***/ }),

/***/ "mwRl":
/*!**************************************!*\
  !*** ./src/app/shop/shop.service.ts ***!
  \**************************************/
/*! exports provided: ShopService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShopService", function() { return ShopService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _shared_models_pagination__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/models/pagination */ "UDJr");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _shared_models_shopParams__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/models/shopParams */ "XJHN");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/environments/environment */ "AytR");









class ShopService {
    constructor(http) {
        this.http = http;
        this.baseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].apiUrl;
        this.products = [];
        // added #284 4:00
        this.pagination = new _shared_models_pagination__WEBPACK_IMPORTED_MODULE_2__["Pagination"]();
        this.shopParams = new _shared_models_shopParams__WEBPACK_IMPORTED_MODULE_4__["ShopParams"]();
    }
    getProducts(useCache) {
        if (useCache === false) {
            this.products = [];
        }
        if (this.products.length > 0 && useCache === true) {
            const pagesReceived = Math.ceil(this.products.length / this.shopParams.pageSize);
            if (this.shopParams.pageNumber <= pagesReceived) {
                this.pagination.data =
                    this.products.slice((this.shopParams.pageNumber - 1) * this.shopParams.pageSize, this.shopParams.pageNumber * this.shopParams.pageSize);
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(this.pagination);
            }
        }
        let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
        // ***** NOT IMPLEMENTED YET ON the API and DB (many-to-many between Category and Product not set up) *****
        // if (shopParams.categoryIdSelected !== 0) {
        //   params = params.append('categoryId', shopParams.categoryIdSelected.toString());
        // }
        if (this.shopParams.search) {
            params = params.append('search', this.shopParams.search);
        }
        params = params.append('sort', this.shopParams.sort);
        params = params.append('pageIndex', this.shopParams.pageNumber.toString());
        params = params.append('pageSize', this.shopParams.pageSize.toString());
        return this.http.get(this.baseUrl + 'products', { observe: 'response', params })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(response => {
            if (response.body !== null) {
                this.products = [...this.products, ...response.body.data];
                this.pagination = response.body;
            }
            return this.pagination;
        }));
    }
    getShopParams() {
        return this.shopParams;
    }
    setShopParams(params) {
        this.shopParams = params;
    }
    getProduct(id) {
        const product = this.products.find(p => p.id === id);
        if (product) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(product);
        }
        return this.http.get(this.baseUrl + 'products/' + id);
    }
    getCategories() {
        return this.http.get(this.baseUrl + 'categories/maincategories');
    }
}
ShopService.ɵfac = function ShopService_Factory(t) { return new (t || ShopService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
ShopService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ShopService, factory: ShopService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ShopService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "r6QL":
/*!*************************************************************!*\
  !*** ./src/app/shop/product-item/product-item.component.ts ***!
  \*************************************************************/
/*! exports provided: ProductItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductItemComponent", function() { return ProductItemComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_basket_basket_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/basket/basket.service */ "cAP4");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");




class ProductItemComponent {
    constructor(basketService) {
        this.basketService = basketService;
    }
    ngOnInit() {
    }
    addItemToBasket() {
        this.basketService.addItemToBasket(this.product);
    }
}
ProductItemComponent.ɵfac = function ProductItemComponent_Factory(t) { return new (t || ProductItemComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_basket_basket_service__WEBPACK_IMPORTED_MODULE_1__["BasketService"])); };
ProductItemComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProductItemComponent, selectors: [["app-product-item"]], inputs: { product: "product" }, decls: 16, vars: 8, consts: [[1, "up"], [1, "image-container"], [1, "image-overlay"], [1, "fa", "fa-search"], [3, "routerLink"], [1, "down"], [1, "buttons"], [1, "btn", "button-primary", 3, "click"], [1, "btn", "button-primary", 3, "routerLink"]], template: function ProductItemComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "i", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "section", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductItemComponent_Template_button_click_12_listener() { return ctx.addItemToBasket(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Buy");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "View");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMapInterpolate1"]("background-image: url(", ctx.product.pictureUrl, ");");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/shop/", ctx.product.id, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/shop/", ctx.product.id, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.product.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.product.price, " \u043B\u0432");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/shop/", ctx.product.id, "");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"]], styles: ["a[_ngcontent-%COMP%] {\n  margin-top: 0;\n  margin-bottom: 0.2em;\n}\n\n.up[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]    > h5[_ngcontent-%COMP%] {\n  color: rgba(0, 0, 0, 0.7);\n  text-decoration: none;\n  cursor: pointer;\n}\n\nh5[_ngcontent-%COMP%] {\n  text-align: center;\n  font-weight: 700;\n}\n\nh6[_ngcontent-%COMP%] {\n  color: rgba(0, 0, 0, 0.7);\n  font-weight: 400;\n  text-align: center;\n  margin-top: 0.5em;\n}\n\n.image-container[_ngcontent-%COMP%] {\n  height: 250px;\n  background: transparent no-repeat center;\n  background-size: cover;\n  overflow: hidden;\n  border-top-left-radius: 0.8em;\n  border-top-right-radius: 0.8em;\n  margin-bottom: 1em;\n  cursor: pointer;\n  position: relative;\n}\n\n.image-container[_ngcontent-%COMP%]    > .image-overlay[_ngcontent-%COMP%] {\n  opacity: 0;\n  position: absolute;\n  color: #fff;\n  background: rgba(141, 178, 215, 0.77);\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  padding: 0;\n  text-align: center;\n  font-size: 40px;\n  line-height: 200px;\n  \n  transition: opacity 0.5s ease-in-out;\n  z-index: 1;\n}\n\n.image-container[_ngcontent-%COMP%]:hover   .image-overlay[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n\n.image-container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  position: absolute;\n  color: #fff;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  padding: 0;\n  z-index: 2;\n}\n\np[_ngcontent-%COMP%] {\n  overflow: hidden;\n  opacity: 0.5;\n  text-overflow: ellipsis;\n  word-wrap: normal;\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  \n  -webkit-box-orient: vertical;\n  margin: 0 0 0.7em 0;\n}\n\ndiv.up[_ngcontent-%COMP%] {\n  flex: 1;\n}\n\ndiv.down[_ngcontent-%COMP%] {\n  flex: none;\n  margin-top: auto;\n}\n\n.buttons[_ngcontent-%COMP%] {\n  display: flex;\n  margin: 0 0.5em 0.8em 0.8em;\n  justify-self: flex-end;\n  justify-content: center;\n  min-height: 45px;\n  position: relative;\n  z-index: 0;\n}\n\n.btn[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n  color: white;\n  border: 2px solid #fff;\n}\n\n.button-primary[_ngcontent-%COMP%] {\n  cursor: pointer;\n  margin-left: 5px;\n  margin-bottom: 15px;\n  text-shadow: 0 -2px 0 #bb1c2b, 0 1px 1px #f3b0b6;\n  box-sizing: border-box;\n  font-size: 1.3em;\n  font-family: Helvetica, Arial, Sans-Serif;\n  text-decoration: none;\n  font-weight: bold;\n  color: #df2b3c;\n  height: 30px;\n  padding: 0 24px;\n  width: auto;\n  background: linear-gradient(to top, #E72B3F, #ff635d);\n  border-radius: 10px;\n  box-shadow: inset 0px -1px 1px 1px rgba(255, 255, 255, 0.3);\n  top: 0;\n  border: none;\n  transition: all 0.06s ease-out;\n  position: relative;\n}\n\n.button-primary[_ngcontent-%COMP%]:visited {\n  color: #df2b3c;\n}\n\n.button-primary[_ngcontent-%COMP%]:hover {\n  background: linear-gradient(to top, #e75b69, #fb7c77);\n  border: none;\n}\n\n.button-primary[_ngcontent-%COMP%]:active {\n  top: 6px;\n  text-shadow: 0 -2px 0 #e65765, 0 1px 1px #f3b0b6, 0 0 4px white;\n  color: white;\n}\n\n.button-primary[_ngcontent-%COMP%]:active:after {\n  top: 0;\n  box-shadow: 0 3px 3px rgba(0, 0, 0, 0.7), 0 3px 9px rgba(0, 0, 0, 0.2);\n  background-image: linear-gradient(to top, #e75b69, #fb7c77);\n  border: none;\n  outline: none;\n  box-shadow: inset 0px -1px 1px 1px rgba(255, 255, 255, 0.3);\n}\n\n.button-primary[_ngcontent-%COMP%]::after {\n  display: inline-block;\n  content: \"\";\n  position: absolute;\n  left: 0;\n  right: 0;\n  z-index: -1;\n  top: 6px;\n  border-bottom-right-radius: 12px;\n  border-bottom-left-radius: 12px;\n  border-top-right-radius: 8px;\n  border-top-left-radius: 8px;\n  padding: 12px 24px;\n  height: 31px;\n  line-height: 30px;\n  background: linear-gradient(to top, #6b0610 0%, #ee0900 6px);\n  transition: all 0.078s ease-out;\n  box-shadow: 0 1px 0 2px rgba(0, 0, 0, 0.3), 0 5px 2.4px rgba(0, 0, 0, 0.5), 0 10.8px 9px rgba(0, 0, 0, 0.2);\n}\n\n.button-primary[_ngcontent-%COMP%]:active::after {\n  box-shadow: 0 1px 0 2px rgba(0, 0, 0, 0.3), 0 5px 2.4px rgba(0, 0, 0, 0.5), 0 10.8px 9px rgba(0, 0, 0, 0.2);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxwcm9kdWN0LWl0ZW0uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0VBQ0Esb0JBQUE7QUFDSjs7QUFFQTtFQUNJLHlCQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0FBQ0o7O0FBRUE7RUFDSSxrQkFBQTtFQUNBLGdCQUFBO0FBQ0o7O0FBR0E7RUFDSSx5QkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBQUFKOztBQUtBO0VBR0ksYUFBQTtFQUNBLHdDQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtFQUNBLDZCQUFBO0VBQ0EsOEJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQUpKOztBQU9BO0VBQ0ksVUFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLHFDQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUFxQixlQUFBO0VBTXJCLG9DQUFBO0VBQ0EsVUFBQTtBQUpKOztBQU9BO0VBQ0ksVUFBQTtBQUpKOztBQU9BO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFVBQUE7RUFDQSxVQUFBO0FBSko7O0FBT0E7RUFDSSxnQkFBQTtFQUNBLFlBQUE7RUFDQSx1QkFBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7RUFDQSxxQkFBQTtFQUF1Qiw0QkFBQTtFQUN2Qiw0QkFBQTtFQUNBLG1CQUFBO0FBSEo7O0FBTUE7RUFDSSxPQUFBO0FBSEo7O0FBTUE7RUFDSSxVQUFBO0VBQ0EsZ0JBQUE7QUFISjs7QUFNQTtFQUNJLGFBQUE7RUFDQSwyQkFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtBQUhKOztBQU1BO0VBQ0ksZUFBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtBQUhKOztBQW1DQTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0RBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0VBQ0EseUNBQUE7RUFDQSxxQkFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FmUTtFQW1CUixZQUFBO0VBRUEsZUFBQTtFQUdBLFdBQUE7RUFDQSxxREFBQTtFQUVBLG1CQUFBO0VBR0EsMkRBQUE7RUFDQSxNQUFBO0VBQ0EsWUFBQTtFQUNBLDhCQUFBO0VBQ0Esa0JBQUE7QUF6Q0o7O0FBdUJJO0VBQ0UsY0FqQk07QUFKWjs7QUF3Q0U7RUFDRSxxREFBQTtFQUdFLFlBQUE7QUF2Q047O0FBMENBO0VBQ0ksUUFBQTtFQUNLLCtEQUFBO0VBQ0wsWUFBQTtBQXZDSjs7QUF3Q0k7RUFDRSxNQUFBO0VBQ0Esc0VBQUE7RUFDQSwyREFBQTtFQUdBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsMkRBQUE7QUF4Q047O0FBNENBO0VBQ0kscUJBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFdBQUE7RUFDQSxRQUFBO0VBQ0EsZ0NBQUE7RUFDQSwrQkFBQTtFQUNBLDRCQUFBO0VBQ0EsMkJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLDREQUFBO0VBR0EsK0JBQUE7RUFDQSwyR0FDRTtBQTVDTjs7QUFpREE7RUFDSSwyR0FBQTtBQTlDSiIsImZpbGUiOiJwcm9kdWN0LWl0ZW0uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJhIHtcclxuICAgIG1hcmdpbi10b3A6IDA7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwLjJlbTtcclxufVxyXG5cclxuLnVwID4gYSA+IGg1IHtcclxuICAgIGNvbG9yOiByZ2IoMCwgMCwgMCwgMC43KTtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuaDUge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIC8vIHBhZGRpbmc6IDAgMC41ZW07XHJcbn1cclxuXHJcbmg2IHtcclxuICAgIGNvbG9yOiByZ2IoMCwgMCwgMCwgMC43KTtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tdG9wOiAwLjVlbTtcclxuICAgIC8vIG1hcmdpbi1ib3R0b206IDFlbTtcclxuICAgIC8vIHBhZGRpbmc6IDAgMC41ZW07XHJcbn1cclxuXHJcbi5pbWFnZS1jb250YWluZXIge1xyXG4gICAgLy8gd2lkdGg6IGF1dG87XHJcbiAgICAvLyBoZWlnaHQ6IDI1MHB4O1xyXG4gICAgaGVpZ2h0OiAyNTBweDtcclxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50IG5vLXJlcGVhdCBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDAuOGVtO1xyXG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDAuOGVtO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMWVtO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4uaW1hZ2UtY29udGFpbmVyID4gLmltYWdlLW92ZXJsYXkge1xyXG4gICAgb3BhY2l0eTowO1xyXG4gICAgcG9zaXRpb246YWJzb2x1dGU7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMTQxLCAxNzgsIDIxNSwgMC43Nyk7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgdGV4dC1hbGlnbjpjZW50ZXI7XHJcbiAgICBmb250LXNpemU6NDBweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyMDBweDsgIC8qIGFkZGVkIHRoaXMgKi9cclxuXHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IG9wYWNpdHkgLjVzIGVhc2UtaW4tb3V0O1xyXG4gICAgLW1vei10cmFuc2l0aW9uOiBvcGFjaXR5IC41cyBlYXNlLWluLW91dDtcclxuICAgIC1tcy10cmFuc2l0aW9uOiBvcGFjaXR5IC41cyBlYXNlLWluLW91dDtcclxuICAgIC1vLXRyYW5zaXRpb246IG9wYWNpdHkgLjVzIGVhc2UtaW4tb3V0O1xyXG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAuNXMgZWFzZS1pbi1vdXQ7XHJcbiAgICB6LWluZGV4OjE7XHJcbn1cclxuXHJcbi5pbWFnZS1jb250YWluZXI6aG92ZXIgLmltYWdlLW92ZXJsYXl7XHJcbiAgICBvcGFjaXR5OjE7XHJcbn1cclxuXHJcbi5pbWFnZS1jb250YWluZXIgYSB7XHJcbiAgICBwb3NpdGlvbjphYnNvbHV0ZTtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIHotaW5kZXg6MjsgICBcclxufVxyXG5cclxucCB7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgb3BhY2l0eTogMC41O1xyXG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgICB3b3JkLXdyYXA6IG5vcm1hbDtcclxuICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xyXG4gICAgLXdlYmtpdC1saW5lLWNsYW1wOiAyOyAvKiBudW1iZXIgb2YgbGluZXMgdG8gc2hvdyAqL1xyXG4gICAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcclxuICAgIG1hcmdpbjogMCAwIDAuN2VtIDA7XHJcbn1cclxuXHJcbmRpdi51cCB7XHJcbiAgICBmbGV4OiAxO1xyXG59XHJcbiAgXHJcbmRpdi5kb3duIHtcclxuICAgIGZsZXg6IG5vbmU7XHJcbiAgICBtYXJnaW4tdG9wOiBhdXRvO1xyXG59XHJcblxyXG4uYnV0dG9ucyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgbWFyZ2luOiAwIDAuNWVtIDAuOGVtIDAuOGVtO1xyXG4gICAganVzdGlmeS1zZWxmOiBmbGV4LWVuZDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgbWluLWhlaWdodDogNDVweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHotaW5kZXg6IDA7XHJcbn1cclxuXHJcbi5idG46aG92ZXIge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgI2ZmZjtcclxufVxyXG5cclxuLy8gLmJ1dHRvbnMgLmJ1dHRvbi1wcmltYXJ5IHtcclxuLy8gICAgIGJvcmRlcjogbm9uZTtcclxuLy8gICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XHJcbi8vICAgICBwYWRkaW5nOiAxMnB4IDI0cHg7XHJcbi8vICAgICBtaW4taGVpZ2h0OiAxLjVlbTtcclxuLy8gICAgIG1pbi13aWR0aDogNWVtO1xyXG4vLyAgICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjRTcyQjNGLCAjZmY2MzVkKTtcclxuLy8gICAgIGJveC1zaGFkb3c6IDAgMnB4IDIwcHggcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG4vLyAgICAgdHJhbnNpdGlvbjogMC4zcztcclxuLy8gICAgIGNvbG9yOiB3aGl0ZTtcclxuLy8gICAgIG91dGxpbmU6IG5vbmU7XHJcbi8vIH1cclxuXHJcbi8vIC5idXR0b25zIC5idG4tcHJpbWFyeTpob3ZlciB7XHJcbi8vICAgICBib3JkZXI6IG5vbmU7XHJcbi8vICAgICBib3gtc2hhZG93OiAwIDJweCAxNnB4IHJnYmEoMCwgMCwgMCwgMC41KTtcclxuLy8gICAgIHRyYW5zaXRpb246IDAuM3M7XHJcbi8vIH1cclxuXHJcbiRoZWlnaHQ6MzA7XHJcbiRkZXB0aDo2O1xyXG4kYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjRTcyQjNGLCAjZmY2MzVkKTtcclxuJGNvbG9yOiAjZTY1NzY1O1xyXG4kY29sb3IyOiAjZmI3NzcyO1xyXG4kdGV4dC1jb2xvcjpkYXJrZW4oJGNvbG9yLDEwJSk7XHJcbiRsaWdodGVuLW9uLWhvdmVyOjElO1xyXG4kYnV0dG9uLXNwZWVkOi4wNjtcclxuJHRpbWluZy1mdW5jdGlvbjogZWFzZS1vdXQ7XHJcblxyXG4uYnV0dG9uLXByaW1hcnkge1xyXG4gICAgY3Vyc29yOnBvaW50ZXI7XHJcbiAgICBtYXJnaW4tbGVmdDo1cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOjE1cHg7XHJcbiAgICB0ZXh0LXNoYWRvdzowIC0ycHggMCBkYXJrZW4oJGNvbG9yLDIwJSksMCAxcHggMXB4IGxpZ2h0ZW4oJGNvbG9yLDIwJSkgO1xyXG4gICAgYm94LXNpemluZzpib3JkZXItYm94O1xyXG4gICAgZm9udC1zaXplOjEuM2VtO1xyXG4gICAgZm9udC1mYW1pbHk6IEhlbHZldGljYSwgQXJpYWwsIFNhbnMtU2VyaWY7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246bm9uZTtcclxuICAgIGZvbnQtd2VpZ2h0OmJvbGQ7XHJcbiAgICBjb2xvcjokdGV4dC1jb2xvcjtcclxuICAgICY6dmlzaXRlZCB7XHJcbiAgICAgIGNvbG9yOiR0ZXh0LWNvbG9yO1xyXG4gICAgfVxyXG4gICAgaGVpZ2h0OiRoZWlnaHQrcHg7XHJcbiAgICAvLyBsaW5lLWhlaWdodDokaGVpZ2h0K3B4O1xyXG4gICAgcGFkZGluZzogMCAyNHB4O1xyXG4gICAgLy8gcGFkZGluZzogMCAoKCRoZWlnaHQvMikrcHgpO1xyXG4gICAgLy8gZGlzcGxheTppbmxpbmUtYmxvY2s7XHJcbiAgICB3aWR0aDphdXRvO1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHRvcCxcclxuICAgICNFNzJCM0YsICNmZjYzNWQpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIC8vIGJvcmRlci10b3A6MXB4IHNvbGlkIGxpZ2h0ZW4oJGNvbG9yLDIyJSk7XHJcbiAgICAvL2JvcmRlci1ib3R0b206MXB4IHNvbGlkIGxpZ2h0ZW4oJGNvbG9yLDIwJSk7XHJcbiAgICBib3gtc2hhZG93OiBpbnNldCAwcHggLTFweCAxcHggMXB4IHJnYmEoMjU1LDI1NSwyNTUsMC4zKTtcclxuICAgIHRvcDowO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgdHJhbnNpdGlvbjphbGwgKCRidXR0b24tc3BlZWQgKyBzKSAkdGltaW5nLWZ1bmN0aW9uO1xyXG4gICAgcG9zaXRpb246cmVsYXRpdmU7XHJcbiAgfVxyXG4gIC5idXR0b24tcHJpbWFyeTpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gdG9wLFxyXG4gICAgICBsaWdodGVuKCRjb2xvciwkbGlnaHRlbi1vbi1ob3ZlciksXHJcbiAgICAgIGxpZ2h0ZW4oJGNvbG9yMiwkbGlnaHRlbi1vbi1ob3ZlcikpO1xyXG4gICAgICBib3JkZXI6IG5vbmU7XHJcbiAgfVxyXG5cclxuLmJ1dHRvbi1wcmltYXJ5OmFjdGl2ZSB7XHJcbiAgICB0b3A6JGRlcHRoK3B4O1xyXG4gICAgICAgICB0ZXh0LXNoYWRvdzowIC0ycHggMCBkYXJrZW4oJGNvbG9yLDAlKSwwIDFweCAxcHggbGlnaHRlbigkY29sb3IsMjAlKSwgMCAwIDRweCB3aGl0ZSA7XHJcbiAgICBjb2xvcjpsaWdodGVuKCRjb2xvciw0NSUpO1xyXG4gICAgJjphZnRlciB7XHJcbiAgICAgIHRvcDowO1xyXG4gICAgICBib3gtc2hhZG93OiAwIDNweCAzcHggcmdiYSgwLDAsMCwuNyksMCAzcHggOXB4IHJnYmEoMCwwLDAsLjIpO1xyXG4gICAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gdG9wLFxyXG4gICAgICBsaWdodGVuKCRjb2xvciwkbGlnaHRlbi1vbi1ob3ZlciksXHJcbiAgICAgIGxpZ2h0ZW4oJGNvbG9yMiwkbGlnaHRlbi1vbi1ob3ZlcikpO1xyXG4gICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICAgIGJveC1zaGFkb3c6IGluc2V0IDBweCAtMXB4IDFweCAxcHggcmdiYSgyNTUsMjU1LDI1NSwwLjMpO1xyXG4gICAgfVxyXG59XHJcblxyXG4uYnV0dG9uLXByaW1hcnk6OmFmdGVyIHtcclxuICAgIGRpc3BsYXk6aW5saW5lLWJsb2NrO1xyXG4gICAgY29udGVudDonJztcclxuICAgIHBvc2l0aW9uOmFic29sdXRlO1xyXG4gICAgbGVmdDowO1xyXG4gICAgcmlnaHQ6MDtcclxuICAgIHotaW5kZXg6LTE7XHJcbiAgICB0b3A6KCRkZXB0aCApK3B4O1xyXG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDEycHg7XHJcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAxMnB4O1xyXG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDhweDtcclxuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDhweDtcclxuICAgIHBhZGRpbmc6IDEycHggMjRweDtcclxuICAgIGhlaWdodDooJGhlaWdodCArMSkrcHg7XHJcbiAgICBsaW5lLWhlaWdodDokaGVpZ2h0K3B4O1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHRvcCxcclxuICAgICAgc2F0dXJhdGUoZGFya2VuKCRjb2xvciw0MCUpLDE1JSkgMCUsXHJcbiAgICAgIHNhdHVyYXRlKGRhcmtlbigkY29sb3IyLDI1JSksMTAlKSAkZGVwdGgrcHgpO1xyXG4gICAgdHJhbnNpdGlvbjphbGwgKCgkYnV0dG9uLXNwZWVkKjEuMykgKyBzKSAkdGltaW5nLWZ1bmN0aW9uO1xyXG4gICAgYm94LXNoYWRvdzpcclxuICAgICAgMCAxcHggMCAycHggcmdiYSgwLDAsMCwuMyksXHJcbiAgICAgIDAgNXB4ICgkZGVwdGgqLjQrcHgpIHJnYmEoMCwwLDAsLjUpLFxyXG4gICAgICAwICgkZGVwdGgqMS44K3B4KSA5cHggcmdiYSgwLDAsMCwuMik7XHJcbn1cclxuXHJcbi5idXR0b24tcHJpbWFyeTphY3RpdmU6OmFmdGVyIHtcclxuICAgIGJveC1zaGFkb3c6IDAgMXB4IDAgMnB4IHJnYmEoMCwgMCwgMCwgMC4zKSwgMCA1cHggMi40cHggcmdiYSgwLCAwLCAwLCAwLjUpLCAwIDEwLjhweCA5cHggcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProductItemComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-product-item',
                templateUrl: './product-item.component.html',
                styleUrls: ['./product-item.component.scss']
            }]
    }], function () { return [{ type: src_app_basket_basket_service__WEBPACK_IMPORTED_MODULE_1__["BasketService"] }]; }, { product: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ })

}]);
//# sourceMappingURL=shop-shop-module.js.map