export declare class ResponseAllowedDeliveryDto {
    correlationId: string;
    isAllowed: boolean;
    rejectCause: string;
    addressExternalId: string;
    location: Location;
    allowedItems: AllowedItem[];
    rejectedItems: RejectedItem[];
}
declare class AllowedItem {
    terminalGroupId: string;
    organizationId: string;
    deliveryDurationInMinutes: number;
    zone: string;
    deliveryServiceProductId: string;
}
declare class Location {
    latitude: number;
    longitude: number;
}
declare class RejectedItem {
    terminalGroupId: string;
    organizationId: string;
    zone: string;
    rejectCode: string;
    rejectHint: string;
    rejectItemData: RejectItemData;
}
declare class RejectItemData {
    dateFrom: string;
    dateTo: string;
    allowedWeekDays: string[];
    minSum: number;
}
export {};
