import { Routes } from '@angular/router';
import { TodoComponent } from './todo.component';
import { InfoComponent } from './info.component';

export const appRoutes: Routes = [
  { path: '', component: TodoComponent },
  { path: 'contact-us', component: InfoComponent }
]