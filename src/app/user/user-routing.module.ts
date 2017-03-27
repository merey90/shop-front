import { UserSignupComponent } from './user-signup/user-signup.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserSignupActivateGuard } from './user-signup/user-signup.activate-guard';

const routes: Routes = [
  { path: '', redirectTo: 'signup', pathMatch: 'full' },
  { path: 'signup', canActivate: [UserSignupActivateGuard], component: UserSignupComponent }
];

export const routedComponents = [UserSignupComponent];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
