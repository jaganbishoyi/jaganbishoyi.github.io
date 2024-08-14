import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { IBlogContent } from '@interfaces/general.interface';
import { blogs } from '@inMemoryDB/blogs';

@Component({
    selector: 'app-blog-details',
    templateUrl: './blog-details.component.html',
    styleUrls: ['./blog-details.component.scss']
})
export class BlogDetailsComponent implements OnInit {
    blog: IBlogContent = {} as IBlogContent;
    inValidBlogSlug = false;

    constructor(
        private activatedRoute: ActivatedRoute,
        private location: Location,
    ) { }

    ngOnInit(): void {
        this.activatedRoute.params.subscribe((params: any) => {
            const slug = params.slug;
            const blog = blogs.find((blog: IBlogContent) => blog.slug === slug);
            if (blog) {
                this.inValidBlogSlug = false;
                this.blog = blog;
            } else {
                this.inValidBlogSlug = true;
            }
        })
    }

    navigateBack(): void {
        this.location.back();
    }
}
