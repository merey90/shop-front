import { destroyPlatform } from '@angular/core';

import { TestBed, async, ComponentFixture } from '@angular/core/testing';
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
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let sessionService: MockSessionService;

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
      ]
    })
      .compileComponents()
      .then(() => {
        fixture = TestBed.createComponent(AppComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
      });
  });

  it('should create the app', async(() => {
    expect(component).toBeTruthy();
  }));

  it('can instantiate it', () => {
    expect(component).not.toBeNull();
  });

  it('shoild init sessionService with apiBase', async(() => {
    fixture.detectChanges();
    sessionService = TestBed.get(SessionService);
    expect(sessionService.getApiBase()).toEqual('http://localhost:3000');
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
