declare class City {
    organizationId: string;
    items: Item[];
}
declare class Item {
    id: string;
    name: string;
    externalRevision?: number;
    isDeleted: boolean;
    classifierId?: string;
    additionalInfo?: string;
}
export declare class ResponseCityDto {
    correlationId: string;
    cities: City[];
}
export {};
