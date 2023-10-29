import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Location } from '@angular/common';

import { projects } from '@inMemoryDB/projects';
import { IProject } from '@interfaces/general.interface';
import { UtilsService } from '@services/utils.services';

@Component({
    selector: 'app-projects',
    templateUrl: './projects.component.html',
    styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent {
    projects: IProject[] = [];

    constructor(
        private titleService: Title,
        private location: Location,
        private utilsService: UtilsService
    ) {
        this.titleService.setTitle(
            'Here you will find some of the personal and clients projects that I created with each project containing its own case study.'
        );

        this.projects = this.utilsService.sortProjects(projects);
    }

    navigateBack(): void {
        this.location.back();
    }
}
