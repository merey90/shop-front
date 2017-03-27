import { ProductSize } from './../app/models/product-size';
import { ProductColor } from './../app/models/product-color';
import { ProductImage } from './../app/models/product-image';
import { ProductVariety } from './../app/models/product-variety';
import { Product } from './../app/models/product';
import { ProductService } from './../app/product/product.service';
import { Observable } from 'rxjs/Observable';

export const PRODUCTCOLOR: ProductColor = new ProductColor(1, '#f44242', 'RED');
export const PRODUCTSIZE: ProductSize = new ProductSize(1, 'XL');
export const PRODUCTIMAGES: ProductImage[] = [
  new ProductImage(1, 'ImageTitle1', 'ImageDescription1', 'link'),
  new ProductImage(2, 'ImageTitle2', 'ImageDescription2', 'link2')
];
export const PRODUCTVARIETIES: ProductVariety[] = [
  new ProductVariety(1, 1300, 1, null, null, 0, 0, PRODUCTIMAGES, PRODUCTSIZE, PRODUCTCOLOR),
  new ProductVariety(2, 1200, 1, null, null, 0, 0, PRODUCTIMAGES, PRODUCTSIZE, PRODUCTCOLOR)
];

export const PRODUCTS: Product[] = [
  new Product(1, 'Title1', 'Description1', true, 1400, 0, 564654, PRODUCTVARIETIES),
  new Product(2, 'Title2', 'Description2', true, 1500, 0, 564655, PRODUCTVARIETIES),
  new Product(3, 'Title3', 'Description3', true, 1600, 0, 564656, PRODUCTVARIETIES),
  new Product(4, 'Title4', 'Description4', true, 1700, 0, 564657, PRODUCTVARIETIES),
  new Product(5, 'Title5', 'Description5', true, 1800, 0, 564658, PRODUCTVARIETIES),
  new Product(6, 'Title6', 'Description6', true, 1900, 0, 564659, PRODUCTVARIETIES),
  new Product(7, 'Title7', 'Description7', true, 2000, 0, 564660, PRODUCTVARIETIES),
  new Product(8, 'Title8', 'Description8', true, 2100, 0, 564661, PRODUCTVARIETIES),
  new Product(9, 'Title9', 'Description9', true, 2200, 0, 564662, PRODUCTVARIETIES),
  new Product(10, 'Title10', 'Description10', true, 2300, 0, 564663, PRODUCTVARIETIES)
];

export class MockProductService {
  products: Product[];
  product: Product;
  getProducts(): Observable<Product[]> {
    this.products = PRODUCTS;
    return Observable.of(this.products);
  }

  getProduct(id: number): Observable<Product> {
    this.product = PRODUCTS[2];
    return Observable.of(this.product);
  }
}
