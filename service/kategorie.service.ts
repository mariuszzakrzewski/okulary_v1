import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Produkty} from '../sklep/single/single-products.component';

@Injectable({
  providedIn: 'root'
})
export class KategorieService {

  constructor(private http: HttpClient) { }
    getProductsFromCategoryName(slugCategory: string): Observable<Produkty> {
        return this.http.get<Produkty>('http://localhost/web/woocommerce/wordpress/wp-json/my_endpoint/v1/produkt/kategoria?category_name=' + slugCategory);
    }
}
