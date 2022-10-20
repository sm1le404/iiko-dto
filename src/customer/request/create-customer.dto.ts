export class CreateCustomerDto {
  id?: string;

  phone?: string;

  cardTrack?: string;

  cardNumber?: string;

  name?: string;

  middleName?: string;

  surName?: string;

  birthday?: Date;

  email?: string;

  sex?: number;

  consentStatus?: number;

  shouldReceivePromoActionsInfo?: boolean;

  referrerId?: string;

  userData?: string;

  organizationId: string;
}
