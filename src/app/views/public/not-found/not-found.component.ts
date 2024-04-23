import { Component, OnInit } from '@angular/core';
import { ISEOEssentials } from '@interfaces/general.interface';
import { UtilsService } from '@services/utils.services';

@Component({
    selector: 'app-not-found',
    templateUrl: './not-found.component.html',
    styleUrls: ['./not-found.component.scss']
})
export class NotFoundComponent implements OnInit {

    constructor(private utils: UtilsService) { }

    ngOnInit(): void {
        const SEOData: ISEOEssentials = {
            title: "404 - Page Not Found | https://jaganb.dev/ | Jagan Mohan Bishoyi",
            description: "Look like you're lost. The page you are looking for not available!",
            canonicalLink: "https://jaganb.dev/page-not-found"
        };
        this.utils.setSEOEssentials(SEOData);
    }
}
