import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ICategory } from '../shared/models/category';
import { IPagination, IProduct } from '../shared/models/pagination';
import { ShopParams } from '../shared/models/shopParams';
import { ShopService } from './shop.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit, AfterViewInit {
  @ViewChild('search', {static: false}) searchTerm!: ElementRef;
  products: IProduct[] = [];
  categories!: ICategory[];

  shopParams!: ShopParams;
  totalCount!: number;
  sortOptions = [
    {name: 'Alphabetical', value: 'name'},
    {name: 'Price: Low to High', value: 'priceAsc'},
    {name: 'Price: High to Low', value: 'priceDesc'}
  ];

  constructor(private shopService: ShopService) {
    this.shopParams = this.shopService.getShopParams();
  }

  ngOnInit(): void {
    this.getProducts(true);
    this.getCategories();
  }

  ngAfterViewInit(): void {
    if (this.shopParams.search !== undefined) {
      this.searchTerm.nativeElement.value = this.shopParams.search;
    }
}

  getProducts(useCache = false): void {
    this.shopService.getProducts(useCache)
      .subscribe((response: IPagination | null) => {
        if (response) {
          this.products = response.data;
          this.totalCount = response.count;
        }
        else{ }
      }, error => {
        console.log(error);
      });
  }

  getCategories(): void {
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

  onSortSelected(event: Event): void {
    const params = this.shopService.getShopParams();
    let element = event.target as HTMLSelectElement;
    params.sort = element.value;;
    this.shopService.setShopParams(params);
    this.getProducts();
    // let element = event.target as HTMLSelectElement;
    // this.shopParams.sort = element.value;
    // this.getProducts();
  }

  onPageChanged(event: any): void {
    const params = this.shopService.getShopParams();
    if (params.pageNumber !== event) {
      params.pageNumber = event;
      this.shopService.setShopParams(params);
      this.getProducts(true);
    }
  }

  onSearch(): void {
    const params = this.shopService.getShopParams();
    if (this.searchTerm) {
      params.search = this.searchTerm.nativeElement.value;
    }

    params.pageNumber = 1;
    this.shopService.setShopParams(params);
    this.getProducts();
  }

  onReset(): void {
    if (this.searchTerm) {
      this.searchTerm.nativeElement.value = '';
    }

    this.shopParams = new ShopParams();
    this.shopService.setShopParams(this.shopParams);
    this.getProducts();
  }
}
