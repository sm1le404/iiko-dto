class CreateOrderSettings {
  transportToFrontTimeout: number;
}

class Order {
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

class DiscountsInfo {
  card: Card;

  discounts: Discount[];
}

class Card {
  track: string;
}

class Discount {
  type: string;
}

class Guests {
  count: number;
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
  paymentTypeKind: string;

  sum: number;

  paymentTypeId: string;

  isProcessedExternally: boolean;

  paymentAdditionalData: Discount;

  isFiscalizedExternally: boolean;

  tipsTypeId?: string;
}

export class CreateOrderDto {
  organizationId: string;

  terminalGroupId: string;

  order: Order;

  createOrderSettings?: CreateOrderSettings;
}
