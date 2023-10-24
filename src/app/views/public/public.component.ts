import { ViewportScroller } from '@angular/common';
import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { NavigationEnd, Router } from '@angular/router';
import { UtilsService } from '@services/utils.services';

@Component({
    selector: 'app-public',
    templateUrl: './public.component.html',
    styleUrls: ['./public.component.scss'],
})
export class PublicComponent {
    constructor(
        public router: Router,
        private utilsService: UtilsService,
        private viewportScroller: ViewportScroller,
        private titleService: Title
    ) {
        // this.router.events.subscribe((event) => {
        //     if (event instanceof NavigationEnd) {
        //         const fragment = router.parseUrl(router.url).fragment;
        //         if (fragment) {
        //             this.utilsService.scrollToView(fragment);
        //         } else {
        //             this.viewportScroller.scrollToPosition([0, 0]);
        //         }
        //     }
        // });

        this.titleService.setTitle(
            'Jagan Mohan Bishoyi | Angular | Frontend Web Developer'
        );
    }
}
