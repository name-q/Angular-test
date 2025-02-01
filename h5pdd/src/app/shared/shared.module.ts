import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ScrollableTabComponent } from './scrollable-tab';
import { ImageSliderComponent } from './image-slider';



@NgModule({
  declarations: [
    ScrollableTabComponent,
    ImageSliderComponent,
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    ScrollableTabComponent,
    ImageSliderComponent
  ]
})
export class SharedModule { }
