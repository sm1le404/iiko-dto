declare class OrderInfo {
    id: string;
    posId: string;
    externalNumber: string;
    organizationId: string;
    timestamp: number;
    creationStatus: string;
    errorInfo: ErrorInfo;
    order: Order;
}
declare class ErrorInfo {
    code: string;
    message: string;
    description: string;
    additionalData: null;
}
declare class Order {
    tableIds: string[];
    customer: Customer;
    phone: string;
    status: string;
    whenCreated: Date;
    waiter: Waiter;
    tabName: string;
    sum: number;
    number: number;
    sourceKey: string;
    whenBillPrinted: Date;
    whenClosed: Date;
    conception: Conception;
    guestsInfo: GuestsInfo;
    items: Item[];
    combos: Combo[];
    payments: Payment[];
    tips: Payment[];
    discounts: Discount[];
    orderType: OrderType;
    terminalGroupId: string;
    processedPaymentsSum: number;
}
declare class Combo {
    id: string;
    name: string;
    amount: number;
    price: number;
    sourceId: string;
}
declare class Conception {
    id: string;
    name: string;
    code: string;
}
declare class Customer {
    id: string;
    name: string;
    surname: string;
    comment: string;
    gender: string;
    inBlacklist: boolean;
    blacklistReason: string;
    birthdate: string;
}
declare class Discount {
    discountType: DiscountType;
    sum: number;
    selectivePositions: string[];
}
declare class DiscountType {
    id: string;
    name: string;
}
declare class GuestsInfo {
    count: number;
    splitBetweenPersons: boolean;
}
declare class Item {
    type: string;
    status: string;
    deleted: Deleted;
    amount: number;
    comment: string;
    whenPrinted: Date;
    size: DiscountType;
    comboInformation: ComboInformation;
}
declare class ComboInformation {
    comboId: string;
    comboSourceId: string;
    groupId: string;
}
declare class Deleted {
    deletionMethod: DeletionMethod;
}
declare class DeletionMethod {
    id: string;
    comment: string;
    removalType: DiscountType;
}
declare class OrderType {
    id: string;
    name: string;
    orderServiceType: string;
}
declare class Payment {
    paymentType: PaymentType;
    sum: number;
    isPreliminary: boolean;
    isExternal: boolean;
    isProcessedExternally: boolean;
    isFiscalizedExternally: boolean;
    tipsType?: DiscountType;
}
declare class PaymentType {
    id: string;
    name: string;
    kind: string;
}
declare class Waiter {
    id: string;
    name: string;
    phone: string;
}
export declare class CreateOrderResponseDto {
    correlationId: string;
    orderInfo: OrderInfo;
}
export {};
