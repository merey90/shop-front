import { Injectable } from '@angular/core';
import { Angular2TokenService, RegisterData } from 'angular2-token';
import { Http, Response } from '@angular/http';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class SessionService extends Angular2TokenService {
  public email = new Subject();
  constructor(_http: Http, _activatedRoute: ActivatedRoute, _router: Router) {
    super(_http, _activatedRoute, _router);
  }

  userHasRole(role: string): boolean {
    return role === this.currentUserData['role'];
  };

  registerAccount(registerData: RegisterData): Observable<Response>{
    let confirm_success_url = 'http://localhost:4200/users/sign-up';
    if(registerData['confirm_success_url'] != null && typeof registerData['confirm_success_url'] != undefined && registerData['confirm_success_url'].length > 0){
      confirm_success_url = registerData['confirm_success_url'];
    }
    var body = JSON.stringify({
        email: registerData.email,
        password: registerData.password,
        password_confirmation: registerData.passwordConfirmation,
        confirm_success_url: confirm_success_url
    });
    return this.post("auth", body);
  }
}
