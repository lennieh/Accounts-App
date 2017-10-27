import { Injectable }           from '@angular/core';
import { HttpClient }           from '@angular/common/http';
import { environment }          from '../../environments/environment';

import { LoggerService }        from '../core/logger.service';
import { ToasterService }       from 'angular2-toaster';

import { Observable }           from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { Contact }              from '../model/contact';

@Injectable()
export class ContactService  {

  private _endPoint;

  constructor(private http: HttpClient, private loggerService: LoggerService ) {
    this._endPoint = environment.contactServiceEndpoint;
  }

  getContacts(): Observable<Contact[]> {
      return this.http.get<Contact[]>(this._endPoint);
  }

  getContact(id: number): Observable<Contact> {
    const url = `${this._endPoint}/${id}`;
    return this.http.get<Contact>(url);
  }

  createContact(contact: Contact): Observable<Contact> {
    return this.http.post<Contact>(this._endPoint, contact);
  }

  updateContact(contact: Contact): Observable<Contact> {
    return this.http.put<Contact>(this._endPoint, contact);
  }

  deleteContact(contact: Contact | number): Observable<Contact> {
    const id = typeof contact === 'number' ? contact : contact.id;
    const url = `${this._endPoint}/${id}`;
    return this.http.delete<Contact>(url);
  }
}
