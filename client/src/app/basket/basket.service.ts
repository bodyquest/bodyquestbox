import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { Basket, IBasket, IBasketItem, IBasketTotals } from '../shared/models/basket';
import { IProduct } from '../shared/models/pagination';
import { IDeliveryMethod } from '../shared/models/deliveryMethod';

@Injectable({
  providedIn: 'root'
})
export class BasketService {
  baseUrl = environment.apiUrl;

  // private basketSource: BehaviorSubject<any> = new BehaviorSubject(null);
  private basketSource = new BehaviorSubject<IBasket>(null!);
  private basketTotalSource = new BehaviorSubject<IBasketTotals>(null!);
  basket$ = this.basketSource.asObservable();
  basketTotal$ = this.basketTotalSource?.asObservable();
  shipping = 0;

  constructor(private http: HttpClient) { }

  createPaymentIntent() {
    return this.http
      .post<IBasket>(this.baseUrl + 'payments/' + this.getCurrentBasketValue()?.id, {})
      .pipe(
        map((basket: IBasket) => {
          this.basketSource.next(basket);
        }
        )
      );
  }

  getBasket(id: string) {
    return this.http.get<IBasket>(this.baseUrl + 'basket?id=' + id)
      .pipe(
        map((basket: IBasket) => {
          this.basketSource.next(basket);
          if (basket !== null && basket.shippingPrice !== undefined) {
            this.shipping = basket.shippingPrice;
          }
          this.calculateTotals();
        })
      );
  }

  setShippingPrice(deliveryMethod: IDeliveryMethod) {
    this.shipping = deliveryMethod.price;
    const basket = this.getCurrentBasketValue();
    if (basket !== null) {
      basket.deliveryMethodId = deliveryMethod.id;
      basket.shippingPrice = deliveryMethod.price;
      this.setBasket(basket);
    }
    this.calculateTotals();
  }

  setBasket(basket: IBasket) {
    return this.http.post<IBasket>(this.baseUrl + 'basket', basket)
      .subscribe((response: IBasket) => {
        this.basketSource.next(response);
        this.calculateTotals();
      }, error => {
        console.log(error);
      });
  }

  getCurrentBasketValue(): IBasket | null {
    return this.basketSource?.value;
  }

  addItemToBasket(item: IProduct, quantity = 1): void {
    const itemToAdd: IBasketItem = this.mapProductItemToBasketItem(item, quantity);
    const basket = this.getCurrentBasketValue() ?? this.createBasket();

    basket.items = this.addOrUpdateItem(basket.items, itemToAdd, quantity);
    this.setBasket(basket);
  }

  incrementItemQuantity(item: IBasketItem): void {
    const basket = this.getCurrentBasketValue();
    if (basket !== null) {
      const foundItemIndex = basket.items.findIndex(x => x.id === item.id);
      basket.items[foundItemIndex].quantity++;
      this.setBasket(basket);
    }
  }

  decrementItemQuantity(item: IBasketItem): void {
    const basket = this.getCurrentBasketValue();
    if (basket !== null) {
      const foundItemIndex = basket.items.findIndex(x => x.id === item.id);
      if (basket.items[foundItemIndex].quantity > 1) {
        basket.items[foundItemIndex].quantity--;
        this.setBasket(basket);
      } else {
        this.removeItemFromBasket(item);
      }
    }
  }

  removeItemFromBasket(item: IBasketItem): void {
    const basket = this.getCurrentBasketValue();
    if (basket !== null) {
      if (basket.items.some(x => x.id === item.id)) {
        basket.items = basket.items.filter(i => i.id !== item.id);
        if (basket.items.length > 0) {
          this.setBasket(basket);
        } else {
          this.deleteBasket(basket);
        }
      }
    }
  }

  deleteLocalBasket(id: string | undefined) {
    this.basketSource.next(null!);
    this.basketTotalSource.next(null!);
    localStorage.removeItem('basket_id');
  }

  deleteBasket(basket: IBasket) {
    return this.http.delete(this.baseUrl + 'basket?id=' + basket.id)
      .subscribe(() => {
        this.basketSource.next(null!);
        this.basketTotalSource.next(null!);
        localStorage.removeItem('basket_id');
      }, error => {
        console.log(error);
      });
  }
  
  private calculateTotals(): void {
    const basket = this.getCurrentBasketValue();
    const shipping = this.shipping;

    if (basket !== null) {
      const subtotal = basket.items.reduce((acc, curr) => (curr.price * curr.quantity) + acc, 0);
      const total = subtotal + shipping;
      this.basketTotalSource.next({shipping, total, subtotal});
    }
  }

  private addOrUpdateItem(items: IBasketItem[], itemToAdd: IBasketItem, quantity: number): IBasketItem[] {
    const index = items.findIndex(i => i.id === itemToAdd.id);
    if (index === -1) {
      itemToAdd.quantity = quantity;
      items.push(itemToAdd);
    }else{
      items[index].quantity += quantity;
    }

    return items;
  }

  private createBasket(): IBasket {
    const basket = new Basket();
    localStorage.setItem('basket_id', basket.id);
    return basket;
  }

  private mapProductItemToBasketItem(item: IProduct, quantity: number): IBasketItem {
    return {
      id: item.id,
      productName: item.name,
      price: item.price,
      pictureUrl: item.pictureUrl,
      quantity
    };
  }
}
