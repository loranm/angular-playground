import { trigger, state, style, transition, animate } from "@angular/animations";


export const fade =
    trigger('fade', [
        state('void', style({ opacity: 0 })),
        transition(':enter, :leave', [
            animate(2000)
        ])
    ])

export const slide =
    trigger('slide', [
        state('void', style({ transform: 'translateX(-20px)' })),
        transition(':enter', [
            animate(300)
        ]),
        transition(':leave', [
            animate(300, style({transform: 'translateX(-100%)'}))
        ])

    ])
