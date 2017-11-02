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

      const validators = question.required ? [Validators.required] : [];

      const textQuestion = question as TextboxQuestion;
      if ( textQuestion !== undefined ) {

        if ( textQuestion.minLength !== null ) {
          validators.push(Validators.minLength(textQuestion.minLength));
        }

        if ( textQuestion.maxLength !== null ) {
          validators.push(Validators.maxLength(textQuestion.maxLength));
        }
      }

      group[question.key] = new FormControl(question.value || '', validators);

    });
    return new FormGroup(group);
  }
}
