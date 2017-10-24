import { Injectable }           from '@angular/core';
import { HttpClient }           from '@angular/common/http';
import { AbstractDataService }  from '../abstract/abstractDataService.service';

import { LoggerService }        from '../core/logger.service';
import { ToasterService }       from 'angular2-toaster';

import { Observable }           from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { Contact }              from '../model/contact';

@Injectable()
export class ContactService extends AbstractDataService {

  private contactsUrl = this.apiUrl + 'contacts';

  constructor(private http: HttpClient, private loggerService: LoggerService ) {
    super();
   }

  getContacts(): Observable<Contact[]> {
      return this.http.get<Contact[]>(this.contactsUrl)
                .catch(this.handleError);
  }

  getContact(id: number): Observable<Contact> {
    const url = `${this.contactsUrl}/${id}`;
    return this.http.get<Contact>(url)
            .catch(this.handleError);
  }

  createContact(contact: Contact): Observable<Contact> {
    return this.http.post<Contact>(this.contactsUrl, contact)
            .catch(this.handleError);
  }

  updateContact(contact: Contact): Observable<null> {
    return this.http.put<Contact>(this.contactsUrl, contact)
            .catch(this.handleError);
  }

  deleteContact(contact: Contact | number) : Observable<Contact> {
    const id = typeof contact === 'number' ? contact : contact.id;
    const url = `${this.contactsUrl}/${id}`;
    return this.http.delete<Contact>(url)
            .catch(this.handleError);
  }

  private handleError( error: any) {
    this.loggerService.logHttpError("Contact.Service",  error);        
    return Observable.throw(error);
  }
}
