import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { blogs } from '@inMemoryDB/blogs';
import { IBlogContent } from '@interfaces/general.interface';

@Component({
    selector: 'app-blog',
    templateUrl: './blog.component.html',
    styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {
    blogs: IBlogContent[] = blogs
        .sort((a, b) => +new Date(b.publishDate) - +new Date(a.publishDate));

    constructor(
        private activatedRoute: ActivatedRoute
    ) { }

    ngOnInit(): void {
        this.activatedRoute.queryParams.subscribe((queryParams: Params) => {
            const tag = queryParams['tag'];
            if (tag) {
                this.blogs = blogs.filter((blog: IBlogContent) => blog.tags.includes(tag));
            } else {
                this.blogs = blogs;
            }
        });
    }
}
