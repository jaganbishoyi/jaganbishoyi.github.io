import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TagsComponent } from './tags.component';
import { Router } from '@angular/router';

describe('TagsComponent', () => {
    let component: TagsComponent;
    let fixture: ComponentFixture<TagsComponent>;
    let router: Router;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [TagsComponent]
        });
    });

    beforeEach(() => {
        router = TestBed.inject(Router); // Get the Router instance
        spyOn(router, 'navigate'); // Spy on the navigate method

        fixture = TestBed.createComponent(TagsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should navigate to tag interview if the tag is interview', () => {
        component.navigate('interview');
        expect(router.navigate).toHaveBeenCalledWith(
            ['/blogs'],
            {
                queryParams: { tag: 'interview' }
            }
        );
    });
});
