import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'input',
    loadChildren: () => import('./input/input.module').then(m => m.InputModule)
  },
];

export const AppRoutes = RouterModule.forRoot(routes);
