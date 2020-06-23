import { MaterialModule } from './../material.module';
import { MainComponent } from './main/main.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule
  ],
  declarations: [MainComponent],
  exports: [MainComponent]
})
export class PagesModule { }
