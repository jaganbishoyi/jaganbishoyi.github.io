import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
    selector: '[appScrollProgress]'
})
export class ScrollProgressDirective {

    constructor(private el: ElementRef, private renderer: Renderer2) { }

    @HostListener('window:scroll', [])
    onWindowScroll() {
        const winScroll = document.documentElement.scrollTop || document.body.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (winScroll / height) * 100;

        // Apply the width as percentage
        this.renderer.setStyle(this.el.nativeElement, 'width', `${scrolled}%`);
    }
}
