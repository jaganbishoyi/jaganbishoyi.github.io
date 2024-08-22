import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthorComponent } from './components/author/author.component';
import { SingleBlogComponent } from './components/single-blog/single-blog.component';
import { RouterModule } from '@angular/router';
import { PreviewMarkdownComponent } from './components/preview-markdown/preview-markdown.component';
import { MarkdownModule } from 'ngx-markdown';
import { HttpClient } from '@angular/common/http';
import { TagsComponent } from './components/tags/tags.component';
import { PaginationComponent } from './components/pagination/pagination.component';

const components = [
    AuthorComponent,
    SingleBlogComponent,
    PreviewMarkdownComponent,
    TagsComponent,
    PaginationComponent
];

@NgModule({
    declarations: components,
    imports: [
        CommonModule,
        RouterModule,
        MarkdownModule.forRoot({ loader: HttpClient })
    ],
    exports: components
})
export class SharedModule { }
