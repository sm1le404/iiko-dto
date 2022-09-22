export declare class OrderInfo {
    id: string;
    externalNumber?: string;
    organizationId: string;
    timestamp: number;
    creationStatus: 'Success' | 'InProgress' | 'Error';
    errorInfo?: ErrorInfo;
    order: Order;
}
declare class ErrorInfo {
    code: string;
    message?: string;
    description?: string;
    additionalData?: null;
}
declare class Order {
    parentDeliveryId: string;
    customer: Customer;
    phone: string;
    deliveryPoint?: DeliveryPoint;
    status: 'Unconfirmed' | 'WaitCooking' | 'ReadyForCooking' | 'CookingStarted' | 'CookingCompleted' | 'Waiting' | 'OnWay' | 'Delivered' | 'Closed' | 'Cancelled';
    cancelInfo?: CancelInfo;
    courierInfo?: CourierInfo;
    completeBefore: Date;
    whenCreated: Date;
    whenConfirmed?: Date;
    whenPrinted?: Date;
    whenCookingCompleted?: Date;
    whenSended?: Date;
    whenDelivered?: Date;
    comment?: string;
    problem?: Problem;
    operator?: Operator;
    marketingSource?: ExternalCourierService;
    deliveryDuration?: number;
    indexInCourierRoute?: number;
    cookingStartTime: Date;
    isDeleted: boolean;
    whenReceivedByApi?: Date;
    whenReceivedFromFront?: Date;
    movedFromDeliveryId?: string;
    movedFromTerminalGroupId?: string;
    movedFromOrganizationId?: string;
    externalCourierService?: ExternalCourierService;
    movedToDeliveryId?: string;
    movedToTerminalGroupId?: string;
    movedToOrganizationId?: string;
    sum: number;
    number: number;
    sourceKey?: string;
    whenBillPrinted?: Date;
    whenClosed?: Date;
    conception?: Conception;
    guestsInfo: GuestsInfo;
    items: Item[];
    combos?: Combo[];
    payments: Payment[];
    tips: Payment[];
    discounts: Discount[];
    orderType: OrderType;
    terminalGroupId: string;
    processedPaymentsSum: number;
}
declare class CancelInfo {
    whenCancelled: Date;
    cause: ExternalCourierService;
    comment?: string;
}
declare class ExternalCourierService {
    id: string;
    name: string;
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
declare class CourierInfo {
    courier: Courier;
    isCourierSelectedManually: boolean;
}
declare class Operator {
    id: string;
    name: string;
    phone?: string;
}
declare class Courier {
    id: string;
    name: string;
    phone?: string;
}
declare class Customer {
    id: string;
    name: string;
    surname: string;
    comment: string;
    gender: string;
    inBlacklist: boolean;
    blacklistReason: string;
    birthdate: Date;
}
declare class DeliveryPoint {
    coordinates: Coordinates;
    address: Address;
    externalCartographyId: string;
    comment: string;
}
declare class Address {
    street: Street;
    index: string;
    house: string;
    building: string;
    flat: string;
    entrance: string;
    floor: string;
    doorphone: string;
    region: ExternalCourierService;
}
declare class Street {
    id: string;
    name: string;
    city: ExternalCourierService;
}
declare class Coordinates {
    latitude: number;
    longitude: number;
}
declare class Discount {
    discountType: ExternalCourierService;
    sum: number;
    selectivePositions: string[];
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
    size: ExternalCourierService;
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
    removalType: ExternalCourierService;
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
    tipsType?: ExternalCourierService;
}
declare class PaymentType {
    id: string;
    name: string;
    kind: string;
}
declare class Problem {
    hasProblem: boolean;
    description: string;
}
export declare class CreateDeliveryResponseDto {
    correlationId: string;
    orderInfo: OrderInfo;
}
export {};
