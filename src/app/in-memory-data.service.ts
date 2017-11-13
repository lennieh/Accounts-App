import { InMemoryDbService } from 'angular-in-memory-web-api';

import { Company } from './model/company';
import { Contact } from './model/contact';
import { About } from './model/about';
import { Country } from './model/country';
import { Vat } from './model/vat';
import { LogError } from './model/log-error';
import { RoleMenu } from './model/role-menu';

import { QuestionBase } from './dynamic/model/question-base';
import { FormQuestions } from './dynamic/model/form-questions';
import { TextboxQuestion } from './dynamic/model/question-textbox';
import { TextareaQuestion } from './dynamic/model/question-textarea';
import { DropdownQuestion } from './dynamic/model/question-dropdown';
import { DatepickerQuestion } from './dynamic/model/question-datepicker';

export class InMemoryDataService implements InMemoryDbService {
    createDb() {
        const contacts: Contact[] = [
            {
                id: 1,
                firstName: 'Lennie',
                lastName: 'Harvey',
                role: 'Managing Director',
                email: 'lh@lennieharvey.com',
                phone: '0999 999 9999'
            },
            {
                id: 2,
                firstName: 'Jacky',
                lastName: 'Davis',
                role: 'Secretary',
                email: 'jd@jackydavis.com',
                phone: '0999 999 9998'
            }
        ];

        const about: About[] = [
            { id: 1, text: 'This app was written with Angular V4' },
            { id: 2, text: 'Using Twitter Bootsrap and Sass' },
            { id: 3, text: 'By Lennie Harvey' }
        ];

        const country: Country[] = [
            { id: 1, countryCode: 'UK', countryName: 'United Kingdom' },
            { id: 2, countryCode: 'USA', countryName: 'United States' }
        ];

        const logger: LogError[] = [
            { id: 1, source: 'Somewhere', severity: 'Error', message: 'Generic error message' }
        ];

        const vat: Vat[] = [
            { id: 1, startDate: new Date('2001-01-01'), vatRate: 17.5, notes: '' },
            { id: 2, startDate: new Date('2014-04-01'), vatRate: 20.0, notes: 'Blurb' }
        ];

        const company: Company[] = [
            {
                id: 1,
                companyName: 'Kidztalk Limited',
                mainAddress: {
                    addressLine1: '4 Merland Rise',
                    addressLine2: 'Epsom',
                    addressLine3: '',
                    postTown: 'Surrey',
                    postCode: 'KT18 5RZ'
                },
                companyRegistration: '123456789',
                vatNumber: '233 2345 22',
                invoicePrefix: 'K{yyyy}'
            },
            {
                id: 2,
                companyName: 'Jacky Davis',
                mainAddress: {
                    addressLine1: '4 Merland Rise',
                    addressLine2: 'Epsom',
                    addressLine3: '',
                    postTown: 'Surrey',
                    postCode: 'KT18 5RZ'
                },
                companyRegistration: '987654321',
                vatNumber: '237 3445 22',
                invoicePrefix: 'K{yyyy}'
            }
        ];

        const companyQuestions: QuestionBase<any>[] = [
            new TextboxQuestion({
                id: 1,
                key: 'companyName',
                label: 'Company Name',
                value: '',
                required: true,
                type: 'text',
                order: 1,
                case: 'upperFirst'
            }),
            new TextboxQuestion({
                id: 2,
                key: 'companyRegistration',
                label: 'Company Registration Number',
                value: '',
                required: true,
                type: 'text',
                order: 2,
                hint: 'Enter your Companies House Reg No'
            }),
            new TextboxQuestion({
                id: 3,
                key: 'vatNumber',
                label: 'VAT Number',
                value: '',
                required: true,
                order: 3,
                hint: 'Enter your VAT Registration Number'
            }),
            new TextboxQuestion({
                id: 4,
                key: 'invoicePrefix',
                label: 'Invoice Prefix',
                value: '',
                required: true,
                order: 4,
                hint: 'Enter your Invoice Prefix template i.e. K{yyyy}'
            }),
            new TextboxQuestion({
                id: 5,
                key: 'addressLine1',
                label: 'Address Line 1',
                value: '',
                required: true,
                order: 5
            }),
            new TextboxQuestion({
                id: 6,
                key: 'addressLine2',
                label: 'Address Line 2',
                value: '',
                required: false,
                order: 6
            }),
            new TextboxQuestion({
                id: 7,
                key: 'addressLine3',
                label: 'Address Line 3',
                value: '',
                required: false,
                order: 7
            }),
            new TextboxQuestion({
                id: 8,
                key: 'postTown',
                label: 'Post Town',
                value: '',
                required: true,
                order: 8
            }),
            new TextboxQuestion({
                id: 9,
                key: 'postCode',
                label: 'Post Code',
                value: '',
                required: true,
                order: 9,
                isPostCode: true
            }),
        ];


        const countryQuestions: QuestionBase<any>[] = [
            new TextboxQuestion({
                id: 1,
                key: 'countryCode',
                label: 'Country Code',
                value: '',
                required: true,
                order: 1,
                minLength: 2,
                maxLength: 2,
                case: 'upper'
            }),
            new TextboxQuestion({
                id: 2,
                key: 'countryName',
                label: 'Country name',
                value: '',
                required: true,
                order: 2,
                case: 'upperFirst'
            }),
        ];

        const contactQuestions: QuestionBase<any>[] = [
            new TextboxQuestion({
                id: 1,
                key: 'firstName',
                label: 'First Name',
                value: '',
                required: true,
                order: 1
            }),
            new TextboxQuestion({
                id: 2,
                key: 'lastName',
                label: 'Surname',
                value: '',
                required: true,
                order: 2
            }),
            new TextboxQuestion({
                id: 3,
                key: 'role',
                label: 'Role',
                value: '',
                required: true,
                order: 3,
                hint: 'Enter the role in the company'
            }),
            new TextboxQuestion({
                id: 4,
                key: 'email',
                label: 'Email',
                type: 'email',
                value: '',
                required: true,
                order: 4
            }),
            new TextboxQuestion({
                id: 5,
                key: 'phone',
                label: 'Phone',
                value: '',
                required: true,
                order: 4
            })
        ];

        const vatQuestions: QuestionBase<any>[] = [
            new DatepickerQuestion({
                id: 1,
                key: 'startDate',
                label: 'Start Date',
                value: '',
                required: true,
                type: 'date',
                order: 1,
                hint: 'Enter the date that VAT rate took effect',
                maxDate: new Date(2017, 10, 1)
            }),
            new TextboxQuestion({
                id: 2,
                key: 'vatRate',
                label: 'VAT Rate',
                value: '',
                required: true,
                type: 'number',
                order: 2,
                hint: 'Enter the VAT rate as a percentage',
                minValue: 0,
                maxValue: 100.0
            }),
            new TextareaQuestion({
                id: 3,
                key: 'notes',
                label: 'Notes',
                value: '',
                required: true,
                order: 3,
                hint: 'Enter notes',
                rows: 4
            })
        ];

        const formQuestions: FormQuestions[] = [
            {
                id: 1,
                formName: 'country',
                questions: countryQuestions
            },
            {
                id: 2,
                formName: 'contact',
                questions: contactQuestions
            },
            {
                id: 3,
                formName: 'vat',
                questions: vatQuestions
            },
            {
                id: 4,
                formName: 'company',
                questions: companyQuestions
            }
        ];

        const roleMenu: RoleMenu[] = [
            {
                id: 1,
                role: 'default',
                menuGroups: []
            },
            {
                id: 2,
                role: 'admin',
                menuGroups: [
                    {
                        groupName: 'Admin',
                        items: [
                            { link: 'admin/company', title: 'My Company Details' },
                            { link: 'admin/contact', title: 'My Contact Details' },
                            { link: 'admin/vat', title: 'VAT Rates' },
                            { link: 'admin/country', title: 'Countries' }
                        ]
                    },
                    {
                        groupName: 'Customers',
                        items: [
                            { link: 'newcustomer', title: 'Add New Prospects' },
                            { link: 'editcustomer', title: 'Existing Customers' }
                        ]

                    },
                    {
                        groupName: 'Talent',
                        items: [
                            { link: 'newtalent', title: 'Add New Talent/Engineer' },
                            { link: 'edittalent', title: 'Existing Talent/Engineers' }
                        ]
                    },
                    {
                        groupName: 'Jobs',
                        items: [
                            { link: 'jobentry', title: 'Job Entry' },
                            { link: 'jobsearch', title: 'Job Search' }
                        ]
                    },
                    {
                        groupName: 'Invoices',
                        items: [
                            { link: 'sendinvoices', title: 'Send Invoices' },
                            { link: 'resendinvoices', title: 'Resend Invoices' },
                            { link: 'viewinvoices', title: 'View Invoices' }
                        ]
                    },
                    {
                        groupName: 'Remittances',
                        items: [
                            { link: 'sendremittances', title: 'Send Remittances' },
                            { link: 'resendremittances', title: 'Resend Remittances' },
                            { link: 'viewremittances', title: 'View Remittances' }
                        ]
                    }
                ]
            },
            {
                id: 3,
                role: 'user',
                menuGroups: [
                    {
                        groupName: 'Customers',
                        items: [
                            { link: 'newcustomer', title: 'Add New Prospects' },
                            { link: 'editcustomer', title: 'Existing Customers' }
                        ]

                    },
                    {
                        groupName: 'Talent',
                        items: [
                            { link: 'newtalent', title: 'Add New Talent/Engineer' },
                            { link: 'edittalent', title: 'Existing Talent/Engineers' }
                        ]
                    },
                    {
                        groupName: 'Jobs',
                        items: [
                            { link: 'jobentry', title: 'Job Entry' },
                            { link: 'jobsearch', title: 'Job Search' }
                        ]
                    },
                    {
                        groupName: 'Invoices',
                        items: [
                            { link: 'sendinvoices', title: 'Send Invoices' },
                            { link: 'resendinvoices', title: 'Resend Invoices' },
                            { link: 'viewinvoices', title: 'View Invoices' }
                        ]
                    },
                    {
                        groupName: 'Remittances',
                        items: [
                            { link: 'sendremittances', title: 'Send Remittances' },
                            { link: 'resendremittances', title: 'Resend Remittances' },
                            { link: 'viewremittances', title: 'View Remittances' }
                        ]
                    }
                ]
            }

        ]

        return { company, contacts, about, logger, country, vat, formQuestions, roleMenu };
    }
}
