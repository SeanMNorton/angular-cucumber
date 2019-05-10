import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router'

import { TodoComponent } from './todo.component';
import { AppComponent } from './app.component';
import { InfoComponent } from './info.component';
import { appRoutes } from './app-routing-module';

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
