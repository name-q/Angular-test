import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ImageSliderComponent, ScrollableTabComponent, TestComponent } from './components';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [	
    AppComponent,
    ScrollableTabComponent,
    ImageSliderComponent,
    TestComponent,
   ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
