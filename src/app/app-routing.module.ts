import { UserModule } from './user/user.module';
import { ProductModule } from './product/product.module';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';

@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent },
      { path: 'products', loadChildren: 'app/product/product.module#ProductModule' },
      { path: 'users', loadChildren: 'app/user/user.module#UserModule' }
    ])
  ],
  exports: [RouterModule] // re-export the module declarations
})
export class AppRoutingModule { };
