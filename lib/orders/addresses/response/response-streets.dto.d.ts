declare class Street {
    id: string;
    name: string;
    externalRevision?: number;
    classifierId: string;
    isDeleted: boolean;
}
export declare class ReponseStreetsDto {
    correlationId: string;
    streets: Street[];
}
export {};
