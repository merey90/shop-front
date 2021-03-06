import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';

import { Product } from '../models/product';

@Injectable()
export class ProductService {
  protected path: string = 'http://localhost:3000/products';

  constructor(private http: Http) { }

  getProducts(): Observable<Product[]> {
    return this.http.get(this.path)
      .map(this.extractData)
      .catch(this.handleError);
  }

  getProduct(id: number): Observable<Product> {
    return this.http.get(this.path + '/' + id)
      .map(this.extractData)
      .catch(this.handleError);
  }

  private extractData(res: Response) {
    if (res.status < 200 || res.status >= 300) {
      throw new Error('Bad response status: ' + res.status);
    }
    const body = res.json();
    return body || {};
  }

  private handleError(error: any): Observable<any> {
    const errMsg = error.message || 'Server error';
    console.error('An error occurred', error);
    return Observable.throw(errMsg);
  }
}
