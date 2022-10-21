export declare class CalculateCheckinRequestDto {
    order: Order;
    coupon?: string;
    referrerId?: string;
    terminalGroupId?: string;
    availablePaymentMarketingCampaignIds?: string[];
    applicableManualConditions?: string[];
    dynamicDiscounts?: DynamicDiscount[];
    organizationId: string;
}
interface DynamicDiscount {
    manualConditionId: string;
    Sum: number;
}
interface Order {
    id?: string;
    externalNumber?: string;
    completeBefore?: Date;
    phone: string;
    orderTypeId?: string;
    orderServiceType?: string;
    deliveryPoint?: DeliveryPoint;
    comment?: string;
    customer?: Customer;
    guests?: Guests;
    marketingSourceId?: string;
    operatorId?: string;
    items?: Item[];
    combos?: Combo[];
    payments?: Payment[];
    tips?: Payment[];
    sourceKey?: string;
    discountsInfo?: DiscountsInfo;
    iikoCard5Info?: IikoCard5Info;
}
interface Combo {
    id: string;
    name: string;
    amount: number;
    price: number;
    sourceId: string;
    programId: string;
}
interface Customer {
    type: string;
}
interface DeliveryPoint {
    coordinates: Coordinates;
    address?: Address;
    externalCartographyId?: string;
    comment?: string;
}
interface Address {
    street: Street;
    index?: string;
    house?: string;
    building?: string;
    flat?: string;
    entrance?: string;
    floor?: string;
    doorphone?: string;
    regionId?: string;
}
interface Street {
    classifierId?: string;
    id?: string;
    name?: string;
    city?: string;
}
interface Coordinates {
    latitude: number;
    longitude: number;
}
interface DicsountType {
    discountTypeId: string;
    sum?: number;
    selectivePositions?: string[];
    type?: 'RMS' | 'iikoCard';
}
interface DiscountsInfo {
    card?: Card;
    discounts?: DicsountType[];
}
interface Card {
    track: string;
}
interface Guests {
    count: number;
    splitBetweenPersons: boolean;
}
interface IikoCard5Info {
    coupon: string;
    applicableManualConditions: string[];
}
interface Item {
    type: string;
    amount: number;
    productSizeId: string;
    comboInformation: ComboInformation;
    comment: string;
}
interface ComboInformation {
    comboId: string;
    comboSourceId: string;
    comboGroupId: string;
}
interface Payment {
    paymentTypeKind?: string;
    sum: number;
    paymentTypeId?: string;
    isProcessedExternally?: boolean;
    isFiscalizedExternally: boolean;
    tipsTypeId?: string;
}
export {};
