import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InterviewPrepComponent } from './interview-prep/interview-prep.component';

const routes: Routes = [
    {
        path: "interview-prep",
        component: InterviewPrepComponent
    },
    {
        path: "interview-prep/:category",
        component: InterviewPrepComponent
    },
    // { path: "", component: AdminComponent },
    {
        path: "",
        redirectTo: "interview-prep",
        pathMatch: "full",
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AdminRoutingModule { }
