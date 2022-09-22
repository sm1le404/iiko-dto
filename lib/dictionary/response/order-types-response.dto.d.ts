declare type ServiceOrderType = 'Common' | 'DeliveryByCourier' | 'DeliveryPickUp';
declare class OrderType {
    organizationId: string;
    items: Item[];
}
declare class Item {
    id: string;
    name: string;
    orderServiceType: ServiceOrderType;
    isDeleted?: boolean;
    externalRevision?: number;
}
export interface OrderTypesResponseDto {
    correlationId: string;
    orderTypes: OrderType[];
}
export {};
