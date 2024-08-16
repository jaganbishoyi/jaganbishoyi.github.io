import { Component, Inject, Injector, OnInit, PLATFORM_ID } from '@angular/core';
import { ISeoEssentials } from '@interfaces/general.interface';
import { UtilsService } from '@services/utils.services';
import { REQUEST_URL } from './request-url.service';
import { isPlatformBrowser } from '@angular/common';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    title = 'portfolio';

    constructor(
        private utils: UtilsService,
        private injector: Injector,
        // eslint-disable-next-line @typescript-eslint/ban-types
        @Inject(PLATFORM_ID) private platformId: Object
    ) { }

    ngOnInit(): void {
        if (isPlatformBrowser(this.platformId)) {
            const reqUrl = this.injector.get(REQUEST_URL);

            switch (reqUrl) {
                case "/": {
                    const SEOData: ISeoEssentials = {
                        title: "Jagan Mohan Bishoyi | Angular | Frontend Web Developer",
                        description: "Hey, i'm Jagan Mohan. I am a dedicated Front-End Developer with more than half a decade of experience delivering high-quality web solutions and having expertise in front-end web development.",
                        canonicalLink: 'https://jaganb.dev/',
                        image: 'https://jaganb.dev/assets/images/me.png'
                    };

                    this.utils.setSEOEssentials(SEOData);
                    break;
                }

                // case "/projects": {
                //     const SEOData: ISeoEssentials = {
                //         title: "Projects",
                //         description: "Projects",
                //         canonicalLink: 'https://jaganb.dev/projects',
                //         image: 'https://jaganb.dev/assets/images/me.png'
                //     };

                //     this.utils.setSEOEssentials(SEOData);
                //     break;
                // }

                // case "/blogs": {
                //     const SEOData: ISeoEssentials = {
                //         title: "Blogs",
                //         description: "Blogs",
                //         canonicalLink: 'https://jaganb.dev/blogs',
                //         image: 'https://jaganb.dev/assets/images/me.png'
                //     };

                //     this.utils.setSEOEssentials(SEOData);
                //     break;
                // }
            }
        }
    }
}
