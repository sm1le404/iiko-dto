import { ExternalMenuResponseDto } from "./external-menu-response.dto";

export class ExternalMenuPayloadDto extends ExternalMenuResponseDto {
    organizationId?: string;
    partnerId?:      string;
}