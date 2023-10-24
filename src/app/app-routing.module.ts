import { NgModule } from '@angular/core';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { PublicLayoutComponent } from './shared/components/layouts/public-layout/public-layout.component';

const APP_ROUTES: Routes = [
    {
        path: "",
        component: PublicLayoutComponent,
        loadChildren: () =>
            import("./views/public/public.module").then((m) => m.PublicModule),
    },
    {
        path: "**",
        redirectTo: "/page-not-found",
    },
];

const routerOptions: ExtraOptions = {
    scrollPositionRestoration: "enabled",
    enableTracing: false,
    anchorScrolling: "enabled",
    onSameUrlNavigation: "reload",
    scrollOffset: [0, 64]
};


@NgModule({
    imports: [RouterModule.forRoot(APP_ROUTES, routerOptions)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
