import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import { CategoryComponent } from './category/category.component';
import { FooterComponent } from './footer/footer.component';
import { AppRoutingModule } from '../app-routing.module';
import { MenuMainService } from '../service/menu-service/menu-main.service';
import { MenuCategoryProductsService } from '../service/menu-service/menu-category-products.service';
import { MenuFooterService } from '../service/menu-service/menu-footer.service';

@NgModule({
   declarations: [MainComponent, CategoryComponent, FooterComponent],
   imports: [
      CommonModule,
       AppRoutingModule
   ],
   exports: [MainComponent, CategoryComponent, FooterComponent],
   providers: [MenuMainService, MenuCategoryProductsService, MenuFooterService]
})
export class MenuModule { }
