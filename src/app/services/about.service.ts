import { Injectable }           from '@angular/core';
import { HttpClient }           from '@angular/common/http';
import { Observable }           from 'rxjs/Observable';

import { environment }          from '../../environments/environment';

import { About }                from '../model/about';

@Injectable()
export class AboutService {

  private _endpoint;

  constructor(private http: HttpClient) {
    this._endpoint = environment.aboutServiceEndpoint;
   }

   getAbout(): Observable<About[]> {
      return this.http.get<About[]>(this._endpoint);
  }
}
