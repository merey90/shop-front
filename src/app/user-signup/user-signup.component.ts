import { Component, OnInit } from '@angular/core';
import { SessionService } from '../session/session.service';
import { Validators, FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { UserSignupActivateGuard } from './user-signup.activate-guard';
import { Location } from '@angular/common';

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
  templateUrl: './user-signup.component.html'
})
export class UserSignupComponent implements OnInit {
  EMAIL_REGEXP = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;
  PASSWORD_REGEXP = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,16}$/;
  input_email = new FormControl('',[
    Validators.required,
    Validators.pattern(this.EMAIL_REGEXP)
  ]);
  password = new FormControl('',[
    Validators.required,
    Validators.minLength(8),
    Validators.pattern(this.PASSWORD_REGEXP)
  ]);
  password_confirm = new FormControl('',[
    Validators.required,
    duplicatePassword
  ]);
  //example@host.domain

  signupForm: FormGroup = this.builder.group({
    email: this.input_email,
    password: this.password,
    password_confirmation: this.password_confirm,
    confirm_success_url: '/'
  });

  formSubmitAttempt = false;
  submitBtnDisabled = false;
  formStatus = null;
  formMessage = null;

  constructor(
    private sessionService: SessionService,
    private builder: FormBuilder,
    private canActivate: UserSignupActivateGuard,
    private location: Location
  ) { }

  ngOnInit() {
    this.signupForm.controls['confirm_success_url'].setValue(this.canActivate.getPrevUrl());
  }

  submitRegister() {
    if(!this.signupForm.valid){
      this.formSubmitAttempt = true;
      return;
    }
    this.submitBtnDisabled = true;
    this.sessionService.registerAccount(this.signupForm.value).subscribe(
      res => {
        this.formStatus = res.json().status;
        this.formMessage = "Before signing-in please verify your email address at "+res.json().data.email+".";
        this.submitBtnDisabled = false;
      },
      error => {
        this.formStatus = error.json().status;
        this.formMessage = '';
        this.formMessage = error.json().errors.full_messages.map(err => this.formMessage+=err+". ");
        this.submitBtnDisabled = false;
      }
    );
  }

  cancel(){
    this.location.back();
  }
}
