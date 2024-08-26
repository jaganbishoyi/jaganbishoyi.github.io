import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Location } from '@angular/common';

import { BlogDetailsComponent } from './blog-details.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('BlogDetailsComponent', () => {
    let component: BlogDetailsComponent;
    let fixture: ComponentFixture<BlogDetailsComponent>;
    let location: Location;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [
                RouterTestingModule
            ],
            declarations: [BlogDetailsComponent],
        });
    });

    beforeEach(() => {
        location = TestBed.inject(Location); // Inject the Location service
        spyOn(location, 'back'); // Spy on the back method

        fixture = TestBed.createComponent(BlogDetailsComponent);
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
