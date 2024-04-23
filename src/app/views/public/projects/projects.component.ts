import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

import { projects } from '@inMemoryDB/projects';
import { IProject, ISEOEssentials } from '@interfaces/general.interface';
import { UtilsService } from '@services/utils.services';

@Component({
    selector: 'app-projects',
    templateUrl: './projects.component.html',
    styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent implements OnInit {
    projects: IProject[] = [];

    constructor(
        private location: Location,
        private utils: UtilsService
    ) {
        this.projects = this.utils.sortProjects(projects);
    }

    ngOnInit(): void {
        const SEOData: ISEOEssentials = {
            title: "Projects - Here you will find some of the personal and clients projects that I created with each project containing its own case study | https://jaganb.dev/ | Jagan Mohan Bishoyi",
            description: `In my journey, I've had the privilege of spearheading ${this.projects.length} projects,
                    each marked by its unique challenges and accomplishments.The invaluable lessons
                    I gleaned from this experience have significantly contributed to my ongoing growth and
                    professional evolution.These projects, rich in experiences, have been pivotal in shaping my
                    journey, and I look forward to the exciting challenges that the future holds.`,
            canonicalLink: "https://jaganb.dev/projects"
        };
        this.utils.setSEOEssentials(SEOData);
    }

    navigateBack(): void {
        this.location.back();
    }
}
