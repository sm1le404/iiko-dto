export declare class OrdersListResponseDto {
    correlationId: string;
    orders: OrderElement[];
}
export interface OrderElement {
    id: string;
    posId: string;
    externalNumber: string;
    organizationId: string;
    timestamp: number;
    creationStatus: string;
    errorInfo: ErrorInfo;
    order: OrderOrder;
}
export interface ErrorInfo {
    code: string;
    message: string;
    description: string;
    additionalData: null;
}
export interface OrderOrder {
    tableIds: string[];
    customer: Customer;
    phone: string;
    status: string;
    whenCreated: Date;
    waiter: Waiter;
    tabName: string;
    splitOrderBetweenCashRegisters: string;
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
export interface Combo {
    id: string;
    name: string;
    amount: number;
    price: number;
    sourceId: string;
}
export interface Conception {
    id: string;
    name: string;
    code: string;
}
export interface Customer {
    id: string;
    name: string;
    surname: string;
    comment: string;
    gender: string;
    inBlacklist: boolean;
    blacklistReason: string;
    birthdate: Date;
    type: string;
}
export interface Discount {
    discountType: DiscountType;
    sum: number;
    selectivePositions: string[];
}
export interface DiscountType {
    id: string;
    name: string;
}
export interface GuestsInfo {
    count: number;
    splitBetweenPersons: boolean;
}
export interface Item {
    type: string;
    status: string;
    deleted: Deleted;
    amount: number;
    comment: string;
    whenPrinted: Date;
    size: DiscountType;
    comboInformation: ComboInformation;
}
export interface ComboInformation {
    comboId: string;
    comboSourceId: string;
    groupId: string;
}
export interface Deleted {
    deletionMethod: DeletionMethod;
}
export interface DeletionMethod {
    id: string;
    comment: string;
    removalType: DiscountType;
}
export interface OrderType {
    id: string;
    name: string;
    orderServiceType: string;
}
export interface Payment {
    paymentType: PaymentType;
    sum: number;
    isPreliminary: boolean;
    isExternal: boolean;
    isProcessedExternally: boolean;
    isFiscalizedExternally: boolean;
    tipsType?: DiscountType;
}
export interface PaymentType {
    id: string;
    name: string;
    kind: string;
}
export interface Waiter {
    id: string;
    name: string;
    phone: string;
}
