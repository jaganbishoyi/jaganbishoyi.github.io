import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-public-footer',
    templateUrl: './public-footer.component.html',
    styleUrls: ['./public-footer.component.scss'],
})
export class PublicFooterComponent implements OnInit {
    currentYear = 0;

    ngOnInit(): void {
        this.currentYear = new Date().getFullYear();
    }
}
