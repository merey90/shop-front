import { ProductImage } from './product-image';
import { ProductSize } from './product-size';
import { ProductColor } from './product-color';

export class ProductVariety {
  constructor(
    public id: number,
    public cost: number,
    public product_id: number,
    public sold_price: number,
    public sold_tariff: number,
    public status: number,
    public tariff: number,
    public product_images: ProductImage[],
    public product_size: ProductSize,
    public product_color: ProductColor
  ) { };
}
