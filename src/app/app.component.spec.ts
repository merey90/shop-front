import { destroyPlatform } from '@angular/core';
import { APP_BASE_HREF } from '@angular/common';

import { TestBed, async } from '@angular/core/testing';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';

import { SessionService } from './session/session.service';
import { MockSessionService } from '../testing/mocksession.service';
import { RouterLinkStubDirective } from '../testing/router-stubs';
import { RouterOutletStubComponent } from '../testing/router-stubs';

describe('AppComponent', () => {
  let fixture;

  beforeEach(() => destroyPlatform());

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        RouterLinkStubDirective, RouterOutletStubComponent
      ],
      imports: [
        FlexLayoutModule.forRoot(),
        MaterialModule.forRoot(),
        ReactiveFormsModule
      ],
      providers: [
        { provide: SessionService, useClass: MockSessionService }
        // { provide: APP_BASE_HREF, useValue: '/' }
      ]
    });
    TestBed.compileComponents();
  });

  it('should create the app', async(() => {
    fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  // it(`should have as title 'app works!'`, async(() => {
  //   let fixture = TestBed.createComponent(AppComponent);
  //   let app = fixture.debugElement.componentInstance;
  //   expect(app.title).toEqual('app works!');
  // }));
  //
  // it('should render title in a h1 tag', async(() => {
  //   let fixture = TestBed.createComponent(AppComponent);
  //   fixture.detectChanges();
  //   let compiled = fixture.debugElement.nativeElement;
  //   expect(compiled.querySelector('h1').textContent).toContain('app works!');
  // }));
});
