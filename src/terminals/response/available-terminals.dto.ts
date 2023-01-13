export class AvailableTerminalsDto {
  correlationId: string;

  isAliveStatus: IsAliveStatus[];
}

export class IsAliveStatus {
  isAlive: boolean;

  terminalGroupId: string;

  organizationId: string;
}
