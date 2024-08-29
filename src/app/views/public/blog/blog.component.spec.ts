import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';

import { BlogComponent } from './blog.component';
import { RouterTestingModule } from '@angular/router/testing';
import { BlogModule } from './blog.module';
import { ActivatedRoute } from '@angular/router';
import { of, Subject } from 'rxjs';

describe('BlogComponent', () => {
    let component: BlogComponent;
    let fixture: ComponentFixture<BlogComponent>;
    const searchInputSubject = new Subject<string>();

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
        component.searchInput = searchInputSubject;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    xdescribe('Search functionality', () => {
        it('should call performSearch with the searchTerm when searchTerm is provided', fakeAsync(() => {
            spyOn(component, 'performSearch');
            spyOn(component, 'getFilteredBlog');

            const searchTerm = 'Angular';
            searchInputSubject.next(searchTerm);
            tick(700);
            expect(component.showPagination).toBeFalse();
            expect(component.performSearch).toHaveBeenCalledWith(searchTerm);
            expect(component.getFilteredBlog).not.toHaveBeenCalled();
        }));

        it('should call getFilteredBlog when searchTerm is not provided', fakeAsync(() => {
            spyOn(component, 'performSearch');
            spyOn(component, 'getFilteredBlog');

            searchInputSubject.next('');

            expect(component.showPagination).toBeTrue();
            expect(component.performSearch).not.toHaveBeenCalled();
            expect(component.getFilteredBlog).toHaveBeenCalledWith(1);
        }));
    });

    afterEach(() => {
        searchInputSubject.complete();
    });
});
