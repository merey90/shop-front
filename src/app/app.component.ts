import { Component, ViewChild, OnInit } from '@angular/core';
import { Validators, FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { ObservableMedia } from '@angular/flex-layout';
import { ActivatedRoute } from '@angular/router';
import { MdSnackBar, MdSnackBarRef, SimpleSnackBar, MdSidenav } from '@angular/material';

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
    public media: ObservableMedia,
    private activatedRoute: ActivatedRoute,
    private snackBar: MdSnackBar
  ) {
    this.currentYear = new Date().getFullYear();
    this.sessionService.init({
      apiBase: 'http://localhost:3000'
    });
  }

  ngOnInit() {
    this.media.subscribe(params => {
      if (['xs', 'sm', 'md'].indexOf(params.mqAlias) >= 0) {
        this.shoppingCart.mode = 'push';
      } else if (['lg', 'xl'].indexOf(params.mqAlias) >= 0) {
        this.shoppingCart.mode = 'side';
        this.shoppingCart.open();
      } else {
        this.shoppingCart.mode = 'side';
        this.shoppingCart.open();
      }
    });

    this.activatedRoute.queryParams.subscribe(params => {
      const account_confirmation_success = params['account_confirmation_success'] || false;
      if (account_confirmation_success && params['token'] != null && params['token'].length > 6) {
        this.sessionService.validateToken().subscribe(
          res => {
            this.sessionService.email.next(res.json().data.email);
            this.showSnackbar('Successfully confirmed your email!', 'success');
          },
          error => {
            let errorMessages = '';
            error.json().errors.forEach(val => errorMessages += val);
            this.showSnackbar(errorMessages, 'error');
          }
        );
      }
    });
  }

  submitSearch() {
    console.log(this.searchForm.value);
  }

  showSnackbar(message: string, status: string): void {
    let snackBarRef: MdSnackBarRef<SimpleSnackBar>;
    if (status === 'success') {
      snackBarRef = this.snackBar.open(
        message, null,
        {
          duration: 3000,
          extraClasses: [status]
        }
      );
    } else {
      snackBarRef = this.snackBar.open(
        message,
        'Close',
        {
          extraClasses: [status]
        }
      );
    }
  }
}
