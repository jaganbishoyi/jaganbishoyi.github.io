import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';

@Component({
    selector: 'app-pagination',
    templateUrl: './pagination.component.html',
    styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnChanges {
    @Input() total = 0;
    @Input() activePage = 1;
    @Input() pageSize = 0;
    @Output() selectedPage = new EventEmitter<number>();

    pages: string[] = [];

    ngOnChanges(changes: SimpleChanges): void {
        if (changes) {
            this.calculatePage();
        }
    }

    calculatePage(): void {
        this.pages = this.generateNumberStrings(Math.ceil(this.total / this.pageSize));
    }

    selectPage(pageNumber: string): void {
        this.activePage = +pageNumber;
        this.selectedPage.emit(this.activePage);
    }

    next(): void {
        if (this.activePage < this.pages.length) {
            this.activePage = this.activePage + 1;
            this.selectedPage.emit(this.activePage);
        }
    }

    previous(): void {
        if (this.activePage > 1) {
            this.activePage = this.activePage - 1;
            this.selectedPage.emit(this.activePage);
        }
    }

    generateNumberStrings = (n: number) =>
        Array.from({ length: n }, (_, i) => (i + 1).toString());
}
