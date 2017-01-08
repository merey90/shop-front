import { ProductImage } from './product-image';
import { ProductSize } from './product-size';
import { ProductColor } from './product-color';

export class ProductVariety{
  id: number;
  cost: number;
  product_id: number;
  sold_price: number;
  sold_tariff: number;
  status: number;
  tariff: number;
  product_images: ProductImage[];
  product_size: ProductSize;
  product_color: ProductColor;
}
