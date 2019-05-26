import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProduktyPolecane } from '../include/polecane-produkty/polecane-produkty.component';

@Injectable({
  providedIn: 'root'
})
export class PolecaneService {
  constructor(private http: HttpClient) { }
  getPosts(): Observable<Array<ProduktyPolecane>> {
    return this.http.get<Array<ProduktyPolecane>>('http://localhost/web/woocommerce/wordpress/wp-json/my_endpoint/v1/wszystkie_produkty');
  }
}