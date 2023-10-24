import {
    trigger,
    state,
    style,
    transition,
    animate,
    group,
} from '@angular/animations';

export const SlideInOutAnimation = [
    trigger('slideInOut', [
        state(
            'in',
            style({
                'max-height': '500px',
                opacity: '1',
                visibility: 'visible',
            })
        ),
        state(
            'out',
            style({
                'max-height': '0px',
                opacity: '0',
                visibility: 'hidden',
            })
        ),
        transition('in => out', [
            group([
                animate(
                    '700ms ease-in-out',
                    style({
                        visibility: 'hidden',
                    })
                ),

                animate(
                    '600ms ease-in-out',
                    style({
                        'max-height': '0px',
                    })
                ),
                animate(
                    '400ms ease-in-out',
                    style({
                        opacity: '0',
                    })
                ),
            ]),
        ]),
        transition('out => in', [
            group([
                animate(
                    '1ms ease-in-out',
                    style({
                        visibility: 'visible',
                    })
                ),
                animate(
                    '600ms ease-in-out',
                    style({
                        'max-height': '500px',
                    })
                ),
                animate(
                    '500ms ease-in-out',
                    style({
                        opacity: '1',
                    })
                ),
            ]),
        ]),
    ]),
];
