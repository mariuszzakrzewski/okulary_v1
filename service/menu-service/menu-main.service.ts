import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GlowneMenu } from '../../menu/main/main.component';

@Injectable({
    providedIn: 'root'
})
export class MenuMainService {
    constructor(private http: HttpClient) { }
    getGlowneMenu(): Observable<Array<GlowneMenu>> {
        return this.http.get<Array<GlowneMenu>>('http://localhost/web/woocommerce/wordpress/wp-json/glowne-menu/menu');
    }
}
