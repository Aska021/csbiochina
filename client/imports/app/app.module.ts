import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';

import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { TodoAddComponent } from './todo-add/todo-add.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

import { aboutusComponent } from './aboutus/aboutus.coponent';
import { homeComponent } from './home/home.component';
import { peptidesComponent } from './peptides/peptides.component';
import { SynthesizerModule } from './synthesizer/synthesizer.module';







@NgModule({
  imports: [
    SynthesizerModule,
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      // Home Page
      {
        path: '',
        component: homeComponent
      },
      {
        path: 'aboutus',
        component: aboutusComponent
      },
      {
        path: 'peptides',
        component: peptidesComponent
      },
      {
        path: 'todoList',
        component: TodoListComponent
      },
      {
        path: 'todoAdd',
        component: TodoAddComponent
      },
      // 404 Page
      {
        path: '**',
        component: PageNotFoundComponent
      }
    ],
    )
  ],
  declarations: [
    AppComponent,
    TodoAddComponent,
    TodoListComponent,
    PageNotFoundComponent,
    aboutusComponent,
    homeComponent,
    peptidesComponent,
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
