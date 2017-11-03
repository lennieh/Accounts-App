import { Injectable }                         from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { QuestionBase }                       from './model/question-base';
import { TextboxQuestion }                    from './model/question-textbox';

import { minValueValidator }                  from './validators/number-validator';
import { maxValueValidator }                  from './validators/number-validator';

@Injectable()
export class QuestionControlService {
  constructor() { }

  toFormGroup(questions: QuestionBase<any>[] ) {
    const group: any = {};

    questions.forEach(question => {

      const validators = question.required ? [Validators.required] : [];

      if ( question.controlType === 'textbox' ) {

        const textQuestion = question as TextboxQuestion;

        if ( textQuestion.minLength !== null ) {
          validators.push(Validators.minLength(textQuestion.minLength));
        }

        if ( textQuestion.maxLength !== null ) {
          validators.push(Validators.maxLength(textQuestion.maxLength));
        }

        if ( textQuestion.minValue !== null ) {
          validators.push(minValueValidator(textQuestion.minValue));
        }

        if ( textQuestion.maxValue !== null ) {
          validators.push(maxValueValidator(textQuestion.maxValue));
        }
      }

      group[question.key] = new FormControl(question.value || '', validators);

    });
    return new FormGroup(group);
  }
}
