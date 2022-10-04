export declare class ChangeOrderPaymentsDto {
    organizationId: string;
    orderId: string;
    payments: Payment[];
    tips: Payment[];
}
declare class Payment {
    paymentTypeKind: string;
    sum: number;
    paymentTypeId: string;
    isProcessedExternally: boolean;
    paymentAdditionalData: PaymentAdditionalData;
    isFiscalizedExternally: boolean;
    tipsTypeId?: string;
}
declare class PaymentAdditionalData {
    type: string;
}
export {};
