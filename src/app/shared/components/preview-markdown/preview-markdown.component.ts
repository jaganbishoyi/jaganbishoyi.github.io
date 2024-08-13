import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-preview-markdown',
    templateUrl: './preview-markdown.component.html',
    styleUrls: ['./preview-markdown.component.scss']
})
export class PreviewMarkdownComponent {
    @Input() path = "";
}
