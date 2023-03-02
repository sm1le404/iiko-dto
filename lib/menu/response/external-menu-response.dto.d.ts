export declare class ExternalMenuResponseDto {
    id: number;
    name: string;
    description: string;
    itemCategories: ItemCategory[];
}
declare class ItemCategory {
    items: ItemCategoryItem[];
    id: number;
    name: string;
    description: string;
    buttonImageUrl: string;
    headerImageUrl: string;
}
declare class ItemCategoryItem {
    itemSizes: ItemSize[];
    sku: string;
    name: string;
    description: string;
    allergenGroups: AllergenGroup[];
    itemId: string;
    modifierSchemaId: string;
    taxCategory: TaxCategory;
    orderItemType: string;
}
declare class AllergenGroup {
    id: string;
    code: string;
    name: string;
}
declare class ItemSize {
    prices: Price[];
    itemModifierGroups: ItemModifierGroup[];
    sku: string;
    sizeCode: string;
    sizeName: string;
    isDefault: boolean;
    portionWeightGrams: number;
    sizeId: string;
    nutritionPerHundredGrams: NutritionPerHundredGrams;
    buttonImageUrl: string;
    buttonImageCroppedUrl: string[];
}
declare class ItemModifierGroup {
    items: ItemModifierGroupItem[];
    name: string;
    description: string;
    restrictions: Restrictions;
    canBeDivided: boolean;
    itemGroupId: string;
    childModifiersHaveMinMaxRestrictions: boolean;
    sku: string;
}
declare class ItemModifierGroupItem {
    prices: Price[];
    sku: string;
    name: string;
    description: string;
    buttonImage: string;
    restrictions: Restrictions;
    allergenGroups: AllergenGroup[];
    nutritionPerHundredGrams: NutritionPerHundredGrams;
    portionWeightGrams: number;
    tags: Tag[];
    itemId: string;
}
declare class NutritionPerHundredGrams {
}
declare class Price {
    organizationId: string;
    price: number;
}
declare class Restrictions {
    minQuantity: number;
    maxQuantity: number;
    freeQuantity: number;
    byDefault: number;
}
declare class Tag {
    id: string;
    name: string;
}
declare class TaxCategory {
    id: string;
    name: string;
    percentage: number;
}
export {};
