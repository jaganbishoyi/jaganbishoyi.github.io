import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicLayoutComponent } from './public-layout.component';
import { LayoutsModule } from '../layouts.module';
import { RouterTestingModule } from '@angular/router/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('PublicLayoutComponent', () => {
    let component: PublicLayoutComponent;
    let fixture: ComponentFixture<PublicLayoutComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [LayoutsModule, RouterTestingModule, BrowserAnimationsModule],
            declarations: [PublicLayoutComponent]
        });
        fixture = TestBed.createComponent(PublicLayoutComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
