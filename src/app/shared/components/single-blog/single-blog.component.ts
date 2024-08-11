import { Component, Input } from '@angular/core';
import { IBlogContent } from '@interfaces/general.interface';

@Component({
    selector: 'app-single-blog',
    templateUrl: './single-blog.component.html',
    styleUrls: ['./single-blog.component.scss']
})
export class SingleBlogComponent {
    @Input() content: IBlogContent = {} as IBlogContent;
}
