import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { PublicLayoutComponent } from './public-layout/public-layout.component';
import { PublicFooterComponent } from './public-layout/public-footer/public-footer.component';
import { PublicHeaderComponent } from './public-layout/public-header/public-header.component';
import { AdminFooterComponent } from './admin-layout/admin-footer/admin-footer.component';
import { AdminHeaderComponent } from './admin-layout/admin-header/admin-header.component';
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';
import { SharedModule } from '../../shared.module';


const components = [
    PublicLayoutComponent,
    PublicHeaderComponent,
    PublicFooterComponent,
    AdminLayoutComponent,
    AdminHeaderComponent,
    AdminFooterComponent
];

@NgModule({
    imports: [
        RouterModule,
        CommonModule,
        SharedModule
    ],
    declarations: components,
    exports: components,
})
export class LayoutsModule { }
