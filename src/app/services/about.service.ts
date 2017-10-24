import { Injectable }           from '@angular/core';
import { HttpClient }           from '@angular/common/http';
import { AbstractDataService }  from '../abstract/abstractDataService.service';
import { LoggerService }        from '../core/logger.service';

import { Observable }           from 'rxjs/Observable';
import 'rxjs/add/operator/catch';

import { About }                from '../model/about';

@Injectable()
export class AboutService extends AbstractDataService {

  private aboutUrl = this.apiUrl + 'about1';

  constructor(private http: HttpClient, private loggerService: LoggerService ) {
    super();
   }

   getAbout(): Observable<About[]> {
      return this.http.get<About[]>(this.aboutUrl)
              .catch(this.handleError);
  }

  private handleError( error: any) {
    this.loggerService.logHttpError("About.Service",  error);        
    return Observable.throw(error);
  }

}
