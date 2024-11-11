import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminLayoutComponent } from './admin-layout.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { LayoutsModule } from '../layouts.module';

describe('AdminLayoutComponent', () => {
    let component: AdminLayoutComponent;
    let fixture: ComponentFixture<AdminLayoutComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [LayoutsModule, RouterTestingModule, BrowserAnimationsModule],
            declarations: [AdminLayoutComponent]
        });
        fixture = TestBed.createComponent(AdminLayoutComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
