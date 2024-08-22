import { Component, OnInit } from '@angular/core';
import { blogs } from '@inMemoryDB/blogs';
import { IBlogContent } from '@interfaces/general.interface';

@Component({
    selector: 'app-blog-section',
    templateUrl: './blog-section.component.html',
    styleUrls: ['./blog-section.component.scss']
})
export class BlogSectionComponent implements OnInit {
    blogs: IBlogContent[] = [];

    ngOnInit(): void {
        this.blogs = blogs
            .filter((blog: IBlogContent) => blog.featured)
            .sort((a, b) => +new Date(b.publishDate) - +new Date(a.publishDate))
            .slice(0, 3);
    }
}
