import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
    selector: 'app-public',
    templateUrl: './public.component.html',
    styleUrls: ['./public.component.scss'],
})
export class PublicComponent {
    constructor(public router: Router, private titleService: Title) {
        this.titleService.setTitle(
            'Jagan Mohan Bishoyi | Angular | Frontend Web Developer'
        );
    }
}
