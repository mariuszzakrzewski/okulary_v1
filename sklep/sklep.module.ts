import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SingleProductsComponent } from './single/single-products.component';
import { CategoryProductsComponent } from './category/category-products.component';
import { PipeModule } from '../pipe/pipe.module';
import { AppRoutingModule } from '../app-routing.module';
import { ProduktyService } from '../service/produkty.service';
import {KategorieService} from '../service/kategorie.service';

@NgModule({
    declarations: [SingleProductsComponent, CategoryProductsComponent],
    imports: [
        CommonModule,
        PipeModule,
        AppRoutingModule
    ],
    exports: [SingleProductsComponent, CategoryProductsComponent],
    providers: [ProduktyService, KategorieService]
})
export class SklepModule { }
