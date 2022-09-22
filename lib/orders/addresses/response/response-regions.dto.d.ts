declare class Region {
    organizationId: string;
    items: Item[];
}
declare class Item {
    id: string;
    name: string;
    externalRevision?: number;
    isDeleted: boolean;
}
export declare class ResponseRegionsDto {
    correlationId: string;
    regions: Region[];
}
export {};
