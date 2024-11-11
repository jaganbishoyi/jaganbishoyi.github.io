import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { InterviewPrepComponent } from './interview-prep/interview-prep.component';
import { InterviewPrepSideNavigationComponent } from './interview-prep/interview-prep-side-navigation/interview-prep-side-navigation.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
    declarations: [
        AdminComponent,
        InterviewPrepComponent,
        InterviewPrepSideNavigationComponent
    ],
    imports: [
        CommonModule,
        AdminRoutingModule,
        SharedModule
    ]
})
export class AdminModule { }
