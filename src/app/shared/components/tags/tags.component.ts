import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-tags',
    templateUrl: './tags.component.html',
    styleUrls: ['./tags.component.scss']
})
export class TagsComponent {
    @Input() tags: string[] = [];

    tagId = "";

    constructor(private router: Router) {
        this.tagId = this.getCode();
    }

    navigate(cato: string): void {
        this.router.navigate(['/blogs'], { queryParams: { tag: cato } })
    }

    getCode(): string {
        const rndInt = Math.floor(Math.random() * 6) + 1;
        return rndInt.toString();
    }
}
