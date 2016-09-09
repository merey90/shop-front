import { ProductVariety } from './product-variety';

export class Product{
  id: number;
  title: string;
  description: string;
  gender: boolean;
  price: number;
  sale: number;
  serial: number;
  product_varieties: ProductVariety[];
}
