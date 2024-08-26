import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Location } from '@angular/common';

import { ProjectsComponent } from './projects.component';
import { PublicModule } from '../public.module';

describe('ProjectsComponent', () => {
    let component: ProjectsComponent;
    let fixture: ComponentFixture<ProjectsComponent>;
    let location: Location;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [PublicModule],
            declarations: [ProjectsComponent],
            providers: [Location]
        });
    });

    beforeEach(() => {
        location = TestBed.inject(Location); // Inject the Location service
        spyOn(location, 'back'); // Spy on the back method

        fixture = TestBed.createComponent(ProjectsComponent);
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
});
