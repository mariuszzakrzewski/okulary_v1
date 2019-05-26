import { Component, OnInit } from '@angular/core';
import { MenuMainService } from '../../service/menu-service/menu-main.service';
declare var $: any;

@Component({
    selector: 'app-menu-main',
    templateUrl: './main.component.html',
    styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
    MenuGlowna;
    constructor(private httpServiceMainMenu: MenuMainService) { }

    ngOnInit() {
        this.httpServiceMainMenu.getGlowneMenu().subscribe(menuGlowne => {
            this.MenuGlowna = menuGlowne;
        });
        $(() => {
            const header = $('.main-menu');
            $(window).scroll(() => {
                const scroll = $(window).scrollTop();

                if (scroll >= 200) {
                    header.removeClass('bg-transparent').addClass('bg-dark animated fadeInDown');
                } else {
                    header.removeClass('bg-dark animated fadeInDown').addClass('bg-transparent');
                }
            });
        });
    }
}
export interface GlowneMenu {
    ID?: number;
    post_author?: string;
    post_date?: string;
    post_date_gmt?: string;
    post_content?: string;
    post_title?: string;
    post_excerpt?: string;
    post_status?: string;
    comment_status?: string;
    ping_status?: string;
    post_password?: string;
    post_name?: string;
    to_ping?: string;
    pinged?: string;
    post_modified?: string;
    post_modified_gmt?: string;
    post_content_filtered?: string;
    post_parent?: number;
    guid?: string;
    menu_order?: number;
    post_type?: string;
    post_mime_type?: string;
    comment_count?: string;
    filter?: string;
    db_id?: number;
    menu_item_parent?: string;
    object_id?: string;
    object?: string;
    type?: string;
    type_label?: string;
    url?: string;
    title?: string;
    target?: string;
    attr_title?: string;
    description?: string;
    xfn?: string;
    slug?: string;
    slug_parse_last?: string;
}
