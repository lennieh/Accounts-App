import { Injectable }           from '@angular/core';
import { HttpClient }        from '@angular/common/http';
import { AbstractDataService }  from '../abstract/abstractDataService.service';

import { ToasterService }       from 'angular2-toaster';

import { Observable }           from 'rxjs/Observable';
import { Contact }              from '../model/contact';

@Injectable()
export class ContactService extends AbstractDataService {

  private contactsUrl = this.apiUrl + 'contacts';

  constructor(private http: HttpClient ) {
    super();
   }

   getContacts(): Observable<Contact[]> {
      return this.http.get<Contact[]>(this.contactsUrl);
  }
}
