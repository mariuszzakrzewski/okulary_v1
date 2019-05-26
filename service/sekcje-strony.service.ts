import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PostID } from '../include/polecane-produkty/polecane-produkty.component';
import { PostSekcjaKontaktID } from '../include/section-contact/section-contact.component';

@Injectable({
  providedIn: 'root'
})
export class SekcjeStronyService {

  constructor(private http: HttpClient) { }

  getPostID(): Observable<Array<PostID>> {
    return this.http.get<Array<PostID>>('http://localhost/web/woocommerce/wordpress/wp-json/my_endpoint/v1/sekcje-strony');
  }
  getPostSekcjaKontaktID(): Observable<Array<PostSekcjaKontaktID>> {
    return this.http.get<Array<PostSekcjaKontaktID>>('http://localhost/web/woocommerce/wordpress/wp-json/my_endpoint/v1/sekcje-strony');
  }
}
