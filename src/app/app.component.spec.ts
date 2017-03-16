/* tslint:disable:no-unused-variable */
import { destroyPlatform } from '@angular/core';

import { TestBed, async } from '@angular/core/testing';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { SessionService } from './session/session.service';
import { MockSessionService } from "../testing/mocksession.service";

describe('AppComponent', () => {
  let fixture;

  beforeEach(() => destroyPlatform());

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      imports: [
        FlexLayoutModule.forRoot(),
        MaterialModule.forRoot(),
        ReactiveFormsModule
      ],
      providers: [
        {provide: SessionService, useClass: MockSessionService}
      ]
    });
    TestBed.compileComponents();
  });

  it('should create the app', async(() => {
    fixture = TestBed.createComponent(AppComponent);
    let app = fixture.debugElement.componentInstance;
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
