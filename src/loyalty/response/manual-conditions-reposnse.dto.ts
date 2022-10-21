export class ManualConditionsReposnseDto {
  manualConditions: ManualCondition[];
}

interface ManualCondition {
  id: string;
  caption: string;
  isDynamicDiscount: boolean;
}
