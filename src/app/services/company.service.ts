import { Injectable }           from '@angular/core';

import { HttpClient }           from '@angular/common/http';
import { environment }          from '../../environments/environment';

import { LoggerService }        from '../core/logger.service';
import { ToasterService }       from 'angular2-toaster';

import { Observable }           from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { Company }              from '../model/company';

@Injectable()
export class CompanyService {

  private _endPoint;

  constructor(
    private http: HttpClient,
    private loggerService: LoggerService) {
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
    return this.http.post<Company>(this._endPoint, company);
  }

  updateCompany(company: Company): Observable<Company> {
    return this.http.put<Company>(this._endPoint, company);
  }

  deleteCompany(company: Company | number): Observable<Company> {
    const id = typeof company === 'number' ? company : company.id;
    const url = `${this._endPoint}/${id}`;
    return this.http.delete<Company>(url);
  }

}
