export class ExternalMenuResponseDto {
    id:              number;
    name:            string;
    description:     string;
    itemCategories:  ItemCategory[];
}

class ItemCategory {
    items:          ItemCategoryItem[];
    id:             number;
    name:           string;
    description:    string;
    buttonImageUrl: string;
    headerImageUrl: string;
}

class ItemCategoryItem {
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

class AllergenGroup {
    id:   string;
    code: string;
    name: string;
}

class ItemSize {
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

class ItemModifierGroup {
    items:                                ItemModifierGroupItem[];
    name:                                 string;
    description:                          string;
    restrictions:                         Restrictions;
    canBeDivided:                         boolean;
    itemGroupId:                          string;
    childModifiersHaveMinMaxRestrictions: boolean;
    sku:                                  string;
}

class ItemModifierGroupItem {
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

class NutritionPerHundredGrams {
}

class Price {
    organizationId: string;
    price:          number;
}

class Restrictions {
    minQuantity:  number;
    maxQuantity:  number;
    freeQuantity: number;
    byDefault:    number;
}

class Tag {
    id:   string;
    name: string;
}

class TaxCategory {
    id:         string;
    name:       string;
    percentage: number;
}