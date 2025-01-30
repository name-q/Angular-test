import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { InfoComponent } from './info.component';
import { InfoRoutes } from './info.routing';
import { InfoService } from './info.service';

@NgModule({
  imports: [
    CommonModule,
    InfoRoutes,
    HttpClientModule
  ],
  declarations: [InfoComponent],
  providers:[InfoService]
})
export class InfoModule { }
