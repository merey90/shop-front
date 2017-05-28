import { CustomMaterialModule } from './custom-material.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [
    CommonModule,
    CustomMaterialModule
  ],
  exports: [
    CommonModule,
    CustomMaterialModule
  ],
  declarations: []
})
export class SharedModule { }
