import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterviewPrepSideNavigationComponent } from './interview-prep-side-navigation.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('InterviewPrepSideNavigationComponent', () => {
    let component: InterviewPrepSideNavigationComponent;
    let fixture: ComponentFixture<InterviewPrepSideNavigationComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [RouterTestingModule],
            declarations: [InterviewPrepSideNavigationComponent]
        });
        fixture = TestBed.createComponent(InterviewPrepSideNavigationComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
