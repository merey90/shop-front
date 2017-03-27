import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from '@angular/material';
import 'hammerjs';

import { routedComponents, UserRoutingModule } from './user-routing.module';
import { UserSignupActivateGuard } from './user-signup/user-signup.activate-guard';

@NgModule({
  imports: [
    CommonModule,
    UserRoutingModule,
    ReactiveFormsModule,
    FlexLayoutModule.forRoot(),
    MaterialModule.forRoot(),
  ],
  declarations: [routedComponents],
  providers: [UserSignupActivateGuard]
})
export class UserModule { }
