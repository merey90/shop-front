import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { routedComponents, ProductRoutingModule } from './product-routing.module';
import { ProductListComponent } from './product-list/product-list.component';

@NgModule({
  imports: [
    CommonModule,
    ProductRoutingModule
  ],
  declarations: [routedComponents]
})
export class ProductModule { }
