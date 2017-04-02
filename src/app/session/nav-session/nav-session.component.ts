import { SessionService } from './../session.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-nav-session',
  templateUrl: './nav-session.component.html'
})
export class NavSessionComponent implements OnInit {
  email: string;

  constructor(
    private sessionService: SessionService
  ) { }

  ngOnInit() {
    if (this.sessionService.userSignedIn()) {
      this.sessionService.validateToken().subscribe(
        res => this.email = this.sessionService.currentUserData.email,
        error => console.log(error)
      );
    }

    this.sessionService.email.filter(x => typeof x === 'string').subscribe(
      (email: string) => this.email = email
    );
  }

  logOut() {
    this.sessionService.signOut().subscribe(
      res => console.log(res),
      error => console.log(error)
    );
  }

}
