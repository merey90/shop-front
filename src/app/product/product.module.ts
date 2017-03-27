import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from '@angular/material';
import 'hammerjs';

import { routedComponents, ProductRoutingModule } from './product-routing.module';

@NgModule({
  imports: [
    CommonModule,
    ProductRoutingModule,
    FlexLayoutModule.forRoot(),
    MaterialModule.forRoot()
  ],
  declarations: [routedComponents]
})
export class ProductModule { }
