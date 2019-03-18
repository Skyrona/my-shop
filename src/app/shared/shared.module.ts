import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from "@angular/flex-layout";
import { NgModule } from '@angular/core';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [HeaderComponent],
  imports: [
    CommonModule
  ],
  exports:[
    FlexLayoutModule,
  ]
})
export class SharedModule { }
