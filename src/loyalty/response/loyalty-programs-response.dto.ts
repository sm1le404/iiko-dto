export class LoyaltyProgramsResponseDto {
  Programs: Program[];
}

interface Program {
  id: string;
  name: string;
  description: string;
  serviceFrom: Date;
  serviceTo: Date;
  notifyAboutBalanceChanges: boolean;
  programType: number;
  isActive: boolean;
  walletId: string;
  marketingCampaigns: MarketingCampaign[];
  appliedOrganizations: string[];
  templateType: number;
  hasWelcomeBonus: boolean;
  welcomeBonusSum: number;
  isExchangeRateEnabled: boolean;
}

interface MarketingCampaign {
  id: string;
  programId: string;
  name: string;
  description: string;
  isActive: boolean;
  periodFrom: Date;
  periodTo: Date;
  orderActionConditionBindings: ActionConditionBinding[];
  periodicActionConditionBindings: ActionConditionBinding[];
  overdraftActionConditionBindings: ActionConditionBinding[];
}

interface ActionConditionBinding {
  id: string;
  stopFurtherExecution: boolean;
  actions: Tion[];
  conditions: Tion[];
}

interface Tion {
  id: string;
  settings: string;
  typeName: string;
  checkSum: string;
}
