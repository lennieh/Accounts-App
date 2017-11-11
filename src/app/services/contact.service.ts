import { Injectable }           from '@angular/core';
import { HttpClient }           from '@angular/common/http';
import { Observable }           from 'rxjs/Observable';

import { environment }          from '../../environments/environment';
import { LoggerService }        from '../core/services/logger.service';
import { HttpCacheService }     from '../core/services/http-cache.service';

import { Contact }              from '../model/contact';

@Injectable()
export class ContactService  {

  private _endPoint;

  constructor(
    private http: HttpClient,
    private httpCache: HttpCacheService,
    private loggerService: LoggerService ) {
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
    this.httpCache.invalidate(this._endPoint);
    return this.http.post<Contact>(this._endPoint, contact);
  }

  updateContact(contact: Contact): Observable<Contact> {
    this.httpCache.invalidate(this._endPoint);
    return this.http.put<Contact>(this._endPoint, contact);
  }

  deleteContact(contact: Contact | number): Observable<Contact> {
    this.httpCache.invalidate(this._endPoint);
    const id = typeof contact === 'number' ? contact : contact.id;
    const url = `${this._endPoint}/${id}`;
    return this.http.delete<Contact>(url);
  }
}
