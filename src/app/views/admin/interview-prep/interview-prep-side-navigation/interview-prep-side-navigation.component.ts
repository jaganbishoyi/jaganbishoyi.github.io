import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { interviewPrepSideNavs } from '@inMemoryDB/store';
import { INav } from '@interfaces/general.interface';

@Component({
    selector: 'app-interview-prep-side-navigation',
    templateUrl: './interview-prep-side-navigation.component.html',
    styleUrls: ['./interview-prep-side-navigation.component.scss']
})
export class InterviewPrepSideNavigationComponent implements OnInit {
    navs: INav[] = interviewPrepSideNavs;
    active = "";

    constructor(
        private router: Router,
        private activatedRoute: ActivatedRoute
    ) { }

    ngOnInit(): void {
        this.activatedRoute.params.subscribe((params: Params) => {
            if (params && params['category']) {
                this.active = params['category'];
            } else {
                this.router.navigate(['/admin/interview-prep/angular'])
                this.active = 'angular'
            }
        });
    }

    navigate(nav: INav): void {
        if (nav && nav.route) {
            this.router.navigate(['/admin/interview-prep/' + nav.route])
        }
    }
}
