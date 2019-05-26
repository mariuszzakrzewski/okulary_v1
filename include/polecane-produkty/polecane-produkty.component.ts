import { Component, OnInit } from '@angular/core';
import { PolecaneService } from '../../service/polecane.service';
import { SekcjeStronyService } from '../../service/sekcje-strony.service';

@Component({
    selector: 'app-polecane-produkty',
    templateUrl: './polecane-produkty.component.html',
    styleUrls: ['./polecane-produkty.component.css'],
})
export class PolecaneProduktyComponent implements OnInit {

    WszystkieProduktyPolecae;
    PokazPostID;

    constructor(private httpService: PolecaneService, private httpServiceID: SekcjeStronyService) { }

    ngOnInit() {
        this.httpService.getPosts().subscribe(produktyPolecane => {
            this.WszystkieProduktyPolecae = produktyPolecane;
        });
        this.httpServiceID.getPostID().subscribe(sekcjaID => {
           this.PokazPostID = sekcjaID;
        });
    }

}
export interface ProduktyPolecane {
    ID?: number;
    post_title?: number;
    produkt_cena?: string;
    produkt_cena_promocyjna?: string;
    produkt_polecany: string;
    produkt_rozmiar_szerokosc_szkiel_okularowych: string;
    produkt_rozmiar_wysokosc_szkiel_okularowych: string;
    produkt_rozmiar_szerokosc_mostka: string;
    produkt_rozmiar_dlugosc_zausznikow: string;
    produkt_zajawka: string;
    produkt_opis: string;
    image: string;
}
export interface PostID {
    ID?: number;
    post_content?: string;
}
