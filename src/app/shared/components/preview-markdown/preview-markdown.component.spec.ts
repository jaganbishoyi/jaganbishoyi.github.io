import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviewMarkdownComponent } from './preview-markdown.component';

describe('PreviewMarkdownComponent', () => {
    let component: PreviewMarkdownComponent;
    let fixture: ComponentFixture<PreviewMarkdownComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [PreviewMarkdownComponent]
        });
        fixture = TestBed.createComponent(PreviewMarkdownComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
