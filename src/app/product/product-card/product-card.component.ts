import { Router } from '@angular/router';
import { Product } from './../../models/product';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {

  @Input() product: Product;

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  goToProduct(): void {
    this.router.navigate(['/products', this.product.id]);
  }

  putToCart(event) {
    event.stopPropagation();
    console.log(this.product);
  }
}
