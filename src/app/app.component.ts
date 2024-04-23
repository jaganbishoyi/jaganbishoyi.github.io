import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { ISEOEssentials } from '@interfaces/general.interface';
import { UtilsService } from '@services/utils.services';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    title = 'portfolio';

    ngOnInit(): void {
        console.log('')
    }

    constructor(private router: Router, private utils: UtilsService) {
        this.router.events.subscribe((event) => {
            if (event instanceof NavigationEnd) {
                if (this.router.url === '/') {
                    const SEOData: ISEOEssentials = {
                        title: "Jagan Mohan Bishoyi | Angular | Frontend Web Developer",
                        description: "Hey, i'm Jagan Mohan. I am a dedicated Front-End Developer with more than half a decade of experience delivering high-quality web solutions and having expertise in front-end web development.",
                        canonicalLink: 'https://jaganb.dev/',
                        image: 'https://jaganb.dev/assets/images/me.png'
                    };

                    this.utils.setSEOEssentials(SEOData);
                }
            }
        });
    }
}
