declare class CreateOrderSettings {
    transportToFrontTimeout: number;
}
declare class Order {
    id?: string;
    externalNumber?: string;
    completeBefore?: string;
    phone: string;
    orderTypeId?: string;
    orderServiceType?: string;
    deliveryPoint?: DeliveryPoint;
    comment?: string;
    customer: Customer;
    guests?: Guests;
    marketingSourceId?: string;
    operatorId?: string;
    items: Item[];
    combos?: Combo[];
    payments?: Payment[];
    tips?: Payment[];
    sourceKey?: string;
    discountsInfo?: DiscountsInfo;
    iikoCard5Info?: IikoCard5Info;
}
declare class Combo {
    id: string;
    name: string;
    amount: number;
    price: number;
    sourceId: string;
    programId: string;
}
declare class Customer {
    id?: string;
    name?: string;
    surname?: string;
    comment?: string;
    birthdate?: string;
    email?: string;
    shouldReceivePromoActionsInfo?: boolean;
    shouldReceiveOrderStatusNotifications?: boolean;
    gender?: 'NotSpecified' | 'Male' | 'Female';
}
export declare class DeliveryPoint {
    coordinates?: Coordinates;
    address?: Address;
    externalCartographyId?: string;
    comment?: string;
}
declare class Address {
    street: Street;
    index?: string;
    house: string;
    building?: string;
    flat?: string;
    entrance?: string;
    floor?: string;
    doorphone?: string;
    regionId?: string;
}
declare class Street {
    classifierId?: string;
    id?: string;
    name?: string;
    city?: string;
}
declare class Coordinates {
    latitude: number;
    longitude: number;
}
declare class DiscountsInfo {
    card?: Card;
    discounts?: Discount[];
}
declare class Card {
    track: string;
}
declare class Discount {
    type: string;
}
declare class PaymentAdditional {
    type: string;
    credential: string;
    searchScope: string;
}
declare class Guests {
    count: number;
    splitBetweenPersons?: boolean;
}
declare class IikoCard5Info {
    coupon: string;
    applicableManualConditions: string[];
}
declare class Modifier {
    productId: string;
    amount: number;
    price?: number;
    positionId?: string;
}
declare class Item {
    type: 'Product' | 'Compound';
    amount: number;
    productSizeId?: string;
    productId: string;
    price?: number;
    comboInformation?: ComboInformation;
    comment?: string;
    positionId?: string;
    modifiers?: Modifier[];
}
declare class ComboInformation {
    comboId: string;
    comboSourceId: string;
    comboGroupId: string;
}
declare class Payment {
    paymentTypeKind: string;
    sum: number;
    paymentTypeId: string;
    isProcessedExternally?: boolean;
    paymentAdditionalData?: PaymentAdditional;
    isFiscalizedExternally?: boolean;
}
export declare class CreateDeliveryDto {
    organizationId: string;
    terminalGroupId?: string;
    createOrderSettings?: CreateOrderSettings;
    order: Order;
}
export {};
