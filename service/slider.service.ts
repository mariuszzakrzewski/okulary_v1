import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SliderService {

  constructor(private http: HttpClient) { }

   getSlider(): Observable<any[]> {
      return this.http.get<any[]>('http://localhost/web/woocommerce/wordpress/wp-json/my_endpoint/v1/main_slider', {
         params: {
            per_page: '-1'
         }
      });
   }
}
