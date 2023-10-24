import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicRoutingModule } from './public-routing.module';
import { PublicComponent } from './public.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HeroSectionComponent } from './hero-section/hero-section.component';
import { AboutSectionComponent } from './about-section/about-section.component';
import { ContactSectionComponent } from './contact-section/contact-section.component';
import { ProjectsSectionComponent } from './projects-section/projects-section.component';
import { ProjectsComponent } from './projects/projects.component';
import { ProjectComponent } from './projects/project/project.component';
import { ProjectDetailsComponent } from './projects/project/project-details/project-details.component';

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
    ],
    imports: [CommonModule, PublicRoutingModule],
})
export class PublicModule {}
