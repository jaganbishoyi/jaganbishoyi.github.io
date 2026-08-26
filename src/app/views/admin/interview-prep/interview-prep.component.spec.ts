import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Location } from '@angular/common';

import { InterviewPrepComponent } from './interview-prep.component';
import { RouterTestingModule } from '@angular/router/testing';
import { AdminModule } from '../admin.module';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

describe('InterviewPrepComponent', () => {
    let component: InterviewPrepComponent;
    let fixture: ComponentFixture<InterviewPrepComponent>;
    let location: Location;

    beforeEach(() => {
        TestBed.configureTestingModule({
    declarations: [InterviewPrepComponent],
    imports: [RouterTestingModule, AdminModule],
    providers: [
        {
            provide: ActivatedRoute,
            useValue: {
                params: of({ category: 'angular' }) // Mock queryParams as an observable with a test value
            }
        },
        provideHttpClient(withInterceptorsFromDi())
    ]
});
        fixture = TestBed.createComponent(InterviewPrepComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    beforeEach(() => {
        location = TestBed.inject(Location); // Inject the Location service
        spyOn(location, 'back'); // Spy on the back method

        fixture = TestBed.createComponent(InterviewPrepComponent);
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
