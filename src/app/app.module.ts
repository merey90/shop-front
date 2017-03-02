import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { CarouselModule } from 'ng2-bootstrap/carousel';
import { CollapseModule } from 'ng2-bootstrap/collapse';
import { DropdownModule } from 'ng2-bootstrap/dropdown';
import { AlertModule } from 'ng2-bootstrap/alert';

import { routing } from './app.routing';

import { UserSignupActivateGuard } from './user-signup/user-signup.activate-guard';

import { CutdomainPipe } from './pipes/cutdomain.pipe';

import { ProductService } from './product/product.service';
import { SessionService } from './session/session.service';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { UserComponent } from './user/user.component';
import { SessionComponent } from './session/session.component';
import { UserSignupComponent } from './user-signup/user-signup.component';
import { UserConfirmationComponent } from './user-confirmation/user-confirmation.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductComponent,
    UserComponent,
    SessionComponent,
    CutdomainPipe,
    UserSignupComponent,
    UserConfirmationComponent
  ],
  imports: [
    BrowserModule,
    routing,
    ReactiveFormsModule,
    HttpModule,
    CarouselModule.forRoot(),
    CollapseModule.forRoot(),
    DropdownModule.forRoot(),
    AlertModule.forRoot()
  ],
  providers: [
    SessionService,
    ProductService,
    UserSignupActivateGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }