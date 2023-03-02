import { ItemCategory } from "./external-menu-response.dto";
export declare class ExternalMenuPayloadDto {
    id: number;
    name: string;
    description: string;
    itemCategories: ItemCategory[];
    organizationId?: string;
    partnerId?: string;
}
