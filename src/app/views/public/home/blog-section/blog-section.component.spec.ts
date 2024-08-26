import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogSectionComponent } from './blog-section.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { RouterTestingModule } from '@angular/router/testing';

describe('BlogSectionComponent', () => {
    let component: BlogSectionComponent;
    let fixture: ComponentFixture<BlogSectionComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [SharedModule, RouterTestingModule],
            declarations: [BlogSectionComponent]
        });
        fixture = TestBed.createComponent(BlogSectionComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
