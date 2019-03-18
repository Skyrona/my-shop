import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticlePageComponent } from './article-page.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [ArticlePageComponent],
  imports: [
    CommonModule,
    SharedModule,
  ]
})
export class ArticlePageModule { }
