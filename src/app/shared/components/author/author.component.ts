import { Component, Input } from '@angular/core';
import { IAuthor } from '@interfaces/general.interface';

@Component({
    selector: 'app-author',
    templateUrl: './author.component.html',
    styleUrls: ['./author.component.scss']
})
export class AuthorComponent {
    @Input() content: IAuthor = {} as IAuthor;
}
