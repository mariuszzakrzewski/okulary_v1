import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Strony } from '../strona/strona/strona.component';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StronaService {

  constructor(private http: HttpClient) { }
  getPage(slugPage: string): Observable<Strony> {
      return this.http.get<Strony>('http://localhost/web/woocommerce/wordpress/wp-json/my_endpoint/v1/page/slug?slug_page=' + slugPage);
  }
}
