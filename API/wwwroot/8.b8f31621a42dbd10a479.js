(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{h9W5:function(t,r,e){"use strict";e.r(r),e.d(r,"OrdersModule",function(){return P});var s=e("ofXK"),o=e("tyNb"),c=e("fXoL"),i=e("AytR"),b=e("tk/3");let n=(()=>{class t{constructor(t){this.http=t,this.baseUrl=i.a.apiUrl}getOrdersForUser(){return this.http.get(this.baseUrl+"orders")}getOrderDetailed(t){return this.http.get(this.baseUrl+"orders/"+t)}}return t.\u0275fac=function(r){return new(r||t)(c.Ub(b.b))},t.\u0275prov=c.Gb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();function a(t,r){if(1&t&&(c.Qb(0,"tr",6),c.Qb(1,"th"),c.zc(2),c.Pb(),c.Qb(3,"td"),c.zc(4),c.ac(5,"date"),c.Pb(),c.Qb(6,"td"),c.zc(7),c.ac(8,"number"),c.Pb(),c.Qb(9,"td"),c.zc(10),c.Pb(),c.Pb()),2&t){const t=r.$implicit;c.hc("routerLink","/orders/",t.id,""),c.zb(2),c.Bc("# ",t.id,""),c.zb(2),c.Ac(c.cc(5,5,t.orderDate,"medium")),c.zb(3),c.Ac(c.cc(8,8,t.total,"1.2-2")),c.zb(3),c.Ac(t.status)}}let d=(()=>{class t{constructor(t){this.ordersService=t}ngOnInit(){this.getOrders()}getOrders(){this.ordersService.getOrdersForUser().subscribe(t=>{this.orders=t},t=>{console.log(t)})}}return t.\u0275fac=function(r){return new(r||t)(c.Kb(n))},t.\u0275cmp=c.Eb({type:t,selectors:[["app-orders"]],decls:16,vars:1,consts:[[1,"container","mt-4"],[1,"row"],[1,"col-12"],[1,"table","table-hover",2,"cursor","pointer"],[1,"thead-light"],[3,"routerLink",4,"ngFor","ngForOf"],[3,"routerLink"]],template:function(t,r){1&t&&(c.Qb(0,"section",0),c.Qb(1,"div",1),c.Qb(2,"div",2),c.Qb(3,"table",3),c.Qb(4,"thead",4),c.Qb(5,"tr"),c.Qb(6,"th"),c.zc(7,"Order"),c.Pb(),c.Qb(8,"th"),c.zc(9,"Date"),c.Pb(),c.Qb(10,"th"),c.zc(11,"Total"),c.Pb(),c.Qb(12,"th"),c.zc(13,"Status"),c.Pb(),c.Pb(),c.Pb(),c.Qb(14,"tbody"),c.xc(15,a,11,11,"tr",5),c.Pb(),c.Pb(),c.Pb(),c.Pb(),c.Pb()),2&t&&(c.zb(15),c.fc("ngForOf",r.orders))},directives:[s.m,o.d],pipes:[s.f,s.g],styles:[""]}),t})();var l=e("tc9g"),u=e("GJcC"),p=e("PoZw");function h(t,r){if(1&t&&(c.Qb(0,"div",2),c.Qb(1,"div",3),c.Lb(2,"app-basket-summary",4),c.Pb(),c.Qb(3,"div",5),c.Lb(4,"app-order-totals",6),c.Pb(),c.Pb()),2&t){const t=c.Zb();c.zb(2),c.fc("items",t.order.orderItems)("isBasket",!1)("isOrder",!0),c.zb(2),c.fc("shippingPrice",t.order.shippingPrice)("subtotal",t.order.subtotal)("total",t.order.total)}}const f=[{path:"",component:d},{path:":id",component:(()=>{class t{constructor(t,r,e){this.route=t,this.breadcrumbService=r,this.ordersService=e,this.breadcrumbService.set("@OrderDetailed","")}ngOnInit(){this.ordersService.getOrderDetailed(Number(this.route.snapshot.paramMap.get("id"))).subscribe(t=>{this.order=t,this.breadcrumbService.set("@OrderDetailed",`Order# ${t.id} - ${t.status}`)},t=>{console.log(t)})}}return t.\u0275fac=function(r){return new(r||t)(c.Kb(o.a),c.Kb(l.c),c.Kb(n))},t.\u0275cmp=c.Eb({type:t,selectors:[["app-order-detailed"]],decls:2,vars:1,consts:[[1,"container","mt-4"],["class","row",4,"ngIf"],[1,"row"],[1,"col-8"],[3,"items","isBasket","isOrder"],[1,"col-4"],[3,"shippingPrice","subtotal","total"]],template:function(t,r){1&t&&(c.Qb(0,"section",0),c.xc(1,h,5,6,"div",1),c.Pb()),2&t&&(c.zb(1),c.fc("ngIf",r.order))},directives:[s.n,u.a,p.a],styles:[""]}),t})(),data:{breadcrumb:{alias:"OrderDetailed"}}}];let m=(()=>{class t{}return t.\u0275mod=c.Ib({type:t}),t.\u0275inj=c.Hb({factory:function(r){return new(r||t)},imports:[[o.g.forChild(f)],o.g]}),t})();var g=e("PCNd");let P=(()=>{class t{}return t.\u0275mod=c.Ib({type:t}),t.\u0275inj=c.Hb({factory:function(r){return new(r||t)},imports:[[s.c,m,g.a]]}),t})()}}]);