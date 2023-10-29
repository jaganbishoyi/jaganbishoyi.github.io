import { Injectable } from '@angular/core';
import { IProject } from '@interfaces/general.interface';

@Injectable({
    providedIn: 'root',
})
export class UtilsService {
    scrollToView(id: string): void {
        const element: HTMLElement | null = document.getElementById(id);

        if (element) {
            element.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
                inline: 'nearest',
            });
        }
    }

    sortProjects(projects: IProject[]): IProject[] {
        return projects.sort((a: IProject, b: IProject) => a.featured[1] - b.featured[1]);
    }
}
