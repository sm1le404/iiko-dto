export class ChangeOrderPaymentsDto {
  organizationId: string;

  orderId: string;

  payments: Payment[];

  tips: Payment[];
}

class Payment {
  paymentTypeKind: string;

  sum: number;

  paymentTypeId: string;

  isProcessedExternally: boolean;

  paymentAdditionalData: PaymentAdditionalData;

  isFiscalizedExternally: boolean;

  tipsTypeId?: string;
}

class PaymentAdditionalData {
  type: string;
}
