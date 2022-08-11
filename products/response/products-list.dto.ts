import { ProductGroupsDto } from './product-groups.dto';
import { ProductSizesDto } from './product-sizes.dto';
import { ProductCategoriesDto } from './product-categories.dto';
import { ProductDto } from './product.dto';

export class ProductsListDto {
  correlationId: string;

  groups: Array<ProductGroupsDto>;

  productCategories: Array<ProductCategoriesDto>;

  products: Array<ProductDto>;

  sizes: Array<ProductSizesDto>;

  revision: number;
}
