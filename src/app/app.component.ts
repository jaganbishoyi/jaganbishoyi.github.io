import { Component, HostListener, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { IProject, ISeoEssentials } from '@interfaces/general.interface';
import { UtilsService } from '@services/utils.services';
// import { REQUEST_URL } from './request-url.service';
import { isPlatformBrowser } from '@angular/common';
import { projects } from '@inMemoryDB/projects';
import { NavigationEnd, Router } from '@angular/router';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    title = 'portfolio';
    projects: IProject[] = projects;
    isShow = false;
    topPosToStartShowing = 100;

    @HostListener('window:scroll')
    checkScroll(): void {
        const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;

        if (scrollPosition >= this.topPosToStartShowing) {
            this.isShow = true;
        } else {
            this.isShow = false;
        }
    }

    constructor(
        private utils: UtilsService,
        private router: Router,
        // eslint-disable-next-line @typescript-eslint/ban-types
        @Inject(PLATFORM_ID) private platformId: Object
    ) { }

    ngOnInit(): void {
        this.router.events.subscribe((event) => {
            if (event instanceof NavigationEnd) {
                this.addMetaInfo(event.url);
            }
        });

        // const slug = this.utils.generateSlug("");
        // console.log(slug);
    }

    gotoTop(): void {
        window.scroll({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    }

    addMetaInfo(url: string): void {
        if (isPlatformBrowser(this.platformId)) {
            // const reqUrl = this.injector.get(REQUEST_URL);

            switch (url) {
                case "/": {
                    const SEOData: ISeoEssentials = {
                        title: "Jagan Mohan Bishoyi | Angular | Frontend Web Developer",
                        description: "Hey, i'm Jagan Mohan. I am a dedicated Front-End Developer with more than half a decade of experience delivering high-quality web solutions and having expertise in front-end web development.",
                        canonicalLink: 'https://jaganb.dev/',
                        image: 'https://jaganb.dev/assets/images/me.png'
                    };

                    this.utils.setSEOEssentials(SEOData);
                    break;
                }

                case "/projects": {
                    const SEOData: ISeoEssentials = {
                        title: "Projects - Here you will find some of the personal and clients projects that I created with each project containing its own case study | https://jaganb.dev/ | Jagan Mohan Bishoyi",
                        description: `In my journey, I've had the privilege of spearheading ${this.projects.length} projects,
                    each marked by its unique challenges and accomplishments.The invaluable lessons
                    I gleaned from this experience have significantly contributed to my ongoing growth and
                    professional evolution.These projects, rich in experiences, have been pivotal in shaping my
                    journey, and I look forward to the exciting challenges that the future holds.`,
                        canonicalLink: "https://jaganb.dev/projects",
                        image: 'https://jaganb.dev/assets/images/me.png'
                    };

                    this.utils.setSEOEssentials(SEOData);
                    break;
                }

                case "/blogs": {
                    const SEOData: ISeoEssentials = {
                        title: "Blogs | Tech Insights: Your Guide to Modern Web Development",
                        description: "Explore a curated selection of insightful articles on front-end development, where I delve into the latest technologies, best practices, and key concepts. Whether you're prepping for an interview or looking to sharpen your skills, these posts provide valuable tips and in-depth answers to some of the most crucial questions in the field.",
                        canonicalLink: 'https://jaganb.dev/blogs',
                        image: 'https://jaganb.dev/assets/images/me.png'
                    };

                    this.utils.setSEOEssentials(SEOData);
                    break;
                }

                case "/page-not-found": {
                    const SEOData: ISeoEssentials = {
                        title: "404 - Page Not Found | https://jaganb.dev/ | Jagan Mohan Bishoyi",
                        description: "Look like you're lost. The page you are looking for not available!",
                        canonicalLink: "https://jaganb.dev/page-not-found",
                        image: 'https://jaganb.dev/assets/images/me.png'
                    };

                    this.utils.setSEOEssentials(SEOData);
                    break;
                }

                default: {
                    const SEOData: ISeoEssentials = {
                        title: "Jagan Mohan Bishoyi | Angular | Frontend Web Developer",
                        description: "Hey, i'm Jagan Mohan. I am a dedicated Front-End Developer with more than half a decade of experience delivering high-quality web solutions and having expertise in front-end web development.",
                        canonicalLink: 'https://jaganb.dev/',
                        image: 'https://jaganb.dev/assets/images/me.png'
                    };

                    this.utils.setSEOEssentials(SEOData);
                }
            }
        }
    }
}
