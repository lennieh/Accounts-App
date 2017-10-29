import { Injectable }     from '@angular/core';
import { HttpClient }     from '@angular/common/http';
import { Observable }     from 'rxjs/Observable';

import { environment }    from '../../environments/environment';

import { FormQuestions }   from './model/form-questions';

@Injectable()
export class QuestionService {

  _endPoint: string;

  constructor(private http: HttpClient ) {
    this._endPoint = environment.questionServiceEndpoint;
  }

   getQuestions(formName: string): Observable<FormQuestions[]> {
      return this.http.get<FormQuestions[]>(`${this._endPoint}?formName=${formName}`);
   }
}
