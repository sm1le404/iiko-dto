export declare class ResponseCustomerInfoDto {
    id: string;
    referrerId: string;
    name: string;
    surname: string;
    middleName: string;
    comment: string;
    phone: string;
    cultureName: string;
    birthday: Date;
    email: string;
    sex: number;
    consentStatus: number;
    anonymized: boolean;
    cards: Card[];
    categories: Category[];
    walletBalances: WalletBalance[];
    userData: string;
    shouldReceivePromoActionsInfo: boolean;
    shouldReceiveLoyaltyInfo: boolean;
    shouldReceiveOrderStatusInfo: boolean;
    personalDataConsentFrom: Date;
    personalDataConsentTo: Date;
    personalDataProcessingFrom: Date;
    personalDataProcessingTo: Date;
    isDeleted: boolean;
}
interface Card {
    id: string;
    track: string;
    number: string;
    validToDate: Date;
}
interface Category {
    id: string;
    name: string;
    isActive: boolean;
    isDefaultForNewGuests: boolean;
}
interface WalletBalance {
    id: string;
    name: string;
    type: number;
    balance: number;
}
export {};
