class DeliveryRestriction {
  organizationId: string;

  deliveryGeocodeServiceType: number;

  deliveryRegionsMapUrl: string;

  defaultDeliveryDurationInMinutes: number;

  defaultSelfServiceDurationInMinutes: number;

  useSameDeliveryDuration: boolean;

  useSameMinSum: boolean;

  defaultMinSum: number;

  useSameWorkTimeInterval: boolean;

  defaultFrom: number;

  defaultTo: number;

  useSameRestrictionsOnAllWeek: boolean;

  restrictions: Restriction[];

  deliveryZones: DeliveryZone[];

  rejectOnGeocodingError: boolean;

  addDeliveryServiceCost: boolean;

  useSameDeliveryServiceProduct: boolean;

  defaultDeliveryServiceProductId: string;

  useExternalAssignationService: boolean;

  frontTrustsCallCenterCheck: boolean;

  externalAssignationServiceUrl: string;

  requireExactAddressForGeocoding: boolean;

  zonesMode: number;

  autoAssignExternalDeliveries: boolean;

  actionOnValidationRejection: number;
}

class DeliveryZone {
  name: string;

  coordinates: Coordinate[];

  addresses: Address[];
}

class Address {
  streetId: string;

  postcode: string;

  houses: Houses;
}

class Houses {
  type: number;

  startingNumber: number;

  maxNumber: number;

  isUnlimitedRange: boolean;

  specificNumbers: string[];
}

class Coordinate {
  latitude: number;

  longitude: number;
}

class Restriction {
  minSum: number;

  terminalGroupId: string;

  organizationId: string;

  zone: string;

  weekMap: number;

  from: number;

  to: number;

  priority: number;

  deliveryDurationInMinutes: number;

  deliveryServiceProductId: string;
}

export class DeliveryRestrictionsDto {
  correlationId: string;

  deliveryRestrictions: DeliveryRestriction[];
}
