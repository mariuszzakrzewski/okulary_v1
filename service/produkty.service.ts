import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Produkty } from '../sklep/single/single-products.component';
import { HttpClient } from '@angular/common/http';

@Injectable({
   providedIn: 'root'
})
export class ProduktyService {
   constructor(private http: HttpClient) { }
   getPost(slugProdukt: string): Observable<Produkty> {
      return this.http.get<Produkty>('http://localhost/web/woocommerce/wordpress/wp-json/my_endpoint/v1/produkt/slug?slug_produkt=' + slugProdukt);
   }
}
