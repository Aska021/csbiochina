import { NgModule } from '@angular/core';

import { RouterModule } from '@angular/router';

import { model1Component } from './model1/model1.component';


import { synthesizerComponent } from './synthesizer.component';




@NgModule({
  imports: [
    RouterModule.forChild([
      // Home Page
      {
        path: 'synthesizer',
        children:[
            {path:'', component: synthesizerComponent},
            {path:'model-1', component: model1Component}
        ]
      },

    ],
    )
  ],
  declarations: [
    synthesizerComponent,
    model1Component
  ]
})
export class SynthesizerModule { }
