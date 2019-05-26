import { Component, OnInit } from '@angular/core';
import { SliderService } from '../../service/slider.service';
import { Observable } from 'rxjs';
declare var $: any;

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {

   slajdy$: Observable<any[]>;

  constructor(private wp: SliderService) {
     this.slajdy$ = this.wp.getSlider();
  }

  ngOnInit() {
     $(document).ready(() => {
        $('.preloader-slider').addClass('animated fadeInDown');
        setTimeout(() => {
           $('.preloader-slider').removeClass('fadeIn').addClass('fadeOutDown');
        }, 4200);
        setTimeout(() => {
           $('.preloader-slider').remove();
        }, 4500);
     });
  }

}
