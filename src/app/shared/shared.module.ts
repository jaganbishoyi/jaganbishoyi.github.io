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
import { CategoryComponent } from './components/category/category.component';
import { TitleCasePipe } from './pipes/title-case.pipe';

const pipes = [TitleCasePipe];

const components = [
    AuthorComponent,
    SingleBlogComponent,
    PreviewMarkdownComponent,
    TagsComponent,
    PaginationComponent,
    CategoryComponent
];

@NgModule({
    declarations: [...components, ...pipes],
    imports: [
        CommonModule,
        RouterModule,
        MarkdownModule.forRoot({ loader: HttpClient })
    ],
    exports: [...components, ...pipes]
})
export class SharedModule { }
