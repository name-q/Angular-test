import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'input',
    loadChildren: './input/input.module#InputModule'
  },
];

// const AppRoutes = RouterModule.forChild(routes);
// 主路由模块应使用 forRoot
// export const AppRoutes = RouterModule.forRoot(routes);
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }