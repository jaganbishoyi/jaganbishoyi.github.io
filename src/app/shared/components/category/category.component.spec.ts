import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryComponent } from './category.component';
import { SharedModule } from '../../shared.module';
import { Router } from '@angular/router';

describe('CategoryComponent', () => {
    let component: CategoryComponent;
    let fixture: ComponentFixture<CategoryComponent>;
    let router: Router;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [SharedModule],
            declarations: [CategoryComponent]
        });
    });

    beforeEach(() => {
        router = TestBed.inject(Router); // Get the Router instance
        spyOn(router, 'navigate'); // Spy on the navigate method

        fixture = TestBed.createComponent(CategoryComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should navigate to category angular if the category is angular', () => {
        component.category = 'angular';
        component.navigate();
        expect(router.navigate).toHaveBeenCalledWith(
            ['/blogs'],
            {
                queryParams: { category: 'angular' }
            }
        );
    });
});
