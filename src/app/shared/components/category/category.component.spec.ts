import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryComponent } from './category.component';
import { SharedModule } from '../../shared.module';

describe('CategoryComponent', () => {
    let component: CategoryComponent;
    let fixture: ComponentFixture<CategoryComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [SharedModule],
            declarations: [CategoryComponent]
        });
        fixture = TestBed.createComponent(CategoryComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
