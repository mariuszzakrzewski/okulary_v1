import { Component, OnInit } from '@angular/core';
import { SekcjeStronyService } from '../../service/sekcje-strony.service';

@Component({
  selector: 'app-section-contact',
  templateUrl: './section-contact.component.html',
  styleUrls: ['./section-contact.component.css']
})
export class SectionContactComponent implements OnInit {

  PokazPostSekcjaKontaktID;

  constructor(private httpServiceID: SekcjeStronyService) { }

  ngOnInit() {
    this.httpServiceID.getPostSekcjaKontaktID().subscribe(sekcjaKontaktID => {
      this.PokazPostSekcjaKontaktID = sekcjaKontaktID;
    });
  }

}
export interface PostSekcjaKontaktID {
  ID?: number;
  post_content?: string;
}