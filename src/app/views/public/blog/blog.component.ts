import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { blogs } from '@inMemoryDB/blogs';
import { IBlogContent } from '@interfaces/general.interface';
import { debounceTime, Subject } from 'rxjs';

@Component({
    selector: 'app-blog',
    templateUrl: './blog.component.html',
    styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {
    searchInput = new Subject<string>();

    blogs: IBlogContent[] = blogs
        .sort((a, b) => +new Date(b.publishDate) - +new Date(a.publishDate));

    filteredBlogs: IBlogContent[] = [];
    pageSize = 5;
    pageNumber = 1;
    showPagination = true;

    constructor(
        private activatedRoute: ActivatedRoute,
        private router: Router
    ) {
        this.searchInput
            .pipe(debounceTime(700))
            .subscribe((searchTerm: string) => {
                console.log('Search Term:', searchTerm);
                this.showPagination = searchTerm ? false : true;
                if (searchTerm) {
                    this.performSearch(searchTerm);
                } else {
                    this.getFilteredBlog(1);
                }
            });
    }

    ngOnInit(): void {
        this.activatedRoute.queryParams.subscribe((queryParams: Params) => {
            const category = queryParams['category'];
            const tag = queryParams['tag'];

            let queryParam = {
                filter: '',
                value: ''
            } as { filter: string; value: string };

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

    onSearchInputChange(searchTerm: Event): void {
        const target = searchTerm.target as HTMLInputElement;
        this.searchInput.next(target.value);
    }

    performSearch(searchTerm: string): void {
        this.filteredBlogs = this.blogs.filter((blog: IBlogContent) => {
            const keys: (keyof IBlogContent)[] = ['title', 'description'];
            return keys.some((key) =>
                blog[key]?.toString().toLowerCase().includes(searchTerm.toLowerCase())
            );
        });
    }

    getFilteredBlog(page: number): void {
        this.pageNumber = page;
        const start = (this.pageNumber - 1) * this.pageSize;
        const end = start + this.pageSize;
        this.filteredBlogs = this.blogs.slice(start, end);
    }
}
