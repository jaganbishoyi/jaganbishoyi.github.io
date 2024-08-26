import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

import { BlogSideNavigationComponent } from './blog-side-navigation.component';

describe('BlogSideNavigationComponent', () => {
    let component: BlogSideNavigationComponent;
    let fixture: ComponentFixture<BlogSideNavigationComponent>;
    let router: Router;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [
                RouterTestingModule
            ],
            declarations: [BlogSideNavigationComponent],
            providers: [
                {
                    provide: ActivatedRoute,
                    useValue: {
                        queryParams: of({ category: 'angular' })  // Mock queryParams as an observable with a test value
                    }
                }
            ]
        });
    });

    beforeEach(() => {
        router = TestBed.inject(Router); // Get the Router instance
        spyOn(router, 'navigate'); // Spy on the navigate method

        fixture = TestBed.createComponent(BlogSideNavigationComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should subscribe to queryParams and set queryParamValue', () => {
        expect(component.active).toBe('angular');  // Check if queryParamValue is set correctly
    });

    describe('navigate()', () => {
        it('should navigate to /blogs with queryParams', () => {
            const nav = {
                name: 'Angular',
                route: 'angular'
            }
            component.navigate(nav);
            expect(router.navigate).toHaveBeenCalledWith(
                ['/blogs'],
                {
                    queryParams: { category: 'angular' }
                }
            );
        });

        it('should navigate to /blogs', () => {
            const nav = {
                name: 'All',
                route: ''
            }
            component.navigate(nav);
            expect(router.navigate).toHaveBeenCalledWith(
                ['/blogs']
            );
        });
    });
});
