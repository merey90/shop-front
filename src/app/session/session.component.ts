import { Component, OnInit } from '@angular/core';
import { SessionService } from './session.service';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-session',
  templateUrl: './session.component.html'
})
export class SessionComponent implements OnInit {
  input_email = new FormControl('');
  password = new FormControl('');
  name: string = null;
  email: string = null;

  loginForm: FormGroup = this.builder.group({
    email: this.input_email,
    password: this.password
  });

  constructor(
    private sessionService: SessionService,
    private builder: FormBuilder
  ) { }

  ngOnInit() {
    if (this.sessionService.userSignedIn()) {
      this.sessionService.validateToken().subscribe(
        res => this.email = this.sessionService.currentUserData.email,
        error => console.log(error)
      );
    }

    this.sessionService.email.filter(x => typeof x === "string").subscribe(
      (email: string) => this.email = email
    );
  }

  signIn() {
    this.sessionService.signIn(this.loginForm.value).subscribe(
      res => {
        this.email = res.json().data.email;
      },
      error => console.log(error)
    );
  }

  signOut() {
    this.sessionService.signOut().subscribe(
      res => console.log(res),
      error => console.log(error)
    );
  }

  showInfo(event) {
    event.preventDefault();
    console.log(this.sessionService.currentUserData);
  }

  checkRole(event) {
    event.preventDefault();
    console.log(this.sessionService.userHasRole('0'));
    console.log(this.sessionService.userHasRole('1'));
    console.log(this.sessionService.userHasRole('2'));
  }

}
