import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute, Params } from '@angular/router';
import { projects } from '@inMemoryDB/projects';
import { ILink, IProject, ISeoEssentials } from '@interfaces/general.interface';
import { UtilsService } from '@services/utils.services';

@Component({
    selector: 'app-project-details',
    templateUrl: './project-details.component.html',
    styleUrls: ['./project-details.component.scss'],
})
export class ProjectDetailsComponent implements OnInit {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    project: IProject | any = {} as IProject;
    projectNotAvailable = false;

    constructor(
        private activatedRoute: ActivatedRoute,
        private location: Location,
        private utils: UtilsService
    ) {
        this.activatedRoute.params.subscribe((params: Params) => {
            this.project = projects.find(
                (project: IProject) => project.id == params['projectId']
            );

            this.projectNotAvailable = this.project ? false : true;
        });
    }

    ngOnInit(): void {
        const slug = this.project?.name.replace(' ', '-').toLowerCase();

        const SEOData: ISeoEssentials = {
            title: `${this.project?.name} : ${this.project?.description[0]}`,
            description: this.project?.description.slice(0, -1).join(', ') + this.project?.description.slice(-1),
            canonicalLink: `https://jaganb.dev/projects/${this.project?.id}/${slug}`,
            image: `https://jaganb.dev/assets/images/projects/${this.project?.image}`
        };
        this.utils.setSEOEssentials(SEOData);
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
