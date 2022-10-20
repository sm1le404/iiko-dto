export class CustomerHoldMoneyDto {
  transactionId?: string;

  customerId: string;

  walletId: string;

  sum: number;

  comment?: string;

  organizationId: string;
}
