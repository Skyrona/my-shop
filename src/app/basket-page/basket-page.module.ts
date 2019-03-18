import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasketPageComponent } from './basket-page.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [BasketPageComponent],
  imports: [
    CommonModule,
    SharedModule,
  ]
})
export class BasketPageModule { }
