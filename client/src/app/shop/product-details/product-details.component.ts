import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BasketService } from 'src/app/basket/basket.service';
import { IProduct } from 'src/app/shared/models/product';
import { BreadcrumbService } from 'xng-breadcrumb';
import { ShopService } from '../shop.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  product!: IProduct;
  quantity = 1;

  constructor(
    private shopService: ShopService,
    private activatedRoute: ActivatedRoute,
    private bcService: BreadcrumbService,
    private basketService: BasketService) {
      this.bcService.set('@productDetails', '');
    }

  ngOnInit(): void {
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
    let str: string;
    let final: string;

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
