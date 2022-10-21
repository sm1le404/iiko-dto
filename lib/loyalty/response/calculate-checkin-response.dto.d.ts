export declare class CalculateCheckinResponseDto {
    loyaltyProgramResults: LoyaltyProgramResult[];
    availablePayments: AvailablePayment[];
    validationWarnings: string[];
    Warnings: Warning[];
}
interface Warning {
    Code: string;
    Message: string;
}
interface AvailablePayment {
    id: string;
    maxSum: number;
    order: number;
}
interface LoyaltyProgramResult {
    marketingCampaignId: string;
    name: string;
    discounts: Discount[];
    upsales: Upsale[];
    freeProducts: FreeProduct[];
    availableComboSpecifications: string[];
    availableCombos: AvailableCombo[];
    needToActivateCertificate: boolean;
}
interface AvailableCombo {
    specificationId: string;
    groupMapping: GroupMapping[];
}
interface GroupMapping {
    groupId: string;
    itemId: string;
}
interface Discount {
    code: number;
    orderItemId: string;
    discountSum: number;
    amount: number;
    comment: string;
}
interface FreeProduct {
    sourceActionId: string;
    descriptionForUser: string;
    products: Product[];
}
interface Product {
    id: string;
    code: string;
    size: string[];
}
interface Upsale {
    sourceActionId: string;
    suggestionText: string;
    productCodes: string[];
}
export {};
