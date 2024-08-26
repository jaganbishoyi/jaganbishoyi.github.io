import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicHeaderComponent } from './public-header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';

describe('PublicHeaderComponent', () => {
    let component: PublicHeaderComponent;
    let fixture: ComponentFixture<PublicHeaderComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [BrowserAnimationsModule, RouterTestingModule],
            declarations: [PublicHeaderComponent]
        });
        fixture = TestBed.createComponent(PublicHeaderComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
