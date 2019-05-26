import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BanneryPromocyjneService {

  constructor(private http: HttpClient) { }

  getBanneryPromocyjne(): Observable<any[]> {
     return this.http.get<any[]>('http://localhost/web/woocommerce/wordpress/wp-json/my_endpoint/v1/banner_promocje', {
        params: {
           per_page: '-1'
        }
     });
  }
}
