import { Injectable }           from '@angular/core';
import { HttpClient }           from '@angular/common/http';
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

  getContact(id: number): Observable<Contact> {
    return this.http.get<Contact>(this.contactsUrl + '/${id}')
  }

  createContact(contact: Contact): Observable<Contact> {
    return this.http.post<Contact>(this.contactsUrl + '/add', contact);
  }

  updateContact(contact: Contact): Observable<Contact> {
    return this.http.put<Contact>(this.contactsUrl + '/update', contact);
  }

  deleteContact(id: number) : Observable<void> {
    return this.http.delete<void>(this.contactsUrl + '/${id}');
  }
}
