import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PublicComponent } from './public.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProjectDetailsComponent } from './projects/project/project-details/project-details.component';
import { ProjectsComponent } from './projects/projects.component';

const routes: Routes = [
    { path: '', component: PublicComponent },
    {
        path: 'projects/:projectId/:projectSlug',
        component: ProjectDetailsComponent,
    },
    { path: 'projects', component: ProjectsComponent },
    {
        path: 'blog',
        loadChildren: () =>
            import("./blog/blog.module").then(
                (m) => m.BlogModule
            ),
    },
    { path: 'page-not-found', component: NotFoundComponent },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class PublicRoutingModule { }
