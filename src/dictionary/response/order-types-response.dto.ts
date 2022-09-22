type ServiceOrderType = 'Common' | 'DeliveryByCourier' | 'DeliveryPickUp';

class OrderType {
  organizationId: string;

  items: Item[];
}

class Item {
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
