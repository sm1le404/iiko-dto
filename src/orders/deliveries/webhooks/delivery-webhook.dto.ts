import { OrderInfo } from '../response/create-delivery-response.dto';

export class DeliveryWebhookDto {
  eventType: string;

  eventTime: Date;

  organizationId: string;

  correlationId: string;

  eventInfo: OrderInfo;
}
