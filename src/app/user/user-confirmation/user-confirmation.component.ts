import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SessionService } from './../../session/session.service';

@Component({
  selector: 'app-user-confirmation',
  templateUrl: './user-confirmation.component.html'
})
export class UserConfirmationComponent implements OnInit, OnDestroy {
  private sub: any;
  account_confirmation_success: boolean = false;
  private client_id: string = null;
  private config: string = null;
  private expiry: number = null;
  private token: string = null;
  private uid: string = null;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private sessionService: SessionService
  ) { }

  ngOnInit() {
    this.sub = this.activatedRoute.queryParams.subscribe(params => {
      this.account_confirmation_success = params['account_confirmation_success'] || false;
      this.client_id = params['client_id'] || null;
      this.config = params['config'] || null;
      this.expiry = params['expiry'] || null;
      this.token = params['token'] || null;
      this.uid = params['uid'] || null;
      if (this.account_confirmation_success && this.token != null && this.token.length > 6) {
        this.sessionService.validateToken().subscribe(
          res => {
            this.sessionService.email.next(res.json().data.email);
          },
          error => console.log(error)
        );
      }
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
