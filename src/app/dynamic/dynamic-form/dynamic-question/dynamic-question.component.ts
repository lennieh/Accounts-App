import { Component, Input, OnInit } from '@angular/core';
import { FormGroup }                from '@angular/forms';

import { QuestionBase }             from '../../model/question-base';
import { TextboxQuestion }          from '../../model/question-textbox';

@Component({
  selector: 'app-df-question',
  templateUrl: './dynamic-question.component.html',
  styleUrls: ['./dynamic-question.component.scss']
})
export class DynamicQuestionComponent implements OnInit {
  @Input() question: QuestionBase<any>;
  @Input() form: FormGroup;

  constructor() {
  }

  ngOnInit() {
    if ( this.question.controlType === 'textbox') {
      const question = this.question as TextboxQuestion;
      if ( question.case !== null ) {
        this.setCase(question.case);
      }
    }
  }

  get isValid() {
    return this.form.controls[this.question.key].valid;
  }

  get isPristine() {
    return this.form.controls[this.question.key].pristine;
  }

  get errors() {
    return this.form.controls[this.question.key].errors;
  }

  setCase(fldCase: string) {
    const thisControl = this.form.controls[this.question.key];

    thisControl.valueChanges.forEach(
      (value: string) => {
        let newVal: string;
        if ( fldCase === 'upper') {
          newVal = value.toUpperCase();
        } else if ( fldCase === 'lower' ) {
          newVal = value.toLowerCase();
        } else if ( fldCase === 'upperFirst') {
          newVal = value.substring(0, 1).toUpperCase().concat(value.substring(1));
        }

        if ( newVal !== value) {
          thisControl.patchValue(newVal);
        }
      }
    );
  }
}
