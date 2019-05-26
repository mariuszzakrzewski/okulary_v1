import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
   selector: 'app-preloader',
   templateUrl: './preloader.component.html',
   styleUrls: ['./preloader.component.css']
})
export class PreloaderComponent implements OnInit {

   constructor() { }

   ngOnInit() {
      $(document).ready(() => {
         $('.page-wrapper').addClass('d-none');
         $('.preloader').addClass('animated fadeIn');
         setTimeout( () => {
            $('.preloader').addClass('animated fadeOut');
         }, 2200);
         $('.preloader img').addClass('animated fadeInDown');
         setTimeout(() => {
            $('.preloader img').addClass('animated fadeOutDown');
         }, 2000);
         setTimeout(() => {
            $('.page-wrapper').removeClass('d-none').addClass('animated fadeIn');
         }, 2300);
         setTimeout(() => {
            $('.preloader').remove();
         }, 2400);
      });
   }

}
