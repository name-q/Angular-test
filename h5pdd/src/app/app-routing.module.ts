import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeContainerComponent } from './home';

const routes: Routes = [
  // {path:'', redirectTo: 'HomeContainerComponent',pathMatch:'full'}
  {path:'', component: HomeContainerComponent}
  // {path:'', component: HomeContainerComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
