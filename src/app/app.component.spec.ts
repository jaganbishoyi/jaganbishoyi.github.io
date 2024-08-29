/* eslint-disable @typescript-eslint/no-explicit-any */
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { NgHttpLoaderModule } from 'ng-http-loader';

describe('AppComponent', () => {
    let component: AppComponent;
    let fixture: ComponentFixture<AppComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [RouterTestingModule, NgHttpLoaderModule],
            declarations: [AppComponent]
        });
        fixture = TestBed.createComponent(AppComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should call window.scroll with the correct parameters when gotoTop() is called', () => {
        const scrollSpy = jasmine.createSpy('scroll');
        const originalScroll = window.scroll;

        (window as any).scroll = scrollSpy;

        component.gotoTop();

        expect(scrollSpy).toHaveBeenCalledWith({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });

        (window as any).scroll = originalScroll;
    });
});
