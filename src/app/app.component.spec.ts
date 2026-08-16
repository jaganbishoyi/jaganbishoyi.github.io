/* eslint-disable @typescript-eslint/no-explicit-any */
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { RouterTestingModule } from "@angular/router/testing";
import { AppComponent } from "./app.component";
import { NgHttpLoaderModule } from "ng-http-loader";
import { SharedModule } from "./shared/shared.module";

describe("AppComponent", () => {
    let component: AppComponent;
    let fixture: ComponentFixture<AppComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [RouterTestingModule, NgHttpLoaderModule, SharedModule],
            declarations: [AppComponent],
        });
        fixture = TestBed.createComponent(AppComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it("should create", () => {
        expect(component).toBeTruthy();
    });

    it("should call window.scroll with the correct parameters when gotoTop() is called", () => {
        const scrollSpy = jasmine.createSpy("scroll");
        const originalScroll = window.scroll;

        (window as any).scroll = scrollSpy;

        component.gotoTop();

        expect(scrollSpy).toHaveBeenCalledWith({
            top: 0,
            left: 0,
            behavior: "smooth",
        });

        (window as any).scroll = originalScroll;
    });

    describe("checkScroll", () => {
        it("should set isShow to true when scroll position is greater than or equal to topPosToStartShowing", () => {
            component.topPosToStartShowing = 100;

            spyOnProperty(window, "pageYOffset", "get").and.returnValue(150);

            component.checkScroll();

            expect(component.isShow).toBeTrue();
        });

        it("should set isShow to false when scroll position is less than topPosToStartShowing", () => {
            component.topPosToStartShowing = 100;

            spyOnProperty(window, "pageYOffset", "get").and.returnValue(50);

            component.checkScroll();

            expect(component.isShow).toBeFalse();
        });

        it("should set isShow to true when scroll position is exactly equal to topPosToStartShowing", () => {
            component.topPosToStartShowing = 100;

            spyOnProperty(window, "pageYOffset", "get").and.returnValue(100);

            component.checkScroll();

            expect(component.isShow).toBeTrue();
        });
    });
});
