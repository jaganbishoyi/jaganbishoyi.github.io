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
import { ScrollProgressDirective } from './directive/scroll-progress.directive';
import { ScrollProgressComponent } from './components/scroll-progress/scroll-progress.component';

const pipes = [TitleCasePipe];

const components = [
    AuthorComponent,
    SingleBlogComponent,
    PreviewMarkdownComponent,
    TagsComponent,
    PaginationComponent,
    CategoryComponent,
    ScrollProgressComponent
];

const directives = [
    ScrollProgressDirective
];

@NgModule({
    declarations: [...components, ...directives, ...pipes],
    imports: [
        CommonModule,
        RouterModule,
        MarkdownModule.forRoot({ loader: HttpClient })
    ],
    exports: [...components, ...directives, ...pipes]
})
export class SharedModule { }
