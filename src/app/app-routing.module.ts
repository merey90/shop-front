import { NgModule }       from '@angular/core';
import { RouterModule } from '@angular/router';

import { UserSignupActivateGuard } from './user-signup/user-signup.activate-guard';

import { HomeComponent } from './home/home.component';
// import { ProductComponent } from './product/product.component';
// import { UserSignupComponent } from './user-signup/user-signup.component';
// import { UserConfirmationComponent } from './user-confirmation/user-confirmation.component';

@NgModule({
  imports: [
    RouterModule.forRoot([
      {
        path: '', redirectTo: 'home', pathMatch: 'full'
      },
      {
        path: 'home',
        component: HomeComponent
      }
      // {
      //   path: 'product',
      //   component: ProductComponent
      // },
      // {
      //   path: 'users/sign-up',
      //   canActivate: [UserSignupActivateGuard],
      //   component: UserSignupComponent
      // }
    ])
  ],
  exports: [RouterModule] // re-export the module declarations
})
export class AppRoutingModule { };
