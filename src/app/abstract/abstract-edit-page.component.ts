import { Location }                 from '@angular/common';
import { Toast, ToasterService }    from 'angular2-toaster';
import { FriendlyError }            from '../model/friendly-error';

import { QuestionService }          from '../generate/question.service';
import { QuestionBase }             from '../generate/model/question-base';

import { AbstractPage }             from './abstract-page.component';

export abstract class AbstractEditPage extends AbstractPage
{
  questions: QuestionBase<any>[];
  protected formName: string;

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