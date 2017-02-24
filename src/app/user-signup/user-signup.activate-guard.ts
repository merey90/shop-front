import { CanActivate } from '@angular/router';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class UserSignupActivateGuard implements CanActivate {

  private prevUrl: string = "/";

  constructor(private router: Router) { }

  canActivate() {
    this.prevUrl = this.router.url;
    return true;
  }

  getPrevFullUrl(): string {
    return window.location.origin+this.prevUrl;
  }
}
