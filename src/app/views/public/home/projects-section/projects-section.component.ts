import { Component } from '@angular/core';
import { projects } from '@inMemoryDB/projects';
import { IProject } from '@interfaces/general.interface';
import { UtilsService } from '@services/utils.services';

@Component({
    selector: 'app-projects-section',
    templateUrl: './projects-section.component.html',
    styleUrls: ['./projects-section.component.scss'],
})
export class ProjectsSectionComponent {
    projects: IProject[] = [];

    constructor(
        private utilsService: UtilsService
    ) {
        this.projects = this.utilsService.sortProjects(
            projects.filter(
                (project: IProject) => project.featured[0]
            )
        );
    }
}
