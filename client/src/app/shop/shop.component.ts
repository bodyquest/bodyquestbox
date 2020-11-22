import { Component, OnInit } from '@angular/core';
import { ICategory } from '../shared/models/category';
import { IProduct } from '../shared/models/pagination';
import { ShopService } from './shop.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit {
  products!: IProduct[];
  categories!: ICategory[];

  constructor(private shopService: ShopService) { }

  ngOnInit(): void {
    this.getProducts();
    this.getCategories();
  }

  getProducts() {
    this.shopService.getProducts()
      .subscribe(response => {
        this.products = response.data;
      }, error => {
        console.log(error);
      });
  }

  getCategories() {
    this.shopService.getCategories()
      .subscribe(response => {
        this.categories = response;
      }, error => {
        console.log(error);
      });
  }
}
