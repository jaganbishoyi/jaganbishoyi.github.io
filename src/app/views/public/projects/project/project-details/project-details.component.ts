import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Params } from '@angular/router';
import { projects } from '@inMemoryDB/projects';
import { ILink, IProject } from '@interfaces/general.interface';

@Component({
    selector: 'app-project-details',
    templateUrl: './project-details.component.html',
    styleUrls: ['./project-details.component.scss'],
})
export class ProjectDetailsComponent {
    project: IProject | undefined = {} as IProject;

    constructor(
        private activatedRoute: ActivatedRoute,
        private location: Location,
        private titleService: Title
    ) {
        this.activatedRoute.params.subscribe((params: Params) => {
            this.project = projects.find(
                (project: IProject) => project.id == params['projectId']
            );
        });

        this.titleService.setTitle(
            `${this.project?.name} : ${this.project?.description[0]}`
        );
    }

    navigateToProject(): void {
        const link = this.project?.links.find((link: ILink) => link.id === '1');
        if (link && link.url) {
            this.navigate(link);
        }
    }

    navigate(link: ILink): void {
        window.open(link.url, '_blank');
    }

    navigateBack(): void {
        this.location.back();
    }
}
