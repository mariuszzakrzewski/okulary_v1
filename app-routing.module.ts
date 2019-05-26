import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CategoryProductsComponent } from './sklep/category/category-products.component';
import { SingleProductsComponent } from './sklep/single/single-products.component';
import { StronaComponent } from './strona/strona/strona.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: '/strona-glowna',
        pathMatch: 'full'
    },
    {
        path: 'strona-glowna',
        component: HomeComponent
    },
    {
        path: ':slug_parse_last',
        component: StronaComponent
    },
    {
        path: 'produkt/:slug_produkt',
        component: SingleProductsComponent,
    },
    {
        path: 'kategoria/:category_name',
        component: CategoryProductsComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(
        routes,
        {
            scrollPositionRestoration: 'enabled',
            enableTracing: false
        } // Tryb debugowania 'true' => włączony 'false' wyłączony
    )],
    exports: [RouterModule]
})
export class AppRoutingModule { }
