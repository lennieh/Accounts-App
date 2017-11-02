import { Injectable }                         from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { QuestionBase }                       from './model/question-base';
import { TextboxQuestion }                    from './model/question-textbox';

@Injectable()
export class QuestionControlService {
  constructor() { }

  toFormGroup(questions: QuestionBase<any>[] ) {
    const group: any = {};

    questions.forEach(question => {

      group[question.key] = question.required
        ? new FormControl(question.value || '', [Validators.required])
        : new FormControl(question.value || '', []);

      if ( question instanceof TextboxQuestion ) {

        if ( question.minLength !== null ) {
          group[question.key].Validators.push(Validators.minLength(question.minLength));
        }

        if ( question.maxLength !== null ) {
          group[question.key].Validators.push(Validators.maxLength(question.maxLength));
        }
      }

    });
    return new FormGroup(group);
  }
}
