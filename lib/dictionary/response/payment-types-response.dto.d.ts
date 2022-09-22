declare class PaymentType {
    id: string;
    code: string;
    name: string;
    comment: string;
    combinable: boolean;
    externalRevision: number;
    applicableMarketingCampaigns: string[];
    isDeleted: boolean;
    printCheque: boolean;
    paymentProcessingType: string;
    paymentTypeKind: string;
    terminalGroups: TerminalGroup[];
}
declare class TerminalGroup {
    id: string;
    organizationId: string;
    name: string;
    address: string;
}
export declare class PaymentTypesResponseDto {
    correlationId: string;
    paymentTypes: PaymentType[];
}
export {};
