import { InMemoryDbService }        from 'angular-in-memory-web-api';

import { Contact }                  from './model/contact';
import { About }                    from './model/about';
import { Country }                  from './model/country';
import { Vat }                      from './model/vat';
import { LogError }                 from './model/log-error';

import { QuestionBase }             from './generate/model/question-base';
import { FormQuestions }            from './generate/model/form-questions';
import { TextboxQuestion }          from './generate/model/question-textbox';
import { TextareaQuestion }         from './generate/model/question-textarea';
import { DropdownQuestion }         from './generate/model/question-dropdown';
import { DatepickerQuestion }       from './generate/model/question-datepicker';

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

        const about:  About[] = [
            { id: 1, text: 'This app was written with Angular V4' },
            { id: 2, text: 'Using Twitter Bootsrap and Sass'},
            { id: 3, text: 'By Lennie Harvey'}
        ];

        const country: Country[] = [
            { id: 1, countryCode: 'UK', countryName: 'United Kingdom' },
            { id: 2, countryCode: 'USA', countryName: 'United States' }
        ];

        const logger: LogError[] = [
            { id: 1, source: 'Somewhere', severity: 'Error', message: 'Generic error message'}
        ];

        const vat: Vat[] = [
            { id: 1, startDate: new Date('2001-01-01'), vatRate: 17.5, notes: '' },
            { id: 2, startDate: new Date('2014-04-01'), vatRate: 20.0, notes: 'Blurb' }
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

        const contactQuestions: QuestionBase<any> [] = [
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
                hint: 'Enter the date that VAT rate took effect'
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
            }
        ];

        return {contacts, about, logger, country, vat, formQuestions};
    }
}
