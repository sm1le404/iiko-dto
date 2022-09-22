class OrderInfo {
  id: string;

  posId: string;

  externalNumber: string;

  organizationId: string;

  timestamp: number;

  creationStatus: string;

  errorInfo: ErrorInfo;

  order: Order;
}

class ErrorInfo {
  code: string;

  message: string;

  description: string;

  additionalData: null;
}

class Order {
  tableIds: string[];

  customer: Customer;

  phone: string;

  status: string;

  whenCreated: Date;

  waiter: Waiter;

  tabName: string;

  sum: number;

  number: number;

  sourceKey: string;

  whenBillPrinted: Date;

  whenClosed: Date;

  conception: Conception;

  guestsInfo: GuestsInfo;

  items: Item[];

  combos: Combo[];

  payments: Payment[];

  tips: Payment[];

  discounts: Discount[];

  orderType: OrderType;

  terminalGroupId: string;

  processedPaymentsSum: number;
}

class Combo {
  id: string;

  name: string;

  amount: number;

  price: number;

  sourceId: string;
}

class Conception {
  id: string;

  name: string;

  code: string;
}

class Customer {
  id: string;

  name: string;

  surname: string;

  comment: string;

  gender: string;

  inBlacklist: boolean;

  blacklistReason: string;

  birthdate: Date;
}

class Discount {
  discountType: DiscountType;

  sum: number;

  selectivePositions: string[];
}

class DiscountType {
  id: string;

  name: string;
}

class GuestsInfo {
  count: number;

  splitBetweenPersons: boolean;
}

class Item {
  type: string;

  status: string;

  deleted: Deleted;

  amount: number;

  comment: string;

  whenPrinted: Date;

  size: DiscountType;

  comboInformation: ComboInformation;
}

class ComboInformation {
  comboId: string;

  comboSourceId: string;

  groupId: string;
}

class Deleted {
  deletionMethod: DeletionMethod;
}

class DeletionMethod {
  id: string;

  comment: string;

  removalType: DiscountType;
}

class OrderType {
  id: string;

  name: string;

  orderServiceType: string;
}

class Payment {
  paymentType: PaymentType;

  sum: number;

  isPreliminary: boolean;

  isExternal: boolean;

  isProcessedExternally: boolean;

  isFiscalizedExternally: boolean;

  tipsType?: DiscountType;
}

class PaymentType {
  id: string;

  name: string;

  kind: string;
}

class Waiter {
  id: string;

  name: string;

  phone: string;
}

export class CreateOrderResponseDto {
  correlationId: string;

  orderInfo: OrderInfo;
}
