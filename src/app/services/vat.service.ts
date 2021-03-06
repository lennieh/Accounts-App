import { Injectable }     from '@angular/core';
import { HttpClient }     from '@angular/common/http';
import { Observable }     from 'rxjs/Observable';

import { environment }    from '../../environments/environment';
import { HttpCacheService }   from '../core/services/http-cache.service';

import { Vat }            from '../model/vat';

@Injectable()
export class VatService {

  _endPoint: string;

  constructor(
    private http: HttpClient,
    private httpCache: HttpCacheService ) {
    this._endPoint = environment.vatServiceEndpoint;
  }

  getVats(): Observable<Vat[]> {
    return this.http.get<Vat[]>(this._endPoint);
  }

  getVat(id: number): Observable<Vat> {
    const url = `${this._endPoint}/${id}`;
    return this.http.get<Vat>(url);
  }

  createVat(vat: Vat): Observable<Vat> {
    this.httpCache.invalidate(this._endPoint);
    return this.http.post<Vat>(this._endPoint, vat);
  }

  updateVat(vat: Vat): Observable<Vat> {
    this.httpCache.invalidate(this._endPoint);
    return this.http.put<Vat>(this._endPoint, vat);
  }

  deleteVat(vat: Vat | number): Observable<Vat> {
    this.httpCache.invalidate(this._endPoint);
    const id = typeof vat === 'number' ? vat : vat.id;
    const url = `${this._endPoint}/${id}`;
    return this.http.delete<Vat>(url);
  }

}
