import { Component, OnInit } from '@angular/core';
import { ICategory } from '../shared/models/category';
import { IPagination, IProduct } from '../shared/models/pagination';
import { ShopService } from './shop.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit {
  products: IProduct[] = [];
  categories!: ICategory[];

  categoryIdSelected = 0;
  sortSelected = 'name';
  sortOptions = [
    {name: 'Alphabetical', value: 'name'},
    {name: 'Price: Low to High', value: 'priceAsc'},
    {name: 'Price: High to Low', value: 'priceDesc'}
  ]

  constructor(private shopService: ShopService) { }

  ngOnInit(): void {
    this.getProducts();
    this.getCategories();
  }

  getProducts() {
    this.shopService.getProducts(this.sortSelected)
      .subscribe((response: IPagination | null) => {
        if (response) {
          this.products = response.data;
        }
        else{
         
        }
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

  onSortSelected(event: Event) {
    let element = event.target as HTMLSelectElement;
    this.sortSelected = element.value;
    this.getProducts();
  }
}
