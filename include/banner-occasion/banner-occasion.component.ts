import { Component, OnInit } from '@angular/core';
import { BannerOccasionService } from '../../service/banner-occasion.service';

@Component({
  selector: 'app-banner-occasion',
  templateUrl: './banner-occasion.component.html',
  styleUrls: ['./banner-occasion.component.css']
})
export class BannerOccasionComponent implements OnInit {

  SekcjaBannerOccasionID;

  constructor(private httpService: BannerOccasionService) { }

  ngOnInit() {
    this.httpService.getPostBannerOccasionID().subscribe(sekcjaBannerOccasion => {
      this.SekcjaBannerOccasionID = sekcjaBannerOccasion;
    });
  }

}
export interface PostBannerOccasionID {
  ID?: number;
  post_content: string;
  image: string;
}