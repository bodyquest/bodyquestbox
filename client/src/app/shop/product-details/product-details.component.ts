import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProduct } from 'src/app/shared/models/product';
import { ShopService } from '../shop.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

  product!: IProduct;

  constructor(
    private shopService: ShopService,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.loadProduct();
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
      }, error => {
        console.log(error);
      });
  }
}
