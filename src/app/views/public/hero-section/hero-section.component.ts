import { Component } from '@angular/core';
import { UtilsService } from '@services/utils.services';

@Component({
    selector: 'app-hero-section',
    templateUrl: './hero-section.component.html',
    styleUrls: ['./hero-section.component.scss']
})
export class HeroSectionComponent {
    constructor(
        private utilsService: UtilsService,
    ) { }

    navigate(id: string): void {
        this.utilsService.scrollToView(id);
    }
}
