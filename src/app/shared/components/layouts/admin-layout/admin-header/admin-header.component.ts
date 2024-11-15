import { AfterContentChecked, AfterContentInit, ChangeDetectorRef, Component, HostListener } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { navs } from '@inMemoryDB/store';
import { INav } from '@interfaces/general.interface';
import { SlideInOutAnimation } from '../../public-layout/public-header/animation';

@Component({
    selector: 'app-admin-header',
    templateUrl: './admin-header.component.html',
    styleUrls: ['./admin-header.component.scss'],
    animations: [SlideInOutAnimation],
})
export class AdminHeaderComponent implements AfterContentInit, AfterContentChecked {
    mobileMenu = false;
    navigation: INav[] = navs;
    screenWidth = 0;
    animationState = 'out';
    active: string | null = '';

    constructor(
        private changeDetector: ChangeDetectorRef,
        private router: Router
    ) {
        this.router.events.subscribe((event) => {
            if (event instanceof NavigationEnd) {
                this.active = router.parseUrl(router.url).fragment;
                if (this.router.url.includes('projects')) {
                    this.active = 'projects';
                }

                if (this.router.url.includes('blogs')) {
                    this.active = 'blogs';
                }
            }
        });
    }

    @HostListener('window:resize', ['$event'])
    onResize(event: { target: { innerWidth: number } }): void {
        this.screenWidth = event.target.innerWidth;
        this.switchScreen(this.screenWidth);
    }

    toggleMenu(): void {
        this.mobileMenu = !this.mobileMenu;
        this.animationState = this.animationState === 'out' ? 'in' : 'out';
    }

    ngAfterContentInit(): void {
        this.screenWidth = window.innerWidth;
        this.switchScreen(this.screenWidth);
    }

    ngAfterContentChecked(): void {
        this.changeDetector.detectChanges();
    }

    switchScreen(screenWidth: number): void {
        if (screenWidth > 820) {
            this.mobileMenu = false;
        }
    }

    navigateToHome(): void {
        this.router.navigate(['/']);
    }
}
