import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { AccountService } from 'src/app/account/account.service';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    private accountService: AccountService,
    private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot) {

      if (!this.accountService.isLogged) {
        this.accountService.authCompleted$.pipe(map(user => !!user), catchError(err => [false]));
        //console.log(state.url);
        this.router.navigate(['account/login'], {queryParams: {returnUrl: state.url}});
        // return this.accountService.authCompleted$.pipe(map(user => !!user), catchError(err => [false]));
      }

      return true;
    // return this.accountService.currentUser$.pipe(
    //   map((auth: any) => {
    //     if (auth) {
    //       return true;
    //     }

    //     return this.router.navigate(['account/login'], {queryParams: {returnUrl: state.url}});
    //   })
    // );
  }
}
