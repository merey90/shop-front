import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { CarouselModule } from 'ng2-bootstrap/carousel';
import { CollapseModule } from 'ng2-bootstrap/collapse';
import { DropdownModule } from 'ng2-bootstrap/dropdown';

import { routing } from './app.routing';

import { CutdomainPipe } from './pipes/cutdomain.pipe';

import { ProductService } from './product/product.service';
import { SessionService } from './session/session.service';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { UserComponent } from './user/user.component';
import { SessionComponent } from './session/session.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductComponent,
    UserComponent,
    SessionComponent,
    CutdomainPipe
  ],
  imports: [
    BrowserModule,
    routing,
    ReactiveFormsModule,
    HttpModule,
    CarouselModule.forRoot(),
    CollapseModule.forRoot(),
    DropdownModule.forRoot()
  ],
  providers: [
    SessionService,
    ProductService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
