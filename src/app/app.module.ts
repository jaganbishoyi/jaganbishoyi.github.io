import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { ToastrModule } from 'ngx-toastr';
import { NgHttpLoaderModule } from 'ng-http-loader';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutsModule } from './shared/components/layouts/layouts.module';
import { getRequestUrl, REQUEST_URL } from './request-url.service';
import { SharedModule } from './shared/shared.module';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        NgHttpLoaderModule.forRoot(),
        AppRoutingModule,
        LayoutsModule,
        ToastrModule.forRoot({
            timeOut: 10000,
            positionClass: 'toast-top-right',
            preventDuplicates: true,
            closeButton: true,
            autoDismiss: false,
        }),
        SharedModule
    ],
    providers: [
        { provide: REQUEST_URL, useFactory: getRequestUrl },
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
