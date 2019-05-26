import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProduktyService } from '../../service/produkty.service';

@Component({
   selector: 'app-single-products',
   templateUrl: './single-products.component.html',
   styleUrls: ['./single-products.component.css']
})
export class SingleProductsComponent implements OnInit {
   CurrentSingleProdukt;
   constructor(private route: ActivatedRoute, private httpService: ProduktyService ) { }
   ngOnInit() {
      this.route.paramMap.subscribe(params => {
         this.httpService.getPost(params.get('slug_produkt')).subscribe(pojedynczyProdukt => {
            this.CurrentSingleProdukt = pojedynczyProdukt;
         });
      });
   }
}

export interface Produkty {
   id?: number;
   title?: number;
   produkt_cena?: string;
   produkt_cena_promocyjna?: string;
   produkt_polecany?: string;
   produkt_rozmiar_szerokosc_szkiel_okularowych?: string;
   produkt_rozmiar_wysokosc_szkiel_okularowych?: string;
   produkt_rozmiar_szerokosc_mostka?: string;
   produkt_rozmiar_dlugosc_zausznikow?: string;
   produkt_zajawka?: string;
   produkt_opis?: string;
   image?: string;
   nazwa_kategorii?: string;
   slug_kategorii?: string;
   slug_produkt?: string;
}
