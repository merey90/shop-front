import { destroyPlatform } from '@angular/core';
import { APP_BASE_HREF } from '@angular/common';
import { } from 'jasmine';

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
    const component = fixture.debugElement.componentInstance;
    fixture.detectChanges();
    expect(component).toBeTruthy();
  }));

  it('should set copyright year to current', async(() => {
    fixture = TestBed.createComponent(AppComponent);
    const component = fixture.debugElement.componentInstance;
    fixture.detectChanges();
    expect(component.currentYear).toEqual(new Date().getFullYear());
  }));

  it('should render year in a footer span tag', async(() => {
    fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('footer span.current-year').textContent).toContain(new Date().getFullYear());
  }));
});
