declare class DeliveryRestriction {
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
declare class DeliveryZone {
    name: string;
    coordinates: Coordinate[];
    addresses: Address[];
}
declare class Address {
    streetId: string;
    postcode: string;
    houses: Houses;
}
declare class Houses {
    type: number;
    startingNumber: number;
    maxNumber: number;
    isUnlimitedRange: boolean;
    specificNumbers: string[];
}
declare class Coordinate {
    latitude: number;
    longitude: number;
}
declare class Restriction {
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
export declare class DeliveryRestrictionsDto {
    correlationId: string;
    deliveryRestrictions: DeliveryRestriction[];
}
export {};
