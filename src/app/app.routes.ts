import { Routes } from '@angular/router';
import { ButtonComponent } from './apps/button/button.component';

export const routes: Routes = [
  {
    path: 'button',
    pathMatch: 'full',
    component: ButtonComponent,
  },
];
