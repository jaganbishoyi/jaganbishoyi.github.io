import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrollProgressComponent } from './scroll-progress.component';

describe('ScrollProgressComponent', () => {
  let component: ScrollProgressComponent;
  let fixture: ComponentFixture<ScrollProgressComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ScrollProgressComponent]
    });
    fixture = TestBed.createComponent(ScrollProgressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
