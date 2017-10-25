import { Injectable }           from '@angular/core';
import { HttpClient }           from '@angular/common/http';
import { Observable }           from 'rxjs/Observable';
import 'rxjs/add/operator/catch';

import { environment }          from '../../environments/environment';
import { LoggerService }        from '../core/logger.service';

import { About }                from '../model/about';

@Injectable()
export class AboutService {

  private _endpoint;

  constructor(private http: HttpClient, private loggerService: LoggerService ) {
    this._endpoint = environment.aboutServiceEndpoint;
   }

   getAbout(): Observable<About[]> {
      return this.http.get<About[]>(this._endpoint);
  }
}
