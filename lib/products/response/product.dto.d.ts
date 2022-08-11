import { ProductPriceSizeDto } from './product-price-size.dto';
import { ProductModifiersDto } from './product-modifiers.dto';
import { ProductGroupModifierDto } from './product-group-modifier.dto';
export declare enum ProductType {
    PRODUCT = "Product",
    COMPOUND = "Compound"
}
export declare class ProductDto {
    fatAmount?: number;
    proteinsAmount?: number;
    carbohydratesAmount?: number;
    energyAmount?: number;
    fatFullAmount?: number;
    proteinsFullAmount?: number;
    carbohydratesFullAmount?: number;
    energyFullAmount?: number;
    weight?: number;
    groupId?: string;
    productCategoryId?: string;
    type?: string;
    orderItemType?: ProductType;
    modifierSchemaId?: string;
    modifierSchemaName?: string;
    splittable: boolean;
    measureUnit?: string;
    sizePrices: Array<ProductPriceSizeDto>;
    modifiers: Array<ProductModifiersDto>;
    groupModifiers: Array<ProductGroupModifierDto>;
    imageLinks: Array<string>;
    doNotPrintInCheque: boolean;
    parentGroup: string;
    order: number;
    fullNameEnglish?: string;
    useBalanceForSell: boolean;
    canSetOpenPrice: boolean;
    id: string;
    code?: string;
    name: string;
    description?: string;
    additionalInfo?: string;
    tags: Array<string>;
    isDeleted: boolean;
    seoDescription?: string;
    seoText?: string;
    seoKeywords?: string;
    seoTitle?: string;
}
