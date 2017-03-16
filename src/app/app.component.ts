import { Component, ViewChild, OnInit } from '@angular/core';
import { Validators, FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { MdSidenav } from '@angular/material/sidenav';
import { ObservableMedia } from '@angular/flex-layout';

import { SessionService } from './session/session.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  @ViewChild('shoppingCart') shoppingCart: MdSidenav;
  currentYear: number = 2017;
  input_search = new FormControl('', [
    Validators.required
  ]);

  searchForm: FormGroup = this.builder.group({
    input_search: this.input_search
  });

  constructor(
    private sessionService: SessionService,
    private builder: FormBuilder,
    public media: ObservableMedia
  ) {
    this.currentYear = new Date().getFullYear();
    this.sessionService.init({
      apiBase: 'http://localhost:3000'
    });
  }

  ngOnInit() {
    this.media.subscribe(params => {
      if (['xs', 'sm', 'md'].indexOf(params.mqAlias) >= 0) {
        this.shoppingCart.mode = "push";
      }
      else if (['lg', 'xl'].indexOf(params.mqAlias) >= 0) {
        this.shoppingCart.mode = "side";
        this.shoppingCart.open();
      }
      else {
        this.shoppingCart.mode = "side";
        this.shoppingCart.open();
      }
    });
  }

  submitSearch() {
    console.log(this.searchForm.value);
  }

  showLog() {
    console.log("yoloo");
  }
}
