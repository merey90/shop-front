import { Component, OnInit } from '@angular/core';

import { Product } from '../product/product';
import { ProductService } from '../product/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
carousels: Product[] = [];
  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.getCarousels();
  }

  getCarousels(): void{
    this.productService.getCarouselProducts().then(carousels => this.carousels = carousels)
  }

}
