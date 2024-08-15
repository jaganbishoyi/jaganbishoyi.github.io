import { Component, Inject, Injector, OnInit, PLATFORM_ID } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { ISeoEssentials } from '@interfaces/general.interface';
import { UtilsService } from '@services/utils.services';
import { REQUEST_URL } from './request-url';
import { isPlatformServer } from '@angular/common';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    title = 'portfolio';
    constructor(
        private router: Router,
        private utils: UtilsService,
        private injector: Injector,
        // eslint-disable-next-line @typescript-eslint/ban-types
        @Inject(PLATFORM_ID) private platformId: Object
    ) {
        this.router.events.subscribe((event) => {
            if (event instanceof NavigationEnd) {
                if (this.router.url === '/') {
                    const SEOData: ISeoEssentials = {
                        title: "Jagan Mohan Bishoyi | Angular | Frontend Web Developer",
                        description: "Hey, i'm Jagan Mohan. I am a dedicated Front-End Developer with more than half a decade of experience delivering high-quality web solutions and having expertise in front-end web development.",
                        canonicalLink: 'https://jaganb.dev/',
                        image: 'https://jaganb.dev/assets/images/me.png'
                    };

                    this.utils.setSEOEssentials(SEOData);
                }
            }
        });
    }

    ngOnInit(): void {
        if (isPlatformServer(this.platformId)) {
            const reqUrl = this.injector.get(REQUEST_URL);

            switch (reqUrl) {
                // case "/testimonials": {
                //     this.addCanonicalTag("https://URL/testimonials");
                //     const SEOData: IMetaInfo = {
                //         title: "Testimonial |Blog",
                //         site_name: "blog site |Blog",
                //         description: "Check out what our job seekers and employers think of us.",
                //         url: "https://URL/testimonials",
                //         image: "assets/Images/home-page.jpg",
                //         twitterTitle: "Testimonial | blog",
                //     };
                //     this.updateMetaTag(SEOData);
                //     this.addTestimonialsToBody();
                //     break;
                // }
                // case "/districts": {
                //     this.http.get<number>(
                //         `${this.constantService.getHostingURL()}/GetTotalDistrictCount?token=${token}`,
                //         options
                //     ).subscribe((count: number) => {
                //         this.addCanonicalTag("https://URL/districts");
                //         const SEOData: IMetaInfo = {
                //             title: "url offers opportunities in " + count + " districts spanning New York, New Jersey, Connecticut, Massachusetts, Pennsylvania, Vermont, and the neighboring regions. |Blog",
                //             site_name: "blog site |Blog",
                //             description: "url offers opportunities in " + count + " districts spanning New York, New Jersey, Connecticut, Massachusetts, Pennsylvania, Vermont, and the neighboring regions.",
                //             url: "https://URL/districts",
                //             image: "assets/Images/home-page.jpg",
                //             twitterTitle: "blog site |Blog",
                //         };

                //         this.updateMetaTag(SEOData);
                //     });
                //     break;
                // }

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

                default: {
                    // if (reqUrl.includes("/job-details/")) {
                    //     const jobNumber = reqUrl.split('/')[reqUrl.split('/').length - 1];

                    //     this.http.get<IJobMetaInfo>(
                    //         `${this.constantService.getHostingURL()}/GetJobDetails?JobNumber=${jobNumber}&token=${token}`,
                    //         options
                    //     ).subscribe((data: IJobMetaInfo) => {
                    //         this.addCanonicalTag("https://URL/job-details/" + data.JobNumber);
                    //         const SEOData: IMetaInfo = {
                    //             title: data.JobDescription + " opening in " + data.DistrictName,
                    //             site_name: "blog site |Blog",
                    //             description: "Apply for " + data.JobDescription + " opening in " + data.DistrictName,
                    //             url: "https://URL/jobs",
                    //             image: "assets/Images/home-page.jpg",
                    //             twitterTitle: "blog site |Blog",
                    //         };
                    //         this.addJobDetailsToBody(data);
                    //         if (data && !data.IsInstructionalJob) {
                    //             this.addGoogleJobDetailsToBody(data);
                    //         }
                    //         this.updateMetaTag(SEOData);
                    //     });
                    // } else {

                    //     if (reqUrl && !reqUrl.includes('.') && !reqUrl.includes('?') && !reqUrl.includes('undefined') && !reqUrl.includes('timeout')) {
                    //         const label = reqUrl.split("/");

                    //         if (label.length === 2 && label[1].length) {
                    //             const districtLabel = label[1];
                    //             this.http.get<IDistrictMetaInfo>(
                    //                 `${this.constantService.getHostingURL()}/GetDistrictInformation?districtLabel=${districtLabel}&token=${token}`,
                    //                 options
                    //             ).subscribe((data: IDistrictMetaInfo) => {
                    //                 this.addCanonicalTag("https://URL/" + districtLabel);
                    //                 const SEOData: IMetaInfo = {
                    //                     title: data.result.DistrictName + ' |Blog',
                    //                     site_name: "blog site |Blog",
                    //                     description: `Learn about working at ${data.result.DistrictName} in ${data.result.City}, ${data.result.State}, ${data.result.RegionName}. See jobs, salaries,and more for ${data.result.DistrictName}, ${data.result.City} location.`,
                    //                     url: "https://URL/" + districtLabel,
                    //                     image: "assets/Images/home-page.jpg",
                    //                     twitterTitle: data.result.DistrictName + ' |Blog',
                    //                 };

                    //                 this.addDistrictDetailsToBody(data);
                    //                 this.updateMetaTag(SEOData);
                    //             });
                    //         }
                    //     }
                    // }

                    break;
                }
            }
        }
    }
}
