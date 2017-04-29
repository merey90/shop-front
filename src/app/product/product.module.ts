import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';

import { MdCardModule } from '@angular/material';

import { routedComponents, ProductRoutingModule } from './product-routing.module';

@NgModule({
  imports: [
    SharedModule,
    ProductRoutingModule,
    MdCardModule
  ],
  declarations: [routedComponents]
})
export class ProductModule { }
