class Region {
  organizationId: string;

  items: Item[];
}

class Item {
  id: string;

  name: string;

  externalRevision?: number;

  isDeleted: boolean;
}

export class ResponseRegionsDto {
  correlationId: string;

  regions: Region[];
}
