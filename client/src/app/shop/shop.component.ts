import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ICategory } from '../shared/models/category';
import { IPagination, IProduct } from '../shared/models/pagination';
import { ShopParams } from '../shared/models/shopParams';
import { ShopService } from './shop.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit {
  @ViewChild('search', {static: true}) searchTerm!: ElementRef;
  products: IProduct[] = [];
  categories!: ICategory[];

  shopParams = new ShopParams();
  totalCount!: number;
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
    this.shopService.getProducts(this.shopParams)
      .subscribe((response: IPagination | null) => {
        if (response) {
          this.products = response.data;
          this.shopParams.pageNumber = response.pageIndex;
          this.shopParams.pageSize = response.pageSize;
          this.totalCount = response.count;
        }
        else{ }
      }, error => {
        console.log(error);
      });
  }

  getCategories() {
    this.shopService.getCategories()
      .subscribe(response => {
        this.categories = [{id: 0, name: 'All'}, ...response];
      }, error => {
        console.log(error);
      });
  }

  // NOT IMPLEMENTED YET
  // onCategorySelected() {
  //   this.shopParams.categoryIdSelected = categoryId;
  //   this.shopParams.pageNumber = 1;
  //   this.getCategoryProduct();
  // }

  onSortSelected(event: Event) {
    let element = event.target as HTMLSelectElement;
    this.shopParams.sort = element.value;
    this.getProducts();
  }

  onPageChanged(event: any) {
    if (this.shopParams.pageNumber !== event) {
      this.shopParams.pageNumber = event;
    this.getProducts();
    }
  }

  onSearch() {
    this.shopParams.search = this.searchTerm.nativeElement.value;
    this.shopParams.pageNumber = 1;
    this.getProducts();
  }

  onReset() {
    this.searchTerm.nativeElement.value = "";
    this.shopParams = new ShopParams();
    this.getProducts();
  }
}
