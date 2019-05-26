import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { BanneryPromocyjneService } from '../../service/bannery-promocyjne.service';
declare var $: any;

@Component({
  selector: 'app-promocje',
  templateUrl: './promocje.component.html',
  styleUrls: ['./promocje.component.css']
})
export class PromocjeComponent implements OnInit {

   GlowneBanneryPromocyjne$: Observable<any[]>;

  constructor(private wp: BanneryPromocyjneService) {
     this.GlowneBanneryPromocyjne$ = this.wp.getBanneryPromocyjne();
  }

  ngOnInit() {}

}
