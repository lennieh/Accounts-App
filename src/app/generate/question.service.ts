import { Injectable }     from '@angular/core';
import { HttpClient }     from '@angular/common/http';
import { Observable }     from 'rxjs/Observable';

import { environment }    from '../../environments/environment';

import { QuestionBase }   from './model/question-base';

@Injectable()
export class QuestionService {

  _endPoint: string;

  constructor(private http: HttpClient ) {
    this._endPoint = environment.questionServiceEndpoint;
  }

   getQuestions(): Observable<QuestionBase<any>[]> {
      return this.http.get<QuestionBase<any>[]>(this._endPoint);
   }
}
