import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import 'hammerjs';

import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';

import { CutdomainPipe } from './pipes/cutdomain.pipe';

import { ProductService } from './product/product.service';
import { SessionService } from './session/session.service';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavSessionComponent } from './session/nav-session/nav-session.component';
import { SidenavSessionComponent } from './session/sidenav-session/sidenav-session.component';
// import { SessionComponent } from './session/session.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavSessionComponent,
    SidenavSessionComponent,
    // SessionComponent,
    CutdomainPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpModule,
    FlexLayoutModule.forRoot(),
    MaterialModule.forRoot(),
    BrowserAnimationsModule
  ],
  providers: [
    SessionService,
    ProductService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
