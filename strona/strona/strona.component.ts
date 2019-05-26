import {Component, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StronaService } from '../../service/strona.service';

@Component({
    selector: 'app-strona',
    templateUrl: './strona.component.html',
    styleUrls: ['./strona.component.css'],
})
export class StronaComponent implements OnInit {

    CurrentSinglePage;

    constructor(private route: ActivatedRoute, private httpService: StronaService) { }

    ngOnInit() {
        this.route.paramMap.subscribe(params => {
            this.httpService.getPage(params.get('slug_parse_last')).subscribe(pojedynczaStrona => {
                this.CurrentSinglePage = pojedynczaStrona;
            });
        });
    }
}
export interface Strony {
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
    title?: string;
    slug?: string;
    slug_parse_last?: string;
}
