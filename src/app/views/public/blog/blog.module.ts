import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogRoutingModule } from './blog-routing.module';
import { BlogComponent } from './blog.component';
import { BlogDetailsComponent } from './blog-details/blog-details.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { BlogSideNavigationComponent } from './blog-side-navigation/blog-side-navigation.component';


@NgModule({
    declarations: [
        BlogComponent,
        BlogDetailsComponent,
        BlogSideNavigationComponent
    ],
    imports: [
        CommonModule,
        BlogRoutingModule,
        SharedModule
    ],
    exports: []
})
export class BlogModule { }
