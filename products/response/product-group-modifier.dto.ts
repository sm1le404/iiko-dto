import { ProductModifiersDto } from './product-modifiers.dto';

export declare class ProductGroupModifierDto {
  id: string;

  minAmount: number;

  maxAmount: number;

  required: boolean;

  childModifiersHaveMinMaxRestrictions?: boolean;

  childModifiers: Array<ProductModifiersDto>;

  hideIfDefaultAmount: boolean;

  defaultAmount: number;

  splittable: boolean;

  freeOfChargeAmount: number;
}
