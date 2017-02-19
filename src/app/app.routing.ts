import {Routes, RouterModule } from '@angular/router';

import { UserSignupActivateGuard } from './user-signup/user-signup.activate-guard';

import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { UserSignupComponent } from './user-signup/user-signup.component';

const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'product',
    component: ProductComponent
  },
  {
    path: 'users/sign-up',
    canActivate: [UserSignupActivateGuard],
    component: UserSignupComponent
  }
]

export const routing = RouterModule.forRoot(appRoutes);
