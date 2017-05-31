import { Component, OnInit } from '@angular/core';
import { SessionService } from './../../session/session.service';
import { Validators, FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { UserSignupActivateGuard } from './user-signup.activate-guard';
import { Location } from '@angular/common';
import { MdSnackBar } from '@angular/material';

function duplicatePassword(input: FormControl) {
  const fGroup = input.root as FormGroup;
  if (!fGroup || !fGroup.controls) {
    return null;
  }
  const exactMatch = fGroup.controls['password'].value === input.value;
  return exactMatch ? null : { mismatchedPassword: true };
}

@Component({
  selector: 'app-user-signup',
  templateUrl: './user-signup.component.html',
  styleUrls: ['./user-signup.component.scss']
})
export class UserSignupComponent implements OnInit {
  EMAIL_REGEXP = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;
  PASSWORD_REGEXP = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,16}$/;

  // example@host.domain
  input_email = new FormControl('', [
    Validators.required,
    Validators.pattern(this.EMAIL_REGEXP)
  ]);
  password = new FormControl('', [
    Validators.required,
    Validators.minLength(8),
    Validators.pattern(this.PASSWORD_REGEXP)
  ]);
  password_confirm = new FormControl('', [
    Validators.required,
    duplicatePassword
  ]);

  signupForm: FormGroup = this.builder.group({
    email: this.input_email,
    password: this.password,
    password_confirmation: this.password_confirm,
    confirm_success_url: 'http://localhost:4200/users/sign-up'
  });

  formSubmitAttempt: boolean = false;
  submitBtnDisabled: boolean = false;
  formStatus: string = null;
  formMessage: string = null;

  constructor(
    private sessionService: SessionService,
    private builder: FormBuilder,
    private canActivate: UserSignupActivateGuard,
    private location: Location,
    private snackBar: MdSnackBar
  ) { }

  ngOnInit() {
    this.signupForm.controls['confirm_success_url'].setValue(this.canActivate.getPrevFullUrl());
  }

  submitRegister(event: Event) {
    event.preventDefault();
    if (!this.signupForm.valid) {
      this.formSubmitAttempt = true;
      return;
    }
    this.submitBtnDisabled = true;

    this.sessionService.registerAccount(this.signupForm.value).subscribe(
      res => {
        this.formStatus = res.json().status;
        this.formMessage = 'Before signing-in please verify your email address.';
        this.showSnackbar(this.formMessage, this.formStatus, res.json().data.email);
        this.submitBtnDisabled = false;
      },
      error => {
        this.formMessage = '';
        if (typeof error.status !== 'undefined' && error.status === 0) {
          this.formMessage = 'Sorry, there is a connection problem. Please try again later.';
          this.formStatus = 'error';
          this.showSnackbar(this.formMessage, this.formStatus);
        } else {
          this.formStatus = error.json().status;
          this.formMessage = error.json().errors.full_messages.map(err => this.formMessage += err + '. ');
          this.showSnackbar(this.formMessage, this.formStatus);
        }
        this.submitBtnDisabled = false;
      }
    );
  }

  cancel(event) {
    event.preventDefault();
    this.location.back();
  }

  showSnackbar(message: string, status: string, email: string = ''): void {
    const snackBarRef = this.snackBar.open(
      message,
      status === 'success' ? 'Check email' : 'Close',
      {
        extraClasses: [status]
      }
    );
    if (status === 'success') {
      snackBarRef.onAction().subscribe(() => {
        window.open('https://' + email.split('@')[1], '_blank');
      });
    }
  }
}
