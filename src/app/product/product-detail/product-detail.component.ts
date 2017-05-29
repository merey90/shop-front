import { ProductService } from './../product.service';
import { Product } from './../../models/product';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styles: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  product: Product;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private productService: ProductService
  ) { }

  ngOnInit() {
    this.route.params.subscribe(p => this.getProductDetails(p && p['id']));
  }

  getProductDetails(id: string): void {
    if (!id) {
      console.log('MUST PROVIDE ID');
      return;
    }

    this.productService.getProduct(+id).subscribe(product => {
      if (product) {
        this.product = product;
      } else {
        this.gotoList();
      }
    });
  }

  gotoList() {
    this.router.navigate(['../'], {relativeTo: this.route});
  }

}
