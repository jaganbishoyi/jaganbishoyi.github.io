import { Component } from '@angular/core';
import { projects } from '@inMemoryDB/projects';
import { IProject } from '@interfaces/general.interface';

@Component({
    selector: 'app-projects-section',
    templateUrl: './projects-section.component.html',
    styleUrls: ['./projects-section.component.scss'],
})
export class ProjectsSectionComponent {
    projects: IProject[] = [];

    constructor() {
        this.projects = projects.filter(
            (project: IProject) => project.featured
        );
    }
}
