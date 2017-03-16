import { Component, OnInit } from '@angular/core';

import { Product } from '../product/product';
// import { ProductService } from '../product/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
  carousels: Product[] = [];
  yoloo: string;
  constructor() { }

  ngOnInit() {
    this.yoloo = "asd";
  }

  getCarousels(): void{
    this.yoloo = "hello";
  }

}
