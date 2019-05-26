import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CategoryProductsMenu } from '../../menu/category/category.component';

@Injectable({
    providedIn: 'root'
})
export class MenuCategoryProductsService {

    constructor(private http: HttpClient) {  }
    getCategoryProductsMenu(): Observable<Array<CategoryProductsMenu>> {
        return this.http.get<Array<CategoryProductsMenu>>('http://localhost/web/woocommerce/wordpress/wp-json/kategorie-produktow-menu/menu');
    }
}
