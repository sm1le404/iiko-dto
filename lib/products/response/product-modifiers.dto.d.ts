export declare class ProductModifiersDto {
    id: string;
    defaultAmount?: number;
    minAmount: number;
    maxAmount: number;
    required: boolean;
    hideIfDefaultAmount: boolean;
    splittable: boolean;
    freeOfChargeAmount: number;
}
