import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { routedComponents, ProductRoutingModule } from './product-routing.module';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';

@NgModule({
  imports: [
    CommonModule,
    ProductRoutingModule
  ],
  declarations: [routedComponents, ProductDetailComponent]
})
export class ProductModule { }
