import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectsSectionComponent } from './projects-section.component';
import { PublicModule } from '../../public.module';
import { RouterTestingModule } from '@angular/router/testing';

describe('ProjectsSectionComponent', () => {
    let component: ProjectsSectionComponent;
    let fixture: ComponentFixture<ProjectsSectionComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [RouterTestingModule, PublicModule],
            declarations: [ProjectsSectionComponent]
        });
        fixture = TestBed.createComponent(ProjectsSectionComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
