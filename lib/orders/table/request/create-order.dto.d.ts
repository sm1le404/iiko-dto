declare class CreateOrderSettings {
    transportToFrontTimeout: number;
}
declare class Order {
    id?: string;
    externalNumber?: string;
    tableIds?: string[];
    customer?: Customer;
    phone?: string;
    guests?: Guests;
    tabName?: string;
    items: Item[];
    combos?: Combo[];
    payments?: Payment[];
    tips?: Payment[];
    sourceKey?: string;
    discountsInfo?: DiscountsInfo;
    iikoCard5Info?: IikoCard5Info;
    orderTypeId?: string;
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
    birthdate?: Date;
    email?: string;
    shouldReceivePromoActionsInfo?: boolean;
    shouldReceiveOrderStatusNotifications?: boolean;
    gender?: 'NotSpecified' | 'Male' | 'Female';
}
declare class DiscountsInfo {
    card: Card;
    discounts: Discount[];
}
declare class Card {
    track: string;
}
declare class Discount {
    type: string;
}
declare class Guests {
    count: number;
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
    isProcessedExternally: boolean;
    paymentAdditionalData: Discount;
    isFiscalizedExternally: boolean;
    tipsTypeId?: string;
}
export declare class CreateOrderDto {
    organizationId: string;
    terminalGroupId: string;
    order: Order;
    createOrderSettings?: CreateOrderSettings;
}
export {};
