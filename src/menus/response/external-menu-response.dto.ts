export class ExternalMenuResponseDto {
    id:              number;
    name:            string;
    description:     string;
    itemCategories:  ItemCategory[];
}

export class ItemCategory {
    items:          ItemCategoryItem[];
    id:             number;
    name:           string;
    description:    string;
    buttonImageUrl: string;
    headerImageUrl: string;
}

export class ItemCategoryItem {
    itemSizes:        ItemSize[];
    sku:              string;
    name:             string;
    description:      string;
    allergenGroups:   AllergenGroup[];
    itemId:           string;
    modifierSchemaId: string;
    taxCategory:      TaxCategory;
    orderItemType:    string;
}

export class AllergenGroup {
    id:   string;
    code: string;
    name: string;
}

export class ItemSize {
    prices:                   Price[];
    itemModifierGroups:       ItemModifierGroup[];
    sku:                      string;
    sizeCode:                 string;
    sizeName:                 string;
    isDefault:                boolean;
    portionWeightGrams:       number;
    sizeId:                   string;
    nutritionPerHundredGrams: NutritionPerHundredGrams;
    buttonImageUrl:           string;
    buttonImageCroppedUrl:    string[];
}

export class ItemModifierGroup {
    items:                                ItemModifierGroupItem[];
    name:                                 string;
    description:                          string;
    restrictions:                         Restrictions;
    canBeDivided:                         boolean;
    itemGroupId:                          string;
    childModifiersHaveMinMaxRestrictions: boolean;
    sku:                                  string;
}

export class ItemModifierGroupItem {
    prices:                   Price[];
    sku:                      string;
    name:                     string;
    description:              string;
    buttonImage:              string;
    restrictions:             Restrictions;
    allergenGroups:           AllergenGroup[];
    nutritionPerHundredGrams: NutritionPerHundredGrams;
    portionWeightGrams:       number;
    tags:                     Tag[];
    itemId:                   string;
}

export class NutritionPerHundredGrams {
}

export class Price {
    organizationId: string;
    price:          number;
}

export class Restrictions {
    minQuantity:  number;
    maxQuantity:  number;
    freeQuantity: number;
    byDefault:    number;
}

export class Tag {
    id:   string;
    name: string;
}

export class TaxCategory {
    id:         string;
    name:       string;
    percentage: number;
}