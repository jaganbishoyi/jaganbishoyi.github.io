import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { PreviewMarkdownComponent } from './preview-markdown.component';
import { MarkdownModule, MarkdownService, SECURITY_CONTEXT } from 'ngx-markdown';
import { BrowserModule } from '@angular/platform-browser';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

describe('PreviewMarkdownComponent', () => {
    let component: PreviewMarkdownComponent;
    let fixture: ComponentFixture<PreviewMarkdownComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
    declarations: [PreviewMarkdownComponent],
    imports: [BrowserModule, MarkdownModule],
    providers: [
        MarkdownService,
        { provide: SECURITY_CONTEXT, useValue: {} },
        provideHttpClient(withInterceptorsFromDi()),
        provideHttpClientTesting()
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
