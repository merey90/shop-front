import { Injectable } from '@angular/core';
import { Angular2TokenService } from 'angular2-token';
import { Http } from '@angular/http';
import { ActivatedRoute, Router } from '@angular/router';

@Injectable()
export class SessionService extends Angular2TokenService {
  constructor(_http: Http, _activatedRoute: ActivatedRoute, _router: Router) {
    super(_http, _activatedRoute, _router);
  }

  userHasRole(role: string): boolean {
    return role === this.currentUserData['role'];
  };
}
