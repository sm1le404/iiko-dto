export class GetAllowedDeliveryDto {
  organizationIds: string[];

  deliveryAddress: DeliveryAddress;

  orderLocation: OrderLocation;

  orderItems: OrderItem[];

  isCourierDelivery: boolean;

  deliveryDate: string;

  deliverySum: number;

  discountSum: number;
}

class DeliveryAddress {
  city: string;

  streetName: string;

  streetId: string;

  house: string;

  building: string;

  index: string;
}

class ModificatorItem {
  id: string;

  product: string;

  amount: number;
}

class OrderItem {
  id: string;

  product: string;

  amount: number;

  modifiers?: ModificatorItem[];
}

interface OrderLocation {
  latitude: number;
  longitude: number;
}
