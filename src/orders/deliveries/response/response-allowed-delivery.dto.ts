export class ResponseAllowedDeliveryDto {
  correlationId: string;

  isAllowed: boolean;

  rejectCause: string;

  addressExternalId: string;

  location: Location;

  allowedItems: AllowedItem[];

  rejectedItems: RejectedItem[];
}

class AllowedItem {
  terminalGroupId: string;

  organizationId: string;

  deliveryDurationInMinutes: number;

  zone: string;

  deliveryServiceProductId: string;
}

class Location {
  latitude: number;

  longitude: number;
}

class RejectedItem {
  terminalGroupId: string;

  organizationId: string;

  zone: string;

  rejectCode: string;

  rejectHint: string;

  rejectItemData: RejectItemData;
}

class RejectItemData {
  dateFrom: string;

  dateTo: string;

  allowedWeekDays: string[];

  minSum: number;
}
