import { InMemoryDbService }        from 'angular-in-memory-web-api';

import { Contact }                  from './model/contact';
import { About }                    from './model/about';
import { LogError }                 from './model/log-error';

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

        const logger: LogError[] = [
            { id: 1, source: 'Somewhere', severity: 'Error', message: 'Generic error message'}
        ];

        return {contacts, about, logger};
    }
}
