import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'input',
    loadChildren: () => import('./input/input.module').then(m => m.InputModule)
  },
  {
    path: 'info',
    loadChildren: () => import('./info/info.module').then(m => m.InfoModule)
  },
  { path: '', redirectTo: '/input', pathMatch: 'full' }, // 默认重定向到 'input'
  { path: '**', redirectTo: '/input' }, // 兜底路由
];

export const AppRoutes = RouterModule.forRoot(routes);
