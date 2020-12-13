import { Component, DoCheck, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AccountService } from 'src/app/account/account.service';
import { BasketService } from 'src/app/basket/basket.service';
import { IBasket } from 'src/app/shared/models/basket';
import { ShopParams } from 'src/app/shared/models/shopParams';
import { IUser } from 'src/app/shared/models/user';
import { ShopService } from 'src/app/shop/shop.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  @ViewChild('search', {static: false}) searchTerm!: ElementRef;

  basket$!: any;
  currentUser$!: Observable<IUser>;

  get isLogged(): boolean {
    return this.accountService.isLoggedIn();
  }

  constructor(
    private basketService: BasketService,
    private accountService: AccountService,
    private shopService: ShopService,
    private router: Router) {

    }

  ngOnInit(): void {
    // if (this.basketService.basket$ !== null) {
      this.basket$ = this.basketService.basket$;
    // }

      // this.currentUser$ = this.accountService.currentUser$;
      this.currentUser$ = this.accountService.authCompleted$;
  }

  onSearch() {
    if (this.searchTerm) {
        const navigationExtras: NavigationExtras = {state: this.searchTerm.nativeElement.value};

        this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
        this.router.navigate(['shop'], navigationExtras);
      });
    }
  }

  logout(): void {
    this.accountService.logout();
  }
}
