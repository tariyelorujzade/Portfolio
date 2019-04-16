import { trigger, transition, query, style, animate, stagger, group, sequence, state, AnimationMetadataType } from '@angular/animations';

export const routerTransition= trigger('routerTransition',[
      transition('*<=>*',[
       query(':enter, :leave', style({position:'absolute'}),{optional:true}),
         
       query(':enter',[ style({opacity:0})] ,{optional:true}),

       query(':leave',[ style({opacity:1}), animate('400ms ease-in-out', style({ opacity:0 }))]  ,{optional:true}),

       query(':enter', [style({opacity:0}), animate('300ms ease-in-out', style({opacity:1}))] , {optional:true})
           
     
                  ])
                  
])