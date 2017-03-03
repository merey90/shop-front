import { Component } from '@angular/core';
import { SessionService } from './session/session.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  public isCollapsed: boolean = true;
  title :string = "app works!";

  constructor(
    // private sessionService: SessionService
  ) {
    // this.sessionService.init({
    //   apiBase: 'http://localhost:3000'
    // });
  }

}
