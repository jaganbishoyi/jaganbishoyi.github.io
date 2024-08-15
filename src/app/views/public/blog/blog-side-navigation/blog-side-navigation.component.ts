import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { blogSideNavs } from '@inMemoryDB/store';
import { INav } from '@interfaces/general.interface';

@Component({
    selector: 'app-blog-side-navigation',
    templateUrl: './blog-side-navigation.component.html',
    styleUrls: ['./blog-side-navigation.component.scss']
})
export class BlogSideNavigationComponent implements OnInit {
    navs: INav[] = blogSideNavs;
    active = "";

    constructor(
        private router: Router,
        private activatedRoute: ActivatedRoute
    ) { }

    ngOnInit(): void {
        this.activatedRoute.queryParams.subscribe((queryParams: Params) => {
            if (queryParams && queryParams['tag']) {
                this.active = queryParams['tag'];
            } else {
                this.active = ''
            }
        });
    }

    navigate(nav: INav): void {
        if (nav && nav.route) {
            this.router.navigate(['/blogs'],
                { queryParams: { tag: nav.route } }
            )
        } else {
            this.router.navigate(['/blogs'])
        }
    }
}
