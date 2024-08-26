import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { PreviewMarkdownComponent } from './preview-markdown.component';
import { MarkdownModule, MarkdownService, SECURITY_CONTEXT } from 'ngx-markdown';
import { BrowserModule } from '@angular/platform-browser';

describe('PreviewMarkdownComponent', () => {
    let component: PreviewMarkdownComponent;
    let fixture: ComponentFixture<PreviewMarkdownComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [BrowserModule, MarkdownModule, HttpClientTestingModule],
            declarations: [PreviewMarkdownComponent],
            providers: [
                MarkdownService,
                { provide: SECURITY_CONTEXT, useValue: {} }
            ]
        });
        fixture = TestBed.createComponent(PreviewMarkdownComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
