import { OrderInfo } from '../response/create-delivery-response.dto';
export declare class DeliveryWebhookDto {
    eventType: string;
    eventTime: Date;
    organizationId: string;
    correlationId: string;
    eventInfo: OrderInfo;
}
