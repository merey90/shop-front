import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SidenavSessionComponent } from './sidenav-session.component';

describe('SidenavSessionComponent', () => {
  let component: SidenavSessionComponent;
  let fixture: ComponentFixture<SidenavSessionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SidenavSessionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidenavSessionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
