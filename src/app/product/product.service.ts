import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';

import { Product } from '../models/product';

@Injectable()
export class ProductService {
  protected productsUrl: string = 'http://localhost:3000/products';

  constructor(private http: Http) { }

  getProducts(): Observable<Product[]> {
    return this.http.get(this.productsUrl)
      .map(this.extractData)
      .catch(this.handleError);
  }

  private extractData(res: Response) {
    if (res.status < 200 || res.status >= 300) {
      throw new Error('Bad response status: ' + res.status);
    }
    // tslint:disable-next-line:prefer-const
    let body = res.json();
    // return body.data || { };
    return body || {};
  }

  private handleError(error: any): Observable<any> {
    // tslint:disable-next-line:prefer-const
    let errMsg = error.message || 'Server error';
    console.error('An error occurred', error);
    return Observable.throw(errMsg);
  }
}
