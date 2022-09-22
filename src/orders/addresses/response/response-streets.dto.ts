class Street {
  id: string;

  name: string;

  externalRevision?: number;

  classifierId: string;

  isDeleted: boolean;
}

export class ReponseStreetsDto {
  correlationId: string;

  streets: Street[];
}
