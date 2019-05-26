import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PolecaneProduktyComponent } from './polecane-produkty/polecane-produkty.component';
import { BannerOccasionComponent } from './banner-occasion/banner-occasion.component';
import { SectionContactComponent } from './section-contact/section-contact.component';
import { PreloaderComponent } from './preloader/preloader.component';
import { FooterComponent } from './footer/footer.component';
import { AppRoutingModule } from '../app-routing.module';
import { PipeModule } from '../pipe/pipe.module';
import { PolecaneService } from '../service/polecane.service';
import { BannerOccasionService } from '../service/banner-occasion.service';
import { SekcjeStronyService } from '../service/sekcje-strony.service';

@NgModule({
    declarations: [PreloaderComponent, PolecaneProduktyComponent, BannerOccasionComponent, SectionContactComponent, FooterComponent],
    imports: [
        CommonModule,
        AppRoutingModule,
        PipeModule
    ],
    exports: [PreloaderComponent, PolecaneProduktyComponent, BannerOccasionComponent, SectionContactComponent, FooterComponent],
    providers: [PolecaneService, BannerOccasionService, SekcjeStronyService]
})
export class IncludeModule { }
