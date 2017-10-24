import { Observable }           from 'rxjs/Observable';

import 'rxjs/add/observable/throw';

import { LoggerService }        from '../core/logger.service';

export class AbstractDataService
{
    apiUrl: string = "api/";
}