import { Component, OnInit } from '@angular/core';

import { Product } from './product';
import { ProductService } from './product.service';

@Component({
  selector: 'product-component',
  templateUrl: 'app/product/product.component.html'
})
export class ProductComponent implements OnInit{
  products: Product[] = [];

  constructor(
    private productService: ProductService
  ){}

  ngOnInit(): void{
    this.getProducts();
  }

  getProducts(): void{
    this.productService.getProducts().then(products => this.products = products);
  }
}
