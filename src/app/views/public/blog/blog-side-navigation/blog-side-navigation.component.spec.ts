import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogSideNavigationComponent } from './blog-side-navigation.component';

describe('BlogSideNavigationComponent', () => {
  let component: BlogSideNavigationComponent;
  let fixture: ComponentFixture<BlogSideNavigationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BlogSideNavigationComponent]
    });
    fixture = TestBed.createComponent(BlogSideNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
