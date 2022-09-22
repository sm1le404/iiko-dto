declare class ChequeAdditionalInfo {
    needReceipt: boolean;
    email: string;
    settlementPlace: string;
    phone: string;
}
export declare class CloseOrderDto {
    chequeAdditionalInfo?: ChequeAdditionalInfo;
    organizationId: string;
    orderId: string;
}
export {};
