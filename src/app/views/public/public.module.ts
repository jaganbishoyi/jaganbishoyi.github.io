import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicRoutingModule } from './public-routing.module';
import { PublicComponent } from './public.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HeroSectionComponent } from './landing/hero-section/hero-section.component';
import { AboutSectionComponent } from './landing/about-section/about-section.component';
import { ContactSectionComponent } from './landing/contact-section/contact-section.component';
import { ProjectsSectionComponent } from './landing/projects-section/projects-section.component';
import { ProjectsComponent } from './projects/projects.component';
import { ProjectComponent } from './projects/project/project.component';
import { ProjectDetailsComponent } from './projects/project/project-details/project-details.component';
import { BlogSectionComponent } from './landing/blog-section/blog-section.component';

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
    imports: [CommonModule, PublicRoutingModule],
})
export class PublicModule { }
