export class ResponseCustomerCategoryDto {
  guestCategories: GuestCategory[];
}

export class GuestCategory {
  id: string;

  name: string;

  isActive: boolean;

  isDefaultForNewGuests: boolean;
}
