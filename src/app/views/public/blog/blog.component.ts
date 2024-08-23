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

    filteredBlogs: IBlogContent[] = [];

    pageSize = 5;
    pageNumber = 1;

    constructor(private activatedRoute: ActivatedRoute) { }

    ngOnInit(): void {
        this.activatedRoute.queryParams.subscribe((queryParams: Params) => {
            const category = queryParams['category'];
            const tag = queryParams['tag'];

            let queryParam = {} as { filter: string; value: string };

            if (category) {
                queryParam = {
                    filter: 'category',
                    value: category
                };
            } else if (tag) {
                queryParam = {
                    filter: 'tag',
                    value: tag
                };
            } else {
                queryParam = {
                    filter: '',
                    value: ''
                };
            }

            switch (queryParam.filter) {
                case 'category':
                    this.blogs = blogs.filter((blog: IBlogContent) => blog.category === category);
                    break;

                case 'tag':
                    this.blogs = blogs.filter((blog: IBlogContent) => blog.tags.includes(tag));
                    break;

                default:
                    this.blogs = blogs;
                    break;
            }

            this.getFilteredBlog(this.pageNumber);
        });
    }

    getFilteredBlog(page: number): void {
        this.pageNumber = page;
        const start = (this.pageNumber - 1) * this.pageSize;
        const end = start + this.pageSize;
        this.filteredBlogs = this.blogs.slice(start, end);
    }
}
