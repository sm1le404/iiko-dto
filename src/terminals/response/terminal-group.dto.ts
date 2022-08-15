import { TerminalDto } from './terminal.dto';

export class TerminalGroupDto {
  organizationId: string;

  items: Array<TerminalDto>;
}
