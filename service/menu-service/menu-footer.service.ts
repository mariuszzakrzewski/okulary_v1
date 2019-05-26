import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FooterMenu } from '../../menu/footer/footer.component';

@Injectable({
  providedIn: 'root'
})
export class MenuFooterService {

  constructor(private http: HttpClient) { }
    getFooterMenu(): Observable<Array<FooterMenu>> {
        return this.http.get<Array<FooterMenu>>('http://localhost/web/woocommerce/wordpress/wp-json/stopka-menu/menu');
    }
}
