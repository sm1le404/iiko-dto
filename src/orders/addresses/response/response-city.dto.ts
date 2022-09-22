class City {
  organizationId: string;

  items: Item[];
}

class Item {
  id: string;

  name: string;

  externalRevision?: number;

  isDeleted: boolean;

  classifierId?: string;

  additionalInfo?: string;
}

export class ResponseCityDto {
  correlationId: string;

  cities: City[];
}
