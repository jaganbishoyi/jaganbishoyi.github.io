import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicComponent } from './public.component';
import { PublicModule } from './public.module';
import { RouterTestingModule } from '@angular/router/testing';

describe('PublicComponent', () => {
    let component: PublicComponent;
    let fixture: ComponentFixture<PublicComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [PublicModule, RouterTestingModule],
            declarations: [PublicComponent]
        });
        fixture = TestBed.createComponent(PublicComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
