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

    constructor(
        private activatedRoute: ActivatedRoute,
        private location: Location,
    ) { }

    ngOnInit(): void {
        this.activatedRoute.params.subscribe((params: any) => {
            const blogId = params.id;
            const blog = blogs.find((blog: IBlogContent) => blog.id === blogId);
            if (blog) {
                this.blog = blog;
            }
        })
    }

    navigateBack(): void {
        this.location.back();
    }
}
