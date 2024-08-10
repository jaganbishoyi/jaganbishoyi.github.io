import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectsSectionComponent } from './projects-section.component';

describe('ProjectsSectionComponent', () => {
  let component: ProjectsSectionComponent;
  let fixture: ComponentFixture<ProjectsSectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
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
