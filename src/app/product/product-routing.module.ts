import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductCardComponent } from './product-card/product-card.component';

const routes: Routes = [
  { path: '', component: ProductListComponent},
  { path: ':id', component: ProductDetailComponent}
];

export const routedComponents = [ProductListComponent, ProductDetailComponent, ProductCardComponent];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
