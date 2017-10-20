import { Injectable }           from '@angular/core';
import { HttpClient }           from '@angular/common/http';
import { AbstractDataService }  from '../abstract/abstractDataService.service';

import { Observable }           from 'rxjs/Observable';
import { About }                from '../model/about';

@Injectable()
export class AboutService extends AbstractDataService {

  private aboutUrl = this.apiUrl + 'about';

  constructor(private http: HttpClient ) {
    super();
   }

   getAbout(): Observable<About[]> {
      return this.http.get<About[]>(this.aboutUrl);
  }
}
