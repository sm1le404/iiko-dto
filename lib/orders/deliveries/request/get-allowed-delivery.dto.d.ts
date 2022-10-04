export declare class GetAllowedDeliveryDto {
    organizationIds: string[];
    deliveryAddress: DeliveryAddress;
    orderLocation: OrderLocation;
    orderItems: OrderItem[];
    isCourierDelivery: boolean;
    deliveryDate: string;
    deliverySum: number;
    discountSum: number;
}
declare class DeliveryAddress {
    city: string;
    streetName: string;
    streetId: string;
    house: string;
    building: string;
    index: string;
}
declare class ModificatorItem {
    id: string;
    product: string;
    amount: number;
}
declare class OrderItem {
    id: string;
    product: string;
    amount: number;
    modifiers?: ModificatorItem[];
}
export interface OrderLocation {
    latitude: number;
    longitude: number;
}
export {};
