import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router'

import { TodoComponent } from './todo.component';
import { AppComponent } from './app.component';
import { InfoComponent } from './info.component';

const appRoutes: Routes = [
  { path: '', component: TodoComponent },
  { path: 'contact-us', component: InfoComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    InfoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(
      appRoutes
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
