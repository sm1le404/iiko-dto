import { OrderInfo } from '../response/create-delivery-response.dto';

class ErrorInfo {
  code: string;

  message: string;

  description: string;

  additionalData: null;
}

class EventInfo {
  id: string;

  externalNumber: string;

  organizationId: string;

  timestamp: number;

  creationStatus: string;

  errorInfo: ErrorInfo;

  order: OrderInfo;
}

export class DeliveryWebhookDto {
  eventType: string;

  eventTime: Date;

  organizationId: string;

  correlationId: string;

  eventInfo: EventInfo;
}
