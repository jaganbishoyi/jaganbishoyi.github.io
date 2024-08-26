import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectComponent } from './project.component';
import { Router, Params } from '@angular/router';
import { IProject } from '@interfaces/general.interface';

describe('ProjectComponent', () => {
    let component: ProjectComponent;
    let fixture: ComponentFixture<ProjectComponent>;
    let router: Router;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [ProjectComponent]
        });
    });


    beforeEach(() => {
        router = TestBed.inject(Router); // Get the Router instance
        spyOn(router, 'navigate'); // Spy on the navigate method

        fixture = TestBed.createComponent(ProjectComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should navigate to respective case study on click of caseStudy button', () => {
        const project: IProject = {
            name: 'Portfolio',
            description: ['Portfolio'],
            image: 'portfolio.png',
            id: '1',
            links: [
                {
                    id: '1',
                    name: 'live',
                    url: 'https://jaganb.dev/',
                },
                {
                    id: '2',
                    name: 'github',
                    url: 'https://github.com/jaganbishoyi/jaganbishoyi.github.io',
                },
            ],
            overview: ['Portfolio'],
            techs: ['Angular', 'Bootstrap', 'Husky', 'ESLint', 'GitHub'],
            featured: [true, 3],
        };
        component.project = project;
        component.caseStudy();
        expect(router.navigate).toHaveBeenCalledWith(
            [`/projects/${project.id}/portfolio`],
        );
    });
});
