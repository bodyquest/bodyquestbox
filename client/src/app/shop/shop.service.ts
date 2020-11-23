import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { IPagination } from '../shared/models/pagination';
import { ICategory } from '../shared/models/category';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ShopService {
  baseUrl = 'https://localhost:5001/api/';

  constructor(private http: HttpClient) { }

  getProducts(sort?: string) {
    let params = new HttpParams();

    if (sort) {
      params = params.append('sort', sort);
    }

    return this.http.get<IPagination>
      (this.baseUrl + 'products', {observe: 'response', params})
      .pipe(
        map(response => {
          return response.body;
        })
      );
  }

  getCategories() {
    return this.http.get<ICategory[]>(this.baseUrl + 'categories/maincategories');
  }
}
