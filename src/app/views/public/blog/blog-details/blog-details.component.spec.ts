import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogDetailsComponent } from './blog-details.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('BlogDetailsComponent', () => {
    let component: BlogDetailsComponent;
    let fixture: ComponentFixture<BlogDetailsComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [
                RouterTestingModule
            ],
            declarations: [BlogDetailsComponent]
        });
        fixture = TestBed.createComponent(BlogDetailsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
