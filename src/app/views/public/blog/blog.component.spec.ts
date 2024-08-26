import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogComponent } from './blog.component';
import { RouterTestingModule } from '@angular/router/testing';
import { BlogModule } from './blog.module';

describe('BlogComponent', () => {
    let component: BlogComponent;
    let fixture: ComponentFixture<BlogComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [
                RouterTestingModule, BlogModule
            ],
            declarations: [BlogComponent]
        });
        fixture = TestBed.createComponent(BlogComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
