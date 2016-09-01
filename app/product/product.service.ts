import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Product } from './product';

@Injectable()
export class ProductService{
  private productsUrl = 'https://shop-backend-merey90.c9users.io/products';

  constructor(private http: Http) { }

  getProducts(): Promise<Product[]> {
    return this.http.get(this.productsUrl)
               .toPromise()
               .then(response => response.json() as Product[])
               .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }

}
