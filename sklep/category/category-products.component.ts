import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { KategorieService } from '../../service/kategorie.service';

@Component({
    selector: 'app-category-products',
    templateUrl: './category-products.component.html',
    styleUrls: ['./category-products.component.css']
})
export class CategoryProductsComponent implements OnInit {

    DisplayProductsFromCategoryName;

    constructor(private route: ActivatedRoute, private httpServiceCategory: KategorieService) { }

    ngOnInit() {
        this.route.paramMap.subscribe(params => {
            this.httpServiceCategory.getProductsFromCategoryName(params.get('category_name')).subscribe(pojedynczyProduktzKategorii => {
                this.DisplayProductsFromCategoryName = pojedynczyProduktzKategorii;
            });
        });
    }
}
