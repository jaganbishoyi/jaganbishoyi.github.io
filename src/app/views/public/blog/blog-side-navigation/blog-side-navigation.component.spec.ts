import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogSideNavigationComponent } from './blog-side-navigation.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('BlogSideNavigationComponent', () => {
    let component: BlogSideNavigationComponent;
    let fixture: ComponentFixture<BlogSideNavigationComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [
                RouterTestingModule
            ],
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
