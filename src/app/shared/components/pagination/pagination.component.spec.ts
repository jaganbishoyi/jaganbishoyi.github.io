import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginationComponent } from './pagination.component';

describe('PaginationComponent', () => {
    let component: PaginationComponent;
    let fixture: ComponentFixture<PaginationComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [PaginationComponent]
        });
        fixture = TestBed.createComponent(PaginationComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('selectPage() should set the active page', () => {
        component.selectPage('3');
        expect(component.activePage).toEqual(3);
    });

    it('next() should set the active page', () => {
        component.total = 50;
        component.pageSize = 5;
        component.calculatePage();
        component.next();
        expect(component.activePage).toEqual(2);
    });

    it('previous() should set the active page', () => {
        component.activePage = 2;
        component.previous();
        expect(component.activePage).toEqual(1);
    });
});
