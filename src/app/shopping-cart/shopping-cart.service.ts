import { ProductVariety } from './../models/product-variety';
import { Observable } from 'rxjs/Observable';
import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class ShoppingCartService {
  protected path: string = 'http://localhost:3000/shopping-carts';

  constructor(private http: Http) { }

  getShoppingCart(): Observable<ProductVariety[]> {
    return this.http.get(this.path)
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
