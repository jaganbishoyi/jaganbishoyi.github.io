import { Component } from '@angular/core';
import { UtilsService } from '@services/utils.services';

@Component({
    selector: 'app-about-section',
    templateUrl: './about-section.component.html',
    styleUrls: ['./about-section.component.scss'],
})
export class AboutSectionComponent {
    skills: string[] = [
        'HTML',
        'CSS',
        'SASS',
        'SCSS',
        'JavaScript',
        'Typescript',
        'Bootstrap',
        'Angular',
        'Ionic',
        'Responsive Design',
        'GIT',
        'GitHub',
        'PWA',
        'JIRA',
        'NPM',
        'ES6',
        'NgRx',
        'Webpack',
        'Redux',
        'SonarQube',
        'SEO',
        'WordPress',
        'REST API',
        'Shell Scripting',
        'Web Hosting',
        'Unit Testing',
        'SDLC',
        'SOLID',
        'Agile/Scrum',
    ];

    constructor(private utilsService: UtilsService) {}

    navigate(id: string): void {
        this.utilsService.scrollToView(id);
    }
}
