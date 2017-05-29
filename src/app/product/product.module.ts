import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';

import { routedComponents, ProductRoutingModule } from './product-routing.module';

@NgModule({
  imports: [
    SharedModule,
    ProductRoutingModule
  ],
  declarations: [routedComponents]
})
export class ProductModule { }
