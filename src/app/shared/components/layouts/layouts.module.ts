import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { PublicLayoutComponent } from './public-layout/public-layout.component';
import { PublicFooterComponent } from './public-layout/public-footer/public-footer.component';
import { PublicHeaderComponent } from './public-layout/public-header/public-header.component';


const components = [
    PublicLayoutComponent,
    PublicHeaderComponent,
    PublicFooterComponent
];

@NgModule({
    imports: [
        RouterModule,
        CommonModule,
    ],
    declarations: components,
    exports: components,
})
export class LayoutsModule { }
