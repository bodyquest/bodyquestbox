import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './core/guards/auth.guard';
import { NotFoundComponent } from './core/not-found/not-found.component';
import { ServerErrorComponent } from './core/server-error/server-error.component';
import { TestErrorComponent } from './core/test-error/test-error.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path: '', component: HomeComponent, data: {breadcrumb: 'Home'}},
  {path: 'test-error', component: TestErrorComponent, data: {breadcrumb: 'Test Errors'}},
  {path: 'not-found', component: NotFoundComponent, data: {breadcrumb: 'Not Found'}},
  {path: 'server-error', component: ServerErrorComponent, data: {breadcrumb: 'Server Error'}},
  // --------------------------------------------------------------- //
  {path: 'shop', loadChildren: () => import('./shop/shop.module')
    .then(mod => mod.ShopModule), data: {breadcrumb: 'Shop'}},
  {path: 'basket', loadChildren: () => import('./basket/basket.module')
    .then(mod => mod.BasketModule), data: {breadcrumb: 'Shopping Cart'}},
  {path: 'checkout', canActivate: [AuthGuard], loadChildren: () => import('./checkout/checkout.module')
    .then(mod => mod.CheckoutModule), data: {breadcrumb: 'Checkout'}},
  {path: 'orders', canActivate: [AuthGuard], loadChildren: () => import('./orders/orders.module')
    .then(mod => mod.OrdersModule), data: {breadcrumb: 'Orders'}},
  {path: 'account', loadChildren: () => import('./account/account.module')
    .then(mod => mod.AccountModule), data: {breadcrumb: {skip: true}}},
    // skip prevents the breadcrumb service from giving this automatically
  // -------------------------------------------------------------- //
  {path: '**', redirectTo: 'not-found', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
