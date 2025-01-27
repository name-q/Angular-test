import { Routes, RouterModule } from '@angular/router';
import { InputComponent } from './input.component'
import { NgModule } from '@angular/core';

const routes: Routes = [
  {
    path: '',
    component: InputComponent
  },
];

// export const InputRoutes = RouterModule.forChild(routes);
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InfoRoutingModule { }