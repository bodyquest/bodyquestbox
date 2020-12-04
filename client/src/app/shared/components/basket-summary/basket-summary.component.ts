import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { BasketService } from 'src/app/basket/basket.service';
import { IBasket, IBasketItem } from '../../models/basket';

@Component({
  selector: 'app-basket-summary',
  templateUrl: './basket-summary.component.html',
  styleUrls: ['./basket-summary.component.scss']
})
export class BasketSummaryComponent implements OnInit {
    basket$!: Observable<IBasket>;
    thumbnail = '';
    @Input() isBasket = true;

    @Output() decrement: EventEmitter<IBasketItem> = new EventEmitter<IBasketItem>();
    @Output() increment: EventEmitter<IBasketItem> = new EventEmitter<IBasketItem>();
    @Output() remove: EventEmitter<IBasketItem> = new EventEmitter<IBasketItem>();

    constructor(private basketService: BasketService) { }

    ngOnInit(): void {
      if (this.basketService.basket$ !== null) {

        this.basket$ = this.basketService.basket$;
      }
    }

    decrementItemQuantity(item: IBasketItem): void {
      this.decrement.emit(item);
    }

    incrementItemQuantity(item: IBasketItem): void {
      this.increment.emit(item);
    }

    removeBasketItem(item: IBasketItem): void {
      this.remove.emit(item);
    }

    convertImage(pictureUrl: string) {
      let result = pictureUrl.replace("upload/", "upload/w_50,ar_1:1,c_fill,g_auto/");
      this.thumbnail = result;
  }
}
