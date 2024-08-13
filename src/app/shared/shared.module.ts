import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthorComponent } from './components/author/author.component';
import { SingleBlogComponent } from './components/single-blog/single-blog.component';
import { RouterModule } from '@angular/router';
import { PreviewMarkdownComponent } from './components/preview-markdown/preview-markdown.component';
import { MarkdownModule } from 'ngx-markdown';
import { HttpClient } from '@angular/common/http';
@NgModule({
    declarations: [
        AuthorComponent,
        SingleBlogComponent,
        PreviewMarkdownComponent
    ],
    imports: [
        CommonModule,
        RouterModule,
        MarkdownModule.forRoot({ loader: HttpClient })
    ],
    exports: [
        AuthorComponent,
        SingleBlogComponent,
        PreviewMarkdownComponent
    ]
})
export class SharedModule { }
