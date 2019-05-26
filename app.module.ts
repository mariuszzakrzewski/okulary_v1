import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HomeModule } from './home/home.module';
import { SklepModule } from './sklep/sklep.module';
import { MenuModule } from './menu/menu.module';
import { IncludeModule } from './include/include.module';
import { StronaModule } from './strona/strona.module';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        MenuModule,
        IncludeModule,
        HomeModule,
        SklepModule,
        StronaModule,
        AppRoutingModule
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule { }
