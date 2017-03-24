import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from '@angular/material';
import 'hammerjs';

import { routedComponents, ProductRoutingModule } from './product-routing.module';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';

@NgModule({
  imports: [
    CommonModule,
    ProductRoutingModule,
    FlexLayoutModule.forRoot(),
    MaterialModule.forRoot()
  ],
  declarations: [routedComponents, ProductDetailComponent]
})
export class ProductModule { }
