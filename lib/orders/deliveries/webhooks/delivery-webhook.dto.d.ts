import { OrderInfo } from '../response/create-delivery-response.dto';
declare class ErrorInfo {
    code: string;
    message: string;
    description: string;
    additionalData: null;
}
declare class EventInfo {
    id: string;
    externalNumber: string;
    organizationId: string;
    timestamp: number;
    creationStatus: string;
    errorInfo: ErrorInfo;
    order: OrderInfo;
}
export declare class DeliveryWebhookDto {
    eventType: string;
    eventTime: Date;
    organizationId: string;
    correlationId: string;
    eventInfo: EventInfo;
}
export {};
