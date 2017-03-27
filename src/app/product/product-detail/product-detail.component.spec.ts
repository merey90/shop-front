import { ProductModule } from './../product.module';
import { Product } from './../../models/product';
import { MockProductService, PRODUCTS } from './../../../testing/mockproduct.service';
import { ProductService } from './../product.service';
import { async, ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';

import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from '@angular/material';

import { Router, ActivatedRoute, ActivatedRouteStub, RouterStub } from './../../../testing/router-stubs';

import { ProductDetailComponent } from './product-detail.component';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

let activatedRoute: ActivatedRouteStub;
const products: Product[] = PRODUCTS;
let component: ProductDetailComponent;
let fixture: ComponentFixture<ProductDetailComponent>;
let page: Page;

describe('ProductDetailComponent', () => {
  beforeEach(() => {
    activatedRoute = new ActivatedRouteStub();
  });
  describe('with ProductModule setup', productModuleSetup);
});

function productModuleSetup() {
  const someProduct: Product = products[2];

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [
        { provide: ProductService, useClass: MockProductService },
        { provide: ActivatedRoute, useValue: activatedRoute },
        { provide: Router, useClass: RouterStub }
      ],
      imports: [
        ProductModule,
        FlexLayoutModule.forRoot(),
        MaterialModule.forRoot()
      ]
    })
      .compileComponents();
  }));

  describe('when navigate to existing Product', () => {
    let expectedProduct: Product;

    beforeEach(async(() => {
      expectedProduct = someProduct;
      activatedRoute.testParams = { id: expectedProduct.id };
      createComponent();
    }));

    it('should display product title', () => {
      expect(page.nameDisplay.textContent).toBe(expectedProduct.title);
    });
  });

  describe('when navigate to non-existing Product', () => {
    beforeEach( async(() => {
      activatedRoute.testParams = { id: 99999 };
      createComponent();
    }));

    it('should try to navigate back to product list', () => {
      expect(page.gotoSpy.calls.any()).toBe(true, 'comp.gotoList called');
      expect(page.navSpy.calls.any()).toBe(true, 'router.navigate called');
    });
  });
}

function createComponent() {
  fixture = TestBed.createComponent(ProductDetailComponent);
  component = fixture.componentInstance;
  page = new Page();

  // 1st change detection triggers ngOnInit which gets a product
  fixture.detectChanges();
  return fixture.whenStable().then(() => {
    // 2nd change detection displays the async-fetched product
    fixture.detectChanges();
    page.addPageElements();
  });
}

class Page {
  gotoSpy: jasmine.Spy;
  navSpy: jasmine.Spy;

  editBtn: DebugElement;
  removeBtn: DebugElement;
  nameDisplay: HTMLElement;

  constructor() {
    const router = TestBed.get(Router); // get router from root injector
    this.gotoSpy = spyOn(component, 'gotoList').and.callThrough();
    this.navSpy = spyOn(router, 'navigate');
  }

  /** Add page elements after product arrives */
  addPageElements() {
    if (component.product) {
      // have a product so these elements are now in the DOM
      const buttons = fixture.debugElement.queryAll(By.css('button'));
      this.editBtn = buttons[0];
      this.removeBtn = buttons[1];
      this.nameDisplay = fixture.debugElement.query(By.css('md-card-title')).nativeElement;
    }
  }
}
