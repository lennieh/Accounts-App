import { InMemoryDbService }        from 'angular-in-memory-web-api';

import { Contact }                  from './model/contact';
import { About }                    from './model/about';
import { Country }                  from './model/country';
import { LogError }                 from './model/log-error';

import { QuestionBase }             from './generate/model/question-base';
import { FormQuestions }            from './generate/model/form-questions';
import { TextboxQuestion }          from './generate/model/question-textbox';
import { DropdownQuestion }         from './generate/model/question-dropdown';

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

        const countryQuestions: QuestionBase<any>[] = [
            new TextboxQuestion({
                id: 1,
                key: 'countryCode',
                label: 'Country Code',
                value: '',
                required: true,
                order: 1
              }),
              new TextboxQuestion({
                id: 2,
                key: 'countryName',
                label: 'Country name',
                value: '',
                required: true,
                order: 2
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
                order: 3
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

        const formQuestions: FormQuestions[] = [
            {
                id: 1,
                formName: "country",
                questions: countryQuestions
            },
            {
                id: 2,
                formName: 'contact',
                questions: contactQuestions
            }
        ];

        return {contacts, about, logger, country, formQuestions};
    }
}
