import { Address }          from './address';

export class Company {
    id: number;
    companyName: string;
    mainAddress: Address;
    companyRegistration: string;
    vatNumber: string;
    invoicePrefix: string;
}
