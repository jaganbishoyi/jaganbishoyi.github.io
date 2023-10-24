import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { IProject } from '@interfaces/general.interface';

@Component({
    selector: 'app-project',
    templateUrl: './project.component.html',
    styleUrls: ['./project.component.scss'],
})
export class ProjectComponent {
    @Input() project: IProject = {} as IProject;

    constructor(private router: Router) {}

    caseStudy(): void {
        const slug = this.project.name.replace(' ', '-').toLowerCase();
        this.router.navigate([`/projects/${this.project.id}/${slug}`]);
    }
}
