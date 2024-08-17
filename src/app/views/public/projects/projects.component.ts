import { Component } from '@angular/core';
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

    constructor(private location: Location) { }

    navigateBack(): void {
        this.location.back();
    }
}
