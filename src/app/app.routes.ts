import { Routes } from '@angular/router';
import { ButtonComponent } from './apps/button/button.component';
import { NewPageComponent } from './apps/new-page/new-page.component';

export const routes: Routes = [
  {
    path: 'button',
    pathMatch: 'full',
    component: ButtonComponent,
  },

  {
    path: 'new-page',
    pathMatch: 'full',
    component: NewPageComponent,
  },
];
