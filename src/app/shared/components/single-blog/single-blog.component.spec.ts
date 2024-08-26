import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleBlogComponent } from './single-blog.component';
import { SharedModule } from '../../shared.module';
import { RouterTestingModule } from '@angular/router/testing';

describe('SingleBlogComponent', () => {
    let component: SingleBlogComponent;
    let fixture: ComponentFixture<SingleBlogComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [SharedModule, RouterTestingModule],
            declarations: [SingleBlogComponent]
        });
        fixture = TestBed.createComponent(SingleBlogComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
