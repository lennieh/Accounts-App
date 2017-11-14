import { Location }                 from '@angular/common';
import { Toast, ToasterService }    from 'angular2-toaster';
import { FriendlyError }            from '../model/friendly-error';

import { QuestionService }          from '../dynamic/services/question.service';
import { QuestionBase }             from '../dynamic/model/question-base';

import { AbstractPageComponent }    from './abstract-page.component';

export abstract class AbstractEditPageComponent extends AbstractPageComponent {
  questions: QuestionBase<any>[];
  protected formName: string;
  protected saving = false;

  constructor(
    private questionService: QuestionService,
    private location: Location,
    toasterService: ToasterService) {
      super(toasterService);
    }

  protected getQuestions() {
    this.loading = true;

    this.questionService.getQuestions(this.formName)
    .subscribe(
      data => {
        this.loading = false;
        this.questions = data[0].questions;
      },
      error => {
        this.loading = false;
        this.HandleError(`${this.formName} Questions`, error );
      }
    );
  }

  protected goBack() {
    this.location.back();
  }
}
