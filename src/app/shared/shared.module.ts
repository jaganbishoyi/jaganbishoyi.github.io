import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthorComponent } from './components/author/author.component';
import { SingleBlogComponent } from './components/single-blog/single-blog.component';
import { RouterModule } from '@angular/router';

@NgModule({
    declarations: [
        AuthorComponent,
        SingleBlogComponent
    ],
    imports: [
        CommonModule,
        RouterModule
    ],
    exports: [
        AuthorComponent,
        SingleBlogComponent
    ]
})
export class SharedModule { }
