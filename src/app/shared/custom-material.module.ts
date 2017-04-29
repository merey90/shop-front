import { NgModule } from '@angular/core';
import {
  MdButtonModule,
  MdSidenavModule,
  MdMenuModule,
  MdInputModule,
  MdSnackBarModule,
  MdIconModule,
  MdCardModule
} from '@angular/material';

@NgModule({
  imports: [
    MdButtonModule,
    MdSidenavModule,
    MdMenuModule,
    MdInputModule,
    MdSnackBarModule,
    MdIconModule,
    MdCardModule
  ],
  exports: [
    MdButtonModule,
    MdSidenavModule,
    MdMenuModule,
    MdInputModule,
    MdSnackBarModule,
    MdIconModule,
    MdCardModule
  ],
})
export class CustomMaterialModule { }
