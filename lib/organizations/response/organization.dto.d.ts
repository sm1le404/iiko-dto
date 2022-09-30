export declare class OrganizationDto {
    responseType: string;
    id: string;
    name: string;
    country: string;
    restaurantAddress: string;
    latitude: number;
    longitude: number;
    useUaeAddressingSystem: boolean;
    version: string;
    currencyIsoName: string;
    currencyMinimumDenomination: number;
    countryPhoneCode: string;
    marketingSourceRequiredInDelivery: boolean;
    defaultDeliveryCityId: string;
    deliveryCityIds: Array<string>;
    deliveryServiceType: string;
    defaultCallCenterPaymentTypeId: string;
    orderItemCommentEnabled: boolean;
    inn: string;
    addressFormatType: string;
    isConfirmationEnabled: boolean;
    confirmAllowedIntervalInMinutes: number;
    isCloud: boolean;
}
