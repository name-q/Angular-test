import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ScrollableTabComponent } from './scrollable-tab';
import { ImageSliderComponent } from './image-slider';
import { HorizontalGrideComponent } from './horizontal-gride';
import { GridItemDirective, GridItemImageDirective, GridItemTitleDirective } from './directives';
import { FormatDatePipe } from './pipes';



@NgModule({
  declarations: [
    ScrollableTabComponent,
    ImageSliderComponent,
    HorizontalGrideComponent,
    GridItemDirective,
    GridItemImageDirective,
    GridItemTitleDirective,
    FormatDatePipe,
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    ScrollableTabComponent,
    ImageSliderComponent,
    HorizontalGrideComponent,
    GridItemDirective,
    GridItemImageDirective,
    GridItemTitleDirective,
    FormatDatePipe,
  ]
})
export class SharedModule { }
