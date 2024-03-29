import { OrganizationDto } from './organization.dto';

export declare class OrganizationsListDto {
  correlationId: string;

  organizations: Array<OrganizationDto>;

  partnerId?: string;

  franchiseId?: string;
}
