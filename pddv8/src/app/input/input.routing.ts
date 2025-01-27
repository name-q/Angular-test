import { Routes, RouterModule } from '@angular/router';
import { InputComponent } from './input.component'

const routes: Routes = [
  {
    path: '',
    component: InputComponent
  },
];

export const InputRoutes = RouterModule.forChild(routes);
