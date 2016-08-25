import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { routing } from './app.routing';

import { HomeComponent } from './home/home.component';
import { ProductComponent }  from './product/product.component';

@NgModule({
  imports:      [
    BrowserModule,
    routing
   ],
  declarations: [
    AppComponent,
    HomeComponent,
    ProductComponent
   ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
