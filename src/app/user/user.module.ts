import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { routedComponents, UserRoutingModule } from './user-routing.module';
import { UserSignupActivateGuard } from './user-signup/user-signup.activate-guard';

@NgModule({
  imports: [
    SharedModule,
    UserRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [routedComponents],
  providers: [UserSignupActivateGuard]
})
export class UserModule { }
