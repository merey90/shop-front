import { Component, OnInit } from '@angular/core';

// import { Product } from '../models/product';
// import { ProductService } from '../product/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: ['home.component.scss']
})
export class HomeComponent implements OnInit {
  // carousels: Product[] = [];
  yoloo: string;
  constructor() { }

  ngOnInit() {
    this.yoloo = 'Hello World!';
  }

  // getCarousels(): void {
  //   this.yoloo = 'hello';
  // }

}
