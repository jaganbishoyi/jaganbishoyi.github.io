import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicRoutingModule } from './public-routing.module';
import { PublicComponent } from './public.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HeroSectionComponent } from './home/hero-section/hero-section.component';
import { AboutSectionComponent } from './home/about-section/about-section.component';
import { ContactSectionComponent } from './home/contact-section/contact-section.component';
import { ProjectsSectionComponent } from './home/projects-section/projects-section.component';
import { ProjectsComponent } from './projects/projects.component';
import { ProjectComponent } from './projects/project/project.component';
import { ProjectDetailsComponent } from './projects/project/project-details/project-details.component';
import { BlogSectionComponent } from './home/blog-section/blog-section.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
    declarations: [
        PublicComponent,
        NotFoundComponent,
        HeroSectionComponent,
        AboutSectionComponent,
        ContactSectionComponent,
        ProjectsSectionComponent,
        ProjectDetailsComponent,
        ProjectsComponent,
        ProjectComponent,
        BlogSectionComponent
    ],
    imports: [
        CommonModule,
        PublicRoutingModule,
        SharedModule
    ],
})
export class PublicModule { }
