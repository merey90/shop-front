import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { Location } from '@angular/common';
import { MdSnackBar, MdSnackBarRef, SimpleSnackBar } from '@angular/material';
import { SessionService } from './../../session/session.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html'
})
export class UserLoginComponent implements OnInit {
  EMAIL_REGEXP = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;
  PASSWORD_REGEXP = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,16}$/;
  formSubmitAttempt: boolean = false;
  submitBtnDisabled: boolean = false;
  snackBarRef: MdSnackBarRef<SimpleSnackBar>;

  input_email = new FormControl('', [
    Validators.required,
    Validators.pattern(this.EMAIL_REGEXP)
  ]);
  password = new FormControl('', [
    Validators.required,
    Validators.minLength(8),
    Validators.pattern(this.PASSWORD_REGEXP)
  ]);

  loginForm: FormGroup = this.builder.group({
    email: this.input_email,
    password: this.password
  });

  constructor(
    private sessionService: SessionService,
    private builder: FormBuilder,
    private location: Location,
    private snackBar: MdSnackBar
  ) { }

  ngOnInit() {
  }

  cancel(event) {
    event.preventDefault();
    this.location.back();
  }

  submitLogin($event) {
    event.preventDefault();
    if (!this.loginForm.valid) {
      this.formSubmitAttempt = true;
      return;
    }
    this.submitBtnDisabled = true;
    this.sessionService.signIn(this.loginForm.value).subscribe(
      res => {
        this.sessionService.email.next(res.json().data.email);
        this.location.back();
        if (this.snackBarRef) {
          this.snackBarRef.dismiss();
        }
      },
      error => {
        let errorMessages = '';
        error.json().errors.forEach(val => errorMessages += val);
        this.snackBarRef = this.snackBar.open(
          errorMessages,
          'Close',
          {
            extraClasses: ['error']
          }
        );
        this.submitBtnDisabled = false;
      }
    );
  }
}
