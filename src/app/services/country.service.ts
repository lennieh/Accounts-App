import { Injectable }         from '@angular/core';
import { HttpClient }         from '@angular/common/http';
import { Observable }         from 'rxjs/Observable';

import { environment }        from '../../environments/environment';
import { HttpCacheService }   from '../core/services/http-cache.service';

import { Country }            from '../model/country';

@Injectable()
export class CountryService {

  _endPoint: string;

  constructor(
    private http: HttpClient,
    private httpCache: HttpCacheService ) {
    this._endPoint = environment.countryServiceEndpoint;
  }

  getCountries(): Observable<Country[]> {
    return this.http.get<Country[]>(this._endPoint);
  }

  getCountry(id: number): Observable<Country> {
    this.httpCache.invalidate(this._endPoint);
    const url = `${this._endPoint}/${id}`;
    return this.http.get<Country>(url);
  }

  createCountry(country: Country): Observable<Country> {
    this.httpCache.invalidate(this._endPoint);
    return this.http.post<Country>(this._endPoint, country);
  }

  updateCountry(country: Country): Observable<Country> {
    this.httpCache.invalidate(this._endPoint);
    return this.http.put<Country>(this._endPoint, country);
  }

  deleteCountry(country: Country | number): Observable<Country> {
    this.httpCache.invalidate(this._endPoint);
    const id = typeof country === 'number' ? country : country.id;
    const url = `${this._endPoint}/${id}`;
    return this.http.delete<Country>(url);
  }

}
