export class OrderInfo {
  id: string;

  externalNumber?: string;

  organizationId: string;

  timestamp: number;

  creationStatus: 'Success' | 'InProgress' | 'Error';

  errorInfo?: ErrorInfo;

  order: Order;
}

class ErrorInfo {
  code: string;

  message?: string;

  description?: string;

  additionalData?: null;
}

class Order {
  parentDeliveryId: string;

  customer: Customer;

  phone: string;

  deliveryPoint?: DeliveryPoint;

  status:
    | 'Unconfirmed'
    | 'WaitCooking'
    | 'ReadyForCooking'
    | 'CookingStarted'
    | 'CookingCompleted'
    | 'Waiting'
    | 'OnWay'
    | 'Delivered'
    | 'Closed'
    | 'Cancelled';

  cancelInfo?: CancelInfo;

  courierInfo?: CourierInfo;

  completeBefore: Date;

  whenCreated: Date;

  whenConfirmed?: Date;

  whenPrinted?: Date;

  whenCookingCompleted?: Date;

  whenSended?: Date;

  whenDelivered?: Date;

  comment?: string;

  problem?: Problem;

  operator?: Operator;

  marketingSource?: ExternalCourierService;

  deliveryDuration?: number;

  indexInCourierRoute?: number;

  cookingStartTime: Date;

  isDeleted: boolean;

  whenReceivedByApi?: Date;

  whenReceivedFromFront?: Date;

  movedFromDeliveryId?: string;

  movedFromTerminalGroupId?: string;

  movedFromOrganizationId?: string;

  externalCourierService?: ExternalCourierService;

  movedToDeliveryId?: string;

  movedToTerminalGroupId?: string;

  movedToOrganizationId?: string;

  sum: number;

  number: number;

  sourceKey?: string;

  whenBillPrinted?: Date;

  whenClosed?: Date;

  conception?: Conception;

  guestsInfo: GuestsInfo;

  items: Item[];

  combos?: Combo[];

  payments: Payment[];

  tips: Payment[];

  discounts: Discount[];

  orderType: OrderType;

  terminalGroupId: string;

  processedPaymentsSum: number;
}

class CancelInfo {
  whenCancelled: Date;

  cause: ExternalCourierService;

  comment?: string;
}

class ExternalCourierService {
  id: string;

  name: string;
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

class CourierInfo {
  courier: Courier;

  isCourierSelectedManually: boolean;
}

class Operator {
  id: string;

  name: string;

  phone?: string;
}

class Courier {
  id: string;

  name: string;

  phone?: string;
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

class DeliveryPoint {
  coordinates: Coordinates;

  address: Address;

  externalCartographyId: string;

  comment: string;
}

class Address {
  street: Street;

  index: string;

  house: string;

  building: string;

  flat: string;

  entrance: string;

  floor: string;

  doorphone: string;

  region: ExternalCourierService;
}

class Street {
  id: string;

  name: string;

  city: ExternalCourierService;
}

class Coordinates {
  latitude: number;

  longitude: number;
}

class Discount {
  discountType: ExternalCourierService;

  sum: number;

  selectivePositions: string[];
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

  size: ExternalCourierService;

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

  removalType: ExternalCourierService;
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

  tipsType?: ExternalCourierService;
}

class PaymentType {
  id: string;

  name: string;

  kind: string;
}

class Problem {
  hasProblem: boolean;

  description: string;
}

export class CreateDeliveryResponseDto {
  correlationId: string;

  orderInfo: OrderInfo;
}
