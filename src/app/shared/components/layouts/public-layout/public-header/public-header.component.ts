import { AfterContentChecked, AfterContentInit, ChangeDetectorRef, Component, HostListener } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { navs } from '@inMemoryDB/store';
import { INav } from '@interfaces/general.interface';
import { SlideInOutAnimation } from './animation';

@Component({
    selector: 'app-public-header',
    templateUrl: './public-header.component.html',
    styleUrls: ['./public-header.component.scss'],
    animations: [SlideInOutAnimation],
})
export class PublicHeaderComponent
    implements AfterContentInit, AfterContentChecked {
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

                if (this.router.url === '/projects') {
                    this.active = 'projects';
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
