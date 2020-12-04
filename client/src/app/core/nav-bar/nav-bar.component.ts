import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AccountService } from 'src/app/account/account.service';
import { BasketService } from 'src/app/basket/basket.service';
import { IBasket } from 'src/app/shared/models/basket';
import { IUser } from 'src/app/shared/models/user';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  basket$!: any;
  currentUser$!: Observable<IUser>;

  constructor(
    private basketService: BasketService,
    private accountService: AccountService) {
    }

  ngOnInit(): void {
    // if (this.basketService.basket$ !== null) {
      this.basket$ = this.basketService.basket$;
    // }

    this.currentUser$ = this.accountService.currentUser$;
    // this.currentUser$ = this.accountService.authCompleted$;
  }

  logout() {
    this.accountService.logout();
  }
}
