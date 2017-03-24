import { MockProductService } from './../../../testing/mockproduct.service';
import { ProductService } from './../product.service';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RouterLinkStubDirective } from './../../../testing/router-stubs';
import { RouterOutletStubComponent } from './../../../testing/router-stubs';

import { ProductDetailComponent } from './product-detail.component';

describe('ProductDetailComponent', () => {
  let component: ProductDetailComponent;
  let fixture: ComponentFixture<ProductDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ProductDetailComponent,
        RouterLinkStubDirective,
        RouterOutletStubComponent
      ],
      providers: [
        { provide: ProductService, useClass: MockProductService }
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
});
