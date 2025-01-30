import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputComponent } from './input.component';
// import { InfoRoutingModule } from './input-routing.module';
import { InputRoutes } from './input.routing';

@NgModule({
  imports: [
    CommonModule,
    // InfoRoutingModule
    InputRoutes
  ],
  declarations: [InputComponent]
})
export class InputModule { }
