import { NgModule } from '@angular/core';
import { CommonModule, NgClass } from '@angular/common';
import { InputComponent } from './input.component';
import { InfoRoutingModule } from './input-routing.module';

@NgModule({
  imports: [
    CommonModule,
    InfoRoutingModule
  ],
  declarations: [InputComponent]
})
export class InputModule { }
