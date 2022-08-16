import { TerminalGroupDto } from './terminal-group.dto';

export class TerminalsListDto {
  correlationId: string;

  terminalGroups: Array<TerminalGroupDto>;

  partnerId?: string;
}
