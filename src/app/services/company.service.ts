import { Injectable }           from '@angular/core';
import { HttpClient }           from '@angular/common/http';
import { Observable }           from 'rxjs/Observable';

import { environment }          from '../../environments/environment';
import { HttpCacheService }     from '../core/services/http-cache.service';

import { Company }              from '../model/company';

@Injectable()
export class CompanyService {

  private _endPoint;

  constructor(
    private http: HttpClient,
    private httpCache: HttpCacheService) {
    this._endPoint = environment.companyServiceEndpoint;
  }

  getCompanies(): Observable<Company[]> {
    return this.http.get<Company[]>(this._endPoint);
  }

  getCompany(id: number): Observable<Company> {
    const url = `${this._endPoint}/${id}`;
    return this.http.get<Company>(url);
  }

  createCompany(company: Company): Observable<Company> {
    this.httpCache.invalidate(this._endPoint);
    return this.http.post<Company>(this._endPoint, company);
  }

  updateCompany(company: Company): Observable<Company> {
    this.httpCache.invalidate(this._endPoint);
    return this.http.put<Company>(this._endPoint, company);
  }

  deleteCompany(company: Company | number): Observable<Company> {
    this.httpCache.invalidate(this._endPoint);
    const id = typeof company === 'number' ? company : company.id;
    const url = `${this._endPoint}/${id}`;
    return this.http.delete<Company>(url);
  }

}
