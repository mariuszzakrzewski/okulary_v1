import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { SliderComponent } from './slider/slider.component';
import { PromocjeComponent } from './promocje/promocje.component';
import { IncludeModule } from '../include/include.module';
import { BanneryPromocyjneService } from '../service/bannery-promocyjne.service';
import { SliderService } from '../service/slider.service';

@NgModule({
   declarations: [SliderComponent, HomeComponent, PromocjeComponent],
   imports: [
      CommonModule,
      IncludeModule
   ],
   exports: [HomeComponent, SliderComponent, PromocjeComponent],
   providers: [SliderService, BanneryPromocyjneService]
})
export class HomeModule { }
