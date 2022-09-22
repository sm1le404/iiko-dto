class ChequeAdditionalInfo {
  needReceipt: boolean;

  email: string;

  settlementPlace: string;

  phone: string;
}

export class CloseOrderDto {
  chequeAdditionalInfo?: ChequeAdditionalInfo;

  organizationId: string;

  orderId: string;
}
