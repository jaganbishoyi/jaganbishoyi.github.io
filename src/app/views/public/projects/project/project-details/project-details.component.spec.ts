import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Location } from '@angular/common';

import { ProjectDetailsComponent } from './project-details.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('ProjectDetailsComponent', () => {
    let component: ProjectDetailsComponent;
    let fixture: ComponentFixture<ProjectDetailsComponent>;
    let location: Location;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [
                RouterTestingModule
            ],
            declarations: [ProjectDetailsComponent],
            providers: [Location]
        });
    });

    beforeEach(() => {
        location = TestBed.inject(Location); // Inject the Location service
        spyOn(location, 'back'); // Spy on the back method

        fixture = TestBed.createComponent(ProjectDetailsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should call location.back when navigateBack is called', () => {
        // Call the method
        component.navigateBack();

        // Verify that location.back was called
        expect(location.back).toHaveBeenCalled();
    });

    it('should navigate to project details page on click of project link button', () => {
        spyOn(component, 'navigate');

        const project = {
            name: 'Portfolio',
            description: ["Portfolio"],
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

        // Call the method
        component.navigateToProject();

        // Verify that location.back was called
        expect(component.navigate).toHaveBeenCalled();
    });

    it('should call window.open with the correct URL and target', () => {
        // Spy on window.open
        spyOn(window, 'open').and.callThrough();

        const link = {
            id: '1',
            name: 'live',
            url: 'https://jaganb.dev/',
        };

        component.navigate(link);

        expect(window.open).toHaveBeenCalledWith('https://jaganb.dev/', '_blank');
    });
});
