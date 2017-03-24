import { ProductVariety } from './product-variety';

export class Product {
  constructor(
    public id: number,
    public title: string,
    public description: string,
    public gender: boolean,
    public price: number,
    public sale: number,
    public serial: number,
    public product_varieties: ProductVariety[]
  ) { };
}
