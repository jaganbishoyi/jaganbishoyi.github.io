import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-category',
    templateUrl: './category.component.html',
    styleUrls: ['./category.component.scss']
})
export class CategoryComponent {
    @Input() category = "";

    constructor(private router: Router) { }

    navigate(): void {
        this.router.navigate(['/blogs'], { queryParams: { category: this.category } })
    }
}
