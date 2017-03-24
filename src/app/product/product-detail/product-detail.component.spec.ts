import { MockProductService } from './../../../testing/mockproduct.service';
import { ProductService } from './../product.service';
import { async, ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';

import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from '@angular/material';

import { Router, ActivatedRoute, ActivatedRouteStub, RouterStub } from './../../../testing/router-stubs';

import { ProductDetailComponent } from './product-detail.component';

describe('ProductDetailComponent', () => {
  let component: ProductDetailComponent;
  let fixture: ComponentFixture<ProductDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ProductDetailComponent
      ],
      providers: [
        { provide: ProductService, useClass: MockProductService },
        { provide: ActivatedRoute, useClass: ActivatedRouteStub },
        { provide: Router, useClass: RouterStub }
      ],
      imports: [
        FlexLayoutModule.forRoot(),
        MaterialModule.forRoot()
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get product details', fakeAsync(() => {
    expect(component.product.id).not.toBeNull();
  }));
});
