import { Component, ViewChild, OnInit } from '@angular/core';
import { SessionService } from './session/session.service';

import { MdSidenav } from '@angular/material/sidenav';
import { ObservableMedia } from '@angular/flex-layout';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit{
  @ViewChild('shoppingCart') shoppingCart: MdSidenav;
  meddia :string = "";
  sub: any;


  constructor(
    // private sessionService: SessionService
    public media:ObservableMedia
  ) {

    // this.sessionService.init({
    //   apiBase: 'http://localhost:3000'
    // });
  }

  ngOnInit(){
    this.sub = this.media.subscribe(params => {
      this.meddia = params.mqAlias;
      if(['xs','sm','md'].indexOf(this.meddia) >= 0){
        this.shoppingCart.mode = "push";
      }
      else if(['lg','xl'].indexOf(this.meddia) >= 0){
        this.shoppingCart.mode = "side";
        this.shoppingCart.open();
      }
    });
  }

  showLog(){
    console.log("yoloo");
  }
}
