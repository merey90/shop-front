import { MockProductService, PRODUCTS } from './../../../testing/mockproduct.service';
import { ProductService } from './../product.service';
import { async, ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { Router, RouterStub } from './../../../testing/router-stubs';
import { newEvent } from './../../../testing/index';

import { ProductListComponent } from './product-list.component';


describe('ProductListComponent', () => {
  let component: ProductListComponent;
  let fixture: ComponentFixture<ProductListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ProductListComponent
      ],
      providers: [
        { provide: ProductService, useClass: MockProductService },
        { provide: Router, useClass: RouterStub }
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have products properties not empty', () => {
    expect(component.products.length).toBeGreaterThan(9);
  });

  it('should have several products', () => {
    const compiled = fixture.debugElement.queryAll(By.css('.product-container'));
    expect(compiled.length).toBeGreaterThan(9);
  });

  it('should navigate to selected product detail on click', fakeAsync(() => {
    const index = 1;
    const expectedProduct = PRODUCTS[index];
    const productContainer = fixture.debugElement.queryAll(By.css('.product-container')).map(de => de.nativeElement)[index];
    const router = fixture.debugElement.injector.get(Router);
    const navSpy: jasmine.Spy = spyOn(router, 'navigate');
    productContainer.dispatchEvent(newEvent('click'));
    tick();

    // should have navigated
    expect(navSpy.calls.any()).toBe(true, 'navigate called');

    // composed hero detail will be URL like 'heroes/42'
    // expect link array with the route path and hero id
    // first argument to router.navigate is link array
    const navArgs = navSpy.calls.first().args[0];
    expect(navArgs[0]).toContain('products', 'nav to heroes detail URL');
    expect(navArgs[1]).toBe(expectedProduct.id, 'expected product.id');

  }));
});
