import { ExternalMenuResponseDto } from "./external-menu-response.dto";

export class ExternalMenuPayloadDto extends ExternalMenuResponseDto {
    organizationIds?: string[];
    partnerId?:      string;
}