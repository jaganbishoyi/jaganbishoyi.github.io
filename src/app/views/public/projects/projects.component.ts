import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Location } from '@angular/common';

import { projects } from '@inMemoryDB/projects';
import { IProject } from '@interfaces/general.interface';

@Component({
    selector: 'app-projects',
    templateUrl: './projects.component.html',
    styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent {
    projects: IProject[] = projects;

    constructor(private titleService: Title, private location: Location) {
        this.titleService.setTitle(
            'Here you will find some of the personal and clients projects that I created with each project containing its own case study.'
        );
    }

    navigateBack(): void {
        this.location.back();
    }
}
