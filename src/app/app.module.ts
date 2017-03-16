import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from '@angular/material';
import 'hammerjs';

import { RouterModule }  from '@angular/router';
import { AppRoutingModule } from './app-routing.module';

// import { UserSignupActivateGuard } from './user-signup/user-signup.activate-guard';
//
// import { CutdomainPipe } from './pipes/cutdomain.pipe';
//
// import { ProductService } from './product/product.service';
import { SessionService } from './session/session.service';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
// import { ProductComponent } from './product/product.component';
// import { UserComponent } from './user/user.component';
// import { SessionComponent } from './session/session.component';
// import { UserSignupComponent } from './user-signup/user-signup.component';
// import { UserConfirmationComponent } from './user-confirmation/user-confirmation.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
    // ProductComponent,
    // UserComponent,
    // SessionComponent,
    // CutdomainPipe,
    // UserSignupComponent,
    // UserConfirmationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpModule,
    FlexLayoutModule.forRoot(),
    MaterialModule.forRoot()
  ],
  providers: [
    SessionService,
    // ProductService,
    // UserSignupActivateGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
