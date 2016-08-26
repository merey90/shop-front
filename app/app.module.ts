import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent }  from './app.component';
import { routing } from './app.routing';

import { HomeComponent } from './home/home.component';
import { ProductComponent }  from './product/product.component';

import { ProductService } from './product/product.service';

@NgModule({
  imports: [
    BrowserModule,
    routing,
    FormsModule,
    HttpModule
   ],
  providers: [
    ProductService
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    ProductComponent
   ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
