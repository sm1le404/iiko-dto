class CreateOrderSettings {
  transportToFrontTimeout: number;
}

class Order {
  id?: string;

  externalNumber?: string;

  completeBefore?: Date;

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

class Combo {
  id: string;

  name: string;

  amount: number;

  price: number;

  sourceId: string;

  programId: string;
}

class Customer {
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

class DeliveryPoint {
  coordinates?: Coordinates;

  address?: Address;

  externalCartographyId?: string;

  comment?: string;
}

class Address {
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

class Street {
  classifierId?: string;

  id?: string;

  name?: string;

  city?: string;
}

class Coordinates {
  latitude: number;

  longitude: number;
}

class DiscountsInfo {
  card?: Card;

  discounts?: Discount[];
}

class Card {
  track: string;
}

class Discount {
  type: string;
}

class PaymentAdditional {
  type: string;

  credential: string;

  searchScope: string;
}

class Guests {
  count: number;

  splitBetweenPersons?: boolean;
}

class IikoCard5Info {
  coupon: string;

  applicableManualConditions: string[];
}

class Modifier {
  productId: string;

  amount: number;

  price?: number;

  positionId?: string;
}

class Item {
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

class ComboInformation {
  comboId: string;

  comboSourceId: string;

  comboGroupId: string;
}

class Payment {
  paymentTypeKind: 'Cash' | 'Card' | 'IikoCard' | 'External';

  sum: number;

  paymentTypeId: string;

  isProcessedExternally?: boolean;

  paymentAdditionalData?: PaymentAdditional;

  isFiscalizedExternally?: boolean;
}

export class CreateDeliveryDto {
  organizationId: string;

  terminalGroupId?: string;

  createOrderSettings?: CreateOrderSettings;

  order: Order;
}
