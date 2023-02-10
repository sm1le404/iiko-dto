export declare class CancelDeliveryDto {
    organizationId: string;
    orderId: string;
    movedOrderId?: string;
    cancelCauseId?: string;
    removalTypeId?: string;
    userIdForWriteoff?: string;
}
