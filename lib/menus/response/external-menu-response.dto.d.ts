export declare class ExternalMenuResponseDto {
    id: number;
    name: string;
    description: string;
    itemCategories: ItemCategory[];
}
export declare class ItemCategory {
    items: ItemCategoryItem[];
    id: number;
    name: string;
    description: string;
    buttonImageUrl: string;
    headerImageUrl: string;
    iikoGroupId: string | number;
}
export declare class ItemCategoryItem {
    itemSizes: ItemSize[];
    sku: string;
    name: string;
    description: string;
    allergenGroups: AllergenGroup[];
    itemId: string;
    modifierSchemaId: string;
    taxCategory: TaxCategory;
    orderItemType: "Product" | "Compound";
    tags: Tag[];
    labels: string[];
    modifierSchemaName: string;
    canBeDivided: boolean;
    canSetOpenPrice: boolean;
    useBalanceForSell: boolean;
    measureUnit: string;
}
export declare class AllergenGroup {
    id: string;
    code: string;
    name: string;
}
export declare class ItemSize {
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
export declare class ItemModifierGroup {
    items: ItemModifierGroupItem[];
    name: string;
    description: string;
    restrictions: Restrictions;
    canBeDivided: boolean;
    itemGroupId: string;
    childModifiersHaveMinMaxRestrictions: boolean;
    sku: string;
}
export declare class ItemModifierGroupItem {
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
export declare class NutritionPerHundredGrams {
    fats: number;
    proteins: number;
    carbs: number;
    energy: number;
    organizations: string[];
}
export declare class Price {
    organizationId: string;
    price: number;
}
export declare class Restrictions {
    minQuantity: number;
    maxQuantity: number;
    freeQuantity: number;
    byDefault: number;
}
export declare class Tag {
    id: string;
    name: string;
}
export declare class TaxCategory {
    id: string;
    name: string;
    percentage: number;
}
