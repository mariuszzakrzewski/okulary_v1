import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PostBannerOccasionID } from '../include/banner-occasion/banner-occasion.component';

@Injectable({
  providedIn: 'root'
})
export class BannerOccasionService {
  constructor(private http: HttpClient) { }

  getPostBannerOccasionID(): Observable<Array<PostBannerOccasionID>> {
    return this.http.get<Array<PostBannerOccasionID>>('http://localhost/web/woocommerce/wordpress/wp-json/my_endpoint/v1/sekcje-strony');
  }
}