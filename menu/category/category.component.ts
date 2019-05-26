import { Component, OnInit } from '@angular/core';
import { MenuCategoryProductsService } from '../../service/menu-service/menu-category-products.service';

@Component({
    selector: 'app-category',
    templateUrl: './category.component.html',
    styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

    MenuCategoryProducts;

    constructor(private httpMenuCategoryProductsService: MenuCategoryProductsService) { }

    ngOnInit() {
        this.httpMenuCategoryProductsService.getCategoryProductsMenu().subscribe(menuCategory => {
            this.MenuCategoryProducts = menuCategory;
        });
    }

}

export interface CategoryProductsMenu {
    ID?: number;
    post_author?: string;
    post_date?: string;
    post_date_gmt?: string;
    post_content?: string;
    post_title?: string;
    post_excerpt?: string;
    post_status?: string;
    comment_status?: string;
    ping_status?: string;
    post_password?: string;
    post_name?: string;
    to_ping?: string;
    pinged?: string;
    post_modified?: string;
    post_modified_gmt?: string;
    post_content_filtered?: string;
    post_parent?: number;
    guid?: string;
    menu_order?: number;
    post_type?: string;
    post_mime_type?: string;
    comment_count?: string;
    filter?: string;
    db_id?: number;
    menu_item_parent?: string;
    object_id?: string;
    object?: string;
    type?: string;
    type_label?: string;
    url?: string;
    title?: string;
    target?: string;
    attr_title?: string;
    description?: string;
    xfn?: string;
    slug?: string;
    slug_parse_last?: string;
}
