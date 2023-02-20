import { ExternalMenusDto } from './external-menus.dto';
import { PriceCategoriesDto } from './price-categories.dto';

export class ExternalMenuWithPricesResponseDto {
  correlationId: string;
  externalMenus: ExternalMenusDto[];
  priceCategories: PriceCategoriesDto[];
}