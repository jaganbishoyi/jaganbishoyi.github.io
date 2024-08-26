import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogComponent } from './blog.component';
import { RouterTestingModule } from '@angular/router/testing';
import { BlogModule } from './blog.module';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

describe('BlogComponent', () => {
    let component: BlogComponent;
    let fixture: ComponentFixture<BlogComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [
                RouterTestingModule, BlogModule
            ],
            declarations: [BlogComponent],
            providers: [
                {
                    provide: ActivatedRoute,
                    useValue: {
                        queryParams: of({ category: 'angular' })  // Mock queryParams as an observable with a test value
                    }
                }
            ]
        });

        fixture = TestBed.createComponent(BlogComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
